basic = {
	"i1": {
		"基本配置": {
			"i1-1": "模式切换",
			"i1-2": "查看/保存配置",
			"i1-3": "查看接口配置",
			"i1-4": "时间日期时区配置",
			"i1-5": "其它基本设置"
		}
	},
	"i9": {
		"ICMPv6 RA相关配置": {
			"i9-1": "SLAAC相关配置",
			"i9-2": "DHCPv6状态相关配置",
		}
	},

	"i2": {
		"动态主机配置协议（DHCP）": {
			"i2-1": "基本配置",
			"i2-2": "地址保留",
			"i2-3": "DHCP中继",
			"i2-4": "DHCP Snooping",
			"i2-5": "查看地址分配情况",
			"i2-6": "接口获得DHCP分配的地址",
		}
	},
	"i10": {
		"动态主机配置协议（DHCPv6）": {
			"i10-1": "配置DHCP地址池",
			// "i10-2": "地址保留",
			"i10-3": "DHCP中继",
			// "i10-4": "DHCP Snooping",
			"i10-5": "接口获得DHCP的地址",
		}
	},
	"i3": {
		"网管协议": {
			"i3-1": "CLI登录管理",
			"i3-2": "Telnet",
			"i3-3": "SSH",
			"i3-4": {
				"SNMP": {
					"i3-4-1": "通用配置",
					"i3-4-2": "SNMP v1/v2c 配置",
					"i3-4-3": "SNMP v3 配置"
				}
			}
		}
	},
	"i4": "思科发现协议（CDP）",
	"i5": {
		"网络时间协议（NTP）": {
			"i5-1": "NTP服务器端配置",
			"i5-2": "NTP客户端配置",
			"i5-3": "查看NTP状态"
		}
	},
	"i6": "日志管理",
	"i7": {
		"会话管理": {
			"i7-1": "本方连接外部会话",
			"i7-2": "外部进入本方会话"
		}
	},
	"i8": "钥匙链（key chain）",

	"i11": {
		"申请数字证书": {
			"i11-1":"创建trustpoint（证书申请）",
			"i11-2":{
				"管理证书":{
					"i11-2-1":"获取根证书",
					"i11-2-2":"申请个人证书",
					"i11-2-3":"导入个人证书（离线申请）",
					"i11-2-4":"立即获取吊销列表",
				}
			},
			"i11-3":"相关查看命令",
		}
	},

	"i12": {
		"配置为证书服务器（SCEP服务）": {
			"i12-1": "客户端申请证书的URL",
			"i12-2": "创建证书服务器",
			"i12-3": {
				"管理证书":{
					"i12-3-1": "颁发证书",
					"i12-3-2": "离线申请证书时的导入导出",
					"i12-3-3": "吊销证书",
				}
			},
			"i12-4": "其它查看命令",
		}
	},
};

dynamic_routing = {
	"i4": {
		"路由选择信息协议（RIP）": {
			"i4-1": "基本配置",
			"i4-2": "边界路由器通告默认路由",
			"i4-3": "路径控制",
			"i4-4": "认证"
		}
	},

	"i5": {
		"增强内部网关路由协议（EIGRP）": {
			"i5-1": "基本配置",
			"i5-2": "边界路由器通告默认路由",
			"i5-3": "末节特性",
			"i5-4": "路径控制",
			"i5-5": "认证"
		}
	},

	"i6": {
		"开放式最短路径优先（OSPF）": {
			"i6-1": "基本配置",
			"i6-2": "多区域配置",
			"i6-3": "认证",
			"i6-4": "相关查看命令"
		}
	},

	"i7": {
		"中间系统到中间系统（IS-IS）": {
			"i7-1": "基本配置",
			"i7-2": "查看与清理",
			"i7-3": "认证",
		}
	},

	"i8": {
		"边界网关协议（BGP）": {
			"i8-1": "基本配置",
			"i8-2": "查看与重置命令",
			"i8-3": {
				"选路属性": {
					"i8-3-1": "修改权重",
					"i8-3-2": "修改本地优先级",
					"i8-3-3": "修改AS-Path",
					"i8-3-4": "修改起源属性",
					"i8-3-5": "修改多出口鉴别器",
					"i8-3-6": "启用负载均衡"
				}
			},
			"i8-4": "控制BGP路由更新",
			"i8-5": "路由反射器",
			"i8-6": "联邦",
			"i8-7": "认证",
		}
	},

	"i9": {
		"各类路由控制列表": {
			"i9-1": "分发列表（distribute-list）",
			"i9-2": "前缀列表（prefix-list）",
			"i9-3": "as&minus;path访问列表",
		}
	},

	"i10": {
		"路由重分发": {
			"i10-1": "重分发到RIP",
			"i10-2": "重分发到EIGRP",
			"i10-3": "重分发到OSPF",
			"i10-4": "重分发到IS-IS",
			"i10-5": "重分发到BGP",
		}
	},

	"i14": {
		"多协议标签交换（MPLS）": {
			"i14-1": "配置标签分发协议（LDP）",
			"i14-2": "配置VRF",
			"i14-3": "配置MP-BGP",
			"i14-4": {
				"配置客户路由协议": {
					"i14-4-1": "静态路由",
					"i14-4-2": "RIP",
					"i14-4-3": "EIGRP",
					"i14-4-4": "OSPF",
					"i14-4-5": "IS-IS",
					"i14-4-6": "BGP",
				}
			},
			"i14-5": {
				"防环配置（PE配置）": {
					"i14-5-1": "链路状态协议",
					"i14-5-2": "EIGRP",
					"i14-5-3": "BGP",
				},
			},
			"i14-6": {
				"域间MPLS VPN解决方案": {
					"i14-6-1": "optionA",
				},
			},
		}
	},

	"i15": {
		"组播": {
			"i15-1": "启用组播路由",
			"i15-2": "配置 PIM 稀疏模式",
			"i15-3": {
				"配置RP": {
					"i15-3-1": "静态RP",
					"i15-3-2": {
						"BSR": {
							"i15-3-2-1": "配置候选BSR",
							"i15-3-2-2": "配置候选RP",
						}
					},
					"i15-3-3": {
						"自动RP（思科私有方式）": {
							"i15-3-3-1": "配置候选RP",
							"i15-3-3-2": "配置决裁者MA",
							"i15-3-3-3": "配置autorp listener",
						}
					},
					"i15-3-4": {
						"anycast RP": {
							"i15-3-4-1": "配置RP",
							"i15-3-4-2": "配置MSDP",
						}
					}
				},
			},
			"i15-4": {
				"配置扩展SSM": {
					"i15-4-1": "配置IGMPv3",
					"i15-4-2": {
						"配置SSM策略": {
							"i15-4-2-1": "配置ACL匹配组播地址",
							"i15-4-2-2": "PIM协议应用SSM策略",
						}
					},
				}
			}
		}
	},
};

