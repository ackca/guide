tree_tftp = {
	"i1":{
		"TFTP 协议简介": {
			"i1-1":"什么是TFTP",
			"i1-2":"TFTP 报文交互图解",
			"i1-3":"TFTP 报文交互实例",
		}
	},
	"i2": {
		"TFTP 报文详解":{
			"i2-5":"TFTP 报文概述",
			"i2-1":{
				"RRQ / WRQ 报文":{
					"i2-1-1":"RRQ / WRQ 报文结构",
					"i2-1-2":"RRQ / WRQ 报文实例",
				}
			},

			"i2-2":{
				"DATA 报文":{
					"i2-2-1":"DATA 报文结构",
					"i2-2-2":"DATA 报文实例",
				}
			},
			"i2-3":{
				"ACK 报文":{
					"i2-3-1":"ACK 报文结构",
					"i2-3-2":"ACK 报文实例",
				}
			},
			"i2-4":{
				"ERROR 报文":{
					"i2-4-1":"ERROR 报文结构",
					"i2-4-2":"ERROR 报文实例",
				}
			},
		}
	},
};

tree_dns = {
	"i1":{
		"DNS相关介绍":{
			"i1-1":"简单DNS解析过程",
			"i1-2":"递归查询与迭代查询",
			"i1-3":"DNS的上层协议问题",
		}
	},
	"i2":{
		"DNS报文格式":{
			"i2-1":"DNS报文格式总览",
			"i2-2":"报文中域名表示方式",
			"i2-3":"查询 / 响应 报文中类型取值含义",
			"i2-4":"DNS报文头部字段说明",
			"i2-5":"DNS报文查询字段说明",
			"i2-6":"DNS报文回答、授权、<br />　　　额外信息字段说明",
		}
	},

	"i4":"简单解析实例",

	"i5":{
		"一个复杂的DNS解析实例":{
			"i5-1":"DNS解析过程_图示",
			"i5-2":"DNS解析过程_说明",
		}
	},


}

tree_ntp = {
	"i1":{
		"NTP 协议简介":{
			"i1-1":"NTP时钟层级",
			"i1-2":"NTP同步原理",
		}
	},
	"i2":"NTP报文结构",
	"i3":"NTP报文实例",
	"i4":"SNTP",
}

tree_syslog = {
	"i1":"syslog 报文结构",
	"i2":"Facility取值对应关系",
	"i3":"Severity取值对应关系",
	"i4":"syslog 报文实例",
}

tree_dhcpv4 = {
	"i1":"简单的DHCP报文交互过程",
	"i2":"DHCP端状态迁移图",
	"i3":"DHCP协议结构",
	"i4":{
		"DHCP选项":{
			"i4-1":"DHCP选项结构",
			"i4-2":{
				"重要选项介绍":{
					"i4-2-1":"Message Type(53)",
					"i4-2-2":"Parameter Request List(55)",
				}
			},
			"i4-3":"其它选项介绍",
		}
	},
	"i5":"DHCP实例",
}

tree_vxlan = {
	"i1":"VXLAN 报文结构",
	"i2":"VXLAN 封装方式",
	"i3":"VXLAN 实例",
}

tree_ftp = {
	"i1":"动态应用FTP",
	"i2":{
		"FTP Passive（被动）模式详解":{
			"i2-1":"综述",
			"i2-2":"基于IPv4",
			"i2-3":"基于IPv6",
		}
	},
	"i3":{
		"FTP Active（主动）模式详解":{
			"i3-1":"综述",
			"i3-2":"基于IPv4",
			"i3-3":"基于IPv6",
		}
	},
	"i4":"FTP与NAT",
	"i5":"SFTP与FTPS",
}

tree_dhcpv6 = {
	"i1":"DHCPv6应用原理",
	"i2":{
		"简单的DHCPv6报文交互过程":{
			"i2-1":"SLAAC",
			"i2-2":"Stateless",
			"i2-3":"Stateful DHCP",
			"i2-4":"Rapid Commit",
		}
	},
	"i3":"DHCPv6报文与DHCPv4对比",
}