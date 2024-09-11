// 生成的base64不换行，每64个字符，换行一次
function line64words(str) {
	let result = "";
	for (let i = 0; i < str.length; i = i + 64) {
		result = result + str.slice(i, i + 64) + "\n";
	}
	return result;
}

function arrayBufferToString(buffer) {
	return String.fromCharCode.apply(null, new Uint8Array(buffer));
}

async function extractCertificatesAndKey(file, cert_passowrd) {
	let arrayBuffer = await file.arrayBuffer();
	let p12Der = arrayBufferToString(arrayBuffer);

	try {
		let p12Asn1 = forge.asn1.fromDer(p12Der);
		let p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, cert_passowrd);

		let personalCertificate = null;
		let caCertificates = [];
		let privateKey = null;

		// 遍历所有的安全包
		p12.safeContents.forEach(function(safeContent) {
			safeContent.safeBags.forEach(function(safeBag) {
				// 提取私钥并加密
				if (safeBag.key) {
					privateKey = forge.pki.encryptRsaPrivateKey(safeBag.key, cert_passowrd, {
						algorithm: "aes256",
						prfAlgorithm: "sha256"
					});
				}

				// 检查是否为证书
				if (safeBag.cert && safeBag.cert.subject) {
					const cert = safeBag.cert;

					// 判断是否为 CA 证书
					const isCA = cert.extensions.some(ext => ext.name === "basicConstraints" && ext.cA);

					if (isCA) {
						// 将 CA 证书添加到 CA 列表
						caCertificates.push(forge.pki.certificateToPem(cert));
					}
					else {
						// 非 CA 证书且可能与私钥关联的证书为个人证书
						personalCertificate = forge.pki.certificateToPem(cert);
					}
				}
			});
		});

		// 如果没有找到明确的 CA 证书，并且只找到一个证书，则该证书是个人证书
		if (!personalCertificate && privateKey && caCertificates.length === 1) {
			personalCertificate = caCertificates.pop(); // 把唯一的证书当作个人证书
		}

		if (personalCertificate && privateKey) {
			// console.log(caCertificates)
			if(caCertificates.length > 0) {
				$("#txt_root").val(caCertificates);
				$("#txt_root").attr("rows", "6");
			}
			else {
				$("#txt_root").val("未找到根证书");
				$("#txt_root").attr("rows", "1");
			}

			$("#txt_personal").val(personalCertificate);
			$("#txt_primary_key").val(privateKey);
			$("#isEncry").prop("checked", true);
		}
		else {
			throw new Error("Personal certificate or private key not found.");
		}
	}
	catch (error) {
		console.error("Error extracting certificates and private key:", error);
	}
}

async function extractCert() {
	try {
		let cert_passowrd = $(".txt_password").val();
		let file = $("#file")[0].files[0];;
		await extractCertificatesAndKey(file, cert_passowrd);
	}
	catch (error) {
		console.log("Failed to extract certificates and key: " + error.message);
	}
}

function exP12Cert() {
	let personalCertPem = $("txt_personal").val();
	let privateKeyPem = $("txt_primary_key").val();
	let privateKeyPassword = $("password_private_key").val();
	let rootCertPem = $("txt_root").val();
	let password = $("password_p12").val();

	try {
		// Convert PEM to forge objects
		let personalCert = forge.pki.certificateFromPem(personalCertPem);
		let privateKey;

		if (privateKeyPassword) {
			// Attempt to decrypt the private key using the provided password
			privateKey = forge.pki.decryptRsaPrivateKey(privateKeyPem, privateKeyPassword);
			if (!privateKey) {
				throw new Error("Failed to decrypt private key with the provided password.");
			}
		}
		else {
			// Assume the private key is not encrypted
			privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
		}

		let rootCerts = rootCertPem ? [forge.pki.certificateFromPem(rootCertPem)] : [];

		// Create a new PKCS#12 object
		let p12Asn1 = forge.pkcs12.toPkcs12Asn1(privateKey, [personalCert].concat(rootCerts), password, {
			algorithm: '3des' // 3DES encryption
		});

		// Convert ASN.1 to DER
		let p12Der = forge.asn1.toDer(p12Asn1).getBytes();

		// Encode the DER data as Base64
		let p12Base64 = forge.util.encode64(p12Der);

		// Display the Base64-encoded P12 file
		// document.getElementById('p12Base64').value = p12Base64;

		// Create a Blob for downloading
		let p12Blob = new Blob([new Uint8Array(p12Der.split("").map(c => c.charCodeAt(0)))], { type: 'application/x-pkcs12' });

		// Create a temporary link element and trigger the download
		let downloadLink = document.createElement('a');
		downloadLink.href = URL.createObjectURL(p12Blob);
		downloadLink.download = 'certificate.p12';
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	}
	catch (error) {
		console.error('Error creating P12 file:', error);
	}
}

$(document).ready(function () {
	let label = $("#file").next();
	let labelVal = label.html();

	$("#file").change(function (e) {
		let fileName = "";
		if (this.files && this.files.length > 1) {
			fileName = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length);
		}
		else {
			fileName = e.target.value.split("\\").pop();
		}

		if (fileName) {
			label.find("span").html(fileName);
		}
		else {
			label.html(labelVal);
		}

		if(window.location.href.indexOf("guide/class/netdevops/pki/certs_edit3") != -1) {
			let file = $("#file")[0].files[0];
			let reader = new FileReader();

			reader.onload = function(e) {
				// 当文件读取完成后，e.target.result将包含文件的二进制字符串
				$("#txt_p12_base64").val(line64words(btoa(e.target.result)));
			};

			// 以二进制字符串形式读取文件
			reader.readAsBinaryString(file);
		}
	});


	// input.addEventListener( "focus", function(){ input.classList.add( "has-focus" ); });
	// input.addEventListener( "blur", function(){ input.classList.remove( "has-focus" ); });
	$("#file").focus(function () {
		$(this).addClass("has-focus");
	});

	$("#file").blur(function () {
		$(this).removeClass("has-focus");
	});

	$(".eye_password").click(function () {
		if($(this).prev().attr("type") == "password") {
			$(this).prev().attr("type", "text");
			$(this).removeClass("fa-eye");
			$(this).addClass("fa-eye-slash");
			$(this).css("right", "8.5px");
		}
		else {
			$(this).prev().attr("type", "password");
			$(this).addClass("fa-eye");
			$(this).removeClass("fa-eye-slash");
			$(this).css("right", "10px");
		}
	});

	$("#isEncry").change(function () {
		if($("#txt_primary_key").val().length != 0) {
			try {
				if($("#isEncry").prop("checked")) {	// 点击后状态
					// 将 PEM 格式的私钥解析为 node-forge 的私钥对象
					let privateKey = forge.pki.privateKeyFromPem($("#txt_primary_key").val());

					// 使用 AES-256 和 SHA-256 对私钥进行加密
					let encryptedKey = forge.pki.encryptRsaPrivateKey(privateKey,  $(".txt_password").val(), {
						algorithm: "aes256",
						prfAlgorithm: "sha256"
					});

					$("#txt_primary_key").val(encryptedKey);
				}
				else {
					let decryptedKey = forge.pki.decryptRsaPrivateKey($("#txt_primary_key").val(), $(".txt_password").val());
					$("#txt_primary_key").val(forge.pki.privateKeyToPem(decryptedKey));
				}
			}
			catch (error) {
				console.error("Error ecrypting or decrypting private key:", error);
				throw error;
			}
		}
	});
});