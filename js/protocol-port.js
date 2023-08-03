var l34_color = ['c1', 'c4', 'c6', 'c3', 'c5', 'c2'];
var l7_color = ['c1', 'c2', 'c3'];
var index_udp = 0;

function createProtocol34(protocol_list, protocol_l) {
    var i = 0;  // 用户颜色数组
    var j = 1;  // 用于行ID
    var k = 0;  // 用于列
    var htmlText = "<div class='row' id='" + protocol_l + "r" + j +"'>";
    for (index in protocol_list) {
        if(k + protocol_list[index][1] > 12) {
            j++
            htmlText = htmlText + "</div><br />";
            htmlText = htmlText + "<div class='row' id='" + protocol_l + "r" + j +"'>";
            i = 0;
            k = 0;
        }
        htmlText = htmlText + "<div class='col-lg-" + protocol_list[index][1] + "'>";
        if (protocol_list[index][2] == 1) {
            htmlText = htmlText + "<div class='" + protocol_l + " " + l34_color[i % 6];

            if(protocol_list[index][0].indexOf('MACSec') >= 0) {
                htmlText = htmlText + " macsec";
            }
            htmlText = htmlText + "'>";

            if(protocol_list[index][5] == '') {
                htmlText = htmlText + protocol_list[index][0] + '：' + protocol_list[index][3];
            }
            else {
                htmlText = htmlText + "<a href='" + protocol_list[index][5] + "' >" + protocol_list[index][0] + '：' + protocol_list[index][3] + "</a>";
            }

            htmlText = htmlText + "</div>";
        }
        else {
            htmlText = htmlText + "<div class='" + protocol_l + " " + l34_color[i % 6] + "  two-row-" + protocol_l + "'>";

            if(protocol_list[index][5] != '') {
                htmlText = htmlText + "<a href='" + protocol_list[index][5] + "'>";
            }

            htmlText = htmlText + "<table border='0' cellspacing='0' cellpadding='0'>";
            htmlText = htmlText + "<tr>";
            htmlText = htmlText + "<td style='text-align: right'>" + protocol_list[index][0] + '&nbsp;&nbsp;' + "</td>";
            htmlText = htmlText + "<td>" + protocol_list[index][3].split("：")[0] + '：' + "</td>";
            htmlText = htmlText + "<td>" + protocol_list[index][3].split("：")[1] + "</td>";
            htmlText = htmlText + "</tr>";
            htmlText = htmlText + "<tr>";
            htmlText = htmlText + "<td></td>";
            htmlText = htmlText + "<td>" + protocol_list[index][4].split("：")[0] + '：' + "</td>";
            htmlText = htmlText + "<td>" + protocol_list[index][4].split("：")[1] + "</td>";
            htmlText = htmlText + "</tr>";
            htmlText = htmlText + "</table>";

            if(protocol_list[index][5] != '') {
                htmlText = htmlText + "</a>";
            }

            htmlText = htmlText + "</div>";
        }
        htmlText = htmlText + "</div>";

        i++;
        k = k + protocol_list[index][1];
    }
    htmlText = htmlText + "</div><br />";
    document.writeln(htmlText);
}

