let fish = [
  {
    name: "blop",
    race: "poisson rouge",
    age: "14",
  },
  {
    name: "bubulle",
    race: "poisson clown",
    age: "22",
  },
];
let affichage = "";
let i = 0;
let option = document.querySelector("#option-container");

for (let key in fish) {
  affichage += `<option value="${i}">${fish[key]["name"]}</option>`;
  i++;

  console.log(key + " : " + fish[key]["name"] + " " + fish[key]["race"]);
}

option.innerHTML = affichage;
