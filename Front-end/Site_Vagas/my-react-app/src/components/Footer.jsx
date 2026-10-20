function Footer() {
    return (
        <>
            <footer>
                {/* Texto com o nome da marca e direitos autorais */}
                <p>
                <strong>OpenBoard</strong> 2026 - Todos os direitos reservados
                </p>

                {/* <nav> indica um bloco dedicado à navegação principal ou secundária de links */}
                <nav>
                <a href="">Entrar</a> {/* Link de navegação secundária para a página de login */}
                <a href="">Publicar vaga</a> {/* Link direto para o fluxo de contratação/publicação */}
                <a href="">Sobre</a> {/* Link para a página institucional/sobre a plataforma */}
                <a href="">Privacidade</a> {/* Link para os termos de uso e política de privacidade */}
                </nav>
            </footer>
        </>
    )
}

export default Footer