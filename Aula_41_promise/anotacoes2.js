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

//promise.all / promise.race / promise.reject
const promises = [
    'primeiro valor',
    EsperaAi('primeira promise', rand(1,5)),
    EsperaAi('segunda promise', rand(1,5)),
    EsperaAi('terceira promise', rand(1,5)),
    'outro valor'
];

Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(error){
        console.log(error);
    });

Promise.race(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(error){
        console.log(error);
    });