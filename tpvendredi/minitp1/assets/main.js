let annuaire = [
  {
    nom: "Dupont",
    prenom: "Jean",
    age: 15,
  },
  {
    nom: "Durant",
    prenom: "Pierre",
    age: 16,
  },
  {
    nom: "Martin",
    prenom: "Jean",
    age: 17,
  },
];
let affichage = "";
let personne = "";
let i = 0;
let menu = 0;

while (menu != 4) {
  menu = Number(
    prompt(`------------menu------------
                              1)afficher les contacts
                              2)ajouter un contact
                              3)supprimer un contact
                              4)quiter`)
  );

  //   afficher contact
  if (menu == 1) {
    for (let contact of annuaire) {
      personne = `${i}) ${contact.nom} ${contact.prenom} age : ${contact.age}
      `;
      i++;
      affichage += personne;
    }
    affichage = alert(affichage);
    i = 0;

    // ajout de contact
  } else if (menu == 2) {
    let addName = prompt("le nom a ajouter :");
    let addFirstName = prompt("le prenom a ajouter :");
    let addAge = prompt("l'age a ajouter :");
    let addContact = {
      nom: addName,
      prenom: addFirstName,
      age: addAge,
    };

    addContact = annuaire.push(addContact);

    // supp contact
  } else if (menu == 3) {
    for (let contact of annuaire) {
      personne = `${i}) ${contact.nom} ${contact.prenom} age : ${contact.age}
        `;
      i++;
      affichage += personne;
    }
    let supp = Number(prompt(affichage));
    i = 0;
    if (supp == annuaire.includes[supp]) {
      let suppression = annuaire.splice(supp);
    }
  }
}
alert("bye");
