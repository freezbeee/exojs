let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
]; 
let moyenne = 0
let nbnote = 0
// console.log("liste des etudiants")
// for(let key in etudiants){
// console.log(key+" : " +etudiants[key]['prenom'] +" "+ etudiants[key]['nom'])
   
// }



for(let key in etudiants){
    console.log("etudiant")
    console.log(key+" : " +etudiants[key]['prenom'] +" "+ etudiants[key]['nom'])

    console.log("**********************")
    console.log("liste des matiere")
    moyenne = 0
    nbnote = 0
    for(let key2 in etudiants[key].matieres){
    console.log(`${[key2]}  ${etudiants[key].matieres[key2]}`)
    moyenne = moyenne + etudiants[key].matieres[key2]
    nbnote ++
}
moyenne =moyenne / nbnote
console.log(moyenne.toFixed(2))
console.log("==================")
    }