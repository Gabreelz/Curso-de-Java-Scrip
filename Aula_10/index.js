// String, number, undefined, null, boolean
const nome = 'Luiz'; // string
const nome1 = 'Luiz'; // string
const nome2 = 'Luiz'; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
const aprovado = false; // Boolean = true, false (lógico)
console.log(typeof aprovado, aprovado);

console.log('\n--------------------------------------------------\n');

// Operadores aritméticos
// + (soma), -(subtração), *(multiplicação), /(divição), **(elevação), %(resto de divisão)
const num3 = 10;
const num4 = 5;
console.log('Soma dos números ',num3, '+', num4, '=', num3 + num4);
console.log('Subtração dos números ',num3, '-', num4, '=', num3 - num4);
console.log('Multiplicação dos números ',num3, '*', num4, '=', num3 * num4);
console.log('Divisão dos números ',num3, '/', num4, '=', num3 / num4);
console.log('Elevação dos números ',num3, '**', num4, '=', num3 ** num4);
console.log('Resto da divisão dos números ',num3, '%', num4, '=', num3 % num4);

let contador = 1;
contador++; // 2
contador++; // 3
console.log('Contador =', contador);
contador--; // 2
console.log('Contador =', contador);

console.log('\n--------------------------------------------------\n');
// Nan - Not a Number
// parseInt() -> Converte uma string para número inteiro
// parseFloat() -> Converte uma string para número decimal

