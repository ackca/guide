$(document).ready(function () {
	$("#selct_os_type").change(function () {
		let os_type = this.value;
		if(os_type != "0") {
			$('#select_os_version').empty();
			$('#select_os_version').append(new Option(" ", "0"));
			$('#lb_os_version').fadeIn(500);
			$('#select_os_version').fadeIn(500);

			if(os_type == 1) {
				$('#select_os_version').append(new Option("Windows Server 2012", "Windows Server 2012"));
				$('#select_os_version').append(new Option("Windows Server 2012 R2", "Windows Server 2012 R2"));
				$('#select_os_version').append(new Option("Windows Server 2016", "Windows Server 2016"));
				$('#select_os_version').append(new Option("Windows Server 2019", "Windows Server 2019"));
				$('#select_os_version').append(new Option("Windows Server 2022", "Windows Server 2022"));
				$('#select_os_version').append(new Option("Windows 10", "Windows 10"));
				$('#select_os_version').append(new Option("Windows 11", "Windows 11"));
			}

			if(os_type == 2) {
				$('#select_os_version').append(new Option("RHEL7", "RHEL7"));
				$('#select_os_version').append(new Option("RHEL8", "RHEL8"));
				$('#select_os_version').append(new Option("RHEL8", "RHEL8"));
			}

			if(os_type == 3) {
				$('#select_os_version').append(new Option("vSphere 6.5", "vSphere65"));
				$('#select_os_version').append(new Option("vSphere 6.7", "vSphere65"));
				$('#select_os_version').append(new Option("vSphere 7", "vSphere7"));
				$('#select_os_version').append(new Option("vSphere 8", "vSphere8"));
			}
		}
	});

	$("#select_os_version").change(function () {
		let os_version = this.value;
		if(os_version != "0") {
			$('#select_os_kind').empty();
			$('#select_os_kind').append(new Option(" ", "0"));

			$('#lb_os_kind').fadeIn(500);
			$('#select_os_kind').fadeIn(500);

			$('#lb_os_hostname').fadeIn(500);
			$('#input_os_hostname').fadeIn(500);

			$('#lb_os_password').fadeIn(500);
			$('#input_os_password').fadeIn(500);

			$('#lb_install').fadeIn(500);
			$('#select_install').fadeIn(500);

			if (											// 服务器系统
				os_version == "Windows Server 2012" ||
				os_version == "Windows Server 2012 R2" ||
				os_version == "Windows Server 2016" ||
				os_version == "Windows Server 2019" ||
				os_version == "Windows Server 2022"
			) {
				$('#select_os_kind').append(new Option("标准版（核心安装）", "SERVERSTANDARDCORE"));
				$('#select_os_kind').append(new Option("标准版（带GUI）", "SERVERSTANDARD"));
				$('#select_os_kind').append(new Option("数据中心版（核心安装）", "SERVERDATACENTERCORE"));
				$('#select_os_kind').append(new Option("数据中心版（带GUI）", "SERVERDATACENTER"));
			}

			if (os_version == "Windows 10" || os_version == "Windows 11") {		// PC系统
				$('#select_os_kind').append(new Option("企业版", "Enterprise"));
				$('#select_os_kind').append(new Option("教育版", "Education"));
				$('#select_os_kind').append(new Option("专业版", "Pro"));
				$('#select_os_kind').append(new Option("专业教育版", "Pro Education"));
				$('#select_os_kind').append(new Option("专业工作站版", "Pro For Workstations"));
			}
		}
	});

	$("#select_install").change(function () {
		let os_install = this.value;
		if(os_install == "1") {
			$('#lb_partition').fadeIn(500);
			$('#select_partition').fadeIn(500);

			$('#lb_partition_install').fadeIn(500);
			$('#select_partition_install').fadeIn(500);
		}
	});
});