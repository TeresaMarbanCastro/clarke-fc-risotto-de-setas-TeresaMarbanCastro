'use strict'

fetch('https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    //Dish name
    const dishName = json.recipe.name;
    const placeName = document.querySelector('.header__title')
    placeName.innerHTML = dishName;
    //Articles list
    const dishIngredients = json.recipe.ingredients;
    const listHTML = '';
    for (let i = 0; i < dishIngredients.length; i++) {
      let item =
      `   <li class="articles__item">

            <input class="item__checkbox" type="checkbox">
            <input class="item__quantity" id="item${i}--quantity" name="input--quantity" value="1" type="number">
            <div class="item__description">
              <h4 class="item__description--title">${dishIngredients[i].product}</h4>
              <p class="item__description--brand">${dishIngredients[i].brand? `${dishIngredients[i].brand}` : ''}</p>
              <p class="item__description--weight">${dishIngredients[i].quantity}</p>
            </div>
            <span class="item__price">${dishIngredients[i].price} €</span>

          </li>
          `
const ingredientsList = document.querySelector('.articles__list')
      // analiza la cadena de texto e inserta los nodos en el orden determinado
      ingredientsList.insertAdjacentHTML('beforeend', item);
    }
    // setFunctionsOnchange();
  })
  .catch(function(error){
    console.log('Ha sucedido un error: ' + error);
})

//Select all items
function selectAll(){
let all = document.querySelectorAll("input[type=checkbox]");
for( let i = 0; i < all.length;i++){
  all[i].checked = true;
}
}
//Uncheck all items
function eraseAll(){
let all = document.querySelectorAll("input[type=checkbox]");
for( let i = 0; i < all.length; i++){
  all[i].checked = false;
}
};