other_routing = {
	"i1": {
		"访问控制列表（ACL）": {
			"i1-1": {
				"基于IP的访问控制列表<br />　　（RACL）": {
					"i1-1-1": "标准访问控制列表",
					"i1-1-2": "扩展访问控制列表",
					"i1-1-3": "时间控制访问控制列表",
					"i1-1-4": "应用ACL",
					"i1-1-5": "ACL调整",
					"i1-1-6": "动态访问控制列表",
					"i1-1-7": "自反ACL"
				}
			},
			"i1-2": "基于MAC访问控制列表<br />　　（MACL）",
			"i1-3": "VLAN 访问控制列表（VACL）",
			"i1-4": "基于端口的ACL（PACL）"
		}
	},

	"i2": {
		"网络地址转换（NAT）": {
			"i2-1": {
				"新版命令": {
					"i2-1-1": "静态一对一",
					"i2-1-2": "静态多对多",
					"i2-1-3": "多对一的转换（PAT）",
					"i2-1-4": "端口发布",
					"i2-1-5": "动态多对多",
					"i2-1-6": "查看命令"
				}
			},
			"i2-2": {
				"老版命令": {
					"i2-2-1": "静态一对一",
					"i2-2-2": "静态多对多",
					"i2-2-3": "多对一的转换（PAT）",
					"i2-2-5": "端口发布",
					"i2-2-6": "动态多对多",
					"i2-2-7": "查看命令"
				}
			},
		}
	},

	"i3": "静态路由",

	"i11": {
		"策略路由（PBR）": {
			"i11-1": "创建route-map",
			"i11-2": "配置流量匹配",
			"i11-3": "配置路由",
			"i11-4": "应用策略路由",
			"i11-5": "查看命令",
		}
	},

	"i12": {
		"服务等级协议（SLA）": {
			"i12-1": "配置SLA",
			"i12-2": "配置track",
			"i12-3": "应用track",
		}
	},

	"i13": "单播反向路径转发（uRPF）"
};

catalyst = {
	"i1": "基本配置",

	"i2": "虚拟局域网（vlan）",

	"i3": {
		"虚拟局域网干道协议（VTP）": {
			"i3-1": "VTP v1/v2",
			"i3-2": "VTP v3",
		}
	},

	"i4": "私有vlan（Private vlan）",

	"i5": {
		"vlan间通信": {
			"i5-1": "单臂路由法",
			"i5-2": "三层交换机法",
			"i5-3": "vlan连接外部",
			"i5-4": "trunk链路只允许某些vlan通过",
		}
	},

	"i6": {
		"端口镜像": {
			"i6-1": "SPAN",
			"i6-2": "RSPAN",
			"i6-3": "ERSPAN",
		}
	},

	"i7": {
		"生成树协议": {
			"i7-1": "基本配置",
			"i7-2": "根桥防护与环路防护",
			"i7-3": "快速端口安全机制",
		}
	},

	"i8": "以太网通道（EtherChannel）",

	"i11": "单向链路检测（UDLD）",

	"i9": {
		"第一跳冗余协议（FHRP）": {
			"i9-1": {
				"热备份路由协议（HSRP）": {
					"i9-1-1": "基本配置",
					"i9-1-2": "配置track",
					"i9-1-3": "配置认证",
				}
			},
			"i9-2": "虚拟路由冗余协议（VRRP）",
			"i9-3": "网关负载均衡协议（GLBP）",
		},
	},

	"i10": {
		"局域网安全": {
			"i10-1": "端口安全",
			"i10-2": "dhcp snooping",
			"i10-3": "动态ARP监控（DAI）",
			"i10-4": "IP Source guard",
		}
	},
};

asa = {
	"i1": {
		"基本配置": {
			"i1-1": "接口配置",
			"i1-2": "配置相关",
			"i1-3": "DNS设置",
		}
	},

	"i2": {
		"静态路由": {
			"i2-1": "配置静态路由",
			"i2-2": "静态路由追踪",
		}
	},

	"i3": "Zone",

	"i4": {
		"远程管理": {
			"i4-1": "基本设置",
			"i4-2": "使用SSH网管",
			"i4-3": "配置本地用户权限",
		}
	},

	"i5": "AAA",

	"i6": "访问控制列表（ACL）",

	"i7": "uRPF",

	"i8": "Shunning",

	"i9": {
		"网络地址转换（NAT）": {
			"i9-1": {
				"object NAT": {
					"i9-1-1": "静态 一对一",
					"i9-1-2": "静态 多对多",
					"i9-1-3": "动态 多对一（PAT）",
					"i9-1-4": "动态 多对多<br />　　 （不转端口，只转IP）",
					"i9-1-5": "动态 多对多<br />　　 （IP、端口均转换）",
				}
			},
			"i9-2": "Twice NAT",
			"i9-3": "相关查看命令",
		}
	},

	"i10": "透明防火墙",

	"i11": "多模式防火墙",

	"i12": {
		"高可用性（HA）": {
			"i12-1": "以太网通道（EtherChannel）",
			"i12-2": "Failover",
			"i12-3": "冗余接口（Redundant）",
		}
	},

	"i13": {
		"Cluster": {
			"i13-1": "individual模式",
			"i13-2": "spanned模式",
		}
	},
};

