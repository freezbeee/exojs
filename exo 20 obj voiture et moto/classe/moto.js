import Car from "./car.js";

export default class Moto extends Car {
  display() {
    return `Ma MOTO : ${super.display()} </p> <hr>`;
  }
}
