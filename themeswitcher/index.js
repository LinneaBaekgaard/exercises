"use strict";

const themeSwitcher = document.querySelector("#theme-switcher");

themeSwitcher.addEventListener("change", function () {
  document.body.dataset.theme = this.value;
});
