tree_redhat_basic = {
	"i1":{
		"系统工作命令":{
			"i1-1":"echo – 输出字符串或提取Shell变量的值",
			"i1-2":"date – 查看及设置系统的时间日期",
			"i1-11":"timedatectl – 查看及设置系统的时间日期",
			"i1-3":"reboot – 重启系统",
			"i1-4":"poweroff – 关闭系统",
			"i1-5":"wget – 下载网络文件",
			"i1-6":"ps – 查看系统中的进程状态",
			"i1-12":"pstree – 以树状图的形式展示进程之间的关系",
			"i1-7":"top – 动态地监视进程活动与系统负载等信息",
			"i1-8":"pidof – 查询进程的 PID 值",
			"i1-9":"kill – 终止 PID 的服务进程",
			"i1-10":"killall – 终止某个服务所对应的全部进程"
		}
	},
	"i2":{
		"系统状态检测命令":{
			"i2-1":"ifconfig – 获取网卡配置与网络状态等信息",
			"i2-2":"uname – 获取网卡配置与网络状态等信息",
			"i2-3":"uptime – 查看系统的负载信息",
			"i2-4":"free – 查看当前系统中内存的使用量信息",
			"i2-5":"who – 查看当前登入主机的用户终端信息",
			"i2-6":"last – 查看所有系统的登录记录",
			"i2-9":"ping – 测试主机之间的网络连通性",
			"i2-10":"tracepath – 查看数据包到达目的主机时途中经过的所有路由信息",
			"i2-11":"netstat – 查看网络连接相关信息",
			"i2-7":"history – 查看历史执行的命令",
			"i2-8":"sosreport – 收集系统配置及架构信息"
		}
	},
	"i3":{
		"查找定位文件命令":{
			"i3-1":"pwd – 查看用户当前所处的工作目录",
			"i3-2":"cd – 切换工作目录",
			"i3-3":"ls – 查看目录中的文件信息",
			"i3-4":"tree – 以树状图的形式列出目录内容及结构",
			"i3-5":"find – 在文本中执行关键词搜索",
			"i3-9":"grep – 在文本中执行关键词搜索",
			"i3-6":"locate – 按照名称快速搜索文件所对应的位置",
			"i3-7":"whereis – 按照名称快速搜索二进制程序（命令）、源代码以及帮助文件所对应的位置",
			"i3-8":"which – 指定名称快速搜索二进制程序（命令）所对应的位置",
		}
	},
	"i4":{
		"文本文件编辑命令":{
			"i4-1":"cat – 查看纯文本文件（内容较少的）",
			"i4-2":"more – 查看纯文本文件（内容较多的）",
			"i4-3":"head – 查看纯文本文档的前n行",
			"i4-4":"tail – 查看纯文本文档的后n行或持续刷新内容",
			"i4-5":"tr – 改变文本文件中的内容",
			"i4-6":"wc – 统计指定文本的行数、字数、字节数",
			"i4-7":"stat – 查看文件的具体存储信息和各类时间信息",
			"i4-8":"cut – 按 列 提取文本中的字符",
			"i4-9":"diff – 比较多个文本文件的差异",
			"i4-10":"uniq – 去除文本中连续的重复行",
			"i4-11":"sort – 命令用于对文本内容进行再排序",
		}
	},
	"i5":{
		"文件目录管理命令":{
			"i5-1":"touch – 创建空白文件或修改文件的时间",
			"i5-2":"mkdir – 创建空白的目录",
			"i5-3":"cp – 复制文件或目录",
			"i5-4":"mv – 剪切（移动）文件或重命名文件",
			"i5-5":"rm – 删除文件或目录",
			"i5-6":"dd – 按指定大小和个数的数据块来复制文件或转换文件",
			"i5-7":"file – 查看文件的类型"
		}
	},
	"i6":{
		"打包压缩命令":{
			"i6-1":"tar – 对文件进行打包压缩或解压",
		}
	},
	"i7":"重定向",
	"i8":{
		"vi/vim文本编辑器":{
			"i8-1":"模式切换",
			"i8-2":"命令模式下，使用的命令",
			"i8-3":"末行模式下，使用的命令",
		}
	},
	"i9":{
		"用户身份相关命令":{
			"i9-1":"id – 查看用户的详细信息",
			"i9-2":"useradd – 创建用户账户",
			"i9-3":"groupadd – 创建用户组",
			"i9-4":"usermod – 修改用户的属性",
			"i9-5":"passwd – 修改用户的密码、过期时间等信息",
			"i9-6":"userdel – 删除已有的用户账户",
			"i9-7":"su – 切换用户身份",
			"i9-8":"sudo – 普通用户赋予额外的权限",
		}
	},
	"i10":{
		"文件权限相关命令":{
			"i10-1":{
				"特殊的权限":{
					"i10-1-1":"SUID – 二进制程序的执行者临时拥有所有者的权限",
					"i10-1-2":"SGID – 二进制程序的执行者临时拥有所有组的权限，<br />" +
								"　　　　　　对目录设置时，则目录内新创建的文件自动继承该目录所属组",
					"i10-1-3":"SBIT – 目录中的文件就只能被其所有者删除",
				}
			},
			"i10-4":{
				"chmod – 管理文件权限":{
					"i10-4-1":"缩写方式配置权限",
					"i10-4-2":"数字方式配置权限",
				}
			},
			"i10-5":"chown – 管理文件所属",
			"i10-2":{
				"文件的隐藏属性":{
					"i10-2-1":"chattr – 管理隐藏属性",
					"i10-2-2":"lsattr – 查看隐藏属性",
				}
			},
			"i10-3":{
				"文件访问控制列表":{
					"i10-3-1":"setfacl – 管理文件的ACL权限规则",
					"i10-3-2":"getfacl – 查看文件的ACL权限规则",
				}
			},
		}
	},
};

