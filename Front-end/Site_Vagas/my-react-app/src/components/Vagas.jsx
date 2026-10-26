import vagas from '../data/vagas'; // Ajuste o caminho se necessário (ex: './data/vagas')
import VagaCard from './VagaCard'; // Importa o componente do card que criamos acima

// Função que define o componente React chamado Vagas
function Vagas() {
    return (
        <>
            {/* Seção principal que lista todas as vagas */}
            <section className="vagas">

                {/* Cabeçalho da seção: Título e quantidade total de vagas automatizada */}
                <div className="vagas__header">
                    <h2>Últimas Vagas</h2>
                    <span>{vagas.length} vagas - Atualizado agora</span>
                </div>

                <VagaCard
                    empresa= "SATC"
                    cargo= "Front-end Engineer"
                    salario= "R$ 20k-30k"
                    modelo= "Remoto"
                    publicada= "2h">
                </VagaCard>

            </section>

            {/* Barra lateral com os filtros para a busca de vagas */}
            <aside className="filtros">
                
                {/* Cabeçalho da barra de filtros com opção de limpar */}
                <div className="filtros__header">
                    <h3>Filtros</h3>
                    <a href="">Limpar</a>
                </div>

                {/* Filtro 1: Seleção por Tipo de Vaga */}
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

                {/* Filtro 2: Seleção por Área de Atuação */}
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

export default Vagas;