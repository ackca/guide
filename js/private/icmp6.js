$(document).ready(function () {
    // ------------------------- Type 1 选择器 开始  -----------------------------------
    var _c21 = "#tICMPv6Type .row:nth-child(2) .cell:nth-child(1), ";
    var _c22 = "#tICMPv6Type .row:nth-child(2) .cell:nth-child(2)";
    // var _c2122 = "#tICMPv6Type .row:nth-child(2) .cell,";
    var _c2122 = _c21 + _c22;//"#tICMPv6Type .row:nth-child(2) .cell:nth-child(-n+2), ";
    var _r2 = "#tICMPv6Type .row:nth-child(2) .cell, ";

    var _c31 = "#tICMPv6Type .row:nth-child(3) .cell:nth-child(1), ";
    var _c32 = "#tICMPv6Type .row:nth-child(3) .cell:nth-child(2)";
    var _c3132 = _c31 + _c32;"#tICMPv6Type .row:nth-child(3) .cell:nth-child(-n+2), ";
    var _r3 = "#tICMPv6Type .row:nth-child(3) .cell, ";

    var _c41 = "#tICMPv6Type .row:nth-child(4) .cell:nth-child(1), ";
    var _c42 = "#tICMPv6Type .row:nth-child(4) .cell:nth-child(2)";
    var _c4142 = _c41 + _c42;"#tICMPv6Type .row:nth-child(4) .cell:nth-child(-n+2), ";
    var _r4 = "#tICMPv6Type .row:nth-child(4) .cell, ";

    var _c51 = "#tICMPv6Type .row:nth-child(5) .cell:nth-child(1), ";
    var _c52 = "#tICMPv6Type .row:nth-child(5) .cell:nth-child(2)";
    var _c5152 = _c51 + _c52;"#tICMPv6Type .row:nth-child(5) .cell:nth-child(-n+2), ";
    var _r5 = "#tICMPv6Type .row:nth-child(5) .cell, ";

    var _c61 = "#tICMPv6Type .row:nth-child(6) .cell:nth-child(1), ";
    var _c62 = "#tICMPv6Type .row:nth-child(6) .cell:nth-child(2)";
    var _c6162 = "#tICMPv6Type .row:nth-child(6) .cell:nth-child(-n+2), ";
    var _r6 = "#tICMPv6Type .row:nth-child(6) .cell, ";

    var _c71 = "#tICMPv6Type .row:nth-child(7) .cell:nth-child(1), ";
    var _c72 = "#tICMPv6Type .row:nth-child(7) .cell:nth-child(2)";
    var _c7172 = "#tICMPv6Type .row:nth-child(7) .cell:nth-child(-n+2), ";
    var _r7 = "#tICMPv6Type .row:nth-child(7) .cell, ";

    var _c81 = "#tICMPv6Type .row:nth-child(8) .cell:nth-child(1), ";
    var _c82 = "#tICMPv6Type .row:nth-child(8) .cell:nth-child(2)";
    var _c8182 = "#tICMPv6Type .row:nth-child(8) .cell:nth-child(-n+2), ";
    var _r8 = "#tICMPv6Type .row:nth-child(8) .cell, ";

    var _c91 = "#tICMPv6Type .row:nth-child(9) .cell:nth-child(1), ";
    var _c92 = "#tICMPv6Type .row:nth-child(9) .cell:nth-child(2)";
    var _c9192 = "#tICMPv6Type .row:nth-child(9) .cell:nth-child(-n+2), ";
    var _r9 = "#tICMPv6Type .row:nth-child(9) .cell, ";

    var Type1_Col1 = _c21 + _c31 + _c41 + _c51 + _c61 + _c71 + _c81 + _c91.substring(0, _c91.length - 2);
    var Type1_Col12 = _c2122 + _c3132 + _c4142 + _c5152 + _c6162 + _c7172 + _c8182 + _c9192.substring(0, _c9192.length - 2);
    var Type1_RowAll = _r2 + _r3 + _r4 + _r5 + _r6 + _r7 + _r8 + _r9.substring(0, _r9.length - 2);

    // ------------------------- Type 1 选择器 结束 -----------------------------------
    // ------------------------- Type 3 选择器 开始 -----------------------------------
    var _c111 = "#tICMPv6Type .row:nth-child(11) .cell:nth-child(1), ";
    var _c112 = "#tICMPv6Type .row:nth-child(11) .cell:nth-child(2)";
    var _c111112 = "#tICMPv6Type .row:nth-child(11) .cell:nth-child(-n+2), ";
    var _r11 = "#tICMPv6Type .row:nth-child(11) .cell, ";

    var _c121 = "#tICMPv6Type .row:nth-child(12) .cell:nth-child(1), ";
    var _c122 = "#tICMPv6Type .row:nth-child(12) .cell:nth-child(2)";
    var _c121122 = "#tICMPv6Type .row:nth-child(12) .cell:nth-child(-n+2), ";
    var _r12 = "#tICMPv6Type .row:nth-child(12) .cell, ";

    var _c131 = "#tICMPv6Type .row:nth-child(13) .cell:nth-child(1), ";
    var _c132 = "#tICMPv6Type .row:nth-child(13) .cell:nth-child(2)";
    var _c131132 = "#tICMPv6Type .row:nth-child(13) .cell:nth-child(-n+2), ";
    var _r13 = "#tICMPv6Type .row:nth-child(13) .cell, ";

    var Type3_Col1 = _c111 + _c121 + _c131.substring(0, _c131.length - 2);
    var Type3_Col12 = _c111112 + _c121122 + _c131132.substring(0, _c131132.length - 2);
    var Type3_RowAll = _r11 + _r12 + _r13.substring(0, _r13.length - 2);

    // ------------------------- Type 3 选择器 结束 -----------------------------------
    // ------------------------- Type 4 选择器 开始 -----------------------------------
    var _c141 = "#tICMPv6Type .row:nth-child(14) .cell:nth-child(1), ";
    var _c142 = "#tICMPv6Type .row:nth-child(14) .cell:nth-child(2)";
    var _c141142 = "#tICMPv6Type .row:nth-child(14) .cell:nth-child(-n+2), ";
    var _r14 = "#tICMPv6Type .row:nth-child(14) .cell, ";

    var _c151 = "#tICMPv6Type .row:nth-child(15) .cell:nth-child(1), ";
    var _c152 = "#tICMPv6Type .row:nth-child(15) .cell:nth-child(2)";
    var _c151152 = "#tICMPv6Type .row:nth-child(15) .cell:nth-child(-n+2), ";
    var _r15 = "#tICMPv6Type .row:nth-child(15) .cell, ";

    var _c161 = "#tICMPv6Type .row:nth-child(16) .cell:nth-child(1), ";
    var _c162 = "#tICMPv6Type .row:nth-child(16) .cell:nth-child(2)";
    var _c161162 = "#tICMPv6Type .row:nth-child(16) .cell:nth-child(-n+2), ";
    var _r16 = "#tICMPv6Type .row:nth-child(16) .cell, ";

    var _c171 = "#tICMPv6Type .row:nth-child(17) .cell:nth-child(1), ";
    var _c172 = "#tICMPv6Type .row:nth-child(17) .cell:nth-child(2)";
    var _c171172 = "#tICMPv6Type .row:nth-child(17) .cell:nth-child(-n+2), ";
    var _r17 = "#tICMPv6Type .row:nth-child(17) .cell, ";

    var Type4_Col1 = _c141 + _c151 + _c161 + _c171.substring(0, _c171.length - 2);
    var Type4_Col12 = _c141142 + _c151152 + _c161162 + _c171172.substring(0, _c171172.length - 2);
    var Type4_RowAll = _r14 + _r15 + _r16 + _r17.substring(0, _r17.length - 2);

    // ------------------------- Type 4 选择器 结束 -----------------------------------

    // ------------------------- Type 1 高亮 开始  -----------------------------------
    // ------------------------- Type 1 第一行 -----------------------------------
    $(Type1_Col1.replace(_c21, _r2)).mouseover(function (){
        $(Type1_RowAll).css("background-color","#CBCFFF").css("color","#000000");
        $(Type1_Col1).css("border-bottom-color","#CBCFFF");
        $(Type1_Col12).css("color","#8000FF");
    });
    $(Type1_Col1.replace(_c21, _r2)).mouseleave(function (){
        $(Type1_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type1_Col1).css("border-bottom-color","#5A5D6F");
        $(_c91.substring(0, _c91.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type1_Col12).css("color","#FFFF00");
    });

    // ------------------------- Type 1 Code 0 -----------------------------------
    $(_r3.substring(0, _r3.length - 2)).mouseover(function (){
        $(_r2 + _r3 + Type1_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type1_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c32).css("color","#8000FF");
    });
    $(_r3.substring(0, _r3.length - 2)).mouseleave(function (){
        $(_r2 + _r3 + Type1_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type1_Col1).css("border-bottom-color","#5A5D6F");
        $(_c91.substring(0, _c91.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type1_Col1).css("color","#FFFF00");
        $(_c32).css("color","#FFFF00");
    });

    // ------------------------- Type 1 Code 1 -----------------------------------
    $(_r4.substring(0, _r4.length - 2)).mouseover(function (){
        $(_r2 + _r4 + Type1_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type1_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c42).css("color","#8000FF");
    });
    $(_r4.substring(0, _r4.length - 2)).mouseleave(function (){
        $(_r2 + _r4 + Type1_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type1_Col1).css("border-bottom-color","#5A5D6F");
        $(_c91.substring(0, _c91.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type1_Col1).css("color","#FFFF00");
        $(_c42).css("color","#FFFF00");
    });

    // ------------------------- Type 1 Code 2 -----------------------------------
    $(_r5.substring(0, _r5.length - 2)).mouseover(function (){
        $(_r2 + _r5 + Type1_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type1_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c52).css("color","#8000FF");
    });
    $(_r5.substring(0, _r5.length - 2)).mouseleave(function (){
        $(_r2 + _r5 + Type1_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type1_Col1).css("border-bottom-color","#5A5D6F");
        $(_c91.substring(0, _c91.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type1_Col1).css("color","#FFFF00");
        $(_c52).css("color","#FFFF00");
    });

    // ------------------------- Type 1 Code 3 -----------------------------------
    $(_r6.substring(0, _r6.length - 2)).mouseover(function (){
        $(_r2 + _r6 + Type1_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type1_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c62).css("color","#8000FF");
    });
    $(_r6.substring(0, _r6.length - 2)).mouseleave(function (){
        $(_r2 + _r6 + Type1_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type1_Col1).css("border-bottom-color","#5A5D6F");
        $(_c91.substring(0, _c91.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type1_Col1).css("color","#FFFF00");
        $(_c62).css("color","#FFFF00");
    });

    // ------------------------- Type 1 Code 4 -----------------------------------
    $(_r7.substring(0, _r7.length - 2)).mouseover(function (){
        $(_r2 + _r7 + Type1_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type1_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c72).css("color","#8000FF");
    });
    $(_r7.substring(0, _r7.length - 2)).mouseleave(function (){
        $(_r2 + _r7 + Type1_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type1_Col1).css("border-bottom-color","#5A5D6F");
        $(_c91.substring(0, _c91.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type1_Col1).css("color","#FFFF00");
        $(_c72).css("color","#FFFF00");
    });

    // ------------------------- Type 1 Code 5 -----------------------------------
    $(_r8.substring(0, _r8.length - 2)).mouseover(function (){
        $(_r2 + _r8 + Type1_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type1_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c82).css("color","#8000FF");
    });
    $(_r8.substring(0, _r8.length - 2)).mouseleave(function (){
        $(_r2 + _r8 + Type1_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type1_Col1).css("border-bottom-color","#5A5D6F");
        $(_c91.substring(0, _c91.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type1_Col1).css("color","#FFFF00");
        $(_c82).css("color","#FFFF00");
    });

    // ------------------------- Type 1 Code 6 -----------------------------------
    $(_r9.substring(0, _r9.length - 2)).mouseover(function (){
        $(_r2 + _r9 + Type1_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type1_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c92).css("color","#8000FF");
    });
    $(_r9.substring(0, _r9.length - 2)).mouseleave(function (){
        $(_r2 + _r9 + Type1_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type1_Col1).css("border-bottom-color","#5A5D6F");
        $(_c91.substring(0, _c91.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type1_Col1).css("color","#FFFF00");
        $(_c92).css("color","#FFFF00");
    });

    // ------------------------- Type 1 高亮 结束  -----------------------------------
    // ------------------------- Type 3 高亮 开始  -----------------------------------
    // ------------------------- Type 3 第一行 -----------------------------------
    $(Type3_Col1.replace(_c111, _r11)).mouseover(function (){
        $(Type3_RowAll).css("background-color","#CBCFFF").css("color","#000000");
        $(Type3_Col1).css("border-bottom-color","#CBCFFF");
        $(Type3_Col12).css("color","#8000FF");
    });
    $(Type3_Col1.replace(_c111, _r11)).mouseleave(function (){
        $(Type3_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type3_Col1).css("border-bottom-color","#5A5D6F");
        $(_c131.substring(0, _c131.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type3_Col12).css("color","#FFFF00");
    });

    // ------------------------- Type 3 Code 0 -----------------------------------
    $(_r12.substring(0, _r12.length - 2)).mouseover(function (){
        $(_r11 + _r12 + Type3_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type3_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c122).css("color","#8000FF");
    });
    $(_r12.substring(0, _r12.length - 2)).mouseleave(function (){
        $(_r11 + _r12 + Type3_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type3_Col1).css("border-bottom-color","#5A5D6F");
        $(_c131.substring(0, _c131.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type3_Col1).css("color","#FFFF00");
        $(_c122).css("color","#FFFF00");
    });

    // ------------------------- Type 3 Code 1 -----------------------------------
    $(_r13.substring(0, _r13.length - 2)).mouseover(function (){
        $(_r11 + _r13 + Type3_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type3_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c132).css("color","#8000FF");
    });
    $(_r13.substring(0, _r13.length - 2)).mouseleave(function (){
        $(_r11 + _r13 + Type3_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type3_Col1).css("border-bottom-color","#5A5D6F");
        $(_c131.substring(0, _c131.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type3_Col1).css("color","#FFFF00");
        $(_c132).css("color","#FFFF00");
    });

    // ------------------------- Type 3 高亮 结束  -----------------------------------
    // ------------------------- Type 4 高亮 开始  -----------------------------------
    // ------------------------- Type 4 第一行 -----------------------------------
    $(Type4_Col1.replace(_c141, _r14)).mouseover(function (){
        $(Type4_RowAll).css("background-color","#CBCFFF").css("color","#000000");
        $(Type4_Col1).css("border-bottom-color","#CBCFFF");
        $(Type4_Col12).css("color","#8000FF");
    });
    $(Type4_Col1.replace(_c141, _r14)).mouseleave(function (){
        $(Type4_RowAll).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type4_Col1).css("border-bottom-color","#5A5D6F");
        $(_c171.substring(0, _c171.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type4_Col12).css("color","#FFFF00");
    });

    // ------------------------- Type 4 Code 0 -----------------------------------
    $(_r15.substring(0, _r15.length - 2)).mouseover(function (){
        $(_r14 + _r15 + Type4_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type4_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c152).css("color","#8000FF");
    });
    $(_r15.substring(0, _r15.length - 2)).mouseleave(function (){
        $(_r14 + _r15 + Type4_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type4_Col1).css("border-bottom-color","#5A5D6F");
        $(_c171.substring(0, _c171.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type4_Col1).css("color","#FFFF00");
        $(_c152).css("color","#FFFF00");
    });

    // ------------------------- Type 4 Code 1 -----------------------------------
    $(_r16.substring(0, _r16.length - 2)).mouseover(function (){
        $(_r14 + _r16 + Type4_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type4_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c162).css("color","#8000FF");
    });
    $(_r16.substring(0, _r16.length - 2)).mouseleave(function (){
        $(_r14 + _r16 + Type4_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type4_Col1).css("border-bottom-color","#5A5D6F");
        $(_c171.substring(0, _c171.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type4_Col1).css("color","#FFFF00");
        $(_c162).css("color","#FFFF00");
    });

    // ------------------------- Type 4 Code 2 -----------------------------------
    $(_r17.substring(0, _r17.length - 2)).mouseover(function (){
        $(_r14 + _r17 + Type4_Col1).css("background-color","#CBCFFF").css("color","#000000");
        $(Type4_Col1).css("border-bottom-color","#CBCFFF").css("color","#8000FF");
        $(_c172).css("color","#8000FF");
    });
    $(_r17.substring(0, _r17.length - 2)).mouseleave(function (){
        $(_r14 + _r17 + Type4_Col1).css("background-color","#5A5D6F").css("color","#FFFFFF");
        $(Type4_Col1).css("border-bottom-color","#5A5D6F");
        $(_c171.substring(0, _c171.length - 2)).css("border-bottom-color","#A0A0A0");
        $(Type4_Col1).css("color","#FFFF00");
        $(_c172).css("color","#FFFF00");
    });
});