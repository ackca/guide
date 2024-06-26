const vsphere7 = {
	"i9": {
		"安装vCenter Server": {
			"i9-1": "安装文件路径",
			"i9-2": "第1阶段：部署vCenter Server",
			"i9-3": "第2阶段：设置vCenter Server",
		}
	},

	"i1": {
		"初始化": {
			"i1-1": "新建数据中心",
			"i1-2": "新建集群",
			"i1-3": "添加主机",
		}
	},

	"i11": {
		"虚拟交换机相关逻辑": {
			"i11-1": "基本原理",
			"i11-2": "网卡类型",
			"i11-3": {
				"端口组的相关设置": {
					"i11-3-1": "安全",
				}
			},
		}
	},

	"i2": {
		"使用标准交换机": {
			"i2-1": "配置新链路，连接到外部网络",
			"i2-2": "配置VMkernel网络适配器",
		}
	},

	"i3": {
		"使用分布式交换机": {
			"i3-1": {
				"配置新链路，连接到外部网络": {
					"i3-1-1": "创建分布式交换机",
					"i3-1-2": "向分布式交换机添加主机<br />　　　并连接到外部网络",
					"i3-1-3": "配置端口组",
				}
			},
			"i3-2": {
				"使用LACP链路连接外部网络": {
					"i3-2-1": "配置LACP",
					"i3-2-2": "将主机网络改为LACP方式冗余",
					"i3-2-3": "修改端口组的上行链路",
				}
			},
			"i3-3": {
				"配置VMkernel网络适配器": {
					"i3-3-1": "新建VMkernel网络适配器",
					"i3-3-2": "迁移原有VMkernel网络适配器",
				}
			},
		}
	},

	"i8": {
		"使用iSCSI存储": {
			"i8-1": "配置iSCSI网络连接",
			"i8-2": "配置iSCSI适配器",
			"i8-3": "添加iSCSI存储",
			"i8-4": "配置多路径",
		}
	},

	"i4": {
		"资源限制与预留": {
			"i4-1": "单个虚拟机配置",
			"i4-2": "通过资源池配置",
		}
	},

	"i5": "配置EVC",

	"i6": {
		"配置DRS": {
			"i6-1": "启用DRS",
			"i6-2": "配置虚拟机/主机组",
			"i6-3": "配置虚拟机/主机组规则",
		}
	},

	"i7": "配置高可用性",

	"i10": {
		"其它功能": {
			"i10-1": "清除克隆产生windows的ID类信息",
			"i10-2": "vCenter管理页面",
			"i10-3": "vsphere主机，命令行页面",
		}
	},
};

const nsxt3 = {
	"i1": "安装NSX-T Manager",
	"i2": "添加计算管理器（vCenter）",
	"i3": {
		"配置控制集群": {
			"i3-1": "添加控制器",
			"i3-2": "配置控制器集群虚拟IP",
		}
	},
	"i5": {
		"基本网络配置": {
			"i5-1": "配置IP地址池",
			"i5-2": "配置分段",
			"i5-3": "配置NAT",
			"i5-4": {
				"配置DHCP": {
					"i5-4-1": "配置DHCP",
					"i5-4-2": "将DHCP配置应用到分段",
				}
			},
		}
	},
	"i4": "配置传输区域",
	"i6": "配置上行链路配置文件",
	"i7": "配置主机传输节点",
	"i9": {
		"配置Edge集群": {
			"i9-1": "配置Edge节点",
			"i9-2": "配置Edge集群",
		}
	},
	"i10": {
		"配置T0路由器": {
			"i10-2": "创建T0路由器",
			"i10-3": "配置上联接口地址",
			"i10-4": {
				"配置路由与外部连接": {
					"i10-4-1": "使用BGP",
				}
			},
		}
	},
	"i11": {
		"配置T1路由器": {
			"i11-1": "创建T1路由器",
			"i11-2": "配置下联地址",
			"i11-3": "将本地路由通告给T0",
		}
	},
	"i12": {
		"配置负载均衡": {
			"i12-1": "配置负载均衡",
			"i12-2": "配置服务器池",
			"i12-3": "配置虚拟服务器",
			"i12-4": {
				"处理路由": {
					"i12-4-1": "T1路由器通告虚拟地址",
					"i12-4-2": "T0路由器重分发虚拟地址",
				}
			},
		}
	},
	"i13": {
		"配置防火墙": {
			"i13-1": "配置南北向防火墙",
			"i13-2": "配置东西向防火墙",
		}
	},
	"i14": {
		"虚拟机分类分组": {
			"i14-1": "虚拟机配置标记",
			"i14-2": "配置虚拟机组",
		}
	},
}

const sdwan = {
	"i1": {
		"初始化配置": {
			"i1-1": "登录地址",
			"i1-2": "明确VCO地址",
			"i1-3": "配置邮件相关参数（可选）",
		}
	},
	"i2": {
		"添加VCG": {
			"i2-1": "添加VCG",
			"i2-2": "激活VCG",
			"i2-3": "激活后状态",
		}
	},
	"i3": {
		"创建客户": {
			"i3-1": "创建操作员配置文件",
			"i3-2": "创建客户",
		}
	},
	"i4": {
		"Edge的各类准备": {
			"i4-1": "创建集群",
			"i4-2": {
				"创建各种Edge的配置文件": {
					"i4-2-1": "Hub类型",
					"i4-2-2": "Branch类型",
					"i4-2-3": "Edge使用OSPF的预定义",
				},
			},
			"i4-3": "初始化Edge",
		}
	},
	"i5": {
		"Edge上线": {
			"i5-1": "添加Edge",
			"i5-2": "激活Edge",
			"i5-3": "激活后状态",
		}
	},
	"i6": {
		"Edge基础配置": {
			"i6-1": "接口配置",
			"i6-2": "WAN配置",
			"i6-3": {
				"路由配置": {
					"i6-3-1": "静态路由",
					"i6-3-2": "OSPF",
					"i6-3-3": "BGP",
				}
			},
			"i6-4": {
				"集群 / HA 配置": {
					"i6-4-1": "配置集群",
					"i6-4-2": "配置HA",
				}
			},
		}
	},
	"i7": {
		"NVS": {
			"i7-1": "创建NVS",
			"i7-2": "Edge关联NVS",
			"i7-3": "查看NVS状态",
		}
	},
	"i8": {
		"Segment": {
			"i8-1": "创建Segment",
			"i8-2": "配置文件关联Segment",
			"i8-3": "接口关联Segment",
		}
	},
	"i9": "调整流量路径",
	"i10": {
		"BackHaul": {
			"i10-1": {
				"站点直接通过本地出口连接互联网": {
					"i10-1-1": "配置VCG",
					"i10-1-2": "配置Edge",
				}
			},
			"i10-2": "分支通过overlay到hub，<br />　　　再从hub连接互联网",
		}
	},
	"i11": {
		"防火墙": {
			"i11-1": "配置地址对象",
			"i11-2": "配置服务对象",
			"i11-3": "配置防火墙策略",
		}
	},

}