// roll a dice 100 Times
//
let counter = 1;
const values = [1, 2, 3, 4, 5, 6];
let randomNumber;
let count = [0, 0, 0, 0, 0, 0];

const body = document.querySelector("body");

function rollDice() {
  randomNumber = values[Math.floor(Math.random() * 6)];
  console.log(randomNumber);
  count[randomNumber - 1]++;
  console.log(count);
  if (counter < 1000) {
    addToChart();
    counter++;
    window.setTimeout(rollDice, 1);
  }
}

rollDice();
function addToChart() {
  values.forEach(oneNumber => {
    body.children[oneNumber - 1].style.height = count[oneNumber - 1] + "px";
  });
}
