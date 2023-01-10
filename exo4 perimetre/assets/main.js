let carre = Number (prompt("donner la longeur en cm du carré : ")); 
let perimetre = carre*4;
let aire =carre*carre


let phrase1 = `  le perimetre du carré est ${perimetre} cm 
et son aire est de ${aire} cm `

console.log(phrase1)


let longeur = Number (prompt("donner la longeur en cm du rectangle : ")); 
let largeur = Number (prompt("donner la largeur en cm du rectangle : ")); 
let perimetreRectangle = (longeur+largeur)*2;
let aireRectangle =longeur*largeur


let phrase2 = `  le perimetre du rectangle est ${perimetreRectangle} cm 
et son aire est de ${aireRectangle} cm `

console.log(phrase2)