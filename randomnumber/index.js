"use strict";
// console.log("Hello, World!");

// 1. Få tilfældige tal mellem 1 og 100 i konsollen
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("randomNumber", randomNumber);

// Få det tilfældige tal til at stå i html filen
document.body.innerHTML += "<p>Tilfældigt tal: " + Math.floor(Math.random() * 100) + "</p>";
