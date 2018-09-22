"use strict";
const plusBtn = document.querySelector("#plus");
let firstCounter = 1;
let secondCounter = 1;
let firstSpan = document.querySelector("span:first-child");
let secondSpan = document.querySelector("span:last-child");

function counting() {
  plusBtn.addEventListener("click", function() {
    //   console.log(counter);
    if (secondSpan.innerHTML <= 9) {
      secondSpan.innerHTML = "000" + firstCounter++;
    } else if (secondSpan.innerHTML <= 99) {
      secondSpan.innerHTML = "00" + firstCounter++;
    } else if (secondSpan.innerHTML <= 999) {
      secondSpan.innerHTML = "0" + firstCounter++;
    } else if (secondSpan.innerHTML >= 1000) {
      secondSpan.innerHTML = firstCounter++;
    }
    if (secondSpan.innerHTML >= 9999) {
      firstSpan.innerHTML = "00" + secondCounter++;
      firstCounter = 0;
      if (firstSpan.innerHTML >= 99) {
        firstSpan.innerHTML = "0" + secondCounter++;
      } else if (firstSpan.innerHTML >= 999) {
        firstSpan.innerHTML = secondCounter++;
      }
      // secondSpan.innerHTML = "00" + firstcounter++;
    }
  });
}

counting();
