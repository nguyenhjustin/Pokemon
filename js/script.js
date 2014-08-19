displaySerebii = false;
displayBulbapedia = false;

$(document).ready(function() { 
	$("#header ul li").hover(function() {
		$(this).stop(true, true);
		$(this).fadeTo('fast', 0.5);
	}, function() {
		$(this).fadeTo('fast', 1);
	});

	// var searchInput = $("input[name=Search").val();

	// Event for window resizing
	$(window).on('resize', function() {
		resizeFrames();
	});

	// Event for Serebii
	var serebiiButton = document.getElementById("serebiiButton");
	if (serebiiButton.addEventListener) {
		serebiiButton.addEventListener("click", serebii, false);
	}
	else if (serebiiButton.attachEvent) {
		serebiiButton.attachEvent("onClick", serebii);
	}

	// Event for Bulbapedia
	var bulbapediaButton = document.getElementById("bulbapediaButton");
	if (bulbapediaButton.addEventListener) {
		bulbapediaButton.addEventListener("click", bulbapedia, false);
	}
	else if (bulbapediaButton.attachEvent) {
		bulbapediaButton.attachEvent("onClick", bulbapedia);
	}

	// Event for search
	var searchButton = document.getElementById("searchButton");
	// if (searchButton.addEventListener) {
	// 	searchButton.addEventListener("click", search, false);
	// }
	// else if (searchButton.attachEvent) {
	// 	searchButton.attachEvent("onClick", search);
	// }
});

// function search() {
// 	var value = form.inputbox.value;
// 	console.log(value);
// }

function serebii() {
	if (displaySerebii) {
		$("#serebiiFrame").remove();
		displaySerebii = false;
	}
	else {
		$("#content").append('<iframe id="serebiiFrame" src="http://www.serebii.net/index2.shtml" seamless>iframe of website here</iframe>');
		displaySerebii = true;
	}

	resizeFrames();
}

function bulbapedia() {
	if (displayBulbapedia) {
		$("#bulbapediaFrame").remove();
		displayBulbapedia = false;
	}
	else {
		$("#content").append('<iframe id="bulbapediaFrame" src="http://bulbapedia.bulbagarden.net" seamless>iframe of website here</iframe>');
		displayBulbapedia = true;
	}

	resizeFrames();
}

function resizeFrames() {
	var width = $(window).width();
	var height = $(window).height() - $("#header").height() - 10;

	if (displaySerebii && displayBulbapedia) {
		width = width/2;
		$("#serebiiFrame").css("width", width);
		$("#bulbapediaFrame").css("width", width);
		$("#serebiiFrame").css("height", height);
		$("#bulbapediaFrame").css("height", height);
	}
	else if (displaySerebii) {
		$("#serebiiFrame").css("width", width);
		$("#serebiiFrame").css("height", height);
	}
	else if (displayBulbapedia) {
		$("#bulbapediaFrame").css("width", width);
		$("#bulbapediaFrame").css("height", height);
	}
}