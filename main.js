
$(document).ready(function() {
	
	//initial hiding, only the home div should be shown initially
	if ( $("#stage1").is(":visible") ) { $("#stage1").hide() }
	if ( $("#stage2").is(":visible") ) { $("#stage2").hide() }
	if ( $("#stage3").is(":visible") ) { $("#stage3").hide() }
	if ( $("#stage4").is(":visible") ) { $("#stage4").hide() }
	
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
		if ( $("#stage1").is(":visible") ) {
			//do nothing, already showing stage1 div 
		} else {
			//hide all other content divs, show stage1 div
			$(".content:not(#stage1)").hide();
			$("#stage1").show();
		}
	});
	
	$("#Stage2").click(function() {
		if ( $("#stage2").is(":visible") ) {
			//do nothing, already showing stage2 div
		} else {
			//hide all other contetn divs, show stage2 div
			$(".content:not(#stage2)").hide();
			$("#stage2").show();
		}
	});
	
	$("#Stage3").click(function() {
		if ( $("#stage3").is(":visible") ) {
			//do nothing, already showing stage3 div
		} else {
			//hide all other content divs, show stage3 div
			$(".content:not(#stage3)").hide();
			$("#stage3").show();
		}
	});
	
	$("#Stage4").click(function() {
		if ( $("#stage4").is(":visible") ) {
			//do nothing, already showing stage4 div
		} else {
			//hide all other content divs, show stage4 div
			$(".content:not(#stage4)").hide();
			$("#stage4").show();
		}
	});
	
	$("#TeamMembers").click(function () {
		$(".menu .TeamMembersShow").toggleClass("show");
	});
});
