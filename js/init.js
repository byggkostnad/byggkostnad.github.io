(function ($) {
  function successFullyPostedToGoogle(){
    //Success Message
    console.log("We have received your information and will be in touch!");
  }
  function failedToPostToGoogle(){
    console.log("We where unable to receive your information!");    
  }

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
      success: successFullyPostedToGoogle,
      error: failedToPostToGoogle
    });
    return false;
  }


  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready


  $(function () {
    $("#contact-form").submit(postToGoogle);
  });

})(jQuery); // end of jQuery name space