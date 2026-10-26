//Função que define o componente React chamado News
function News() {
    return (

        //Seção principal do componente (usada como destaque/hero)
        <section className="hero">

            {/* Título principal da seção */}
            <h2>Vagas novas, toda quinta-feira</h2>
            
            {/* Breve descrição sobre o conteúdo da newsletter */}
            <p>Um resumo curto das melhores vagas em startups direto no seu inbox.</p>
            
            {/* Container que envolve o formulário de cadastro */}
            <div className="cadastro">

                {/* Formulário para o usuário inserir o e-mail */}
                <form action="">
                    
                    {/* Campo de entrada para digitar o e-mail */}
                    <input type="email" placeholder="seu@mail.com" />
                    
                    {/* Botão de envio para confirmar a assinatura */}
                    <button className="btn">Assinar</button>
                </form>
            </div>
        </section>
    )
}

//Exporta o componente para que possa ser utilizado em outros arquivos do projeto
export default News