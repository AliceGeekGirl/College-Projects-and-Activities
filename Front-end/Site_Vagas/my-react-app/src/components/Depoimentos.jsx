//Função que define o componente React chamado Depoimentos
function Depoimentos() {
  return (
    // Seção principal que agrupa todo o conteúdo de depoimentos
    <section className="depoimentos">
      
      {/* Título principal da seção */}
      <h2>Quem já usa o OpenBoard</h2>
      
      {/* Subtítulo com uma breve descrição do que se trata a seção */}
      <p>Depoimentos de recrutadores e candidatos que já fecharam vaga por aqui.</p>
      
      {/* Container flex/grid que envolve e organiza a lista de cartões de depoimentos */}
      <div className="depoimentos__list">
        
        {/* --- Primeiro Depoimento --- */}
        <div>

          {/* Citação ou depoimento do usuário */}
          <p>"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."</p>
          
          {/* Imagem de perfil (o atributo 'src' precisa receber a URL ou caminho da imagem) */}
          <img src="" alt="avatar" />
          
          {/* Nome da pessoa que deu o depoimento */}
          <p>Lucas Vergara</p>
          
          {/* Cargo e empresa da pessoa */}
          <span>Frontend engineer - Betha</span>
        </div>

        {/* --- Segundo Depoimento --- */}
        <div>
          <p>"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."</p>
          <img src="" alt="avatar" />
          <p>Lucas Vergara</p>
          <span>Frontend engineer - Betha</span>
        </div>

        {/* --- Terceiro Depoimento --- */}
        <div>
          <p>"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."</p>
          <img src="" alt="avatar" />
          <p>Lucas Vergara</p>
          <span>Frontend engineer - Betha</span>
        </div>

      </div>
    </section>
  )
}

//Exporta o componente para que ele possa ser importado e usado em outros arquivos da aplicação
export default Depoimentos