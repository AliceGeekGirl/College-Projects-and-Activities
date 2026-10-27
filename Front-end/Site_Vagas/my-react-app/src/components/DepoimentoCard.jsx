//Componente individual para renderizar cada depoimento
function DepoimentoCard({ texto, nome, cargo }) {
  return (
    <div className="depoimento__card">
      <p className="depoimento__texto">"{texto}"</p>
      <h4 className="depoimento__nome">{nome}</h4>
      <span className="depoimento__cargo">{cargo}</span>
    </div>
  );
}

export default DepoimentoCard;