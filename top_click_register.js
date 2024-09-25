let button=document.getElementById("registbtn");
button.addEventListener("click",gotoregister);
button.addEventListener("DomContentLoaded",gotoregister);
function gotoregister(){
    window.location.href="register.html";
}

let button2=document.getElementById("arrow");
window.onscroll=function() {scroll()};
function scroll(){
  if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
    button2.style.display="block";
  }
  else{
    button2.style.display="none";
  }
}
function scrolltopfunction(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}

function formvalidation(e){
  e.preventDefault();
  var name=document.getElementById("name");
  var email=document.getElementById("email");
  var country=document.getElementById("country");
  var birth=document.getElementById("bday");
  var gender=document.getElementById("gender");
  var pass=document.getElementById("pass");
  var confpass=document.getElementById("confpass");
  var checkbox=document.getElementById("checkbox");
  if(name.value==""){
      alert("Please insert your full name.")
  }
  else if(!email.value){
      alert("Please insert your email.")
  }
  else if(!email.value.endsWith("@gmail.com")){
      alert("Please use gmail.")
  }
  else if(!country.value){
      alert("Please insert your country.")
  }
  else if(!bday.value){
      alert("Please put your date of birth.")
  }
  else if(gender.value=="none"){
      alert("Please insert your gender.")
  }
  else if(!pass.value){
      alert("Please insert a password.")
  }
  else if(pass.value.length<6){
      alert("Password must be more than 6 characters.")
  }
  else if(!confpass.value){
      alert("Please confirm your password.")
  }
  else if(pass.value!=confpass.value){
      alert("Passwords don't match.")
  }
  else if(!checkbox.checked){
      alert("Please agree to the terms and conditions.")
  }
  else{
      alert("Registration is successful!")
  }
}