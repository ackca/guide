const icmpv4 = {
	"i1": "ICMP 协议简介",
	"i2": "ICMP 协议结构",
	"i5": "ICMPv4 报文类型",
	"i3": {
		"回显请求/响应 报文（ping）": {
			"i3-1": "回显请求/响应 报文结构",
			"i3-2": {
				"回显请求/响应 报文实例": {
					"i3-2-1": "ping请求报文（echo）",
					"i3-2-2": "ping响应报文（echo-reply）",
					"i3-2-3": "多次ping，ID与SN关系",
				}
			},
		}
	},
	"i4": {
		"差错报文": {
			"i4-1": "差错报文说明",
			"i4-2": "多数差错报文结构",
			"i4-3": "端口不可达（type 3，code 3）",
			"i4-4": "需要分片但是 DF 置位了<br />　　（type 3，code 4）",
			"i4-5": "网络重定向（type 5，code 0）",
		}
	},
};

const tcp = {
	"i1": "TCP 首部字段说明",
	"i2": {
		"TCP 选项": {
			"i2-1": "常见TCP选项",
			"i2-2": "EOL（kind 0）",
			"i2-3": "NOP（kind 1）",
			"i2-4": "MSS（kind 2）",
			"i2-5": "Window Scale Factor（kind 3）",
			"i2-6": "SACK Pemitted（kind 4）",
			"i2-7": "SACK（kind 5）",
			"i2-8": "md5 signature（kind 19）",
		}
	},
	"i3": {
		"TCP连接的建立与终止": {
			"i3-1": "面向连接的协议",
			"i3-2": "正常情况下的连接建立与终止",
			"i3-3": "2MSL等待时间",
			"i3-4": "TCP一般由客户端主动关闭连接",
			"i3-5": "同时开启连接",
			"i3-6": "同时关闭连接",
			"i3-7": "TCP状态迁移图",
		}
	},
	"i4": "TCP伪首部",
};

const udp = {
	"i1": "UDP 首部字段说明",
	"i2": "UDP 实例",
	"i3": "UDP 应用源目端口关系",
	"i4": "UDP 伪首部",
};

const icmpv6 = {
	"i1": "ICMP 协议简介",
	"i2": "ICMP 协议结构",
	"i8": "ICMPv6 报文类型",
	"i5": {
		"ICMPv6 选项": {
			"i5-1": "ICMPv6 选项结构",
			"i5-2": "类型1/2：源/目标 链路层地址",
			"i5-3": "类型3：前缀信息",
		}
	},
	"i3": "回显请求/响应 报文（ping）",
	"i4": {
		"IPv6邻居发现机制（NS NA）": {
			"i4-1": "IPv6邻居发现原理",
			"i4-2": {
				"ICMPv6 NS 报文": {
					"i4-2-1": "ICMPv6 NS 报文结构",
					"i4-2-2": "ICMPv6 NS 报文实例",
				}
			},
			"i4-3": {
				"ICMPv6 NA 报文": {
					"i4-3-1": "ICMPv6 NA 报文结构",
					"i4-3-2": "ICMPv6 NA 报文实例",
				}
			},
			"i4-4": "检测地址冲突",
		}
	},
	"i6": {
		"无状态自动配置机制（RS RA）": {
			"i6-1": "IPv6地址自动配置原理",
			"i6-2": {
				"ICMPv6 RS 报文": {
					"i6-2-1": "ICMPv6 RS 报文结构",
					"i6-2-2": "ICMPv6 RS 报文实例",
				}
			},
			"i6-3": {
				"ICMPv6 RA 报文": {
					"i6-3-1": "ICMPv6 RA 报文结构",
					"i6-3-2": "ICMPv6 RA 报文实例",
				}
			},
		}
	},
	"i7": {
		"ICMPv6差错报文": {
			"i7-1": "差错报文说明",
		}
	}
};