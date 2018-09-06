// var reviews = document.querySelector("ul");

// function removeBadReviews(arr) {
//   var spans = arr.querySelectorAll("span");
//   console.log(spans);
//   spans.forEach(e => {
//     var string = e.textContent;
//     var num = parseInt(string, 10);
//     if (num <= 5) {
//       console.log(num + " ");
//       e.parentElement.remove();
//     }
//   });
// }

// removeBadReviews(reviews);
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
