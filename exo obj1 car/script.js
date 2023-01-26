
import { Fish } from "./classe/carfish.js"




let text = document.querySelector('#text')


let blop = new Fish('BMblop','SerieFish', 80)
let bibulle = new Fish('bibulledes','GLB', 100)
// console.log(blop.aceleration())
text.innerHTML += `${blop.aceleration()} <br>`
// console.log(blop.aceleration())
text.innerHTML += `${blop.aceleration()} <br>`
// console.log(blop.aceleration())
text.innerHTML += `${blop.aceleration()} <br> <hr>`
text.innerHTML += `${bibulle.aceleration()} <br>`
text.innerHTML += `${bibulle.aceleration()} <br>`
text.innerHTML += `${bibulle.tourner()} <br>`
text.innerHTML += `${bibulle.tourner()} <br>`


text.innerHTML += `<hr>${blop.name} va a ${blop.vitesse} <hr> ${bibulle.name} va a ${bibulle.vitesse}`

