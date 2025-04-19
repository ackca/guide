function createNavigation(tree, offset = 74.5) {
	let uri = window.location.href.substring(window.location.href.indexOf("/guide"));
	let path_num = uri.split("/").length - 1 - 2;

	let firstT0 = Object.keys(tree)[0]; // 导航树中的第一个元素ID，也就是第一个instruT0
	// 顶部导航
	let htmlText = top_menu.replace(/rootpath\//g, "../".repeat(path_num));

	if (tree) {		// 包含左侧导航树的页面执行
		// 左侧导航树 <---- 开始 ---->
		htmlText = htmlText +
			"<aside class='main-sidebar'>\
				<section class='sidebar'>\
					<ul class='sidebar-menu'>" +
						createTree(tree) +	// 当左侧导航树内容较多时，即使滚动条无法完全显示，增加了两行不显示的占位内容
						"<li><a class='zw' cmd='zw'>&nbsp;</a></li>\
						 <li><a class='zw' cmd='zw'>&nbsp;</a></li>\
					</ul>\
				</section>\
				</aside>";
		// 左侧导航树 <---- 结束 ---->

		// 关闭/显示左侧导航按钮 <---- 开始 ---->
		htmlText = htmlText + `
			<div id="guide-icon">
				<div>
					<span class="open"></span>
					<span class="open"></span>
					<span class="open"></span>
				</div>
			</div>
		`;
		// 关闭/显示左侧导航按钮 <---- 结束 ---->

		if (uri.indexOf("/guide/class/protocol") >= 0) {
			offset = 160;
			// 浮动显示协议结构的div <---- 开始 ---->
			htmlText = htmlText + `
				<div id="divProtocol" protocolID="" class="divProtocol">
					<strong id="close">✕</strong>
					<div id="protocolImg" onmousedown="protocolMove()"></div>
				</div>
			`;
			// 浮动显示协议结构的div <---- 结束 ---->
		}

		if (uri.indexOf("/guide/class/anime/one_piece") >= 0) {
			offset = 162;
		}
	}
	document.write(htmlText);

	let body = `
		<script type="text/javascript" src="rootpath/js/top_menu.js"></script>
		<script type="text/javascript" src="rootpath/js/sidebar-menu.js"></script>
		<script type="text/javascript">
			$.sidebarMenu($(".sidebar-menu"), offset);
		</script>
	`
	document.write(body.replace(/rootpath\//g, "../".repeat(path_num)).replace("offset", offset));

	$(document).ready(function () {
		// 每个instruT0前都会有两个<br />，将第一个T0下移位置补回
		$("#" + firstT0).css("margin-top", "-49.5px");
		if (uri.indexOf("/guide/class/protocol") >= 0) {
			$("#divCommand").before("<div style='height: 135px'></div>");
		}
		else {
			$("#divCommand").before("<div style='height: 74px'></div>");
		}

		if (uri.indexOf("#") > 0) {
			// 以 DHCP Snooping 为例，#i10-2
			// ["#i10","2"]
			// 第一次："#i10"
			// 第二次："#i10-2"
			let linkID = uri.substring(uri.indexOf(("#")));
			let linkID_arr = linkID.split("-");
			let link = "";
			for (let i = 0; i < linkID_arr.length; i++) {
				link = link + linkID_arr[i];
				$("[cmd='" + link + "']").click();
				link = link + "-";
			}

			let alink = $("a[cmd='#i3-5']");
			if (alink.length > 0) {
				// 使用 jQuery 触发点击事件
				alink.trigger("click");
			}
		}
	});
}

function createTree(tree) {
	let htmlText = "";
	for (let key in tree) {
		htmlText = htmlText + "<li class='treeview'>";
		if (typeof tree[key] != "string") {
			htmlText = htmlText + "<a href='javascript:void(0)' cmd='#" + key + "'><i class='fa fa-folder'></i><span>";
			let key_next = "";
			for (let key_nexts in tree[key]) {
				key_next = key_nexts;
			}
			htmlText = htmlText + key_next +
				"</span><i class='fa fa-angle-left pull-right'></i></a><ul class='treeview-menu'>" +
				createTree(tree[key][key_next]) + "</ul>";
		}
		else {
			htmlText = htmlText + "<a href='javascript:void(0)' cmd='#" + key + "'>" +
				"<i class='fa-regular fa-file-lines'></i><span>" + tree[key] +
				"</span></a><ul class='treeview-menu'></ul>";
		}
		htmlText = htmlText + "</li>";
	}
	return htmlText
}

function createInstruT0(text, NO) {
	createInstru(text, NO, "instruT0");
}

function createInstruT1(text, NO) {
	createInstru(text, NO, "instruT1");
}

function createInstruT2(text, NO) {
	createInstru(text, NO, "instruT2");
}

function createInstruT3(text, NO) {
	createInstru(text, NO, "instruT3");
}

function createInstruKeyT0(text, NO) {
	text = addKeywords(text);
	createInstru(text, NO, "instruT0");
}

function createInstruKeyT1(text, NO) {
	text = addKeywords(text);
	createInstru(text, NO, "instruT1");
}

function createInstruKeyT2(text, NO) {
	text = addKeywords(text);
	createInstru(text, NO, "instruT2");
}

function createInstruKeyT3(text, NO) {
	text = addKeywords(text);
	createInstru(text, NO, "instruT3");
}

function addKeywords(text) {
	//Dockerfile、docker-compose文件关键词
	const DockerFileKeywords =
		"FROM|LABEL|RUN|WORKDIR|ADD|COPY|ENV|VOLUME|EXPOSE|CMD|ENTRYPOINT|" +
		"version|services|container_name|image|build|context|dockerfile|environment|ports|networks|" +
		"restart_policy|restart|depends_on|command|secrets|deploy|mode|replicated|global|replicas";

	let regLinuxCMD = new RegExp("((<br />)*)([^ ]+)( – .+)");
	text = text.replace(regLinuxCMD, "$1<span class='spanInstruKeyword'>$3</span>$4");

	let regInstruKeywords = new RegExp("(" + DockerFileKeywords + ")", "g");

	return text.replace(regInstruKeywords, "<span class='spanInstruKeyword'>$1</span>");
}

function createInstru(text, NO, instruT, isFirst) {
	text = addSpan(text);
	if (NO != null) {
		if (instruT == "instruT0") {
			document.writeln("<br /><br />");
		}

		let words = splitBR(text);
		document.writeln(words[0] + "<span class='" + instruT + "' id='" + NO + "'>" + words[1] + "</span>" + words[2]);
	}
	else {
		words = splitBR(text);
		document.writeln(words[0] + "<span class='" + instruT + "'>" + words[1] + "</span>" + words[2]);
	}
}

function createInstruAllTop(text, instruT) {
	let words = splitBR(addSpan(text));
	document.writeln(words[0] + "<span class='cmdInstruAllTop" + instruT + "'>" + words[1] + "</span>" + words[2]);
}

function createInstruAllBottom(text, instruT) {
	let words = splitBR(addSpan(text));
	document.writeln(words[0] + "<span class='cmdInstruAllBottom" + instruT + "'>" + words[1] + "</span>" + words[2]);
}

function createInstruAllTopT0(text, instruT) {
	createInstruAllTop(text, "T0");
}

function createInstruAllTopT1(text, instruT) {
	createInstruAllTop(text, "T1");
}

function createInstruAllTopT2(text, instruT) {
	createInstruAllTop(text, "T2");
}

function createInstruAllTopT3(text, instruT) {
	createInstruAllTop(text, "T3");
}

function createInstruAllBottomT0(text, instruT) {
	createInstruAllBottom(text, "T0");
}

function createInstruAllBottomT1(text, instruT) {
	createInstruAllBottom(text, "T1");
}

function createInstruAllBottomT2(text, instruT) {
	createInstruAllBottom(text, "T2");
}

function createInstruAllBottomT3(text, instruT) {
	createInstruAllBottom(text, "T3");
}

function createCmdT1(text) {
	createCmd(text, "cmdT1");
}

function createCmdT2(text) {
	createCmd(text, "cmdT2");
}

function createCmdT3(text) {
	createCmd(text, "cmdT3");
}

function createLinuxTxtT0(cmds) {
	document.writeln(initTXT(cmds, "LinuxTxt", "T0"));
}

function createLinuxTxtT1(cmds) {
	document.writeln(initTXT(cmds, "LinuxTxt", "T1"));
}

function createLinuxTxtT2(cmds) {
	document.writeln(initTXT(cmds, "LinuxTxt", "T2"));
}

function createLinuxTxtT3(cmds) {
	document.writeln(initTXT(cmds, "LinuxTxt", "T3"));
}

function createLinuxTxtMarkT1(cmds, mark_list) {
	let htmlText = initTXT(cmds, "LinuxTxt", "T1");
	cmdMark(htmlText, mark_list);
}

function createLinuxTxtMarkT2(cmds, mark_list) {
	let htmlText = initTXT(cmds, "LinuxTxt", "T2");
	cmdMark(htmlText, mark_list);
}

function createLinuxTxtMarkT3(cmds, mark_list) {
	let htmlText = initTXT(cmds, "LinuxTxt", "T3");
	cmdMark(htmlText, mark_list);
}

function cmdMark(htmlText, mark_list) {
	for (let i = 0; i < mark_list.length; i++) {
		let reg = new RegExp(mark_list[i], "g");
		htmlText = htmlText.replace(reg, "<span class='markColor" + (i + 1).toString() + "'>$&</span>");
	}
	document.writeln(htmlText);
}

function createYAMLT0(cmds) {
	initTXT(cmds, "YAML", "T0");
}

function createYAMLT1(cmds) {
	initTXT(cmds, "YAML", "T1");
}

function createYAMLT2(cmds) {
	initTXT(cmds, "YAML", "T2");
}

function createYAMLT3(cmds) {
	initTXT(cmds, "YAML", "T3");
}

function createViptelaCLIT1(cmds) {
	initTXT(cmds, "ViptelaCLI", "T1");
}

function createViptelaCLIT2(cmds) {
	initTXT(cmds, "ViptelaCLI", "T2");
}

function createViptelaCLIT3(cmds) {
	initTXT(cmds, "ViptelaCLI", "T3");
}

function createTCLT1(cmds) {
	initTXT(cmds, "TCL", "T1");
}

function createTCLT2(cmds) {
	initTXT(cmds, "TCL", "T2");
}

function createTCLT3(cmds) {
	initTXT(cmds, "TCL", "T3");
}

function initTXT(cmds, txtT, cmdT) {
	cmds = cmds.replace(/</g, "&lt;"); // 由于浏览器的原因，< 输出存在问题，替换为对应的hmtl编号

	let url = window.location.href;
	url = url.substring(url.indexOf("/guide/class/"));
	let path = "../".repeat(url.split("/").length - 3);

	let htmlText = "<div class='txtDivWrap'>" +
						"<div class='divGet'>" +
							"<i class='fa-solid fa-download' title='下载'></i>" +
							"<i class='far fa-copy' title='复制'></i>" +
						"</div>" +
						"<div class='copySuccess'>" +
							"<img src='" + path + "img/ok.svg' />&nbsp;复制成功" +
						"</div>" +
						"<div class='txtDiv" + cmdT + "'>";


	let cmd_arr = cmds.split("\n");
	let subNum = cmd_arr[1].length - cmd_arr[1].replace(/^\s*/g, "").length; // 第一行左侧通常没有空白，空白数为html的缩进数

	for (let i = 1; i < cmd_arr.length - 1; i++) {
		cmd_arr[i] = cmd_arr[i].substring(subNum);
		if (txtT == "ViptelaCLI" | txtT == "YAML" | txtT == "NginxConfig") {
			continue;
		}
		// 由于浏览器的原因，多个手打的tab或空格可能不正常输出，替换为tab或空格的hmtl符号
		// 但ViptelaCLI，YAML不需要
		cmd_arr[i] = cmd_arr[i].replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
		cmd_arr[i] = cmd_arr[i].replace(/ /g, "&nbsp;");
	}

	switch (txtT) {
		case "LinuxTxt":
			return createLinuxTxt(cmd_arr, htmlText);
			break;

		case "YAML":
			createYAML(cmd_arr, htmlText);
			break;

		case "ViptelaCLI":
			createViptelaCLI(cmd_arr, htmlText);
			break;

		case "TCL":
			createTCL(cmd_arr, htmlText);
			break;

		case "NginxConfig":
			createNginxConfig(cmd_arr, htmlText);
			break;
	}
}

function createLinuxTxt(cmd_arr, htmlText) {
	for (let i = 1; i < cmd_arr.length - 1; i++) {
		let index = cmd_arr[i].indexOf("#");

		if (index == 0) {	//纯注释
			htmlText = htmlText + "<span class='spanZS'>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		if (index > 0) {	//配置和注释
			// 某些linux配置中包含#，非注释内容
			// 第1个条件，对应 sed -i 's/^SELINUX=.*/SELINUX=disabled/' /etc/selinux/config，kubeadm安装k8s的关闭SELinux部分
			// 第2个条件，对应 sed -ri 's/.*swap.*/#&/' /etc/fstab，kubeadm安装k8s的关闭缓存部分
			// 第3个条件，对应 Address: 10.0.0.1#53，位于kubeadm安装测试主机名解析
			// 第4个条件，对应 / #，位于Vault的命令行
			// 第5个条件，对应 root@itachi-pod-dp-c6f6c4d96-56h8b:/#，k8s kubeadm安装，测试calico网络
			if (
				cmd_arr[i] != "sed&nbsp;-i&nbsp;'s/^SELINUX=.*/SELINUX=disabled/'&nbsp;/etc/selinux/config" &&
				cmd_arr[i] != "sed&nbsp;-ri&nbsp;'s/.*swap.*/#&/'&nbsp;/etc/fstab" &&
				cmd_arr[i] != "Address:&nbsp;10.0.0.1#53" &&
				!(cmd_arr[i].indexOf("/&nbsp;#") == 0) &&
				!(cmd_arr[i].indexOf("root@itachi-pod-dp-c6f6c4d96-56h8b:/#") == 0)
			) {
				let zs = cmd_arr[i].substring(index);	//注释部分
				let cmd = cmd_arr[i].substring(0, index);	//命令部分

				htmlText = htmlText + "<span>" + createLinuxCmd(cmd.replaceAll("&nbsp;", " "), 1).replaceAll("&nbsp;&nbsp;", "&nbsp;") + "</span><span class='spanZS'>" + zs + "</span><br />";
				continue;
			}
		}

		// cisco/*# 位于Vault的policy策略
		if (cmd_arr[i].indexOf("cisco/*") < 0 && cmd_arr[i].indexOf("/*") >= 0 && cmd_arr[i].indexOf("*/") >= 0) {
			htmlText = htmlText + "<div class='divZS'>" + cmd_arr[i] + "</div><br />";
			continue;
		}
		// cisco/*# 位于Vault的policy策略
		if (cmd_arr[i].indexOf("cisco/*") < 0 && cmd_arr[i].indexOf("/*") >= 0) {
			if (cmd_arr[i] == "path&nbsp;'itachi/*'&nbsp;{") {
				htmlText = htmlText + "<span>" + cmd_arr[i].trim() + "</span><br />"
				continue;
			}
			htmlText = htmlText + "<div class='divZS'><span>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		if (
			cmd_arr[i].indexOf("*/") >= 0 &&
			cmd_arr[i].indexOf(".*/\\t") < 0 &&
			cmd_arr[i] != "sed&nbsp;-i&nbsp;'s/^SELINUX=.*/SELINUX=disabled/'&nbsp;/etc/selinux/config" &&
			cmd_arr[i] != "sed&nbsp;-ri&nbsp;'s/.*swap.*/#&/'&nbsp;/etc/fstab"
		) {
			htmlText = htmlText + "<span>" + cmd_arr[i] + "</span></div/><br />";
			continue;
		}

		index = cmd_arr[i].indexOf("&lt;a") // 即<a
		if (index >= 0) {
			let link = cmd_arr[i].substring(index);	// 链接
			link = link.replace(/&lt;/g, "<");		// 将空格和<还原
			link = link.replace(/&nbsp;/g, " ");

			let cmd = cmd_arr[i].substring(0, index);	// 命令部分
			htmlText = htmlText + "<span>" + cmd.trim() + "</span>" + link + "<br />";
			continue;
		}

		htmlText = htmlText + "<span>" + createLinuxCmd(cmd_arr[i].trim().replaceAll("&nbsp;", " "), 1).replaceAll("&nbsp;&nbsp;", "&nbsp;") + "</span><br />";
	}
	htmlText = htmlText + "</div></div>";
	return removeLabel(htmlText);
}

function removeLabel(htmlText) {
	let htmlCmds = htmlText.split("<br />");
	let startNumEOF = new Array();
	let endNumEOF = new Array();
	let startNumOutput = new Array();
	let endNumOutput = new Array();

	for (let i = 0; i < htmlCmds.length; i++) {
		if (htmlCmds[i].indexOf("&lt;&lt;EOF") >= 0) {
			startNumEOF.push(i);
		}
		else {
			if (htmlCmds[i].indexOf("EOF") >= 0) {
				endNumEOF.push(i);
			}
		}

		if (htmlCmds[i].indexOf("下面为输出") >= 0) {
			startNumOutput.push(i);
		}

		if (htmlCmds[i].indexOf("输出结束") >= 0) {
			endNumOutput.push(i);
		}
		console.log(htmlCmds)
		console.log(startNumOutput)
		console.log(endNumOutput)
	}

	for (let i = 0; i < startNumEOF.length; i++) {
		for (let j = 0; j < htmlCmds.length; j++) {
			if (j > startNumEOF[i] && j < endNumEOF[i]) {
				htmlCmds[j] = "<span class='spanYH'>" + htmlCmds[j].replace(/<[^>]*>/g, '') + "</span>";
			}
		}
	}

	for (let i = 0; i < startNumOutput.length; i++) {
		for (let j = 0; j < htmlCmds.length; j++) {
			if (j > startNumOutput[i] && j < endNumOutput[i]) {
				htmlCmds[j] = "<span class='spanOutput'>" + htmlCmds[j].replace(/<[^>]*>/g, '') + "</span>";
			}
		}
	}

	for (let i = 0, j = 0; i < endNumOutput.length; i++, j++) {
		htmlCmds.splice(endNumOutput[i] - j, 1);
	}

	return htmlCmds.join("<br />");
}

function createYAML(cmd_arr, htmlText) {
	for (let i = 1; i < cmd_arr.length - 1; i++) {
		if(cmd_arr[i] == "---") {
			htmlText = htmlText + "<span class='spanFGF'>" + cmd_arr[i] + "</span><br />";
			continue;		//纯注释，无需进行后面的分解
		}

		//由于浏览器的原因，多个手打的tab或空格可能不正常输出，替换为tab或空格的hmtl符号
		cmd_arr[i] = cmd_arr[i].replace(/\t/g, "&nbsp;&nbsp;");
		cmd_arr[i] = cmd_arr[i].replace(/ /g, "&nbsp;");

		let zs = "";
		let index = cmd_arr[i].indexOf("#");
		if (index == 0) {	//纯注释
			htmlText = htmlText + "<span class='spanZS'>" + cmd_arr[i] + "</span><br />";
			continue;		//纯注释，无需进行后面的分解
		}

		if (index > 0) {	//配置和注释
			zs = cmd_arr[i].substring(index);	//注释
			cmd_arr[i] = cmd_arr[i].substring(0, index);	//配置
		}

		let fgf_list = [":", "="];
		let fgf = "";

		for (let j in fgf_list) {
			if (cmd_arr[i].indexOf(fgf_list[j]) != -1) {
				fgf = fgf_list[j];
				break;
			}
		}

		if (fgf == "") {	//无分割符
			htmlText = htmlText + "<span class='spanV'>" + cmd_arr[i] + "</span>";
		}
		else {
			index = cmd_arr[i].indexOf(fgf);
			let reg = new RegExp(/\d/);
			if (reg.test(cmd_arr[i][index - 1]) && reg.test(cmd_arr[i][index + 1])) {
				htmlText = htmlText + "<span class='spanV'>" + cmd_arr[i] + "</span>";
			}
			else {
				let type = cmd_arr[i].substring(0, index);
				let value = cmd_arr[i].substring(index + 1);
				htmlText = htmlText + "<span class='spanT'>" + type + "</span><span class='spanV'><span class='spanFGF'>" + fgf + "</span>" + value + "</span>";
			}
		}

		if (zs != "") {
			htmlText = htmlText + "<span class='spanZS'>" + zs + "</span>";
		}

		htmlText = htmlText + "<br />";
	}

	htmlText = htmlText + "</div></div>";
	htmlText = htmlText.replace(/((&nbsp;)+\d+(&nbsp;)*)<\/span>/g, "<span class='spanNum'>$1</span></span>");
	htmlText = htmlText.replace(/((&nbsp;)+-(&nbsp;)+)/g, "<span class='spanFGF'>$1</span>");
	document.writeln(htmlText);
}

function createViptelaCLI(cmd_arr, htmlText) {
	for (let i = 1; i < cmd_arr.length - 1; i++) {
		if (
			cmd_arr[i].indexOf("config terminal") >= 0 ||
			cmd_arr[i].indexOf("no shutdown") >= 0
		) {
			cmd_arr[i] = cmd_arr[i].replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
			htmlText = htmlText + "<span class='spanT'>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		if (cmd_arr[i].indexOf("!") >= 0) {
			cmd_arr[i] = cmd_arr[i].replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
			htmlText = htmlText + "<span class='sqlWord'>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		let clis = cmd_arr[i].match(/(\s*ip (address|route))(.+)/);

		if (clis) {
			htmlText = htmlText + "<span class='spanT'>" + clis[1].replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") + "</span>";
			htmlText = htmlText + "<span>" + clis[3].replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") + "</span><br />";
			continue;
		}

		clis = cmd_arr[i].match(/(\s*\S+)(.*)/);
		if (clis) {
			htmlText = htmlText + "<span class='spanT'>" + clis[1].replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") + "</span>";
			htmlText = htmlText + "<span>" + clis[2].replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") + "</span><br />";
		}
		else {
			htmlText = htmlText + "<br />";
		}
	}
	htmlText = htmlText + "</div></div>";
	document.writeln(htmlText);
}

function createTCL(cmd_arr, htmlText) {
	for (let i = 1; i < cmd_arr.length - 1; i++) {
		cmd_arr[i] = cmd_arr[i].replace(/(".+")/g, "<span class='spanYH'>$1</span>");

		cmd_arr[i] = cmd_arr[i].replace(/(\w+::\w+)/g, "<span class='spanT'>$1</span>");

		let keywords = [
			"set", "switch", "-"
		];

		let regstr = "((^((&nbsp;)*if)";
		for (let j = 0; j < keywords.length; j++) {
			regstr = regstr + "|(" + keywords[j] + ")";
		}
		regstr = regstr + ")(&nbsp;)*)";
		cmd_arr[i] = cmd_arr[i].replace(new RegExp(regstr, "g"), "<span class='spanR'>$1</span>");

		keywords = [
			"class",
			"default",
			"else", "elseif",
			"snat",
			"when"
		]
		regstr = "((";
		for (let j = 0; j < keywords.length; j++) {
			regstr = regstr + "(" + keywords[j] + ")|";
		}
		regstr = regstr.substring(0, regstr.length - 1) + ")(&nbsp;)+)";
		cmd_arr[i] = cmd_arr[i].replace(new RegExp(regstr, "g"), "<span class='spanT'>$1</span>");

		htmlText = htmlText + "<span>" + cmd_arr[i] + "</span><br />"
	}
	htmlText = htmlText + "</div></div>";
	document.writeln(htmlText);
}

function createCmd(text, cmdT) {
	text = addSpan(text);
	document.writeln("<span class='" + cmdT + "'>" + text + "</span>");
}

function createLinuxCmd1(linuxCmd) {
	return createLinuxCmd(linuxCmd, 1)
}

function createLinuxCmd3(linuxCmd) {
	return createLinuxCmd(linuxCmd, 3)
}

// cmdNum：整条命令中，命令单词的最大数量
function createLinuxCmd(linuxCmd, cmdNum = 2, isDG = false) {
	// 空行直接返回
	if (linuxCmd == "") {
		return "";
	}

	// 命令中有""或''包裹的地方，由于后续添加各种span，class='…'，这样包裹，后续还原为<span class='spanYH'>
	linuxCmd = linuxCmd.replace(/(['"])(.*?)\1/g, "<spanYH>$&</spanYH>");

	// 由于命令中存在可选项 [ | ] 或 { | }，括号中也可能不只一个 | ，拆分命令时会出现问题
	// 由于 [] 在正则表达式中用途更多，处理比 {} 复杂
	// 先将 {} 中的 | 修改为 @@@
	// 再将 [] 修改为 {{}}，再将{{}}中的 | 修改为 @@@
	// 最后再将 @@@、{{}} 还原
	let reg = new RegExp("(^.+{{1,2}[^|]+)|( .+}{1,2}.*$)", "g");

	if (reg.test(linuxCmd)) {
		let orCMD = linuxCmd.match(reg);
		while (orCMD.length == 2) {
			linuxCmd = orCMD[0] + "@@@" + orCMD[1];
			orCMD = linuxCmd.match(reg);
		}
	}

	// 添加空格，防止修改命令参数或对象中内容，因为只能位于开始或结束，只添加一侧空格
	linuxCmd = linuxCmd.replaceAll("[ ", "{{ ").replace(" ]", " }}");
	reg = new RegExp("(^.+{{[^|]+)|( .+}}.*$)", "g");
	if (reg.test(linuxCmd)) {
		let orCMD = linuxCmd.match(reg);
		while (orCMD.length == 2) {
			linuxCmd = orCMD[0] + "@@@" + orCMD[1];
			orCMD = linuxCmd.match(reg);
		}
	}
	// 处理 []、{}中的 | 结束

	let cmds = [linuxCmd];
	let FGFs = ["|", "&&"];

	for (let i in FGFs) {
		cmds = splitLinuxCMD(cmds, FGFs[i]);
	}

	let htmlText = "";

	for (let j in cmds) {
		let cmd = cmds[j].split(" ");
		for (let i in cmd) {
			if (i == 0) {	// 第一位的只能是命令
				htmlText = htmlText + "<span class='linuxCMD_cmd'>" + cmd[i] + "</span>";
			}

			if (i >= 1 && i < cmdNum && cmdNum > 1) {
				if (cmd[i][0] == "-" || cmd[i][0] == "+") {	// 第二位以 - 或 + 开头，则为参数
					htmlText = htmlText + "<span class='linuxCMD_Para'>" + cmd[i] + "</span>";
				}
				else {
					if (/^[A-z]$/.test(cmd[i][0])) {	// 第二位以英文字母开头，则为命令
						htmlText = htmlText + "<span class='linuxCMD_cmd'>" + cmd[i] + "</span>";
					}
					else {	// 其它情况为命令对象
						htmlText = htmlText + cmd[i];
					}
				}
			}

			if (i >= cmdNum) {
				if (cmd[i][0] == "-" || cmd[i][0] == "+") {	// 第三及以后位以 - 或 + 开头，则为参数
					htmlText = htmlText + "<span class='linuxCMD_Para'>" + cmd[i] + "</span>";
				}
				else {
					htmlText = htmlText + cmd[i];
				}
			}
			htmlText = htmlText + "&nbsp;&nbsp;";
		}
	}
	htmlText = htmlText.substring(0, htmlText.length - 12);

	for (let i in FGFs) {
		htmlText = htmlText.replaceAll("&nbsp;&nbsp;" + FGFs[i] + "&nbsp;&nbsp;", "&nbsp;&nbsp;<span class='linuxCMD_pipeline'>" + FGFs[i] + "</span>&nbsp;&nbsp;");
	}

	// 当命令较长时，需要换行，为了看着方便，换行后的所有内容的缩进均在命令单词后
	// 统计命令单词的字数，后面的各行，添加 （字数+命令数）*2 - 2 的空格作为缩进
	reg = /<span class='linuxCMD_cmd'>\S+<\/span>/g;
	let linuxCMD_cmds = htmlText.split("<span class='linuxCMD_pipeline'>|</span>")[0].match(reg);
	if (linuxCMD_cmds) {
		let num = 0;

		for (let i = 0; i < linuxCMD_cmds.length; i++) {
			let word = linuxCMD_cmds[i].replaceAll("&nbsp;", "");
			num = num + word.length - 34
		}

		htmlText = htmlText.replaceAll("&nbsp;&nbsp;\\&nbsp;&nbsp;", "&nbsp;&nbsp;\\<br />" + "&nbsp;".repeat((num + linuxCMD_cmds.length) * 2 - 2));
		// 处理命令命令中的换行部分结束
	}

	// 还原非管道符的 | ，以及 []
	htmlText = htmlText.replaceAll("@@@", "|").replaceAll("{{", "[").replaceAll("}}", "]");

	// reg = new RegExp("(\"[^\"]+\")", "g");
	htmlText = htmlText.replace(/(\"[^\"]+\")/g, "<span class='spanYH'>$1</span>");

	// reg = new RegExp(" ('[^']+')", "g");
	htmlText = htmlText.replace(/ ('[^']+')/g, "<span class='spanYH'>$1</span>");

	// 命令中<spanYH>还原为<span class='spanYH'>
	htmlText = htmlText.replace(/<spanYH>(.+)<\/spanYH>/g, "<span class='spanYH'>$1</span>");

	if (isDG) {
		return htmlText;
	}

	if (htmlText.indexOf("$(") >= 0) {
		htmlText = spliteDolor(htmlText, cmdNum);
	}

	// 使用等号配置参数的情况，等号前内容，等号，等号后内容，配置不同颜色，
	// 命令位于kubeadm安装k8s --> pod分配静态子网 --> 为各个节点创建其子网的标签
	// kubectl label node master1 pod-cidr=master1-cidr --overwrite
	// 如果命令为 --apiserver-advertise-address=10.0.0.11，
	// 由于有--，已经将整体配置为参数，调整span，修改为正确配色
	// 如果命令为 firewall-cmd  --permanent  --add-port=6443/tcp
	// 带等号的参数位于最后，无&nbsp;
	htmlText = htmlText.replace(
		/((&nbsp;)+)(<span class='linuxCMD_Para'>)?([-\w]+)=([-\/\.:\w]+)(<\/span>)?((&nbsp;)+)?/g,
		"$1<span class='linuxCMD_Para'>$4</span><span class='linuxCMD_pipeline'>=</span><span class='spanYH'>$5</span>$7"
	);


	// 如果有数字，将数字突出展示
	// firewall-cmd --permanent --add-port=6443/tcp
	htmlText = htmlText.replace(
		/(<span class='spanYH'>)([\d-]+)(\/((tcp)|(udp))<\/span>)/g,
		"$1<span class='spanNum'>$2</span>$3"
	);

	htmlText = htmlText.replace(/(?:&lt;&lt;)?EOF/g, "<span class='linuxCMD_pipeline'>$&</span>");
	return createCmdSpan(htmlText);
}

function splitLinuxCMD(cmd_arrary, FGF) {
	let cmdss = new Array();
	for (let i in cmd_arrary) {
		let cmds = cmd_arrary[i].split(" " + FGF + " ");
		for (let j = 0; j < cmds.length - 1; j++) {
			cmdss.push(cmds[j] + " " + FGF)
		}
		cmdss.push(cmds[cmds.length - 1]);
	}
	return cmdss;
}

function spliteDolor(cmd, cmdNum) {
	if (cmd.indexOf("$(") >= 0) {
		let dstart = cmd.indexOf("$(");
		let dend = cmd.indexOf(")");
		let son_cmd = cmd.substring(dstart + 2, dend);

		son_cmd = son_cmd.replace(/<(\/)?span[^>]*>/g, "").replace(/<br( \/)?>/g, "\r\n").replaceAll("&nbsp;&nbsp;", " ").replaceAll("&gt;", ">").replaceAll("&lt;", "<");
		cmd = cmd.substring(0, dstart) + "<span class='spanObj'>$(</span>" + createLinuxCmd(son_cmd, cmdNum, true) + "<span class='spanObj'>)</span>" + spliteDolor(cmd.substring(dend + 1));
	}
	return cmd;
}

function createSQLCmdSpan(cmd) {
	cmd = addSQLSpan(cmd);
	cmd = "<span style='color:#8AA4AF'>mysql\></span> " + cmd;

	// 有一些内容非关键字，但与字符与关键字相同，
	// 手动在字符前添加{}区分，返回去掉{}的命令
	return createCmdSpan(cmd.replace(/{}/g, ""));
}

function createSQLCmdInstruSpan(cmd, text) {
	cmd = addSQLSpan(cmd);
	// <span class="sqlWord">'“Cisc0123!。'</span>
	cmd = cmd.replace("<span class=\"sqlWord\">'", "<span class=\"sqlWord\">");
	cmd = cmd.replace("'</span>", "</span>");
	return createCmdInstruSpan(cmd, text);
}

function createCmdSpan(cmd) {
	// cmd为 <span……，不加前缀

	if (cmd.indexOf("<span") >= 0) {
		return "<span class='cmd'>" + addSpan(cmd) + "</span>"
	}

	let regAruba = /(\(\S+\) \^?\[\S+\])(( \([\S ]+\))? #)(.+)/;
	if (regAruba.test(cmd)) {
		cmd = cmd.replace(regAruba, "<span class='cmdArubaPath'>$1</span><span class='cmdMode'>$2</span><span class='cmd'>$4</span>");
		return addSpan(cmd);
	}
	else {
		let regFG = /([\w() -/[<&:~;…]+[#>\$\]] )(.+)/;	// 思科华为各种模式前缀，如：R1(config-route)# [R1-FastEthernet0/0]
		if (regFG.test(cmd)) {
			cmd = cmd.replace(regFG, "<span class='cmdMode'>$1</span><span class='cmd'>$2</span>");
			return addSpan(cmd);
		}
		else {
			return "<span class='cmd'>" + addSpan(cmd) + "</span>";
		}
	}

}

function createCmdInstruSpan(cmd, text) {
	cmd = addSpan(cmd);

	if (text == null) {
		return cmd;
	}
	else {
		text = addSpan(text);
		return cmd + "<>" + text;
	}
}

function addSpan(text) {
	/*
		“ ——> <span class="variable">		包裹可变部分
		” ——> <span class="bold">			包裹两个可变部分时夹着的符号，突出显示
		‘ ——> <span class="spanR">			包裹强调部分，红色
		’ ——> <span class="spanBlue">		包裹强调部分，蓝色
		｛ ——> <span class="variableZN">	包裹可变部分的中文描述
		｝ ——> <span class="variableZN">	包裹Linux的命令参数部分
		。 ——> </span>						包裹结束
		》 ——> </span></span>				2个包裹结束

		　 ——> &nbsp;&nbsp;					某些多个可变内容间只一个空格间隔，
											为了看着和配置时方便，配置时用一个中文空格，再转化为2个html的空格
	*/

	// text = text.replace(/XNSY/g, "VPN");	// Gitee Pages屏蔽词
	// text = text.replace(/xnsy/g, "vpn");	// Gitee Pages屏蔽词
	// text = text.replace(/邻邻邻/g, "邻居");	// Gitee Pages屏蔽词

	const regVariable = new RegExp(/(?<!\\)“/g); // 可以匹配“，但不能匹配\“
	const regSpanBold = new RegExp(/(?<!\\)”/g); // 可以匹配”，但不能匹配\”
	const regR = new RegExp("‘", "g");
	const regBlue = new RegExp("’", "g");
	const regZN = new RegExp("｛", "g");
	const regLinuxPara = new RegExp("｝", "g");
	const regEnd = new RegExp("([^/])。", "g");
	const regEnd2 = new RegExp("([^/])》", "g");
	const regJH = new RegExp("/。", "g");
	const regSY1 = new RegExp(/\\“/g);
	const regSY2 = new RegExp(/\\”/g);
	const regZNKG = new RegExp("　", "g");

	text = text.replace(regVariable, "<span class='variable'>");
	text = text.replace(regSpanBold, "<span class='spanBold'>");
	text = text.replace(regR, "<span class='spanR'>");
	text = text.replace(regBlue, "<span class='spanBlue'>");
	text = text.replace(regZN, "<span class='variableZN'>");
	text = text.replace(regLinuxPara, "<span class='linuxCMD_Para'>");
	text = text.replace(regEnd, "$1</span>");
	text = text.replace(regEnd2, "$1</span></span>");

	text = text.replace(regJH, "。");
	text = text.replace(regSY1, "“");
	text = text.replace(regSY2, "”");
	text = text.replace(regZNKG, "&nbsp;&nbsp;");

	return text;
}

function createCmdInstru(instruArr, typeT, typeBrand) {
	//instruArr：命令说明集合，每行为数组中一项，每项中不同说明以中文<>分隔
	let imagePath = "../../../img/";

	switch (typeBrand) {
		case "vmware":

		case "nmap":

		case "redhat":
			imagePath = "../../img/";
			break;

		case "redhat_cert":
			typeBrand = "redhat";
			break;
	}

	let htmlText = "<table class='cmdTable" + typeT + "'>"

	if (typeBrand == "cisco" || typeBrand == "aruba" || typeBrand == "huawei" || typeBrand == "h3c" || typeBrand == "f5") {
		htmlText = htmlText + "<tr><td rowspan='" + (instruArr.length + 1) + "' class='tdCliLogo'>";
	}
	else {	// 使用linux命令格式高亮显示的，修改右侧线的颜色
		htmlText = htmlText + "<tr><td rowspan='" + (instruArr.length + 1) + "' class='tdCliLogo' style='border-right-color: #E6DB74'>";
	}

	htmlText = htmlText + "<img src='" + imagePath + typeBrand + ".svg' class='imgBrand " + typeBrand + "' /></td></tr>";
	htmlText = htmlText + "<tr><td colspan='2'>" + instruArr[0] + "</td></tr>";

	if (instruArr.length > 1) {
		for (let i = 1; i < instruArr.length; i++) {
			htmlText = htmlText + "<tr";
			if (instruArr[i].indexOf("<>") != -1) {
				htmlText = htmlText + " class='cmdInstru'>"
				let eachInstruItem = instruArr[i].split("<>");
				htmlText = htmlText + "<td class='tdcmdInstru1'>" + eachInstruItem[0] + "：</td>";
				htmlText = htmlText + "<td class='tdcmdInstru2'>" + eachInstruItem[1] + "</td>";
			}
			else {
				htmlText = htmlText + ">"
				if (instruArr[i].indexOf("<img") != -1) {
					htmlText = htmlText + "<td>" + instruArr[i] + "</td>"
				}
				else {
					if (instruArr[i].indexOf("'cmd'") == -1) {
						htmlText = htmlText + "<td colspan='2' class='cmdInstru'>" + instruArr[i] + "</td>"
					}
					else {
						htmlText = htmlText + "<td colspan='2'>" + instruArr[i] + "</td>"
					}
				}
			}
			htmlText = htmlText + "</tr>";
		}
	}

	htmlText = htmlText + "</table>";
	document.write(htmlText);
}

function createCmdInstruT0(instruArr, typeBrand) {
	createCmdInstru(instruArr, "T0", typeBrand)
}

function createCmdInstruT1(instruArr, typeBrand) {
	createCmdInstru(instruArr, "T1", typeBrand)
}

function createCmdInstruT2(instruArr, typeBrand) {
	createCmdInstru(instruArr, "T2", typeBrand)
}

function createCmdInstruT3(instruArr, typeBrand) {
	createCmdInstru(instruArr, "T3", typeBrand)
}

function createConfigImg(imgNameList, imgDescribe, typeT) {
	let htmlText = "<div class='divConfigImg" + typeT

	if (imgDescribe) {
		htmlText = htmlText + "' imgDescribe='" + imgDescribe
	}

	htmlText = htmlText + "'>";

	if (imgNameList.indexOf("~") > 0) {
		let imgNameArr = imgNameList.split("~");
		for (let i = imgNameArr[0].substr(imgNameArr[0].length - 1); i <= parseInt(imgNameArr[1]); i++) {
			let eachName = imgNameArr[0].substr(0, imgNameArr[0].length - 1) + i;
			htmlText = htmlText + "<img src='config_img/" + eachName + ".png' />";
			if (i != imgNameArr[1]) { //除最后第一张，每二张图间空行
				htmlText = htmlText + "<br /><br />";
			}
		}
	}
	else {
		htmlText = htmlText + "<img src='config_img/" + imgNameList + ".png' />";
	}

	htmlText = htmlText + "</div><br /><br />";
	document.write(htmlText);
}

function createConfigImgT0(imgNameList, imgDescribe = null) {
	createConfigImg(imgNameList, imgDescribe, "T0");
}

function createConfigImgT1(imgNameList, imgDescribe = null) {
	createConfigImg(imgNameList, imgDescribe, "T1");
}

function createConfigImgT2(imgNameList, imgDescribe = null) {
	createConfigImg(imgNameList, imgDescribe, "T2");
}

function createConfigImgT3(imgNameList, imgDescribe = null) {
	createConfigImg(imgNameList, imgDescribe, "T3");
}

function addSQLSpan(cmd) {
	const sql_keyword =
		"alter|all|" +
		"by|" +
		"create|" +
		"drop|" +
		"from|for|flush|" +
		"grant|" +
		"identified|identifity|" +
		"on|" +
		"password|privileges|persist|" +
		"select|set|show|" +
		"to|" +
		"update|use|user|" +
		"variables|" +
		"where|with";

	for (const sElement of reg = "/"
		+ "(^(" + sql_keyword + ") )|"
		+ "( (" + sql_keyword + ")$)|"
		+ "( (" + sql_keyword + ") )|"
		+ "(“(" + sql_keyword + ")。)" +
		"/g") {
	}
	;

	cmd = cmd.replace(/ /g, "  ")
	cmd = cmd.replace(eval(reg), "<span class=\"sqlKeyword\">$&</span>");
	cmd = cmd.replace(/'[^']+'/g, "<span class=\"sqlWord\">$&</span>");
	return cmd;
}

function splitBR(text) {
	let reg = new RegExp("(^(<br />)*)(.+?)((<br />)*$)");
	let br = text.match(reg);
	return [br[1], br[3], br[4]];
}

function createProtocolWord(protocolSX, protocolQC, protocolZW) {
	let htmlText = "<div style='display: inline-block'>";
	htmlText = htmlText + "<table>";
	htmlText = htmlText + "<tr>";
	htmlText = htmlText + "<td rowSpan='2' class='protocolSX'>" + protocolSX + "</td>";
	htmlText = htmlText + "<td class='protocolQC'>" + protocolQC + "</td>";
	htmlText = htmlText + "</tr>";
	htmlText = htmlText + "<tr>";
	htmlText = htmlText + "<td class='protocolZW'>" + protocolZW + "</td>";
	htmlText = htmlText + "</tr>";
	htmlText = htmlText + "</table>";
	htmlText = htmlText + "</div>";
	document.write(htmlText);
}

function createProtocolStructT0(imgWidth, imgHeight, SFHeight, imgUrl, protocolName, divID = "divProtocolStruct") {
	createProtocolStruct(imgWidth, imgHeight, SFHeight, imgUrl, "T0", protocolName, divID);
}

function createProtocolStructT1(imgWidth, imgHeight, SFHeight, imgUrl, protocolName, divID = "divProtocolStruct") {
	createProtocolStruct(imgWidth, imgHeight, SFHeight, imgUrl, "T1", protocolName, divID);
}

function createProtocolStructT2(imgWidth, imgHeight, SFHeight, imgUrl, protocolName, divID = "divProtocolStruct") {
	createProtocolStruct(imgWidth, imgHeight, SFHeight, imgUrl, "T2", protocolName, divID);
}

function heightlightField(protocolField, k, structID) {
	let y = (k * protocolField).toString() + "px";
	$(structID).css("background-position-y", y);
	if (structID.substring(1) == $("#divProtocol").attr("protocolID")) {
		$("#protocolImg").css("background-position-y", y);
	}
}

function initProtocol(structID) {
	$(structID).css("background-position-y", "0px");
	if (structID.substring(1) == $("#divProtocol").attr("protocolID")) {
		$("#protocolImg").css("background-position-y", "0px");
	}
}

function createProtocolExplainT0(words, k, structID = "divProtocolStruct") {
	createProtocolExplain(words, k, structID, "T0");
}

function createProtocolExplainT1(words, k, structID = "divProtocolStruct") {
	createProtocolExplain(words, k, structID, "T1");
}

function createProtocolExplainT2(words, k, structID = "divProtocolStruct") {
	createProtocolExplain(words, k, structID, "T2");
}

function createProtocolExplain(words, k, structID, divT) {
	let htmlText = "<div class='divSJ" + divT + "'>";

	htmlText = htmlText + "<div class='divProtocolExplain'><dl>";
	let words_arr = words.split("\n");

	for (let i = 1, j = 1; i < words_arr.length - 1; i = i + 3, j++) {
		htmlText = htmlText + "<div onMouseOver=\"heightlightField("
			+ j + "," + k + ", \'#" + structID + "\')\" onMouseOut=\"initProtocol(\'#" + structID + "\')\">";
		htmlText = htmlText + "<dt><i class='fa-regular fa-file-lines'>&nbsp;&nbsp;</i>" + words_arr[i].trim() + "</dt>";
		htmlText = htmlText + "<dd>" + words_arr[i + 1].trim() + "</dd></div>";
	}
	htmlText = htmlText + "</dl></div>";
	htmlText = htmlText + "</div>";
	document.writeln(htmlText);
}

function createProtocolStruct(imgWidth, imgHeight, SFHeight, imgUrl, divT, protocolName, divID) {
	let htmlText = "<div class='divSJ" + divT + "'>";
	htmlText = htmlText + "<div class='divProtocolStruct'>";
	htmlText = htmlText + "<div id='" + divID + "' protocolName='" + protocolName + "' style='width: "
							+ imgWidth + "px; height: " + imgHeight + "px; background-image: url(config_img/"
							+ imgUrl + ".png); background-size: " + imgWidth + "px " + SFHeight + "px' ></div>";

	htmlText = htmlText + "</div>";
	htmlText = htmlText + "</div>";
	document.write(htmlText);
}


function protocolMove(e) {
	e = e || window.event;
	// 盒子的位置
	let x = getPage(e).pageX - $("#divProtocol").offset().left;
	let y = getPage(e).pageY - $("#divProtocol").offset().top;

	document.onmousemove = function (e) {
		e = e || window.event;
		// pleft = getPage(e).pageX - x + "px";
		// ptop = getPage(e).pageY - y + "px";

		let pleft = getPage(e).pageX - $(window).scrollLeft() - x + "px";
		let ptop = getPage(e).pageY - $(window).scrollTop() - y + "px";

		$("#divProtocol").css("left", pleft);
		$("#divProtocol").css("top", ptop);
	}
}

function getPage(e) {
	let pageX = e.pageX || e.clientX + getScroll().scrollLeft;
	let pageY = e.pageY || e.clientY + getScroll().scrollTop;
	return {
		pageX: pageX,
		pageY: pageY
	}
}

function createHTTPHeadersT1(text, instruT) {
	createHTTPHeaders(text, "T1");
}

function createHTTPHeadersT2(text, instruT) {
	createHTTPHeaders(text, "T2");
}

function createHTTPHeadersT3(text, instruT) {
	createHTTPHeaders(text, "T3");
}

function createHTTPHeaders(cmds, cmdT) {
	let headers = cmds.split("\n");
	let htmlText = "<div class='headers" + cmdT + "'><table><tr>";
	let heads_num = 2;

	if (headers[1].indexOf(": ") == -1) {	// 为了查看方便，第0行为空白行，第1行可能并非首部字段
		let header = headers[1].replace(/\t/g, "");
		let l1 = header.split(" ");
		if (l1[0] == "GET") {	// HTTP请求
			htmlText = htmlText + "<td colspan='3'><span class='spanT'>" + l1[0] + "</span> ";
			htmlText = htmlText + "<span class='spanV'>" + l1[1] + "</span> ";
			htmlText = htmlText + l1[2] + "</td></tr>";
		}

		if (l1[0].indexOf("HTTP") == 0) {	// HTTP响应
			htmlText = htmlText + "<td colspan='3'><span class='spanT'>" + l1[0] + "</span> ";
			let index = header.indexOf(" ")
			// let protocol = header.substring(0, index);
			let status = header.substring(index).split("#");

			if (l1[1][0] == "1") {	// 状态码1XX
				htmlText = htmlText + status[0].trim();
			}

			if (l1[1][0] == "2") {	// 状态码2XX
				htmlText = htmlText + "<span class='spanG'>" + status[0].trim() + "</span>";
			}

			if (l1[1][0] == "3") {	// 状态码3XX
				htmlText = htmlText + "<span class='span3'>" + status[0].trim() + "</span>";
			}

			if (status.length > 1) {	// 状态码后有注释
				htmlText = htmlText + "&nbsp;&nbsp;<span class='spanZS'># " + status[1].trim() + "</span>";
			}
			htmlText = htmlText + "</td></tr>";
		}
	}
	else {
		heads_num = 1;
	}


	for (let i = heads_num; i < headers.length - 1; i++) {
		let header = headers[i].replace(/\t/g, "").trim();
		let headerT = header.split(": ")[0];
		let headerV = header.split(": ")[1].split("# ")[0];
		let headerZS = "";
		if (header.split(": ")[1].indexOf("# ") > 0) {	// 包含注释
			headerZS = "# " + header.split(": ")[1].split("# ")[1];
		}
		htmlText = htmlText + "<tr><td><span class='spanT'>" + headerT + "</span><b>:</b> </td>";
		htmlText = htmlText + "<td><span class='spanV'>" + headerV.trim() + "</span></td>";
		if (headerZS) {
			htmlText = htmlText + "<td><span class='spanZS'>" + headerZS.trim() + "</span></td></tr>";
		}
	}

	htmlText = htmlText + "</table></div>";
	// 将 , ; 配置为白色															由于&nbsp;中包含;，采用修饰符不匹配&nbsp;中的;
	htmlText = htmlText.replaceAll(",", "<span class='spanW'>,</span>").replace(/(?<!(&nbsp));/g, "<span class='spanW'>;</span>");

	document.writeln(htmlText);
}

function createNginxConfigT1(text) {
	initTXT(text, "NginxConfig", "T1");
}

function createNginxConfigT2(text) {
	initTXT(text, "NginxConfig", "T2");
}

function createNginxConfigT3(text) {
	initTXT(text, "NginxConfig", "T3");
}

function createNginxConfig(cmd_arr, htmlText) {
	for (let i = 1; i < cmd_arr.length - 1; i++) {
		let index = cmd_arr[i].indexOf("#");

		if (index == 0) {	//纯注释
			htmlText = htmlText + "<span class='spanZS'>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		let txtZS = "";			// 注释部分
		let txtConfig = "";		// 配置部分
		if (index > 0) {		// 配置和注释
			txtZS = cmd_arr[i].substring(index);
			txtConfig = cmd_arr[i].substring(0, index);
		}
		else {
			txtConfig = cmd_arr[i];
		}

		if (txtConfig == "server {") {
			htmlText = htmlText + "<span class='spanT'>server</span>&nbsp;{";
		}
		else {
			if (txtConfig.match("\s*}")) {
				htmlText = htmlText + txtConfig.replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
			}
			else {
				let clis = txtConfig.match(/(\s*\S+)(.*)/);
				if (clis) {
					htmlText = htmlText + "<span class='spanT'>" + clis[1].replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") + "</span>";
					htmlText = htmlText + "<span class='spanV'>" + clis[2].replace(/ /g, "&nbsp;").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;") + "</span>";
				}
			}
		}

		if(txtZS != "") {
			htmlText = htmlText + "<span class='spanZS'>" + txtZS + "</span>";
		}
		htmlText = htmlText + "<br />";
	}

	let keywords = [
		"ssl",
		"http2",
		"on"
	];

	for (let j = 0; j < keywords.length; j++) {
		let regKey = new RegExp("&nbsp;(" + keywords[j] + ")((&nbsp)?;)", "g");
		htmlText = htmlText.replace(regKey, "&nbsp;<span class='spanT'>$1</span>$2");
	}

	htmlText = htmlText.replace(/(?<!nbsp);/g, "<span class='spanW'>;</span>");
	htmlText = htmlText + "</div></div>";
	document.writeln(htmlText);
}

// 生成单个选择器，支持 单个单元格 或 单行，
// 为了方便多个选择器的连接，结尾均为 , (空格)
// HLobj：单个单元格或单行，表示方法如下
// _c201："#tHeaders .row:nth-child(20) .cell:nth-child(1), ";
// _r2："#tHeaders .row:nth-child(2) .cell, ";
function createSelection(tableName, HLobj) {
	let HLtype = HLobj[1];
	let selectionTXT = tableName;
	if (HLtype == "c") {
		// 行数有可能达到两位数，列数中有一位数
		selectionTXT = selectionTXT + " .row:nth-child(" + HLobj.substring(2, HLobj.length - 1);
		selectionTXT = selectionTXT + ") .cell:nth-child(" + HLobj[HLobj.length - 1] + "), ";
	}
	if (HLtype == "r") {
		selectionTXT = selectionTXT + " .row:nth-child(" + HLobj.substring(2) + ") .cell, ";
	}
	return selectionTXT;
}

// 生成行选择器，支持单行或连续的多行
// rowStart：起始行号
// rowEnd：  终止行号
function createRowSelection(tableName, rowStart, rowEnd) {
	let selectionTXT = "";
	for (let i = rowStart; i <= rowEnd; i++) {
		selectionTXT = selectionTXT + createSelection(tableName, "_r" + i);
	}

	return selectionTXT.substring(0, selectionTXT.length - 2);
}

// 生成部分单元格选择器，支持连接的多个单元格
// rowStart：起始行号
// rowEnd：  终止行号
// colStart：起始列
// colEnd：  终止列号
function createCellSelection(tableName, colStart, colEnd, rowStart, rowEnd,) {
	let selectionTXT = "";
	for (let i = rowStart; i <= rowEnd; i++) {
		for (let j = colStart; j <= colEnd; j++) {
			selectionTXT = selectionTXT + createSelection(tableName, "_c" + i.toString() + j.toString());
		}
	}

	return selectionTXT.substring(0, selectionTXT.length - 2);
}

function createHLTableT0(tWidth, tHeader, tBody, tID = "") {
	createHLTable(tWidth, tHeader, tBody, "T0", tID);
}

function createHLTableT1(tWidth, tHeader, tBody, tID = "") {
	createHLTable(tWidth, tHeader, tBody, "T1", tID);
}

function createHLTableT2(tWidth, tHeader, tBody, tID = "") {
	createHLTable(tWidth, tHeader, tBody, "T2", tID);
}

function createHLTableT3(tWidth, tHeader, tBody, tID = "") {
	createHLTable(tWidth, tHeader, tBody, "T3", tID);
}

function createHLTable(tWidth, tHeader, tBody, divT, tID) {
	let htmlText = "<div class='divSJ" + divT + "'>";
	let nc = "";

	if (tID != "") {
		if (tHeader == "") {
			htmlText = htmlText + "<div class='HLTableS1' id='" + tID + "' style='width:" + tWidth + "px'>";
		}
		else {
			htmlText = htmlText + "<div class='HLTableS2' id='" + tID + "' style='width:" + tWidth + "px'>";
		}
	}
	else {
		if (tHeader == "") {
			htmlText = htmlText + "<div class='HLTableS1' style='width:" + tWidth + "px'>";
		}
		else {
			htmlText = htmlText + "<div class='HLTableS2' style='width:" + tWidth + "px'>";
		}
	}

	htmlText = htmlText + "<div class='table'>";
	if (tHeader.length != 0) {
		htmlText = htmlText + "<div class='row header'>";
		for (i in tHeader) {
			htmlText = htmlText + "<div class='cell'>" + tHeader[i] + "</div>";
		}
		htmlText = htmlText + "</div>";
	}

	for (let i in tBody) {
		htmlText = htmlText + "<div class='row'>";
		for (let j in tBody[i]) {
			let tbody = tBody[i][j];
			htmlText = htmlText + "<div class='cell'>" + tbody + "</div>";
		}
		htmlText = htmlText + "</div>";
	}

	htmlText = htmlText + "</div></div>";
	htmlText = htmlText + "</div>";
	document.writeln(htmlText);
}

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
	// ----------↓↓↓ 关闭/显示左侧导航菜单，及相关组件调整 ↓↓↓-------------------------------------------------------------

	$("#guide-icon, nav ~ ul li").click(function () {
		let etop_show = 0;
		let e, etop_hide;
		let findDiv = true;
		let offset_top = document.documentElement.scrollTop;

		$("#divCommand table").each(function () {
			if ($(this).offset().top - offset_top >= 0) {
				e = $(this);
				etop_hide = $(this).offset().top;
				findDiv = false;
				return false;
			}
		});

		if (findDiv) {
			// :not(.copySuccess)，在umbrella页面，i5-1的官方文档链接较长，由于是隐藏div，无法正确调整滚动条
			$("#divCommand div:not(.copySuccess)").each(function () {
				if ($(this).offset().top - offset_top >= 0) {
					e = $(this);
					etop_hide = $(this).offset().top;
					return false;
				}
			});
		}

		if ($("#guide-icon span").hasClass("open")) {
			/*
				有些命令或描述较长，造成换行，而隐藏导航后，宽度增大，高度会降低，
				因此，隐藏导航后divcommand内容相对位置会改变，需要调整

				从divCommand内位于顶部元素开始寻找，找到第一个相对divCommand纵坐标为正的容器
				因命令行配置使用容器table，图片配置使用容器div，先在table中寻找，table的纵坐标均为负时，再找div
				找到相关元素后，分别纪录在左侧导航显示与隐藏的位置
				根据显示/隐藏的变化方式与状态，调整divCommand的滚动条，使用元素位置相对不变
			*/

			$(".main-sidebar").animate({"width": "0px"});
			$("#guide-icon").animate({left: "-5px"});
			$("#divCommand").animate({marginLeft: "50px"}, move_divCommand);
			$(".divStruct").animate({marginLeft: "50px"});

			$(".txtDivT0").animate({ width: $(window).width() - 92 }, {
				step: function(now) {
					$(this).css({
						"min-width": now + "px",
						"max-width": now + "px"
					});
				}
			});

			$(".txtDivT1").animate({ width: $(window).width() - 122 }, {
				step: function(now) {
					$(this).css({
						"min-width": now + "px",
						"max-width": now + "px"
					});
				}
			});

			$(".txtDivT2").animate({ width: $(window).width() - 152 }, {
				step: function(now) {
					$(this).css({
						"min-width": now + "px",
						"max-width": now + "px"
					});
				}
			});

			$(".txtDivT3").animate({ width: $(window).width() - 182 }, {
				step: function(now) {
					$(this).css({
						"min-width": now + "px",
						"max-width": now + "px"
					});
				}
			});

			if (window.location.href.indexOf("ICMPv4.html") > 0 || window.location.href.indexOf("ICMPv6.html") > 0) {
				$(
					"#zwTablev4, " +
					"#zwTablev6, " +
					".divBGv4, " +
					".divBGv6"
				).animate({"left": "77.5px"});
			}

			if (window.location.href.indexOf("DHCPv6.html") > 0) {
				$("#tV6V4").animate({"width": "1400px"});
			}

			if (window.location.href.indexOf("DHCPv4.html") > 0) {
				$("#tOption53").animate({"width": "1370px"});
			}
		}

		else {
			$(".main-sidebar").animate({"width": "350px"});
			$("#guide-icon").animate({left: "340px"});
			$("#divCommand").animate({marginLeft: "380px"}, move_divCommand);

			$(".divStruct").animate({marginLeft: "380px"});

			$(".txtDivT0").animate({ width: $(window).width() - 422 }, {
				step: function(now) {
					$(this).css({
						"min-width": now + "px",
						"max-width": now + "px"
					});
				}
			});

			$(".txtDivT1").animate({ width: $(window).width() - 452 }, {
				step: function(now) {
					$(this).css({
						"min-width": now + "px",
						"max-width": now + "px"
					});
				}
			});

			$(".txtDivT2").animate({ width: $(window).width() - 482 }, {
				step: function(now) {
					$(this).css({
						"min-width": now + "px",
						"max-width": now + "px"
					});
				}
			});

			$(".txtDivT3").animate({ width: $(window).width() - 512 }, {
				step: function(now) {
					$(this).css({
						"min-width": now + "px",
						"max-width": now + "px"
					});
				}
			});

			if (window.location.href.indexOf("ICMPv4.html") > 0 || window.location.href.indexOf("ICMPv6.html") > 0) {
				$(
					"#zwTablev4, " +
					"#zwTablev6, " +
					".divBGv4, " +
					".divBGv6"
				).animate({"left": "407px"});
			}

			if (window.location.href.indexOf("DHCPv6.html") > 0) {
				$("#tV6V4").animate({"width": "1100px"});
			}

			if (window.location.href.indexOf("DHCPv4.html") > 0) {
				$("#tOption53").animate({"width": "1040px"});
			}

		}
		$("#guide-icon span").toggleClass("open");

		function move_divCommand() {
			etop_show = e.offset().top;
			let dtop = document.documentElement.scrollTop;
			document.documentElement.scrollTop = dtop + (etop_show - etop_hide);
		}
	});

	// ----------↑↑↑ 关闭/显示左侧导航菜单，及相关组件调整 ↑↑↑-------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 可以复制内容的配置文件，右上角复制图标，相关功能 ↓↓↓---------------------------------------------------

	/*
		可以复制内容的配置文件，右上角复制图标，复制功能
		目前配置文件类型：Linux配置文件、yaml文件、cisco Viptela
	*/
	function getTXT(elem) {
		let uri = window.location.href;
		let txt = "";

		// 编辑证书页面，使用textarea而非div存放base64编码的证书，不需要处理内容，可直接复制
		if (uri.search("/guide/class/netdevops/pki/certs_edit") == -1) {
			txt = elem.parent().next().next().html();
			// 将使用html符号表示的 空格、>、< 、& 还原
			txt = txt.replace(/<(\/)?span[^>]*>/g, "")
				.replace(/<br( \/)?>/g, "\r\n")
				.replaceAll("&nbsp;", " ")
				.replaceAll("&gt;", ">")
				.replaceAll("&lt;", "<")
				.replaceAll("&amp;", "&");
			// 为了显示工整，添加大量html标签，去掉这些标签并且维持排版
			// <(\/)?span[^>]*>：注释的内容包含class，如：<span class="spanZS">，同时匹配</span>
			// \r\n：windows的换行
		}
		else {
			// 当前为复制按钮，下一个同级为，复制成功的提示，再下一个为存放BASE64证书的textarea
			txt = elem.parent().next().next().val();
		}
		return txt;
	}

	$(".divGet .fa-copy").click(function () {
		const textarea = document.createElement("textarea");	// 直接构建textarea，为了实现换行，需要创建textarea，如果用input的话，实现不了换行。」
		textarea.value = getTXT($(this));		// 设置内容
		document.body.appendChild(textarea);	// 添加临时实例
		textarea.select();						// 选择实例内容
		document.execCommand("Copy");			// 执行复制
		document.body.removeChild(textarea);	// 删除临时实例

		let _copySuccess = $(this).parent().next();
		_copySuccess.fadeIn(500);	// 显示复制成功的div是下一项元素，经历0.5s逐渐显示，等待1s后，经历0.5s逐渐消失
		setTimeout(function () {
			_copySuccess.fadeOut(500)
		}, 1000);
	});


	$(".divGet .fa-download").click(function () {
		// 将字符串转换为 Blob 对象
		// let blob = new Blob([getTXT($(this))], {type: "text/plain"}); // 下载的文件扩展名为.txt
		let blob = new Blob([getTXT($(this))], {type: "application/octet-stream"});  // 下载的文件无扩展名
		// 创建一个隐藏的 <a> 元素
		let link = document.createElement("a");
		link.href = window.URL.createObjectURL(blob);
		link.download = "download";		// 下载文件的文件名

		// 触发点击事件以下载文件
		link.click();

		// 释放 URL 对象
		window.URL.revokeObjectURL(link.href);
	});

	// ----------↑↑↑ 可以复制内容的配置文件，右上角复制图标，相关功能 ↑↑↑---------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 各个协议的结构图，单击、双击事件 ↓↓↓------------------------------------------------------------------

	/*
		各个协议的结构图，单击事件
		timeFN，为了区分单击和双击的定时器
	*/
	let timeFN = null;
	$(".divProtocolStruct").click(function () {
		clearTimeout(timeFN);
		let thisImg = $(this).children();
		timeFN = setTimeout(function () {
			$("#protocolImg").css("width", thisImg.css("width"));
			$("#protocolImg").css("height", thisImg.css("height"));
			$("#protocolImg").css("background-image", thisImg.css("background-image"));
			$("#divProtocol").css("display", "flex");
			$("#divProtocol").css("width", thisImg.css("width"));
			$("#divProtocol").css("height", thisImg.css("height") + 25);
			$("#divProtocol").css("top", 0);
			$("#divProtocol").css("left", "inherit");
			$("#divProtocol").css("right", 0);
			$("#divProtocol").attr("protocolID", thisImg.attr("id"));
		}, 200);
	});

	/*
		各个协议的结构图，双击事件
		timeFN，为了区分单击和双击的定时器
	*/
	$(".divProtocolStruct").dblclick(function () {
		clearTimeout(timeFN);
		let protocolWidth = $(this).children().css("width");
		let protocolHeight = $(this).children().css("height");
		let protocolBgImage = $(this).children().css("background-image");

		let protocolHTML = "<title>" + $(this).children().attr("protocolName") + "结构</title>" +
			"<style type='text/css'>body::-webkit-scrollbar{width:8px;height:8px}body::-webkit-scrollbar-thumb{border-radius:5px;background:#CFCFCF}</style>" +
			"<body style='margin: 0; background-color: #3A3B4C; text-align: center'>" +
			"<div style='font-size: 50px; font-weight: bold; letter-spacing: 2px; margin-top: 20px; color: #FFC000'>" +
			$(this).children().attr("protocolName") + "结构" +
			"</div>" +
			"<div style='margin: 20px auto; width:" + protocolWidth + "; height:" + protocolHeight + "; " + "background-image: " + protocolBgImage + "'></div>" +
			"</body>";

		let nwin = window.open("");
		nwin.document.writeln(protocolHTML);
	});

	/*
		各个协议的结构图，单击后，显示独立的结构图，关闭该结构图
	*/
	$("#close").click(function () {
		$("#divProtocol").css("display", "none");
	})

	// ----------↑↑↑ 各个协议的结构图，单击、双击事件 ↑↑↑ -----------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 某些图片双击新标签页单独显示 ↓↓↓---------------------------------------------------------------------

	$(".divConfigImgT0[imgDescribe], .divConfigImgT1[imgDescribe], .divConfigImgT2[imgDescribe], .divConfigImgT3[imgDescribe]").dblclick(function () {
		let protocolHTML = "<title>" + $(this).attr("imgDescribe") + "</title>" +
			"<style type='text/css'>body::-webkit-scrollbar{width:8px;height:8px}body::-webkit-scrollbar-thumb{border-radius:5px;background:#CFCFCF}</style>" +
			"<body style='margin: 0; background-color: #3A3B4C; text-align: center'>" +
			"<div style='font-size: 50px; font-weight: bold; letter-spacing: 2px; margin-top: 20px; color: #FFC000'>" +
			$(this).attr("imgDescribe") +
			"</div>" +
			"<img style='margin-top: 20px;max-width: 100%;height: auto;' src='" + $(this).children("img").attr("src") + "'>" +
			"</body>";

		let nwin = window.open("");
		nwin.document.writeln(protocolHTML);
	});

	// ----------↑↑↑ 某些图片双击新标签页单独显示 ↑↑↑----------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 图片配置类页面，当左侧菜单关闭时刷新，水平滚动条会保持在原位置，图片被遮挡，将流动条移到最左边 ↓↓↓----------

	setTimeout(function () {
		$("html, body").animate({scrollLeft: 0});
	}, 0);

	// ----------↑↑↑ 图片配置类页面，当左侧菜单关闭时刷新，水平滚动条会保持在原位置，图片被遮挡，将流动条移到最左边 ↑↑↑----------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 少量带锚的链接，跳转后距离不对，调整 ↓↓↓--------------------------------------------------------------

	if (window.location.hash) {
							 // 获取不含#的锚点名
		let target = $("#" + window.location.hash.substring(1));
		if (target.length > 0) {
			let offset = 50;	// 思科、华为的配置中的跳转
			if (window.location.href.indexOf("/guide/class/protocol") >= 0) {
				offset = 95;	// IPv6分片首部
			}

			// 在滚动条原有位置上，减小移动距离
			$("html, body").animate({
				scrollTop: target.offset().top - offset
			});
		}
	}

	$("textarea").mousemove(function(e) {
		const isOnVerticalScrollbar = e.offsetX > this.clientWidth; // 检查是否在垂直滚动条上
		const isOnHorizontalScrollbar = e.offsetY > this.clientHeight; // 检查是否在水平滚动条上

		if (isOnVerticalScrollbar || isOnHorizontalScrollbar) {
			this.style.cursor = "default";
		}
		else {
			this.style.cursor = "text";
		}
	});

	// ----------↑↑↑ 少量带锚的链接，跳转后距离不对，调整 ↑↑↑--------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 首页自动生成协议的编号 ↓↓↓---------------------------------------------------------------------------

	// 协议名，
	// 协议宽度，
	// 协议行数，
	// 一行协议编号（二行协议第一行），
	// 二行协议第二行，
	// 协议详细页面链接

	const l3_protocol = [
		["IPv4", 2, 1, "0x0800", "", "class/protocol/l3/IPv4.html"],
		["ARP", 2, 1, "0x0806", "", "class/protocol/l3/ARP.html"],
		["IPv6", 2, 1, "0x08dd", "", "class/protocol/l3/IPv6.html"],
		["802.1Q", 2, 1, "0x8100", "", "class/protocol/l2/802.1Q.html"],
		["MPLS", 2, 2, "Unicast：0x8847", "Multicast：0x8848", ""],
		["PPPoE", 2, 2, "Discovery：0x8863", "Session：0x8864", ""],
		["EAPoL", 2, 1, "0x888e", "", ""],
		["ERSPAN", 2, 1, "0x88be", "", ""],
		["MACSec&nbsp;(&nbsp;802.1ae&nbsp;)&nbsp;", 2, 1, "0x88e5", "", ""],
	];

	const l4_protocol = [
		["ICMPv4", 1, 1, "1", "", "class/protocol/l4/ICMPv4.html"],
		["IGMP", 1, 1, "2", "", ""],
		["TCP", 1, 1, "6", "", "class/protocol/l4/TCP.html"],
		["UDP", 1, 1, "17", "", "class/protocol/l4/UDP.html"],
		["IPv6", 1, 1, "41", "", "class/protocol/l3/IPv6.html"],
		["IPv6 Fragment header", 2, 1, "44", "", "class/protocol/l3/IPv6.html#i3-5"],
		["GRE", 1, 1, "47", "", ""],
		["ESP", 1, 1, "50", "", ""],
		["AH", 1, 1, "51", "", ""],
		["ICMPv6", 1, 1, "58", "", "class/protocol/l4/ICMPv6.html"],
		["EIGRP", 1, 1, "88", "", ""],
		["OSPF", 1, 1, "89", "", ""],
		["EoIP", 1, 1, "97", "", ""],
		["PIM", 1, 1, "103", "", ""],
		["VRRP", 1, 1, "112", "", ""],
	];

	const tcp_protocol = [
		["FTP-Data&nbsp;(&nbsp;Active&nbsp;)&nbsp;", 2, 1, "20", "", "class/protocol/l7/FTP.html"],
		["FTP", 2, 1, "21", "", "class/protocol/l7/FTP.html"],
		["SSH / SCP / SFTP", 2, 1, "22", "", ""],
		["telnet", 2, 1, "23", "", ""],
		["SMTP", 2, 1, "25", "", ""],
		["TACACS+", 2, 1, "49", "", ""],
		["DNS", 2, 1, "53", "", "class/protocol/l7/DNS.html"],
		["HTTP", 2, 1, "80", "", "class/protocol/l7/HTTP.html"],
		["POP3", 2, 1, "110", "", ""],
		["IMAP", 2, 1, "143", "", ""],
		["BGP", 2, 1, "179", "", ""],
		["LDAP", 2, 1, "389", "", ""],
		["HTTPS&nbsp;(&nbsp;HTTP1/2&nbsp;)&nbsp;", 2, 1, "443", "", "class/protocol/l7/HTTP.html"],
		["SMTPS", 2, 1, "465（587）", "", ""],
		["LDAPS", 2, 1, "636", "", ""],
		["MSDP", 2, 1, "639", "", ""],
		["LDP Session", 2, 1, "646", "", ""],
		["Netconf", 2, 1, "830", "", ""],
		["IMAPS", 2, 1, "993", "", ""],
		["POP3S", 2, 1, "995", "", ""],
	];

	const udp_protocol = [
		["DNS", 2, 1, "53", "", "class/protocol/l7/DNS.html"],
		["DHCPv4", 3, 2, "Server&nbsp;(&nbsp;bootps&nbsp;)&nbsp;/&nbsp;Relay：67", "Client&nbsp;(&nbsp;bootpc&nbsp;)&nbsp;：68", "class/protocol/l7/DHCPv4.html"],
		["TFTP", 2, 1, "69", "", "class/protocol/l7/TFTP.html"],
		["NTP&nbsp;/&nbsp;SNTP", 2, 1, "123", "", "class/protocol/l7/NTP.html"],
		["SNMP", 2, 2, "Get&nbsp;/&nbsp;Set：161", "Trap：162", ""],
		["HTTPS&nbsp;(&nbsp;HTTP3&nbsp;)&nbsp;", 2, 1, 443, "", "class/protocol/l7/HTTP.html"],
		["IKE", 2, 1, "500", "", ""],
		["syslog", 2, 1, "514", "", "class/protocol/l7/syslog.html"],
		["RIP", 2, 1, "520", "", ""],
		["DHCPv6", 2, 2, "Server&nbsp;/&nbsp;Relay：547", "Client：546", "class/protocol/l7/DHCPv6.html"],
		["LDP Discovery", 2, 1, "646", "", ""],
		["GDOI&nbsp;(&nbsp;GETVPN&nbsp;)&nbsp;", 2, 1, "848", "", ""],
		["RADIUS", 4, 2, "Authentication&nbsp;/&nbsp;Authorization：1812&nbsp;(&nbsp;1645&nbsp;)&nbsp;", "Accounting：1813&nbsp;(&nbsp;1646&nbsp;)&nbsp;", ""],
		["HSRP", 2, 1, "1985", "", ""],
		["RadSec&nbsp;(&nbsp;Radius over DTLS&nbsp;)&nbsp;", 3, 1, "2083", "", ""],
		["BFD", 2, 1, "3784", "", ""],
		["IKE&nbsp;(&nbsp;NAT-T&nbsp;)&nbsp;", 2, 1, "4500", "", ""],
		["VXLAN", 2, 1, "4789", "", "class/protocol/l7/VXLAN.html"],
		["CAPWAP", 2, 2, "Control：5246", "Data：5247", ""],
		["Mobility Protocol", 3, 2, "Control：16666", "Data：16667", ""],
	];

	const tcp_application = [
		["SQL Server DB", 2, 1, "1433", "", ""],
		["Oracle DB", 2, 1, "1521", "", ""],
		["MySQL DB", 2, 1, "3306", "", ""],
		["Microsoft RDP", 2, 1, "3389", "", ""],
		["PostgrepSQL DB", 2, 1, "5432", "", ""],
	];

	const udp_application = [];

	const l34_color = ["c1", "c4", "c6", "c3", "c5", "c2"];
	const l7_color = ["c1", "c2", "c3"];
	let index_tcp = 0;
	let index_udp = 0;

	function createProtocol34(protocol_list, protocol_l) {
		let i = 0;  // 用户颜色数组
		let j = 1;  // 用于行ID
		let k = 0;  // 用于列
		let htmlText = "<div class='row' id='" + protocol_l + "r" + j + "'>";
		for (let index in protocol_list) {
			if (k + protocol_list[index][1] > 12) {
				j++;
				htmlText = htmlText + "</div><br />";
				htmlText = htmlText + "<div class='row' id='" + protocol_l + "r" + j + "'>";
				i = 0;
				k = 0;
			}
			htmlText = htmlText + "<div class='col-lg-" + protocol_list[index][1] + "'>";
			if (protocol_list[index][2] == 1) {
				htmlText = htmlText + "<div class='" + protocol_l + " " + l34_color[i % 6];

				if (protocol_list[index][0].indexOf("MACSec") >= 0) {
					htmlText = htmlText + " macsec";
				}
				htmlText = htmlText + "'>";

				if (protocol_list[index][5] == "") {
					htmlText = htmlText + protocol_list[index][0] + "：" + protocol_list[index][3];
				}
				else {
					htmlText = htmlText + "<a href='" + protocol_list[index][5] + "' >" + protocol_list[index][0] + '：' + protocol_list[index][3] + "</a>";
				}

				htmlText = htmlText + "</div>";
			}
			else {
				htmlText = htmlText + "<div class='" + protocol_l + " " + l34_color[i % 6] + " two-row-" + protocol_l + "'>";

				if (protocol_list[index][5] != "") {
					htmlText = htmlText + "<a href='" + protocol_list[index][5] + "'>";
				}

				htmlText = htmlText + "<table border='0' cellspacing='0' cellpadding='0'>";
				htmlText = htmlText + "<tr>";
				htmlText = htmlText + "<td style='text-align: right'>" + protocol_list[index][0] + "&nbsp;&nbsp;" + "</td>";
				htmlText = htmlText + "<td>" + protocol_list[index][3].split("：")[0] + "：" + "</td>";
				htmlText = htmlText + "<td>" + protocol_list[index][3].split("：")[1] + "</td>";
				htmlText = htmlText + "</tr>";
				htmlText = htmlText + "<tr>";
				htmlText = htmlText + "<td></td>";
				htmlText = htmlText + "<td>" + protocol_list[index][4].split("：")[0] + "：" + "</td>";
				htmlText = htmlText + "<td>" + protocol_list[index][4].split("：")[1] + "</td>";
				htmlText = htmlText + "</tr>";
				htmlText = htmlText + "</table>";

				if (protocol_list[index][5] != "") {
					htmlText = htmlText + "</a>";
				}

				htmlText = htmlText + "</div>";
			}
			htmlText = htmlText + "</div>";

			i++;
			k = k + protocol_list[index][1];
		}
		htmlText = htmlText + "</div><br />";
		return htmlText;
	}

	function createProtocol7(tcp_list, udp_list, protocol_l) {
		let i = 0;  // 用户颜色数组
		let j = 1;  // 用于行ID
		let k = 0;  // 用于列
		let htmlText = "<div class='row' id='" + protocol_l + "r" + j + "'>";
		index_tcp = 0;
		index_udp = 0

		for (; index_tcp < tcp_list.length; index_tcp++) {
			if (k + tcp_list[index_tcp][1] > 6) {
				j++;
				htmlText = createProtocol7u(htmlText, udp_list, k, protocol_l) + "</div><br />";
				htmlText = htmlText + "<div class='row' id='" + protocol_l + "r" + j + "'>";
				i = 0;
				k = 0;
			}
			htmlText = htmlText + "<div class='col-lg-" + tcp_list[index_tcp][1] + "'>";
			if (tcp_list[index_tcp][2] == 1) {
				htmlText = htmlText + "<div class='tcp " + l7_color[i % 3];

				if (tcp_list[index_tcp][0].indexOf("MACSec") >= 0) {
					htmlText = htmlText + " macsec";
				}
				htmlText = htmlText + "'>";

				if (tcp_list[index_tcp][5] == "") {
					htmlText = htmlText + tcp_list[index_tcp][0] + "：" + tcp_list[index_tcp][3];
				} else {
					htmlText = htmlText + "<a href='" + tcp_list[index_tcp][5] + "' >" + tcp_list[index_tcp][0] + "：" + tcp_list[index_tcp][3] + "</a>";
				}

				htmlText = htmlText + "</div>";
			}
			else {
				htmlText = htmlText + "<div class='tcp " + l7_color[i % 3] + " two-row-" + protocol_l + "'>";

				if (tcp_list[index_tcp][5] != "") {
					htmlText = htmlText + "<a href='" + tcp_list[index_tcp][5] + "'>";
				}

				htmlText = htmlText + "<table border='0' cellspacing='0' cellpadding='0'>";
				htmlText = htmlText + "<tr>";
				htmlText = htmlText + "<td style='text-align: right'>" + tcp_list[index_tcp][0] + "&nbsp;&nbsp;" + "</td>";
				htmlText = htmlText + "<td>" + tcp_list[index_tcp][3].split("：")[0] + "：</td>";
				htmlText = htmlText + "<td>" + tcp_list[index_tcp][3].split("：")[1] + "</td>";
				htmlText = htmlText + "</tr>";
				htmlText = htmlText + "<tr>";
				htmlText = htmlText + "<td></td>";
				htmlText = htmlText + "<td>" + tcp_list[index_tcp][4].split("：")[0] + "：</td>";
				htmlText = htmlText + "<td>" + tcp_list[index_tcp][4].split("：")[1] + "</td>";
				htmlText = htmlText + "</tr>";
				htmlText = htmlText + "</table>";

				if (tcp_list[index_tcp][5] != "") {
					htmlText = htmlText + "</a>";
				}

				htmlText = htmlText + "</div>";
			}
			htmlText = htmlText + "</div>";

			i++;
			k = k + tcp_list[index_tcp][1];
		}

		while (true) {
			if (index_tcp >= tcp_list.length && index_udp < udp_list.length) {
				if (k > 0) {
					htmlText = createProtocol7u(htmlText, udp_list, k, protocol_l);
					k = 0;
				}
				else {
					htmlText = htmlText + "</div><br />";
					j++;
					htmlText = htmlText + "<div class='row' id='" + protocol_l + "r" + j + "'>";
					htmlText = createProtocol7u(htmlText, udp_list, 0, protocol_l);
				}
			}
			else {
				break;
			}
		}

		return htmlText = htmlText + "</div><br />";
	}

	function createProtocol7u(htmlText, udp_list, offset, protocol_l) {
		let i = 0;  // 用户颜色数组
		let j = 1;  // 用于行ID
		let k = 0;  // 用于列
		for (let l = 0; index_udp < udp_list.length; index_udp++) {
			if (k + udp_list[index_udp][1] > 6) {
				j++;
				i = 0;
				k = 0;
				break
			}

			htmlText = htmlText + "<div class='col-lg-" + udp_list[index_udp][1];

			if (l == 0) {
				htmlText = htmlText + " offset-lg-" + (6 - offset).toString();
				l++;
			}

			htmlText = htmlText + "'>";
			if (udp_list[index_udp][2] == 1) {
				htmlText = htmlText + "<div class='udp " + l7_color[i % 3];

				if (udp_list[index_udp][0].indexOf("MACSec") >= 0) {
					htmlText = htmlText + " macsec";
				}
				htmlText = htmlText + "'>";

				if (udp_list[index_udp][5] == "") {
					htmlText = htmlText + udp_list[index_udp][0] + "：" + udp_list[index_udp][3];
				}
				else {
					htmlText = htmlText + "<a href='" + udp_list[index_udp][5] + "' >" + udp_list[index_udp][0] + "：" + udp_list[index_udp][3] + "</a>";
				}

				htmlText = htmlText + "</div>";
			}
			else {
				htmlText = htmlText + "<div class='udp " + l7_color[i % 3] + " two-row-" + protocol_l + "'>";

				if (udp_list[index_udp][5] != "") {
					htmlText = htmlText + "<a href='" + udp_list[index_udp][5] + "'>";
				}

				htmlText = htmlText + "<table border='0' cellspacing='0' cellpadding='0'>";
				htmlText = htmlText + "<tr>";
				htmlText = htmlText + "<td style='text-align: right'>" + udp_list[index_udp][0] + "&nbsp;&nbsp;" + "</td>";
				htmlText = htmlText + "<td>" + udp_list[index_udp][3].split("：")[0] + "：" + "</td>";
				htmlText = htmlText + "<td>" + udp_list[index_udp][3].split("：")[1] + "</td>";
				htmlText = htmlText + "</tr>";
				htmlText = htmlText + "<tr>";
				htmlText = htmlText + "<td></td>";
				htmlText = htmlText + "<td>" + udp_list[index_udp][4].split("：")[0] + "：" + "</td>";
				htmlText = htmlText + "<td>" + udp_list[index_udp][4].split("：")[1] + "</td>";
				htmlText = htmlText + "</tr>";
				htmlText = htmlText + "</table>";

				if (udp_list[index_udp][5] != "") {
					htmlText = htmlText + "</a>";
				}

				htmlText = htmlText + "</div>";
			}
			htmlText = htmlText + "</div>";

			i++;
			k = k + udp_list[index_udp][1];
		}
		return htmlText;
	}

	function reverse_protocol(protocol_l) {
		let row_id = [];
		let row_innerHTML = [];

		for (let i = 1; ; i++) {
			let element = document.getElementById(protocol_l + "r" + i);
			if (element) {
				row_id.push(protocol_l + "r" + i);
				row_innerHTML.push(element.innerHTML);
			}
			else {
				break;
			}
		}

		for (let i = 0; i < row_id.length; i++) {
			document.getElementById(row_id[i]).innerHTML = row_innerHTML[row_innerHTML.length - i - 1];
		}
	}

	let ll = `
		<div class="row">
			<div class="col-lg-12" style="border-bottom: dashed 4px #829BA5"></div>
		</div><br />
	`;
	let ll74 = `
		<div class="row">
			<div id="ll74" class="col-lg-12" style="border-bottom: dashed 4px #829BA5"></div>
		</div><br />
	`;
	let htmlText = "";

	htmlText = htmlText + createProtocol7(tcp_application, udp_application, "app");
	htmlText = htmlText + ll;
	htmlText = htmlText + createProtocol7(tcp_protocol, udp_protocol, "l7");
	htmlText = htmlText + ll74;
	htmlText = htmlText + createProtocol34(l4_protocol, "l4");
	htmlText = htmlText + ll;
	htmlText = htmlText + createProtocol34(l3_protocol, "l3");

	$("#protocol_list").append(htmlText);

	reverse_protocol("l3");
	reverse_protocol("l4");
	reverse_protocol("l7");
	reverse_protocol("app");

	if($("#appr1").length) {
		let jt_up_top = $("#appr1").offset().top - 10;
		$("#jt_up").offset({top: jt_up_top});

		let jt_down_top = $("#ll74").offset().top - 30;
		$("#jt_down").offset({top: jt_down_top});

		$("#jg").offset({top: (jt_up_top + 24)});
		$("#jg").css("height", jt_down_top - jt_up_top - 24 + "px");
	}


	// ----------↑↑↑ 首页自动生成协议的编号 ↑↑↑---------------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ ICMPv4各类type、code高亮 ↓↓↓------------------------------------------------------------------------

	// ------------------------- Type 3 选择器 开始  -----------------------------------

	const _c31_icmpv4 = createSelection("#tICMPv4Type", "_c31");
	const _r3_icmpv4 = createSelection("#tICMPv4Type", "_r3");

	const _c191_icmpv4 = createSelection("#tICMPv4Type", "_c191");

	const Type3_Col1_icmpv4 = createCellSelection("#tICMPv4Type", 1, 1, 3, 19);
	const Type3_Col12 = createCellSelection("#tICMPv4Type", 1, 2, 3, 19);
	const Type3_RowAll_icmpv4 = createRowSelection("#tICMPv4Type", 3, 19);
	const Type3_RowType_icmpv4 = createRowSelection("#tICMPv4Type", 4, 19);

	// ------------------------- Type 3 选择器 结束 -----------------------------------
	// ------------------------- Type 5 选择器 开始 -----------------------------------

	const _c211_icmpv4 = createSelection("#tICMPv4Type", "_c211");
	const _r21_icmpv4 = createSelection("#tICMPv4Type", "_r21");

	const _c251_icmpv4 = createSelection("#tICMPv4Type", "_c251");

	const Type5_Col1_icmpv4 = createCellSelection("#tICMPv4Type", 1, 1, 21, 25);
	const Type5_Col12_icmpv4 = createCellSelection("#tICMPv4Type", 1, 2, 21, 25);
	const Type5_RowAll_icmpv4 = createRowSelection("#tICMPv4Type", 21, 25);
	const Type5_RowType_icmpv4 = createRowSelection("#tICMPv4Type", 22, 25);

	// ------------------------- Type 5 选择器 结束 -----------------------------------
	// ------------------------- Type 11 选择器 开始 -----------------------------------

	const _c291_icmpv4 = createSelection("#tICMPv4Type", "_c291");
	const _r29_icmpv4 = createSelection("#tICMPv4Type", "_r29");

	const _c311_icmpv4 = createSelection("#tICMPv4Type", "_c311");

	const Type11_Col1_icmpv4 = createCellSelection("#tICMPv4Type", 1, 1, 29, 31);
	const Type11_Col12_icmpv4 = createCellSelection("#tICMPv4Type", 1, 2, 29, 31);
	const Type11_RowAll_icmpv4 = createRowSelection("#tICMPv4Type", 29, 31);
	const Type11_RowType_icmpv4 = createRowSelection("#tICMPv4Type", 30, 31);

	// ------------------------- Type 11 选择器 结束 -----------------------------------
	// ------------------------- Type 12 选择器 开始 -----------------------------------

	const _c321_icmpv4 = createSelection("#tICMPv4Type", "_c321");
	const _r32_icmpv4 = createSelection("#tICMPv4Type", "_r32");

	const _c341_icmpv4 = createSelection("#tICMPv4Type", "_c341");

	const Type12_Col1_icmpv4 = createCellSelection("#tICMPv4Type", 1, 1, 32, 34);
	const Type12_Col12_icmpv4 = createCellSelection("#tICMPv4Type", 1, 2, 32, 34);
	const Type12_RowAll_icmpv4 = createRowSelection("#tICMPv4Type", 32, 34);
	const Type12_RowType_icmpv4 = createRowSelection("#tICMPv4Type", 33, 34);

	// ------------------------- Type 12 选择器 结束 -----------------------------------
	// ------------------------- Type 3 高亮 开始  -----------------------------------
	// ------------------------- Type 3 第一行 -----------------------------------

	$(Type3_Col1_icmpv4.replace(_c31_icmpv4, _r3_icmpv4)).mouseover(function () {
		$(Type3_RowAll_icmpv4).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type3_Col1_icmpv4).css("border-bottom-color", "#CBCFFF");
		$(Type3_Col12).css("color", "#8000FF");
	});
	$(Type3_Col1_icmpv4.replace(_c31_icmpv4, _r3_icmpv4)).mouseleave(function () {
		$(Type3_RowAll_icmpv4).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type3_Col1_icmpv4).css("border-bottom-color", "#5A5D6F");
		$(_c191_icmpv4.substring(0, _c191_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type3_Col12).css("color", "#FFFF00");
	});

	$(Type3_RowType_icmpv4).mouseover(function () {
		$(_r3_icmpv4.substring(0, _r3_icmpv4.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(n+3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type3_Col1_icmpv4).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c191_icmpv4.substring(0, _c191_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type3_RowType_icmpv4).mouseleave(function () {
		$(Type3_RowAll_icmpv4).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type3_Col12).css("color", "#FFFF00");
		$(Type3_Col1_icmpv4).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c191_icmpv4.substring(0, _c191_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ------------------------- Type 3 高亮 结束  -----------------------------------
	// ------------------------- Type 5 高亮 开始  -----------------------------------
	// ------------------------- Type 5 第一行 -----------------------------------

	$(Type5_Col1_icmpv4.replace(_c211_icmpv4, _r21_icmpv4)).mouseover(function () {
		$(Type5_RowAll_icmpv4).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type5_Col1_icmpv4).css("border-bottom-color", "#CBCFFF");
		$(Type5_Col12_icmpv4).css("color", "#8000FF");
		$(_c251_icmpv4.substring(0, _c251_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type5_Col1_icmpv4.replace(_c211_icmpv4, _r21_icmpv4)).mouseleave(function () {
		$(Type5_RowAll_icmpv4).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type5_Col1_icmpv4).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c251_icmpv4.substring(0, _c251_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type5_Col12_icmpv4).css("color", "#FFFF00");
		$(_c251_icmpv4.substring(0, _c251_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});


	$(Type5_RowType_icmpv4).mouseover(function () {
		$(_r21_icmpv4.substring(0, _r21_icmpv4.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(n+3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type5_Col1_icmpv4).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c251_icmpv4.substring(0, _c251_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type5_RowType_icmpv4).mouseleave(function () {
		$(Type5_RowAll_icmpv4).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type5_Col12_icmpv4).css("color", "#FFFF00");
		$(Type5_Col1_icmpv4).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c251_icmpv4.substring(0, _c251_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ------------------------- Type 5 高亮 结束  -----------------------------------
	// ------------------------- Type 11 高亮 开始  -----------------------------------
	// ------------------------- Type 11 第一行 -----------------------------------

	$(Type11_Col1_icmpv4.replace(_c291_icmpv4, _r29_icmpv4)).mouseover(function () {
		$(Type11_RowAll_icmpv4).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type11_Col1_icmpv4).css("border-bottom-color", "#CBCFFF")
		$(Type11_Col12_icmpv4).css("color", "#8000FF");
	});
	$(Type11_Col1_icmpv4.replace(_c291_icmpv4, _r29_icmpv4)).mouseleave(function () {
		$(Type11_RowAll_icmpv4).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type11_Col1_icmpv4).css("border-bottom-color", "#5A5D6F");
		$(_c311_icmpv4.substring(0, _c311_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type11_Col12_icmpv4).css("color", "#FFFF00");
	});


	$(Type11_RowType_icmpv4).mouseover(function () {
		$(_r29_icmpv4.substring(0, _r29_icmpv4.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(n+3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type11_Col1_icmpv4).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c311_icmpv4.substring(0, _c311_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type11_RowType_icmpv4).mouseleave(function () {
		$(Type11_RowAll_icmpv4).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type11_Col12_icmpv4).css("color", "#FFFF00");
		$(Type11_Col1_icmpv4).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c311_icmpv4.substring(0, _c311_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ------------------------- Type 11 高亮 结束  -----------------------------------
	// ------------------------- Type 12 高亮 开始  -----------------------------------
	// ------------------------- Type 12 第一行 -----------------------------------

	$(Type12_Col1_icmpv4.replace(_c321_icmpv4, _r32_icmpv4)).mouseover(function () {
		$(Type12_RowAll_icmpv4).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type12_Col1_icmpv4).css("border-bottom-color", "#CBCFFF");
		$(Type12_Col12_icmpv4).css("color", "#8000FF");
	});
	$(Type12_Col1_icmpv4.replace(_c321_icmpv4, _r32_icmpv4)).mouseleave(function () {
		$(Type12_RowAll_icmpv4).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type12_Col1_icmpv4).css("border-bottom-color", "#5A5D6F");
		$(_c341_icmpv4.substring(0, _c341_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type12_Col12_icmpv4).css("color", "#FFFF00");
	});


	$(Type12_RowType_icmpv4).mouseover(function () {
		$(_r32_icmpv4.substring(0, _r32_icmpv4.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(n+3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type12_Col1_icmpv4).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c341_icmpv4.substring(0, _c341_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type12_RowType_icmpv4).mouseleave(function () {
		$(Type12_RowAll_icmpv4).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type12_Col12_icmpv4).css("color", "#FFFF00");
		$(Type12_Col1_icmpv4).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c341_icmpv4.substring(0, _c341_icmpv4.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ------------------------- Type 12 高亮 结束  -----------------------------------

	// ----------↑↑↑ ICMPv4各类type、code高亮 ↑↑↑------------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ ICMPv6各类type、code高亮 ↓↓↓------------------------------------------------------------------------

	// ------------------------- Type 1 选择器 开始  -----------------------------------

	const _c21_icmpv6 = createSelection("#tICMPv6Type", "_c21");
	const _r2_icmpv6 = createSelection("#tICMPv6Type", "_r2");

	const _c91_icmpv6 = createSelection("#tICMPv6Type", "_c91");

	const Type1_Col1_icmpv6 = createCellSelection("#tICMPv6Type", 1, 1, 2, 9);
	const Type1_Col12_icmpv6 = createCellSelection("#tICMPv6Type", 1, 2, 2, 9);
	const Type1_RowAll_icmpv6 = createRowSelection("#tICMPv6Type", 2, 9);
	const Type1_RowType_icmpv6 = createRowSelection("#tICMPv6Type", 3, 9);

	// ------------------------- Type 1 选择器 结束 -----------------------------------
	// ------------------------- Type 3 选择器 开始 -----------------------------------

	const _c111_icmpv6 = createSelection("#tICMPv6Type", "_c111");
	const _r11_icmpv6 = createSelection("#tICMPv6Type", "_r11");

	const _c131_icmpv6 = createSelection("#tICMPv6Type", "_c131");

	const Type3_Col1_icmpv6 = createCellSelection("#tICMPv6Type", 1, 1, 11, 13);
	const Type3_Col12_icmpv6 = createCellSelection("#tICMPv6Type", 1, 2, 11, 13);
	const Type3_RowAll_icmpv6 = createRowSelection("#tICMPv6Type", 11, 13);
	const Type3_RowType_icmpv6 = createRowSelection("#tICMPv6Type", 12, 13);

	// ------------------------- Type 3 选择器 结束 -----------------------------------
	// ------------------------- Type 4 选择器 开始 -----------------------------------

	const _c141_icmpv6 = createSelection("#tICMPv6Type", "_c141");
	const _r14_icmpv6 = createSelection("#tICMPv6Type", "_r14");

	const _c171_icmpv6 = createSelection("#tICMPv6Type", "_c171");

	const Type4_Col1_icmpv6 = createCellSelection("#tICMPv6Type", 1, 1, 14, 17);
	const Type4_Col12_icmpv6 = createCellSelection("#tICMPv6Type", 1, 2, 14, 17);
	const Type4_RowAll_icmpv6 = createRowSelection("#tICMPv6Type", 14, 17);
	const Type4_RowType_icmpv6 = createRowSelection("#tICMPv6Type", 15, 17);

	// ------------------------- Type 4 选择器 结束 -----------------------------------

	// ------------------------- Type 1 高亮 开始  -----------------------------------
	// ------------------------- Type 1 第一行 -----------------------------------

	$(Type1_Col1_icmpv6.replace(_c21_icmpv6, _r2_icmpv6)).mouseover(function () {
		$(Type1_RowAll_icmpv6).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type1_Col1_icmpv6).css("border-bottom-color", "#CBCFFF");
		$(_c91_icmpv6.substring(0, _c91_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type1_Col12_icmpv6).css("color", "#8000FF");
	});
	$(Type1_Col1_icmpv6.replace(_c21_icmpv6, _r2_icmpv6)).mouseleave(function () {
		$(Type1_RowAll_icmpv6).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type1_Col1_icmpv6).css("border-bottom-color", "#5A5D6F");
		$(_c91_icmpv6.substring(0, _c91_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type1_Col12_icmpv6).css("color", "#FFFF00");
	});


	$(Type1_RowType_icmpv6).mouseover(function () {
		$(_r2_icmpv6.substring(0, _r2_icmpv6.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type1_Col1_icmpv6).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c91_icmpv6.substring(0, _c91_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type1_RowType_icmpv6).mouseleave(function () {
		$(Type1_RowAll_icmpv6).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type1_Col12_icmpv6).css("color", "#FFFF00");
		$(Type1_Col1_icmpv6).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c91_icmpv6.substring(0, _c91_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ------------------------- Type 1 高亮 结束  -----------------------------------
	// ------------------------- Type 3 高亮 开始  -----------------------------------
	// ------------------------- Type 3 第一行 -----------------------------------

	$(Type3_Col1_icmpv6.replace(_c111_icmpv6, _r11_icmpv6)).mouseover(function () {
		$(Type3_RowAll_icmpv6).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type3_Col1_icmpv6).css("border-bottom-color", "#CBCFFF");
		$(_c131_icmpv6.substring(0, _c131_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type3_Col12_icmpv6).css("color", "#8000FF");
	});
	$(Type3_Col1_icmpv6.replace(_c111_icmpv6, _r11_icmpv6)).mouseleave(function () {
		$(Type3_RowAll_icmpv6).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type3_Col1_icmpv6).css("border-bottom-color", "#5A5D6F");
		$(_c131_icmpv6.substring(0, _c131_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type3_Col12_icmpv6).css("color", "#FFFF00");
	});

	$(Type3_RowType_icmpv6).mouseover(function () {
		$(_r11_icmpv6.substring(0, _r11_icmpv6.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type3_Col1_icmpv6).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c131_icmpv6.substring(0, _c131_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type3_RowType_icmpv6).mouseleave(function () {
		$(Type3_RowAll_icmpv6).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type3_Col12_icmpv6).css("color", "#FFFF00");
		$(Type3_Col1_icmpv6).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c131_icmpv6.substring(0, _c131_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ------------------------- Type 3 高亮 结束  -----------------------------------
	// ------------------------- Type 4 高亮 开始  -----------------------------------
	// ------------------------- Type 4 第一行 -----------------------------------

	$(Type4_Col1_icmpv6.replace(_c141_icmpv6, _r14_icmpv6)).mouseover(function () {
		$(Type4_RowAll_icmpv6).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type4_Col1_icmpv6).css("border-bottom-color", "#CBCFFF");
		$(_c171_icmpv6.substring(0, _c171_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type4_Col12_icmpv6).css("color", "#8000FF");
	});
	$(Type4_Col1_icmpv6.replace(_c141_icmpv6, _r14_icmpv6)).mouseleave(function () {
		$(Type4_RowAll_icmpv6).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type4_Col1_icmpv6).css("border-bottom-color", "#5A5D6F");
		$(_c171_icmpv6.substring(0, _c171_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type4_Col12_icmpv6).css("color", "#FFFF00");
	});

	$(Type4_RowType_icmpv6).mouseover(function () {
		$(_r14_icmpv6.substring(0, _r14_icmpv6.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type4_Col1_icmpv6).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c171_icmpv6.substring(0, _c171_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type4_RowType_icmpv6).mouseleave(function () {
		$(Type4_RowAll_icmpv6).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type4_Col12_icmpv6).css("color", "#FFFF00");
		$(Type4_Col1_icmpv6).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c171_icmpv6.substring(0, _c171_icmpv6.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ----------↑↑↑ ICMPv6各类type、code高亮 ↑↑↑------------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ HTTP各类首部高亮 ↓↓↓--------------------------------------------------------------------------------

	function toDetail(id) {
		let href = window.location.href.split("#")[0];
		location.href = href + id;
		let topp = $("#divCommand").offset().top + 160;

		let leftt = $("#divCommand").offset().left;
		$("#divCommand").offset({top: topp, left: leftt});
	}

	$("#tStatus2 .row").click(function () {
		let index = $("#tStatus2 .row").index($(this)); // 获取该行在表格中为第几行

		switch (index) {
			case 1: // 200 OK
				toDetail("#i4-2-1");
				break;

			case 2: // 201 Created
				toDetail("#i4-2-2");
				break;

			case 3: // 204 No Content
				toDetail("#i4-2-3");
				break;

			case 4: // 206 Partial Content
				toDetail("#i4-2-4");
				break;

			case 5: // 301 Moved Permanently
				toDetail("#i4-3-1");
				break;

			case 6: // 302 Moved Temporarily
				toDetail("#i4-3-2");
				break;

			case 7: // 303 See Other
				toDetail("#i4-3-3");
				break;

			case 8: // 304 Not Modified
				toDetail("#i4-3-4");
				break;

			case 9: // 307 Temporary Redirect
				toDetail("#i4-3-5");
				break;

			case 10: // 400 Bad Request
				toDetail("#i4-4-1");
				break;

			case 11: // 401 Uncuthorized
				toDetail("#i4-4-2");
				break;

			case 12: // 403 Forbidden
				toDetail("#i4-4-3");
				break;

			case 13: // 404 Not Found
				toDetail("#i4-4-4");
				break;

			case 14: // 405 Method Not Allowed
				toDetail("#i4-4-5");
				break;

			case 15: // 413 Request Fntity Too Large
				toDetail("#i4-4-6");
				break;

			case 16: // 500 Internal Server Error
				toDetail("#i4-5-1");
				break;

			case 17: // 503 Service Unavailable
				toDetail("#i4-5-2");
				break;
		}
	});

	// ---------------- 通用首部 ----------------
	let _c71_http = createSelection("#tHeaders", "_c71");

	let General_Col1_http = createCellSelection("#tHeaders", 1, 1, 2, 7);
	let General_RowAll_http = createRowSelection("#tHeaders", 2, 7);

	// ---------------- 请求首部 ----------------
	let _c151_http = createSelection("#tHeaders", "_c151");

	let Request_Col1_http = createCellSelection("#tHeaders", 1, 1, 8, 15);
	let Request_RowAll_http = createRowSelection("#tHeaders", 8, 15);

	// ---------------- 响应首部 ----------------
	let _c181_http = createSelection("#tHeaders", "_c181");

	let Response_Col1_http = createCellSelection("#tHeaders", 1, 1, 16, 18);
	let Response_RowAll_http = createRowSelection("#tHeaders", 16, 18);

	// ---------------- 实体首部 ----------------
	let _c251_http = createSelection("#tHeaders", "_c251");

	let Entity_Col1_http = createCellSelection("#tHeaders", 1, 1, 19, 25);
	let Entity_RowAll_http = createRowSelection("#tHeaders", 19, 25);


	// ---------------- 通用首部高亮 ----------------
	$(General_Col1_http).mouseover(function () {
		$(General_RowAll_http).css("background-color", "#CBCFFF").css("color", "#000000");
		$(General_Col1_http).css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c71_http.substring(0, _c71_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(General_Col1_http).mouseleave(function () {
		$(General_RowAll_http).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(General_Col1_http).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c71_http.substring(0, _c71_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	$(General_RowAll_http).mouseover(function () {
		$(this).parent(".row").children(":not(:first-child)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(General_Col1_http).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c71_http.substring(0, _c71_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(General_RowAll_http).mouseleave(function () {
		$(General_RowAll_http).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(General_Col1_http).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c71_http.substring(0, _c71_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ---------------- 请求首部高亮 ----------------
	$(Request_Col1_http).mouseover(function () {
		$(Request_RowAll_http).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Request_Col1_http).css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c151_http.substring(0, _c151_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Request_Col1_http).mouseleave(function () {
		$(Request_RowAll_http).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Request_Col1_http).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c151_http.substring(0, _c151_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	$(Request_RowAll_http).mouseover(function () {
		$(this).parent(".row").children(":not(:first-child)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(Request_Col1_http).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c151_http.substring(0, _c151_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Request_RowAll_http).mouseleave(function () {
		$(Request_RowAll_http).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Request_Col1_http).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c151_http.substring(0, _c151_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ---------------- 响应首部高亮 ----------------
	$(Response_Col1_http).mouseover(function () {
		$(Response_RowAll_http).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Response_Col1_http).css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c181_http.substring(0, _c181_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Response_Col1_http).mouseleave(function () {
		$(Response_RowAll_http).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Response_Col1_http).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c181_http.substring(0, _c181_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	$(Response_RowAll_http).mouseover(function () {
		$(this).parent(".row").children(":not(:first-child)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(Response_Col1_http).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c181_http.substring(0, _c181_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Response_RowAll_http).mouseleave(function () {
		$(Response_RowAll_http).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Response_Col1_http).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c181_http.substring(0, _c181_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ---------------- 实体首部高亮 ----------------
	$(Entity_Col1_http).mouseover(function () {
		$(Entity_RowAll_http).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Entity_Col1_http).css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
	});
	$(Entity_Col1_http).mouseleave(function () {
		$(Entity_RowAll_http).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Entity_Col1_http).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
	});

	$(Entity_RowAll_http).mouseover(function () {
		$(this).parent(".row").children(":not(:first-child)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(Entity_Col1_http).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c181_http.substring(0, _c181_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Entity_RowAll_http).mouseleave(function () {
		$(Entity_RowAll_http).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Entity_Col1_http).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c181_http.substring(0, _c181_http.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ----------↑↑↑ HTTP各类首部高亮 ↑↑↑--------------------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 华为Hybrid接口表格高亮 ↓↓↓--------------------------------------------------------------------------

	$("#tHybrid .c21").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c22, " +
			"#tHybrid .c23, " +
			"#tHybrid .c33, " +
			"#tHybrid .c42, " +
			"#tHybrid .c43, " +
			"#tHybrid .c53, " +
			"#tHybrid .c62, " +
			"#tHybrid .c63, " +
			"#tHybrid .c73"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c21").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c22, " +
			"#tHybrid .c23, " +
			"#tHybrid .c33, " +
			"#tHybrid .c42, " +
			"#tHybrid .c43, " +
			"#tHybrid .c53, " +
			"#tHybrid .c62, " +
			"#tHybrid .c63, " +
			"#tHybrid .c73"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c22").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c22, " +
			"#tHybrid .c23, " +
			"#tHybrid .c33"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c22").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c22, " +
			"#tHybrid .c23, " +
			"#tHybrid .c33"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c23").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c22, " +
			"#tHybrid .c23"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c23").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c22, " +
			"#tHybrid .c23"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c33").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c22, " +
			"#tHybrid .c33"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c33").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c22, " +
			"#tHybrid .c33"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c42").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c42, " +
			"#tHybrid .c43, " +
			"#tHybrid .c53"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c42").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c42, " +
			"#tHybrid .c43, " +
			"#tHybrid .c53"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c43").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c42, " +
			"#tHybrid .c43"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c43").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c42, " +
			"#tHybrid .c43"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c53").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c42, " +
			"#tHybrid .c53"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c53").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c42, " +
			"#tHybrid .c53"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c62").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c62, " +
			"#tHybrid .c63, " +
			"#tHybrid .c73"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c62").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c62, " +
			"#tHybrid .c63, " +
			"#tHybrid .c73"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c63").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c62, " +
			"#tHybrid .c63"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c63").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c62, " +
			"#tHybrid .c63"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c73").mouseover(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c62, " +
			"#tHybrid .c73"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c73").mouseleave(function () {
		$(
			"#tHybrid .c21, " +
			"#tHybrid .c62, " +
			"#tHybrid .c73"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c81").mouseover(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c82, " +
			"#tHybrid .c83, " +
			"#tHybrid .c92, " +
			"#tHybrid .c93, " +
			"#tHybrid .c102, " +
			"#tHybrid .c103, " +
			"#tHybrid .c113, " +
			"#tHybrid .c123"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c81").mouseleave(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c82, " +
			"#tHybrid .c83, " +
			"#tHybrid .c92, " +
			"#tHybrid .c93, " +
			"#tHybrid .c102, " +
			"#tHybrid .c103, " +
			"#tHybrid .c113, " +
			"#tHybrid .c123"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c82").mouseover(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c82, " +
			"#tHybrid .c83, " +
			"#tHybrid .c92, " +
			"#tHybrid .c93"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c82").mouseleave(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c82, " +
			"#tHybrid .c83, " +
			"#tHybrid .c92, " +
			"#tHybrid .c93"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c83").mouseover(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c82, " +
			"#tHybrid .c83"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c83").mouseleave(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c82, " +
			"#tHybrid .c83"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c93").mouseover(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c82, " +
			"#tHybrid .c93"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c93").mouseleave(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c82, " +
			"#tHybrid .c93"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c102").mouseover(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c102, " +
			"#tHybrid .c103, " +
			"#tHybrid .c113, " +
			"#tHybrid .c123"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c102").mouseleave(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c102, " +
			"#tHybrid .c103, " +
			"#tHybrid .c113, " +
			"#tHybrid .c123"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c103").mouseover(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c102, " +
			"#tHybrid .c103"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c103").mouseleave(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c102, " +
			"#tHybrid .c103"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c113").mouseover(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c102, " +
			"#tHybrid .c113"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c113").mouseleave(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c102, " +
			"#tHybrid .c113"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});


	$("#tHybrid .c123").mouseover(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c102, " +
			"#tHybrid .c123"
		).css("background-color", "#CBCFFF").css("color", "#000000");
	});
	$("#tHybrid .c123").mouseleave(function () {
		$(
			"#tHybrid .c81, " +
			"#tHybrid .c102, " +
			"#tHybrid .c123"
		).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
	});

	// ----------↑↑↑ 华为Hybrid接口表格高亮 ↑↑↑--------------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 正则表达式测试页面，显示/隐藏语法 ↓↓↓-----------------------------------------------------------------

	$("#menu2").click(function () {
		$("#grammar").show(300);
		$("body").parent().css("overflow-y", "hidden");
	});

	$("#regex_group_close").click(function () {
		$("#grammar").hide(300);
		$("body").parent().css("overflow-y", "auto");
	});

	// ----------↑↑↑ 正则表达式测试页面，显示/隐藏语法 ↑↑↑-----------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ pxe ↓↓↓--------------------------------------------------------------------------------------------

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
				// $("#select_os_version").append(new Option("Windows Server 2012", "Windows Server 2012"));
				// $("#select_os_version").append(new Option("Windows Server 2012 R2", "Windows Server 2012 R2"));
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
				// os_version == "Windows Server 2012" ||
				// os_version == "Windows Server 2012 R2" ||
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
				// case "Windows Server 2012":
				// 	if (widnows_kind == "SERVERSTANDARDCORE" || widnows_kind == "SERVERSTANDARD") {	// 标准版
				// 		windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>VDNYM-JBKJ7-DC4X9-BT3QR-JHRGY</Key></ProductKey>");
				// 	}
				//
				// 	if (widnows_kind == "SERVERDATACENTERCORE" || widnows_kind == "SERVERDATACENTER") {	// 数据中心版
				// 		windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>BH9T4-4N7CW-67J3M-64J36-WW98Y</Key></ProductKey>");
				// 	}
				//
				// 	break;
				//
				// case "Windows Server 2012 R2":
				// 	if (widnows_kind == "SERVERSTANDARDCORE" || widnows_kind == "SERVERSTANDARD") {	// 标准版
				// 		windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>78NJB-CB3WX-GWPCM-VMKG7-94QWW</Key></ProductKey>");
				// 	}
				//
				// 	if (widnows_kind == "SERVERDATACENTERCORE" || widnows_kind == "SERVERDATACENTER") {	// 数据中心版
				// 		windows_file = windows_file.replace("!!os_license!!", "<ProductKey><Key>TVNTG-VFJQ3-FQXFP-DVCP6-D3VJ8</Key></ProductKey>");
				// 	}
				//
				// 	break;

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
		}
		else {
			this.style.cursor = "text";
		}
	});

	// ----------↑↑↑ pxe ↑↑↑--------------------------------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 页面证书编辑 ↓↓↓------------------------------------------------------------------------------------

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

	// ----------↑↑↑ 页面证书编辑 ↑↑↑------------------------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓ 当协议的全称太长，造成协议的文字被左侧导航菜单覆盖时，进行调整 ↓↓↓---------------------------------------

	let widthProtocol = $('.divProtocolWord table').outerWidth();		// 存放协议文字的表格宽度
	let widthBrowser = $(window).width();								// 浏览器宽度

	// 当表格距离浏览器左边缘小于380px时，将表格修改将左对齐，margin-left修改为380px
	if ((widthBrowser - widthProtocol) / 2 < 380) {
		$('.divProtocolWord').css("text-align", "left");
		$('.divProtocolWord>div').css("margin-left", "380px");
	}

	// ----------↑↑↑ 当协议的全称太长，造成协议的文字被左侧导航菜单覆盖时，进行调整 ↑↑↑---------------------------------------
	// -----------------------------------------------------------------------------------------------------------------
	// ----------↓↓↓  ↓↓↓---------------------------------------

});
