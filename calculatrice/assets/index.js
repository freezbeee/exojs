const affichage = document.querySelector("#affichage");
// console.log("coucou");
// stock valeur precedente
let valeurPrecedente = 0;
let affichagePrecedent = "";
let operationVal = null;
let memoireVal;

// les clique
let allTouches = document.querySelectorAll("span");

// parcours des touches (mes span)
for (let touche of allTouches) {
  touche.addEventListener("click", gestionTouche);
}

// fonction qui reagit sur mes touches
function gestionTouche() {
  // permet de recuperer la valeur de ma touche
  let touche = this.innerHTML;
  // console.log(this.innerHTML);
  // console.log("testclick");
  // verif si chiffre
  if (parseInt(touche) >= 0 || touche === ".") {
    // console.log(touche);
    // affiche si numero
    //  met a jour l'ecran
    // affichage concatenation
    // if (affichagePrecedent === "") {
    //   // en mode texte evite les addition
    //   affichagePrecedent = touche.toString();
    // } else {
    //   // pas d'espace entre chaque $ (abruti de moi)
    // }
    affichagePrecedent = `${affichagePrecedent}${touche.toString()}`;
    affichage.innerHTML = affichagePrecedent;
  } else {
    // verif des autre touches
    switch (touche) {
      // efface tout
      case "C":
        valeurPrecedente = 0;
        affichagePrecedent = "";
        operationVal = null;
        affichage.innerHTML = 0;
        break;
      // calc
      case "+":
      case "-":
      case "*":
      case "/":
        if (valeurPrecedente === 0) {
          valeurPrecedente = parseFloat(affichagePrecedent);
        } else {
          valeurPrecedente = calc(
            valeurPrecedente,
            parseFloat(affichagePrecedent),
            operationVal
          );
        }
        // console.log(valeurPrecedente);
        // console.log(affichagePrecedent);
        // console.log(operationVal);
        // affiche ecran actualise
        affichage.innerHTML = valeurPrecedente;
        // l'operateur est ici !!!!!!!
        operationVal = touche;
        // pour reset l'ecran quand symbole (operation)

        affichagePrecedent = "";
        break;

      case "=":
        if (valeurPrecedente === 0) {
          valeurPrecedente = parseFloat(affichagePrecedent);
        } else {
          valeurPrecedente = calc(
            valeurPrecedente,
            parseFloat(affichagePrecedent),
            operationVal
          );
        }

        // affiche ecran actualise
        affichage.innerHTML = valeurPrecedente;

        //stock resul

        affichagePrecedent = valeurPrecedente;
        // evite de faire *2 quand on reclick egal
        valeurPrecedente = 0;

        break;
    }
  }
}

// les operation
function calc(nb1, nb2, operation) {
  nb1 = parseFloat(nb1);
  nb2 = parseFloat(nb2);
  if (operation === "+") return nb1 + nb2;
  if (operation === "-") return nb1 - nb2;
  if (operation === "*") return nb1 * nb2;
  if (operation === "/") return nb1 / nb2;
}
// console.log(calc(2, 4, "*"));
// console.log(calc(2, 4, "+"));
// console.log(calc(2, 4, "/"));
