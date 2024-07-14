var atraso = 200;
var textoElemento = document.querySelector(".titulo");
var texto = textoElemento.textContent;


var contadorDeLetras = 0;
var colorir = false; // Para determinar se devemos colorir

function escreverTexto() {
    if (contadorDeLetras < texto.length) {
        const span = document.createElement('span');
        const letra = texto.charAt(contadorDeLetras);

        // Adiciona a letra ao span
        span.textContent = letra;

        // Se já passou por um espaço, aplica a cor
        if (colorir) {
            span.classList.add('texto-colorido');
        }

        // Adiciona o span ao elemento
        textoElemento.appendChild(span);

        // Verifica se a letra atual é um espaço
        if (letra === " ") {
            colorir = true; // Começa a colorir a partir da próxima letra
        }

        contadorDeLetras++;
        setTimeout(escreverTexto, atraso);
    }
}

textoElemento.textContent = ""; 
escreverTexto();