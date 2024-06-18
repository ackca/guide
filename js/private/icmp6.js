$(document).ready(function () {
	// ------------------------- Type 1 选择器 开始  -----------------------------------
	const _c21 = createSelection("#tICMPv6Type", "_c21");
	const _r2 = createSelection("#tICMPv6Type", "_r2");

	const _c91 = createSelection("#tICMPv6Type", "_c91");

	const Type1_Col1 = createCellSelection("#tICMPv6Type", 1, 1, 2, 9);
	const Type1_Col12 = createCellSelection("#tICMPv6Type", 1, 2, 2, 9);
	const Type1_RowAll = createRowSelection("#tICMPv6Type", 2, 9);
	const Type1_RowType = createRowSelection("#tICMPv6Type", 3, 9);
	// ------------------------- Type 1 选择器 结束 -----------------------------------
	// ------------------------- Type 3 选择器 开始 -----------------------------------
	const _c111 = createSelection("#tICMPv6Type", "_c111");
	const _r11 = createSelection("#tICMPv6Type", "_r11");

	const _c131 = createSelection("#tICMPv6Type", "_c131");

	const Type3_Col1 = createCellSelection("#tICMPv6Type", 1, 1, 11, 13);
	const Type3_Col12 = createCellSelection("#tICMPv6Type", 1, 2, 11, 13);
	const Type3_RowAll = createRowSelection("#tICMPv6Type", 11, 13);
	const Type3_RowType = createRowSelection("#tICMPv6Type", 12, 13);

	// ------------------------- Type 3 选择器 结束 -----------------------------------
	// ------------------------- Type 4 选择器 开始 -----------------------------------
	const _c141 = createSelection("#tICMPv6Type", "_c141");
	const _r14 = createSelection("#tICMPv6Type", "_r14");

	const _c171 = createSelection("#tICMPv6Type", "_c171");

	const Type4_Col1 = createCellSelection("#tICMPv6Type", 1, 1, 14, 17);
	const Type4_Col12 = createCellSelection("#tICMPv6Type", 1, 2, 14, 17);
	const Type4_RowAll = createRowSelection("#tICMPv6Type", 14, 17);
	const Type4_RowType = createRowSelection("#tICMPv6Type", 15, 17);

	// ------------------------- Type 4 选择器 结束 -----------------------------------

	// ------------------------- Type 1 高亮 开始  -----------------------------------
	// ------------------------- Type 1 第一行 -----------------------------------
	$(Type1_Col1.replace(_c21, _r2)).mouseover(function () {
		$(Type1_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type1_Col1).css("border-bottom-color", "#CBCFFF");
		$(_c91.substring(0, _c91.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type1_Col12).css("color", "#8000FF");
	});
	$(Type1_Col1.replace(_c21, _r2)).mouseleave(function () {
		$(Type1_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type1_Col1).css("border-bottom-color", "#5A5D6F");
		$(_c91.substring(0, _c91.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type1_Col12).css("color", "#FFFF00");
	});


	$(Type1_RowType).mouseover(function () {
		$(_r2.substring(0, _r2.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type1_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c91.substring(0, _c91.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type1_RowType).mouseleave(function () {
		$(Type1_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type1_Col12).css("color", "#FFFF00");
		$(Type1_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c91.substring(0, _c91.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ------------------------- Type 1 高亮 结束  -----------------------------------
	// ------------------------- Type 3 高亮 开始  -----------------------------------
	// ------------------------- Type 3 第一行 -----------------------------------
	$(Type3_Col1.replace(_c111, _r11)).mouseover(function () {
		$(Type3_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type3_Col1).css("border-bottom-color", "#CBCFFF");
		$(_c131.substring(0, _c131.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type3_Col12).css("color", "#8000FF");
	});
	$(Type3_Col1.replace(_c111, _r11)).mouseleave(function () {
		$(Type3_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type3_Col1).css("border-bottom-color", "#5A5D6F");
		$(_c131.substring(0, _c131.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type3_Col12).css("color", "#FFFF00");
	});

	$(Type3_RowType).mouseover(function () {
		$(_r11.substring(0, _r11.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type3_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c131.substring(0, _c131.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type3_RowType).mouseleave(function () {
		$(Type3_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type3_Col12).css("color", "#FFFF00");
		$(Type3_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c131.substring(0, _c131.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	// ------------------------- Type 3 高亮 结束  -----------------------------------
	// ------------------------- Type 4 高亮 开始  -----------------------------------
	// ------------------------- Type 4 第一行 -----------------------------------
	$(Type4_Col1.replace(_c141, _r14)).mouseover(function () {
		$(Type4_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Type4_Col1).css("border-bottom-color", "#CBCFFF");
		$(_c171.substring(0, _c171.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type4_Col12).css("color", "#8000FF");
	});
	$(Type4_Col1.replace(_c141, _r14)).mouseleave(function () {
		$(Type4_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type4_Col1).css("border-bottom-color", "#5A5D6F");
		$(_c171.substring(0, _c171.length - 2)).css("border-bottom-color", "#A0A0A0");
		$(Type4_Col12).css("color", "#FFFF00");
	});

	$(Type4_RowType).mouseover(function () {
		$(_r14.substring(0, _r14.length - 2)).css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(3)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(this).parent(".row").children(":nth-child(2)").css("background-color", "#CBCFFF").css("color", "#8000FF");
		$(Type4_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c171.substring(0, _c171.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Type4_RowType).mouseleave(function () {
		$(Type4_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Type4_Col12).css("color", "#FFFF00");
		$(Type4_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c171.substring(0, _c171.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
});