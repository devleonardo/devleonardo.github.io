if(window.SimpleSlide){

    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
        pauseOnHover: true, // pausa a transição automática
    });
    
    new SimpleSlide({
        slide: 'portifolio', // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
        nav: true,
        pauseOnHover: true, // pausa a transição automática
    });

}

if(window.SimpleAnime){
    new SimpleAnime();
}

if(window.SimpleForm){
    new SimpleForm({
        form: ".formphp",
        button: "#enviar",
        erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>",
        sucesso: "<div id='form-sucesso'<h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>"
    })
}