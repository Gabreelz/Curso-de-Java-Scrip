let alunos = ['Luiz', 'Maria', 'João'];

console.log(typeof alunos); // "object"
console.log(alunos instanceof Array); // true

alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, -2)); // ['Luiz', 'Maria', 'João']
console.log(alunos[50]); // undefined

delete alunos[1];
console.log(alunos[1]); // undefined

const removido = alunos.shift();
console.log(removido); // 'Luiz'
console.log(alunos);   // [empty, 'João', 'Luiza', 'Eduardo']

alunos.unshift('Fábio');
alunos.unshift('Luiza');

alunos.push('Luiza');
alunos.push('Fábio');

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana';

alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);
