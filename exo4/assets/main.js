let diametre = prompt("donner un dimetre en cm : "); 
let rayon = parseInt(diametre) / 2;
let result =2*Math.PI*rayon
let resultfloor = Math.floor(2*Math.PI*rayon)

let phrase = `  le perimetre d'un cercle de ${diametre} cm est ${result} cm arondie a ${resultfloor} cm`

console.log(phrase)