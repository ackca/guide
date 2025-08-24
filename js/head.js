const top_menu = `
	<div class="top_navigation">
		<div class="mod-header">
			<div class="cat">
				<div class="cat-box" data-cat="protocol" id="protocol">
					<div class="layout">
						<div class="cat-group">
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<span>七层协议</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/protocol/l7/FTP.html">FTP</a>
											<a href="rootpath/class/protocol/l7/DNS.html">DNS</a>
											<a href="rootpath/class/protocol/l7/DHCPv4.html">DHCPv4</a>
											<a href="rootpath/class/protocol/l7/TFTP.html">TFTP</a>
											<a href="rootpath/class/protocol/l7/NTP.html">NTP/SNTP</a>
											<a href="rootpath/class/protocol/l7/HTTP.html">HTTP</a>
											<a href="rootpath/class/protocol/l7/syslog.html">syslog</a>
											<a href="rootpath/class/protocol/l7/DHCPv6.html">DHCPv6</a>
											<a href="rootpath/class/protocol/l7/VXLAN.html">VXLAN</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>四层协议</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/protocol/l4/ICMPv4.html">ICMPv4</a>
											<a href="rootpath/class/protocol/l4/TCP.html">TCP</a>
											<a href="rootpath/class/protocol/l4/UDP.html">UDP</a>
											<a href="rootpath/class/protocol/l3/IPv6.html#i3-5">IPv6 Fragment header</a>
											<a href="rootpath/class/protocol/l4/ICMPv6.html">ICMPv6</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>三层协议</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/protocol/l3/IPv4.html">IPv4</a>
											<a href="rootpath/class/protocol/l3/ARP.html">ARP</a>
											<a href="rootpath/class/protocol/l3/IPv6.html">IPv6</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>二层协议</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/protocol/l2/ethernet.html">Ethernet II</a>
											<a href="rootpath/class/protocol/l2/802.1Q.html">802.1Q</a>
											<a href="rootpath/class/protocol/l2/802.3.html">802.3</a>
											<a href="rootpath/class/protocol/l2/wifi.html">802.11 b/a/g/n/ac/ax/be</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="cat">
				<div class="cat-box" data-cat="network">
					<div class="layout">
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-cisco">
										<img src="rootpath/img/cisco.svg" />
									</i>
								</div>
								<span>思科</span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/cisco/basic.html">通用配置</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>路由</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/network/cisco/dynamic_routing.html">动态路由协议</a>
											<a href="rootpath/class/network/cisco/other_routing.html">其它路由配置</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>交换</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/network/cisco/catalyst.html">Catalyst</a>
											<a href="rootpath/class/network/cisco/nexus.html">Nexus</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>防火墙</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/network/cisco/asa.html">ASA</a>
											<a href="rootpath/class/network/cisco/firepower.html">Firepower</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>VPN</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/network/cisco/vpn_router.html">基于路由器</a>
											<a href="rootpath/class/network/cisco/vpn_asa.html">基于ASA</a>
											<a href="rootpath/class/network/cisco/vpn_firepower.html">基于Firepower</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>WLC</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/network/cisco/c9800.html">C9800</a>
											<a href="rootpath/class/network/cisco/aireos.html">AireOS</a>
											<a href="rootpath/class/network/cisco/mobility_express.html">Mobility Express</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>ISE</span>
									</div>
									<div class="cat-item-sub">
										<a href="rootpath/class/network/cisco/ise_switch.html">交换机配置</a>
										<a href="rootpath/class/network/cisco/ise31.html">ISE 3.1</a>
										<a href="rootpath/class/network/cisco/ise21.html">ISE 2.1</a>
										<a href="rootpath/class/network/cisco/ise_windows.html">windows</a>
									</div>
								</li>
							</ul>
						</div>
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-cisco">
										<img src="rootpath/img/cisco.svg" />
									</i>
								</div>
								<span>思科</span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/cisco/sdwan.html">SDWAN</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/cisco/umbrella.html">Umbrella</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>DEVNET</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/network/cisco/ios-xe.html">IOS-XE</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-okta">
										<a href="rootpath/class/network/okta/okta.html"><img src="rootpath/img/okta_title.svg" /></a>
									</i>
								</div>
								<span></span>
							</h3>
							<div class="cat-group inner-aruba">
								<h3 class="cat-tit">
									<div class="cat-ico">
										<i class="ico-aruba">
											<img src="rootpath/img/aruba_title.svg" />
										</i>
									</div>
									<span></span>
								</h3>
								<ul class="cat-list">
									<li class="cat-item">
										<div class="cat-item-main">
											<span>无线</span>
										</div>
										<div class="cat-item-sub">
											<div class="cat-item-row">
												<a href="rootpath/class/network/aruba/wireless.html">设备配置</a>
												<a href="rootpath/class/network/aruba/wireless_basic.html">网络架构</a>
											</div>
										</div>
									</li>
									<li class="cat-item">
										<div class="cat-item-main">
											<a href="rootpath/class/network/aruba/clearpass.html">ClearPass</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<div class="ico-f5">
										<img src="rootpath/img/f5.svg" />
									</div>
								</div>
								<span>F5</span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/f5/basic.html">理论原理</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/f5/ltm.html">LTM</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/f5/others.html">其它功能</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="cat">
				<div class="cat-box" data-cat="china">
					<div class="layout">
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-huawei">
										<img src="rootpath/img/huawei.svg" />
									</i>
								</div>
								<span>华为</span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/huawei/basic.html">通用配置</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>路由</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/network/huawei/dynamic_routing.html">动态路由协议</a>
											<a href="rootpath/class/network/huawei/other_routing.html">其它路由配置</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<span>交换</span>
									</div>
									<div class="cat-item-sub">
										<div class="cat-item-row">
											<a href="rootpath/class/network/huawei/switch.html">园区网交换机</a>
											<a href="rootpath/class/network/huawei/CE.html">数据中心交换机</a>
										</div>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="#">防火墙</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/huawei/vpn.html">VPN</a>
									</div>
								</li>
							</ul>
						</div>
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-h3c">
										<img src="rootpath/img/h3c.svg" />
									</i>
								</div>
								<span>华三</span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/h3c/basic.html">通用配置</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="#">路由</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/network/h3c/switch.html">交换</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="cat">
				<div class="cat-box" data-cat="netdevops">
					<div class="layout">
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-cert">
										<img src="rootpath/img/cert.png" />
									</i>
								</div>
								<span style="font-size: 20px">证书服务</span>
								<ul class="cat-list">
									<li class="cat-item">
										<div class="cat-item-main">
											<a href="rootpath/class/netdevops/pki/certsrv.html">Windows平台</a>
										</div>
									</li>
									<li class="cat-item">
										<div class="cat-item-main">
											<span style="margin-left: 0">证书编辑工具</span>
										</div>
										<div class="cat-item-sub">
											<div class="cat-item-row">
												<a href="rootpath/class/netdevops/pki/cfssl.html">CFSSL</a>
												<a href="rootpath/class/netdevops/pki/openssl.html">OpenSSL</a>
												<a href="rootpath/class/netdevops/pki/certs_edit1.html">网页编辑证书</a>
											</div>
										</div>
									</li>
									<li class="cat-item">
										<div class="cat-item-main">
											<a href="rootpath/class/netdevops/pki/certs_mgmt.html">证书管理</a>
										</div>
									</li>
								</ul>
							</h3>
						</div>
						<div class="cat-group">
							<table>
								<tr>
									<td class="logo">
										<h3 class="cat-tit">
											<i class="ico-mysql">
												<img src="rootpath/img/mysql.svg" />
											</i>
										</h3>
									</td>
									<td>
										<h3 class="cat-tit">
											<span><a href="rootpath/class/netdevops/tool/mysql8.html">MySQL 8</a></span>
										</h3>
									</td>
									<td class="logo">
										<h3 class="cat-tit">
											<i class="ico-gitlab">
												<img src="rootpath/img/gitlab.svg" />
											</i>
										</h3>
									</td>
									<td>
										<h3 class="cat-tit">
											<span><a href="rootpath/class/netdevops/tool/gitlab.html">GitLab</a></span>
										</h3>
									</td>
									<td class="logo">
										<h3 class="cat-tit">
											<i class="ico-vault">
												<img src="rootpath/img/vault.svg" />
											</i>
										</h3>
									</td>
									<td>
										<h3 class="cat-tit">
											<span><a href="rootpath/class/netdevops/tool/vault.html">Vault</a></span>
										</h3>
									</td>
								</tr>
								<tr>
									<td class="logo">
										<h3 class="cat-tit">
											<div class="cat-ico">
												<i class="ico-terraform">
													<a href="rootpath/class/netdevops/tool/terraform.html">
														<img src="rootpath/img/terraform_title.svg" />
													</a>
												</i>
											</div>
											<span></span>
										</h3>
									</td>
									<td>
										<h3 class="cat-tit">
											<span></span>
										</h3>
									</td>
									<td class="logo">
										<h3 class="cat-tit">
											<div class="cat-ico">
												<i class="ico-nginx">
													<a href="rootpath/class/netdevops/tool/nginx.html">
														<img src="rootpath/img/nginx_title.svg" />
													</a>
												</i>
											</div>
											<span></span>
										</h3>
									</td>
									<td>
										<h3 class="cat-tit">
											<span></span>
										</h3>
									</td>
									<td class="logo">
										<h3 class="cat-tit">
											<i class="ico-regex">
												<img src="rootpath/img/regex.svg" />
											</i>
										</h3>
									</td>
									<td>
										<h3 class="cat-tit">
											<span><a href="rootpath/class/netdevops/tool/regex.html">正则表达式</a></span>
										</h3>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="cat">
				<div class="cat-box" data-cat="vmware">
					<div class="layout">
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-vsphere">
										<img src="rootpath/img/vsphere.svg" />
									</i>
								</div>
								<span><a href="rootpath/class/vmware/vsphere7.html">vSphere</a></span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/vmware/vsphere7.html">vSphere7</a>
									</div>
								</li>
							</ul>
						</div>
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-nsx">
										<img src="rootpath/img/nsx.svg" />
									</i>
								</div>
								<span></span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/vmware/NSX-T3.html">NSX-T3</a>
									</div>
								</li>
							</ul>
						</div>
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-velocloud">
										<img src="rootpath/img/velocloud.svg" />
									</i>
								</div>
								<span><a style="line-height: 45px" href="rootpath/class/vmware/SDWAN.html">SDWAN</a></span>
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="cat">
				<div class="cat-box" data-cat="cloud">
					<div class="layout">
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-aliyun">
										<a href="rootpath/class/cloud/aliyun/aliyun.html">
											<img src="rootpath/img/aliyun_title.svg" />
										</a>
									</i>
								</div>
								<span></span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item"><!--占位--></li>
							</ul>
						</div>
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<div class="ico-docker">
										<img src="rootpath/img/docker_title.svg" />
									</div>
								</div>
								<span></span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/cloud/docker/basic.html">基础配置</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/cloud/docker/compose.html">Docker Compose</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/cloud/docker/swarm.html">Docker Swarm</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/cloud/docker/private_hub.html">私有镜像仓库、加速器搭建和使用</a>
									</div>
								</li>
							</ul>
						</div>
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-k8s">
										<img src="rootpath/img/k8s_title.svg" />
									</i>
								</div>
								<span></span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/cloud/k8s/kubeadm_step.html">kubeadm安装</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/cloud/k8s/basic.html">基本操作</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/cloud/k8s/orchestration.html">容器编排</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="cat">
				<div class="cat-box" data-cat="linux">
					<div class="layout">
						<div class="cat-group">
							<h3 class="cat-tit">
								<div class="cat-ico">
									<i class="ico-redhat">
										<img src="rootpath/img/redhat_title.svg" />
									</i>
								</div>
								<span></span>
							</h3>
							<ul class="cat-list">
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/linux/redhat_basic.html">基础命令</a>
									</div>
								</li>
								<li class="cat-item">
									<div class="cat-item-main">
										<a href="rootpath/class/linux/redhat_service.html">基础服务</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="cat">
				<div class="cat-box" data-cat="others">
					<div class="layout">
						<div class="cat-group">
							<table>
								<tr>
									<td class="logo">
										<h3 class="cat-tit">
											<i class="ico-nmap">
												<img src="rootpath/img/nmap.svg" />
											</i>
										</h3>
									</td>
									<td>
										<h3 class="cat-tit">
											<span><a href="rootpath/class/nmap/nmap.html">NMAP</a></span>
										</h3>
									</td>
									<td class="logo">
										<h3 class="cat-tit">
											<i class="ico-os">
												<img src="rootpath/img/os.webp" class="ico-os" />
											</i>
										</h3>
									</td>
									<td>
										<h3 class="cat-tit">
											<span><a href="rootpath/class/pxe/pxe.html">系统自动安装脚本</a></span>
										</h3>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="cat">
				<div class="cat-box" data-cat="animes">
					<div class="layout">
						<div class="cat-group animes">
							<div class="row">
								<div class="col logo">
									<h3 class="cat-tit">
										<i class="ico-bjjt">
											<a href="rootpath/class/bjjt/bjjt.html">
												<img src="rootpath/img/bjjt.jpg" />
											</a>
										</i>
									</h3>
								</div>
							</div>
							<div class="row">
								<div class="col-2 offset-1 logo">
									<h3 class="cat-tit">
										<i class="ico-one_piece">
											<a href="rootpath/class/anime/one_piece.html">
												<img src="rootpath/img/one_piece.svg" title="海贼王" />
											</a>
										</i>
									</h3>
								</div>
								<div class="col-2 logo">
									<h3 class="cat-tit">
										<i class="ico-conan">
											<a href="rootpath/class/anime/conan.html">
												<img src="rootpath/img/detective_conan.svg" title="名侦探柯南" />
											</a>
										</i>
									</h3>
								</div>
								<div class="col-2 logo">
									<h3 class="cat-tit">
										<i class="ico-naruto">
											<a href="rootpath/class/anime/naruto.html">
												<img src="rootpath/img/naruto.svg" title="火影忍者" />
											</a>
										</i>
									</h3>
								</div>
								<div class="col-2 logo">
									<h3 class="cat-tit">
										<i class="ico-dragon_ball">
											<a href="rootpath/class/anime/dragon_ball.html">
												<img src="rootpath/img/dragon_ball.png" title="七龙珠" />
											</a>
										</i>
									</h3>
								</div>
								<div class="col-2 logo">
									<h3 class="cat-tit">
										<i class="ico-inuyasha">
											<a href="rootpath/class/anime/inuyasha.html">
												<img src="rootpath/img/inuyasha.png" title="犬夜叉" />
											</a>
										</i>
									</h3>
								</div>
							</div>
							<div class="row">
								<div class="col-2 offset-1 logo">
									<h3 class="cat-tit">
										<i class="ico-digital_monster">
											<a href="rootpath/class/anime/digital_monster.html">
												<img src="rootpath/img/digital_monster.png" title="数码宝贝" />
											</a>
										</i>
									</h3>
								</div>
								<div class="col-2 logo">
									<h3 class="cat-tit">
										<i class="ico-digital_monster">
											<a href="rootpath/class/anime/let's&go.html">
												<img src="rootpath/img/let's&go.png" title="四驱兄弟" />
											</a>
										</i>
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="layout clearfix">
				<div class="mod-header-nav">
					<ul id="jmod-header-nav">
						<li id="nav-header-protocol" class="top-cat hassub" data-cat="protocol">
							<h2>
								<a href="rootpath/index.html">协议</a>
							</h2>
						</li>
						<li id="nav-header-network" class="top-cat hassub" data-cat="network">
							<h2>
								<a href="javascript:void(0);">网络</a>
							</h2>
						</li>
						<li id="nav-header-china" class="top-cat hassub" data-cat="china">
							<h2>
								<a href="javascript:void(0);">国产</a>
							</h2>
						</li>
						<li id="nav-header-vmware" class="top-cat hassub" data-cat="vmware">
							<h2>
								<a href="javascript:void(0);">VMware</a>
							</h2>
						</li>
						<li id="nav-header-netdevops" class="top-cat hassub" data-cat="netdevops">
							<h2>
								<a href="javascript:void(0);">NetDevOps</a>
							</h2>
						</li>
						<li id="nav-header-cloud" class="top-cat hassub" data-cat="cloud">
							<h2>
								<a href="javascript:void(0);">混合云</a>
							</h2>
						</li>
						<li id="nav-header-linux" class="top-cat hassub" data-cat="linux">
							<h2>
								<a href="javascript:void(0);">Linux</a>
							</h2>
						</li>
						<li id="nav-header-others" class="top-cat hassub" data-cat="others">
							<h2>
								<a href="javascript:void(0);">其它</a>
							</h2>
						</li>
						<li id="nav-header-animes" class="top-cat hassub" data-cat="animes">
							<h2>
								<a href="javascript:void(0);">动　漫</a>
							</h2>
						</li>
					</ul>
					<i class="jmod-nav-slider slider hidden" style="transform: translateX(0px);"></i>
				</div>
			</div>
		</div>
		<div class="banner jmod_banner">
			<div class="ban cur" style="background-color:#1C232F;height: 62px;"></div>
		</div>
	</div>
`

