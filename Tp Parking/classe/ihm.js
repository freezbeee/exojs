import Vehicule from "./Vehicule.js";

export class Ihm {
  constructor(formulaire, tableauHtmlResultat) {
    this.vehicules = [];
    this.formulaire = formulaire;
    this.tableauHtmlResultat = tableauHtmlResultat;
    console.log(this.formulaire);
  }

  demarrer() {
    this.formulaire.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(vehicules);
      console.log("vehicules");
      this.ajouter();
    });
  }

  ajouter() {
    const vehiculeInput = this.formulaire.querySelector(
      "input[name='ajoutDeVehicule']"
    ).value;
    const voiture = new Vehicule(vehiculeInput);
    this.vehicules.push(voiture);
    this.afficher(voiture);
  }

  afficher(c) {
    this.tableauHtmlResultat.innerHTML = `
    <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
  vehicule ${c.vehiculeInput} prenez votre ticket
</div>
        `;
  }
}
