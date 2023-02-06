import { recipes } from "./recipes.js";
// let searchrecipe : [] = []
// let recipe : [] = []
let searchrecipe = [];
let searchText = "";
let searchNbrPersonne = "";
let resultFilter = document.querySelector('#result-filter');
let nameRecipeSearchInput = document.querySelector('#Name-recipe');
let nbrPersonne = document.querySelector('#nbrPersonne');
const recipesList = [];
for (const key in recipes) {
    recipesList.push(Object.assign({ id: key }, recipes[key]));
}
// const RefreshRecipes = () => {
//   resultFilter.innerHTML = ""
//   for (const key in recipes) {
//     recipesList.push({id: key, ...recipes[key]})
//   resultFilter.innerHTML += ` <div class="text-center">
//   <h3 class="text-primary">Name :<span class="text-light fs-4"> ${recipes[key].name}</span></h3>
//   <h3 class="text-warning">Nombre de personne :<span class="text-light fs-4"> ${recipes[key].servings}</span></h3>
//   <h3 class="text-primary">Temps de preparation :<span class="text-light fs-4"> ${recipes[key].prepTime}</span></h3>
//   <h3 class="text-warning">Temps de Cuisson :<span class="text-light fs-4"> ${recipes[key].cookTime}</span></h3>
//   <h3 class="text-success">Ingrediants :<span class="text-light fs-4"> ${recipes[key].ingredients.name}</span></h3>
//   </div>
//   <div>
//   ${recipes[key].instructions}
//   </div>
//   <hr>
//   <hr>`
// }}
const renderRecipe = () => {
    resultFilter.innerHTML = '';
    searchrecipe = recipesList.filter(x => x.name.includes(searchText));
    // searchrecipe = recipesList.filter(x => x.servings.includes(searchNbrPersonne));
    console.log(searchrecipe);
    for (const recipe of searchrecipe) {
        resultFilter.innerHTML += ` <div class="text-center">
      <h3 class="text-primary">Name :<span class="text-light fs-4"> ${recipe.name}</span></h3>
      <h3 class="text-warning">Nombre de personne :<span class="text-light fs-4"> ${recipe.servings}</span></h3>
      <h3 class="text-primary">Temps de preparation :<span class="text-light fs-4"> ${recipe.prepTime}</span></h3>
      <h3 class="text-warning">Temps de Cuisson :<span class="text-light fs-4"> ${recipe.cookTime}</span></h3>
      <h3 class="text-success">Ingrediants :<span class="text-light fs-4"> ${recipe.ingredients}</span></h3>
      
      </div>
      <div>
      ${recipe.instructions}
      </div>
      <hr>
      <hr>`;
    }
};
nameRecipeSearchInput.addEventListener('input', (e) => {
    searchText = nameRecipeSearchInput.value;
    renderRecipe();
});
// nbrPersonne.addEventListener('input', (e) => {
//     searchNbrPersonne = nbrPersonne.value;
//     renderRecipe();
// });
renderRecipe();
// RefreshRecipes()
