// let num = Number (prompt("donner un numero :"))
// let total = 0
// let phrase = "0"
// let i = 1



// while (total <= num){

//     total +=i
//     phrase = `${phrase} + ${i}`
//     i++
// }


// console.log(phrase)



let nombre = 0
let affichage = "liste d'entiters"


nombre = Number(prompt("donnez un nombre :"))

for(let i = 1; i <= nombre/2 + 1; i++){
    let somme = 1;
    let chaine = " "+ nombre + " = " + i + " ";
    for (let j = i+1; j <= nombre/ 2+1; j++){
        somme =  somme + j
        chaine += " + "+j
        if(somme == nombre){
            affichage += ` ${chaine}`
            break
        } else if (somme > nombre){
            break
        }
    }
}
console . log (affichage)
