tree_basic = {
	'i1': {
		'基本命令':{
			'i1-1': '模式切换',
			'i1-2': '查看/保存配置',
			'i1-3': '查看接口配置',
			'i1-4': '时间日期时区配置',
			'i1-5': '其它基本设置',
		}
	},

	'i2': {
		'动态主机配置协议（DHCP）':{
			'i2-1': '基本配置',
			'i2-2': 'DHCP接口模式',
			'i2-3': '配置DHCP中继',
			'i2-6': '查看与重置命令',
			'i2-4': 'DHCP Snooping',
			'i2-5': '接口获得DHCP的地址',
		}
	},

	'i3': {
		'网管协议': {
			'i3-1': 'CLI登录管理',
			'i3-2': 'Telnet',
			'i3-3': 'SSH'
		}
	},

	"i6":{
		"网络时间协议（NTP）":{
			"i6-1": "NTP服务器端配置",
			"i6-2": "NTP客户端配置",
			"i6-3": "查看NTP状态"
		}
	},

	'i4':'日志管理',

	'i5': {
		'会话管理':{
			'i5-2':'外部进入本方会话',
		}
	},
};

tree_dynamic_routing = {
	'i5': {
		'路由选择信息协议（RIP）': {
			'i5-1':'基本配置',
			'i5-2':'路径控制',
			'i5-3':'控制路由更新',
			'i5-4':'认证',
			'i5-5': {
				'与BFD联动':{
					'i5-5-1':'动态全局模式',
					'i5-5-2':'动态接口模式',
					'i5-5-3':'静态模式',
				}
			}
		}
	},

	'i6': {
		'开放式最短路径优先（OSPF）': {
			'i6-1':'基本配置',
			'i6-2':'多区域配置',
			'i6-3': {
				'控制路由更新': {
					'i6-3-1':'控制接收的路由',
					'i6-3-2':'控制发出的路由',
				}
			},
			'i6-4':'认证',
			'i6-5':'相关查看命令',
			'i6-6': {
				'与BFD联动':{
					'i6-6-1':'动态全局模式',
					'i6-6-2':'动态接口模式',
				}
			}
		}
	},

	'i7': {
		'中间系统到中间系统（IS-IS）':{
			'i7-1':'基本配置',
			'i7-2':'认证',
			'i7-3': {
				'与BFD联动':{
					'i7-3-1':'动态全局模式',
					'i7-3-2':'动态接口模式',
					'i7-3-3':'静态模式',
				}
			}
		}
	},

	'i8': {
		'边界网关协议（BGP）': {
			'i8-1':'基本配置',
			'i8-8':'查看与重置命令',
			'i8-9':'路由聚合',
			'i8-10': {
				'团体属性': {
					'i8-10-1':'配置用于控制路由的团体属性',
					'i8-10-2':'配置用于标记路由的团体属性',
					'i8-10-3':'配置向BGP对等体发送团体属性',
					'i8-10-4':'获取并处理被标记的路由',
				}
			},
			'i8-2':{
				'选路属性':{
					'i8-2-1':'修改优先数值',
					'i8-2-2':'修改本地优先级',
					'i8-2-3':'修改自治系统路径',
					'i8-2-4':'修改起源属性',
					'i8-2-5':'修改多出口鉴别器',
					'i8-2-6':'启用负载均衡',
				}
			},
			'i8-3':'路由反射器（RR）',
			'i8-4':'联邦（confederation）',
			'i8-5':'控制路由更新',
			'i8-6':'认证',
			'i8-7':'与BFD联动',
		}
	},

	'i9': {
		'各种列表': {
			'i9-1':'acl',
			'i9-2':'ip-prefix',
			'i9-3':'route-policy',
			'i9-4':'as-path-filter',
		}
	},

	'i10': {
		'多协议标签交换（MPLS）': {
			'i10-1':'配置标签分发协议（LDP）',
			'i10-2':'配置vpn-instance',
			'i10-3':'配置MP-BGP',
			'i10-4': {
				'配置客户路由协议': {
					'i10-4-1':'静态路由',
					'i10-4-2':'RIP',
					'i10-4-3':'OSPF',
					'i10-4-4':'IS-IS',
					'i10-4-5':'BGP',
				}
			},
			'i10-5': {
				'防环配置（PE配置）': {
					'i10-5-1':'链路状态协议',
					'i10-5-2':'BGP',
				}
			},
			'i10-6': {
				'域间MPLS VPN解决方案': {
					'i10-6-1':'optionA',
					'i10-6-2':'optionB',
					'i10-6-3':'optionC',
				}
			},
		}
	},

	"i11": {
		"组播": {
			"i11-1": "启用组播路由",
			"i11-2": {
				"配置 PIM 稀疏模式": {
					"i11-2-1": "配置 PIM 稀疏模式",
					"i11-2-2": "配置IGMP",
				}
			},
			"i11-3": {
				"配置RP": {
					"i11-3-1": "静态RP",
					"i11-3-2": {
						"BSR": {
							"i11-3-2-1": "配置候选BSR",
							"i11-3-2-2": "配置候选RP",
						}
					},
					"i11-3-3": {
						"anycast RP": {
							"i11-3-3-1": "配置RP",
							"i11-3-3-2": "配置MSDP",
						}
					}
				},
			},
			"i11-4": {
				"配置扩展SSM": {
					"i11-4-1": "配置IGMPv3",
					"i11-4-2": {
						"配置SSM策略": {
							"i11-4-2-1": "配置ACL匹配组播地址",
							"i11-4-2-2": "PIM协议应用SSM策略",
						}
					},
				}
			}
		}
	},
};