vpn_router = {
	"i2-1": {
		"L2L IPSec VPN": {
			"i2-1": {
				"L2L IPsec VPN，IKEv1": {
					"i2-1-1": "配置 IKEv1（ISAKMP）策略",
					"i2-1-2": "定义IKEv1（ISAKMP）的<br />　　　预共享密钥，及对端IP",
					"i2-1-3": "配置 IPsec策略（转换集）",
					"i2-1-4": "定义感兴趣流量<br />　　　（用扩展ACL匹配）",
					"i2-1-5": "配置crypto map",
					"i2-1-6": "将crypto map应用于接口",
					"i2-1-7": "相关查看与清理命令",
				}
			},

			"i2-2": {
				"动态 L2L IPsec VPN，IKEv1": {
					"i2-2-1": "配置 IKEv1（ISAKMP）策略",
					"i2-2-2": "定义IKEv1（ISAKMP）<br />　　　的预共享密钥",
					"i2-2-3": "配置 IPsec策略（转换集）",
					"i2-2-4": "配置动态crypto map，<br />　　　调用转换集",
					"i2-2-5": "调用动态map",
					"i2-2-6": "将静态crypto map应用于接口",
				}
			},

			"i2-3": {
				"profile版 L2L IPsec，IKEv1": {
					"i2-3-1": "配置isakmp策略",
					"i2-3-2": "配置keyring",
					"i2-3-3": "配置isakmp profile",
					"i2-3-4": "配置转换集",
					"i2-3-5": "定义感兴趣流量",
					"i2-3-6": "配置crypto map",
					"i2-3-7": "将crypto map应用于接口",
				}
			},

			"i2-4": {
				"L2L IPsec VPN，IKEv2": {
					"i2-4-1": "配置IKEv2 proposal",
					"i2-4-2": "配置IKEv2 policy",
					"i2-4-3": "配置keyring",
					"i2-4-4": "配置profile",
					"i2-4-5": "配置 IPsec策略（转换集）",
					"i2-4-6": "配置感兴趣流量",
					"i2-4-7": "配置crypto map",
					"i2-4-8": "将crypto map应用于接口",
					"i2-4-9": "相关查看命令",
				}
			},
		}
	},

	"i14": {
		"数字签名认证":{
			"i14-1": "配置certificate map",
			"i14-2": "配置isakmp profile",
			"i14-3": "将isakmp profile调用到相应位置",
		}
	},

	"i3": {
		"IPSec VPN优化配置": {
			"i3-1": "激活NAT&minus;T（默认激活）",
			"i3-2": "保持PAT转换位",
			"i3-3": "死亡对等体检测（DPD）",
			"i3-4": "闲置超时",
			"i3-5": "配置IPSec SA有效期",
			"i3-6": "access crypto map ACL",
		}
	},

	"i4": "反向路由注入（RRI）",

	"i5": {
		"GRE over IPSec": {
			"i5-1": "配置tunnel接口",
			"i5-2": "配置IPSec，新版命令",
			"i5-3": "配置IPSec，旧版命令",
		}
	},

	"i6": {
		"SVTI": {
			"i6-1": {
				"SVTI IKEv1": {
					"i6-1-1": "配置isakmp策略",
					"i6-1-2": "配置预共享密钥，及对端IP",
					"i6-1-3": "配置 IPsec策略（转换集）",
					"i6-1-4": "配置 ipsec profile",
					"i6-1-5": "配置tunnel",
				}
			},

			"i6-2": {
				"SVTI IKEv2": {
					"i6-2-1": "配置proposal",
					"i6-2-2": "配置policy",
					"i6-2-3": "配置keyring",
					"i6-2-4": "配置ikev2 profile",
					"i6-2-5": "配置ipsec profile",
					"i6-2-6": "配置转换集",
					"i6-2-7": "配置tunnel接口",
				}
			},

		}
	},

	"i7": {
		"PPTP": {
			"i7-1": "启用VPDN",
			"i7-2": "配置VPDN组",
			"i7-3": "配置用于认证的用户名密码",
			"i7-4": "配置地址池",
			"i7-5": "配置虚模板",
		}
	},

	"i8": {
		"L2TP over IPSec": {
			"i8-1": "启用VPDN",
			"i8-2": "配置VPDN组",
			"i8-3": "配置用于认证的用户名密码",
			"i8-4": "配置地址池",
			"i8-5": "配置虚模板",
			"i8-6": "配置IPSec",
		}
	},

	"i9": {
		"DMVPN": {
			"i9-1": "HUB节点",
			"i9-2": "SPOKE节点",
			"i9-3": "配置IPsec",
			"i9-4": "第二阶段",
			"i9-5": "第三阶段",
		}
	},

	"i10": {
		"GETVPN": {
			"i10-1": {
				"KS（Key Server）配置": {
					"i10-1-1": "配置密钥",
					"i10-1-2": "配置isakmp策略",
					"i10-1-3": "配置预共享密钥及对端IP",
					"i10-1-4": "配置感兴趣流量",
					"i10-1-5": "配置组播的列表",
					"i10-1-6": "配置转换集",
					"i10-1-7": "配置 ipsec profile",
					"i10-1-8": "配置GDOI组",
					"i10-1-9": "配置rekey",
					"i10-1-10": "配置KS备份",
					"i10-1-11": "配置IPSec SA",
				}
			},

			"i10-2": {
				"GM（Group Member）配置": {
					"i10-2-1": "配置isakmp策略",
					"i10-2-2": "配置预共享密钥及KS的对端IP",
					"i10-2-3": "配置gdoi组",
					"i10-2-4": "配置crypto map",
					"i10-2-5": "将crypto map调用到接口",
					"i10-2-6": "配置GM ACL",
				}
			},


			"i10-3": {
				"相关查看命令": {
					"i10-3-1": "KS端",
					"i10-3-2": "GM端",
				}
			},
		}
	},

	"i11": {
		"Easy VPN": {
			"i11-1": {
				"Server端": {
					"i11-1-1": "配置isakmap策略",
					"i11-1-2": "配置组名、密码，及相关策略",
					"i11-1-3": "启用AAA",
					"i11-1-4": "设置xauth的用户名和密码",
					"i11-1-5": "授权策略使用本地策略",
					"i11-1-6": "配置isakmp profile",
					"i11-1-7": "配置转换集",
					"i11-1-8": "配置动态crypto map",
					"i11-1-9": "配置静态crypto map",
					"i11-1-10": "将静态crypto map调用到接口",
					"i11-1-11": "相关查看命令",
				}
			},


			"i11-2": {
				"Client端": {
					"i11-2-1": "配置ipsec client",
					"i11-2-2": "外部接口应用ipsec client",
					"i11-2-3": "内部接口应用ipsec client",
					"i11-2-4": "手动连接Easy VPN",
					"i11-2-5": "查看Easy VPN状态",
				}
			},
		}
	},

	"i12": {
		"DVTI": {
			"i12-1": {
				"Server端": {
					"i12-1-1": "配置isakmap策略",
					"i12-1-2": "配置组名、密码，及相关策略",
					"i12-1-3": "启用AAA",
					"i12-1-4": "设置xauth的用户名和密码",
					"i12-1-5": "授权策略使用本地策略",
					"i12-1-6": "配置isakmp profile",
					"i12-1-7": "配置转换集",
					"i12-1-8": "配置ipsec profile",
					"i12-1-9": "配置虚模板",
				}
			},

			"i12-2": {
				"Client端": {
					"i12-2-1": "配置虚模板",
					"i12-2-2": "配置ipsec client",
					"i12-2-3": "外部接口应用ipsec client",
					"i12-2-4": "内部接口应用ipsec client",
				}
			},
		}
	},

	"i13": {
		"SSL VPN": {
			"i13-1": "配置gateway",
			"i13-2": "启用AAA，并配置线下保护",
			"i13-3": "配置用户名密码",
			"i13-4": "配置本地认证策略",
			"i13-5": "配置context",
			"i13-6": "clientless，配置书签",
			"i13-7": "port-forwarding",
			"i13-8": "Anyconnect",
		}
	},
};

