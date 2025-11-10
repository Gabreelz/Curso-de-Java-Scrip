let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

// Reatribuindo valores

const varTemp = varA; // A
varA = varB; // B
varB = varC; // C
varC = varTemp; // B

console.log(varA, varB, varC);




