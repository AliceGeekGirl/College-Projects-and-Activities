//Selecionando os textos, os botões e a lista (<ul>) do HTML
const Copiar = document.getElementById('btn-copiar');
const Favorito = document.getElementById('btn-favoritar');
const listaFavoritos = document.getElementById('lista-favoritos');
const textoVersiculo = document.getElementById('texto-versiculo');
const Referencia = document.getElementById('referencia');

//A lista de favoritos precisa começar vazia aqui fora.
//Se ficar dentro da função, ela vai "zerar" toda vez que você clicar no botão.
const arrayFavoritos = [];

function Clicar(){

     //Pega só o texto de cada elemento (string), não o elemento inteiro
     //Junta o texto do versículo e a referência separando por " - "
    const textoReferencia = [textoVersiculo.textContent, Referencia.textContent].join(" - ");

    //Copia o texto final para a área de transferência do computador/celular
    navigator.clipboard.writeText(textoReferencia);

    //Feedback visual: muda o texto do botão, não da variável
    Copiar.textContent = "Copiado!";

     //(Opcional, mas recomendado) Espera 1.5 segundos (1500 milissegundos) e devolve o texto original ao botão
    setTimeout(() => {
        Copiar.textContent = "Copiar";
    }, 1500);
}

//Configura o botão 'Copiar' para rodar a função Clicar() quando for clicado
Copiar.addEventListener('click', Clicar);

function AdicionarFavorito(){

    //Criando o objeto com as informações do versículo (texto e a referência)
    const favorito = {
        texto: textoVersiculo.textContent,
        referencia: Referencia.textContent
    }
    //Empurra (push) este novo objeto para dentro da nossa lista arrayFavoritos
    arrayFavoritos.push(favorito);

    //Cria um novo elemento de item de lista (<li>) na memória do navegador
    const item = document.createElement('li');

    //Preenche esse <li> com o texto e a referência do objeto que acabamos de criar
    item.textContent = `${favorito.texto} - ${favorito.referencia}`;

    //Pega o <li> pronto e injeta dentro da <ul> que está no HTML
    listaFavoritos.appendChild(item);
}

//Configura o botão 'Favoritar' para rodar a função AdicionarFavorito() quando for clicado
Favorito.addEventListener('click', AdicionarFavorito);