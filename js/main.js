const titulo = document.querySelector('.principal');
const habilidades = document.querySelector('.skills');

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}

typeWrite(titulo);
typeWrite(habilidades);