import { Ihm } from "./classe/ihm.js";



let resultProduit = document.querySelector("#resultProduit");
let resultService = document.querySelector("#resultService");
let produit = document.querySelector("#produit");
let service = document.querySelector("#service");

const domaine = document.querySelector("#domaine")
const stock = document.querySelector("#stock")

produit.addEventListener('click', ()=>{
    domaine.classList.add('d-none')
    stock.classList.remove('d-none')
}) 
service.addEventListener('click', ()=>{
    
    stock.classList.add('d-none')
    domaine.classList.remove('d-none')
})




let formContact = document.querySelector("#formContact");


    const ihm = new Ihm(formContact,resultProduit,resultService )
 
    ihm.demarrer()
    

