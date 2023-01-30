import { Ihm } from "./classe/ihm.js";


let result = document.querySelector("#result");

let formContact = document.querySelector("#formContact");

const ihm = new Ihm(formContact,result)

console.log(ihm.demarrer())
ihm.demarrer()