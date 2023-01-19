let affiche = document.querySelector("#affiche");
let best = document.querySelector("#best");
let bad = document.querySelector("#bad");
let moyenne = document.querySelector("#moyenne");
let noteMoy = 0;
let noteMax = -1;
let noteMin = 2000;
let nbrNote = Number(prompt("donner le nombre de note qui sera saisie :"));

for (let i = 0; i < nbrNote; i++) {
  let note = Number(prompt(`donner la note numero ${i}  :`));
  if (note <= 20 && note >= 0) {
    noteMoy += note;
    affiche.innerHTML += `note n°${i} : ${note}/20 </br>`;
    // verif note max
    if (noteMax < note) {
      noteMax = note;
    }
    // verif note min
    if (noteMin > note) {
      noteMin = note;
    }
  } else {
    i--;
    alert("une note entre 0 et 20 svp");
  }

  console.log(noteMoy);
  console.log(affiche);
}

noteMoy = Math.round(noteMoy / nbrNote);
if (noteMoy > 10) {
  moyenne.classList.add("badMoyenne");
} else {
  moyenne.classList.add("goodMoyenne");
}
console.log(noteMoy);

best.textContent = `la meilleure note est ${noteMax}`;
bad.textContent = `la pire note est ${noteMin}`;
moyenne.textContent = `la moyenne  est de ${noteMoy}`;