const head = `
	<link rel="stylesheet" type="text/css" href="rootpath/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="rootpath/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="rootpath/css/sidebar-menu.css">
	<link rel="stylesheet" type="text/css" href="rootpath/css/top_menu.css">
	<link rel="stylesheet" type="text/css" href="rootpath/css/global.css">
	<script type="text/javascript" src="rootpath/js/bootstrap.bundle.min.js"></script>
	<script type="text/javascript" src="rootpath/js/jquery.min.js"></script>
	<script type="text/javascript" src="rootpath/js/forge.min.js"></script>
	<script type="text/javascript" src="rootpath/js/global.js"></script>
`;

const treeJS = `
	<script type="text/javascript" src="tree.js"></script>
`;

// uri：/guide/class/nmap/nmap.html
const uri = window.location.href.substring(window.location.href.indexOf("/guide"));
// length -1 获取 uri 中 / 数量，再 -2 即相对根路径级数
const path_num = uri.split("/").length - 1 - 2;

document.write(head.replace(/rootpath\//g, "../".repeat(path_num)));


// 某些页面不包含左侧的导航树
if (
	uri != "/guide/index.html" &&
	uri != "/guide/class/pxe/pxe.html" &&
	uri.indexOf("/guide/class/bjjt") < 0
) {
	document.write(treeJS);
}
