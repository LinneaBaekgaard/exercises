"use strict";

const list = document.querySelector("ul");

setInterval(funcOne, 1000);
const myArray = [];

function funcOne() {
  console.log("funcOne");

  if (myArray.length > 19) {
    myArray.shift();
    console.log("myarray", myArray);
    console.log(list.firstElementChild);
    list.removeChild(list.firstElementChild);
  }

  const randoNum = Math.floor(Math.random() * 100) + 1;
  myArray.push(randoNum);
  console.log("array", myArray.length);

  const li = document.createElement("li");
  li.style.setProperty("--height", randoNum);
  list.appendChild(li);
}
