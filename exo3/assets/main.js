let diametre = prompt("donner un dimetre en cm : "); 
let rayon = parseInt(diametre) / 2;
let result =2*Math.PI*rayon
let resultaire = Math.PI*Math.pow(rayon,2)

let phrase = `  le perimetre d'un cercle de ${diametre} cm est ${result} cm et l'aire est ${resultaire} cm2`

console.log(phrase)