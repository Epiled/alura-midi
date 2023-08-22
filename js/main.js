function tocaSom(elementoAudio) {
    const elemento = document.querySelector(elementoAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const LISTA_TECLAS = document.querySelectorAll('.tecla');
const LISTA_SONS = document.querySelectorAll('audio');

LISTA_TECLAS.forEach((tecla) => {
    const INSTRUMENTO = tecla.classList[1];
    const ID_AUDIO = `#som_${INSTRUMENTO}`;

    tecla.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter')
            tecla.classList.add('ativa');
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }

    tecla.onclick = () => tocaSom(ID_AUDIO);
});