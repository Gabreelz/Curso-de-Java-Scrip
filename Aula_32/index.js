//Atribuição via Destructuring
const num = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

console.log(primeiro);   // 1;

//para cada item eu pego o valor e atribuo a uma variável
const [primeiro, segundo, ...resto] = num;

console.log(primeiro, segundo);   // 1 2
console.log(resto);  // [3, 4, 5, 6, 7, 8, 9, 10]

const num2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(num2[0]); // [1, 2, 3]