tree_other_routing = {
	'i1': {
		'访问控制列表（ACL）': {
			'i1-1': '基本访问控制列表（Basic ACL）',
			'i1-2': '高级访问控制列表<br />　　　（Advanced ACL）',
			'i1-3': '时间控制访问控制列表',
			'i1-4': '二层访问控制列表（L2 ACL）',
			'i1-5': '应用ACL',
			'i1-6': 'ACL调整',
			'i1-7': '自反ACL',
		}
	},

	'i2': {
		'网络地址转换（NAT）': {
			'i2-1':'一对一的转换（静态NAT）',
			'i2-2':'多对一的转换（端口地址转换PAT）',
			'i2-3':'服务器转换',
			'i2-4':'多对多的转换（动态NAT）',
		}
	},

	'i4':'静态路由',

	'i3': {
		'链路状态检测': {
			'i3-1': {
				'双向转发检测（BFD）': {
					'i3-1-1':'静态检测',
					'i3-1-2':'静态单臂回声检测',
					'i3-1-3':'调整BFD参数',
				}
			},
			'i3-2':'网络质量分析（NQA）',
		}
	},

	'i6':'单播反向路径转发（uRPF）',
};

tree_switch = {
	'i1':'基本命令',

	'i2': {
		'接口模式': {
			'i2-1':'创建vlan',
			'i2-2':'access',
			'i2-3':'trunk',
			'i2-4':'hybrid',
			'i2-5': {
				'动态vlan划分方式': {
					'i2-5-1': '基于mac地址划分',
					'i2-5-2': '基于IP地址划分',
					'i2-5-3': '基于策略地址划分',
				}
			}
		}
	},

	'i3':'端口隔离',

	'i4': {
		'扩展vlan': {
			'i4-1':'Mux-vlan',
			'i4-2':'Super-vlan',
			'i4-3':'管理vlan',
		}
	},

	'i5': {
		'vlan间通信': {
			'i5-1':'单臂路由法',
			'i5-2':'三层交换机法',
			'i5-3':'vlan连接外部',
		}
	},

	'i6': {
		'镜像': {
			'i6-1': {
				'端口镜像': {
					'i6-1-1':'SPAN',
					'i6-1-2':'RSPAN',
					'i6-1-3':'ERSPAN',
				}
			},

			'i6-2': {
				'vlan镜像': {
					'i6-2-1':'SPAN',
					'i6-2-2':'RSPAN',
				}
			},

			'i6-3': {
				'mac地址镜像': {
					'i6-3-1':'SPAN',
					'i6-3-2':'RSPAN',
				}
			},

			'i6-4':'查看命令',
		}
	},

	'i7': {
		'生成树协议（STP，RSTP，MSTP）': {
			'i7-1':'基础配置',
			'i7-2':'根桥防护与环路防护',
			'i7-3':'边缘端口误连接交换机的处理机制',
		}
	},

	'i8':'链路聚合',

	'i9':'虚拟路由冗余协议（VRRP）',

	'i10': {
		'局域网安全': {
			'i10-1':'端口安全',
			'i10-2':'dhcp snooping',
			'i10-3':'动态ARP监控（DAI）',
			'i10-4':'IP Source guard',
		}
	},
};

