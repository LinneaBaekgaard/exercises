setTimeout(showButton, 1000);
const btn = document.querySelector("button");

function showButton() {
  btn.classList.remove("hide");
  btn.classList.add("fill-btn");
}
btn.addEventListener("animationend", colorChange);

function colorChange() {
  document.querySelector("body").classList.add("background");
}

document.body.addEventListener("mousemove", filledButton);

function filledButton() {
  console.log("filledButton");
  btn.classList.add("filledButton");
}
