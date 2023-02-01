import { AddTodo } from "./addTodo.js";

export class Ihm {
    constructor(formulaire,tableResult){
        this.todoTable = [];
        
        
        this.formulaire = formulaire;
        
        this.tableResult = tableResult;
       
        
    }

    demarrer(){
        setTimeout(()=>{
        this.formulaire.addEventListener("submit",(e) => {
            e.preventDefault();
            console.log("coucou")
            this.ajouter();
        })
        })
    }

    ajouter(){
        // Récupérer les champs et créer un contact

        let task = document.querySelector("#task").value;
        console.log(task)
        let id = 1;
        let title = document.querySelector("#title").value;
        console.log(title)
       
        
       
            const todo = new AddTodo(id,title,task)
        
            this.todoTable.push(todo)
            
            this.afficher(todo)
            
        }
        
        afficher(c){


            this.result(c)
           
            
            
            
            
            let finish = document.querySelector(`#finish${this.todoTable.indexOf(c)}`)
            let supp = document.querySelector(`#supp${this.todoTable.indexOf(c)}`)
            let i = 1
          
            finish.addEventListener('click', () => {
                finish.innerHTML = "fait"
                
                i++;
                if (i % 2) {
                    finish.innerHTML = "Non fait"
                    
                   
                    
                }
            } )
        
        supp.addEventListener('click', () => {
            console.log('ok')
            this.todoTable.splice(this.todoTable.indexOf(c),1)
            console.table(this.todoTable)
            this.result(c)

          
        } )
        
    }
    
    result(c){
        this.tableResult.innerHTML = "";
        this.todoTable.forEach(c => {
        this.tableResult.innerHTML += `<tr>
        <td>${this.todoTable.indexOf(c)}</td>
        <td>${c.title}</td>
        <td>${c.task}</td>
        <td><button type="button" id="finish${this.todoTable.indexOf(c)}" class="btn btn-outline-primary">Non fait</button>
        <button type="button" id="supp${this.todoTable.indexOf(c)}" class="btn btn-outline-danger">supprimer</button></td>
        
        </tr>
        `
        })
    }
    
    
    
}