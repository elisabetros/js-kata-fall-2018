"use strict";
let endpoint = "https://kea-alt-del.dk/kata-distortion/";
const svg = document.querySelector("svg");
const NS = "http://www.w3.org/2000/svg";
let lineArray = [];

function updateLine() {
  fetch(endpoint)
    .then(e => e.json())
    .then(showLine);
}

setInterval(function() {
  updateLine();
}, 11000);

window.addEventListener("DOMContentLoaded", updateLine);

function showLine(peopleInLine) {
  console.log(peopleInLine.inQueue);
  lineArray.push(peopleInLine.inQueue);
  console.log(lineArray);
  let rect = document.createElementNS(NS, "rect");
  if (lineArray.length <= 1) {
    rect.setAttribute("x", 0);
  } else {
    rect.setAttribute("x", (lineArray.length - 1) * 11);
  }
  rect.setAttribute("y", 100 - Number(peopleInLine.inQueue));
  rect.setAttribute("width", 10);
  rect.setAttribute("height", 100 + Number(peopleInLine.inQueue));
  if (peopleInLine.inQueue > 15) {
    rect.style.fill = "red";
  } else {
    rect.style.fill = "green";
  }
  svg.appendChild(rect);

  if (lineArray.length > 10) {
    lineArray = [];
    svg.innerHTML = "";
    showLine();
  }
}
