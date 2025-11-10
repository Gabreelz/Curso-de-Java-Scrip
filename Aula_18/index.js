const pessoa1 = {
    nome: 'Luiz',
    sobrenome:  'Miranda',
    idade: '23',

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementedata(){
        this.idade++
    }
};

pessoa1.fala();
pessoa1.incrementedata();
pessoa1.fala();
pessoa1.incrementedata();
pessoa1.fala();

