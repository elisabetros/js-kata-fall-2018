"use strict";
let reviews = document.querySelectorAll("ul");
let spans = document.querySelectorAll("span");
console.log(spans);

function remove() {
  spans.forEach(e => {
    if (e.textContent <= 5) {
      console.log(e);
      e.parentElement.remove();
    }
  });
}

remove();
