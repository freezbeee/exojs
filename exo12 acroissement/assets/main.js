
let annee = 1
let habitants = 96809
       
while (habitants < 120000){
    habitants = (habitants*0.0089) + habitants
    annee += 1
}       
let phrase = `il faudra ${annee} ans pour ateindre 120000habitants `
console.log(phrase)