vpn_asa = {
	"i1": {
		"L2L IPSec VPN": {
			"i1-1": {
				"L2L IPsec VPN，IKEv1": {
					"i1-1-1": "激活ikev1",
					"i1-1-2": "只有VPN解密后的流量<br />　　　才能查询的路由（选配）",
					"i1-1-3": "配置 IKEv1（ISAKMP）策略",
					"i1-1-4": "配置IKEv1（ISAKMP）的<br />　　　tunnel&minus;group",
					"i1-1-5": "配置 IPsec策略（转换集）",
					"i1-1-6": "配置感兴趣流量",
					"i1-1-7": "创建crypto map",
					"i1-1-8": "将 crypto map 应用于接口",
					"i1-1-9": "保持PAT转换位",
				}
			},

			"i1-2": {
				"动态 L2L IPsec VPN，IKEv1": {
					"i1-2-1": "配置 IKEv1（ISAKMP）策略，<br />　　　完全同普通的L2L",
					"i1-2-2": "动态地址使用默认的tunnel <br />　　　group：DefaultL2LGroup",
					"i1-2-3": "配置预共享密钥",
					"i1-2-4": "配置 IPsec策略（转换集） ，<br />　　　完全同普通的L2L",
					"i1-2-5": "创建动态crypto map<br />　　　并关联转换集",
					"i1-2-6": "创建静态crypto map<br />　　　并关联动态crypto map",
					"i1-2-7": "将静态crypto map应用到接口",
				}
			},

			"i1-3": {
				"L2L IPsec VPN，IKEv2": {
					"i1-3-1": "激活ikev2",
					"i1-3-2": "配置ikev2策略",
					"i1-3-3": "配置tunnel&minus;group",
					"i1-3-4": "配置ipsec&minus;proposal",
					"i1-3-5": "配置感兴趣流量",
					"i1-3-6": "配置crypto map",
					"i1-3-7": "在接口调用crypto map",
				}
			},

		}
	},

	"i2": {
		"Easy VPN": {
			"i2-1": "激活ikev1",
			"i2-2": "配置IKEv1策略",
			"i2-3": "配置IKEv1的tunnel&minus;group",
			"i2-4": "配置用户名密码",
			"i2-5": "配置转换集",
			"i2-6": "配置动态 crypto map",
			"i2-7": "配置静态crypto map，<br />　　　并匹配静态map",
			"i2-8": "将静态crypto应用到接口",
		}
	},

	"i3": {
		"L2TP over IPSec": {
			"i3-1": "激活ikev1",
			"i3-2": "将VPN的识别方式设置为IP地址",
			"i3-3": "配置IPSec",
			"i3-4": "配置IP地址池",
			"i3-5": "配置用户名密码",
			"i3-6": "配置tunnel group",
		}
	},

	"i4": {
		"SSL VPN": {
			"i4-1": "配置登录用的用户名和密码",
			"i4-2": "启用SSL VPN",
			"i4-3": "相关属性配置",
			"i4-4": "访问控制",
			"i4-5": "查看连接",
			"i4-6": "关闭连接",
		}
	},
};

mobility_express = {
	"i1": "AP模式切换",
	"i2": "清空配置",
	"i3": "命令行模式切换",
	"i4": "配置AAA overload",
};

