function News() {
    return (
        <section className="hero">
            <h2>Vagas novas, toda quinta-feira</h2>
            <p>Um resumo curto das melhores vagas em startups direto no seu inbox.</p>
            <div className="cadastro">
                <form action="">
                    <input type="email" placeholder="seu@mail.com" />
                    <button className="btn">Assinar</button>
                </form>
            </div>
        </section>
    )
}

export default News