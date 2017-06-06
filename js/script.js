//==================================//
//Nav Bar Feature
//==================================//
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("menu").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.2)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
//==================================//


//==================================//
//Password Confirmation Feature
//==================================//

var password = document.getElementById("password")
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

//==================================//
