// OCULTAR MENU
function ativarCheckbox() {
    const checkbox = document.querySelector("#check")
    checkbox.checked = false;
}

const linkMenu = document.querySelector('.barra nav');
linkMenu.addEventListener("click", ativarCheckbox);