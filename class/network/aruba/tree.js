const wireless = {
	"i3": {
		"CLI配置的基本逻辑": {
			"i3-1": {
				"保存配置相关": {
					"i3-1-1": "配置保存后，才能生效",
					"i3-1-2": "提示符出现 ^ ，说明配置被修改",
					"i3-1-3": "查看被更改但未保存的配置",
					"i3-1-4": "放弃更改，不保存配置",
					"i3-1-5": "查看被保存过的配置",
				}
			},
			"i3-2": {
				"路径（设备）间跳转": {
					"i3-2-1": "基于路径跳转",
					"i3-2-2": "基于设备名跳转",
					"i3-2-3": "基于设备IP跳转",
					"i3-2-4": "连接当前路径设备",
				}
			},
		}
	},

	"i1": {
		"初始化MM": {
			"i1-1": "初始化设备",
			"i1-2": "配置vrrp",
			"i1-3": "配置数据同步",
			"i1-4": {
				"配置高可用性": {
					"i1-4-1": "配置高可用性",
					"i1-4-2": "相关查看命令",
				}
			},
			"i1-5": {
				"证书相关配置": {
					"i1-5-1": "配置DNS",
					"i1-5-2": "上传证书",
					"i1-5-3": "修改管理证书",
					"i1-5-4": "配置NTP",
				}
			},
			"i1-6": {
				"加载授权": {
					"i1-6-1": "获取机器码",
					"i1-6-2": "加载授权",
					"i1-6-3": "激活特性",
					"i1-6-4": "预留授权",
					"i1-6-5": "查看授权状态",
				}
			},
			"i1-7": "MM关联控制器",
		}
	},

	"i2": {
		"初始化MC": {
			"i2-1": "初始化设备",
			"i2-2": "配置层次化节点",
			"i2-3": {
				"将控制器停靠到对应位置": {
					"i2-3-1": "停靠到指定位置",
					"i2-3-2": "配置默认停靠位置",
					"i2-3-3": "查看所有路径",
				}
			},
			"i2-4": "查看设备状态",
			"i2-5": "证书相关配置",
			"i2-6": {
				"配置控制器集群": {
					"i2-6-1": "配置集群",
					"i2-6-2": "配置AP的注册IP",
					"i2-6-3": "查看集群状态",
				}
			},
		}
	},

	"i4": {
		"AP关联": {
			"i4-1": {
				"配置CPSec": {
					"i4-1-1": "进入CPSec配置模式",
					"i4-1-2": "启用CPSec（默认）",
					"i4-1-3": "自动为AP颁发证书",
					"i4-1-4": "只为特定的AP自动颁发证书",
					"i4-1-5": "基于IP地址自动颁发证书",
				}
			},
			"i4-2": "配置AP GROUP",
			"i4-3": {
				"AP相关配置": {
					"i4-3-1": "修改AP名",
					"i4-3-2": "修改AP所属AP GROUP",
					"i4-3-3": "GUI中的上述配置",
					"i4-3-4": "AP高级系统配置",
					"i4-3-5": "查看控制器关联的AP信息",
					"i4-3-6": "清空AP配置",
				}
			},
			"i4-4": {
				"option 43 & 60 配置": {
					"i4-4-1": {
						"windows平台": {
							"i4-4-1-1": "创建option 60选项",
							"i4-4-1-2": "添加option 43 & 60",
						}
					},
				}
			},
		}
	},

	"i5": {
		"PSK认证": {
			"i5-1": "配置位置",
			"i5-2": "配置总览",
			"i5-3": {
				"配置详解": {
					"i5-3-1": "配置客户端流量的vlan",
					"i5-3-2": "配置user-role，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对客户端流量进行一定管控",
					"i5-3-3": "配置aaa profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联 认证方式 和 user-role",
					"i5-3-4": "配置wlan ssid-profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wlan相关配置",
					"i5-3-5": "配置virtual-ap，关联上述profile",
					"i5-3-6": "virtual-ap关联到AP group",
				}
			},
		}
	},

	"i6": {
		"mac地址认证": {
			"i6-1": "配置位置",
			"i6-2": "配置总览",
			"i6-3": {
				"配置详解": {
					"i6-3-1": "配置mac地址",
					"i6-3-2": "配置user-role，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用于通过认证的用户流量规则",
					"i6-3-3": "配置客户端流量的vlan",
					"i6-3-4": "配置aaa server-group，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指定数据源为本地用户",
					"i6-3-5": "配置aaa profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;认证相关规则配置",
					"i6-3-6": "配置wlan ssid-profile，指定SSID",
					"i6-3-7": "配置virtual-ap，关联相关内容",
					"i6-3-8": "virtual-ap关联到AP group",
				}
			},
		}
	},

	"i8": {
		"内部网页认证": {
			"i8-1": "配置位置",
			"i8-2": "修改认证页面的证书（GUI）",
			"i8-3": "配置总览",
			"i8-4": {
				"配置详解": {
					"i8-4-4": "启用重定向功能",
					"i8-4-2": "配置客户端流量的vlan",
					"i8-4-3": {
						"配置user-role，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;限制客户端访问范围": {
							"i8-4-3-1": "配置不允许访问部分",
							"i8-4-3-2": "配置不允许访问部分的ACL",
							"i8-4-3-3": "配置不允许访问部分user-role",
						}
					},
					"i8-4-5": "配置aaa server-group，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指定数据源为本地用户",
					"i8-4-6": "配置认证规则",
					"i8-4-7": "配置认证前权限的user-role",
					"i8-4-8": "配置aaa profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联认证前权限user-role",
					"i8-4-9": "配置wlan ssid-profile，指定SSID",
					"i8-4-10": "配置virtual-ap，关联相关内容",
					"i8-4-11": "virtual-ap关联到AP group",
				}
			},
		}
	},

	"i7": {
		"Remote AP": {
			"i7-1": "配置位置",
			"i7-2": {
				"RAP关联前准备": {
					"i7-2-1": "创建RAP所属AP group",
					"i7-2-2": "创建RAP的地址池",
					"i7-2-3": "配置地址池用途为RAP",
					"i7-2-4": "添加RAP的mac地址，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并划入对应AP group",
				}
			},
			"i7-3": "“胖AP”转换为RAP",
			"i7-4": {
				"查看RAP关联信息": {
					"i7-4-1": "查看AP关联",
					"i7-4-2": "查看RAP和控制器间的IPSec",
				}
			},
			"i7-5": {
				"配置连接到中心的WLAN": {
					"i7-5-1": "配置总览",
					"i7-5-2": {
						"配置详解": {
							"i7-5-2-8": "配置客户端流量的vlan",
							"i7-5-2-1": "配置中心网络地址",
							"i7-5-2-2": "配置用于隧道分割的ACL",
							"i7-5-2-3": "配置user-role",
							"i7-5-2-4": "配置aaa profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联 认证方式 和 user-role",
							"i7-5-2-5": "配置wlan ssid-profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wlan相关配置",
							"i7-5-2-6": "配置virtual-ap，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联上述profile",
							"i7-5-2-7": "virtual-ap关联到AP group",
						}
					},
				}
			},
			"i7-6": {
				"配置家中上网的WLAN": {
					"i7-6-1": "配置总览",
					"i7-6-2": {
						"配置详解": {
							"i7-6-2-1": "配置user-role",
							"i7-6-2-2": "配置aaa profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联 认证方式 和 user-role",
							"i7-6-2-3": "配置wlan ssid-profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wlan相关配置",
							"i7-6-2-4": "配置virtual-ap，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联上述profile",
							"i7-6-2-5": "virtual-ap关联到AP group",
						}
					},
				}
			},
		}
	},

	"i12": {
		"MultiZone": {
			"i12-1": {
				"PrimaryZone配置": {
					"i12-1-1": "配置multizone profile",
					"i12-1-2": "AP group关联multizone profile",
				}
			},
			"i12-2": "DataZone配置",
		}
	},

	"i9": {
		"关联外部aaa服务器": {
			"i9-1": {
				"Radius服务器": {
					"i9-1-1": "配置nas-ip",
					"i9-1-2": "配置Radius服务器",
				}
			},
		}
	},

	"i10": {
		"802.1x": {
			"i10-1": "配置位置",
			"i10-2": "配置总览",

			"i10-3": {
				"配置详解": {
					"i10-3-1": "配置客户端流量的vlan",
					"i10-3-2": "配置默认user-role，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过认证用户的默认user-role",
					"i10-3-3": "配置802.1x认证方式",
					"i10-3-4": "配置aaa server-group，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指定认证服务器为ClearPass",
					"i10-3-5": "配置aaa profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联认证相关规则",
					"i10-3-6": "配置wlan ssid-profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WLAN相关配置",
					"i10-3-7": "配置virtual-ap，关联相关内容",
					"i10-3-8": "virtual-ap关联到AP group",
				}
			},

			"i10-4": {
				"配置download user-role": {
					"i10-4-1": "Radius服务器中关联<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;download user-role用户",
					"i10-4-2": "配置 aaa profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;允许download user-role",
				}
			},
		}
	},

	"i11": {
		"中心网页认证": {
			"i11-1": "配置位置",
			"i11-2": "配置总览",
			"i11-3": {
				"配置详解": {
					"i11-3-1": "启用重定向功能",
					"i11-3-2": "配置客户端流量的vlan",
					"i11-3-3": {
						"配置user-role，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;限制客户端访问范围": {
							"i11-3-3-1": "配置不允许访问部分",
							"i11-3-3-2": "配置不允许访问部分的ACL",
							"i11-3-3-3": "配置不允许访问部分user-role",
						}
					},
					"i11-3-4": "配置ClearPass地址",
					"i11-3-5": "配置aaa server-group，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指定认证服务器为ClearPass",
					"i11-3-6": "配置认证规则",
					"i11-3-7": "配置认证前权限的user-role",
					"i11-3-8": "配置aaa profile，<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联认证前权限user-role",
					"i11-3-9": "配置wlan ssid-profile，指定SSID",
					"i11-3-10": "配置virtual-ap，关联相关内容",
					"i11-3-11": "virtual-ap关联到AP group",
				}
			},
		}
	},

	"i13": {
		"辅助功能": {
			"i13-1": "查看AP发射的WLAN",
			"i13-2": {
				"查看/管理客户端": {
					"i13-2-1": "GUI",
					"i13-2-2": "CLI",
				}
			},
		}
	}
};

