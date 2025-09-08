"use strict";

// Det første bogstav i navn skal være stort, resten småt - navn kan haver flere bogstaver
const theName = "Sebastian";
const threeCapitalized1 = theName.substring(0, 1).toUpperCase();
const threeCapitalized2 = theName.substring(1).toLowerCase();

// Tjek i console - det skal være "Peter"
console.log(threeCapitalized1 + threeCapitalized2);
