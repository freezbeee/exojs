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
let btn = document.querySelector("#btn");
let addFish = {};

btn.addEventListener("click", () => {
  addFish = {
    name: document.querySelector("#name").value,
    race: document.querySelector("#race").value,
    age: document.querySelector("#age").value,
  };

  addFish = fish.push(addFish);
  // console.log("btn");
  // console.log(fish);
  affichage = "";
  if (addFish != "") {
    for (let key in fish) {
      affichage += `<option value="${i}">${fish[key]["name"]}</option>`;
      i++;
      console.log(key + " : " + fish[key]["name"] + " " + fish[key]["race"]);
    }
  }
});

// option.innerHTML = affichage;
