/*Diferenças entre var, let e const

var = escopo global ou de função, pode ser redeclarada e atualizada
let = escopo de bloco, pode ser atualizada mas não redeclarada
const = escopo de bloco, não pode ser atualizada nem redeclarada

*/

let nome = 'João';
nome = 'Pedro';
console.log(nome);

const nome2 = 'Maria';
//nome2 = 'Ana'; // ERRO: Assignment to constant variable.
console.log(nome2);

var nome3 = 'Carlos';
var nome3 = 'Fernando';
console.log(nome3);

const nome4 = 'Beatriz';
//const nome4 = 'Larissa'; // ERRO: Identifier 'nome4' has already been declared
console.log(nome4);
