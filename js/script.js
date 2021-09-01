// HOVER PERSONALIZADO
(function() {

    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".mynav a");
    const colors = ["#6E65F4"];
  
    function mouseenterFunc() {
      if (!this.parentNode.classList.contains("active")) {
        for (let i = 0; i < links.length; i++) {
          if (links[i].parentNode.classList.contains("active")) {
            links[i].parentNode.classList.remove("active");
          }
          links[i].style.opacity = "0.4";
        }
  
        this.parentNode.classList.add("active");
        this.style.opacity = "1";
  
        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left;
        const top = this.getBoundingClientRect().top;
        const color = colors[Math.floor(Math.random() * colors.length)];
  
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.borderColor = color;
        target.style.transform = "none";
      }
    }
  
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("mouseenter", mouseenterFunc);
    }
    
})();

// BACKGROUND MENU FIXO
(function () {
  const menu = document.querySelector('.navegador');

  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) menu.classList.add('menuFixo');
      else menu.classList.remove('menuFixo');
  });
})();

// EFEITO MÁQUINA DE ESCREVER
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   textoArray.forEach((letra, i) => {
//     setTimeout(() => elemento.innerHTML += letra, 75 * i);
//   });
// }

// const titulo = document.querySelector('.subtitulo h2');
// typeWriter(titulo);


// OCULTAR MENU
function ativarCheckbox() {
  const checkbox = document.querySelector("#check")
  checkbox.checked = false;
}

const linkMenu = document.querySelector('.barra nav');
linkMenu.addEventListener("click", ativarCheckbox);

// SLIDE
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }

// PLUGIN FACEBOOK
var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "101110651492053");
              chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v11.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/pt_BR/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));