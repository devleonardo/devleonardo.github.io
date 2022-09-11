onkeyup = () =>{
    
    base = parseFloat(document.querySelector('.base').value)*1.3;
    hora50 = base/220*1.5* parseFloat(document.querySelector('.hora50').value);
    hora100 = base/220*2* parseFloat(document.querySelector('.hora100').value);
    repouso = parseFloat(document.querySelector('.repouso').value);
    alimentacao = parseFloat(document.querySelector('.alimentacao').value);
    transporte = parseFloat(document.querySelector('.transporte').value);
    medico = parseFloat(document.querySelector('.medico').value);
    odonto = parseFloat(document.querySelector('.odonto').value);
    inss = parseFloat(document.querySelector('.inss').value);
    irrf = parseFloat(document.querySelector('.irrf').value);

    valorReceber = base+hora50+hora100+repouso-alimentacao-transporte-medico-odonto-inss-irrf;

    document.getElementById('resultado').value = valorReceber.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    
};

