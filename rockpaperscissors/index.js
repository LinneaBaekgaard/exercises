"use strict";

let userChoice;
let computerChoice;

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

const computerNum = Math.floor(Math.random() * 100) + 1;
let userGuess;

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2");

btn.addEventListener("click", click_btn);
function click_btn() {
  userGuess = parseInt(input.value);
  console.log("click: ", computerNum);
  let feedbackText;
  if (userGuess < computerNum) {
    feedbackText = "Too low! Try again.";
  } else if (userGuess > computerNum) {
    feedbackText = "Too high! Try again.";
  } else if (userGuess === computerNum) {
    feedbackText = "Congratulations! You guessed it!";
  }
  h2.textContent = feedbackText;
  console.log(feedbackText);
}

function addEventListenersToButtons() {
  rockBtn.addEventListener("click", rockClick);
  paperBtn.addEventListener("click", paperClick);
  scissorsBtn.addEventListener("click", scissorsClick);
}

function resetText() {
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
}

function rockClick() {
  resetText();
  //   console.log("ROCK");
  userChoice = "rock";
  computerGuess();
}
function paperClick() {
  resetText();
  //   console.log("PAPER");
  userChoice = "paper";
  computerGuess();
}
function scissorsClick() {
  resetText();
  //   console.log("SCISSORS");
  userChoice = "scissors";
  computerChoice = "scissors";
  computerGuess();
}

function computerGuess() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = choiceArray[randomNum];
  console.log("computerChoice: ", computerChoice);
  console.log(userChoice);
  //   computerChoice = "paper";
  animationStarter();
}

function animationStarter() {
  p1.classList.remove("paper", "scissors");
  p1.classList.add("rock", "shake");
  p1.addEventListener("animationend", animationEnd);

  p2.classList.remove("paper", "scissors");
  p2.classList.add("rock", "shake");
  p2.addEventListener("animationend", animationEnd);
}
function animationEnd() {
  //evaluation
  p1.classList.remove("shake", "rock");
  p1.classList.add(userChoice);

  p1.removeEventListener("animationend", animationEnd);

  p2.classList.remove("shake", "rock");
  p2.classList.add(computerChoice);
  p2.removeEventListener("animationend", animationEnd);

  showResult();
}

// Se om du vinder, taber eller det er uafgjort
function showResult() {
  if (userChoice === computerChoice) {
    document.querySelector("#draw").classList.remove("hidden");
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    document.querySelector("#win").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
}
// function resetText() {}

addEventListenersToButtons();
