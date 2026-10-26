//Importa o hook useState do React (usado para gerenciar estados)
import { useState } from 'react'

//Importa o arquivo de estilos CSS para este componente
import './App.css'

//Importa os componentes individuais da aplicação
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Depoimentos from './components/Depoimentos'
import News from './components/News'
import Vagas from './components/Vagas'

function App() {
  //Cria uma variável de estado 'count' (inicializada em 0) e a função 'setCount' para atualizá-la
  const [count, setCount] = useState(0)

  return (
    //Fragment do React (<> ... </>) usado para agrupar múltiplos elementos sem criar uma <div> extra no HTML
    <>
      {/* Exibe o cabeçalho/topo do site */}
      <Header />

      {/* Exibe a seção de destaque (banner principal) */}
      <Hero />
      
      {/* Tag semântica HTML para indicar o conteúdo principal da página */}
      <main className="conteudo">

        {/* Exibe a lista ou seção de vagas dentro do conteúdo principal */}
        <Vagas />
      </main>

      {/* Exibe a seção de notícias/novidades */}
      <News />

      {/* Exibe a seção de depoimentos de clientes ou usuários */}
      <Depoimentos />

      {/* Exibe o rodapé do site */}
      <Footer />
    </>
  )
}

//Exporta o componente App para que ele possa ser usado no main.jsx / index.jsx
export default App