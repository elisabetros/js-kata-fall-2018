"use strict";

const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
const span = document.querySelector("span");
let lastNumber;
let newNumber;

function randomNumber() {
  newNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  span.innerHTML = newNumber;
  console.log("newnumber: " + newNumber);
  console.log("lastNumber: " + lastNumber);
}
noBtn.addEventListener("click", function() {
  lastNumber = newNumber;
  randomNumber();

  if (newNumber === lastNumber) {
    // return -1;
    randomNumber();
  }
});
randomNumber();
