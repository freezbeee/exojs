import Vehicule from "./Vehicule.js";

export default class Moto extends Vehicule {
  display() {
    return `<p> Ma MOTO : La moto ${super.display()} </p> <hr>`;
  }
}