tree_redhat_service = {
	"i1":"systemctl – 管理系统服务",
	"i2":{
		"网络管理":{
			"i2-1":{
				"编辑网络参数":{
					"i2-1-1":"编辑网络配置文件",
					"i2-1-2":"nmtui – 图形化工具配置网络",
					"i2-1-3":"nmcli – 命令行工具配置网络",
				}
			}
		}
	},
	"i3": {
		"firewalld – 主机防火墙": {
			"i3-1":{
				"普通规则":{
					"i3-1-1":"允许/阻止某端口",
					"i3-1-2":"允许/阻止某服务",
					"i3-1-3":"允许/阻止某协议",
				}
			},
			"i3-2":{
				"查询功能":{
					"i3-2-1":"查看所有规则",
					"i3-2-2":"具体查询某个端口（服务、协议）是否开放",
				}
			},
			"i3-3":{
				"运行 / 永久 配置相互转化":{
					"i3-3-1":"运行 --> 永久",
					"i3-3-2":"永久 --> 运行",
				}
			},
		}
	},
	"i4":{
		"DHCP服务":{
			"i4-1":"安装DHCP服务",
			"i4-2":{
				"配置DHCP服务":{
					"i4-2-1":"DHCPv4",
					"i4-2-2":"DHCPv6",
				}
			},
			"i4-3":{
				"启动并开机启动DHCP服务":{
					"i4-3-1":"DHCPv4",
					"i4-3-2":"DHCPv6",
				}
			},
			"i4-4":{
				"查看 / 管理地址分配":{
					"i4-4-1":"DHCPv4",
					"i4-4-2":"DHCPv6",
				}
			},
		}
	},
	"i5":{
		"DNS服务":{
			"i5-1":"安装DNS服务",
			"i5-2":"配置主配置文件",
			"i5-7":"配置转发器",
			"i5-3":{
				"配置正向解析":{
					"i5-3-1":"配置区域配置文件",
					"i5-3-2":"配置数据配置文件",
				}
			},
			"i5-4":{
				"配置反向解析（IPv4）":{
					"i5-4-1":"配置区域配置文件",
					"i5-4-2":"配置数据配置文件",
				}
			},
			"i5-5":{
				"配置反向解析（IPv6）":{
					"i5-5-1":"生成区域配置文件中的区域名",
					"i5-5-2":"生成数据配置文件的IPv6地址",
					"i5-5-3":"配置区域配置文件",
					"i5-5-4":"配置数据配置文件",
				}
			},
			"i5-6":{
				"配置主从DNS服务器":{
					"i5-6-1":{
						"基本配置（无加密）":{
							"i5-6-1-1":"配置主服务器",
							"i5-6-1-2":"配置从服务器",
						}
					},
					"i5-6-2":{
						"加密传输":{
							"i5-6-2-1":"配置主服务器",
							"i5-6-2-2":"配置从服务器",
						}
					},
				}
			},
		}
	},
	"i6":{
		"证书服务(CFSSL)":{
			"i6-1":"初始化CA",
			"i6-2":"申请证书",
		}
	},
};