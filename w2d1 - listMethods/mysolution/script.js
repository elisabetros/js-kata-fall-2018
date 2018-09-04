"use strict";

function displayElement(element) {
  console.log(element.textContent);
  //   element.style.display = "none";
}

function listMethods(id) {
  //   console.log(id);
  let section = document.getElementById(id);
  const elements = section.querySelectorAll("ul > li");
  console.log(elements);
  //   elements.forEach(element => {
  //     displayElement(element);

  //   });
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    displayElement(element);
  }
}
//   console.log(modify);
//   modify.forEach(displayElement);
//   const info = document.querySelector("#info").querySelectorAll("ul > li");
//   console.log(info);
//   info.forEach(displayElement);
//   const newarray = document
//     .querySelector("#newarray")
//     .querySelectorAll("ul > li");
//   console.log(newarray);
//   newarray.forEach(displayElement);

listMethods("modify");
listMethods("info");
listMethods("newarray");

// TODO: Create listMethods function

// Make the function that receives the HTML id, and uses *qsa* (`document.querySelectorAll`) to find all the `li`s inside the `ul` inside the section with that id.

// Then make the function iterate (loop) through all the found elements, and call the `displayElement` function on each one.

// Try to make the function work with both `.forEach` and plain old `for` - just to get a feel for the difference.
