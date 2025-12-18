let tempo = 0;
let intervalo = null;

const tempoEl = document.getElementById('tempo');
const modoEl = document.getElementById('modo');

const alerta15 = document.getElementById('alerta15');
const alerta5 = document.getElementById('alerta5');
const fim = document.getElementById('fim');

function formatarTempo(segundos) {
    const h = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const s = String(segundos % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function iniciartimer(){
    clearInterval(intervalo);

    intervalo = setInterval(() => {
        tempo--;
        tempoEl.textContent = formatarTempo(tempo);

        if(tempo === 900){
            alerta15.play();
        }

        if(tempo === 300){
            alerta5.play();
        }

        if(tempo <= 0){
            fim.play();
            clearInterval(intervalo);
        }
    }, 1000);
}

document.querySelector('#estudo').addEventListener('click', () => {
    modoEl.textContent = 'Modo Estudo';
    tempo = 5400;
    tempoEl.textContent = formatarTempo(tempo);
    iniciartimer();
});

document.querySelector('#descanso').addEventListener('click', () => {
    modoEl.textContent = 'Modo Descanso';
    tempo = 1800;
    tempoEl.textContent = formatarTempo(tempo);
    iniciartimer();
});
