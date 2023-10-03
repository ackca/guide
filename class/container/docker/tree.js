tree_basic = {
	"i1":"安装docker",
	"i2": {
		"镜像相关配置":{
			"i2-1":"从镜像docker hub下载镜像",
			"i2-2":"查看本地镜像",
			"i2-3":"删除镜像",
			"i2-4":"上传镜像到docker hub",
		}
	},
	"i3": {
		"容器相关配置":{
			"i3-1":{
				"基本操作":{
					"i3-1-1":"运行容器",
					"i3-1-2":"启动/停止/暂停 容器",
					"i3-1-3":"进入容器命令行",
					"i3-1-4":"查看容器信息",
					"i3-1-5":"比较容器与镜像差异",
					"i3-1-6":"查看容器输出",
					"i3-1-7":"复制文件",
					"i3-1-8":"退出但不停止容器",
				}
			},
			"i3-2":{
				"查看容器详细信息":{
					"i3-2-1":"直接查看",
					"i3-2-2":{
						"通过jq按项查看":{
							"i3-2-2-1":"安装jq",
							"i3-2-2-2":"使用jq",
						},
					},
				}
			},
			"i3-3":"删除容器",
			"i3-5":{
				"映射端口":{
					"i3-5-1":"映射容器端口到宿主机",
					"i3-5-2":"查看映射信息",
				}
			},
			"i3-6":{
				"资源限制":{
					"i3-6-1":"限制内存使用量",
					"i3-6-2":"限制CPU使用量",
				}
			},
			"i3-7":{
				"数据管理":{
					"i3-7-1":{
						"查看数据卷":{
							"i3-7-1-1":"通过jq查看某个容器的数据卷",
							"i3-7-1-2":"查看所有数据卷",
							"i3-7-1-3":"查看数据卷详情",
						}
					},
					"i3-7-2":"删除数据卷",
					"i3-7-3":{
						"创建数据卷":{
							"i3-7-3-1":"匿名挂载",
							"i3-7-3-2":"具名挂载",
							"i3-7-3-3":"实例",
						}
					},
				}
			},
		}
	},
	"i6":{
		"容器镜像导出导入":{
			"i6-1":"将容器转化为镜像",
			"i6-2":"重命名镜像",
			"i6-3":"将容器导出为文件",
			"i6-4":"将容器文件导入为镜像",
			"i6-5":"将镜像导出为文件",
			"i6-6":"将镜像导出为文件",
		}
	},
	"i4":{
		"Dockerfile":{
			"i4-1":"FROM",
			"i4-2":"LABEL",
			"i4-3":"RUN",
			"i4-4":"WORKDIR",
			"i4-5":"COPY",
			"i4-6":"ADD",
			"i4-7":"ENV",
			"i4-8":"VOLUME",
			"i4-9":"EXPOSE",
			"i4-10":"CMD",
			"i4-11":"ENTRYPOINT",
			"i4-12":"生成镜像",
		}
	},
	"i5": {
		"网络配置":{
			"i5-1":"创建自定义网络",
			"i5-2":"创建容器到自定义网络",
			"i5-3":"允许容器连接到其它网络",
			"i5-4":{
				"查看相关信息":{
					"i5-4-1":"查看网络",
				}
			},
		}
	},
}

tree_compose = {
	"i1":"安装 docker-compose",
	"i2":"docker-compose命令",
	"i3":{
		"yaml文件配置":{
			"i3-1":"version",
			"i3-2":"services",
			"i3-3":"container_name",
			"i3-4":"image",
			"i3-5":"build",
			"i3-6":"environment",
			"i3-7":"ports",
			"i3-8":"networks",
			"i3-9":"restart",
			"i3-10":"depends_on",
			"i3-11":"command",
			"i3-12":"secrets",
		}
	}
}

tree_swarm = {
	"i1":{
		"配置docker集群":{
			"i1-1":"安装 docker swarm",
			"i1-2":"配置docker集群",
			"i1-3":"查看docker集群",
		}
	},
	"i2":{
		"运行容器":{
			"i2-1":"通过命令运行单个容器",
			"i2-2":{
				"通过配置文件部署":{
					"i2-2-1":"运行项目",
					"i2-2-2":"查看项目",
				}
			},
			"i2-3":{
				"调整容器":{
					"i2-3-1":"调整容器的副本数量",
					"i2-3-2":"更新容器镜像",
				}
			},
		}
	},
	"i3":{
		"配置文件中增加的命令":{
			"i3-1": {
				"deploy": {
					"i3-1-1":{
						"mode": {
							"i3-1-1-1": "replicated",
							"i3-1-1-2": "global",
						}
					},
					"i3-1-2":"replicas",
					"i3-1-3":"restart_policy",
				},
			},
			"i3-2":"networks",
		}
	},
	"i4":{
		"docker secret":{
			"i4-1":{
				"创建docker secret":{
					"i4-1-1":"基于文件",
					"i4-1-2":"基于标准输入",
				}
			},
			"i4-2":"查看 secret",
			"i4-3":"删除 secret",
			"i4-4":{
				"使用 secret":{
					"i4-4-1":"配置文件中使用",
					"i4-4-2":"直接启动容器",
				}
			},
		}
	},
}

tree_private_hub = {
	"i2":{
		"harbar":{
			"i2-1":"安装harbar",
			"i2-2":"上传/下载镜像",
			}
	},
	"i1":{
		"docker-registry":{
			"i1-1":"安装docker-registry",
			"i1-2":"查看仓库中镜像",
			"i1-3":"上传/下载镜像",
		}
	},
}