function createNavigation(tree, offset = 74.5) {
	var uri = window.location.href.substring(window.location.href.indexOf("/guide"));
	var path_num = uri.split("/").length - 1 - 2;

	var firstT0 = Object.keys(tree)[0]; // 导航树中的第一个元素ID，也就是第一个instruT0
	// 顶部导航
	var htmlText = top_menu.replace(/rootpath\//g, "../".repeat(path_num));

	if (tree == "regex") {
		document.write(htmlText);
		return;
	}
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

	if (uri.indexOf("/guide/class/one_piece") >= 0) {
		offset = 161;
	}

	document.write(htmlText);

	var body = `
		<script type="text/javascript" src="rootpath/js/public/top_menu.js"></script>
		<script type="text/javascript" src="rootpath/js/public/sidebar-menu.js"></script>
		<script type="text/javascript">
			$.sidebarMenu($(".sidebar-menu"), offset);
		</script>
		<script type="text/javascript" src="rootpath/js/public/guide-icon.js"></script>
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
			var linkID = uri.substring(uri.indexOf(("#")));
			var linkID_arr = linkID.split("-");
			var link = "";
			for (var i = 0; i < linkID_arr.length; i++) {
				link = link + linkID_arr[i];
				$("[cmd='" + link + "']").click();
				link = link + "-";
			}
		}
	});
}

function createTree(tree) {
	var htmlText = "";
	for (var key in tree) {
		htmlText = htmlText + "<li class='treeview'>";
		if (typeof tree[key] != "string") {
			htmlText = htmlText + "<a href='javascript:void(0)' cmd='#" + key + "'><i class='fa fa-folder'></i><span>";
			var key_next = "";
			for (var key_nexts in tree[key]) {
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

	var regLinuxCMD = new RegExp("((<br />)*)([^ ]+)( – .+)");
	text = text.replace(regLinuxCMD, "$1<span class='spanInstruKeyword'>$3</span>$4");

	var regInstruKeywords = new RegExp("(" + DockerFileKeywords + ")", "g");

	return text.replace(regInstruKeywords, "<span class='spanInstruKeyword'>$1</span>");
}


function createInstru(text, NO, instruT, isFirst) {
	text = addSpan(text);
	if (NO != null) {
		if (instruT == "instruT0") {
			document.writeln("<br /><br />");
		}

		var words = splitBR(text);
		document.writeln(words[0] + "<span class='" + instruT + "' id='" + NO + "'>" + words[1] + "</span>" + words[2]);
	}
	else {
		words = splitBR(text);
		document.writeln(words[0] + "<span class='" + instruT + "'>" + words[1] + "</span>" + words[2]);
	}
}

function createInstruAllTop(text, instruT) {
	var words = splitBR(addSpan(text));
	document.writeln(words[0] + "<span class='cmdInstruAllTop" + instruT + "'>" + words[1] + "</span>" + words[2]);
}

function createInstruAllBottom(text, instruT) {
	var words = splitBR(addSpan(text));
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
	var htmlText = initTXT(cmds, "LinuxTxt", "T1");
	cmdMark(htmlText, mark_list);
}

function createLinuxTxtMarkT2(cmds, mark_list) {
	var htmlText = initTXT(cmds, "LinuxTxt", "T2");
	cmdMark(htmlText, mark_list);
}

function createLinuxTxtMarkT3(cmds, mark_list) {
	var htmlText = initTXT(cmds, "LinuxTxt", "T3");
	cmdMark(htmlText, mark_list);
}

function cmdMark(htmlText, mark_list) {
	for (var i = 0; i < mark_list.length; i++) {
		var reg = new RegExp(mark_list[i], "g");
		// htmlText = htmlText.replace(reg, "<span class='markColor" + (i + 1).toString() + "'>" + mark_list[i] + "</span>");
		htmlText = htmlText.replace(reg, "<span class='markColor" + (i + 1).toString() + "'>$&</span>");
	}
	document.writeln(htmlText);
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

	//由于浏览器的原因，多个手打的tab或空格可能不正常输出，替换为tab或空格的hmtl符号
	// cmds = cmds.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");
	// cmds = cmds.replace(/ /g,"&nbsp;");

	var url = window.location.href;
	url = url.substring(url.indexOf("/guide/class/"));
	var path = "../".repeat(url.split("/").length - 3);

	var htmlText = "<div class='txtDiv" + cmdT + "'>" +
		"<div class='divCopy'><i class='far fa-copy'></i></div>" +
		"<div class='copySuccess'><img src='" + path + "img/ok.svg' />&nbsp;复制成功</div>";

	var cmd_arr = cmds.split("\n");
	var subNum = cmd_arr[1].length - cmd_arr[1].replace(/^\s*/g, "").length; //第一行左侧通常没有空白，空白数为html的缩进数

	for (var i = 1; i < cmd_arr.length - 1; i++) {
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
	for (var i = 1; i < cmd_arr.length - 1; i++) {
		// cmd_arr[i] = cmd_arr[i].substring(subNum);
		//
		// //由于浏览器的原因，多个手打的tab或空格可能不正常输出，替换为tab或空格的hmtl符号
		// cmd_arr[i] = cmd_arr[i].replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");
		// cmd_arr[i] = cmd_arr[i].replace(/ /g,"&nbsp;");

		var index = cmd_arr[i].indexOf("#");

		if (index == 0) {	//纯注释
			htmlText = htmlText + "<span class='spanZS'>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		if (index > 0) {	//配置和注释
			var notZS = "sed&nbsp;-i&nbsp;\'/&nbsp;swap&nbsp;/&nbsp;s/^\\(.*\\)$/#\\1/g\'&nbsp;/etc/fstab";
			// notZS对应 sed -i "/ swap / s/^\(.*\)$/#\1/g" /etc/fstab，位于k8s的kubeadm安装
			// /&nbsp;# 也就是 / #，位于Vault的命令行
			if (cmd_arr[i] != notZS && !(cmd_arr[i].indexOf("/&nbsp;#") == 0)) {
				zs = cmd_arr[i].substring(index);	//注释部分
				cmd = cmd_arr[i].substring(0, index);	//命令部分
				htmlText = htmlText + "<span>" + cmd + "</span><span class='spanZS'>" + zs + "</span><br />";
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

		if (cmd_arr[i].indexOf("*/") >= 0 && cmd_arr[i].indexOf(".*/\\t") < 0) {
			htmlText = htmlText + "<span>" + cmd_arr[i] + "</span></div/><br />";
			continue;
		}

		index = cmd_arr[i].indexOf("&lt;a") // 即<a
		if (index >= 0) {
			var link = cmd_arr[i].substring(index);	// 链接
			link = link.replace(/&lt;/g, "<");		// 将空格和<还原
			link = link.replace(/&nbsp;/g, " ");

			var cmd = cmd_arr[i].substring(0, index);	// 命令部分
			htmlText = htmlText + "<span>" + cmd.trim() + "</span>" + link + "<br />";
			continue;
		}
		htmlText = htmlText + "<span>" + cmd_arr[i].trim() + "</span><br />"
	}
	htmlText = htmlText + "</div>";
	return htmlText;
}

function createYAML(cmd_arr, htmlText) {
	for (var i = 1; i < cmd_arr.length - 1; i++) {
		//由于浏览器的原因，多个手打的tab或空格可能不正常输出，替换为tab或空格的hmtl符号
		cmd_arr[i] = cmd_arr[i].replace(/\t/g, "&nbsp;&nbsp;");
		cmd_arr[i] = cmd_arr[i].replace(/ /g, "&nbsp;");

		var zs = "";
		var index = cmd_arr[i].indexOf("#");
		if (index == 0) {	//纯注释
			htmlText = htmlText + "<span class='spanZS'>" + cmd_arr[i] + "</span><br />";
			continue;		//纯注释，无需进行后面的分解
		}

		if (index > 0) {	//配置和注释
			zs = cmd_arr[i].substring(index);	//注释
			cmd_arr[i] = cmd_arr[i].substring(0, index);	//配置
		}

		var fgf_list = [":", "="];
		var fgf = "";

		for (var j in fgf_list) {
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
			var reg = new RegExp(/\d/);
			if (reg.test(cmd_arr[i][index - 1]) && reg.test(cmd_arr[i][index + 1])) {
				htmlText = htmlText + "<span class='spanV'>" + cmd_arr[i] + "</span>";
			}
			else {
				var type = cmd_arr[i].substring(0, index);
				var value = cmd_arr[i].substring(index + 1);
				htmlText = htmlText + "<span class='spanT'>" + type + "</span><span class='spanV'><span class='spanFGF'>" + fgf + "</span>" + value + "</span>";
			}
		}

		if (zs != "") {
			htmlText = htmlText + "<span class='spanZS'>" + zs + "</span>";
		}

		htmlText = htmlText + "<br />";
	}

	htmlText = htmlText + "</div>";
	htmlText = htmlText.replace(/((&nbsp;)+\d+(&nbsp;)*)<\/span>/g, "<span class='spanNum'>$1</span></span>");
	htmlText = htmlText.replace(/((&nbsp;)+-(&nbsp;)+)/g, "<span class='spanFGF'>$1</span>");
	document.writeln(htmlText);
}

function createViptelaCLI(cmd_arr, htmlText) {
	for (var i = 1; i < cmd_arr.length - 1; i++) {
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

		// var reg = new RegExp("");
		var clis = cmd_arr[i].match(/(\s*ip (address|route))(.+)/);

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
	htmlText = htmlText + "</div>";
	document.writeln(htmlText);
}

function createTCL(cmd_arr, htmlText) {
	for (var i = 1; i < cmd_arr.length - 1; i++) {
		cmd_arr[i] = cmd_arr[i].replace(/(".+")/g, "<span class='spanYH'>$1</span>");

		cmd_arr[i] = cmd_arr[i].replace(/(\w+::\w+)/g, "<span class='spanT'>$1</span>");

		var keywords = [
			"set", "switch", "-"
		];
		var regstr = "(((^(if))|((&nbsp;)+if)";
		var regstr = "((^((&nbsp;)*if)";
		for (var j = 0; j < keywords.length; j++) {
			regstr = regstr + "|(" + keywords[j] + ")";
		}
		regstr = regstr + ")(&nbsp;)*)";
		// cmd_arr[i] = cmd_arr[i].replace(/((^((&nbsp;)*if)|(set)|(switch))(&nbsp;)*)/g, "<span class='spanR'>$1</span>");
		cmd_arr[i] = cmd_arr[i].replace(new RegExp(regstr, "g"), "<span class='spanR'>$1</span>");

		keywords = [
			"class",
			"default",
			"else", "elseif",
			"snat",
			"when"
		]
		regstr = "((";
		for (var j = 0; j < keywords.length; j++) {
			regstr = regstr + "(" + keywords[j] + ")|";
		}
		regstr = regstr.substring(0, regstr.length - 1) + ")(&nbsp;)+)";
		// cmd_arr[i] = cmd_arr[i].replace(/(((when)|(elseif)|(else)|(snat)|(class)|(pool)|(default))(&nbsp;)+)/g, "<span class='spanT'>$1</span>");
		cmd_arr[i] = cmd_arr[i].replace(new RegExp(regstr, "g"), "<span class='spanT'>$1</span>");

		htmlText = htmlText + "<span>" + cmd_arr[i] + "</span><br />"
	}
	htmlText = htmlText + "</div>";
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
	/*
		由于命令中存在可选项 [ | ] 或 { | }，括号中也可能不只一个 | ，拆分命令时会出现问题
		由于 [] 在正则表达式中用途更多，处理比 {} 复杂
		先将 {} 中的 | 修改为 @@@
		再将 [] 修改为 {{}}，再将{{}}中的 | 修改为 @@@
		最后再将 @@@、{{}} 还原
	*/
	var reg = new RegExp("(^.+{{1,2}[^|]+)|( .+}{1,2}.*$)", "g");

	if (reg.test(linuxCmd)) {
		var orCMD = linuxCmd.match(reg);
		while (orCMD.length == 2) {
			linuxCmd = orCMD[0] + "@@@" + orCMD[1];
			orCMD = linuxCmd.match(reg);
		}
	}


	// 添加空格，防止修改命令参数或对象中内容，因为只能位于开始或结束，只添加一侧空格
	linuxCmd = linuxCmd.replaceAll("[ ", "{{ ").replace(" ]", " }}");
	reg = new RegExp("(^.+{{[^|]+)|( .+}}.*$)", "g");
	if (reg.test(linuxCmd)) {
		var orCMD = linuxCmd.match(reg);
		while (orCMD.length == 2) {
			linuxCmd = orCMD[0] + "@@@" + orCMD[1];
			orCMD = linuxCmd.match(reg);
		}
	}
	// 处理 []、{}中的 | 结束

	var cmds = [linuxCmd];
	var FGFs = ["|", "&&"];

	for (var i in FGFs) {
		cmds = splitLinuxCMD(cmds, FGFs[i]);
	}

	var htmlText = "";

	for (var j in cmds) {
		var cmd = cmds[j].split(" ");
		for (var i in cmd) {
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
					// if(/^[A-z]$/.test(cmd[i][0])) {	// 第三及以后位以英文字母开头，则为命令
					// 	htmlText = htmlText + cmd[i];
					// }
					// else {	// 其它情况为命令对象
					// 	htmlText = htmlText + cmd[i];
					// }
					htmlText = htmlText + cmd[i];
				}
			}
			htmlText = htmlText + "&nbsp;&nbsp;";
		}
	}
	htmlText = htmlText.substring(0, htmlText.length - 12);

	for (var i in FGFs) {
		htmlText = htmlText.replaceAll("&nbsp;&nbsp;" + FGFs[i] + "&nbsp;&nbsp;", "&nbsp;&nbsp;<span class='linuxCMD_pipeline'>" + FGFs[i] + "</span>&nbsp;&nbsp;");
	}

	// 当命令较长时，需要换行，为了看着方便，换行后的所有内容的缩进均在命令单词后
	// 统计命令单词的字数，后面的各行，添加 （字数+命令数）*2 - 2 的空格作为缩进
	reg = /<span class='linuxCMD_cmd'>\S+<\/span>/g;
	var linuxCMD_cmds = htmlText.split("<span class='linuxCMD_pipeline'>|</span>")[0].match(reg);
	var num = 0;

	for (var i = 0; i < linuxCMD_cmds.length; i++) {
		var word = linuxCMD_cmds[i].replaceAll("&nbsp;", "");
		num = num + word.length - 34
	}

	htmlText = htmlText.replaceAll("&nbsp;&nbsp;\\&nbsp;&nbsp;", "&nbsp;&nbsp;\\<br />" + "&nbsp;".repeat((num + linuxCMD_cmds.length) * 2 - 2));
	// 处理命令命令中的换行部分结束

	// 还原非管道符的 | ，以及 []
	htmlText = htmlText.replaceAll("@@@", "|").replaceAll("{{", "[").replaceAll("}}", "]");

	reg = new RegExp("(\"[^\"]+\")", "g");
	htmlText = htmlText.replace(reg, "<span class='spanYH'>$1</span>");

	reg = new RegExp(" ('[^']+')", "g");
	// reg = new RegExp("('[^']+')","g");
	htmlText = htmlText.replace(reg, "<span class='spanYH'>$1</span>");

	if (isDG) {
		return htmlText;
	}

	if (htmlText.indexOf("$(") >= 0) {
		htmlText = spliteDolor(htmlText, cmdNum);
	}

	htmlText = htmlText.replaceAll("</span></span>", "</span>");
	return createCmdSpan(htmlText);
}

function splitLinuxCMD(cmd_arrary, FGF) {
	var cmdss = new Array();
	for (var i in cmd_arrary) {
		var cmds = cmd_arrary[i].split(" " + FGF + " ");
		for (var j = 0; j < cmds.length - 1; j++) {
			cmdss.push(cmds[j] + " " + FGF)
		}
		cmdss.push(cmds[cmds.length - 1]);
	}
	return cmdss;
}

function spliteDolor(cmd, cmdNum) {
	if (cmd.indexOf("$(") >= 0) {
		var dstart = cmd.indexOf("$(");
		var dend = cmd.indexOf(")");
		var son_cmd = cmd.substring(dstart + 2, dend);

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

	var regAruba = /(\(\S+\) \^?\[\S+\])(( \([\S ]+\))? #)(.+)/;
	if (regAruba.test(cmd)) {
		cmd = cmd.replace(regAruba, "<span class='cmdArubaPath'>$1</span><span class='cmdMode'>$2</span><span class='cmd'>$4</span>");
		return addSpan(cmd);
	}
	else {
		var regFG = /([\w() -/[<&:~;…]+[#>\$\]] )(.+)/;	// 思科华为各种模式前缀，如：R1(config-route)# [R1-FastEthernet0/0]
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

	// for(var i = 1; i <= 6; i++) {
	// 	var regMark = new RegExp("!!" + i,"g");
	// 	text = text.replace(regMark, "<span class='markColor" + i + "'>");
	// }
	// console.log(text)
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
	var imagePath = "../../../img/";

	switch (typeBrand) {
		case "vmware":

		case "nmap":

		case "redhat":
			imagePath = "../../img/";
			break;

		case "redhat_cert":
			// imagepath = "../../img/";
			typeBrand = "redhat";
			break;
	}

	var htmlText = "<table class='cmdTable" + typeT + "'>"

	if (typeBrand == "cisco" || typeBrand == "aruba" || typeBrand == "huawei" || typeBrand == "h3c" || typeBrand == "f5") {
		htmlText = htmlText + "<tr><td rowspan='" + (instruArr.length + 1) + "' class='tdCliLogo'>";
	}
	else {	// 使用linux命令格式高亮显示的，修改右侧线的颜色
		htmlText = htmlText + "<tr><td rowspan='" + (instruArr.length + 1) + "' class='tdCliLogo' style='border-right-color: #E6DB74'>";
	}

	htmlText = htmlText + "<img src='" + imagePath + typeBrand + ".svg' class='imgBrand " + typeBrand + "' /></td></tr>";
	htmlText = htmlText + "<tr><td colspan='2'>" + instruArr[0] + "</td></tr>";

	if (instruArr.length > 1) {
		for (var i = 1; i < instruArr.length; i++) {
			htmlText = htmlText + "<tr";
			if (instruArr[i].indexOf("<>") != -1) {
				htmlText = htmlText + " class='cmdInstru'>"
				var eachInstruItem = instruArr[i].split("<>");
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
	var htmlText = "<div class='divConfigImg" + typeT

	if (imgDescribe) {
		htmlText = htmlText + "' imgDescribe='" + imgDescribe
	}

	htmlText = htmlText + "'>";

	if (imgNameList.indexOf("~") > 0) {
		var imgNameArr = imgNameList.split("~");
		for (i = imgNameArr[0].substr(imgNameArr[0].length - 1); i <= parseInt(imgNameArr[1]); i++) {
			var eachName = imgNameArr[0].substr(0, imgNameArr[0].length - 1) + i;
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
	var reg = new RegExp("(^(<br />)*)(.+?)((<br />)*$)");
	var br = text.match(reg);
	return [br[1], br[3], br[4]];
}

function createProtocolWord(protocolSX, protocolQC, protocolZW) {
	var htmlText = "<div style='display: inline-block'>";
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
	var y = (k * protocolField).toString() + "px";
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
	var htmlText = "<div class='divSJ" + divT + "'>";

	htmlText = htmlText + "<div class='divProtocolExplain'><dl>";
	var words_arr = words.split("\n");

	for (var i = 1, j = 1; i < words_arr.length - 1; i = i + 3, j++) {
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
	var htmlText = "<div class='divSJ" + divT + "'>";
	htmlText = htmlText + "<div class='divProtocolStruct'>";
	htmlText = htmlText + "<div id='" + divID + "' protocolName='" + protocolName + "' style='width: " + imgWidth + "px; height: " + imgHeight + "px; background-image: url(config_img/" + imgUrl + ".png); background-size: " + imgWidth + "px " + SFHeight + "px' ></div>";
	htmlText = htmlText + "</div>";
	htmlText = htmlText + "</div>";
	document.write(htmlText);
}


function protocolMove(e) {
	e = e || window.event;
	// 盒子的位置
	var x = getPage(e).pageX - $("#divProtocol").offset().left;
	var y = getPage(e).pageY - $("#divProtocol").offset().top;

	document.onmousemove = function (e) {
		e = e || window.event;
		// pleft = getPage(e).pageX - x + "px";
		// ptop = getPage(e).pageY - y + "px";

		var pleft = getPage(e).pageX - $(window).scrollLeft() - x + "px";
		var ptop = getPage(e).pageY - $(window).scrollTop() - y + "px";

		$("#divProtocol").css("left", pleft);
		$("#divProtocol").css("top", ptop);
	}
}

function getPage(e) {
	var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
	var pageY = e.pageY || e.clientY + getScroll().scrollTop;
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
	var headers = cmds.split("\n");
	var htmlText = "<div class='headers" + cmdT + "'><table><tr>";
	var heads_num = 2;

	if (headers[1].indexOf(": ") == -1) {	// 为了查看方便，第0行为空白行，第1行可能并非首部字段
		var header = headers[1].replace(/\t/g, "");
		var l1 = header.split(" ");
		if (l1[0] == "GET") {	// HTTP请求
			htmlText = htmlText + "<td colspan='3'><span class='spanT'>" + l1[0] + "</span> ";
			htmlText = htmlText + "<span class='spanV'>" + l1[1] + "</span> ";
			htmlText = htmlText + l1[2] + "</td></tr>";
		}

		if (l1[0].indexOf("HTTP") == 0) {	// HTTP响应
			htmlText = htmlText + "<td colspan='3'><span class='spanT'>" + l1[0] + "</span> ";
			var index = header.indexOf(" ")
			// var protocol = header.substring(0, index);
			var status = header.substring(index).split("#");

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


	for (var i = heads_num; i < headers.length - 1; i++) {
		var header = headers[i].replace(/\t/g, "").trim();
		var headerT = header.split(": ")[0];
		var headerV = header.split(": ")[1].split("# ")[0];
		var headerZS = "";
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
	// createNginx(text, "T1");
}

function createNginxConfigT2(text) {
	initTXT(text, "NginxConfig", "T2");
}

function createNginxConfigT3(text) {
	initTXT(text, "NginxConfig", "T3");
}

function createNginxConfig(cmd_arr, htmlText) {
	for (var i = 1; i < cmd_arr.length - 1; i++) {
		var index = cmd_arr[i].indexOf("#");

		if (index == 0) {	//纯注释
			htmlText = htmlText + "<span class='spanZS'>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		var txtZS = "";			// 注释部分
		var txtConfig = "";		// 配置部分
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
				var clis = txtConfig.match(/(\s*\S+)(.*)/);
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

	var keywords = [
		"ssl",
		"http2",
		"on"
	];

	for (var j = 0; j < keywords.length; j++) {
		var regKey = new RegExp("&nbsp;(" + keywords[j] + ")((&nbsp)?;)", "g");
		htmlText = htmlText.replace(regKey, "&nbsp;<span class='spanT'>$1</span>$2");
	}

	htmlText = htmlText.replace(/(?<!nbsp);/g, "<span class='spanW'>;</span>");
	htmlText = htmlText + "</div>";
	document.writeln(htmlText);
}

// 生成单个选择器，支持 单个单元格 或 单行，
// 为了方便多个选择器的连接，结尾均为 , (空格)
// HLobj：单个单元格或单行，表示方法如下
// _c201："#tHeaders .row:nth-child(20) .cell:nth-child(1), ";
// _r2："#tHeaders .row:nth-child(2) .cell, ";
function createSelection(tableName, HLobj) {
	var HLtype = HLobj[1];
	var selectionTXT = tableName;
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
	var selectionTXT = "";
	for (var i = rowStart; i <= rowEnd; i++) {
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
	var selectionTXT = "";
	for (var i = rowStart; i <= rowEnd; i++) {
		for (var j = colStart; j <= colEnd; j++) {
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
	var htmlText = "<div class='divSJ" + divT + "'>";
	var nc = "";

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

	for (var i in tBody) {
		htmlText = htmlText + "<div class='row'>";
		for (var j in tBody[i]) {
			var tbody = tBody[i][j];
			htmlText = htmlText + "<div class='cell'>" + tbody + "</div>";
		}
		htmlText = htmlText + "</div>";
	}

	htmlText = htmlText + "</div></div>";
	htmlText = htmlText + "</div>";
	document.writeln(htmlText);
}


$(document).ready(function () {
	// ---------- 可以复制内容的配置文件，右上角复制图标，相关功能 ---- 开始 ----------
	/*
		可以复制内容的配置文件，右上角复制图标，复制功能
		目前配置文件类型：Linux配置文件、yaml文件、cisco Viptela
	*/
	$(".divCopy").click(function () {
		var txt = this.parentNode.innerHTML.split("复制成功</div>")[1];
		// 用于点击复制的图片及显示复制成功的div位于整体div的最前面，去掉这两项
		// 将使用html符号表示的 空格、>、< 还原
		txt = txt.replace(/<(\/)?span[^>]*>/g, "").replace(/<br( \/)?>/g, "\r\n").replaceAll("&nbsp;", " ").replaceAll("&gt;", ">").replaceAll("&lt;", "<");
		// 为了显示工整，添加大量html标签，去掉这些标签并且维持排版
		// <(\/)?span[^>]*>：注释的内容包含class，如：<span class="spanZS">，同时匹配</span>
		// \r\n：windows的换行

		const textarea = document.createElement("textarea");	// 直接构建textarea，为了实现换行，需要创建textarea，如果用input的话，实现不了换行。」
		textarea.value = txt;					// 设置内容
		document.body.appendChild(textarea);	// 添加临时实例
		textarea.select();						// 选择实例内容
		document.execCommand("Copy");			// 执行复制
		document.body.removeChild(textarea);	// 删除临时实例

		var _copySuccess = $(this).next();
		_copySuccess.fadeIn(500);	// 显示复制成功的div是下一项元素，经历0.5s逐渐显示，等待1s后，经历0.5s逐渐消失
		setTimeout(function () {
			_copySuccess.fadeOut(500)
		}, 1000);
	});

	// ---------- 可以复制内容的配置文件，右上角复制图标，相关功能 ---- 结束 ----------
	// ---------------------------------------------------------------------------
	// ---------- 各个协议的结构图，单击、双击事件 ---- 开始 ----------
	/*
		各个协议的结构图，单击事件
		timeFN，为了区分单击和双击的定时器
	*/
	var timeFN = null;
	$(".divProtocolStruct").click(function () {
		clearTimeout(timeFN);
		var thisImg = $(this).children();
		// var thisID = this.childNodes.id;
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
		var protocolWidth = $(this).children().css("width");
		var protocolHeight = $(this).children().css("height");
		var protocolBgImage = $(this).children().css("background-image");

		var protocolHTML = "<title>" + $(this).children().attr("protocolName") + "结构</title>" +
			"<style type='text/css'>body::-webkit-scrollbar{width:8px;height:8px}body::-webkit-scrollbar-thumb{border-radius:5px;background:#CFCFCF}</style>" +
			"<body style='margin: 0; background-color: #494A5F; text-align: center'></body>" +
			"<div style='font-size: 50px; font-weight: bold; letter-spacing: 2px; margin-top: 20px; color: #FFC000'>" +
			$(this).children().attr("protocolName") + "结构" +
			"</div>" +
			"<div style='margin: 20px auto; width:" + protocolWidth + "; height:" + protocolHeight + "; " + "background-image: " + protocolBgImage + "'></div>" +
			"</body>";

		var nwin = window.open("");
		nwin.document.writeln(protocolHTML);
	});

	/*
		各个协议的结构图，单击后，显示独立的结构图，关闭该结构图
	*/
	$("#close").click(function () {
		$("#divProtocol").css("display", "none");
	})
	// ---------- 各个协议的结构图，单击、双击事件 ---- 结束 ----------
	// ------------------------------------------------------------
	// ---------- 某些图片双击新标签页单独显示 ---- 开始 ----------
	$(".divConfigImgT0[imgDescribe], .divConfigImgT1[imgDescribe], .divConfigImgT2[imgDescribe], .divConfigImgT3[imgDescribe]").dblclick(function () {
		var protocolHTML = "<title>" + $(this).attr("imgDescribe") + "</title>" +
			"<style type='text/css'>body::-webkit-scrollbar{width:8px;height:8px}body::-webkit-scrollbar-thumb{border-radius:5px;background:#CFCFCF}</style>" +
			"<body style='margin: 0; background-color: #494A5F; text-align: center'></body>" +
			"<div style='font-size: 50px; font-weight: bold; letter-spacing: 2px; margin-top: 20px; color: #FFC000'>" +
			$(this).attr("imgDescribe") +
			"</div>" +
			"<img style='margin-top: 20px' src='" + $(this).children("img").attr("src") + "'>" +
			"</body>";

		var nwin = window.open("");
		nwin.document.writeln(protocolHTML);
	});

	// ---------- 某些图片双击新标签页单独显示 ---- 结束 ----------
	// ---------------------------------------------------------
	// ---------- 图片配置类页面，当左侧菜单关闭时刷新，水平滚动条会保持在原位置，图片被遮挡，将流动条移到最左边 ---- 开始 ----------
	setTimeout(function () {
		$('html, body').animate({scrollLeft: 0});
	}, 0);

	// ---------- 图片配置类页面，当左侧菜单关闭时刷新，水平滚动条会保持在原位置，图片被遮挡，将流动条移到最左边 ---- 结束 ----------
	// ---------------------------------------------------------
	// ---------- 少量带锚的链接，跳转后距离不对，调整 ---- 开始 ----------
	if (window.location.hash) {
							 // 获取不含#的锚点名
		let target = $('#' + window.location.hash.substring(1));
		if (target.length > 0) {
			let offset = 50;	// 思科、华为的通用配置中DHCP snooping跳转到交换机配置的对应内容
			if (window.location.href.indexOf("/guide/class/protocol") >= 0) {
				offset = 75;	// IPv6分片首部
			}

			// 在滚动条原有位置上，减小移动距离
			$('html, body').animate({
				scrollTop: target.offset().top - offset
			});
		}
	}

	// ---------- 少量带锚的链接，跳转后距离不对，调整 ---- 结束 ----------
	// ---------------------------------------------------------

});