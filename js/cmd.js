function createNavigation(tree, path) {
	// 顶部导航
	htmlText = top_menu.replace(/rootpath\//g, path);

	// 左侧导航树 <---- 开始 ---->
	htmlText = htmlText +
	'<aside class="main-sidebar">\
		<section class="sidebar">\
			<ul class="sidebar-menu">' +
				createTree(tree) +	// 当左侧导航树内容较多时，即使滚动条无法完全显示，增加了两行不显示的占位内容
				'<li><a class="zw" cmd="zw">&nbsp;</a></li>\
				 <li><a class="zw" cmd="zw">&nbsp;</a></li>\
			</ul>\
		</section>\
	</aside>';
	// 左侧导航树 <---- 结束 ---->

	document.write(htmlText);
}

function createTree(tree) {
	htmlText = '';
	for (key in tree) {
		htmlText = htmlText + '<li class="treeview">'
		if(typeof tree[key] != "string") {
			htmlText = htmlText + '<a href="javascript:void(0)" cmd="#' + key + '"><i class="fa fa-folder"></i><span>';
			key_next = '';
			for(key_nexts in tree[key]) {
				key_next = key_nexts;
			}
			htmlText = htmlText + key_next +
				'</span><i class="fa fa-angle-left pull-right"></i></a><ul class="treeview-menu">' +
				createTree(tree[key][key_next]) + '</ul>';
		}
		else {
			htmlText = htmlText + '<a href="javascript:void(0)" cmd="#' + key + '">' +
				'<i class="fa fa-files-o"></i><span>' + tree[key] +
				'</span></a><ul class="treeview-menu"></ul>';
		}
		htmlText = htmlText + '</li>';
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
	var DockerFileKeywords =
			"FROM|LABEL|RUN|WORKDIR|ADD|COPY|ENV|VOLUME|EXPOSE|CMD|ENTRYPOINT|" +
			"version|services|container_name|image|build|context|dockerfile|environment|ports|networks|" +
			"restart_policy|restart|depends_on|command|secrets|deploy|mode|replicated|global|replicas";

	var regLinuxCMD = new RegExp("((<br />)*)([^ ]+)( – .+)");
	text = text.replace(regLinuxCMD, "$1<span class='spanInstruKeyword'>$3</span>$4");

	var regInstruKeywords = new RegExp("(" + DockerFileKeywords + ")","g");

	return text.replace(regInstruKeywords,"<span class='spanInstruKeyword'>$1</span>");
}

////-------------------位置
function createInstru(text, NO, instruT) {
	text = addSpan(text);
	if(NO != null) {
		if(instruT == 'instruT0') {
			document.writeln('<br /><br />')
		}

		words = splitBR(text);
		document.writeln(words[0] + "<span class='" + instruT + "' id='" + NO +"'>" + words[1] + "</span>" + words[2]);
	}
	else {
		words = splitBR(text);
		document.writeln(words[0] + "<span class='" + instruT + "'>" + words[1] + "</span>" + words[2]);
	}
}
////-------------------位置
function createInstruAllTop(text, instruT) {
	words = splitBR(addSpan(text));
	document.writeln(words[0] + '<span class="cmdInstruAllTop' + instruT + '">' + words[1] + '</span>' + words[2]);
}
////-------------------位置
function createInstruAllBottom(text, instruT) {
	words = splitBR(addSpan(text));

	document.writeln(words[0] + '<span class="cmdInstruAllBottom' + instruT + '">' + words[1] + '</span>' + words[2]);
}

function createInstruAllTopT0(text, instruT) {
	createInstruAllTop(text,"T0");
}

function createInstruAllTopT1(text, instruT) {
	createInstruAllTop(text,"T1");
}

function createInstruAllTopT2(text, instruT) {
	createInstruAllTop(text,"T2");
}

function createInstruAllTopT3(text, instruT) {
	createInstruAllTop(text,"T3");
}

function createInstruAllBottomT1(text, instruT) {
	createInstruAllBottom(text,"T1");
}

function createInstruAllBottomT2(text, instruT) {
	createInstruAllBottom(text,"T2");
}

function createInstruAllBottomT3(text, instruT) {
	createInstruAllBottom(text,"T3");
}

function createCmdT1(text) {
	createCmd(text, cmdT1);
}

function createCmdT2(text) {
	createCmd(text, cmdT2);
}

function createCmdT3(text) {
	createCmd(text, cmdT3);
}

function createLinuxTxt(cmds, cmdT) {
	cmds = cmds.replace(/</g,'&lt;') //由于浏览器的原因，< 输出存在问题，替换为对应的hmtl编号

	htmlText = "<div class='linuxDiv" + cmdT + "'>" +
		"<img src='../../../img/copy.png' onclick='linuxCopy(this)' class='linuxCopy' /><div class='copysuccess'><img src='../../../img/g.png' />&nbsp;复制成功</div>"
	cmd_arr = cmds.split('\n')
	subNum = cmd_arr[1].length - cmd_arr[1].replace(/^\s*/g, "").length; //第一行左侧通常没有空白，空白数为html的缩进数

	for(i = 1; i < cmd_arr.length - 1; i++) {
		cmd_arr[i] = cmd_arr[i].substring(subNum);
		//由于浏览器的原因，多个手打的tab或空格可能不正常输出，替换为tab或空格的hmtl符号
		cmd_arr[i] = cmd_arr[i].replace(/\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;');
		cmd_arr[i] = cmd_arr[i].replace(/ /g,'&nbsp;');

		index = cmd_arr[i].indexOf('#');

		if(index == 0) {	//纯注释
			// console.log(0);
			htmlText = htmlText + "<span class='spanZS'>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		if(index > 0 ) {	//配置和注释
			notZS = 'sed&nbsp;-i&nbsp;\'/&nbsp;swap&nbsp;/&nbsp;s/^\\(.*\\)$/#\\1/g\'&nbsp;/etc/fstab';
			if (cmd_arr[i] != notZS) {
				zs = cmd_arr[i].substring(index);	//注释部分
				cmd = cmd_arr[i].substring(0, index);	//命令部分
				htmlText = htmlText + "<span>" + cmd + "</span><span class='spanZS'>" + zs + "</span><br />";
				continue;
			}
		}

		if(cmd_arr[i].indexOf('/*') >= 0 && cmd_arr[i].indexOf('*/') >= 0) {
			htmlText = htmlText + "<div class='divZS'>" + cmd_arr[i] + "</div><br />";
			continue;
		}

		if(cmd_arr[i].indexOf('/*') >= 0) {
			if(cmd_arr[i] == 'path&nbsp;"itachi/*"&nbsp;{') {
				htmlText = htmlText + '<span>' + cmd_arr[i].trim() + '</span><br />'
				continue;
			}
			htmlText = htmlText + "<div class='divZS'><span>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		if(cmd_arr[i].indexOf('*/') >= 0 && cmd_arr[i].indexOf('.*/\\t') < 0) {
			htmlText = htmlText + "<span>" + cmd_arr[i] + "</span></div/><br />";
			continue;
		}

		index = cmd_arr[i].indexOf('&lt;a') // 即<a
		if (index >= 0) {
			link = cmd_arr[i].substring(index);	// 链接
			link = link.replace(/&lt;/g,'<');	// 将空格和<还原
			link = link.replace(/&nbsp;/g,' ');
			cmd = cmd_arr[i].substring(0, index);	// 命令部分
			htmlText = htmlText + '<span>' + cmd.trim() + '</span>' + link + '<br />';
			continue;
		}
		htmlText = htmlText + '<span>' + cmd_arr[i].trim() + '</span><br />'
	}
	htmlText = htmlText + "</div>";
	document.writeln(htmlText);
}

function createViptelaCLI1(cmds) {
	createViptelaCLI(cmds, "T1");
}

function createViptelaCLI2(cmds) {
	createViptelaCLI(cmds, "T2");
}

function createViptelaCLI3(cmds) {
	createViptelaCLI(cmds, "T3");
}

function createViptelaCLI(cmds, cmdT) {
	htmlText = "<div class='linuxDiv" + cmdT + "'>"
	cmd_arr = cmds.split('\n')
	// 为了查看方便，第0行为空白行
	// 第1行左侧通常有空白，空白数为html的缩进数
	subNum = cmd_arr[1].length - cmd_arr[1].replace(/^\s*/g, "").length;

	for(i = 1; i < cmd_arr.length - 1; i++) {
		cmd_arr[i] = cmd_arr[i].substring(subNum);
		if(
			cmd_arr[i].indexOf('config terminal') >= 0 ||
			cmd_arr[i].indexOf('no shutdown') >= 0
		) {
			cmd_arr[i] = cmd_arr[i].replace(/ /g,'&nbsp;').replace(/\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;');
			htmlText = htmlText + "<span class='spanB'>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		if(cmd_arr[i].indexOf('!') >= 0) {
			cmd_arr[i] = cmd_arr[i].replace(/ /g,'&nbsp;').replace(/\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;');
			htmlText = htmlText + "<span class='sqlWord'>" + cmd_arr[i] + "</span><br />";
			continue;
		}

		reg = new RegExp("(\\s*ip (address|route))(.+)");
		clis = cmd_arr[i].match(reg);

		if(clis) {
			htmlText = htmlText + "<span class='spanB'>" + clis[1].replace(/ /g,'&nbsp;').replace(/\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;') + "</span>";
			htmlText = htmlText + "<span>" + clis[3].replace(/ /g,'&nbsp;').replace(/\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;') + "</span><br />";
			continue;
		}


		reg = new RegExp("(\\s*\\S+)(.*)");
		clis = cmd_arr[i].match(reg);
		if(clis) {
			htmlText = htmlText + "<span class='spanB'>" + clis[1].replace(/ /g,'&nbsp;').replace(/\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;') + "</span>";
			htmlText = htmlText + "<span>" + clis[2].replace(/ /g,'&nbsp;').replace(/\t/g,'&nbsp;&nbsp;&nbsp;&nbsp;') + "</span><br />";
		}
		else  {
			htmlText = htmlText + "<br />";
		}
	}
	htmlText = htmlText + "</div>";
	document.writeln(htmlText);
}

function createLinuxTxtT1(cmds) {
	createLinuxTxt(cmds, "T1");
}

function createLinuxTxtT2(cmds) {
	createLinuxTxt(cmds, "T2");
}

function createLinuxTxtT3(cmds) {
	createLinuxTxt(cmds, "T3");
}

function createYAML(cmds, cmdT) {
	htmlText = "<div class='linuxDiv" + cmdT + "'>";
	cmd_arr = cmds.split('\n');
	// 为了查看方便，第0行为空白行
	// 第1行左侧通常有空白，空白数为html的缩进数
	subNum = cmd_arr[1].length - cmd_arr[1].replace(/^\s*/g, "").length;

	for(i = 1; i < cmd_arr.length - 1; i++){
		cmd_arr[i] = cmd_arr[i].substring(subNum);

		//由于浏览器的原因，多个手打的tab或空格可能不正常输出，替换为tab或空格的hmtl符号
		cmd_arr[i] = cmd_arr[i].replace(/\t/g,'&nbsp;&nbsp;');
		cmd_arr[i] = cmd_arr[i].replace(/ /g,'&nbsp;');

		zs = '';
		index = cmd_arr[i].indexOf('#');
		console.log(cmd_arr[i])
		if(index == 0) {	//纯注释
			console.log('%%%%%%%%%%%%%%%%%%%%%%'+cmd_arr[i])
			console.log(i)
			htmlText = htmlText + "<span class='spanZS'>" + cmd_arr[i] + "</span><br />";
			continue;		//纯注释，无需进行后面的分解
		}

		if(index > 0) {	//配置和注释
			zs = cmd_arr[i].substring(index);	//注释
			cmd_arr[i] = cmd_arr[i].substring(0, index);	//配置
		}

		fgf_list = [':','='];
		fgf = ''

		for(j in fgf_list) {
			if(cmd_arr[i].indexOf(fgf_list[j]) != -1) {
				fgf = fgf_list[j];
				break;
			}
		}

		if(fgf == '') {	//无分割符
			htmlText = htmlText + "<span class='spanV'>" + cmd_arr[i] + "</span>";
		}
		else {
			index = cmd_arr[i].indexOf(fgf);
			reg  = new RegExp(/\d/);
			if(reg.test(cmd_arr[i][index-1]) && reg.test(cmd_arr[i][index+1])) {
				htmlText = htmlText + "<span class='spanV'>" + cmd_arr[i] + "</span>";
			}
			else {
				type = cmd_arr[i].substring(0, index);
				value = cmd_arr[i].substring(index + 1);
				console.log('进来了')
				console.log(i)
				console.log(cmd_arr[i])
				console.log('--------------------------------------------------')
				htmlText = htmlText + "<span class='spanT'>" + type + "</span><span class='spanV'><span class='spanFGF'>" + fgf + "</span>" + value + "</span>";
			}
		}

		if(zs != '') {
			htmlText = htmlText + "<span class='spanZS'>" + zs + "</span>";
		}

		htmlText = htmlText + "<br />";
	}

	htmlText = htmlText + "</div>";
	htmlText = htmlText.replace(/((&nbsp;)+\d+(&nbsp;)*)<\/span>/g,'<span class="spanNum">$1</span></span>');
	htmlText = htmlText.replace(/((&nbsp;)+-(&nbsp;)+)/g,'<span class="spanFGF">$1</span>');
	document.writeln(htmlText);
}

function createYAMLT1(cmds) {
	createYAML(cmds, "T1");
}

function createYAMLT2(cmds) {
	createYAML(cmds, "T2");
}

function createYAMLT3(cmds) {
	createYAML(cmds, "T3");
}

function createCmd(text, cmdT) {
	text = addSpan(text);
	document.writeln("<span class='"+cmdT+"'>" + text + "</span>");
}

function createLinuxCmd(linuxCmd, cmdNum = 2) {
	cmd = linuxCmd.split(" ||| ");
	htmlText = "";
	if(cmdNum == 2) {
		// reg = new RegExp("([A-z][A-z-]+)(( (\\[ )?([A-z][A-z-]+)( \\])?)?)(( ([-+]{1,2}[^ ]+))*)?( (.+))?");
		reg = new RegExp("(\\S+)(( (\\[ )?([A-z][A-z-]+)( \\])?)?)(( ([-+]{1,2}\\S+))*)?( (.+))?");

	}
	else {
		// reg = new RegExp("([A-z][A-z-]+)(( (\\[ )?([A-z][A-z-]+)( \\])?){" + (cmdNum -1).toString() + "})(( ([-+]{1,2}[^ ]+))*)?( (.+))?");
		reg = new RegExp("(\\S+)(( (\\[ )?([A-z][A-z-]+)( \\])?){" + (cmdNum -1).toString() + "})(( ([-+]{1,2}\\S+))*)?( (.+))?");
	}
	for(i = 0; i < cmd.length; i++) {
		cmds = cmd[i].match(reg);
		// console.log(cmd[i]);
		// console.log(cmds);
		// console.log("-----------------------");

		htmlText = htmlText + "<span class='sqlWord'>" + cmds[1].replaceAll(" ","&nbsp;&nbsp;") + "</span>";

		if(cmds[2]) {// cmds[4]首字符为一个空格，如果有多个参数，每个参数间还有一个空格，改为两个空格
			if(cmds[4] && cmds[6]) {
				htmlText = htmlText + "&nbsp;&nbsp;[&nbsp;&nbsp;<span class='sqlWord'>" + cmds[5] + "</span>&nbsp;&nbsp;]";
			}
			else{
				htmlText = htmlText + "<span class='sqlWord'>" + cmds[2].replaceAll(" ","&nbsp;&nbsp;") + "</span>";
			}
		}

		// 命令参数部分
		if(cmds[7]) {// cmds[6]首字符为一个空格，如果有多个参数，每个参数间还有一个空格，改为两个空格
			htmlText = htmlText + "<span class='spanY'>" + cmds[7].replaceAll(" ","&nbsp;&nbsp;") + "</span>";
		}

		// 命令对象部分
		if(cmds[11]) {
			if(/^\$\(.+\)$/.test(cmds[11]) || /^("|(\[")).+(("\])|")$/.test(cmds[11])) { // $(…内容…) "…内容…" ["…内容…"]
				htmlText = htmlText + "&nbsp;&nbsp;" + cmds[11].replaceAll(" ","&nbsp;&nbsp;").replaceAll("[\"","[ \"").replaceAll("\"]","\" ]");
			}
			else {
				index = cmds[11].indexOf(" -");
				// index2 = cmds[11].indexOf(" - ");	// 应对 chattr { + | - }“i。 “ap。
				// if(index == -1 || index == index2) {
				// 	cmds[11] = cmds.replaceAll('')
				// }
				if(index == -1) {
					htmlText = htmlText + "&nbsp;&nbsp" + cmds[11].replaceAll(" ","&nbsp;&nbsp;").replaceAll(" | ","&nbsp;&nbsp;|&nbsp;&nbsp;");
				}
				else {
					htmlText = htmlText + "&nbsp;&nbsp" + cmds[11].split(" -")[0].replace("。 “","。&nbsp;&nbsp;“").replaceAll(" | ","&nbsp;&nbsp;|&nbsp;&nbsp;");
					htmlText = htmlText + splitLinuxCmd(cmds[11].substring(index + 1));
				}
			}
		}
		htmlText = htmlText + "&nbsp;&nbsp;|&nbsp;&nbsp;";
	}
	// console.log(htmlText)
	return createCmdSpan(htmlText.substr(0, htmlText.length - 25));
}

function splitLinuxCmd(cmd) {
	// console.log(cmd);
	htmlText = "";
	index = cmd.indexOf(" -");
	if(index == -1) {
		htmlText = htmlText + splitParaObj(cmd);
	}
	else {
		htmlText = htmlText + splitParaObj(cmd.split(" -")[0]);
		htmlText = htmlText + splitLinuxCmd(cmd.substring(index + 1));
	}

	return htmlText;
}

function splitParaObj(cmd){
	// console.log("PO：" + cmd);
	reg = new RegExp("(-{1,2}[^ ]+)?( (.+))?");
	cmds = cmd.match(reg);

	htmlText = "&nbsp;&nbsp;<span class='spanY'>" + cmds[1] + "</span>";
	if(cmds[3]) {
		// htmlText = htmlText + "&nbsp;&nbsp;" + cmds[3].replace("。 “","。&nbsp;&nbsp;“").replaceAll(" | ","&nbsp;&nbsp;|&nbsp;&nbsp;");
		htmlText = htmlText + "&nbsp;&nbsp;" + cmds[3].replaceAll(" ","&nbsp;&nbsp;");
	}

	return htmlText;
}

function createSQLLinuxCmdSpan(cmd) {
	return createCmdSpan("<span style='color:#8AA4AF'>[root@localhost ~]#</span> "+ cmd);
}

function createSQLCmdSpan(cmd) {
	cmd = addSQLSpan(cmd);
	cmd = "<span style='color:#8AA4AF'>mysql\></span> "+ cmd;

	// 有一些内容非关键字，但与字符与关键字相同，
	// 手动在字符前添加{}区分，返回去掉{}的命令
	return createCmdSpan(cmd.replace(/{}/g,''));
}

function createSQLCmdInstruSpan(cmd, text) {
	cmd = addSQLSpan(cmd);
	// <span className="sqlWord">'“Cisc0123!。'</span>
	cmd = cmd.replace("<span class=\"sqlWord\">'","<span class=\"sqlWord\">");
	cmd = cmd.replace("'</span>","</span>");
	return createCmdInstruSpan(cmd, text);
}

function createCmdSpan(cmd) {
	// cmd为 <span……，不加前缀
	// console.log(cmd);
	if(cmd.indexOf("<span") >= 0) {
		return "<span class='cmd'>" + addSpan(cmd) +"</span>"
	}

	//------------------------疑似无用-------------------------------
	// var regFG = /([\w() -/[<&:~;]+[#>\$\]] )(.+)/;	// 思科华为各种模式前缀，如：R1(config-route)# [R1-FastEthernet0/0]
	// var regLinux = /[\w ]+\[[\w |-]+\].+/;	// 可选参数的linux命令，如：mkdir [ -p ] fw/cisco/asa
	//
	// if(!regLinux.test(cmd) && regFG.test(cmd)) {
	// 	cmd = cmd.replace(regFG,"<span style='color:#8AA4AF;font-size:18px'>$1</span><span class='cmd'>$2</span>");
	// 	return addSpan(cmd);
	// }
	// else {
	// 	return "<span class='cmd'>" + addSpan(cmd) +"</span>";
	// }
	//------------------------疑似无用-------------------------------

	var regFG = /([\w() -/[<&:~;…]+[#>\$\]] )(.+)/;	// 思科华为各种模式前缀，如：R1(config-route)# [R1-FastEthernet0/0]
	if(regFG.test(cmd)) {
		cmd = cmd.replace(regFG,"<span style='color:#8AA4AF;font-size:18px'>$1</span><span class='cmd'>$2</span>");
		return addSpan(cmd);
	}
	else {
		return "<span class='cmd'>" + addSpan(cmd) +"</span>";
	}
}

function createCmdInstruSpan(cmd, text) {
	cmd = addSpan(cmd);

	if(text == null) {
		return cmd;
	}
	else {
		text = addSpan(text);
		return cmd + '<>' + text;
	}
}

function addSpan(text) {
	/*
		“ ——> <span class="variable">		包裹可变部分
		” ——> <span class="bold">			包裹两个可变部分时夹着的符号，突出显示
		‘ ——> <span class="spanR">			包裹强调部分
		｛ ——> <span class="variableZN">	包裹可变部分的中文描述
		｝ ——> <span class="variableZN">	包裹Linux的命令参数部分
		。 ——> </span>						包裹结束
		》 ——> </span></span>				2个包裹结束

		　 ——> &nbsp;&nbsp;					某些多个可变内容间只一个空格间隔，
											为了看着和配置时方便，配置时用一个中文空格，再转化为2个html的空格
	*/

	text = text.replace(/XNSY/g, "VPN");	// Gitee Pages屏蔽词
	text = text.replace(/xnsy/g, "vpn");	// Gitee Pages屏蔽词
	text = text.replace(/邻邻邻/g, "邻居");	// Gitee Pages屏蔽词


	var regVariable = new RegExp("“","g");
	var regSpanBold = new RegExp("”","g");
	var regR = new RegExp("‘","g");
	var regZN = new RegExp("｛","g");
	var regLinuxPara = new RegExp("｝","g");
	var regEnd = new RegExp("([^/])。","g");
	var regEnd2 = new RegExp("([^/])》","g");

	var regJH = new RegExp("/。","g");
	var regZNKG = new RegExp("　","g");

	text = text.replace(regVariable, "<span class='variable'>");
	text = text.replace(regSpanBold, "<span class='spanBold'>");
	text = text.replace(regR, "<span class='spanR'>");
	text = text.replace(regZN, "<span class='variableZN'>");
	text = text.replace(regLinuxPara, "<span class='spanY'>");
	text = text.replace(regEnd, "$1</span>");
	text = text.replace(regEnd2, "$1</span></span>");
	text = text.replace(regJH, "。");

	text = text.replace(regZNKG,"&nbsp;&nbsp;");

	return text;
}

function createCmdInstru(instruArr, typeT, typeBrand) {
	//instruArr：命令说明集合，每行为数组中一项，每项中不同说明以中文<>分隔
	var tdBrand = "";
	var imagepath = "../../../img/";

	switch(typeBrand) {
		case "cisco":
			tdBrand = "tdBrandC";
			break;

		case "huawei":
			tdBrand = "tdBrandH";
			break;

		case "h3c":
			tdBrand = "tdBrand3";
			break;

		case "vmware":
			tdBrand = "tdBrandVM";
			imagepath = "../../img/";
			break;

		case "nmap":
			tdBrand = "tdBrandN";
			imagepath = "../../img/";
			break;

		case "mysql":
			tdBrand = "tdBrandM";
			break;

		case "docker":
			tdBrand = "tdBrandD";
			break;

		case "k8s":
			tdBrand = "tdBrandK";
			break;

		case "vault":
			tdBrand = "tdBrandV";
			break;

		case "gitlab":
			tdBrand = "tdBrandG";
			break;

		case "redhat":
			tdBrand = "tdBrandR";
			imagepath = "../../img/";
			break;

		case "f5":
			tdBrand = "tdBrandF";
			break;
	}

	var htmlText = "<table class='cmdTable" + typeT + "'>"

	htmlText = htmlText + "<tr><td rowspan='" + (instruArr.length + 1) + "' class='" + tdBrand + "'>"
			 + "<img src='" + imagepath + typeBrand + ".png' class='imgBrand' /></td></tr>"
	htmlText = htmlText + "<tr><td colspan='2'>" + instruArr[0]+"</td></tr>";

	if(instruArr.length > 1) {
		for(var i = 1;i < instruArr.length;i++) {
			htmlText=htmlText+"<tr";
			if(instruArr[i].indexOf("<>") != -1) {
				htmlText = htmlText + " class='cmdInstru'>"
				var eachInstruItem = instruArr[i].split("<>");
				htmlText = htmlText + "<td class='tdcmdInstru1'>" + eachInstruItem[0] + "：</td>";
				htmlText = htmlText + "<td class='tdcmdInstru2'>" + eachInstruItem[1] + "</td>";
			}
			else {
				htmlText = htmlText + ">"
				if(instruArr[i].indexOf("<img") != -1) {
					htmlText = htmlText+"<td>" + instruArr[i] + "</td>"
				}
				else {
					if (instruArr[i].indexOf("'cmd'") == -1) {
						htmlText = htmlText + "<td colspan='2' class='cmdInstru'>" + instruArr[i] + "</td>"
					} else {
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

function createConfigImg(imgNameList, typeT) {//, typeBrand) {
	// htmlText = "<div class='divConfig" + typeT + "'><div class='divConfigImg'>";
	htmlText = "<div class='divConfigImg" + typeT + "'>";

	if(imgNameList.indexOf('~') > 0) {
		imgNameArr = imgNameList.split("~");
		for(i = imgNameArr[0].substr(imgNameArr[0].length - 1); i <= imgNameArr[1]; i++) {
			eachName = imgNameArr[0].substr(0, imgNameArr[0].length - 1) + i;
			htmlText = htmlText + "<img src='config_img/" + eachName + ".png' />";
			if(i != imgNameArr[1]) {//除最后第一张，每二张图间空行
				htmlText = htmlText + "<br /><br />";
			}
		}
	}
	else {
		htmlText = htmlText + "<img src='config_img/" + imgNameList + ".png' />";
	}
	// htmlText = htmlText + "</div></div><br /><br />";
	htmlText = htmlText + "</div><br /><br />";
	document.write(htmlText);
	
}

function createConfigImgT0(imgNameList) {
	createConfigImg(imgNameList, "T0");
}

function createConfigImgT1(imgNameList) {
	createConfigImg(imgNameList, "T1");
}

function createConfigImgT2(imgNameList) {
	createConfigImg(imgNameList, "T2");
}

function createConfigImgT3(imgNameList) {
	createConfigImg(imgNameList, "T3");
}

function addSQLSpan(cmd) {
	sql_keyword =
		'alter|all|' +
		'by|' +
		'create|' +
		'drop|' +
		'from|for|flush|' +
		'grant|' +
		'identified|identifity|' +
		'on|' +
		'password|privileges|persist|' +
		'select|set|show|' +
		'to|' +
		'update|use|user|' +
		'variables|' +
		'where|with';
	for (const sElement of reg = '/'
		+ '(^(' + sql_keyword + ') )|'
		+ '( (' + sql_keyword + ')$)|'
		+ '( (' + sql_keyword + ') )|'
		+ '(“(' + sql_keyword + ')。)' +
		'/g') {
	};

	cmd = cmd.replace(/ /g, '  ')
	cmd = cmd.replace(eval(reg),"<span class=\"sqlKeyword\">$&</span>");
	cmd = cmd.replace(/'[^']+'/g,"<span class=\"sqlWord\">$&</span>");
	return cmd;
}

function createProtocolWord(protocolSX, protocolQC, protocolZW) {
	htmlText = "<div style='display: inline-block'>";
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

function createProtocolStructT0(imgWidth, imgHeight, SFHeight, imgUrl, divID = 'divProtocolStruct') {
	createProtocolStruct(imgWidth, imgHeight, SFHeight, imgUrl, "T0", divID);
}

function createProtocolStructT1(imgWidth, imgHeight, SFHeight, imgUrl, divID = 'divProtocolStruct') {
	createProtocolStruct(imgWidth, imgHeight, SFHeight, imgUrl, "T1", divID);
}

function createProtocolStructT2(imgWidth, imgHeight, SFHeight, imgUrl, divID = 'divProtocolStruct') {
	createProtocolStruct(imgWidth, imgHeight, SFHeight, imgUrl, "T2", divID);
}

function createProtocolStruct(imgWidth, imgHeight, SFHeight, imgUrl, divT, divID) {
	htmlText = "<div class='divSJ" + divT + "'>";
	htmlText = htmlText + "<div class='divProtocolStruct'>";
	htmlText = htmlText + "<div id='" + divID + "' style='width: " + imgWidth + "px; height: " + imgHeight + "px; background-image: url(config_img/" + imgUrl + ".png); background-size: " + imgWidth +"px " + SFHeight + "px' ></div>";
	htmlText = htmlText + "</div>";
	htmlText = htmlText + "</div>";
	document.write(htmlText);
}

function heightlightField(protocolField, k, structID) {
	y = (k * protocolField).toString() + 'px';
	$(structID).css('background-position-y',y);
}

function initProtocol(structID) {
	$(structID).css('background-position-y','0px');
}

function createProtocolExplainT0(words, k, structID = 'divProtocolStruct') {
	createProtocolExplain(words, k, structID, "T0");
}

function createProtocolExplainT1(words, k, structID = 'divProtocolStruct') {
	createProtocolExplain(words, k, structID, "T1");
}

function createProtocolExplainT2(words, k, structID = 'divProtocolStruct') {
	createProtocolExplain(words, k, structID, "T2");
}

function createProtocolExplain(words, k, structID, divT) {
	htmlText = "<div class='divSJ" + divT + "'>";

	htmlText = htmlText + "<div class='divProtocolExplain'><dl>";
	words_arr = words.split('\n');

	for(i = 1,j = 1; i < words_arr.length - 1; i = i + 3, j++){
		htmlText = htmlText + "<div onMouseOver=\"heightlightField("
			+ j + "," + k + ", \'#" + structID + "\')\" onMouseOut=\"initProtocol(\'#" + structID + "\')\">";
		htmlText = htmlText + "<dt class='fa fa-files-o'>&nbsp;&nbsp;" + words_arr[i].trim() + "</dt>";
		htmlText = htmlText + "<dd>" + words_arr[i + 1].trim() + "</dd></div>";
	}
	htmlText = htmlText + "</dl></div>";
	htmlText = htmlText + "</div>";
	document.writeln(htmlText);
}

function splitBR(text) {
	reg = new RegExp("(^(<br />)*)(.+?)((<br />)*$)");
	br = text.match(reg);
	return [br[1], br[3], br[4]];
}

function linuxCopy(element) {
	txt = element.parentNode.innerHTML.replace('<a href="javascript:void(0)" onclick="linuxCopy(this)" class="linuxCopy">复制内容</a>', '');
	txt = txt.replaceAll('<span>','').replaceAll('</span>','').replaceAll('<br />','\r\n').replaceAll('<br>','\r\n').replaceAll('&nbsp;',' ');
	const textarea = document.createElement('textarea'); // 直接构建textarea  「注意：这里为了实现换行，需要创建textarea，如果用input的话，实现不了换行。」
	textarea.value = txt; // 设置内容
	document.body.appendChild(textarea); // 添加临时实例
	textarea.select(); // 选择实例内容
	document.execCommand('Copy'); // 执行复制
	document.body.removeChild(textarea); // 删除临时实例

	$(".copysuccess").fadeIn(500);
	setTimeout(function() {$(".copysuccess").fadeOut(500)}, 1000)

}