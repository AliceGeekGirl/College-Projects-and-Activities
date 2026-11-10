import { Link } from 'react-router';

function NaoEncontradaPage() {
  return (
    <div className="pagina">
      <h2>404 - Página Não Encontrada</h2>
      <p>A página que você está procurando não existe.</p>
      <Link to="/">← Voltar para a página inicial</Link>
    </div>
  );
}

export default NaoEncontradaPage;