wlc_AireOS = {
	'i1': {
		'命令行配置': {
			'i1-1': '初始化配置',
			'i1-2': '查看接口配置',
			'i1-3': '清空配置',
		}
	},

	'i2': {
		'基础功能配置': {
			'i2-1': '查看/修改WLC名',

			'i2-2': {
				'内置DHCP服务器': {
					'i2-2-1': '创建内置DHCP服务器',
					'i2-2-2': '指定dy interface的DHCP<br />　　　服务器为内部DHCP服务器',
					'i2-2-3': '查看地址分配情况',
				}
			},

			'i2-3': {
				'日志相关配置': {
					'i2-3-1': '查看日志',
					'i2-3-2': '修改日志配置，<br />　　　添加syslog服务器',
				}
			},

			'i2-4': {
				'时间日期设置': {
					'i2-4-1': '手工设置',
					'i2-4-2': '配置NTP服务器',
					'i2-4-3': '配置NTP服务器密钥',
				}
			},

			'i2-5': {
				'网管协议配置': {
					'i2-5-1': 'HTTP/HTTPS',
					'i2-5-2': 'Telnet/SSH',
					'i2-5-3': {
						'SNMP': {
							'i2-5-3-1': '基础配置',
							'i2-5-3-2': 'SNMPv3 用户配置',
							'i2-5-3-3': 'community配置',
							'i2-5-3-4': 'Trap Server配置',
							'i2-5-3-5': '发送Trap的类型配置',
							'i2-5-3-6': '查看Trap日志'
						}
					},
				}
			},

			'i2-6': 'LAG（链路聚合）配置',
			'i2-7': {
				'NetFlow': {
					'i2-7-1': '配置NetFlow服务器',
					'i2-7-2': '配置NetFlow Monitor',
					'i2-7-3': '将NetFlow Monitor<br />　　　关联到WLC',
				}
			},

			'i2-8': '允许无线用户管理WLC',
			'i2-9': '查看/修改密码策略',
			'i2-10': '创建用于管理WLC的账号',
		}
	},

	'i11': {
		'AP各种模式的配置': {
			'i11-1': {
				'Local模式': {
					'i11-1-1': '创建dy interface',
					'i11-1-2': 'AP模式为local<br />　　　与flexconnect均可',
					'i11-1-3': '关联WLAN与dy interface',
				}
			},

			'i11-2': {
				'FlexConnect模式': {
					'i11-2-1': '将AP切换为FlexConnect模式',
					'i11-2-2': '将WLAN切换为<br />　　　FlexConnect模式',
					'i11-2-3': '配置vlan与WLAN的关联',
				}
			},

			'i11-3': {
				'Monitor模式': {
					'i11-3-1': '将AP切换为Monitor模式',
				}
			},

			'i11-4': {
				'Sniffer模式': {
					'i11-4-1': '关闭IP&minus;MAC地址绑定',
					'i11-4-2': '将AP切换为Sniffer模式',
					'i11-4-3': '监控的信道配置',
				}
			},

			'i11-5': {
				'Bridge模式': {
					'i11-5-1': '将AP的mac地址<br />　　　添加到Mac Filters',

					'i11-5-2': {
						'切换RAP为bridge模式': {
							'i11-5-2-1': '固定频段',
							'i11-5-2-2': '切换为brideg模式，<br />　　　需要重启',
							'i11-5-2-3': '切换为RootAP，<br />　　　需要重启',
						}
					},

					'i11-5-3': '切换MAP为bridge模式',

					'i11-5-4': {
						'配置有线桥': {
							'i11-5-4-1': 'MAP配置桥组名，需要重启',
							'i11-5-4-2': 'RAP启用桥组名，需要重启',
							'i11-5-4-3': 'RAP启用有线桥，<br />　　　并启用vlan支持',
							'i11-5-4-4': 'RAP配置有线接口的Trunk',
							'i11-5-4-5': 'MAP配置有线接口的Trunk',
							'i11-5-4-6': '查看邻居状态',
						}
					},
				}
			},

		}
	},

	'i3': {
		'AP关联WLC的冗余': {
			'i3-1': 'AP的主用、备用、再备用<br />　　　WLC配置',

			'i3-2': '全局配置AP的主用、备用WLC',

			'i3-3': {
				'配置AP心跳超时时间': {
					'i3-3-1': '配置AP心跳超时时间',
					'i3-3-2': '单独为Local/FlexConnect模式<br />　　　配置更快的心跳超时时间',
				}
			},

			'i3-4': '查看/修改 AP Fallbak',

			'i3-5': {
				'Failover Priority': {
					'i3-5-1': '启用Failover Priority',
					'i3-5-2': 'AP配置相关优先级',
				}
			},

			'i3-6': '查看/修改<br />　　　Master Controller Mode',
		}
	},

	'i4': {
		'对AP的管理': {
			'i4-1': {
				'AP console接口用户名、密码、<br />　　　enable密码配置': {
					'i4-4-1': '全局配置',
					'i4-4-2': '某个AP单独配置',
				}
			},

			'i4-2': 'AP的802.1x用户名、密码配置',
			'i4-3': 'AP的远程管理（限全局）',
			'i4-4': 'AP的LED指示灯的管理',
			'i4-5': '数据层面开启加密',
		}
	},

	'i5': {
		'WLAN配置与管理': {
			//'i5-1':'创建WLAN',

			'i5-2': {
				'WLAN有关特性配置与管理': {
					'i5-2-1': 'P2P Blocking',

					'i5-2-2': {
						'客户端多次认证不通过，<br />　　　锁定策略': {
							'i5-2-2-1': '配置锁定时间',
							'i5-2-2-2': '配置锁定规则',
						}
					},

					'i5-2-3': {
						'连接超时设置': {
							'i5-2-3-1': '绝对超时',
							'i5-2-3-2': '闲置超时',
						}
					},

					'i5-2-4': {
						'频段选择': {
							'i5-2-4-1': '启用自动频段选择',
							'i5-2-4-2': '自动频段选择参数调整',
						}
					},

					'i5-2-5': {
						'客户负载均衡': {
							'i5-2-5-1': '启用客户负载均衡',
							'i5-2-5-2': '客户负载均衡参数调整',
						}
					},

					'i5-2-6': '开启/关闭SSID广播',
					'i5-2-7': {
						'MAC Filter': {
							'i5-2-7-1': '启用WLAN的MAC Filter',
							'i5-2-7-2': '将客户端的MAC地址<br />　　　添加到MAC Filter',
						}
					},

				}
			},

			'i5-3': {
				'AP Group': {
					'i5-3-1': '创建AP Group',
					'i5-3-2': 'AP直接关联AP Group',
				}
			},

			'i5-4': {
				'Interface Group': {
					'i5-4-1': '创建Interface Group',
					'i5-4-2': 'WLAN直接关联<br />　　　Interface Group',
				}
			},
		}
	},

	'i7': {
		'WLC的冗余': {
			'i7-1': 'Primary WLC配置',

			'i7-2': 'Secondary WLC配置',

			'i7-3': {
				'状态查看': {
					'i7-3-1': 'GUI',
					'i7-3-2': 'CLI',
				}
			},

			'i7-4': '切换活动/备份状态',
		}
	},

	'i9': {
		'WLC的各种ACL': {
			'i9-1': {
				'普通ACL': {
					'i9-1-1': '创建ACL',
					'i9-1-2': '将ACL应用到dy Interface',
					'i9-1-3': '将ACL应用到WLAN',
				}
			},

			'i9-2': {
				'CPU ACL': {
					'i9-2-1': '创建CPU ACL',
					'i9-2-2': '应用CPU ACL',
				}
			},

			'i9-3': {
				'二层 ACL': {
					'i9-3-1': '创建二层ACL',
					'i9-3-2': '应用二层ACL',
				}
			},

			'i9-4': {
				'FlexConnect ACL': {
					'i9-4-1': '创建FlexConnect ACL',
					'i9-4-2': '应用FlexConnect ACL',
				}
			},
		}
	},

	'i10': {
		'无线漫游': {
			'i10-1': 'WLC间使用单播漫游',
			'i10-2': 'WLC间使用组播漫游',
			'i10-3': '为漫游设置锚设备',
			'i10-4': '启用动态锚',

			'i10-5': {
				'锚设备与外部设备的查看': {
					'i10-5-1': '查看方法',
					'i10-5-2': '非漫游，二层漫游：<br />　　　关联的WLC为local',
					'i10-5-3': '三层漫游或手工指定：<br />　　　关联的WLC为锚设备',
					'i10-5-4': '三层漫游或手工指定：<br />　　　关联的WLC为外部设备',
					'i10-5-5': '动态锚：<br />　　　可以处理客户端IP的WLC',
					'i10-5-6': '动态锚：关联的WLC',
				}
			},

			'i10-6': '查看/修改WLC的漫游组',
		}
	},

	'i12': {
		'各种认证方式配置': {
			'i12-1': '预共享密匙',
			'i12-4': '关联LDAP服务器',
			'i12-2': {
				'802.1x': {
					'i12-2-1': {
						'PEAP': {
							'i12-2-1-1': '配置Local EAP Profile',
							'i12-2-1-2': '创建本地用户',
							'i12-2-1-3': '配置相应WLAN',
						}
					},

					'i12-2-2': {
						'EAP&minus;TLS': {
							'i12-2-2-1': 'WLC加载根证书与个人证书',
							"i12-2-2-2": '配置Local EAP Profile',
							"i12-2-2-3": '配置相应WLAN',
						}
					},
				}
			},

			'i12-3': {
				'网页认证': {
					'i12-3-1': '配置ACL',
					'i12-3-2': '配置相应WLAN',
				}
			},
		}
	},

	'i13': {
		'流氓 AP/客户端 管理': {
			'i13-1': '各类AP查看',
			'i13-2': '流氓客户端查看',
			'i13-3': {
				'AP自动归类': {
					'i13-3-1': '配置AP分类规则',
					'i13-3-2': '友好AP规则举例',
					'i13-3-3': '恶意AP规则举例',
				}
			},

			'i13-4': {
				'AP手动归类': {
					'i13-4-1': '直接编辑AP进行归类',
					'i13-4-2': '配置友好AP的MAC地址',
				}
			},

			'i13-5': '流氓客户端手动处理',
			'i13-6': '配置RLDP',
		}
	},
};

