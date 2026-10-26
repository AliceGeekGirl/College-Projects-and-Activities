//Função que define o componente React chamado Vagas
function Vagas() {
    return (
        <>
            {/* Seção principal que lista todas as vagas */}
            <section className="vagas">

                {/* Cabeçalho da seção: Título e quantidade total de vagas */}
                <div className="vagas__header">
                    <h2>Últimas Vagas</h2>
                    <span>7 vagas - Atualizado agora</span>
                </div>

                {/* --- CARD 1: Vaga da Vercel --- */}
                <div className="vagas__card"> 
                    {/* Ícone ou foto com a inicial da empresa */}
                    <div className="vagas__avatar">V</div>
                    
                    {/* Informações centrais da vaga (Empresa, Cargo e Tags/Badges) */}
                    <div className="vagas_body">
                        <small>Vercel</small>
                        <p className="vagas__title">Full-stack Engineer</p>
                        <span className="vagas__bagdes">R$ 20k-30k</span>
                        <span className="vagas__bagdes vagas__bagdes--highlight">Remoto</span>
                    </div>

                    {/* Lado direito: Tempo de publicação e botão de ação */}
                    <div className="vagas__actions">
                        <span>4h</span>
                        <a href="">Candidatar-se</a>
                    </div>
                </div>

                {/* --- CARD 2: Vaga da Notion --- */}
                <div className="vagas__card">
                    <div className="vagas__avatar vagas__avatar--blue">N</div>
                    
                    <div className="vagas_body">
                        <small>Notion</small>
                        <p className="vagas__title">Backend Engineer</p>
                        <span className="vagas__bagdes">R$ 22k-30k</span>
                        <span className="vagas__bagdes vagas__bagdes--highlight">São Paulo</span>
                    </div>

                    <div className="vagas__actions">
                        <span>1d</span>
                        <a href="">Candidatar-se</a>
                    </div>
                </div>

                {/* --- CARD 3: Vaga da Figma --- */}
                <div className="vagas__card">
                    <div className="vagas__avatar vagas__avatar--orange">F</div>
                    
                    <div className="vagas_body">
                        <small>Figma</small>
                        <p className="vagas__title">Design Systems Lead</p>
                        <span className="vagas__bagdes">R$ 25k-35k</span>
                        <span className="vagas__bagdes vagas__bagdes--highlight">New York</span>
                    </div>

                    <div className="vagas__actions">
                        <span>2d</span>
                        <a href="">Candidatar-se</a>
                    </div>
                </div>

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
    )
}

export default Vagas;