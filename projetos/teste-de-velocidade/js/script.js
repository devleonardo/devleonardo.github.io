const iniciar = document.querySelector('.btn');
const tempo = 26500;
let i = 0

minhaconexao = () => {
for (i = 0; i < 4; i++) {
    (function (i) {
        setTimeout(function () {
            open('https://www.minhaconexao.com.br/?run')
        }, tempo*i);
    })(i);
};
}

speedtest = () => {
    setTimeout(() => {
        for (i = 0; i < 2; i++) {
            (function (i) {
                setTimeout(function () {
                    open('https://www.speedtest.net/run');
                }, tempo*i);
            })(i);
        };
    }, tempo*4);
}

simet = () => {
    setTimeout(() => {
        open('https://beta.simet.nic.br/');
    }, tempo * 6);
}

iniciar.addEventListener('click', () => {

    speedtest();
    minhaconexao();
    simet();

})

/*  
    REFERENCIA
    https://www.mundojs.com.br/2019/01/30/loop-for-com-espera-entre-iteracoes/
*/
