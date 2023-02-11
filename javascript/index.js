var menu = document.getElementById('menu_bar');
var navbar = document.getElementById('navbar');

menu.addEventListener("click", function() {
  if(navbar.style.display == "none") {
  	navbar.style.display = "block";
  }
  else{
  	navbar.style.display = "none";
  }
});