// Gæt et tal spil:
"use strct";

// Konstaterer variablerne fra opgaven:

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h3 = document.querySelector("h3");

// Computer genererer et tilfældigt tal mellem 0 og 100:

const computerNum = Math.floor(Math.random() * 101);
let userGuess;

// Når brugeren klikker på knappen, kaldes funktionen click_btn:

btn.addEventListener("click", click_btn);
function click_btn() {
  console.log("Click");
  const userGuess = parseInt(input.value);

  console.log(typeof userGuess);
  console.log("User guess: " + userGuess);
  console.log("Computer number: " + computerNum);

  let feedbackText;
  if (userGuess === computerNum) {
    feedbackText = "Congratulations, you guessed it! :)";
    h3.classList.add("wiggle");
    document.querySelector("button2").classList.remove("hide");
  } else if (userGuess > computerNum) {
    feedbackText = "Too high, try again :(";
    h3.classList.remove("wiggle");
  } else {
    feedbackText = "Too low, try again :(";
    h3.classList.remove("wiggle");
  }

  console.log(feedbackText);
  h3.textContent = feedbackText;

  document.querySelector("button2").addEventListener("click", replay);
  function replay() {
    console.log("Replay");
    location.reload();
  }
}
