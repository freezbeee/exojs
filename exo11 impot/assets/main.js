
let netImposable = Number(prompt("montant net imposable"))
let nbEnfant = Number(prompt("nombre d'enfant"))
let nbAdulte = Number(prompt("nombre d'adulte"))

let taux = 0
let part = 0

switch(true){
    
    case nbEnfant <= 2 && nbEnfant >= 0 :
        part = 0.5 * nbEnfant 
        break
    case nbEnfant >= 2:
        part = 1 + (nbEnfant - 2)
        
        break
       
        
    default : 
        console.log("Erreur pour les enfants")
        break
   


}
switch(true){
    
    
    case nbEnfant > 0:
        part = part + nbAdulte
        
        break
       
        
    default : 
        console.log("Erreur pour les adultes")
        break
   


}
netImposable = netImposable / part

switch(true){
    
    
    case netImposable >= 10778 && netImposable <= 27478 :
        netImposable = Math.round(netImposable- 10777) * 0.11
        break
    case netImposable >= 27479 && netImposable <= 78570 :
        netImposable = Math.round((netImposable - 27479  )* 0.30 + 1837)
        
        break
    case netImposable >= 78571 && netImposable <= 168994 :
        netImposable = Math.round((netImposable- 78571  )* 0.41 + 1837 + 15327)
        
        break
    case netImposable >= 168995 :
        netImposable = Math.round((netImposable- 168995  ) * 0.45 + 1837 + 15327 + 37073)
       
        break
       
        


    default : 
       taux = 0
        break
}

let phrase = `vous allez payez  ${Math.round(netImposable)}€ d'impot car vous avez ${nbAdulte} adultes a la maison et ${nbEnfant} enfant`
console.log(phrase)
       
       
