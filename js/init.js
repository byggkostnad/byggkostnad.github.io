$('.carousel.carousel-slider').carousel({fullWidth: true});

(function ($, toastr) {

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

			type: "POST",
			dataType: "xml",
            statusCode: {
                0: function() {
                	$('#name').val("");
                	$('#email').val("");
                	$('#phone').val("");
                    toastr.info("We have received your information and will be in touch!");
                },
                200: function() {
                	$('#name').val("");
                	$('#email').val("");
                	$('#phone').val("");
                    toastr.info("We have received your information and will be in touch!");
                }
            }
		});
		return false;
	}

})(jQuery, toastr); // end of jQuery name space