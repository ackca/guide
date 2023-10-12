tftp = {
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

dns = {
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

ntp = {
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

syslog = {
	"i1":"syslog 报文结构",
	"i2":"Facility取值对应关系",
	"i3":"Severity取值对应关系",
	"i4":"syslog 报文实例",
}

dhcpv4 = {
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

vxlan = {
	"i1":"VXLAN 报文结构",
	"i2":"VXLAN 封装方式",
	"i3":"VXLAN 实例",
}

ftp = {
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

dhcpv6 = {
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

http = {
	"i1":{
		"HTTP 报文结构":{
			"i1-1":"报文结构",
			"i1-2":"首部结构",
			"i1-3":"请求首部结构",
			"i1-4":"响应首部结构",
		}
	},

	"i3":"HTTP 方法（method）",

	"i4":{
		"HTTP 状态码":{
			"i4-1":"状态码类型",
			"i4-6":"状态码总览",
			"i4-2":{
				"2XX：成功":{
					"i4-2-1":"200：OK",
					"i4-2-2":"201：Created",
					"i4-2-3":"204：No Content",
					"i4-2-4":"206：Partial Content",
				}
			},
			"i4-3":{
				"3XX：重定向":{
					"i4-3-1":"301：Moved Permanently",
					"i4-3-2":"302：Moved Temporarily",
					"i4-3-3":"303：See Other",
					"i4-3-4":"304：Not Modified",
					"i4-3-5":"307：Temporary Redirect",
				}
			},
			"i4-4":{
				"4XX：客户端错误":{
					"i4-4-1":"400：Bad Request",
					"i4-4-2":"401：Uncuthorized",
					"i4-4-3":"403：Forbidden",
					"i4-4-4":"404：Not Found",
					"i4-4-5":"405：Method Not Allowed",
					"i4-4-6":"413：Request Fntity Too Large",
				}
			},
			"i4-5":{
				"5XX：服务器错误":{
					"i4-5-1":"500：Internal Server Error",
					"i4-5-2":"503：Service Unavailable",
				}
			},
		}
	},

	"i5":{
		"HTTP 通用首部":{
			"i5-1":"通用首部总览",
			"i5-2":"Cache-Control",
			"i5-3":"",
			"i5-4":"",
			"i5-5":"",
			"i5-6":"",
			"i5-7":"",
			"i5-8":"",
		}
	},

	"i8":{
		"HTTP 认证":{
			"i8-1":"基本认证（Basic auth）",
			"i8-2":"散列认证（Digest auth）",
			"i8-3":"表单认证",
		}
	},

	"i9":{
		"HTTP 版本与历史":{
			"i9-1":"HTTP/1.0",
			"i9-2":"HTTP/1.1",
			"i9-3":{
				"HTTP/2":{
					"i9-3-1":"核心技术：二进制帧",
					"i9-3-2":"优势1：一次TCP连接<br />　　　　　　&nbsp;多次HTTP请求",
					"i9-3-3":"优势2：首部压缩",
					"i9-3-4":"优势3：服务推送",
					"i9-3-5":"优势4：必须TLS加密",
					"i9-3-6":"优势5：可以在TLS阶段<br />　　　　　　&nbsp;进行HTTP协商",
					"i9-3-7":"不足",
				}
			},
			"i9-4":"HTTP/3",
		}
	}

}