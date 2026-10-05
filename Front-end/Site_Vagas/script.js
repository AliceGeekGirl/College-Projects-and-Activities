let nome = "Jose";
let Nome = "Alice";
console.log(Nome); // Vai imprimir "Alice"

nome = "São José";
Nome = "Maria";
console.log(Nome); // Vai imprimir "Maria"

// let mensagem = `Meu Nome é ${nome} e tenho ${idade}.`; // Comentado pois 'idade' é declarada mais abaixo

let deMaior = true;

const horasDia = 24;

// CORREÇÃO: 'pessoa' era um bloco de agrupamento (vírgula), o correto para um objeto é usar chaves {}
const pessoa = {
    nome: "Ana",
    idade: 25
};

pessoa.nome = "Beatriz"; // Funciona perfeitamente em objetos declarados com const

let idade = 33;

if (idade > 18){
    console.log('Maior de idade. Pode dirigir!');
} else {
    console.log('Menor de idade. Não pode dirigir!');
}

let statusSemaforo = 'verde';

// CORREÇÃO: Havia dois pontos indesejados nas strings dos cases ("vermelho:" e "verde:") 
// que faziam o código cair sempre no 'default'.
switch(statusSemaforo){
    case "vermelho":
        console.log('Pare!');
        break;
    case "verde":
        console.log('Siga!');
        break;
    default:
        console.log('Atenção!');
}

let contador = 0;
while(contador < 3){
    console.log(`O contador é ${contador}`);
    contador++;
}

for (let i = 0; i < 5; i++){    
    console.log(`O valor de i é ${i}`);
}

const frutas = ["Maçã", "Banana", "Laranja", "Melão", "Uva"];

for (const fruta of frutas){
    console.log(`Fruta: ${fruta}`);
}   

/*function soma(a, b, c){
    return a + b + c;
}

let resultado = soma(5, 3, 10);
console.log(`O resultado da soma é ${resultado}`);

let multiplicar = function(x, y){
    return x * y;
};

console.log(`O resultado da multiplicação é ${multiplicar(5, 10)}`); */

let somar = (a, b) => a + b;

let resultado = somar(5, 3);
console.log(`O resultado da soma é ${resultado}`);

let multiplicar = (x, y) => x * y;
console.log(`O resultado da multiplicação é ${multiplicar(5, 10)}`);