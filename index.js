//! Variable de los contadores
const contadores = document.querySelectorAll('.numero-contador')
console.log(contadores)

//! Variable del textarea
const valor_textarea = document.getElementById('textarea');

//! Variables de los botones
const btnContar = document.querySelector('#btn-contar');
const btnBorrar = document.querySelector('#btn-borrar');

function contarPalabras() {
    const valueTextArea = valor_textarea.value;
    const arrayValores = valueTextArea.split(' ');
    const numeroPalabras = arrayValores.length;

    console.log(numeroPalabras)

    const contador_palabras = contadores[0]
    contador_palabras.innerHTML = numeroPalabras

}

btnContar.addEventListener('click', contarPalabras)