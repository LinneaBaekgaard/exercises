"use strict";

// const themeSwitcher = document.querySelector("#theme-switcher");

// themeSwitcher.addEventListener("change", function () {
//   document.body.dataset.theme = this.value;
// });

// Kan også laves således:

const bodyElm = document.querySelector("body");

document.querySelector("#theme-switcher").addEventListener("change", (evt) => {
  console.log(evt.target.value);
  bodyElm.dataset.theme = evt.target.value;
});
