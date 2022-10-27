"use strict";

const burgerMenuIcon = document.getElementById("burgerMenuIcon");

burgerMenuIcon.addEventListener("click", (event) => {
  const burgerExpanded = document.getElementById("burgerExpanded");
  const mainContent = document.querySelector("main");
  burgerExpanded.classList.toggle("d-none");
  mainContent.classList.toggle("d-none");
});
