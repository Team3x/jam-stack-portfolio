$(document).ready(function() {


//==================================//
//----------HEADER
//==================================//
$("h1").fadeIn(5000);
//==================================//


//==================================//
//----------SIGN UP QUICKER
//==================================//
$(function signUpNow() {
  $("#signUpNow").on("click", function() {
      $(this).text(function(i, text){
          if (text === "OR SIGN UP NOW!") {
            $("div#carousel_1_wrapper").hide();
          return "BACK TO THE IMAGES";
          } else {
            $("div#carousel_1_wrapper").show();
           return"OR SIGN UP NOW!";      
         }
      })
   });
})
//==================================//


//==================================//
//--------Password Confirmation Feature
//==================================// 
/*
$("input#signupSubmit").on("click", function passwordConfirmation () {
 if ($("input#password").val() != $("input#confirm_password").val()) {
          alert("Passwords do not match.");
      }
});
*/      
//==================================//


});
