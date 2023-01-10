let priceht = Number (prompt("donner le prix hors taxe en euros: ")); 
let tvapourcent = Number (prompt("donner la T.V.A en %: ")); 
let tva =  (priceht * tvapourcent) / 100 ;
let pricettc = priceht + tva


let phrase1 = ` vous allez payer ${pricettc} euros TTC`

console.log(phrase1)


