'use strict'

var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json');

request.addEventListener('load', getRecipe);

function getRecipe() {
  var response = request.responseText;
  var responseJSON = JSON.parse(response);

  var testing = document.querySelector('.testing');
  img.src = responseJSON.message;
}

request.send();
