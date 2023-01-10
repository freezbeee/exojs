let carre = Number (prompt("donner la longueur en cm du carré : ")); 
let perimetre = carre*4;
let aire =carre*carre


let phrase1 = `  le perimetre du carré est ${perimetre} cm 
et son aire est de ${aire} cm `

console.log(phrase1)


let longeur = Number (prompt("donner la longueur en cm du rectangle : ")); 
let largeur = Number (prompt("donner la largueur en cm du rectangle : ")); 
let perimetreRectangle = (longeur+largeur)*2;
let aireRectangle =longeur*largeur


let phrase2 = `  le perimetre du rectangle est ${perimetreRectangle} cm 
et son aire est de ${aireRectangle} cm `

console.log(phrase2)