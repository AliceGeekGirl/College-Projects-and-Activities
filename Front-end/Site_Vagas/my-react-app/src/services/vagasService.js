//Base da URL usada para buscar os arquivos e endpoints da API
const BASE_URL = '/api';

//Função utilitária para simular um atraso (delay) usando Promises
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Busca a lista completa de vagas disponíveis.
 * @returns {Promise<Array>} Promessa que resolve com a lista de vagas em formato JSON.
 */
export async function buscarVagas() {
    // Simula um tempo de carregamento de 800ms para exibir feedbacks visuais (ex: spinners/loading)
    await esperar(800); 

    // Faz a requisição para obter o arquivo com os dados das vagas
    const res = await fetch(`${BASE_URL}/vagas.json`);

    // Verifica se a resposta da rede foi bem-sucedida (status no intervalo 200-299)
    if (!res.ok) {
        throw new Error('Não foi possível carregar as vagas.');
    }

    // Converte e retorna o corpo da resposta em JSON
    return res.json();
}

/**
 * Busca uma vaga específica pelo seu ID.
 * @param {number|string} id - O ID da vaga desejada.
 * @returns {Promise<Object>} Promessa que resolve com os dados da vaga encontrada.
 */
export async function buscarVaga(id) {
    // Reutiliza a função de busca geral para obter todas as vagas
    const vagas = await buscarVagas();

    // Procura a vaga que possui o ID correspondente (garantindo conversão para Number)
    const vaga = vagas.find((v) => v.id === Number(id));

    // Lança um erro caso nenhuma vaga com o ID fornecido seja encontrada
    if (!vaga) throw new Error(`Vaga #${id} não encontrada.`);

    // Retorna o objeto da vaga localizada
    return vaga;
}