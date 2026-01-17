function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function EsperaAi(msg, tempo){

    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));
        
        setTimeout(() => {      
            resolve(msg);
        }, tempo);
    });
}

EsperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return EsperaAi('Buscando dados da Base', rand(1, 3));
    })
    .then(resposta =>{
        console.log(resposta);
        return EsperaAi(22222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return EsperaAi('Exibe dados na tela', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO: ' + e);
    }
    );
