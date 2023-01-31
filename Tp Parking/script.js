import { Ihm } from "./classe/ihm.js";

let form = document.querySelector("#formVehicule");
let result = document.querySelector("#result");

let newVehicule = new Ihm(form, result);

newVehicule.demarrer();
console.log(newVehicule);
