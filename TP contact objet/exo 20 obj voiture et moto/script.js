let name = document.querySelector("#name");
let firstname = document.querySelector("#firstname");
let phone = document.querySelector("#phone");
let birth = document.querySelector("#birth");
let mail = document.querySelector("#mail");
let btn = document.querySelector("#btn");

console.log(renault.display());
console.log(BMW.display());
let text = document.querySelector("#text");

text.innerHTML += renault.display();
text.innerHTML += BMW.display();
