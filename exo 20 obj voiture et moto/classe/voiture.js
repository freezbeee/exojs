import Vehicule from "./Vehicule.js";

export default class Voiture extends Vehicule {
  constructor(name, model, kilometrage, annee, clim) {
  super(name, model, kilometrage, annee)
  this.clim = clim
}
  display() {
    return `<p> la TUTURE : La voiture ${super.display()} et elle ${this.clim} </p> <hr>`;
  }
}
