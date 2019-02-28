// JS Goes here - ES6 supported

import "./css/main.css";

// Replace no-js
document.documentElement.className = document.documentElement.className.replace("no-js","js");

// Hamburger
const hamburger = document.querySelector(".hamburger");

if (hamburger) {
  hamburger.addEventListener("click", (event) => {
    event.preventDefault();

    hamburger.classList.toggle("is-active");
  });
}

