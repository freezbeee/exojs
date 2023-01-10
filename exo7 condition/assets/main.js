let mail =  (prompt("donner votre mail ")); 
let mdp =  (prompt("donner lvotre mdp ")); 


let mailbdd = "coucou@moi.fr"
let mdpbdd = "coucou"

if((mail === mailbdd) && (mdp === mdpbdd)){
    console.log("bienvenue sur votre compte")

} else if ((mail != mailbdd) && (mdp != mdpbdd)) {
    console.log("info incorect")
} else if (mdp != mdpbdd) {
    console.log("mdp incorect")
} else {
    
    console.log("mail incorect")
}






