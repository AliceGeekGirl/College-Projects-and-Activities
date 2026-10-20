import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Depoimentos from './components/Depoimentos'
import News from './components/News'
import Vagas from './components/Vagas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Cabeçalho principal do site (menu superior/topo) */}
      <Header />

      <Hero />
      
      {/* O <main> engloba o conteúdo principal e mais importante da página */}
      <main className="conteudo">
        <Vagas />
      </main>

      <News />
      <Depoimentos />

      {/* <footer> define o rodapé institucional no final da página */}
      <Footer />
    </>
  )
}

export default App