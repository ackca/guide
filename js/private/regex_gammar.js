$(document).ready(function () {
	$("#menu2").click(function () {
		$("#grammar").show(300);
		$("body").parent().css("overflow-y", "hidden");
	});

	$("#regex_group_close").click(function () {
		$("#grammar").hide(300);
		$("body").parent().css("overflow-y", "auto");
	});
});