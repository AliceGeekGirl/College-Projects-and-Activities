//Função que define o componente React chamado Hero
function Hero({ titulo, subtitulo, children }) {
    return (
        <>
            {/* Seção principal de destaque (Hero Banner) */}
            <section className="hero">
                
                {/* Título principal da seção */}
                <h2>{titulo}</h2>
                
                {/* Breve descrição da proposta do site */}
                <p>{subtitulo}</p>
                
                {/* Botão de ação para empresas publicarem vagas */}
                {children}
            </section>
        </>
    )
}

export default Hero