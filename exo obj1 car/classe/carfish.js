export class Fish {
    constructor(name,model,vitesse) {
        this.name = name
        this.model = model
        this.vitesse = vitesse
    }

    aceleration() {
       return `Le poisson ${this.name} de marque ${this.model} il va a ${this.vitesse += 10} km/h`
    }
    tourner() {
       return `Le poisson ${this.name} de marque ${this.model} il va a ${this.vitesse -= 5} km/h`
    }
}