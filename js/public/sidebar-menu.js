$.sidebarMenu = function (menu, cmdOffset) {
	var animationSpeed = 300;

	$(menu).on('click', 'li a', function (e) {
		// console.log(e)
		var $this = $(this);
		var checkElement = $this.next();
		// 当左侧导航树内容较多时，即使滚动条无法完全显示，增加了两行不显示的占位内容
		// 当点击到占位内容时不做任何处理
		if ($this.attr('cmd') == 'zw') {
			return;
		}

		var leftt = $('#divCommand').offset().left;		// 由于需要增加偏移量，每点击左侧导航一次，就会增加一次
		$('#divCommand').offset({top: 0, left: leftt});	// 每次点击前，将偏移置0

		if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) { //点击已经打开的菜单
			checkElement.slideUp(animationSpeed, function () {
				checkElement.removeClass('menu-open');
			});
			checkElement.parent("li").removeClass("active");
		}
		//If the menu is not visible
		else {
			if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) { //点击未打开的菜单
				//Get the parent menu
				var parent = $this.parents('ul').first();
				//Close all open menus within the parent
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
				//Remove the menu-open class from the parent
				ul.removeClass('menu-open');
				//Get the parent li
				var parent_li = $this.parent("li");
				//Open the target menu and add the menu-open class
				checkElement.slideDown(animationSpeed, function () {
					//Add the class active to the parent li
					checkElement.addClass('menu-open');
					parent.find('li.active').removeClass('active');
					parent_li.addClass('active');
				});
			} else {
				var href = window.location.href.split('#')[0];
				location.href = href + $this.attr('cmd');
				// var topp = $('#divCommand').offset().top + cmdOffset;
				// leftt = $('#divCommand').offset().left;
				$('#divCommand').offset({top: cmdOffset});
				// $('#divCommand').offset({top:topp,left:leftt});
			}
		}

		if (checkElement.is('.treeview-menu') || $this.children().length == 2) {
			e.preventDefault();
			href = window.location.href.split('#')[0];
			location.href = href + $this.attr('cmd');
			// topp = $('#divCommand').offset().top + cmdOffset;
			// leftt = $('#divCommand').offset().left;
			$('#divCommand').offset({top: cmdOffset});
			// $('#divCommand').offset({top:topp,left:leftt});
		}
	});
};