ise21 = {
	'i2': {
		'建议开局配置': {
			'i2-1': '适当取消密码限制策略',
			'i2-2': '取消异常客户端挂起功能',
		}
	},

	'i3': {
		'域与证书的配置': {
			'i3-1': '加入域',
			'i3-2': '根据需要从域中提取信息',
			'i3-3': 'ISE申请个人证书',
			'i3-4': 'ISE导入根证书',
			'i3-5': 'ISE导入个人证书',
		}
	},

	'i4': {
		'NAD配置': {
			'i4-1': 'NDG配置',
			'i4-2': 'ND配置',
		}
	},

	'i5': {
		'Tacacs+设备管理': {
			'i5-1': '启用Tacacs+功能',
			'i5-2': 'ND配置Tacacs+',
		}
	},

	'i7': {
		'配置认证策略': {
			'i7-1': '认证策略结构',
			'i7-2': {
				'配置认证条件': {
					'i7-2-1': '创建简单条件',
					'i7-2-2': '创建复合条件',
				}
			},
			'i7-3': '配置允许协议',
			'i7-4': '配置认证身份源',
		}
	},

	'i8': {
		'配置授权策略': {
			'i8-1': '授权策略结构',
			'i8-2': {
				'配置本地组': {
					'i8-2-1': {
						'配置本地用户组': {
							'i8-2-1-1': '创建本地用户组',
							'i8-2-1-2': '创建本地用户',
						},
					},
					'i8-2-2': {
						'配置本地终端组': {
							'i8-2-2-1': '创建终端组',
							'i8-2-2-2': '创建终端',
						}
					},
				}
			},
			'i8-3': {
				'配置授权条件': {
					'i8-3-1': '创建简单条件',
					'i8-3-2': '创建复合条件',
					'i8-3-3': '创建时间条件',
				}
			},
			'i8-4': {
				'配置授权权限': {
					'i8-4-1': '创建Download ACL',
					'i8-4-2': '创建授权权限',
				}
			},
		}
	},

	'i9': {
		'MAB': {
			'i9-1': '配置认证策略',
			'i9-2': '配置授权策略',
		}
	},

	'i10': {
		'有线802.1x': {
			'i10-1': {
				'PEAP': {
					'i10-1-1': '配置认证协议，只允许 PEAP',
					'i10-1-2': '根据需要，配置认证策略',
					'i10-1-3': '根据需要，配置授权策略',
					'i10-1-4': '配置授权条件，已通过机器认证<br />　　　（限PEAP）',
				}
			},

			'i10-2': {
				'EAP&minus;TLS': {
					'i10-2-1': '配置认证协议，<br />　　　只允许 EAP&minus;TLS',
					'i10-2-2': '配置证书认证的配置文件',
					'i10-2-3': '根据需要，配置认证策略',
					'i10-2-4': '根据需要，配置授权策略',
				}
			}
		}
	},

	'i11': {
		'无线802.1x': {
			'i11-1': {
				'WLC配置': {
					'i11-1-1': {
						'两种模式前期的准备': {
							'i11-1-1-1': '配置认证授权及审计服务器',
							'i11-1-1-2': '配置WLAN',
						}
					},
					'i11-1-2': {
						'Local模式配置': {
							'i11-1-2-1': '配置所需的ACL',
							'i11-1-2-2': '配置所需的dy interface',
						}
					},
					'i11-1-3': {
						'FlexConnect模式配置': {
							'i11-1-3-1': '将AP切换为<br />　　　FlexConnect模式',
							'i11-1-3-2': '将WLAN切换为<br />　　　FlexConnect模式',
							'i11-1-3-3': '配置vlan与WLAN的关联',
							'i11-1-3-4': '配置所需的<br />　　　FlexConnect ACL',
							'i11-1-3-5': '创建FlexConnect Group，<br />　　　并关联AP',
							'i11-1-3-6': '将可能被授权的vlan<br />　　　关联到FlexConnect Group',
							'i11-1-3-7': '将FlexConnect ACL<br />　　　关联到FlexConnect Group',
						}
					},
				}
			},
			'i11-2': 'ISE配置'
		},
	},

	'i12': {
		'中心网页认证': {
			'i12-1': {
				'前期准备': {
					'i12-1-1': '创建列表，放行<br />　　　通过认证前允许的流量',
					'i12-1-2': '配置授权权限',
					'i12-1-3': '配置用于认证的网页',
					'i12-1-4': '确证MAB的认证策略',
					'i12-1-5': '修改授权策略，将授权失败的<br />　　　用户引导向网页认证',
					'i12-1-6': '配置授权策略，使通过<br />　　　网页认证的客户可以访问网络',
				}
			},

			'i12-2': '有线中心网页认证',

			'i12-3': {
				'无线中心网页认证': {
					'i12-3-1': {
						'WLC配置': {
							'i12-3-1-1': '配置WLAN',
							'i12-3-1-2': '配置WEB-REDIRECT列表',
							'i12-3-1-3': '其余配置',
						}
					},
					'i12-3-2': 'ISE配置',
				}
			},
		}
	},

	'i13': {
		'设备识别': {
			'i13-1': '启用设备识别功能',
			'i13-2': '启用重认证功能',
			'i13-3': '自定义条件',
			'i13-4': '自定义规则',
			'i13-5': '查看识别结果',
		}
	},
};

iosxe = {
	"i1": {
		"Guest Shell": {
			"i1-1": "创建vrf",
			"i1-2": "guest shell网络配置",
			"i1-3": "配置VirtualPortGroup接口",
		}
	},
};

