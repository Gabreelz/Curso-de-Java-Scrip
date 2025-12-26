console.log("Aula 36 - Exercícios Funções");
console.log("----------------------------------");

console.log("Exercício 1 - Crie uma função que receba um nome e retorne uma mensagem de boas-vindas.");
function boasVindas(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}
console.log(boasVindas("Gabriel"));

console.log("----------------------------------");

console.log("Exercício 2 - Crie uma função que receba dois números e retorne a soma deles.");
function soma(a, b) {
    return `A soma de ${a} + ${b}` + ` é igual a ${a + b}.`;
}
console.log(soma(5, 7));

console.log("----------------------------------");

console.log("Exercício 3 - Crie uma função que receba um número e retorne se ele é par ou ímpar.");
function parouimpar(numero){
    if (numero % 2 === 0) {
        return `O número ${numero} é par.`;
    } else {
        return `O número ${numero} é ímpar.`;
    }
}
console.log(parouimpar(10));

console.log("----------------------------------");

console.log("Exercício 4 - Crie uma função que receba uma idade e retorne se a pessoa é maior ou menor de idade.");
function maioridade(idade) {
    if (idade >18){
        return 'O usuario é maior de idade';
    } else {
        return 'O usuario é menor de idade';
    }
}
console.log(maioridade(20));

console.log("----------------------------------");

console.log("Exercício 5 - Crie uma função que receba três notas e retorne a média.");
function medianota(a, b, c){
    media = (a +b +c) / 3;
    return `A média das notas é ${media.toFixed(2)}`;
}
console.log(medianota(7, 8, 9));

console.log("----------------------------------");

console.log("Exercício 6 - Crie uma função que receba um número e retorne o dobro, o triplo e o quadrado dele.");
function calculo(x){
    a = x * 2;
    b = x * 3;
    c = x ** 2;
    return 'Os valores são: ' + `Dobro: ${a}, Triplo: ${b}, Quadrado: ${c}.`;
}
console.log(calculo(9));

console.log("----------------------------------");

console.log("Exercício 7 - Crie uma função que receba um salário e retorne o valor com um aumento de 10%.");
function bonus(salario){
    aumento = salario * 0.10;
    novoSalario = salario + aumento;
    return `O novo salário com aumento de 10% é R$ ${novoSalario.toFixed(2)}.`;
}
console.log(bonus(2500));

console.log("----------------------------------");

console.log("Exercício 8 - Crie uma função que receba um valor e um percentual de desconto e retorne o valor final'.");
function desconto(preco, desco){
    valordesconto = preco * (desco / 100);
    return `O valor final com desconto é R$ ${preco - valordesconto.toFixed(2)}.`;
}

console.log(desconto(200, 15));

console.log("----------------------------------");

console.log("Exercício 9 - Crie uma função que receba dois números e retorne qual é o maior.");
function maior(a, b){
    if (a>b){
        return 'O valor maior é o ' + a;;
    } else{
        return 'O valor maior é o ' + b;
    }
}
console.log(maior(12, 25));

console.log("----------------------------------");

console.log("Exercício 10 - Crie uma função que receba um número e retorne se ele é positivo, negativo ou zero.");
function positivoNegativo(numero){
    if(numero > 0){
        return `O número ${numero} é positivo.`;
    } else if (numero < 0){
        return `O número ${numero} é negativo.`;
    } else {
        return `O número é zero.`;
    }
}
console.log(positivoNegativo(-5));

console.log("----------------------------------");

console.log("Exercício 11 - Crie uma função que receba um número e retorne a tabuada dele.");
function tabuada(numero){
    for(let i = 1; i <=10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tabuada(7);

console.log("----------------------------------");

console.log("Exercício 12 - Crie uma função que receba um número e retorne a soma de todos os números de 1 até ele.");   
function somarAte(numero){
    let soma = 0;
    for(let i = 1; i <= numero; i++){
        soma += i;
        console.log(soma);
    }
    
}
somarAte(5);

console.log("----------------------------------");

console.log("Exercício 13 - Crie uma função que receba um número e retorne se ele é primo.");
function primo(a){
    if (a <= 1) {
        return `O número ${a} não é primo.`;
    }

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return `O número ${a} não é primo.`;
        }
    }
    return `O número ${a} é primo.`;
}
console.log(primo(11));

console.log("----------------------------------");

console.log("Exercício 14 - Crie uma função que receba uma palavra e retorne se ela é um palíndromo.");
function palindromo(palavra){
    const reversa = palavra.split('').reverse().join('');
    if (palavra === reversa){
        return `A palavra ${palavra} é um palíndromo.`;
    } else {
        return `A palavra ${palavra} não é um palíndromo.`;
    }
}
console.log(palindromo("arara"));

console.log("----------------------------------");

console.log("Exercício 15 - Crie uma função que receba uma string e retorne quantos caracteres ela possui.");
function contarCaracteres(string){
    return `A string "${string}" possui ${string.length} caracteres.`;
}
console.log(contarCaracteres("Hello, world!"));

console.log("----------------------------------");

console.log("Exercício 16 - Crie uma função que receba um array de números e retorne a média deles.");
function mediaArray(numeros){
    let soma = 0;
    for (i = 0; i < numeros.length; i++){
        soma =+ numeros[i];
    }
    return `A média dos números é ${soma / numeros.length}.`;
}
console.log(mediaArray([5, 10, 15]));

console.log("----------------------------------");

console.log("Exercício 17 - Crie uma função que receba um array e retorne um novo array apenas com os números pares.");
function pares(a){
    let par = [];
    for (let i = 0; i <= a.length; i++){
        if(a[i] % 2 === 0){
        par.push(a[i]);
    }
}
    return par;
}
console.log(pares([1, 2, 3, 4, 5, 6]));

console.log("----------------------------------");

console.log("Exercício 18 - Crie uma função que receba outra função como parâmetro e a execute.");
function fun(oi){
    console.log(oi);
}
function oi(){
    return "Função executada!";
}
fun(oi());
