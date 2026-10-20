import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Cadastro from './components/Cadastro'
import Depoimentos from './components/Depoimentos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Cabeçalho principal do site (menu superior/topo) */}
      <Header />

      <Hero />
      
      {/* O <main> engloba o conteúdo principal e mais importante da página */}
      <main className="conteudo">

        {/* <section> interna do <main> que exibe a listagem das vagas disponíveis */}
        <section className="vagas">

          {/* Container para o cabeçalho interno da seção de vagas (título e contador) */}
          <div className="vagas__header">
            <h2>Últimas Vagas</h2>
            <span>7 vagas - Atualizado agora</span>
          </div>

          {/* Bloco de cartão/card contendo as informações de uma vaga individual */}
          <div className="vagas__card"> 
            <div className="vagas__avatar">V</div>
            <div className="vagas_body">
              <small>Vercel</small>
              <p className="vagas__title">Full-stack Engineer</p>

              <span className="vagas__bagdes">R$ 20k-30k</span>
              <span className="vagas__bagdes vagas__bagdes--highlight">Remoto</span>
            </div>

            <div className="vagas__actions">
              <span>4h</span>
              <a href="">Candidatar-se</a>
            </div>
          </div>

          {/* 2º Card */}
          <div className="vagas__card">
            <div className="vagas__avatar vagas__avatar--blue">N</div>
            <div className="vagas_body">
              <small>Notion</small>
              <p className="vagas__title">Backend Engineer</p>
              <span className="vagas__bagdes">R$ 22k-3k</span>
              <span className="vagas__bagdes vagas__bagdes--highlight">São Paulo, <br /></span>
            </div>
            <div className="vagas__actions">
              <span>1d</span>
              <a href="">Candidatar-se</a>
            </div>
          </div>

          {/* 3º CARD DE VAGA */}
          <div className="vagas__card">
            <div className="vagas__avatar vagas__avatar--orange">V</div>
            <div className="vagas_body">
              <small>Figma</small>
              <p className="vagas__title">Design Systems Lead</p>
              <span className="vagas__bagdes">R$ 25k-35k</span>
              <span className="vagas__bagdes vagas__bagdes--highlight">New York</span>
            </div>
            <div className="vagas__actions">
              <span>2</span>
              <a href="">Candidatar-se</a>
            </div>
          </div>

        </section>

        {/* <aside> para a barra de filtros */}
        <aside className="filtros">
          <div className="filtros__header">
            <h3>Filtros</h3>
            <a href="">Limpar</a>
          </div>

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

      </main>

      <Cadastro />
      <Depoimentos />

      {/* <footer> define o rodapé institucional no final da página */}
      <Footer />
    </>
  )
}

export default App