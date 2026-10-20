function Header() {
    return (
        <>
            <header>
                <h1>OpenBoard</h1> {/* Título principal da marca no cabeçalho */}
                {/* Container <div> para agrupar as ações de navegação e botão do topo */}
                <div>
                <a href="">Entrar</a> {/* Link de navegação para a página de login */}
                <button className="btn">Publicar vaga $299</button> {/* Botão para a ação de publicar uma vaga com o valor */}
                </div>
            </header>
        </>
    )
}