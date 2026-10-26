//Função que define o componente React chamado Footer
function Footer() {
    return (

        //Fragmento React (<> ... </>) para agrupar os elementos sem adicionar nós extras ao HTML
        <>
            {/* Tag semântica que define o rodapé da página */}
            <footer>

                {/* Parágrafo contendo o nome da marca em destaque e o ano atual com os direitos reservados */}
                <p>
                    <strong>OpenBoard</strong> 2026 - Todos os direitos reservados
                </p>

                {/* Bloco de navegação contendo os links secundários do rodapé */}
                <nav>
                    <a href="">Entrar</a> {/* Link para a página de login */}
                    <a href="">Publicar vaga</a> {/* Link para a página de cadastro de vagas */}
                    <a href="">Sobre</a> {/* Link para a página institucional */}
                    <a href="">Privacidade</a> {/* Link para a política de privacidade */}
                </nav>
            </footer>
        </>
    )
}

export default Footer