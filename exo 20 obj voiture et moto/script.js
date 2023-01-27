// import Car from "./classe/car.js";
import Voiture from "./classe/voiture.js";
import Moto from "./classe/moto.js";

let renault = new Voiture("renault", "Kangoo", "200.000km", "2003");
let BMW = new Moto("BMW", "Rockster", "20.00km", "2009");

console.log(renault.display());
console.log(BMW.display());
let text = document.querySelector("#text");

text.innerHTML += renault.display();
text.innerHTML += BMW.display();
