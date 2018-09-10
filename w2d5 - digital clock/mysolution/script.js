"use strict";
let hourChildren = document.querySelector(".hours").childNodes;
let minChildren = document.querySelector(".minutes").childNodes;
let secChildren = document.querySelector(".seconds").childNodes;

// console.log(hSplit);
// console.log(minSplit);
// console.log(secSplit);

setInterval(() => {
  const today = new Date();
  const h = today.getHours();
  const hSplit = h.toString().split("");
  const min = today.getMinutes();
  const minSplit = min.toString().split("");
  const sec = today.getSeconds();
  const secSplit = sec.toString().split("");
  showTime(h, hourChildren, hSplit);
  showTime(min, minChildren, minSplit);
  showTime(sec, secChildren, secSplit);
}, 1000);

function showTime(wholetime, spans, time) {
  if (wholetime < 10) {
    spans.className = "";
    spans[3].classList.add("digit" + time);
  } else {
    spans[3].classList.add("digit" + time[1]);
    spans[1].classList.add("digit" + time[0]);
  }
}
