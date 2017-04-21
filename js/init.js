$('.carousel.carousel-slider').carousel({fullWidth: true});

(function ($, toastr) {

	$(function () {
		$('.button-collapse').sideNav();
		$('.parallax').parallax();
	}); // end of document ready


	$(function () {
		$("#contact-form").submit(postToGoogle);
	});

	function postToGoogle() {
		console.log("posting form to google");
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();

		$.ajax({
			url: "https://docs.google.com/forms/d/104nEhIs3OasjFn9Px-oZt4lS88W-qb5CpmtNBpmepG8/formResponse",
			data: {
				"entry.504123295": name,
				"entry.932829697": email,
				"entry.920121692": phone
			},
			crossDomain: true,
			type: "POST",
			dataType: "xml",
			success: successfullyPostedToGoogle,
			error: failedToPostToGoogle
		});
		return false;
	}
	
	function successfullyPostedToGoogle() {
    	//Success Message
    	toastr.info("We have received your information and will be in touch!");
	}
	
	function failedToPostToGoogle() {
		toastr.error("We were unable to receive your information!");    
	}

})(jQuery, toastr); // end of jQuery name space