// Componente que desenha um card individual de vaga
function VagaCard({ empresa, cargo, salario, modelo, publicada }) {
  return (
    <div className="vagas__card">
      {/* Pega a primeira letra da empresa para colocar no avatar */}
      <div className="vagas__avatar">{empresa[0]}</div>
      
      <div className="vagas__body">
        <small>{empresa}</small>
        <p className="vagas__title">{cargo}</p>
        <span className="vagas__badge">{salario}</span>
        <span className="vagas__badge vagas__badge--highlight">
          {modelo}
        </span>
      </div>

      <div className="vagas__actions">
        <span>{publicada}</span>
        <a href="">Candidatar-se</a>
      </div>
    </div>
  );
}

export default VagaCard;