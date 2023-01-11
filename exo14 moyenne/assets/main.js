
let notemin = 9999999999999999
let notemax = -111111111211
let moyenne = 0
let compteur = 0
let note = 0

while(note >=0){
     note = Number (prompt("donner une note tapez un num negatif pour arreter :"))
    if((note < notemin)&&(note >=0)){
        notemin = note
    } 
    if(notemax < note){
        notemax = note
    } 
    if(note >= 0){
        moyenne = moyenne + note
        compteur ++
    } 
    
} 

moyenne = moyenne / compteur
let phrase = `la moyenne est de ${moyenne} la meilleur note est ${notemax}
et la pire note est ${notemin}`
alert(phrase)