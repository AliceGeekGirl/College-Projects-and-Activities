const Copiar = document.getElementById('btn-copiar');

const favorito = document.getElementById('btn-favoritar');

const listaFavoritos = document.getElementById('lista-favoritos');


function Clicar(){
    const textoVersiculo = document.getElementById('texto-versiculo');
    const Referencia = document.getElementById('referencia');

     //Pega só o texto de cada elemento (string), não o elemento inteiro
    const textoReferencia = [textoVersiculo.textContent, Referencia.textContent].join(" - ");
    navigator.clipboard.writeText(textoReferencia);

    //Feedback visual: muda o texto do botão, não da variável
    Copiar.textContent = "Copiado!";

     //(Opcional, mas recomendado) depois de um tempo, volta ao texto original
    setTimeout(() => {
        Copiar.textContent = "Copiar";
    }, 1500);
}

Copiar.addEventListener('click', Clicar);