function createProtocol7(tcp_list, udp_list, protocol_l) {
    var i = 0;  // 用户颜色数组
    var j = 1;  // 用于行ID
    var k = 0;  // 用于列
    var htmlText = "<div class='row' id='" + protocol_l + "r" + j +"'>";
    index_tcp = 0;
    index_udp = 0
    for (; index_tcp < tcp_list.length; index_tcp++) {
        if(k + tcp_list[index_tcp][1] > 6) {
            j++;
            htmlText = createProtocol7u(htmlText, udp_list, k, protocol_l) + "</div><br />";
            htmlText = htmlText + "<div class='row' id='" + protocol_l + "r" + j +"'>";
            i = 0;
            k = 0;
        }
        htmlText = htmlText + "<div class='col-lg-" + tcp_list[index_tcp][1] + "'>";
        if (tcp_list[index_tcp][2] == 1) {
            htmlText = htmlText + "<div class='tcp " + l7_color[i % 3];

            if(tcp_list[index_tcp][0].indexOf('MACSec') >= 0) {
                htmlText = htmlText + " macsec";
            }
            htmlText = htmlText + "'>";

            if(tcp_list[index_tcp][5] == '') {
                htmlText = htmlText + tcp_list[index_tcp][0] + '：' + tcp_list[index_tcp][3];
            }
            else {
                htmlText = htmlText + "<a href='" + tcp_list[index_tcp][5] + "' >" + tcp_list[index_tcp][0] + '：' + tcp_list[index_tcp][3] + "</a>";
            }

            htmlText = htmlText + "</div>";
        }
        else {
            htmlText = htmlText + "<div class='tcp " + l7_color[i % 3] + "  two-row-" + protocol_l + "'>";

            if(tcp_list[index_tcp][5] != '') {
                htmlText = htmlText + "<a href='" + tcp_list[index_tcp][5] + "'>";
            }

            htmlText = htmlText + "<table border='0' cellspacing='0' cellpadding='0'>";
            htmlText = htmlText + "<tr>";
            htmlText = htmlText + "<td style='text-align: right'>" + tcp_list[index_tcp][0] + '&nbsp;&nbsp;' + "</td>";
            htmlText = htmlText + "<td>" + tcp_list[index_tcp][3].split("：")[0] + '：' + "</td>";
            htmlText = htmlText + "<td>" + tcp_list[index_tcp][3].split("：")[1] + "</td>";
            htmlText = htmlText + "</tr>";
            htmlText = htmlText + "<tr>";
            htmlText = htmlText + "<td></td>";
            htmlText = htmlText + "<td>" + tcp_list[index_tcp][4].split("：")[0] + '：' + "</td>";
            htmlText = htmlText + "<td>" + tcp_list[index_tcp][4].split("：")[1] + "</td>";
            htmlText = htmlText + "</tr>";
            htmlText = htmlText + "</table>";

            if(tcp_list[index_tcp][5] != '') {
                htmlText = htmlText + "</a>";
            }

            htmlText = htmlText + "</div>";
        }
        htmlText = htmlText + "</div>";

        i++;
        k = k + tcp_list[index_tcp][1];
    }

    while(true) {
        if(index_tcp >= tcp_list.length && index_udp < udp_list.length) {
            if(k > 0) {
                htmlText = createProtocol7u(htmlText, udp_list, k, protocol_l);
                k = 0;
            }
            else {
                htmlText = htmlText + "</div><br />";
                j++;
                htmlText = htmlText + "<div class='row' id='" + protocol_l + "r" + j +"'>";
                htmlText = createProtocol7u(htmlText, udp_list, 0, protocol_l);
            }
        }
        else {
            break;
        }
    }

    htmlText = htmlText + "</div><br />";
    document.writeln(htmlText);
}

function createProtocol7u(htmlText, udp_list, offset, protocol_l) {
    var i = 0;  // 用户颜色数组
    var j = 1;  // 用于行ID
    var k = 0;  // 用于列
    for (l = 0; index_udp < udp_list.length; index_udp++) {
        if(k + udp_list[index_udp][1] > 6) {
            j++
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

            if(udp_list[index_udp][0].indexOf('MACSec') >= 0) {
                htmlText = htmlText + " macsec";
            }
            htmlText = htmlText + "'>";

            if(udp_list[index_udp][5] == '') {
                htmlText = htmlText + udp_list[index_udp][0] + '：' + udp_list[index_udp][3];
            }
            else {
                htmlText = htmlText + "<a href='" + udp_list[index_udp][5] + "' >" + udp_list[index_udp][0] + '：' + udp_list[index_udp][3] + "</a>";
            }

            htmlText = htmlText + "</div>";
        }
        else {
            htmlText = htmlText + "<div class='udp " + l7_color[i % 3] + "  two-row-" + protocol_l + "'>";

            if(udp_list[index_udp][5] != '') {
                htmlText = htmlText + "<a href='" + udp_list[index_udp][5] + "'>";
            }

            htmlText = htmlText + "<table border='0' cellspacing='0' cellpadding='0'>";
            htmlText = htmlText + "<tr>";
            htmlText = htmlText + "<td style='text-align: right'>" + udp_list[index_udp][0] + '&nbsp;&nbsp;' + "</td>";
            htmlText = htmlText + "<td>" + udp_list[index_udp][3].split("：")[0] + '：' + "</td>";
            htmlText = htmlText + "<td>" + udp_list[index_udp][3].split("：")[1] + "</td>";
            htmlText = htmlText + "</tr>";
            htmlText = htmlText + "<tr>";
            htmlText = htmlText + "<td></td>";
            htmlText = htmlText + "<td>" + udp_list[index_udp][4].split("：")[0] + '：' + "</td>";
            htmlText = htmlText + "<td>" + udp_list[index_udp][4].split("：")[1] + "</td>";
            htmlText = htmlText + "</tr>";
            htmlText = htmlText + "</table>";

            if(udp_list[index_udp][5] != '') {
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
    var row_id = [];
    var row_innerHTML = [];

    for (i = 1; ; i++) {
        var element = document.getElementById(protocol_l + "r" + i);
        if(element) {
            row_id.push(protocol_l + "r" + i);
            row_innerHTML.push(element.innerHTML);
        }
        else {
            break;
        }
    }

    for(i = 0; i < row_id.length; i++) {
        document.getElementById(row_id[i]).innerHTML = row_innerHTML[row_innerHTML.length - i - 1];
    }
}