const arp = {
	"i1": "ARP 首部字段说明",
	"i2": {
		"ARP实例": {
			"i2-1": "ARP请求&响应",
			"i2-2": "免费ARP",
		}
	},
	"i3": "各类ARP报文结构对应关系",
};

const ipv4 = {
	"i1": "IPv4 首部字段说明",
	"i2": "常规IPv4报文实例",
	"i3": {
		"IPv4 分片": {
			"i3-1": "需要分片但不允许分片",
			"i3-2": {
				"分片过程": {
					"i3-2-1": "原始报文",
					"i3-2-2": "第一次分片",
					"i3-2-3": "第二次分片",
				}
			},
		}
	},
	"i4": {
		"IPv4选项": {
			"i4-1": "IPv4选项结构",
			"i4-2": "路径记录选项",
			"i4-3": {
				"源站路由选项": {
					"i4-3-1": "选项规则说明",
					"i4-3-2": "严格源站路由",
					"i4-3-3": "宽松源站路由",
				}
			},
		}
	}
};

const ipv6 = {
	"i1": "IPv6 首部字段说明",
	"i2": "常规IPv6报文实例实例",
	"i3": {
		"IPv6 分片": {
			"i3-5": "IPv6 分片头部",
			"i3-1": "IPv6 分片只在发送设备分片",
			"i3-2": "起始报文",
			"i3-3": "第一次分片",
			"i3-4": "第二次分片",
		}
	},
	"i4": "IPv6特定用途地址（前缀）",
	"i5": {
		"IPv6特定地址的构成方式": {
			"i5-1": "IPv6组播mac地址",
			"i5-2": "请求节点组播地址",
			"i5-3": "EUI-64算法",
			"i5-4": "链路本地地址",
			"i5-5": "无状态自动配置地址",
		}
	},
	"i6": "IPv6伪首部",
};