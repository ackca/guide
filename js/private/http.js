function toDetail(id) {
	var href = window.location.href.split("#")[0];
	location.href = href + id;
	var topp = $("#divCommand").offset().top + 160;

	var leftt = $("#divCommand").offset().left;
	$("#divCommand").offset({top: topp, left: leftt});
}

$(document).ready(function () {
	$("#tStatus2 .row").click(function () {
		var index = $("#tStatus2 .row").index($(this)); // 获取该行在表格中为第几行

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
	var _c71 = createSelection("#tHeaders", "_c71");

	var General_Col1 = createCellSelection("#tHeaders", 1, 1, 2, 7);
	var General_RowAll = createRowSelection("#tHeaders", 2, 7);

	// ---------------- 请求首部 ----------------
	var _c151 = createSelection("#tHeaders", "_c151");

	var Request_Col1 = createCellSelection("#tHeaders", 1, 1, 8, 15);
	var Request_RowAll = createRowSelection("#tHeaders", 8, 15);

	// ---------------- 响应首部 ----------------
	var _c181 = createSelection("#tHeaders", "_c181");

	var Response_Col1 = createCellSelection("#tHeaders", 1, 1, 16, 18);
	var Response_RowAll = createRowSelection("#tHeaders", 16, 18);

	// ---------------- 实体首部 ----------------
	var _c251 = createSelection("#tHeaders", "_c251");

	var Entity_Col1 = createCellSelection("#tHeaders", 1, 1, 19, 25);
	var Entity_RowAll = createRowSelection("#tHeaders", 19, 25);


	// ---------------- 通用首部高亮 ----------------
	$(General_Col1).mouseover(function () {
		$(General_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(General_Col1).css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c71.substring(0, _c71.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(General_Col1).mouseleave(function () {
		$(General_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(General_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c71.substring(0, _c71.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	$(General_RowAll).mouseover(function () {
		$(this).parent(".row").children(":not(:first-child)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(General_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c71.substring(0, _c71.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(General_RowAll).mouseleave(function () {
		$(General_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(General_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c71.substring(0, _c71.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ---------------- 请求首部高亮 ----------------
	$(Request_Col1).mouseover(function () {
		$(Request_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Request_Col1).css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c151.substring(0, _c151.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Request_Col1).mouseleave(function () {
		$(Request_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Request_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c151.substring(0, _c151.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	$(Request_RowAll).mouseover(function () {
		$(this).parent(".row").children(":not(:first-child)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(Request_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c151.substring(0, _c151.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Request_RowAll).mouseleave(function () {
		$(Request_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Request_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c151.substring(0, _c151.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ---------------- 响应首部高亮 ----------------
	$(Response_Col1).mouseover(function () {
		$(Response_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Response_Col1).css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c181.substring(0, _c181.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Response_Col1).mouseleave(function () {
		$(Response_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Response_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c181.substring(0, _c181.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	$(Response_RowAll).mouseover(function () {
		$(this).parent(".row").children(":not(:first-child)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(Response_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c181.substring(0, _c181.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Response_RowAll).mouseleave(function () {
		$(Response_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Response_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c181.substring(0, _c181.length - 2)).css("border-bottom-color", "#A0A0A0");
	});

	// ---------------- 实体首部高亮 ----------------
	$(Entity_Col1).mouseover(function () {
		$(Entity_RowAll).css("background-color", "#CBCFFF").css("color", "#000000");
		$(Entity_Col1).css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
	});
	$(Entity_Col1).mouseleave(function () {
		$(Entity_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Entity_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
	});

	$(Entity_RowAll).mouseover(function () {
		$(this).parent(".row").children(":not(:first-child)").css("background-color", "#CBCFFF").css("color", "#000000");
		$(Entity_Col1).css("background-color", "#CBCFFF").css("border-bottom-color", "#CBCFFF").css("color", "#8000FF");
		$(_c181.substring(0, _c181.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
	$(Entity_RowAll).mouseleave(function () {
		$(Entity_RowAll).css("background-color", "#5A5D6F").css("color", "#FFFFFF");
		$(Entity_Col1).css("border-bottom-color", "#5A5D6F").css("color", "#FFFF00");
		$(_c181.substring(0, _c181.length - 2)).css("border-bottom-color", "#A0A0A0");
	});
});
