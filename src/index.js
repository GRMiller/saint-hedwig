// JS Goes here - ES6 supported

import "./css/main.css";

// Replace no-js
document.documentElement.className = document.documentElement.className.replace("no-js","js");

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navMain = document.querySelector(".nav-main");

if (hamburger) {
  hamburger.addEventListener("click", (event) => {
    event.preventDefault();

    hamburger.classList.toggle("is-active");
    navMain.classList.toggle("is-active");
  });
}

