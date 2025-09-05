"use strict";

const str = "Peter Heronimous Lind";

// console.log(string.lastIndexOf(" "));

// Fornavn
str.substring(0, str.indexOf(" "));
console.log(str.substring(0, str.indexOf(" ")));

// Mellemnavn
str.substring(str.indexOf(" "));
console.log(str.substring(str.indexOf(" ") + 1, str.lastIndexOf(" ")));

// Efternavn
str.substring(str.lastIndexOf(" "));
console.log("" + str.substring(str.lastIndexOf(" ") + 1) + "");