nexus = {
	"i1": {
		"与IOS的配置区别": {
			"i1-4": {
				"基本配置": {
					"i1-4-1": "保存配置",
					"i1-4-2": "配置多个接口",
					"i1-4-3": "启用SVI",
				}
			},
			"i1-1": {
				"生成树协议": {
					"i1-1-1": "接口配置为快速端口",
				}
			},
			"i1-2": "HSRP",
			"i1-3": "动态路由协议（IGP）",
			"i1-5": {
				"PIM": {
					"i1-5-1": "静态RP时，环回接口需要配置pim",
				}
			},
			"i1-6": {
				"BGP": {
					"i1-6-1": "nexus 中没有 peer group<br />　　　使用 template 代替",
				}
			},
		}
	},

	"i2": {
		"系统管理": {
			"i2-1": "基本功能",
			"i2-2": "checkpoint",
		}
	},

	"i3": {
		"VDC": {
			"i3-1": {
				"配置VDC": {
					"i3-1-1": "创建（配置）VDC",
					"i3-1-2": "配置关联模块的类型",
					"i3-1-3": "关联接口到VDC",
					"i3-1-4": {
						"限制资源消耗": {
							"i3-1-4-1": "配置资源模版",
							"i3-1-4-2": "关联资源模版到VDC",
						}
					},
					"i3-1-5": "配置CPU份额",
					"i3-1-6": "配置VDC启动顺序",
					"i3-1-7": {
						"配置VDC高可用性": {
							"i3-1-7-1": "单引擎情况",
							"i3-1-7-2": "双引擎情况",
						}
					},
					"i3-1-8": "default VDC <br />　　　转化为 admin VDC",
				}
			},

			"i3-2": {
				"VDC间切换": {
					"i3-2-1": "管理VDC 到 普通VDC",
					"i3-2-2": "普通VDC 到 管理VDC",
				}
			},

			"i3-3": {
				"查看相关信息": {
					"i3-3-1": "查看VDC的 基本信息",
					"i3-3-2": "查看VDC的 成员接口信息",
					"i3-3-3": "查看VDC的 详细信息",
					"i3-3-4": "资源限制模版",
				}
			},
		}
	},

	"i4": {
		"FEX": {
			"i4-1": {
				"PortChannel方式": {
					"i4-1-1": "激活FEX",
					"i4-1-2": "创建FEX",
					"i4-1-3": {
						"接口配置为fabric port": {
							"i4-1-3-1": "相关接口加入port-channel",
							"i4-1-3-2": "port-channel接口<br /> 　　　配置为fabric port",
						}
					},
				}
			},
			"i4-2": {
				"Staic Pinning方式": {
					"i4-2-1": "激活FEX",
					"i4-2-2": {
						"FEX相关配置": {
							"i4-2-2-1": "创建FEX",
							"i4-2-2-2": "配置max-links",
						}
					},
					"i4-2-3": "接口配置为fabric port",
				}
			},
			"i4-3": {
				"查看相关信息": {
					"i4-3-1": "查看FEX信息",
					"i4-3-2": "查看fabric接口关联的fex接口",
				}
			},
		}
	},

	"i5": {
		"vPC": {
			"i5-1": "激活vPC、LACP",
			"i5-2": "配置keepalive链路",
			"i5-3": "配置peer link链路",
			"i5-4": "配置基于vPC的port-channel",
		}
	},

	"i6": {
		"vxlan — single pod": {
			"i6-1": {
				"Spine节点": {
					"i6-1-1": "启用EVPN控制平面",
					"i6-1-2": "配置MP-BGP，与Leaf节点<br /> 　　　建立基于evpn的邻居关系",
				}
			},
			"i6-2": {
				"Leaf节点": {
					"i6-2-1": "启用EVPN控制平面",
					"i6-2-2": "启用vxlan的VTEP功能",
					"i6-2-3": "配置MP-BGP，与Spine节点<br /> 　　　建立基于evpn的邻居关系",
					"i6-2-11": "配置任意网关的mac地址",
					"i6-2-12": "调整配置，使ARP抑制能够启用",
					"i6-2-4": "配置与2层vni相关联的vlan",
					"i6-2-5": "配置与3层vni相关联的vlan",
					"i6-2-6": "配置租户，并与3层vni相关联",
					"i6-2-7": "配置与2层vni对应的vlan接口",
					"i6-2-8": "配置与3层vni对应的vlan接口",
					"i6-2-9": {
						"配置nve接口": {
							"i6-2-9-1": "基本配置",
							"i6-2-9-2": "与2层vni相关联",
							"i6-2-9-3": "与3层vni相关联",
						}
					},
					"i6-2-10": "定义2层vni的RD和RT<br /> 　　　实现同vni的桥接"
				}
			}
		}
	},

	"i7": {
		"vxlan — multi pod": {
			"i7-1": "配置route map",
			"i7-2": "不同pod的spine<br /> 　　　建立BGP EVPN连接",
		}
	},

	"i8": {
		"vxlan — multi site": {
			"i8-6": "BGW间的各种接口推荐方式",
			"i8-1": "配置BGW的第一阶段",
			"i8-2": {
				"配置MB-BGP": {
					"i8-2-1": "配置route map",
					"i8-2-2": {
						"配置BGP": {
							"i8-2-2-1": "配置保留所有RT属性",
							"i8-2-2-2": "配置为BGW设备",
							"i8-2-2-3": "对端BGW的evpn地址族<br /> 　　　相关配置",
						}
					},
				}
			},
			"i8-3": "配置多站点",
			"i8-4": {
				"配置NVE接口": {
					"i8-4-1": "配置VIP地址",
					"i8-4-1": "配置单播复制",
				}
			},
			"i8-5": {
				"配置物理接口": {
					"i8-5-1": "连接 对端DC 接口配置",
					"i8-5-2": "连接 本端DC 接口配置",
				}
			},
		}
	},

	"i9": {
		"vxlan — 不同租户间互通": {
			"i9-1": {
				"外接三层设备实现": {
					"i9-1-1": "与三层设备相连通",
					"i9-1-2": "将路由重分发至BGP",
				}
			},
			"i9-2": {
				"集中式路由泄漏": {
					"i9-2-1": "新建用于连接外部的租户",
					"i9-2-2": "BorderLeaf连接到外部",
					"i9-2-3": {
						"BGP和外部路由协议重分发": {
							"i9-2-3-1": "配置 OSPF 重分发到 BGP 的<br /> 　　　route map",
							"i9-2-3-2": "配置 BGP 重分发到 OSPF 的<br /> 　　　route map",
							"i9-2-3-3": "配置 OSPF 重分发到 BGP",
							"i9-2-3-4": "配置 BGP 重分发到 OSPF",
						}
					},
					"i9-2-4": "租户间互通",
					"i9-2-5": {
						"同一leaf，租户间直接连通": {
							"i9-2-5-1": "配置route map",
							"i9-2-5-2": "不同租户间的 hmm 路由<br /> 　　　互相重分发",
						}
					},
				}
			},
		}
	},
};

sdwan = {
	"i1": {
		"核心设备上线": {
			"i1-1": {
				"初始化核心设备": {
					"i1-1-1": "常规初始化",
					"i1-1-2": "无DNS情况",
					"i1-1-3": "vBound冗余",
					"i1-1-4": "vSmart冗余",
				}
			},
			"i1-2": {
				"vManage基本配置": {
					"i1-2-1": "配置组织名",
					"i1-2-2": "配置vBond地址",
					"i1-2-3": "配置控制器根证书",
				}
			},
			"i1-3": {
				"核心设备相互关联": {
					"i1-3-1": "添加vBond和vSmart",
					"i1-3-2": "核心设备申请证书",
					"i1-3-3": "核心设备安装证书",
					"i1-3-4": "核心设备推送到vBond",
				}
			},
		}
	},

	"i2": {
		"关联Edge（vEdge Cloud）": {
			"i2-1": "加载Edge授权",
			"i2-2": "初始化Edge",
			"i2-3": {
				"Edge加载根证书": {
					"i2-3-1": "获取根证书",
					"i2-3-2": "卸载设备原始的根证书",
					"i2-3-3": "加载新获取的根证书",
				}
			},
			"i2-4": {
				"Edge上线": {
					"i2-4-1": "获取授权ID及一次性密码",
					"i2-4-2": "激活Edge",
					"i2-4-3": {
						"查看Edge状态": {
							"i2-4-3-1": "授权正常分配",
							"i2-4-3-2": "Edge关联到vSmart",
						}
					},
				}
			},
		}
	},

	"i3": "配置命令行模板",
	"i4": {
		"配置Feature模板": {
			"i4-1": "创建Feature模板",
			"i4-2": "创建设备模板",
			"i4-3": "推送配置到设备",
		}
	},
	"i5": {
		"配置本地策略": {
			"i5-1": {
				"创建各种列表": {
					"i5-1-2": "团体列表（Community List）",
					"i5-1-3": "数据前缀列表（Data Prefix List）",
					"i5-1-8": "前缀列表（Prefix List）",
				}
			},
			"i5-4": "创建ACL",
			"i5-2": "创建Route Map",
			"i5-3": {
				"配置本地策略集": {
					"i5-3-1": "创建本地策略集",
					"i5-3-2": "策略集分配给设备模板",
				}
			},
		}
	},
	"i6": {
		"配置中心策略": {
			"i6-1": "vSmart由vManage管理",
			"i6-2": {
				"创建各种列表": {
					"i6-2-1": "站点列表（Site List）",
					"i6-2-2": "TLOC列表（TLOC List）",
					"i6-2-3": "VPN列表（VPN List）",
					"i6-2-4": "应用列表（Applications List）",
				}
			},
			"i6-3": {
				"配置拓扑策略": {
					"i6-3-1": "入方向拓扑策略",
					"i6-3-2": "全互联型出方向拓扑策略",
					"i6-3-3": {
						"Hub-Spoke型出方向拓扑策略": {
							"i6-3-3-1": "Hub站点出方向拓扑策略",
							"i6-3-3-2": "所有Spoke站点<br />　　　出方向拓扑策略",
						}
					},
				}
			},
			"i6-4": {
				"配置中心策略集": {
					"i6-4-1": "全互联型拓扑策略",
					"i6-4-2": "Hub-Spoke型拓扑策略",
				}
			},
			"i6-5": "激活中心策略集"
		}
	},

	"i7": {
		"调整流量路径（中心策略）": {
			"i7-1": "调整Hub的默认路由",
			"i7-2": {
				"配置流量策略": {
					"i7-2-1": "Hub配置策略",
					"i7-2-2": "Spoke配置策略",
				}
			},
			"i7-3": "应用策略到中心策略集",
		},
	},
};

