import { useState } from "react"
import Hero from "./Hero"

// Função que define o componente React chamado News
function News() {
    // Cria os estados para controlar o e-mail digitado, mensagens de erro e o status de envio
    const [email, setEmail] = useState('') 
    const [erro, setErro] = useState(''); 
    const [enviado, setEnviado] = useState(false) 

    // Função que lida com o envio do formulário de e-mail
    function handleSubmit(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

        // Valida se o e-mail contém o caractere '@'
        if (!email.includes('@')) { 
            setErro('Digite um e-mail válido.'); // Define a mensagem de erro se o e-mail for inválido
            return;
        }

        // Se o e-mail for válido, limpa o erro e marca o envio como concluído
        setErro('');
        setEnviado(true);
    }

    return (
        <>
            {/* Componente Hero que recebe o formulário como conteúdo interno (children) */}
            <Hero titulo="" subtitulo="">
                
                {/* Renderização condicional: se foi enviado, mostra a mensagem de sucesso; senão, exibe o formulário */}
                {enviado ? (
                    <p className="sucesso">Pronto! Enviaremos para {email}.</p>
                ) : ( 
                    <div className="cadastro">

                        {/* Formulário de cadastro de e-mail com a função de submit */}
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Campo de entrada que atualiza o estado 'email' conforme o usuário digita */}
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Seu melhor e-mail"
                            /> 
                            <button className="btn">Assinar</button>
                        </form>

                        {/* Exibe a mensagem de erro caso o estado 'erro' possua algum texto */}
                        {erro && <p className="erro">{erro}</p>}
                    </div>
                )}

            </Hero>

            {/* Seção secundária com a apresentação da newsletter */}
            <section className="hero">
                <h2>Vagas novas, toda quinta-feira</h2>
                <p>Um resumo curto das melhores vagas em startups direto no seu inbox.</p>
            </section>
        </>
    )
}

// Exporta o componente para que possa ser utilizado em outros arquivos do projeto
export default News