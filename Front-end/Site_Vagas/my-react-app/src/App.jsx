import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Cabeçalho principal do site (menu superior/topo) */}
      <header>
        <h1>OpenBoard</h1> {/* Título principal da marca no cabeçalho */}
        {/* Container <div> para agrupar as ações de navegação e botão do topo */}
        <div>
          <a href="">Entrar</a> {/* Link de navegação para a página de login */}
          <button className="btn">Publicar vaga $299</button> {/* Botão para a ação de publicar uma vaga com o valor */}
        </div>
      </header>

      {/* <section> define uma seção temática da página (neste caso, o banner principal de apresentação) */}
      <section className="hero">
        <h2>As melhores vagas em startups de tecnologia</h2> {/* <h2> é um título secundário (subtítulo) da seção */}
        <p>Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras.</p> {/* <p> define um parágrafo de texto comum */}
        <button className="btn">Publicar vaga $299</button> {/* Botão para publicação de vaga no banner principal */}
      </section>

      {/* O <main> engloba o conteúdo principal e mais importante da página */}
      <main className="conteudo">

        {/* <section> interna do <main> que exibe a listagem das vagas disponíveis */}
        <section className="vagas">

          {/* Container para o cabeçalho interno da seção de vagas (título e contador) */}
          <div className="vagas__header">
            <h2>Últimas Vagas</h2>
            <span>7 vagas - Atualizado agora</span> {/* <span> é um container em linha para pequenas partes de texto ou metadados sem quebra de linha */}
          </div>

          {/* Bloco de cartão/card contendo as informações de uma vaga individual */}
          <div className="vagas__card"> 
            <div className="vagas__avatar">V</div>
            <div className="vagas_body">
              <small>Vercel</small> {/* <small> deixa o texto em uma escala menor (útil para nomes de empresas, notas ou detalhes) */}
              <p className="vagas__title">Full-stack Engineer</p>

              {/* Metadados da vaga: faixa salarial e modalidade */}
              <span className="vagas__bagdes">R$ 20k-30k</span>
              <span className="vagas__bagdes vagas__bagdes--highlight">Remoto</span>
            </div>

            {/* Grupo com o tempo de publicação e link de candidatura */}
            <div className="vagas__actions">
              <span>4h</span>

              <a href="">Candidatar-se</a> {/* Link direto para aplicação na vaga */}
            </div>
          </div>

          {/* Bloco de cartão/card contendo as informações de uma vaga individual */}
          <div className="vagas__card">

            {/* Container que exibe a inicial ou o logo da empresa (Notion) */}
            <div className="vagas__avatar vagas__avatar--blue">N</div>

            {/* Bloco com as informações principais do cargo e detalhes da vaga */}
            <div className="vagas_body">

              <small>Notion</small> {/* Nome da empresa em tamanho reduzido */}

              <p className="vagas__title">Backend Engineer</p> {/* Título/Nome do cargo fornecido */}

              {/* Badges com as características da vaga (salário e localização) */}
              <span className="vagas__bagdes">R$ 22k-3k</span>

              {/* Utiliza a classe modificadora '--highlight' para destacar a localização */}
              <span className="vagas__bagdes vagas__bagdes--highlight">São Paulo, <br /></span>
            </div>

            {/* Container com ações e informações secundárias da vaga */}
            <div className="vagas__actions">

              <span>1d</span> {/* Tempo decorrido desde a publicação (1 dia) */}

              <a href="">Candidatar-se</a> {/* Link de direcionamento para aplicação */}
            </div>
          </div>

          {/* 3º CARD DE VAGA */}
          <div className="vagas__card">

            {/* Container que exibe a inicial da empresa (Figma) */}
            <div className="vagas__avatar vagas__avatar--orange">V</div>

            {/* Bloco com as informações principais do cargo e detalhes da vaga */}
            <div className="vagas_body">

              <small>Figma</small> {/* Nome da empresa em tamanho reduzido */}

              <p className="vagas__title">Design Systems Lead</p> {/* Título/Nome do cargo fornecido */}

              {/* Badges com a faixa salarial e a localização internacional */}
              <span className="vagas__bagdes">R$ 25k-35k</span>
              <span className="vagas__bagdes vagas__bagdes--highlight">New York</span>
            </div>

            {/* Container com tempo de publicação e botão/link de ação */}
            <div className="vagas__actions">

              <span>2</span> {/* Tempo decorrido desde a publicação */}

              <a href="">Candidatar-se</a> {/* Link de direcionamento para aplicação */}
            </div>
          </div>

        </section>

        {/* <aside> representa um conteúdo lateral/periférico ao conteúdo principal (usado aqui para a barra de filtros) */}
        <aside className="filtros">

          {/* Cabeçalho da barra lateral contendo o título e ação de limpar */}
          <div className="filtros__header">

            <h3>Filtros</h3> {/* Título da seção de filtros */}

            <a href="">Limpar</a> {/* Link para limpar os filtros selecionados */}
          </div>

          {/* <div> cria um bloco genérico para agrupar elementos relacionados (grupo de filtros por tipo) */}
          <div className="filtros__itens">
            <p>Tipo de vaga</p> {/* Parágrafo rotulando o grupo de filtros */}

            {/* <label> associa um texto explicativo ao campo de entrada (input), melhorando a acessibilidade */}
            <label htmlFor="check_efetivo">

              {/* <input type="checkbox"> cria uma caixa de seleção marcar/desmarcar; name e id identificam o campo para formulário e acionamento por script */}

              <input type="checkbox" name="check_efetivo" id="check_efetivo" /> Efetivo {/* Texto do rótulo exibido ao lado da caixa de seleção */}
            </label> {/* Fecha a tag <label> do filtro de vaga tipo Efetivo */}

            {/* <label> associa o texto ao campo com id="check_estagio" para acionamento ao clicar no texto */}
            <label htmlFor="check_estagio">

              {/* Caixa de seleção específica para filtrar vagas de estágio */}
              <input type="checkbox" name="check_estagio" id="check_estagio" /> Estágio {/* Rótulo visível para opção Estágio */}

            </label> {/* Fecha a tag <label> da opção Estágio */}

            {/* <label> associa o texto ao campo com id="check_temp" para acionamento ao clicar no texto */}
            <label htmlFor="check_temp">

              {/* Caixa de seleção específica para filtrar vagas temporárias */}
              <input type="checkbox" name="check_temp" id="check_temp" /> Temporário {/* Rótulo visível para opção Temporário */}

            </label> 
          </div> 

          {/* Bloco para agrupamento dos filtros por área */}
          <div className="filtros__itens"> {/* <div> com classe CSS para organizar as opções do filtro de Área */}

            <p>Área</p> {/* <p> define o título/rótulo do grupo de filtros por área de atuação */}

            {/* <label> associa o rótulo ao campo de seleção id="check_eng" */}
            <label htmlFor="check_eng">

              {/* Caixa de seleção específica para filtrar a área de Engenharia */}
              <input type="checkbox" name="check_eng" id="check_eng" /> Engenharia {/* Rótulo visível para opção Engenharia */}

            </label> {/* Fecha a tag <label> da opção Engenharia */}

            {/* <label> associa o rótulo ao campo de seleção id="check_design" */}
            <label htmlFor="check_design">

              {/* Caixa de seleção específica para filtrar a área de Design */}
              <input type="checkbox" name="check_design" id="check_design" /> Design {/* Rótulo visível para opção Design */}

            </label> {/* Fecha a tag <label> da opção Design */}

            {/* <label> associa o rótulo ao campo de seleção id="check_gestao" */}
            <label htmlFor="check_gestao">
              {/* Caixa de seleção específica para filtrar a área de Gestão */}

              <input type="checkbox" name="check_gestao" id="check_gestao" /> Gestão {/* Rótulo visível para opção Gestão */}

            </label> 
            
          </div> 
          
        </aside>

      {/* Fecha o bloco de conteúdo principal da página */}
      </main>

      {/* <section> destinada à captura de inscritos para a newsletter */}
      <section className="hero">
        <h2>Vagas novas, toda quita-feira</h2>
        <p>Um resumo curto das melhores vagas em startups direto no seu inbox.</p>

        {/* Bloco para organizar o formulário de inscrição */}
        <div className="cadastro">

          {/* <form> cria um formulário para coleta de dados do usuário */}
          <form action="">

            {/* <input type="email"> cria um campo de entrada para digitação de e-mail */}
            <input type="email" name="" id="" placeholder="seu@mail.com" />
            
            <button className="btn">Assinar</button> {/* Botão para enviar os dados do formulário */}
          </form>
        </div>
      </section>

      {/* <section> com os depoimentos e prova social dos usuários */}
      <section className="depoimentos">
        <h2>Quem já usa o OpenBoard</h2>
        <p>Depoimentos de recrutadores e candidatos que ja fecharam vaga por aqui.</p>

        {/* Container para a lista de cartões de depoimentos */}
        <div className="depoimentos__list">
          {/* Primeiro card de depoimento */}
          <div>
            <p>"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."</p>
            <img src="" alt="avatar" /> {/* Foto do autor do depoimento */}
            <p>Lucas Vergara</p>
            <span>Frontend engineer - Betha</span> {/* Cargo e empresa do autor */}
          </div>
          {/* Segundo card de depoimento */}
          <div>
            <p>"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."</p>
            <img src="" alt="avatar" />
            <p>Lucas Vergara</p>
            <span>Frontend engineer - Betha</span>
          </div>
          {/* Terceiro card de depoimento */}
          <div>
            <p>"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."</p>
            <img src="" alt="avatar" />
            <p>Lucas Vergara</p>
            <span>Frontend engineer - Betha</span>
          </div>
        </div>
      </section>

      {/* <footer> define o rodapé institucional no final da página */}
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

export default App