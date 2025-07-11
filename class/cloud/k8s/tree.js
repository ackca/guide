const kubeadm_setup = {
	"i1": {
		"前期准备": {
			"i1-1": "系统组件配置",
			"i1-2": "k8s组件配置",
		}
	},

	"i2": {
		"部署k8s集群": {
			"i2-1": "部署k8s集群",
			"i2-2": "重新生成添加Master节点命令",
			"i2-3": "重新生成添加Worker节点命令",
		}
	},

	"i3": {
		"部署Calico网络": {
			"i3-1": "官方资源",
			"i3-2": "初始化部署",
			"i3-3": "静态分配置各个节点的pod子网",
			"i3-4": "测试网络",
		}
	},

};

const basic = {
	"i1": {
		"基本命令": {
			"i1-1": "查看基本信息",
			"i1-2": "节点标签配置",
		}
	},
	"i2": {
		"部署应用": {
			"i2-1": {
				"部署pod": {
					"i2-1-1": "Deployment方式",
					"i2-1-2": "DaemonSet方式",
				}
			},
			"i2-2": "部署Service",
			"i2-3": "部署Ingress",
			"i2-4": "配置DNS",
		}
	},
}

const orchestration = {
	"i1": "资源限制",
	"i2": {
		"亲和与反亲和": {
			"i2-4": {
				"准备配置亲和": {
					"i2-4-1": "查看相关信息",
					"i2-4-2": "亲和命令",
				}
			},
			"i2-1": {
				"节点亲和": {
					"i2-1-1": "方法一：配置节点选择",
					"i2-1-2": "方法二：配置亲和",
				}
			},
			"i2-2": {
				"pod亲和": {
					"i2-2-1": "创建起始pod",
					"i2-2-2": "创建后续pod",
				}
			},
			"i2-3": "pod反亲和",
		}
	},
	"i3": {
		"污点": {
			"i3-1": {
				"创建污点": {
					"i3-1-1": "配置文件方式",
					"i3-1-2": "命令行方式方式",
				}
			},
			"i3-2": "查看污点",
			"i3-3": "删除污点",
			"i3-4": "pod容忍污点",
		},
	},
	"i5": {
		"configmap": {
			"i5-1": "创建configmap",
			"i5-2": {
				"查看configmap": {
					"i5-2-1": "查看configmap列表",
					"i5-2-2": "查看某个configmap内容",
				}
			},
			"i5-3": {
				"修改configmap": {
					"i5-3-1": "方法一：删除后重新建立",
					"i5-3-2": "方法二：直接修改",
					"i5-3-3": "方法三：覆盖原始的configmap",
				}
			},
			"i5-4": "pod中使用configmap",
		}
	},
	"i4": {
		"secret": {
			"i4-1": {
				"创建secret": {
					"i4-1-1": "命令行创建",
					"i4-1-2": "yaml文件方式创建",
				}
			},
			"i4-2": {
				"查看secret": {
					"i4-2-1": "查看secret列表",
					// "i4-2-2":"查看某个configmap内容",
				}
			},
			// "i4-3":{
			// 	"修改configmap":{
			// 		"i4-3-1":"方法一：删除后重新建立",
			// 		"i4-3-2":"方法二：直接修改",
			// 		"i4-3-3":"方法三：覆盖原始的configmap",
			// 	}
			// },
			"i4-4": "pod中使用secret",
		}
	},
	"i6": {
		"存储": {
			"i6-1": {
				"分布式存储ceph": {
					"i6-1-1": "配置新的硬盘",
					"i6-1-2": "安装ceph",
					"i6-1-3": "创建文件系统",
					"i6-1-4": "创建存储类",
					"i6-1-5": "创建pvc",
					"i6-1-6": "等待pvc正常运行",
					"i6-1-7": "创建pod",
				}
			},
			"i6-2": "空目录",
			"i6-3": {
				"NFS": {
					"i6-3-1": "安装NFS程序（所有node）",
					"i6-3-2": "部署 pv",
					"i6-3-3": "部署 pvc",
					"i6-3-4": "部署 pod",
				}
			},
		}
	},
}