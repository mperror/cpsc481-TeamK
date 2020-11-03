

$(document).ready(function() {
	
	//initial hiding, only the home div should be shown initially
	if ( $("#stage1").is(":visible") ) { $("#stage1").hide() }
	
	$("#Home").click(function() {
		if ( $("#home").is(":visible") ) {
			//do nothing, already showing home div
		} else {
			//hide all other content divs, show home div
			$(".content:not(#home)").hide();
			$("#home").show();
		}
	});
	
	$("#Stage1").click(function() {
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
	
	$("#TeamMembers").click(function () {
		$(".menu .TeamMembersShow").toggleClass("show");
	});
});
