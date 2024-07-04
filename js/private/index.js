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
	["Mobility Protocol", 2, 1, "16666", "", ""],
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
var index_tcp = 0;
var index_udp = 0;

function createProtocol34(protocol_list, protocol_l) {
	var i = 0;  // 用户颜色数组
	var j = 1;  // 用于行ID
	var k = 0;  // 用于列
	var htmlText = "<div class='row' id='" + protocol_l + "r" + j + "'>";
	for (var index in protocol_list) {
		if (k + protocol_list[index][1] > 12) {
			j++
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
			} else {
				htmlText = htmlText + "<a href='" + protocol_list[index][5] + "' >" + protocol_list[index][0] + '：' + protocol_list[index][3] + "</a>";
			}

			htmlText = htmlText + "</div>";
		} else {
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
	var i = 0;  // 用户颜色数组
	var j = 1;  // 用于行ID
	var k = 0;  // 用于列
	var htmlText = "<div class='row' id='" + protocol_l + "r" + j + "'>";
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
		} else {
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
			} else {
				htmlText = htmlText + "</div><br />";
				j++;
				htmlText = htmlText + "<div class='row' id='" + protocol_l + "r" + j + "'>";
				htmlText = createProtocol7u(htmlText, udp_list, 0, protocol_l);
			}
		} else {
			break;
		}
	}

	return htmlText = htmlText + "</div><br />";
}

function createProtocol7u(htmlText, udp_list, offset, protocol_l) {
	var i = 0;  // 用户颜色数组
	var j = 1;  // 用于行ID
	var k = 0;  // 用于列
	for (var l = 0; index_udp < udp_list.length; index_udp++) {
		if (k + udp_list[index_udp][1] > 6) {
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

			if (udp_list[index_udp][0].indexOf("MACSec") >= 0) {
				htmlText = htmlText + " macsec";
			}
			htmlText = htmlText + "'>";

			if (udp_list[index_udp][5] == "") {
				htmlText = htmlText + udp_list[index_udp][0] + "：" + udp_list[index_udp][3];
			} else {
				htmlText = htmlText + "<a href='" + udp_list[index_udp][5] + "' >" + udp_list[index_udp][0] + "：" + udp_list[index_udp][3] + "</a>";
			}

			htmlText = htmlText + "</div>";
		} else {
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
	var row_id = [];
	var row_innerHTML = [];

	for (var i = 1; ; i++) {
		var element = document.getElementById(protocol_l + "r" + i);
		if (element) {
			row_id.push(protocol_l + "r" + i);
			row_innerHTML.push(element.innerHTML);
		} else {
			break;
		}
	}

	for (var i = 0; i < row_id.length; i++) {
		document.getElementById(row_id[i]).innerHTML = row_innerHTML[row_innerHTML.length - i - 1];
	}
}


$(document).ready(function () {
	var ll = `
		<div class="row">
			<div class="col-lg-12" style="border-bottom: dashed 4px #829BA5"></div>
		</div><br />
	`;
	var ll74 = `
		<div class="row">
			<div id="ll74" class="col-lg-12" style="border-bottom: dashed 4px #829BA5"></div>
		</div><br />
	`;
	var htmlText = "";

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

	var jt_up_top = $("#appr1").offset().top - 10;
	$("#jt_up").offset({top: jt_up_top});

	var jt_down_top = $("#ll74").offset().top - 30;
	$("#jt_down").offset({top: jt_down_top});

	$("#jg").offset({top: (jt_up_top + 24)});
	$("#jg").css("height", jt_down_top - jt_up_top - 24 + "px");
});