ise_switch = {
	'i1': {
		'配置总览': {
			'i1-1': '全局配置',
			'i1-2': '接口配置',
		}
	},

	'i2': {
		'配置详解': {
			'i2-1': {
				'全局配置': {
					'i2-1-1': '启用aaa，并配置线下保护',
					'i2-1-6': '交换机指定ISE',
					'i2-1-2': '启用802.1x认证、授权与审计',
					'i2-1-3': '启用CoA',
					'i2-1-4': '交换机全局开启802.1x',
					'i2-1-5': '开启设备追踪',
					'i2-1-12': '配置设备追踪策略',
					'i2-1-7': '配置radius属性',
					'i2-1-8': '配置探测radius是否有正常的<br />　　　方式',
					'i2-1-9': '配置认证和授权、审计时发送的<br />　　　vsa',
					'i2-1-10': '配置用于低风险模式的acl',
					'i2-1-11': '配置用于web重定向的acl',
				}
			},

			'i2-2': {
				'接口配置': {
					'i2-2-1': '常规交换配置',
					'i2-2-2': '启用mab',
					'i2-2-3': '启用802.1x',
					'i2-2-4': '配置认证顺序',
					'i2-2-5': '配置授权顺序',
					'i2-2-6': '配置认证的低风险模式',
					'i2-2-7': '配置主机模式',
					'i2-2-10': '应用设备追踪策略',
					'i2-2-8': '当认证失败时采用下一种认证<br />　　　方式',
					'i2-2-9': '不同情况下，将客户端划入相应<br />　　　vlan',
				}
			},
		}
	},

	'i3': {
		'MACSec': {
			'i3-1': '终端到交换机链路加密',
			'i3-2': '交换机间链路加密',
		}
	},

	'i4': {
		'Radius DTLS': {
			'i4-1': '交换机需要申请证书',
			'i4-2': '交换机指定ISE的相关配置',
		}
	},
};

ise31 = {
	'i15': '安装&初始化',

	'i1': {
		'建议开局配置': {
			'i1-1': '适当取消密码限制策略',
			'i1-2': '取消异常客户端挂起功能',
		}
	},

	'i2': {
		'ISE分布式部署': {
			'i2-3': '所有节点申请证书，<br />　　　并配置正反双向DNS解析',
			'i2-1': '部署主节点',
			'i2-2': '添加其它节点',
		}
	},

	'i3': {
		'域与证书的配置': {
			'i3-1': '加入域',
			'i3-2': '根据需要从域中提取信息',
			'i3-5': '导入根证书',
			'i3-3': 'ISE申请个人证书',
			'i3-4': '导入个人证书',
		}
	},

	'i4': {
		'NAD配置': {
			'i4-1': 'NDG配置',
			'i4-2': 'ND配置',
			'i4-3': 'ND配置（Radius over DTLS）',
		}
	},
	//
	// 'i5': {
	// 	'Tacacs+设备管理': {
	// 		'i5-1': '启用Tacacs+功能',
	// 		'i5-2': 'ND配置Tacacs+',
	// 	}
	// },
	//
	'i7': {
		'ISE策略结构': {
			'i7-1': '策略集结构',
			'i7-2': {
				'配置条件': {
					'i7-2-1': '配置时间条件',
					'i7-2-2': '配置复合条件',
				}
			},
			'i7-3': '配置允许的协议',
			'i7-4': '配置认证数据库',
			'i7-5': {
				'配置内部用户（组）': {
					'i7-5-1': '配置内部用户组',
					'i7-5-2': '配置内部用户',
				}
			},
			'i7-6': {
				'配置内部终端（组）': {
					'i7-6-1': '配置内部终端组',
					'i7-6-2': '配置内部终端（全新未识别）',
				}
			},
			'i7-7': "配置Download ACL",
			'i7-8': "配置授权结果",
		}
	},

	'i8': 'MAB',

	'i9': {
		'EasyConnect & Passive ID': {
			'i9-1': '启用Passive ID功能',
			'i9-2': '创建终端组，存储设备mac地址',
			'i9-3': {
				'配置登录域前授权的结果': {
					'i9-3-1': '配置受限制的DACL',
					'i9-3-2': '配置受限制的授权结果',
				}
			},
			'i9-4': '配置登录域后的授权结果',
			'i9-5': '配置授权策略',
		}
	},

	'i10': {
		'802.1x': {
			'i10-1': {
				'PEAP': {
					'i10-1-1': 'PEAP的适用条件',
					'i10-1-2': 'PEAP实例',
					'i10-1-3': 'PEAP的条件：通过机器认证',
				}
			},

			'i10-2': {
				'EAP&minus;TLS': {
					'i10-2-1': '配置证书认证的配置文件',
					'i10-2-2': 'EAP&minus;TLS的适用条件',
					'i10-2-3': 'EAP&minus;TLS实例',
				}
			},

			'i10-3': {
				'EAP&minus;FAST': {
					'i10-3-1': 'EAP&minus;FAST的适用条件',
					'i10-3-2': 'EAP&minus;FAST实例',
				}
			},

			'i10-4': {
				'windows终端配置': {
					'i10-4-1': '启用802.1x功能',
					'i10-4-2': '802.1x认证相关配置',
				}
			},
		}
	},

	'i11': {
		'中心网页认证': {
			'i11-1': '调整页面配置',
			'i11-2': '配置认证前的DACL',
			'i11-3': '配置认证前的授权结果',
			'i11-4': '配置认证后的授权结果',
			'i11-5': '配置策略集',
		}
	},

	'i12': {
		'Guest Service': {
			'i12-1': {
				'配置身份源序列': {
					'i12-1-1': '登录访客门户的身份源',
					'i12-1-2': '登录赞助商门户的身份源',
				}
			},
			'i12-2': '配置访客的地区（时区）',
			'i12-3': '自定义访客策略（访问时间）',
			'i12-4': '配置访客门户',
			'i12-5': '配置赞助商门户',
			'i12-6': '配置赞助商策略',
			'i12-7': {
				'配置授权结果': {
					'i12-7-1': '注册认证前授权',
					'i12-7-2': '认证后授权',
				}
			},
			'i12-8': '配置策略集',
		}
	},
	//
	// 'i13': {
	// 	'设备识别': {
	// 		'i13-1':'启用设备识别功能',
	// 		'i13-2':'启用重认证功能',
	// 		'i13-3':'自定义条件',
	// 		'i13-4':'自定义规则',
	// 		'i13-5':'查看识别结果',
	// 	}
	// },

	'i14': {
		'MACSec': {
			'i14-1': '配置授权结果',
			'i14-2': '配置策略集',
		}
	},
};