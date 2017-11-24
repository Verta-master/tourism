var navMain = document.querySelector(".menu");
var navToggle = document.querySelector(".menu__btn");
var overlay = document.querySelector(".promo__overlay");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu--closed")) {
    navMain.classList.remove("menu--closed");
    navMain.classList.add("menu--opened");
    overlay.classList.add("overlay");
  } else {
    navMain.classList.add("menu--closed");
    navMain.classList.remove("menu--opened");
    overlay.classList.remove("overlay");
  }
});
