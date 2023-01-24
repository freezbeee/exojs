// let price = document.querySelector(price)
// let message = document.querySelector('#message')
// let i = 0

let gift = ["un bateau" ,"de l'amour","rien"]

let randomGift = Math.round(Math.random(gift.lenght))


let random = Math.round(Math.random()*1000)
for( let i = 7 ; i!=0; i--){
    if (price != random){
        message = "bravo tu as gagner" + randomGift 
    }
}
console.log(random)
console.log(randomGift)