tree_vpn = {
	'i2': {
		'L2L IPSec VPN': {
			'i2-1': {
				'静态 L2L IPsec VPN': {
					'i2-1-1':'配置IKE安全提议',
					'i2-1-2':'配置IKE对等体',
					'i2-1-3':'配置IPsec安全提议',
					'i2-1-4':'定义感兴趣流量（用扩展ACL匹配）',
					'i2-1-5':'配置配置IPsec策略',
					'i2-1-6':'配置配置IPsec应用到接口<br />　　　（外网接口）',
				}
			},

			'i2-2': {
				'动态 L2L IPsec VPN': {
					'i2-2-1': {
						'VRP V200R006之前配置': {
							'i2-2-1-1':'地址变化端',
							'i2-2-1-2':'固定公有地址端',
								'i2-2-1-2-1':'配置IKE安全提议',
								'i2-2-1-2-2':'配置IKE对等体',
								'i2-2-1-2-3':'配置IPsec安全提议',
								'i2-2-1-2-4':'配置IPsec策略模板',
								'i2-2-1-2-5':'创建IPsec策略，<br />　　　调用策略模版',
								'i2-2-1-2-6':'配置配置IPsec应用到接口<br />　　　（外网接口）',
						}
					},

					'i2-2-2': {
						'VRP V200R006及之后': {
							'i2-2-2-2-1':'配置IKE安全提议',
							'i2-2-2-2-2':'配置IKE对等体',
							'i2-2-2-2-3':'配置IPsec安全提议',
							'i2-2-2-2-4':'配置IPsec策略模板',
							'i2-2-2-2-5':'创建IPsec策略，<br />　　　调用策略模版',
							'i2-2-2-2-6':'配置配置IPsec应用到接口<br />　　　（外网接口）',
						}
					},

				}
			},

			'i2-3': {
				'配置扩展功能': {
					'i2-3-1': '原始报文信息预提取功能',
					'i2-3-2':'反向路由注入（RRI）',
					'i2-3-3':'修改IKE sa有效期',
					'i2-3-4': {
						'修改IPSec sa有效期': {
							'i2-3-4-1':'全局生效',
							'i2-3-4-2':'某个普通IPSec策略生效',
							'i2-3-4-3':'某个IPSec策略模版生效',
						}
					},
					'i2-3-5':'NAT keepalive',
	 				'i2-3-6':'死亡对等体检测（DPD）',
				}
			},
		}
	},

	'i3':{
		'Efficient VPN': {
			'i3-1': {
				'Server端配置': {
					'i3-1-1':'配置IP地址池',
					'i3-1-2':'配置要推送的资源',
					'i3-1-3':'配置IKE安全提议',
					'i3-1-4':'配置IKE对等体',
					'i3-1-5':'配置IPsec安全提议',
					'i3-1-6':'配置IPsec策略模板',
					'i3-1-7':'创建IPsec策略，调用策略模版',
					'i3-1-8':'配置配置IPsec应用到接口<br />　　　（外网接口）',
				}
			},

			'i3-2': {
				'Remote端配置': {
					'i3-2-1':'定义感兴趣流量（用扩展ACL匹配）',
					'i3-2-2':'配置efficient vpn策略',
					'i3-2-3':'将efficient vpn策略应用到接口',
				}
			},
		}
	},

	'i5': {
		'GRE over IPSec': {
			'i5-1':'GRE相关设置',
			'i5-2':'配置IKE安全提议',
			'i5-3':'配置IKE对等体',
			'i5-4':'配置IPsec安全提议',
			'i5-5':'配置IPsec安全框架',
			'i5-6':'将IPsec安全框架应用到Tunnel接口',
		}
	},

	'i6': {
		'DSVPN': {
			'i6-1': {
				'HUB配置': {
					'i6-1-1':'配置mGRE',
					'i6-1-2':'配置NHRP',
				}
			},

			'i6-2': {
				'SPOKE配置': {
					'i6-2-1':'配置mGRE',
					'i6-2-2':'配置NHRP',
				}
			},

			'i6-3': {
				'IPSec配置': {
					'i6-3-1':'配置IKE安全提议',
					'i6-3-2':'配置IKE对等体',
					'i6-3-3':'配置IPsec安全提议',
					'i6-3-4':'配置IPsec安全框架',
					'i6-3-5':'将IPsec安全框架应用到<br />　　　Tunnel接口',
				}
			},

			'i6-4': {
				'normal模式': {
					'i6-4-1':'RIP',
					'i6-4-2':'OSPF',
				}
			},

			'i6-5': {
				'shortcut模式': {
					'i6-5-1':'RIP',
					'i6-5-2':'OSPF',
				}
			},
		}
	},
};