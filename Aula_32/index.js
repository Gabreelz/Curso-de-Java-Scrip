//Atribuição via Destructuring
const num = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

//para cada item eu pego o valor e atribuo a uma variável
const [primeiro, segundo, ...resto] = num;

console.log(primeiro);   // 1;

console.log(primeiro, segundo);   // 1 2
console.log(resto);  // [3, 4, 5, 6, 7, 8, 9, 10]

const num2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(num2[0]); // [1, 2, 3]


// atribuição via destructuring (objeto)

const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    endereco: {
        rua: 'Rua A',
        numero: 100
    }
};

console.log(pessoa);

const nome = pessoa.nome;
console.log(nome); // João

const { nome2} = pessoa;
console.log(nome2); // João

// estrutura de repetição no js

for (let i = 0; i < 100; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}