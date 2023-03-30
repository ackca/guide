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
	htmlText = "<div class='divSJ" + divT + "'>";
	nc = "";

	if(tID != "") {
		if(tHeader == '') {
			htmlText = htmlText + "<div class='HLTableS1' id='" + tID + "' style='width:" + tWidth +"px'>";
		}
		else {
			htmlText = htmlText + "<div class='HLTableS2' id='" + tID + "' style='width:" + tWidth +"px'>";
		}
	}
	else {
		if(tHeader == '') {
			htmlText = htmlText + "<div class='HLTableS1' style='width:" + tWidth +"px'>";
		}
		else {
			htmlText = htmlText + "<div class='HLTableS2' style='width:" + tWidth +"px'>";
		}
	}

	htmlText = htmlText + "<div class='table'>";
	if(tHeader.length != 0) {
		htmlText = htmlText + "<div class='row header'>";
		for(i in tHeader) {
			htmlText = htmlText + "<div class='cell'>" + tHeader[i] + "</div>";
		}
		htmlText = htmlText + "</div>";
	}

	for(i in tBody) {
		htmlText = htmlText + "<div class='row'>";
		for(j in tBody[i]) {
			// tbody = tBody[i][j].replace("会会会","会主动向");		// Gitee Pages屏蔽词
			tbody = tBody[i][j];

			// if(j == 0) {
			// 	var para = new RegExp("(^-[^ ]+)");
			// 	tbody = tbody.replace(para, "<span class='spanY'>$1</span>");
			// }

			htmlText = htmlText + "<div class='cell'>" + tbody + "</div>";
		}
		htmlText = htmlText + "</div>";
	}

	htmlText = htmlText + "</div></div>";
	htmlText = htmlText + "</div>";
	document.writeln(htmlText);
}