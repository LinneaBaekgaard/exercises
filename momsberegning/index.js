"use strict";

function momsBeregner(beloeb, moms = 25) {
  return (beloeb * moms) / 100 + beloeb;
}

console.log("Resultat:", momsBeregner(100 + 32));

// Momsen er pr. default sat til 25.
// Dog kan den ændres ved at skrive et andet tal som 2. parameter (der hvor der står 32) - dermed overskrives default momsen.
