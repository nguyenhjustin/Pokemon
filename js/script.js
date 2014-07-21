$(document).ready(function() { 
	$("#header ul li").hover(function() {
		$(this).stop(true, true);
		$(this).fadeTo('fast', 0.5);
	}, function() {
		$(this).fadeTo('fast', 1);
	});

	// var searchInput = $("input[name=Search").val();
});

