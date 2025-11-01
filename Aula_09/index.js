// ECMAScript define as versões e novas funcionalidades que o JavaScript deve ter.

//var tem escopo de função: ela “vive” em toda a função onde foi declarada, 
// ou globalmente se estiver fora de qualquer função.

//let tem escopo de bloco: ela existe apenas dentro das chaves { } 
// onde foi criada (por exemplo, dentro de um if, for ou função).

if (true) {
  var x = 10;
  let y = 20;
}
console.log(x); // 10
console.log(y); // Erro: y is not defined

//var permite redeclaração no mesmo escopo — o que pode causar confusão.

//let não permite redeclaração no mesmo escopo, embora possa ser reatribuída

var nome = 'Ana';
var nome = 'João'; // ok, mas perigoso

let idade = 20;
let idade = 30; // Erro: Identifier 'idade' has already been declared