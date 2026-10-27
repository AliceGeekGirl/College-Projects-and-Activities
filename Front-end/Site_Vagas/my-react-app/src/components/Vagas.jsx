// Importa o hook useEffect do React para lidar com efeitos colaterais (como mudar o título da página)
import { useEffect } from 'react';

// Importa o componente responsável por renderizar cada card de vaga individualmente
import VagaCard from './VagaCard'; 

// Função que define o componente principal Vagas, recebendo a lista de vagas via propriedades (props)
function Vagas({ vagas }) {

    // Hook useEffect que roda após a renderização e toda vez que o número de vagas muda
    useEffect(() => {
        document.title = `${vagas.length} vagas | OpenBoard`; // Atualiza o título da aba do navegador
    }, [vagas.length]); // Dependência: executa novamente apenas se a quantidade de vagas mudar

    return (
        <>
            {/* Seção principal que lista todas as vagas disponíveis */}
            <section className="vagas">

                {/* Cabeçalho com o título e a contagem dinâmica de vagas */}
                <div className="vagas__header">
                    <h2>Últimas Vagas</h2>
                    <span>{vagas.length} vagas - Atualizado agora</span>
                </div>

                {/* Percorre o array de vagas e renderiza um VagaCard para cada item */}
                {vagas.map((vaga) => (
                    <VagaCard
                        key={vaga.id}            // Chave única obrigatória para listas no React
                        empresa={vaga.empresa}   // Nome da empresa
                        cargo={vaga.cargo}       // Título do cargo
                        salario={vaga.salario}   // Faixa salarial
                        modelo={vaga.modelo}     // Modelo de trabalho (ex: Remoto)
                        publicada={vaga.publicada} // Tempo desde a publicação
                    />
                ))}

            </section>

            {/* Barra lateral com os filtros para refinar a busca */}
            <aside className="filtros">
                
                {/* Cabeçalho da área de filtros */}
                <div className="filtros__header">
                    <h3>Filtros</h3>
                    <a href="">Limpar</a>
                </div>

                {/* Grupo de Filtro 1: Seleção por Tipo de Vaga */}
                <div className="filtros__itens">
                    <p>Tipo de vaga</p>
                    <label htmlFor="check_efetivo">
                        <input type="checkbox" name="check_efetivo" id="check_efetivo" /> Efetivo
                    </label>
                    <label htmlFor="check_estagio">
                        <input type="checkbox" name="check_estagio" id="check_estagio" /> Estágio
                    </label>
                    <label htmlFor="check_temp">
                        <input type="checkbox" name="check_temp" id="check_temp" /> Temporário
                    </label> 
                </div> 

                {/* Grupo de Filtro 2: Seleção por Área de Atuação */}
                <div className="filtros__itens">
                    <p>Área</p>
                    <label htmlFor="check_eng">
                        <input type="checkbox" name="check_eng" id="check_eng" /> Engenharia
                    </label>
                    <label htmlFor="check_design">
                        <input type="checkbox" name="check_design" id="check_design" /> Design
                    </label>
                    <label htmlFor="check_gestao">
                        <input type="checkbox" name="check_gestao" id="check_gestao" /> Gestão
                    </label> 
                </div> 

            </aside>
        </>
    );
}

// Exporta o componente para ser utilizado em outros arquivos do projeto
export default Vagas;