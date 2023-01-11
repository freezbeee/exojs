let num = Number (prompt("donner un numero :"))
let total = 0
let phrase = "0"
let i = 1



while (total <= num){

    total +=i
    phrase = `${phrase} + ${i}`
    i++
}


console.log(phrase)