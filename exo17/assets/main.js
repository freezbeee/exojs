let fishs = [
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

let i = 0;
// let option = document.querySelector("#optionContainer");
let select = document.querySelector("#fish");
let btn = document.querySelector("#btn");
let message = document.querySelector("#message");
let addFish = {};

function allPfish() {
  select.innerHTML = '<option value="0">choix de poisson</option>';
  fishs.forEach((fish) => {
    // select.innerHTML = "";
    console.log(fish);
    select.innerHTML += `<option value="${fishs.indexOf(fish) + 1}">${
      fish.name
    }</option>`;
  });
}

select.addEventListener("change", () => {
  let fishid = select.value;
  if (fishid != 0) {
    message.textContent = `vous avez choisie le poisson a l'index ${select.value}`;
  } else {
    message.textContent = "";
  }
});

btn.addEventListener("click", () => {
  // select = "";

  addFish = {
    name: document.querySelector("#name").value,
    race: document.querySelector("#race").value,
    age: document.querySelector("#age").value,
  };

  addFish = fishs.push(addFish);
  allPfish();
});
// console.log("btn");
console.log(fishs);
// allPpois();

// if (addFish.name != "" && addFish.race != "" && addFish.age != "") {
//   for (let key in fish) {
//     affichage += `<option value="${i}">${fish[key]["name"]}</option>`;
//     i++;
//     console.log(key + " : " + fish[key]["name"] + " " + fish[key]["race"]);
//   }
// }

allPfish();
