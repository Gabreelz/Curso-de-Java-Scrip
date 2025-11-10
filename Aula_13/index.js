let umaString = 'uma Texto';
console.log(umaString);

console.log(umaString.charAt(1)); // Retorna o valor da pos
console.log(umaString.concat(' em JAVA SCRIPT')); // Concatena valores
console.log(umaString.indexOf('Texto')); // Retorna o índice do valor
console.log(umaString.match(/[a-z]/g)); // Retorna um array com as correspondências)
console.log(umaString.replace(/e/g, '3'));
console.log(umaString.length); // Retorna o tamanho da string
console.log(umaString.slice(4, 9)); // Corta a string
console.log(umaString.split(' ')); // Divide a string com base no separador
console.log(umaString.toUpperCase()); // Converte para maiúsculo
console.log(umaString.toLowerCase()); // Converte para minúsculo
console.log(umaString.trim()); // Remove espaços em branco no início e no fim
console.log(umaString[4]); // Retorna o valor da posição
console.log(umaString[umaString.length - 1]); // Retorna o último caractere da string
console.log(umaString.replace('Texto', 'String')); // Substitui um valor por outro
console.log(umaString.includes('Texto')); // Retorna true ou false se encontrar o valor
console.log(umaString.startsWith('uma')); // Retorna true ou false se começar com o valor
console.log(umaString.endsWith('Texto')); // Retorna true ou false se terminar com o valor
console.log(umaString.repeat(3)); // Repete a string n vezes
console.log(umaString.slice(-5)); // Corta a string a partir do final
console.log(umaString.slice(4)); // Corta a string a partir do índice
console.log(umaString.substr(4, 5)); // Corta a string a partir do índice com o número de caracteres
console.log(umaString.substring(4, 9)); // Corta a string entre dois índices
console.log(umaString.padStart(20, '*')); // Adiciona caracteres no início até atingir o tamanho
console.log(umaString.padEnd(20, '*')); // Adiciona caracteres no fim até atingir o tamanho
console.log(umaString.charCodeAt(2)); // Retorna o código Unicode do caractere na posição