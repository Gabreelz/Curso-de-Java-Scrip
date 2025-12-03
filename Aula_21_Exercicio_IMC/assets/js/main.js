//Capturando o formulário
const form = document.querySelector('#formulario');

//Quando o usuário clica em Enviar, o submit dispara.
form.addEventListener('submit', function (event) {
    event.preventDefault();

    //Pegando os inputs dentro do formulário
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    // Convertendo os valores para número
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //Se peso for 0, vazio ou NaN, cai aqui.
    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);

});

function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function criarP() {
    const p = document.createElement('p');
    return p;    
}

//Primeiro limpa o conteúdo da área de resultado.
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criarP();

    //Isso permite estilizar verde para “ok”, vermelho para “erro”.
    if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
