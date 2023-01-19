// let price = document.querySelector(price)
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
