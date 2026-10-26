//src/data/vagas.js

//Declara uma constante chamada 'vagas' que armazena uma lista (array) de objetos
const vagas = [
  {
    id: 1,                          // Identificador único da vaga
    empresa: 'Lumen',               // Nome da empresa contratante
    cargo: 'Full-stack Engineer',   // Título do cargo
    salario: 'R$ 20k-30k',          // Faixa salarial oferecida
    modelo: 'Remoto',               // Modelo de trabalho (ex: Remoto, Presencial)
    tipo: 'Efetivo',                // Tipo de contratação (ex: Efetivo, PJ) 
    area: 'Engenharia',             // Área de atuação da vaga
    published: '4h',                // Tempo desde a publicação (há 4 horas)
  },
  {
    id: 2,
    empresa: 'SATC',
    cargo: 'Front-end Engineer',
    salario: 'R$ 20k-30k',
    modelo: 'Remoto',
    tipo: 'Efetivo',    
    area: 'Engenharia',  
    publicada: '2h',
  },
  {
    id: 3,
    empresa: 'Google',
    cargo: 'Analista de Dados',
    salario: 'R$ 20k-30k',
    modelo: 'Remoto',
    tipo: 'Efetivo',    
    area: 'Dados',  
    publicada: '6h',
  }
];

//Exporta o array 'vagas' para que possa ser importado e utilizado em outros arquivos do projeto
export default vagas;