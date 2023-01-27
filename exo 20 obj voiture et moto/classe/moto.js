import Vehicule from "./Vehicule";

export default class Moto extends Vehicule {
  display() {
    return `<p> Ma MOTO : La moto ${super.display()} </p> <hr>`;
  }
}
