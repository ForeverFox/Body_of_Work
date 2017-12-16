$("document").ready(function() {	
	var bow = $("#bowImage");
// Creates an array of images to cycle through 
	var bowBackgrounds = new Array(
		"bodyofwork-header-0.jpg",
		"bow-intro-01.jpg",
		"bow-intro-10.jpg",
		"bow-intro-11.jpg",
		"bow-intro-03.jpg",
		"bow-intro-02.jpg",
		"bow-intro-04.jpg",
		"bow-intro-08.jpg",
		"bow-intro-13.jpg",
		"bow-intro-12.jpg",
		"bow-intro-09.jpg"												
		);
// Cycles through array
		var i = 0;
		bow.css("backgroundImage",
			"url(bow/" + bowBackgrounds[i] + ")");
		setInterval (function() {
			i++;
			if (i == bowBackgrounds.length) {
			i = 0;
		}
// Adds timed fade in and out effects to background image transitions
		bow.fadeOut(4000, function() {
			$(this).css("background-image", "url(bow/" + bowBackgrounds[i] + ")");
			$(this).fadeIn(4000);
		});
	}, 8000);


});

