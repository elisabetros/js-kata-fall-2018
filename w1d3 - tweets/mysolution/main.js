"use strict";
const input = document.querySelector("input").value;
const btn = document.querySelector("button");
const template = document.querySelector("template").content;
const clone = template.cloneNode(true);
const section = document.querySelector("section");

function fetchTweets() {
  let endpoint = "https://kea-alt-del.dk/twitter/api/?count=50";
  if (input) {
    endpoint = "https://kea-alt-del.dk/twitter/api/?count=50?hashtag=" + input;
  }
  fetch(endpoint)
    .then(e => e.json())
    .then(showTweets);
}
 
function showTweets(response) {
  console.log(response);
  response.statuses.forEach(object => {
    const clone = template.cloneNode(true);
    clone.querySelector(".tweets").textContent = object.text;
    clone.querySelector(".user").textContent = object.user.name;
    clone.querySelector(".location").textContent = object.user.location;

    section.appendChild(clone);
  });
}
fetchTweets();

btn.addEventListener("click", function() {
  clearTweets();
  fetchTweets();
});

function clearTweets() {
  document.querySelector("section").innerHTML = "";
}
