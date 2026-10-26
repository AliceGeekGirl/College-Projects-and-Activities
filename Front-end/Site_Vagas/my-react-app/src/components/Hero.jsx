//Função que define o componente React chamado Hero
function Hero() {
    return (
        <>
            {/* Seção principal de destaque (Hero Banner) */}
            <section className="hero">
                
                {/* Título principal da seção */}
                <h2>As melhores vagas em startups de tecnologia</h2>
                
                {/* Breve descrição da proposta do site */}
                <p>Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras.</p>
                
                {/* Botão de ação para empresas publicarem vagas */}
                <button className="btn">Publicar vaga $299</button>
            </section>
        </>
    )
}

export default Hero