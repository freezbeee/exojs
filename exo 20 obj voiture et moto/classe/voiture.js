import Car from "./car.js";

export default class Voiture extends Car {
  display() {
    return `La TUTURE : ${super.display()} et elle est climatise </p> <hr>`;
  }
}
