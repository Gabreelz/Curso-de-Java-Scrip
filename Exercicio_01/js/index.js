const nome = prompt('Digite o seu nome:');

document.body.innerHTML = 'Seu nome é: ' + nome + '<br />';
document.body.innerHTML += 'Seu nome tem ' + nome.length + " letras <br />";
document.body.innerHTML += 'A segunda letra do seu nome é ' +  nome.charAt(1) + '<br />';
document.body.innerHTML += 'Qual o primeiro indice da letra a no seu nome? ' + nome.indexOf('a') + '<br />';      
document.body.innerHTML += 'Qual o último indice da letra a no seu nome? '+ nome.lastIndexOf('a') +' <br />';
document.body.innerHTML += 'As últimas 3 letras do seu nome são: ' + nome.slice(-3) + '<br />';
document.body.innerHTML += 'As palavras do seu nome são: '+ nome.match(/[a-z]/g) +'<br />';
document.body.innerHTML += 'Seu nome em letras maiúsculas: '+ nome.toUpperCase() +'<br />';
document.body.innerHTML += 'Seu nome em letras minúsculas: '+ nome.toLowerCase() +'<br />';

