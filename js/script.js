
let nav = document.querySelector("nav");

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function() {
  nav.classList.toggle('opened');
})
