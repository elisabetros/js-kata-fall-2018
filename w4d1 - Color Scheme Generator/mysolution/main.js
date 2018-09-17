"use strict";

const button = document.querySelector(".button");
const colors = document.querySelectorAll(".color");

button.addEventListener("click", function() {
  //   console.log("something");
  colors.forEach(element => {
    console.log(element);
    element.style.backgroundColor = "";
    element.style.backgroundColor =
      "hsl(" +
      Math.floor(Math.random() * 100) +
      "," +
      Math.floor(Math.random() * 100) +
      "%," +
      Math.floor(Math.random() * 100) +
      "%)";
    element.innerHTML = element.style.backgroundColor;
  });
});
