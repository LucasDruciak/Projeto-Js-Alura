function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();  
}

const ListadeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//REPETIDOR
while (contador < ListadeTeclas.length) {

        const tecla = ListadeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idaudio = `#som_${instrumento}`;
        console.log(idaudio);

        tecla.onclick =function () {
            tocaSom(idaudio);
        };
    

    contador = contador + 1;
//console.log(contador);
}