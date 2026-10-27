//Declara uma constante chamada 'depoimentos' que armazena uma lista (array) de objetos com avaliações/depoimentos
const depoimentos = [
  {
    id: 1,                                  // Identificador único do depoimento
    texto: 'Encontrei minha vaga atual...', // Mensagem ou comentário deixado pela pessoa
    nome: 'Lucas Vergara',                  // Nome de quem escreveu o depoimento
    cargo: 'Frontend engineer - Betha',     // Cargo e empresa atual da pessoa
  },
  {
    id: 2,
    texto: 'Encontrei minha vaga atual...',
    nome: 'Alice Silva',
    cargo: 'Líder de produto - TechCorp',
  },
  { 
    id: 3,
    texto: 'Encontrei minha vaga atual...',
    nome: 'Carlos Souza',
    cargo: 'Backend developer - DevSolutions',
  }
];

//Exporta o array 'depoimentos' para que possa ser importado e utilizado em outros arquivos do projeto
export default depoimentos; 