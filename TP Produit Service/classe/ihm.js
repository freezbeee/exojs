
import { Produit } from "./Produit.js";
import { Service } from "./Service.js";



export class Ihm {
    constructor(formulaire,tableauHtmlResultatProduit,tableauHtmlResultatService){
        this.Produits = [];
        this.Services = [];
        
        this.formulaire = formulaire;
        
        this.tableauHtmlResultatProduit = tableauHtmlResultatProduit;
        this.tableauHtmlResultatService = tableauHtmlResultatService;
        
    }

    demarrer(){
        this.formulaire.addEventListener("submit",(e) => {
            e.preventDefault();
            console.log(text)
            this.ajouter();
        })
    }

    ajouter(){
        // Récupérer les champs et créer un contact

        const choix = this.formulaire.querySelector("input[name='choix']:checked").value
        const titre = this.formulaire.querySelector("input[name='titre']").value
        const prix = this.formulaire.querySelector("input[name='prix']").value
        const text = this.formulaire.querySelector("textarea[name='text']").value
        const stock = this.formulaire.querySelector("input[name='stock']").value
        const domaine = this.formulaire.querySelector("input[name='domaine']").value
        
        if (choix != "produit"){
            const service = new Service(titre,prix,text,domaine)
        
            this.Services.push(service)
         
            this.afficherService(service)
        } else {
            
                        const produit = new Produit(titre,prix,text,stock)
                    
                        this.Produits.push(produit)
                     
                        this.afficher(produit)

        }
    }

    afficher(c){
        // Ajouter un contact à l'affichage HTML
        // this.tableauHtmlResultat.innerHTML =""
        this.tableauHtmlResultatProduit.innerHTML += `<tr>
        <td>${c.titre}</td>
        <td>${c.prix}</td>
        <td>${c.text}</td>
        <td>${c.stock}</td>
        
        </tr>
        `
        
        
    }
    afficherService(c){
        this.tableauHtmlResultatService.innerHTML += `<tr>
        <td>${c.titre}</td>
        <td>${c.prix}</td>
        <td>${c.text}</td>
        <td>${c.domaine}</td>
        
        </tr>
`
    }

    }