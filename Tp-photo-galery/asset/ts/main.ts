class fish {
  private static _count = 0;
  private _id: number;
  constructor(
    private _firstname: string,
    private _lastname: string,
    private _Description: string,
    private _url: string
  ) {
    this._id = ++fish._count;
  }
  get id() {
    return this._id;
  }

  get firstname() {
    return this._firstname;
  }
  get Lastname() {
    return this.Lastname;
  }
  get Description() {
    return this._Description;
  }
  get url() {
    return this._url;
  }
  get retunFishList() {
    return `${this._id}) ${this._firstname} ${this._lastname}`;
  }
}
// console.log(fish);

let fishTable = [
  new fish(
    "Nemo",
    "Le Poisson Clown",
    "la star des poisson s'est lui",
    "./asset/img/Nemo.webp"
  ),
  new fish(
    "Blop",
    "Fish",
    "l'un poisson le plus moche Avertissement risque de devenir aveugle",
    "./asset/img/blop.jfif"
  ),
  new fish(
    "Bubule",
    "Le Poisson Rouge",
    "Mellieur nom a donné a votre poisson",
    "./asset/img/dori.jfif"
  ),
];
let selectFish = fishTable[0];
let myDivFishList = document.querySelector("#result-fish") as HTMLDivElement;
let newpick = document.createElement("img");
let next = document.querySelector("#next") as HTMLDivElement;
let last = document.querySelector("#last") as HTMLDivElement;

const refreshDescription = () => {
  let myDivFishDescription = document.querySelector(
    "#result-description"
  ) as HTMLDivElement;

  if (selectFish) {
    let fishPick = document.querySelector("#fishPick") as HTMLDivElement;
    newpick.className = "card-img-top rounded-circle ";

    newpick.src = selectFish.url;
    myDivFishDescription.innerHTML = selectFish.Description;

    fishPick.appendChild(newpick);
  } else {
    myDivFishDescription.innerHTML = "";
  }
};

const refreshFish = () => {
  myDivFishList.innerHTML = "";
  fishTable.forEach((fish) => {
    let newButton = document.createElement("button");
    newButton.textContent = fish.retunFishList;
    newButton.className =
      fish === selectFish
        ? "btn btn-light p-2 px-4 w-100 my-2"
        : "btn btn-outline-light p-2 px-4 w-100 my-2";
    newButton.id = `selectFish-${fish.id}`;
    newButton.addEventListener("click", () => {
      selectFish = fish;
      refreshDescription();
      refreshFish();
    });

    myDivFishList.appendChild(newButton);
  });
};
next.addEventListener("click", () => {
  console.log("suivant");

  refreshDescription();
});
last.addEventListener("click", () => {
  console.log("precedent");
  refreshFish();
  refreshDescription();
});

refreshFish();
refreshDescription();
