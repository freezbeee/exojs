import Car from "./car.js";

export default class Moto extends Car {
  display() {
    return `<p> Ma MOTO : La moto ${super.display()} </p> <hr>`;
  }
}
