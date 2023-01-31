import Vehicule from "./Vehicule.js";

export class Ihm {
  constructor(formulaire, tableauHtmlResultat) {
    this.vehicules = [];
    this.formulaire = formulaire;
    this.tableauHtmlResultat = tableauHtmlResultat;
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
    // Récupérer les champs et créer un contact
    // const titre = this.formulaire.querySelector("input[name='titre']:checked").value
    // const nom = this.formulaire.querySelector("input[name='nom']").value
    // const prenom = this.formulaire.querySelector("input[name='prenom']").value
    // const telephone = this.formulaire.querySelector("input[name='telephone']").value
    // const email = this.formulaire.querySelector("input[name='email']").value
    // const dateNaissance = this.formulaire.querySelector("input[name='dateNaissance']").value
    const vehiculeInput =
      this.formulaire.querySelector("#ajoutDeVehicule").value;

    const voiture = new Vehicule(vehiculeInput);
    this.vehicules.push(voiture);
    this.afficher(voiture);
  }

  afficher(c) {
    // Ajouter un contact à l'affichage HTML
    this.tableauHtmlResultat.innerHTML = `
    <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
  vehicule ${c.vehiculeInput} prenez votre ticket
</div>
        `;
  }
}
