"use strict";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

const computerNum = Math.floor(Math.random() * 100) + 1;
let userGuess;

btn.addEventListener("click", click_btn);
function click_btn() {
  userGuess = parseInt(input.value);
  console.log("click", computerNum);
  let feedbackText;
  if (userGuess === computerNum) {
    feedbackText = "YAY! You guessed it";
    h2.classList.add("wiggle");
  } else if (userGuess > computerNum) {
    feedbackText = "Too high. Try again";
  } else {
    feedbackText = "Too low. Try again";
  }
  h2.textContent = feedbackText;
  console.log(feedbackText);
}
