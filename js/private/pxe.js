$(document).ready(function () {
	const windows_xml = `<?xml version="1.0" encoding="utf-8"?>
		<unattend xmlns="urn:schemas-microsoft-com:unattend">
			<settings pass="windowsPE">
				<component name="Microsoft-Windows-International-Core-WinPE" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
					<SetupUILanguage>
						<UILanguage>zh-CN</UILanguage>
					</SetupUILanguage>
					<InputLocale>zh-CN</InputLocale>
					<UILanguage>zh-CN</UILanguage>
					<SystemLocale>zh-CN</SystemLocale>
					<UserLocale>zh-CN</UserLocale>
				</component>
				<component name="Microsoft-Windows-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
					<DiskConfiguration>
						!!disk_partition!!
					</DiskConfiguration>
					<ImageInstall>
						<OSImage>
							<InstallFrom>
								<MetaData wcm:action="add">
									<Key>/IMAGE/NAME</Key>
									<Value>!!os_name!!</Value>
								</MetaData>
							</InstallFrom>
							<InstallTo>
								!!os_inside!!
							</InstallTo>
						</OSImage>
					</ImageInstall>

					<UserData>
						<AcceptEula>true</AcceptEula>
						<FullName>-</FullName>
						<Organization>-</Organization>
						!!os_license!!
					</UserData>
				</component>
			</settings>
			<settings pass="specialize">
				<component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
					<ComputerName>!!os_hostname!!</ComputerName>
					<TimeZone>China Standard Time</TimeZone>
					<RegisteredOrganization>-</RegisteredOrganization>
				</component>
			</settings>
			<settings pass="oobeSystem">
				<component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
					<OOBE>
						<HideEULAPage>true</HideEULAPage>
						<NetworkLocation>Work</NetworkLocation>
						<ProtectYourPC>3</ProtectYourPC>
						<SkipMachineOOBE>true</SkipMachineOOBE>
						<SkipUserOOBE>true</SkipUserOOBE>
					</OOBE>
					!!os_auto_login!!
					<UserAccounts>
						<AdministratorPassword>
							!!os_admin_password!!
							<PlainText>true</PlainText>
						</AdministratorPassword>
					</UserAccounts>
					<RegisteredOrganization>-</RegisteredOrganization>
					<RegisteredOwner>-</RegisteredOwner>
				</component>
			</settings>
		</unattend>`;

	window.formatXML = function (xml) {
		let formatted = "", indent = "";
		let tab = "\t";
		xml.split(/>\s*</).forEach(function (node) {
			if (node.match(/^\/\w/)) indent = indent.substring(tab.length);
			formatted += indent + "<" + node + ">\r\n";
			if (node.match(/^<?\w[^>]*[^\/]$/)) indent += tab;
		});
		return formatted.substring(1, formatted.length - 3);
	}

	$("#selct_os_type").change(function () {
		let os_type = this.value;		// 操作系统类型，windows / linux / vsphere
		if(os_type != "0") {
			$("#select_os_version").empty();
			$("#select_os_version").append(new Option(" ", "0"));
			$("#lb_os_version").fadeIn(500);
			$("#select_os_version").fadeIn(500);

			if(os_type == "1") {	// windows系统
				$("#select_os_version").append(new Option("Windows Server 2012", "Windows Server 2012"));
				$("#select_os_version").append(new Option("Windows Server 2012 R2", "Windows Server 2012 R2"));
				$("#select_os_version").append(new Option("Windows Server 2016", "Windows Server 2016"));
				$("#select_os_version").append(new Option("Windows Server 2019", "Windows Server 2019"));
				$("#select_os_version").append(new Option("Windows Server 2022", "Windows Server 2022"));
				$("#select_os_version").append(new Option("Windows 10", "Windows 10"));
				$("#select_os_version").append(new Option("Windows 11", "Windows 11"));
			}

			if(os_type == "2") {	// linux系统
				$("#select_os_version").append(new Option("RHEL7", "RHEL7"));
				$("#select_os_version").append(new Option("RHEL8", "RHEL8"));
				$("#select_os_version").append(new Option("RHEL8", "RHEL8"));
			}

			if(os_type == "3") {	// vsphere系统
				$("#select_os_version").append(new Option("vSphere 6.5", "vSphere65"));
				$("#select_os_version").append(new Option("vSphere 6.7", "vSphere65"));
				$("#select_os_version").append(new Option("vSphere 7", "vSphere7"));
				$("#select_os_version").append(new Option("vSphere 8", "vSphere8"));
			}
		}
	});

	$("#select_os_version").change(function () {
		let os_version = this.value;	// 系统类型，在上面定义
		if (os_version != "0") {
			$("#select_os_kind").empty();
			$("#select_os_kind").append(new Option(" ", "0"));

			$("#lb_os_kind").fadeIn(500);
			$("#select_os_kind").fadeIn(500);

			$("#lb_os_hostname").fadeIn(500);
			$("#input_os_hostname").fadeIn(500);

			$("#lb_partition").fadeIn(500);
			$("#select_partition").fadeIn(500);

			$("#lb_install").fadeIn(500);
			$("#select_install").fadeIn(500);

			$("#btn_generate").fadeIn(500);

			if (											// 服务器系统
				os_version == "Windows Server 2012" ||
				os_version == "Windows Server 2012 R2" ||
				os_version == "Windows Server 2016" ||
				os_version == "Windows Server 2019" ||
				os_version == "Windows Server 2022"
			) {												// 某个系统的版本
				$("#select_os_kind").append(new Option("标准版（核心安装）", "SERVERSTANDARDCORE"));
				$("#select_os_kind").append(new Option("标准版（带GUI）", "SERVERSTANDARD"));
				$("#select_os_kind").append(new Option("数据中心版（核心安装）", "SERVERDATACENTERCORE"));
				$("#select_os_kind").append(new Option("数据中心版（带GUI）", "SERVERDATACENTER"));

				$("#lb_os_password").fadeIn(500);
				$("#input_os_password").fadeIn(500);

				$("#div_is_auto_login").fadeOut(500);
				$("#checkbox_is_auto_login").attr("checked", false);
				$("#input_os_password").removeAttr("disabled");
			}

			if (os_version == "Windows 10" || os_version == "Windows 11") {		// PC系统
				$("#select_os_kind").append(new Option("企业版", "Enterprise"));	// 某个系统的版本
				$("#select_os_kind").append(new Option("教育版", "Education"));
				$("#select_os_kind").append(new Option("专业版", "Pro"));
				$("#select_os_kind").append(new Option("专业教育版", "Pro Education"));
				$("#select_os_kind").append(new Option("专业工作站版", "Pro For Workstations"));

				$("#div_is_auto_login").fadeIn(500);
				$("#checkbox_is_auto_login").attr("checked", true);
				$("#input_os_password").fadeIn(500);
				$("#input_os_password").attr("disabled", "disabled");
			}
		}
	});

	$("#checkbox_is_auto_login").change(function () {
		if ($(this).is(":checked")) {	// 是否自动登录，true/false
			$("#input_os_password").attr("disabled", "disabled");
		}
		else {
			$("#input_os_password").removeAttr("disabled");
		}
	});

	$("#select_install").change(function () {
		let select_install = this.value;	// 安装方式，直接安装在对应分区， 或格式化第一块硬盘安装

		if (select_install == "1") {	// 格式化第一块硬盘安装，选择系统分区大小，100G，或完整使用第一块硬盘
			$("#lb_partition_install").fadeIn(500);
			$("#select_partition_install").fadeIn(500);
		}
		else {
			$("#lb_partition_install").fadeOut(500);
			$("#select_partition_install").fadeOut(500);
		}
	});

	$("#btn_generate").click(function () {
		let os_type = $("#selct_os_type").val();
		if (os_type == "1") {	// windows系统
			let widnows_version = $("#select_os_version").val();
			let widnows_kind = $("#select_os_kind").val();

			let windows_file = windows_xml.replace("!!os_name!!", widnows_version + " " + widnows_kind);

			switch (widnows_version) {		// windows server 2012/2012 R2/2016需要密钥才能安装
				case "Windows Server 2012":
					if (widnows_kind == "SERVERSTANDARDCORE" || widnows_kind == "SERVERSTANDARD") {	// 标准版
						windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>VDNYM-JBKJ7-DC4X9-BT3QR-JHRGY</Key></ProductKey>");
					}

					if (widnows_kind == "SERVERDATACENTERCORE" || widnows_kind == "SERVERDATACENTER") {	// 数据中心版
						windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>BH9T4-4N7CW-67J3M-64J36-WW98Y</Key></ProductKey>");
					}

					break;

				case "Windows Server 2012 R2":
					if (widnows_kind == "SERVERSTANDARDCORE" || widnows_kind == "SERVERSTANDARD") {	// 标准版
						windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>78NJB-CB3WX-GWPCM-VMKG7-94QWW</Key></ProductKey>");
					}

					if (widnows_kind == "SERVERDATACENTERCORE" || widnows_kind == "SERVERDATACENTER") {	// 数据中心版
						windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>TVNTG-VFJQ3-FQXFP-DVCP6-D3VJ8</Key></ProductKey>");
					}

					break;

				case "Windows Server 2016":
					if (widnows_kind == "SERVERSTANDARDCORE" || widnows_kind == "SERVERSTANDARD") {	// 标准版
						windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>P96NB-8TJQB-BW47F-TQRMX-T839R</Key></ProductKey>");
					}

					if (widnows_kind == "SERVERDATACENTERCORE" || widnows_kind == "SERVERDATACENTER") {	// 数据中心版
						windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>6CNGG-BJP34-H923Y-6DMWR-37BMF</Key></ProductKey>");
					}

					break;

				default:
					windows_file = windows_file.replace("!!os_license!!", "");
			}

			if ($("#checkbox_is_auto_login").is(":checked")) {
				// 自动登录，不设置密码
				windows_file = windows_file.replace("!!os_admin_password!!", "<Value/>");
				windows_file = windows_file.replace("!!os_auto_login!!", "<AutoLogon><Password><Value/>\<PlainText>true</PlainText></Password><Enabled>true</Enabled><Username>Administrator</Username></AutoLogon>");
			}
			else {
				// 设置密码，手动登录
				windows_file = windows_file.replace("!!os_admin_password!!", "<Value>" + $("#input_os_password").val().trim() + "</Value>");
				windows_file = windows_file.replace("!!os_auto_login!!", "");
			}

			windows_file = windows_file.replace("!!os_hostname!!", $("#input_os_hostname").val().trim());

			let partition_xml = "";
			let os_install_xml = "";

			let partition_type = $("#select_partition").val();

			if (partition_type == "1") {	// GPT分区需要创建100M的EFI分区，第2个分区安装系统
											// 硬盘从0开始，分区从1开始
				os_install_xml = "<DiskID>0</DiskID><PartitionID>2</PartitionID>";
			}

			if (partition_type == "2") {	// MBR可直接安装系统
				os_install_xml = "<DiskID>0</DiskID><PartitionID>1</PartitionID>";
			}

			let partition = $("#select_install").val();	// 安装方式，格式化第一块硬盘安装，或仅格式化安装分区

			if (partition == "1") {		// 格式化第一块硬盘安装
				let partition_size = $("#select_partition_install").val();

				if (partition_type == "1" && partition_size == "1") {	// GPT分区，第一块硬盘划分100G
					partition_xml = `
						<Disk wcm:action="add">
							<DiskID>0</DiskID>
							<WillWipeDisk>true</WillWipeDisk>
							<CreatePartitions>
								<CreatePartition wcm:action="add">
									<Size>100</Size>
									<Order>1</Order>
									<Type>EFI</Type>
								</CreatePartition>
								<CreatePartition wcm:action="add">
									<Size>102400</Size>
									<Order>2</Order>
									<Type>Primary</Type>
								</CreatePartition>
							</CreatePartitions>
							<ModifyPartitions>
								<ModifyPartition wcm:action="add">
									<Format>FAT32</Format>
									<Order>1</Order>
									<PartitionID>1</PartitionID>
								</ModifyPartition>
								<ModifyPartition wcm:action="add">
									<Format>NTFS</Format>
									<Order>2</Order>
									<PartitionID>2</PartitionID>
								</ModifyPartition>
							</ModifyPartitions>
						</Disk>
					`;
				}
				
				if (partition_type == "1" && partition_size == "2") {	// GPT分区，第一块硬盘全部
					partition_xml = `
						<Disk wcm:action="add">
							<DiskID>0</DiskID>
							<WillWipeDisk>true</WillWipeDisk>
							<CreatePartitions>
								<CreatePartition wcm:action="add">
									<Size>100</Size>
									<Order>1</Order>
									<Type>EFI</Type>
								</CreatePartition>
								<CreatePartition wcm:action="add">
									<Extend>true</Extend>
									<Order>2</Order>
									<Type>Primary</Type>
								</CreatePartition>
							</CreatePartitions>
							<ModifyPartitions>
								<ModifyPartition wcm:action="add">
									<Format>FAT32</Format>
									<Order>1</Order>
									<PartitionID>1</PartitionID>
								</ModifyPartition>
								<ModifyPartition wcm:action="add">
									<Format>NTFS</Format>
									<Order>2</Order>
									<PartitionID>2</PartitionID>
								</ModifyPartition>
							</ModifyPartitions>
						</Disk>
					`;
				}

				if (partition_type == "2" && partition_size == "1") {	// MBR分区，第一块硬盘全部
					partition_xml = `
						<Disk wcm:action="add">
							<DiskID>0</DiskID>
							<WillWipeDisk>true</WillWipeDisk>
							<CreatePartitions>
								<CreatePartition wcm:action="add">
									<Extend>true</Extend>
									<Order>1</Order>
									<Type>Primary</Type>
								</CreatePartition>
							</CreatePartitions>
							<ModifyPartitions>
								<ModifyPartition wcm:action="add">
									<Active>true</Active>
									<Format>NTFS</Format>
									<Order>1</Order>
									<PartitionID>1</PartitionID>
								</ModifyPartition>
							</ModifyPartitions>
						</Disk>
					`;
				}

				if (partition_type == "2" && partition_size == "2") {	// MBR分区，第一块硬盘划分100G
					partition_xml = `
						<Disk wcm:action="add">
							<DiskID>0</DiskID>
							<WillWipeDisk>true</WillWipeDisk>
							<CreatePartitions>
								<CreatePartition wcm:action="add">
									<Size>100</Size>
									<Order>1</Order>
									<Type>EFI</Type>
								</CreatePartition>
								<CreatePartition wcm:action="add">
									<Extend>true</Extend>
									<Order>2</Order>
									<Type>Primary</Type>
								</CreatePartition>
							</CreatePartitions>
							<ModifyPartitions>
								<ModifyPartition wcm:action="add">
									<Format>FAT32</Format>
									<Order>1</Order>
									<PartitionID>1</PartitionID>
								</ModifyPartition>
								<ModifyPartition wcm:action="add">
									<Format>NTFS</Format>
									<Order>2</Order>
									<PartitionID>2</PartitionID>
								</ModifyPartition>
							</ModifyPartitions>
						</Disk>
					`;
				}
			}

			if (partition == "2") {	// 仅格式化安装分区
				if (partition_type == "1") {	// GPT分区
					partition_xml = `
						<Disk wcm:action="add">
							<DiskID>0</DiskID>
							<ModifyPartitions>
								<ModifyPartition wcm:action="add">
									<Format>NTFS</Format>
									<Order>1</Order>
									<PartitionID>2</PartitionID>
								</ModifyPartition>
							</ModifyPartitions>
						</Disk>
					`
				}

				if (partition_type == "2") {	// MBR分区
					partition_xml = `
						<Disk wcm:action="add">
							<DiskID>0</DiskID>
							<ModifyPartitions>
								<ModifyPartition wcm:action="add">
									<Format>NTFS</Format>
									<Order>1</Order>
									<PartitionID>1</PartitionID>
								</ModifyPartition>
							</ModifyPartitions>
						</Disk>
					`
				}
			}

			windows_file = windows_file.replace("!!disk_partition!!", partition_xml);
			windows_file = windows_file.replace("!!os_inside!!", os_install_xml);
			windows_file = formatXML(windows_file);

			$("#txt_auto_install").val(windows_file);
			$("#txt_auto_install").fadeIn(500);
			$("#btn_download").fadeIn(500);
			$("#btn_copy").fadeIn(500);
		}
	});

	$("#btn_copy").click(function () {
		let auto_txt = $("#txt_auto_install").val();
		const textarea = document.createElement('textarea');	// 直接构建textarea，为了实现换行，需要创建textarea，如果用input的话，实现不了换行。」
		textarea.value = auto_txt;					// 设置内容
		document.body.appendChild(textarea);		// 添加临时实例
		textarea.select();							// 选择实例内容
		document.execCommand('Copy');				// 执行复制
		document.body.removeChild(textarea);		// 删除临时实例

		$(".copySuccess").fadeIn(500);	// 显示复制成功的div是下一项元素，经历0.5s逐渐显示，等待1s后，经历0.5s逐渐消失
		setTimeout(function () {
			$(".copySuccess").fadeOut(500)
		}, 1000);
	});


	$("#btn_download").click(function () {
		let auto_txt = $("#txt_auto_install").val();
		let a_down = document.createElement('a');
		a_down.href = 'data:text/plain;charset=utf-8,' + auto_txt;
		a_down.download = "auto_install.xml";
		document.body.appendChild(a_down);
		a_down.click();
		document.body.removeChild(a_down);
	});

	$("textarea").mousemove(function(e) {
		const isOnVerticalScrollbar = e.offsetX > this.clientWidth; // 检查是否在垂直滚动条上
		const isOnHorizontalScrollbar = e.offsetY > this.clientHeight; // 检查是否在水平滚动条上

		if (isOnVerticalScrollbar || isOnHorizontalScrollbar) {
			this.style.cursor = "default";
		} else {
			this.style.cursor = "text";
		}
	});
});