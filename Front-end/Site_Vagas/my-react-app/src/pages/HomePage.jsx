// Importa os Hooks useState (para gerenciar estado) e useEffect (para efeitos colaterais) do React
import { useState, useEffect } from 'react';

// Importa a função assíncrona que busca os dados de vagas da API/serviço
import { buscarVagas } from '../services/vagasService';

// Para (subindo um nível com ../):
import Hero from "../components/Hero";
import Depoimentos from "../components/Depoimentos";
import News from "../components/News";
import Vagas from "../components/Vagas";

// Define o componente funcional chamado HomePage
function HomePage() {
    // Cria o estado 'vagas' (iniciando com um array vazio) para armazenar a lista de vagas recebida
    const [vagas, setVagas] = useState([]);
    
    // Cria o estado 'loading' (iniciando em true) para controlar a exibição da mensagem/spinner de carregamento
    const [loading, setLoading] = useState(true);
    
    // Cria o estado 'erro' (iniciando vazio) para guardar mensagens de falha, caso ocorra algum problema
    const [erro, setErro] = useState('');

    // Hook useEffect que executa uma ação de busca assim que o componente é montado na tela
    useEffect(() => {
        // Declara uma função assíncrona interna para lidar com a requisição dos dados
        async function carregar() {
            try {
                // Executa a busca das vagas e atualiza o estado 'vagas' com a resposta retornada
                setVagas(await buscarVagas());
            } catch (err) {
                // Caso ocorra algum erro na busca, armazena a mensagem de erro no estado 'erro'
                setErro(err.message);
            } finally {
                // Bloco que roda sempre ao término do try/catch, desativando o estado de carregamento
                setLoading(false);
            }
        }

        // Chama a função assíncrona criada acima
        carregar();
    }, []); // Array de dependências vazio: indica que o efeito só deve rodar 1 única vez ao carregar o componente

    // Retorno do JSX (layout do componente - pode ser expandido conforme a necessidade)
    return (
        // Fragmento do React (<>): agrupa múltiplos elementos sem criar uma <div> extra no HTML
        <>
            {/* Componente de topo (Hero) passando título e subtítulo como propriedades */}
            <Hero titulo="As melhores vagas..." subtitulo="...">
                {/* Botão de ação passado como filho (children) do componente Hero */}
                <button className="btn">Publicar vaga $299</button>
            </Hero>
            
            {/* Tag HTML principal que envolve a lista de vagas e os estados de carregamento */}
            <main className="conteudo">
                {/* Se a variável 'loading' for verdadeira, exibe a mensagem de carregando */}
                {loading && (
                <p className="vagas__vazio">Carregando vagas...</p>
                )}
                
                {/* Se a variável 'erro' tiver algum valor, exibe a mensagem de erro */}
                {erro && <p className="erro">{erro}</p>}
                
                {/* Se NÃO estiver carregando E NÃO houver erro, renderiza o componente Vagas passando a lista de vagas */}
                {!loading && !erro && <Vagas vagas={vagas} />}
            </main>

            {/* Componente que exibe a seção de notícias ou novidades */}
            <News />
            
            {/* Componente que exibe a seção de depoimentos de usuários/clientes */}
            <Depoimentos />
        </>
    );
}

// Exporta o componente HomePage como padrão para poder ser importado em outros arquivos
export default HomePage;