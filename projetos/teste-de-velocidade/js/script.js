const iniciar = document.querySelector('.btn');
const tempo = 25000;
let i = 0

minhaconexao = () => {
    for (i = 0; i < 4; i++) {
        (function (i) {
            setTimeout(function () {
                open('https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiomIyPlK_6AhUO05EKHfy9C34YABAAGgJjZQ&ohost=www.google.com&cid=CAESaeD2UBeCojTh00WYnAQemmWoHWIX9UFVKt4Fyw-UQTp6UBDSBXlZQfwa5dP5-aNL3_1TfKjR0arT3lhedAZtU06DU5lnruO90FGeK8TV6qEFG7MO6Ju9Q6LZj9zrCBeWbwfoQCrdU7qDLA&sig=AOD64_1ZGjziQENvp16HJ59cindjs7sG4w&q&adurl&ved=2ahUKEwj80YaPlK_6AhU9rZUCHb4iBwoQ0Qx6BAgEEAE')
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