"use strict";
const modal = document.querySelector("#modal_container");
let detailBtn = document.querySelectorAll(".details");
let closeBtn = document.querySelector("#closebutton");

detailBtn.forEach(function(e) {
  e.addEventListener("click", function() {
    console.log("Show modal");
    modal.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", function() {
  console.log("Hide modal");
  modal.classList.add("hidden");
});
