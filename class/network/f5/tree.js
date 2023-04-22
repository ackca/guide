tree_ltm_basic = {
	"i1":"LTM基本概念",
	"i2":{
		"组网方案":{
			"i2-1":{
				"旁挂（单臂）部署":{
					"i2-1-1":"三角传输（nPath）模式",
					"i2-1-2":"SNAT模式",
					"i2-1-3":"服务器网关模式",
				}
			},
			"i2-2":"串联组网模式",
		}
	},

	"i3":{
		"负载均衡方式":{
			"i3-1":"基于 Node / Member 区别",
			"i3-2":"Round Robin",
			"i3-3":"Ratio(member/node)",
			"i3-4":"Dynamic Ratio(member/node)",
			"i3-5":"Fastest(node/application)",
			"i3-6":"Least Connections(member/node)",
			"i3-7":"Weighted Least 　　　Connections(member/node)",
			"i3-8":"Ratio Least 　　　Connections(member/node)",
			"i3-9":"Observed(member/node)",
			"i3-10":"Predictive(member/node)",
			"i3-11":"Least Sessions",
		}
	},
}

tree_bigip = {
	"i1":{
		"设备初始化":{
			"i1-1":{
				"底层初始化":{
					"i1-1-1":"默认方式",
					"i1-1-2":"CLI方式初始化",
					"i1-1-3":"图形化向导方式初始化",
				}
			},
			"i1-2":"GUI加载授权",
			"i1-3":"GUI初始化",
		}
	},

	"i2":{
		"基础网络配置":{
			"i2-1":"配置vlan",
			"i2-2":"配置接口IP",
			"i2-3":{
				"配置路由":{
					"i2-3-1":"配置静态路由",
					"i2-3-2":"配置OSPF",
				}
			},
			"i2-4":{
				"NAT":{
					"i2-4-1":"一对一静态NAT",
					"i2-4-2":{
						"PAT":{
							"i2-4-2-1":"配置PAT",
							"i2-4-2-2":"调整被转换流量类型",
						}
					},
					"i2-4-3":"NAT相关系统配置",
				}
			},
			"i2-5":"路由转发的virutal server",
		}
	},
	"i3":{
		"基本的入站负载均衡配置":{
			"i3-1":{
				"配置node":{
					"i3-1-1":"配置默认的节点监控策略",
					"i3-1-2":"配置节点",
				}
			},
			"i3-2":"配置pool",
			"i3-3":"配置virtual server",
		}
	},

	"i8":{
		"负载均衡方式相关配置":{
			"i8-1":"基于比例的最小连接",
			"i8-2":"pool member分组启用",
		}
	},

	"i9":"自定义健康检查策略",

	"i4":{
		"会话保持":{
			"i4-1":"源IP地址",
			"i4-2":{
				"插入cookie":{
					"i4-2-1":"默认cookie",
					"i4-2-2":"自定义cookie",
				}
			},
			"i4-3":"使用已存在的cookie 　　　（Cookie Hash）",
		}
	},

	"i10":{
		"应用优化":{
			"i10-1":{
				"TCP优化":{
					"i10-1-1":"推荐profile选择",
					"i10-1-2":"长连接修改",
				}
			},
			"i10-2":"HTTP优化",
		}
	},

	"i5":{
		"HTTPS相关配置":{
			"i5-1":{
				"证书相关配置":{
					"i5-1-1":"申请并导入个人证书",
					"i5-1-2":"导入已存在的证书",
					"i5-1-3":"个人证书关联对应的根证书",
				}
			},
			"i5-2":{
				"SSL卸载":{
					"i5-2-1":"创建SSL Client profile",
					"i5-2-2":"修改virtual server相应配置",
				}
			},
			"i5-3":{
				"服务器侧SSL":{
					"i5-3-1":"使用域名关联服务器",
					"i5-3-2":{
						"配置SSL服务器侧profile":{
							"i5-3-2-1":"仅校验服务器证书的profile",
							"i5-3-2-2":"双向校验证书的profile",
						}
					},
					"i5-3-3":"修改virtual server相应配置",
				}
			},
			"i5-4":{
				"SSL重定向":{
					"i5-4-1":"配置重定向策略",
					"i5-4-2":"关联策略到virtual server",
				}
			},
		}
	},
	"i6": {
		"WAF": {
			"i6-1":"启用WAF功能",
			"i6-2":"配置并调用策略",
		}
	},
	"i7": {
		"HA": {
			"i7-1":"配置HA相关接口",
			"i7-2":"向HA组内添加设备",
			"i7-3":"配置Failover",
			"i7-4":"配置接口监控",
			"i7-5":"配置浮动IP",
		}
	},
}
