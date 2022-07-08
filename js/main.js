var url = "https://script.google.com/macros/s/AKfycbyf26YRrtdqK0jdLmU1JiJ17T4rh0BhI9kMeDJ4WKO0EsZFG3DDaY1yyFWOG3WBtPHN/exec";
(function ($) {
  "use strict";
  $.ajaxSetup({
    crossDomain: true,
    type: "GET",
    dataType: "jsonp",
  });
  /*==================================================================
  [ Focus input ]*/


  /*==================================================================
  [ Validate ]*/
  // Bind to the submit event of our form
  $(document).on('click', "#get-button", function () {
    $("#get-button-text").hide();
    $(".btn-loading").show();
    $.ajax({
      url: url + "?type=get",
    });
  });
  $(document).on('click', "#confirm", function () {
    $("#popup").children().fadeOut();
    $("#popup").fadeOut();
    $(".btn-loading").hide();
    $("#get-button-text").show();
  });
})(jQuery);

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (const element of ca) {
    var c = element;
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function get(responce){
	if (responce.status == 200){
    $("#confirm-passes").html(responce.message);
    $("#popup").fadeIn();
    $("#popup").children().fadeIn();
		
  }
  else {
    alert("ERROR: PLEASE RELOAD PAGE")
  }
}