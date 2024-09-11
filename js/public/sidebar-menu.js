$.sidebarMenu = function (menu, cmdOffset) {
	let animationSpeed = 300;

	$(menu).on("click", "li a", function (e) {
		let $this = $(this);
		let checkElement = $this.next();
		// 当左侧导航树内容较多时，即使滚动条无法完全显示，增加了两行不显示的占位内容
		// 当点击到占位内容时不做任何处理
		if ($this.attr("cmd") == "zw") {
			return;
		}

		let leftt = $("#divCommand").offset().left;		// 由于需要增加偏移量，每点击左侧导航一次，就会增加一次
		$("#divCommand").offset({top: 0, left: leftt});	// 每次点击前，将偏移置0

		if (checkElement.is(".treeview-menu") && checkElement.is(":visible")) { //点击已经打开的菜单
			checkElement.slideUp(animationSpeed, function () {
				checkElement.removeClass("menu-open");
			});
			checkElement.parent("li").removeClass("active");
		}
		//If the menu is not visible
		else {
			if ((checkElement.is(".treeview-menu")) && (!checkElement.is(":visible"))) { //点击未打开的菜单
				//Get the parent menu
				let parent = $this.parents("ul").first();
				//Close all open menus within the parent
				let ul = parent.find("ul:visible").slideUp(animationSpeed);
				//Remove the menu-open class from the parent
				ul.removeClass("menu-open");
				//Get the parent li
				let parent_li = $this.parent("li");
				//Open the target menu and add the menu-open class
				checkElement.slideDown(animationSpeed, function () {
					//Add the class active to the parent li
					checkElement.addClass("menu-open");
					parent.find("li.active").removeClass("active");
					parent_li.addClass("active");
				});
			}
			else {
				if($this.attr("cmd").indexOf("#url:") == 0) {
				let uri = window.location.href.substring(window.location.href.indexOf("/guide"));
				window.location.href = $this.attr("cmd").substring(5);
				}
				else {
					let href = window.location.href.split("#")[0];
					location.href = href + $this.attr("cmd");
					$("#divCommand").offset({top: cmdOffset});
				}
			}
		}

		if (checkElement.is(".treeview-menu") || $this.children().length == 2) {
			e.preventDefault();

			console.log($this.attr("cmd"))
			if($this.attr("cmd").indexOf("#url:") == 0) {
				let uri = window.location.href.substring(window.location.href.indexOf("/guide"));
				window.location.href = $this.attr("cmd").substring(5);
			}
			else {
				let href = window.location.href.split("#")[0];
				location.href = href + $this.attr("cmd");
				$("#divCommand").offset({top: cmdOffset});
			}

			// let href = window.location.href.split("#")[0];
			// location.href = href + $this.attr("cmd");
			//
			// $("#divCommand").offset({top: cmdOffset});
		}
	});
};

