
$(document).ready(function() {
	
	if ( $("#stage1").is(":visible") ) { $("#stage1").hide() }
	
	$(".Stage1").click(function() {
		if ( $("#home").is(":visible") ) {
			$("#home").hide();
			$("#stage1").show();
		} else {
			$("#home").show();
			$("#stage1").hide();
		}
	});
	
	$(".Stage2").click(function() {
		if ( $(".content").is(":visible")) {
			$(".content").hide();
		} else {
			$(".content").show();
		}
	});
});
