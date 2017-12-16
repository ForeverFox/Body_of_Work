$("document").ready(function() {
	$(function() {
		var bow = $("#bowImage");
		var bowBackgrounds = new Array(
			"url(../bow/bodyofwork-header-1.jpg)",
			"url(../bow/bodyofwork-header-2.jpg)",
			"url(../bow/bodyofwork-header-3.jpg)",
			"url(../bow/bodyofwork-header-bw.jpg)"			
			);

		var bowInitial = 0;

		function newBackground() {
			bow.css(
				"backgroundImage",
				bowBackgrounds[bowInitial = ++bowInitial%bowBackgrounds.length]
				);

		setTimeout(newBackground, 8000);
		}

		setTimeout(newBackground, 6000);
		bow.css("bowBackgrounds", bowBackgrounds[0]);
	});
});

