"use strict";

var titulo = document.querySelector('.principal');
var habilidades = document.querySelector('.skills');

function typeWrite(elemento) {
  var textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}

typeWrite(titulo);
typeWrite(habilidades);