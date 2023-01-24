let allbtnaffiche = document.querySelectorAll(".btn-add")
let containerInfo = document.querySelector("#container-add")
let selectEleve = document.querySelector(".choix-eleve")
let selectmatiere = document.querySelector(".choix-matiere")
let btnAddEleve = document.querySelector(".btn-add-eleve")
let btnAddMatiere = document.querySelector(".btn-add-matiere")
let btnAddNote = document.querySelector(".btn-add-note")
let selectionmatiere = document.querySelector(".selection-matiere")
let selectioneleve = document.querySelector(".selection-eleve")
let i = 1
let j = 1
let k = 1
let hiddeneleves = document.querySelectorAll(".hiddeneleve");
let hiddenmatieres = document.querySelectorAll(".hiddenmatiere");
let hiddennotes = document.querySelectorAll(".hiddennote");
let tableauMatiere = ["plonger", "nage", "apne"]
let statEleve = [
  {
    name : "bubule",
    prenom : "le poisson rouge",
    matiere : {
      plonger : [20,10],
      nage : [1],
      apne : [0],
      
    }
  },
  {
    name : "roger",
    prenom : "le roi des poisson",
    matiere : {
      plonger : [14],
      nage : [5],
      apne : [18],
      
    }
  }
]

// ajout de note 
btnAddNote.addEventListener("click", () => {
  let note = document.getElementById("add-notes").value;

  // console.log(selectEleve)
  // selectmatiere
  // if(note != ""){
  //   statEleve[selectEleve].matiere[selectmatiere].push(note)
  // }
  // console.table(statEleve);
  
  refreshElevesSelect(selectEleve)
  refreshElevesSelect(selectioneleve)
  
  
})

// ajout de nom
btnAddEleve.addEventListener("click", () => {
  let firstname = document.getElementById("addfirstname").value;
  let name = document.getElementById("addname").value;
  
  if(firstname != "" && name != ""){
    statEleve.push({
      name : name,
      prenom : firstname,
      
    })
  }
  // console.table(statEleve);
  
  refreshElevesSelect(selectEleve)
  refreshElevesSelect(selectioneleve)
  
  
})

// ajout matiere
btnAddMatiere.addEventListener("click", () => {
  let addMatiere = document.getElementById("addmatiere").value;
  
  
  if(addMatiere != ""){
    
    tableauMatiere.push(addMatiere)
    
    for(let i = 0; i < statEleve.length; i++){
      statEleve[i].matiere[addMatiere] = [];
    }
    console.table(tableauMatiere)
    console.log(statEleve)

    
    
    
    
    // statEleve.push({
      
      //     matieres : {
        //       addMatiere : 0
        //     }
        // })
        // console.log(addMatiere)
        // console.table(statEleve)
      }
      // console.table(statEleve);
      
      refreshMatiereSelect(selectmatiere)
      refreshMatiereSelect(selectionmatiere)
      
      
    })
    
    
    
    
    // select des eleves
    const refreshElevesSelect = (elev) => {
      elev.innerHTML =`<option value="0">Sélectionnez un eleve</option>`;
      
      statEleve.forEach(eleve => {
        // console.log(eleve.name);
        elev.innerHTML += `<option value ="${statEleve.indexOf(eleve)+1}">${eleve.name}</option>`;
        // console.log(selectEleve);
      });
    }
    
    
    // select des matieres
    const refreshMatiereSelect = (matiere) => {
      matiere.innerHTML =`<option value="0">Sélectionnez une matiere</option>`;
      let valueI = 1
      tableauMatiere.forEach(matiereSolo => {
        // console.log(matiereSolo)
        matiere.innerHTML += `<option value="${valueI}">${matiereSolo}</option>`;
        // console.log(matiere)
        valueI ++
      })
      
      // for(let etudiant of statEleve) {
        
        //   for(let key in etudiant.matieres){
          
          //        console.log(` ${key} : ${etudiant.matieres[key]} /20`);
          //        console.log(`<option>${key}</option>`);
          
          //       matiere.innerHTML += `<option >${key}</option>`;
          
          //   }
          // }
          ;
        }
        
        
        
        
        
        // afficher les boutons
        for (let btn of allbtnaffiche) {
          btn.addEventListener("click", gestionbtn);
          // console.log(btn)
        }
        
        
        function gestionbtn() {
          let btn = this.innerHTML
          
          
          switch(btn){
            
            case "Eleve":
              
              i++
              
              if(i % 2){
                for (let hiddeneleve of hiddeneleves) {
                  hiddeneleve.classList.add("hidden")
                  
                }
                // console.log('hidden')
              } else {
                ;
                for (let hiddeneleve of hiddeneleves) {
                  hiddeneleve.classList.remove("hidden")
                }
                
              }
              
              
              break;
              case "Matière":
                
                j++
                if(j % 2){
                  for (let hiddenmatiere of hiddenmatieres) {
                    hiddenmatiere.classList.add("hidden")
                  }
                  // console.log('hidden')
                } else {
                  ;
                  for (let hiddenmatiere of hiddenmatieres) {
            hiddenmatiere.classList.remove("hidden")
          }
          
        }
        // console.log('addem')
        break;
        case "Note":
          k++
          if(k % 2){
            for (let hiddennote of hiddennotes) {
              hiddennote.classList.add("hidden")
            }
            // console.log('hidden')
          } else {
            ;
            for (let hiddennote of hiddennotes) {
              hiddennote.classList.remove("hidden")
            }
            
          }
          // console.log('addelevesdsd')
          break;
        }
        
      }
      refreshElevesSelect(selectEleve)
      refreshMatiereSelect(selectmatiere)
      refreshElevesSelect(selectioneleve)
      refreshMatiereSelect(selectionmatiere)
      console.log(statEleve)