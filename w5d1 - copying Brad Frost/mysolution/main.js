let allDivs = document.querySelectorAll("div");

allDivs.forEach(singleDiv => {
  let size = (singleDiv.style.height = Math.floor(Math.random() * 50) + "px");
  singleDiv.style.width = size;
  singleDiv.style.top = Math.floor(Math.random() * 100) + "px";
  //   singleDiv.style.left = Math.floor(Math.random() * 250) + "px";
  singleDiv.addEventListener("mouseover", function() {
    console.log("hover!");
    singleDiv.style.backgroundColor =
      "rgb(" +
      Math.floor(Math.random() * 250) +
      "," +
      Math.floor(Math.random() * 250) +
      "," +
      Math.floor(Math.random() * 250) +
      ")";
  });
});

// function changeBackground() {

// }
