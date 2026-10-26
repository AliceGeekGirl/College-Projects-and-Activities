import { useState } from "react"
import Hero from "./Hero"

//Função que define o componente React chamado News
function News() {
    const [email, setEmail] = useState('') //Cria um estado para armazenar o e-mail do usuário
    const [erro, setErro] = useState(''); //Cria um estado para armazenar mensagens de erro relacionadas ao e-mail
    const [enviado, setEnviado] = useState(false) //Cria um estado para indicar se o e-mail foi enviado com sucesso

    //Função que lida com o envio do formulário de e-mail
    function handleSubmit(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

            //Valida se o e-mail contém o caractere '@' para verificar se é um e-mail válido
            if (!email.includes('@')) { 
                setErro('Digite um e-mail válido.'); //Se o e-mail não for válido, define uma mensagem de erro
                return;
            }

            //Se o e-mail for válido, limpa a mensagem de erro e marca como enviado com sucesso
            setErro('');
            setEnviado(true);
    }
    return (
        <>
        <Hero
         titulo=""
         subtitulo="">

        //Exibe uma mensagem de sucesso se o e-mail foi enviado, caso contrário, exibe o formulário de cadastro
        {enviado ? (
            <p className="sucesso">Pronto! Enviaremos para {email}.</p>
        ) : ( 
            <div className="cadastro">

            //Formulário de cadastro de e-mail com validação
            <form onSubmit={handleSubmit} noValidate>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> //Campo de entrada para o e-mail, atualiza o estado 'email' conforme o usuário digita
                <button className="btn">Assinar</button>
            </form>

            //Exibe uma mensagem de erro se houver algum problema com o e-mail fornecido
            {erro && <p className="erro">{erro}</p>}
            </div>
        )}

        </Hero>
        //Seção principal do componente (usada como destaque/hero)
        <section className="hero">

            {/* Título principal da seção */}
            <h2>Vagas novas, toda quinta-feira</h2>
            
            {/* Breve descrição sobre o conteúdo da newsletter */}
            <p>Um resumo curto das melhores vagas em startups direto no seu inbox.</p>
            
        </section>
        </>
    )
}

//Exporta o componente para que possa ser utilizado em outros arquivos do projeto
export default News