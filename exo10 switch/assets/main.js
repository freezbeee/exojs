
let choix = (prompt("votre choix : 1.eau 2.jus d'orange 3.limonade 4.cafe 5.thé" ))


switch(true){
    case choix === "1":
        message = 'votre choix est "eau"'
        break
    case choix === "2":
        message = "votre choix est 'jus d'orange'"
        break
    case choix === "3":
        message = 'votre choix est "limonade"'
        break
    case choix === "4":
        message = 'votre choix est "Café"'
        break
    case choix === "5":
        message = 'votre choix est "Thé"'
        break
    default : 
        message = "cette categorie n'existe pas"
        break
   


}
console.log(message)