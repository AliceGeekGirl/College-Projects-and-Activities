//Função que define o componente React chamado Header
function Header() {
    return (

        //Fragmento do React para envolver múltiplos elementos sem adicionar nós extras ao HTML
        <>
            {/* Cabeçalho principal da página */}
            <header>

                {/* Título da marca/site */}
                <h1>OpenBoard</h1> 
                
                {/* Container para agrupar os links de navegação e botões do topo */}
                <div>

                    {/* Link para a página de login */}
                    <a href="">Entrar</a> 
                    
                    {/* Botão de destaque para ação de publicar uma vaga */}
                    <button className="btn">Publicar vaga $299</button> 
                </div>
            </header>
        </>
    )
}

//Exporta o componente para que possa ser importado e usado em outros arquivos
export default Header