/*Switch / case
--- IGNORE ---
O switch / case é uma estrutura de controle que permite executar diferentes blocos de código 
com base no valor de uma expressão.
--- IGNORE ---
Ele é útil quando se tem múltiplas condições a serem verificadas, 
tornando o código mais legível do que uma série de if / else if.
--- IGNORE ---*/

const fruta = 'Maçã';

switch (fruta) {    
    case 'Banana':
        console.log('É uma banana.');
        break;
    case 'Maçã':
        console.log('É uma maçã.');
        break;
    case 'Laranja':
        console.log('É uma laranja.');
        break;
    default:
        console.log('Fruta desconhecida.');
}
//Saída: É uma maçã.
