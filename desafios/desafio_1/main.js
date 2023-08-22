const IPT_TEL = document.querySelector("input[type='tel']");
const TECLAS = document.querySelectorAll("input[type='button']");

TECLAS.forEach(tecla => {

    tecla.onkeydown = (evento) => {
        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => tecla.classList.remove('ativa');

    tecla.onclick = () => IPT_TEL.value += tecla.value;
});