export default class Car {
  constructor(name, model, kilometrage, annee) {
    this.name = name;
    this.model = model;
    this.kilometrage = kilometrage;
    this.annee = annee;
  }

  display() {
    return `  est une ${this.name} ${this.model} de ${this.annee} elle a ${this.kilometrage} au compteur  `;
  }
}