const wireless_basic = {
	"i1": {
		"无线架构": {
			"i1-1": "架构基础",
			"i1-2": "层次化配置",
		}
	},
	"i2": {
		"AP关联": {
			"i2-1": "1：AP静态配置",
			"i2-2": "2：通过DHCP option 43 & 60 发现",
			"i2-3": "3：通过ADP协议发现",
			"i2-4": "4：通过域名发现",
		}
	},

	"i4": {
		"Remote AP": {
			"i4-1": "RAP概述",
			"i4-2": {
				"RAP的网络架构": {
					"i4-2-1": "可连接到中心网络的WLAN",
					"i4-2-2": "连接互联网的WLAN",
				}
			},
		}
	},
};

const clearpass = {
	"i1": {
		"安装&初始化": {
			"i1-1": "安装clearpass",
			"i1-2": "系统初始化",
		}
	},
	"i2": {
		"基础系统配置": {
			"i2-3": "登录方式",
			"i2-4": "底层查看网络信息",
			"i2-5": "启用审计功能",
			"i2-1": "配置域名",
			"i2-2": "配置NTP",
		}
	},

	"i8": "配置基本策略，方便客户端设备测试",

	"i3": {
		"域与证书配置": {
			"i3-1": "加载根证书",
			"i3-2": "上传（替换）证书",
			"i3-3": "禁用HTTPS ECC证书",
			"i3-4": "加入域",
			"i3-5": "建立和域的关联",
		}
	},

	"i4": {
		"ND（Network Device）配置": {
			"i4-1": "未配置集群的控制器，修改关联IP",
			"i4-2": "添加设备",
		}
	},

	"i5": {
		"配置本地用户（组）": {
			"i5-1": "配置本地用户组",
			"i5-2": "配置本地用户",
		}
	},

	"i6": {
		"802.1x": {
			"i6-1": "本地组映射到AD组",
			"i6-2": "配置授权结果",
			"i6-3": "配置授权条件",
			"i6-4": "配置Service",
			"i6-5": {
				"配置download user-role": {
					"i6-5-1": "创建download user-role用户",
					"i6-5-2": "配置授权结果",
				}
			},
		}
	},

	"i7": {
		"中心网页认证": {
			"i7-1": "配置登录页面",
			"i7-2": "配置授权结果",
			"i7-3": "配置授权条件",
			"i7-4": "配置Service",
		}
	},
}