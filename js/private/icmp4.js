$(document).ready(function () {
	// ------------------------- Type 3 选择器 开始  -----------------------------------
	const _c31 = createSelection("#tICMPv4Type", "_c31");
	const _r3 = createSelection("#tICMPv4Type", "_r3");

	const _c191 = createSelection("#tICMPv4Type", "_c191");

	const Type3_Col1 = createCellSelection("#tICMPv4Type", 1, 1, 3, 19);
	const Type3_Col12 = createCellSelection("#tICMPv4Type", 1, 2, 3, 19);
	const Type3_RowAll = createRowSelection("#tICMPv4Type", 3, 19);
	const Type3_RowType = createRowSelection("#tICMPv4Type", 4, 19);
	// ------------------------- Type 3 选择器 结束 -----------------------------------
	// ------------------------- Type 5 选择器 开始 -----------------------------------
	const _c211 = createSelection("#tICMPv4Type", "_c211");
	const _r21 = createSelection("#tICMPv4Type", "_r21");

	const _c251 = createSelection("#tICMPv4Type", "_c251");

	const Type5_Col1 = createCellSelection("#tICMPv4Type", 1, 1, 21, 25);
	const Type5_Col12 = createCellSelection("#tICMPv4Type", 1, 2, 21, 25);
	const Type5_RowAll = createRowSelection("#tICMPv4Type", 21, 25);
	const Type5_RowType = createRowSelection("#tICMPv4Type", 22, 25);
	// ------------------------- Type 5 选择器 结束 -----------------------------------
	// ------------------------- Type 11 选择器 开始 -----------------------------------
	const _c291 = createSelection("#tICMPv4Type", "_c291");
	const _r29 = createSelection("#tICMPv4Type", "_r29");

	const _c311 = createSelection("#tICMPv4Type", "_c311");

	const Type11_Col1 = createCellSelection("#tICMPv4Type", 1, 1, 29, 31);
	const Type11_Col12 = createCellSelection("#tICMPv4Type", 1, 2, 29, 31);
	const Type11_RowAll = createRowSelection("#tICMPv4Type", 29, 31);
	const Type11_RowType = createRowSelection("#tICMPv4Type", 30, 31);
	// ------------------------- Type 11 选择器 结束 -----------------------------------
	// ------------------------- Type 12 选择器 开始 -----------------------------------
	const _c321 = createSelection("#tICMPv4Type", "_c321");
	const _r32 = createSelection("#tICMPv4Type", "_r32");

	const _c341 = createSelection("#tICMPv4Type", "_c341");

	const Type12_Col1 = createCellSelection("#tICMPv4Type", 1, 1, 32, 34);
	const Type12_Col12 = createCellSelection("#tICMPv4Type", 1, 2, 32, 34);
	const Type12_RowAll = createRowSelection("#tICMPv4Type", 32, 34);
	const Type12_RowType = createRowSelection("#tICMPv4Type", 33, 34);
	// ------------------------- Type 12 选择器 结束 -----------------------------------
	// ------------------------- Type 3 高亮 开始  -----------------------------------
	// ------------------------- Type 3 第一行 -----------------------------------
	$(Type3_Col1.replace(_c31, _r3)).mouseover(function () {
		$(Type3_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type3_Col1).css("border-bottom-color", "#CBCFFF");
		$(Type3_Col12).css("color", "#8000FF");
	});
	$(Type3_Col1.replace(_c31, _r3)).mouseleave(function () {
		$(Type3_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type3_Col1).css("border-bottom-color", "#5A5D6F");
		$(_c191.substring(0, _c191.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type3_Col12).css("color", "#FFFF00");
	});

	$(Type3_RowType).mouseover(function () {
		$(_r3.substring(0, _r3.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(n+3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type3_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c191.substring(0, _c191.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type3_RowType).mouseleave(function () {
		$(Type3_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type3_Col12).css("color", "#FFFF00");
		$(Type3_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c191.substring(0, _c191.length - 2)).css("border-bottom-color", "#A0A0A0");
	});


	// ------------------------- Type 3 高亮 结束  -----------------------------------
	// ------------------------- Type 5 高亮 开始  -----------------------------------
	// ------------------------- Type 5 第一行 -----------------------------------
	$(Type5_Col1.replace(_c211, _r21)).mouseover(function () {
		$(Type5_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type5_Col1).css("border-bottom-color", "#CBCFFF");
		$(Type5_Col12).css("color", "#8000FF");
		$(_c251.substring(0, _c251.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type5_Col1.replace(_c211, _r21)).mouseleave(function () {
		$(Type5_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type5_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c251.substring(0, _c251.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type5_Col12).css("color", "#FFFF00");
		$(_c251.substring(0, _c251.length - 2)).css("border-bottom-color", "#A0A0A0");
	});


	$(Type5_RowType).mouseover(function () {
		$(_r21.substring(0, _r21.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(n+3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type5_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c251.substring(0, _c251.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type5_RowType).mouseleave(function () {
		$(Type5_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type5_Col12).css("color", "#FFFF00");
		$(Type5_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c251.substring(0, _c251.length - 2)).css("border-bottom-color", "#A0A0A0");
	});


	// ------------------------- Type 5 高亮 结束  -----------------------------------
	// ------------------------- Type 11 高亮 结束  -----------------------------------
	// ------------------------- Type 11 第一行 -----------------------------------
	$(Type11_Col1.replace(_c291, _r29)).mouseover(function () {
		$(Type11_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type11_Col1).css("border-bottom-color", "#CBCFFF")
		$(Type11_Col12).css("color", "#8000FF");
	});
	$(Type11_Col1.replace(_c291, _r29)).mouseleave(function () {
		$(Type11_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type11_Col1).css("border-bottom-color", "#5A5D6F");
		$(_c311.substring(0, _c311.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type11_Col12).css("color", "#FFFF00");
	});


	$(Type11_RowType).mouseover(function () {
		$(_r29.substring(0, _r29.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(n+3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type11_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c311.substring(0, _c311.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type11_RowType).mouseleave(function () {
		$(Type11_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type11_Col12).css("color", "#FFFF00");
		$(Type11_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c311.substring(0, _c311.length - 2)).css("border-bottom-color", "#A0A0A0");
	});


	// ------------------------- Type 11 高亮 结束  -----------------------------------
	// ------------------------- Type 12 高亮 结束  -----------------------------------
	// ------------------------- Type 12 第一行 -----------------------------------
	$(Type12_Col1.replace(_c321, _r32)).mouseover(function () {
		$(Type12_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type12_Col1).css("border-bottom-color", "#CBCFFF");
		$(Type12_Col12).css("color", "#8000FF");
	});
	$(Type12_Col1.replace(_c321, _r32)).mouseleave(function () {
		$(Type12_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type12_Col1).css("border-bottom-color", "#5A5D6F");
		$(_c341.substring(0, _c341.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type12_Col12).css("color", "#FFFF00");
	});


	$(Type12_RowType).mouseover(function () {
		$(_r32.substring(0, _r32.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(n+3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type12_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c341.substring(0, _c341.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type12_RowType).mouseleave(function () {
		$(Type12_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type12_Col12).css("color", "#FFFF00");
		$(Type12_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c341.substring(0, _c341.length - 2)).css("border-bottom-color", "#A0A0A0");
	});


	// ------------------------- Type 12 高亮 结束  -----------------------------------
});