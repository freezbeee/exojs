import Vehicule from "./Vehicule";

export default class Voiture extends Vehicule {
  display() {
    return `<p> la TUTURE : La voiture ${super.display()} et elle est climatise </p> <hr>`;
  }
}
