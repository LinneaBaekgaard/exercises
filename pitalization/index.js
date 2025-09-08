"use strict";

const theName = "peTer";
const threeCapitalized1 = theName.substring(0, 2).toLowerCase();
const threeCapitalized2 = theName.substring(2, 3).toUpperCase();
const threeCapitalized3 = theName.substring(3).toLowerCase();

// Tjek i console - det skal være "peTer" - altså det 3. bogstav er stort
console.log(threeCapitalized1 + threeCapitalized2 + threeCapitalized3);

// const theName = "pETer";
const threeCapitalized4 = theName.substring(0, 1).toLowerCase();
const threeCapitalized5 = theName.substring(1, 2).toUpperCase();
const threeCapitalized6 = theName.substring(2, 3).toUpperCase();
const threeCapitalized7 = theName.substring(3, 4).toLowerCase();
const threeCapitalized8 = theName.substring(4).toLowerCase();

// Tjek i console - det skal være "pETer"
console.log(threeCapitalized4 + threeCapitalized5 + threeCapitalized6 + threeCapitalized7 + threeCapitalized8);

// const theName = "PEter";
const threeCapitalized9 = theName.substring(0, 1).toUpperCase();
const threeCapitalized10 = theName.substring(1, 2).toUpperCase();
const threeCapitalized11 = theName.substring(2, 3).toLowerCase();
const threeCapitalized12 = theName.substring(3).toLowerCase();

// Tjek i console - det skal være "PEter"
console.log(threeCapitalized9 + threeCapitalized10 + threeCapitalized11 + threeCapitalized12);

// const theName = "peteR";
const threeCapitalized13 = theName.substring(0, 3).toLowerCase();
const threeCapitalized14 = theName.substring(3, 4).toLowerCase();
const threeCapitalized15 = theName.substring(4).toUpperCase();

// Tjek i console - det skal være "peteR"
console.log(threeCapitalized13 + threeCapitalized14 + threeCapitalized15);

// const theName = "PEtER";
const threeCapitalized16 = theName.substring(0, 2).toUpperCase();
const threeCapitalized17 = theName.substring(2, 3).toLowerCase();
const threeCapitalized18 = theName.substring(3, 4).toUpperCase();
const threeCapitalized19 = theName.substring(4).toUpperCase();

// Tjek i console - det skal være "PEtER"
console.log(threeCapitalized16 + threeCapitalized17 + threeCapitalized18 + threeCapitalized19);
