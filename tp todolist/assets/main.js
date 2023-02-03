import { Ihm } from "./classe/ihm.js";


let formAddTodo = document.querySelector("#form-add-todo");
let formsearchTodo = document.querySelector("#form-search-todo");

let result = document.querySelector("#result");

const ihmTodo = new Ihm(formAddTodo,result)
const ihmSearch = new Ihm(formsearchTodo,result)

ihmTodo.demarrer()







// let todolist = document.querySelector("#todolist");
// let todoBody = document.querySelector("#todoBody");
// let btnTache = document.querySelector("#btnTache");



// form.onsubmit = (e) => {
//   //annule le comportement classique d'une soumission de formulaire (empeche de recharger la page)
//   e.preventDefault();
//   // alert('bonjour')
//   const tr = document.createElement("tr");
//   const td = document.createElement("td");
//   const td2 = document.createElement("td2");

//   const terminer = document.createElement("button");
//   terminer.innerHTML = "terminer";

//   const supp = document.createElement("button");
//   supp.innerHTML = "supprimer";

//   const modif = document.createElement("button");
//   modif.innerHTML = "modifier";

//   td.textContent = task.value;
//   todoBody.appendChild(tr);
//   tr.appendChild(td);
//   tr.appendChild(td2);
//   td2.appendChild(terminer);
//   td2.appendChild(supp);
//   td2.appendChild(modif);
//   let i = 0;

//   terminer.addEventListener("click", () => {
//     td.style = "text-decoration:line-through; color:red";
//     i++;
//     if (i % 2 === 0) {
//       td.style = "text-decoration:none";
//     }
//   });

//   supp.addEventListener("click", () => {
//     td.remove();
//     modif.remove();
//     supp.remove();
//     terminer.remove();
//   });
// //   modif.addEventListener("click", () => {
// //     alert("coucou");
// //     supp.disabled = true;
// //   });
// };