"use strict";
const modal = document.querySelector("#modal_container");
let detailBtn = document.querySelectorAll(".details");
let closeBtn = document.querySelector("#closebutton");

detailBtn.forEach(function(e) {
  e.addEventListener("click", function() {
    modal.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", function() {
  modal.classList.add("hidden");
});
