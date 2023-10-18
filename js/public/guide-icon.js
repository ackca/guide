$('#guide-icon, nav ~ ul li').click(function() {
	var etop_show = 0;
	var e, etop_hide;
	var findDiv = true;
	var offset_top = document.documentElement.scrollTop;

	$('#divCommand table').each(function() {
		if($(this).offset().top - offset_top >= 0) {
			e = $(this);
			etop_hide = $(this).offset().top;
			findDiv = false;
			return false;
		}
	});
	if(findDiv) {
		$('#divCommand div').each(function() {
			if($(this).offset().top - offset_top >= 0) {
				e = $(this);
				etop_hide = $(this).offset().top;
				return false;
			}
		});
	}

	if($('#guide-icon span').hasClass('open')) {
		/*
			有些命令或描述较长，造成换行，而隐藏导航后，宽度增大，高度会降低，
			因此，隐藏导航后divcommand内容相对位置会改变，需要调整

			从divCommand内位于顶部元素开始寻找，找到第一个相对divCommand纵坐标为正的容器
			因命令行配置使用容器table，图片配置使用容器div，先在table中寻找，table的纵坐标均为负时，再找div
			找到相关元素后，分别纪录在左侧导航显示与隐藏的位置
			根据显示/隐藏的变化方式与状态，调整divCommand的滚动条，使用元素位置相对不变
		*/
		$(".main-sidebar").animate({"width":"0px"});
		$("#guide-icon").animate({left: '-5px'});
		$("#divCommand").animate({marginLeft: '50px'}, move_divCommand);

		$(".divStruct").animate({marginLeft: '50px'});

		if(window.location.href.indexOf("ICMPv4.html") > 0 || window.location.href.indexOf("ICMPv6.html") > 0) {
			 $("#zwTable, .divBG").animate({"left":"80px"});
		}

		if(window.location.href.indexOf("DHCPv6.html") > 0) {
			 $("#tV6V4").animate({"width":"1400px"});
		}

		if(window.location.href.indexOf("DHCPv4.html") > 0) {
			 $("#tOption53").animate({"width":"1370px"});
		}
	}
	else {
		$(".main-sidebar").animate({"width":"350px"});
		$("#guide-icon").animate({left: '340px'});
		$("#divCommand").animate({marginLeft: '380px'}, move_divCommand);

		$(".divStruct").animate({marginLeft: '380px'});

		if(window.location.href.indexOf("ICMPv4.html") > 0 || window.location.href.indexOf("ICMPv6.html") > 0) {
			 $("#zwTable, .divBG").animate({"left":"410px"});
		}

		if(window.location.href.indexOf("DHCPv6.html") > 0) {
			 $("#tV6V4").animate({"width":"1100px"});
		}

		if(window.location.href.indexOf("DHCPv4.html") > 0) {
			 $("#tOption53").animate({"width":"1040px"});
		}

	}
	$('#guide-icon span').toggleClass('open');

	function move_divCommand(){
		etop_show = e.offset().top;
		var dtop = document.documentElement.scrollTop;
		document.documentElement.scrollTop = dtop + (etop_show - etop_hide);
	}
});