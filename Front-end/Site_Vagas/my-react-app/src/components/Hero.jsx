function Hero() {
    return (
        <>
           {/* <section> define uma seção temática da página (neste caso, o banner principal de apresentação) */}
            <section className="hero">
                <h2>As melhores vagas em startups de tecnologia</h2> {/* <h2> é um título secundário (subtítulo) da seção */}
                <p>Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras.</p> {/* <p> define um parágrafo de texto comum */}
                <button className="btn">Publicar vaga $299</button> {/* Botão para publicação de vaga no banner principal */}
            </section>
        </>
    )
}

export default Hero