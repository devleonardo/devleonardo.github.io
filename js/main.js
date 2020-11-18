function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.principal');
typeWrite(titulo);

/* ocultando e exibindo H3 */

/*const tema = document.querySelector('h4');

function ocultaTexto(texto) {
  const tema = texto.innerHTML = '';
}

ocultaTexto(tema);*/