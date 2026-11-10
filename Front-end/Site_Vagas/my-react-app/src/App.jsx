//Importa o hook useState do React (usado para gerenciar estados)
import { useState } from 'react'
import { Routes, Route } from 'react-router';
//Importa o arquivo de estilos CSS para este componente
import './App.css'

//Importa os componentes individuais da aplicação
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Depoimentos from './components/Depoimentos'
import News from './components/News'
import Vagas from './components/Vagas'
import vagas from './data/vagas' // Importa os dados das vagas do arquivo de dados

function App() {
  //Cria uma variável de estado 'count' (inicializada em 0) e a função 'setCount' para atualizá-la
  const [count, setCount] = useState(0)

  return (
    //Fragment do React (<> ... </>) usado para agrupar múltiplos elementos sem criar uma <div> extra no HTML
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/vagas/:id" element={<VagaPage />} />
          <Route path="*" element={<NaoEncontradaPage />} />
        </Route>
      </Routes>
    </>
  )
}

//Exporta o componente App para que ele possa ser usado no main.jsx / index.jsx
export default App