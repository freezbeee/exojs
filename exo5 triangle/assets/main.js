let adjacent = Number (prompt("donner le coté adjacent en cm: ")); 
let opposer = Number (prompt("donner le coté opposé en cm: ")); 
let hypocarre = Math.pow(adjacent,2)+Math.pow(opposer,2) ;
let hypo =Math.sqrt(hypocarre)


let phrase1 = `  l'hypothenus mesure ${hypo.toFixed(2)} cm `

console.log(phrase1)


