function toDetail(id) {
    var href = window.location.href.split('#')[0];
    location.href = href + id;
    var topp = $('#divCommand').offset().top + 160;

    var leftt = $('#divCommand').offset().left;
    $('#divCommand').offset({top:topp,left:leftt});
}

$(document).ready(function () {
    $('#tStatus2 .row').click(function(){
        var index = $('#tStatus2 .row').index($(this)); // 获取该行在表格中为第几行

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
    // var _c21 = "#tHeaders .row:nth-child(2) .cell:nth-child(1), ";
    // var _r2 = "#tHeaders .row:nth-child(2) .cell, ";
    //
    // var _c31 = "#tHeaders .row:nth-child(3) .cell:nth-child(1), ";
    // var _r3 = "#tHeaders .row:nth-child(3) .cell, ";
    //
    // var _c41 = "#tHeaders .row:nth-child(4) .cell:nth-child(1), ";
    // var _r4 = "#tHeaders .row:nth-child(4) .cell, ";
    //
    // var _c51 = "#tHeaders .row:nth-child(5) .cell:nth-child(1), ";
    // var _r5 = "#tHeaders .row:nth-child(5) .cell, ";
    //
    // var _c61 = "#tHeaders .row:nth-child(6) .cell:nth-child(1), ";
    // var _r6 = "#tHeaders .row:nth-child(6) .cell, ";
    //
    // var _c71 = "#tHeaders .row:nth-child(7) .cell:nth-child(1), ";
    // var _r7 = "#tHeaders .row:nth-child(7) .cell, ";

    var _c21 = createSelection("#tHeaders", "_c21");//"#tHeaders .row:nth-child(2) .cell:nth-child(1), ";
    var _r2 = createSelection("#tHeaders", "_r2");//"#tHeaders .row:nth-child(2) .cell, ";

    var _c31 = createSelection("#tHeaders", "_c31");//"#tHeaders .row:nth-child(3) .cell:nth-child(1), ";
    var _r3 = createSelection("#tHeaders", "_r3");//"#tHeaders .row:nth-child(3) .cell, ";

    var _c41 = createSelection("#tHeaders", "_c41");//"#tHeaders .row:nth-child(4) .cell:nth-child(1), ";
    var _r4 = createSelection("#tHeaders", "_r4");//"#tHeaders .row:nth-child(4) .cell, ";

    var _c51 = createSelection("#tHeaders", "_c51");//"#tHeaders .row:nth-child(5) .cell:nth-child(1), ";
    var _r5 = createSelection("#tHeaders", "_r5");//"#tHeaders .row:nth-child(5) .cell, ";

    var _c61 = createSelection("#tHeaders", "_c61");//"#tHeaders .row:nth-child(6) .cell:nth-child(1), ";
    var _r6 = createSelection("#tHeaders", "_r6");//"#tHeaders .row:nth-child(6) .cell, ";

    var _c71 = createSelection("#tHeaders", "_c71");//"#tHeaders .row:nth-child(7) .cell:nth-child(1), ";
    var _r7 = createSelection("#tHeaders", "_r7");//"#tHeaders .row:nth-child(7) .cell, ";

    var General_Col1 = _c21 +_c31 + _c41 + _c51+ _c61 + _c71.substring(0, _c71.length - 2);
    // console.log(General_Col1)
    var General_RowAll = _r2 + _r3 + _r4 + _r5 +_r6 + _r7.substring(0, _r7.length - 2);
    // console.log(General_RowAll)

    // ---------------- 请求首部 ----------------
    var _c81 = createSelection("#tHeaders", "_c81");//"#tHeaders .row:nth-child(8) .cell:nth-child(1), ";
    var _r8 = createSelection("#tHeaders", "_r8");//"#tHeaders .row:nth-child(8) .cell, ";

    var _c91 = createSelection("#tHeaders", "_c91");//"#tHeaders .row:nth-child(9) .cell:nth-child(1), ";
    var _r9 = createSelection("#tHeaders", "_r9");//"#tHeaders .row:nth-child(9) .cell, ";

    var _c101 = createSelection("#tHeaders", "_c101");//"#tHeaders .row:nth-child(10) .cell:nth-child(1), ";
    var _r10 = createSelection("#tHeaders", "_r10");//"#tHeaders .row:nth-child(10) .cell, ";

    var _c111 = createSelection("#tHeaders", "_c111");//"#tHeaders .row:nth-child(11) .cell:nth-child(1), ";
    var _r11 = createSelection("#tHeaders", "_r11");//"#tHeaders .row:nth-child(11) .cell, ";

    var _c121 = createSelection("#tHeaders", "_c121");//"#tHeaders .row:nth-child(12) .cell:nth-child(1), ";
    var _r12 = createSelection("#tHeaders", "_r12");//"#tHeaders .row:nth-child(12) .cell, ";

    var _c131 = createSelection("#tHeaders", "_c131");//"#tHeaders .row:nth-child(13) .cell:nth-child(1), ";
    var _r13 = createSelection("#tHeaders", "_r13");//"#tHeaders .row:nth-child(13) .cell, ";

    var _c141 = createSelection("#tHeaders", "_c141");//"#tHeaders .row:nth-child(14) .cell:nth-child(1), ";
    var _r14 = createSelection("#tHeaders", "_r14");//"#tHeaders .row:nth-child(14) .cell, ";

    var _c151 = createSelection("#tHeaders", "_c151");//"#tHeaders .row:nth-child(15) .cell:nth-child(1), ";
    var _r15 = createSelection("#tHeaders", "_r15");//"#tHeaders .row:nth-child(15) .cell, ";

    var Request_Col1 = _c81 + _c91 + _c101+ _c111 + _c121 + _c131 + _c141 + _c151.substring(0, _c151.length - 2);
    var Request_RowAll = _r8 + _r9 + _r10 + _r11 + _r12 + _r13 + _r14 + _r15.substring(0, _r15.length - 2);

    // ---------------- 响应首部 ----------------
    var _c161 = createSelection("#tHeaders", "_c161");//"#tHeaders .row:nth-child(16) .cell:nth-child(1), ";
    var _r16 = createSelection("#tHeaders", "_r16");//"#tHeaders .row:nth-child(16) .cell, ";

    var _c171 = createSelection("#tHeaders", "_c171");//"#tHeaders .row:nth-child(17) .cell:nth-child(1), ";
    var _r17 = createSelection("#tHeaders", "_r17");//"#tHeaders .row:nth-child(17) .cell, ";

    var _c181 = createSelection("#tHeaders", "_c181");//"#tHeaders .row:nth-child(18) .cell:nth-child(1), ";
    var _r18 = createSelection("#tHeaders", "_r18");//"#tHeaders .row:nth-child(18) .cell, ";

    var Response_Col1 = _c161 + _c171 + _c181.substring(0, _c181.length - 2);
    var Response_RowAll = _r16 + _r17 + _r18.substring(0, _r18.length - 2);

    // ---------------- 实体首部 ----------------
    var _c191 = createSelection("#tHeaders", "_c191");//"#tHeaders .row:nth-child(19) .cell:nth-child(1), ";
    var _r19 = createSelection("#tHeaders", "_r19");//"#tHeaders .row:nth-child(19) .cell, ";

    var _c201 = createSelection("#tHeaders", "_c201");//"#tHeaders .row:nth-child(20) .cell:nth-child(1), ";
    var _r20 = createSelection("#tHeaders", "_r20");//"#tHeaders .row:nth-child(20) .cell, ";

    var _c211 = createSelection("#tHeaders", "_c211");//"#tHeaders .row:nth-child(21) .cell:nth-child(1), ";
    var _r21 = createSelection("#tHeaders", "_r21");//"#tHeaders .row:nth-child(21) .cell, ";

    var _c221 = createSelection("#tHeaders", "_c221");//"#tHeaders .row:nth-child(22) .cell:nth-child(1), ";
    var _r22 = createSelection("#tHeaders", "_r22");//"#tHeaders .row:nth-child(22) .cell, ";

    var _c231 = createSelection("#tHeaders", "_c231");//"#tHeaders .row:nth-child(23) .cell:nth-child(1), ";
    var _r23 = createSelection("#tHeaders", "_r23");//"#tHeaders .row:nth-child(23) .cell, ";

    var _c241 = createSelection("#tHeaders", "_c241");//"#tHeaders .row:nth-child(24) .cell:nth-child(1), ";
    var _r24 = createSelection("#tHeaders", "_r24");//"#tHeaders .row:nth-child(24) .cell, ";

    var _c251 = createSelection("#tHeaders", "_c251");//"#tHeaders .row:nth-child(25) .cell:nth-child(1), ";
    var _r25 = createSelection("#tHeaders", "_r25");//"#tHeaders .row:nth-child(25) .cell, ";

    var Entity_Col1 = _c191 + _c201 + _c211 + _c221 + _c231 + _c241 + _c251.substring(0, _c251.length - 2);
    var Entity_RowAll = _r19 + _r20 + _r21 + _r22 + _r23 + _r24 + _r25.substring(0, _r25.length - 2);


    // ---------------- 通用首部高亮 ----------------
    $(General_Col1).mouseover(function (){
        $(General_RowAll).css("background-color","#CBCFFF").css("color","#000000");
        $(General_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c71.substring(0, _c71.length - 2)).css("border-bottom-color","#A0A0A0");
    });
    $(General_Col1).mouseleave(function (){
        $(General_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(General_Col1).css("border-bottom-color","#5A5D6F").css("color","#FFFF00");
        $(_c71.substring(0, _c71.length - 2)).css("border-bottom-color","#A0A0A0");
    });

    $(General_RowAll).mouseover(function (){
        $(this).parent(".row").children(":not(:first-child)").css("background-color","#CBCFFF").css("color","#000000");
        $(General_Col1).css("background-color","#CBCFFF").css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c71.substring(0, _c71.length - 2)).css("border-bottom-color","#A0A0A0");
    });
    $(General_RowAll).mouseleave(function (){
        $(General_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(General_Col1).css("border-bottom-color","#5A5D6F").css("color","#FFFF00");
        $(_c71.substring(0, _c71.length - 2)).css("border-bottom-color","#A0A0A0");
    });

    // ---------------- 请求首部高亮 ----------------
    $(Request_Col1).mouseover(function (){
        $(Request_RowAll).css("background-color","#CBCFFF").css("color","#000000");
        $(Request_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c151.substring(0, _c151.length - 2)).css("border-bottom-color","#A0A0A0");
    });
    $(Request_Col1).mouseleave(function (){
        $(Request_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Request_Col1).css("border-bottom-color","#5A5D6F").css("color","#FFFF00");
        $(_c151.substring(0, _c151.length - 2)).css("border-bottom-color","#A0A0A0");
    });

    $(Request_RowAll).mouseover(function (){
        $(this).parent(".row").children(":not(:first-child)").css("background-color","#CBCFFF").css("color","#000000");
        $(Request_Col1).css("background-color","#CBCFFF").css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c151.substring(0, _c151.length - 2)).css("border-bottom-color","#A0A0A0");
    });
    $(Request_RowAll).mouseleave(function (){
        $(Request_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Request_Col1).css("border-bottom-color","#5A5D6F").css("color","#FFFF00");
        $(_c151.substring(0, _c151.length - 2)).css("border-bottom-color","#A0A0A0");
    });

    // ---------------- 响应首部高亮 ----------------
    $(Response_Col1).mouseover(function (){
        $(Response_RowAll).css("background-color","#CBCFFF").css("color","#000000");
        $(Response_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c181.substring(0, _c181.length - 2)).css("border-bottom-color","#A0A0A0");
    });
    $(Response_Col1).mouseleave(function (){
        $(Response_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Response_Col1).css("border-bottom-color","#5A5D6F").css("color","#FFFF00");
        $(_c181.substring(0, _c181.length - 2)).css("border-bottom-color","#A0A0A0");
    });

    $(Response_RowAll).mouseover(function (){
        $(this).parent(".row").children(":not(:first-child)").css("background-color","#CBCFFF").css("color","#000000");
        $(Response_Col1).css("background-color","#CBCFFF").css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c181.substring(0, _c181.length - 2)).css("border-bottom-color","#A0A0A0");
    });
    $(Response_RowAll).mouseleave(function (){
        $(Response_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Response_Col1).css("border-bottom-color","#5A5D6F").css("color","#FFFF00");
        $(_c181.substring(0, _c181.length - 2)).css("border-bottom-color","#A0A0A0");
    });

    // ---------------- 实体首部高亮 ----------------
    $(Entity_Col1).mouseover(function (){
        $(Entity_RowAll).css("background-color","#CBCFFF").css("color","#000000");
        $(Entity_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c181.substring(0, _c181.length - 2)).css("border-bottom-color","#A0A0A0");
    });
    $(Entity_Col1).mouseleave(function (){
        $(Entity_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Entity_Col1).css("border-bottom-color","#5A5D6F").css("color","#FFFF00");
        $(_c181.substring(0, _c181.length - 2)).css("border-bottom-color","#A0A0A0");
    });

    $(Entity_RowAll).mouseover(function (){
        $(this).parent(".row").children(":not(:first-child)").css("background-color","#CBCFFF").css("color","#000000");
        $(Entity_Col1).css("background-color","#CBCFFF").css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c181.substring(0, _c181.length - 2)).css("border-bottom-color","#A0A0A0");
    });
    $(Entity_RowAll).mouseleave(function (){
        $(Entity_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Entity_Col1).css("border-bottom-color","#5A5D6F").css("color","#FFFF00");
        $(_c181.substring(0, _c181.length - 2)).css("border-bottom-color","#A0A0A0");
    });



});
