
let age = prompt("donner un age : ")
let anciennete = prompt("quelle est votre ancienneté : ")
let salaire = prompt("donner votre salaire du mois : ")
let calcsalaire = 0

if ((anciennete <= 10 )&&(anciennete >= 1)){
    for(let i= 1; i <= anciennete ; i++){
        calcsalaire =calcsalaire + salaire/2
        
    }
} else {
    for(let i= 1; i <= anciennete ; i++){
        calcsalaire =calcsalaire +  salaire/2
        
    }
}

if((age >= 46)&&(age <= 49)){
    calcsalaire = calcsalaire + salaire*2
} else if (age >= 50){
    calcsalaire = calcsalaire + salaire*5
}

let phrase = `vous avez ${age} ans, vous avez une ancienneteé de ${anciennete} ans
et votre salaire etait de ${salaire} euros en cosequence votre indemnité de licenciment sera de ${calcsalaire} euros`

console.log(phrase)