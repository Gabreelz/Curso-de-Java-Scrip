/*
2. Implementação manual de herança prototipal Sem usar class, extends ou new, 
implemente uma hierarquia de objetos onde um tipo base define comportamentos comuns e 
tipos derivados sobrescrevem métodos. Use Object.create e manipulação explícita de prototypes.
O código deve permitir polimorfismo real.
*/

const personagem = {
    init(nome){
        this.nome = nome;
        return this;
    },

    salvar(){
        return `${this.nome} save people`;
    }
};

const heroi = Object.create(personagem);

    heroi.salvar = function(){
        return `${this.nome} fight for peace`;
    }

const vilao = Object.create(personagem);
    vilao.salvar = function(){
        return `${this.nome} kill people`;
    }

    //Herda de Heroi, mas muda o comportamento
const antheroi = Object.create(heroi);
    antheroi.salvar = function(){
        const base = personagem.salvar.call(this);
        return `${base} But kill thieves`;
    }

const superman = Object.create(heroi).init("Super-Man");
const Joker = Object.create(vilao).init("Joker");
const Constantine = Object.create(antheroi).init("Constantine");
const figurante = Object.create(personagem).init("figurante");

const personagens = [superman, Joker, Constantine, figurante];

for (const p of personagens){
    console.log(p.salvar());
}


