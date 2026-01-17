function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function EsperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    })
}

/*
EsperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return EsperaAi('Fase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return EsperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
    })
    .catch(e => console.log(e));
*/

async function executa(){
    try{
        const fase1 = await EsperaAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await EsperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await EsperaAi('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase: ', fase3);
    } catch(e){
        console.log(e);
    }
}
executa();
