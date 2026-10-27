// Importa a lista de depoimentos do arquivo de dados
import depoimentos from '../data/depoimentos'; 

// Importa o componente do card individual
import DepoimentoCard from './DepoimentoCard'; 

// Função que define o componente React chamado Depoimentos
function Depoimentos() {
  return (
    // Seção principal que agrupa todo o conteúdo de depoimentos
    <section className="depoimentos">
      
      {/* Título principal da seção */}
      <h2>Quem já usa o OpenBoard</h2>
      
      {/* Subtítulo com uma breve descrição */}
      <p>Depoimentos de recrutadores e candidatos que já fecharam vaga por aqui.</p>
      
      {/* Container flex/grid que envolve e organiza a lista de cartões gerados pelo .map() */}
      <div className="depoimentos__list">
        
        {/* Mapeia cada depoimento do array 'depoimentos' e renderiza um DepoimentoCard para cada um */}
        {depoimentos.map((depoimento) => (
          <DepoimentoCard
            key={depoimento.id}
            texto={depoimento.texto}
            nome={depoimento.nome}
            cargo={depoimento.cargo}
          />
        ))}

      </div>
    </section>
  );
}

// Exporta o componente para que ele possa ser importado no App.jsx
export default Depoimentos;