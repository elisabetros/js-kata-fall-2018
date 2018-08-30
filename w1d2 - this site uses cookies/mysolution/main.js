let alert = document.querySelector("div");
let close = document.querySelector("button");

window.addEventListener("load", show);
close.addEventListener("click", leave);

function show() {
  console.log("now we have to slide");
  alert.classList.remove("hide");
}
function leave() {
  alert.classList.add("hide");
}

//make the div slide in when the window opens
//make the div slide out when you press the x
