// Importa o componente responsável por renderizar cada card individual de vaga
import VagaCard from './VagaCard'; 

// Função que define o componente principal React chamado Vagas
function Vagas({ vagas }) {
    return (
        <>
            {/* Seção principal que lista todas as vagas disponíveis */}
            <section className="vagas">

                {/* Cabeçalho da seção: exibe o título e a quantidade total de vagas de forma dinâmica */}
                <div className="vagas__header">
                    <h2>Últimas Vagas</h2>
                    <span>{vagas.length} vagas - Atualizado agora</span>
                </div>

                {/* Percorre o array de vagas e renderiza um VagaCard para cada item encontrado */}
                {vagas.map((vaga) => (
                    <VagaCard
                        key={vaga.id}            // Identificador único obrigatório para listas no React
                        empresa={vaga.empresa}   // Passa o nome da empresa como propriedade
                        cargo={vaga.cargo}       // Passa o título do cargo como propriedade
                        salario={vaga.salario}   // Passa a faixa salarial como propriedade
                        modelo={vaga.modelo}     // Passa o modelo de trabalho (ex: Remoto) como propriedade
                        publicada={vaga.publicada} // Passa o tempo de publicação como propriedade
                    />
                ))}

            </section>

            {/* Barra lateral contendo os filtros para refinar a busca de vagas */}
            <aside className="filtros">
                
                {/* Cabeçalho da barra de filtros com opção para limpar as seleções */}
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

// Exporta o componente Vagas para poder ser utilizado em outras partes da aplicação
export default Vagas;