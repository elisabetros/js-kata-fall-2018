"use strict";

const button = document.querySelector(".button");
const colors = document.querySelectorAll(".color");
button.addEventListener("click", function() {
  //   console.log("something");
  colors.forEach(element => {
    let firstPercent = Math.floor(Math.random() * 100);
    let lastPercent = Math.floor(Math.random() * 100);
    console.log(element);
    element.style.backgroundColor = "";
    element.style.backgroundColor =
      "hsl(" +
      Math.floor(Math.random() * 100) +
      "," +
      firstPercent +
      "%," +
      lastPercent +
      "%)";
    element.innerHTML = element.style.backgroundColor;
  });
});
