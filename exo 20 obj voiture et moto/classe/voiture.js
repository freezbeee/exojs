import Car from "./car.js";

export default class Voiture extends Car {
  display() {
    return `<p> la TUTURE : La voiture ${super.display()} et elle est climatise </p> <hr>`;
  }
}
