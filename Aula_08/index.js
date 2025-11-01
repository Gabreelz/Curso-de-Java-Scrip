/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const alturaemM = 1.8;
let imc;
imc = peso / (alturaemM * alturaemM);
let anoNascimento;
anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
tem ${alturaemM} de altura e seu IMC é de ${imc}
${nome} nasceu em ${anoNascimento}`);

