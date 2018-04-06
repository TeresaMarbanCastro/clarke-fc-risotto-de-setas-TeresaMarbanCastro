'use strict'

var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json');

request.addEventListener('load', getRecipe);

function getRecipe() {
  var response = request.responseText;
  // document.querySelector('.testing') = response;
 document.body.innerHTML = response;
}

request.send();
