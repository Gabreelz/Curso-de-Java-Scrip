/* Operação Ternario
representado por ? :
pode ser usado para substituir if e else
condição ? valor para verdadeiro : valor para falso
*/
const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário Normal');
}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario); // Usuário Normal