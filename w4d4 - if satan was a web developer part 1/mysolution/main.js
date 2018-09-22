"use strict";
const plusBtn = document.querySelector("#plus");
let firstCounter = 0;
let secondCounter = 0;
let firstSpan = document.querySelector("span:first-child");
let secondSpan = document.querySelector("span:last-child");

// setInterval(function() {
function counting() {}
plusBtn.addEventListener("click", function() {
  secondSpan.innerHTML = firstCounter++;
  //   console.log(counter);
  if (firstCounter <= 9) {
    secondSpan.innerHTML = "000" + firstCounter;
  } else if (firstCounter <= 99) {
    secondSpan.innerHTML = "00" + firstCounter;
  } else if (firstCounter <= 999) {
    secondSpan.innerHTML = "0" + firstCounter;
  } else if (firstCounter >= 1000) {
    secondSpan.innerHTML = firstCounter;
  }

  if (firstCounter >= 9999) {
    firstSpan.innerHTML = secondCounter++;
    firstCounter = 0;
  }
  if (secondCounter <= 9) {
    firstSpan.innerHTML = "00" + secondCounter;
  } else if (secondCounter <= 99) {
    firstSpan.innerHTML = "0" + secondCounter;
  } else if (secondCounter <= 999) {
    firstSpan.innerHTML = secondCounter;
  } else if (secondCounter >= 999) {
    secondCounter = 0;
  }
  // secondSpan.innerHTML = "00" + firstcounter++;
});
// }, 1);

// counting();
