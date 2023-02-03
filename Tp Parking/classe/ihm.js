import Vehicule from "./Vehicule.js";

export class Ihm {
  constructor(formulaire, tableauHtmlResultat) {
    this.vehicules = [];
    this.formulaire = formulaire;
    this.tableauHtmlResultat = tableauHtmlResultat;
    console.log(this.formulaire);
  }

  demarrer() {
    // console.log("hello");
    this.formulaire.addEventListener("submit", (e) => {
      e.preventDefault();
      //   console.log(vehicules);
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
    // console.log(voiture.imatriculation);
    console.log(this.vehicules);
  }

  afficher(c, d) {
    this.tableauHtmlResultat.innerHTML = `
    <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
  vehicule ${c.imatriculation} prenez votre ticket
</div>
        `;
  }
}
