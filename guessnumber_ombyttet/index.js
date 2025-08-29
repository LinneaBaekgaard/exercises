"use strict";

// Definerer knapperne som konstanter
const btn_higher = document.querySelector("#btn_higher");
const btn_guess = document.querySelector("#btn_guess");
const btn_lower = document.querySelector("#btn_lower");
const btn_correct = document.querySelector("#btn_correct");

// Variabler til computerens og brugeren gæt
let computerChoice;
let userChoice;

// Variabler til min og max værdi samt gæt
let min = 0;
let max = 100;
let guess;

// Starter spillet - funktion til at starte spillet ved klik på gæt knappen
startGame();

function startGame() {
  btn_guess.addEventListener("click", makeGuess);
}

// Gør de tre knapper klikbare
btn_higher.addEventListener("click", tooLow);
btn_lower.addEventListener("click", tooHigh);
btn_correct.addEventListener("click", guessedCorrect);

// Giver besked i console om hvorvidt gættet er for højt eller for lavt og laver et nyt gæt
// samt opdaterer min og max værdierne
function tooLow() {
  min = guess;
  makeGuess();
  console.log("too low");
}

function tooHigh() {
  max = guess;
  makeGuess();
  console.log("too high");
}

function makeGuess() {
  guess = Math.floor((min + max) / 2);
  console.log("guess", guess);
  document.querySelector("h2").textContent = guess;
}

// Giver besked i h2 elementet om at computeren har gættet rigtigt
function guessedCorrect() {
  document.querySelector("h2").textContent = "Congratulations, I guessed it!";
}

// function result() {}

// function reset() {}
