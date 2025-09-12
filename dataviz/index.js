"use strict";

getJSON();

setInterval(getJSON, 10000);

async function getJSON() {
  const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
  const data = await response.json();
  console.log(data.inQueue);

  showData(data.inQueue);
}

function showData(number) {
  document.querySelector("ul").style.setProperty("--ypos", `${-296 * parseInt(number)}px`);
}
