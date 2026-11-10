import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { buscarVaga } from '../services/vagasService';


// Define o componente funcional chamado HomePage
function VagaPage() {

    const { id } = useParams(); // /vagas/3 → "3
    const [vaga, setVaga] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        async function carregar() {
            try {
                setVaga(await buscarVaga(id));
                } catch (err) {
                    setErro(err.message);
                }finally {
                    setLoading(false);
                }
            }
            carregar();
        }, [id]); // roda de novo se o id mudar
    
    if (loading) return <p className="pagina">Carregando...</p>;
    if (erro) return <p className="pagina erro">{erro}</p>;
    // Retorno do JSX (layout do componente - pode ser expandido conforme a necessidade)
    return (
         <section className="pagina">
            <Link to="/">← Voltar para as vagas</Link>
            <div className="vaga__topo">
                <div className="vagas__avatar">{vaga.empresa[0]}</div>
                <div><small>{vaga.empresa}</small><h2>{vaga.cargo}
    </h2></div>
            </div>
      <p>
        <span className="vagas__badge">{vaga.salario}</span>{' '}
        <span className="vagas__badge">{vaga.modelo}</span>
      </p>
      <p className="vaga__descricao">{vaga.descricao}</p>
    </section>
  );
}
export default VagaPage;