// let price = document.querySelector(price)
<<<<<<< HEAD
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
=======
let message = document.querySelector("#message");
let info = document.querySelector("#info");
let btn = document.querySelector("#btn-price");
let price = Number(document.querySelector("#price").value);

let gifts = ["un bateau", "de l'amour", "rien"];
let randomGift = gifts[Math.round(Math.random() * (gifts.length - 1))];
let random = Math.round(Math.random() * 100);

btn.addEventListener("click", () => {
  console.log(price);
  for (let i = 7; i != 0; i--) {
    console.log(i);
    if (price != random) {
      message.textContent = `il te reste ${i} essais`;
      if (price < random) {
        info.textContent = "s'est Plus";
      } else if (price > random) {
        info.textContent = "s'est Moin";
      }
    } else {
      message.textContent = "bravo tu as gagner" + randomGift;
    }
  }
});

console.log(random);
console.log(randomGift);
// console.log(trycount());
>>>>>>> d997b210e556b8e5e51a33dcf0871a1ea7e4ed7a
