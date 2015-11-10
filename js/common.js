$(document).ready(function() {

	$(".mc_item_wrap ul").each(function() {
		$(this).after("<div class='mc_item_wrap_af'></div>");
	});
	$(".mc_toggle").click(function() {
		if($(this).parent().parent().children("ul").is(":visible")){
			$(this).parent().parent().children("ul").slideUp();
			$(this).parent().parent().children(".mc_item_wrap_af").hide();
			$(this).parent().parent().removeClass("active")
		} else {
			$("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();
			$(".mc_item_wrap").removeClass("active");
			$(this).parent().parent().addClass("active");
			$(this).parent().parent().children("ul").slideDown();
			$(this).parent().parent().children(".mc_item_wrap_af").show();
		}
	})
	$(".fancybox").fancybox();
	var eqElement = ".hi_item"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});
});