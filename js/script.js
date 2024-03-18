function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

 let contador = 0;

 while(contador < listaDeTeclas.length) {

    co

    listaDeTeclas[0].onclick = function () {
        tocaSom('#som_tecla_pom');
    };
    contador++;
 }


