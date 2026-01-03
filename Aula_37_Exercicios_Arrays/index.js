function analisarNotas(notas) {
    let notasValidadas = [];
    let descartadas = 0;

    for (let i = 0; i < notas.length; i++) {
        let nota = notas[i];

        if (typeof nota === "number" && !isNaN(nota) && nota >= 0 && nota <= 10) {
            notasValidadas.push(nota);
        } else {
            descartadas++;
        }
    }

    let soma = 0;
    let maior = notasValidadas[0];
    let menor = notasValidadas[0];

    for (let i = 0; i < notasValidadas.length; i++) {
        soma += notasValidadas[i];

        if (notasValidadas[i] > maior) {
            maior = notasValidadas[i];
        }

        if (notasValidadas[i] < menor) {
            menor = notasValidadas[i];
        }
    }

    let media = soma / notasValidadas.length;

    return {
        notasValidadas,
        media,
        maior,
        menor,
        descartadas
    };
}

const notas = [8, 10, -2, "9", null, 7, 11, 6];

console.log(analisarNotas(notas));

function analisarnomes(nomes) {
    const nomesNormalizados = nomes.map(nome =>
        nome.trim().toLowerCase()
    );

    const nomesSemDuplicatas = [...new Set(nomesNormalizados)];

    return nomesSemDuplicatas.sort();
}

const listaNomes = [
    "Gabriel",
    "LuiZ",
    "NaThAlIa     ",
    "Ana",
    "João PauLo"
];

console.log(analisarnomes(listaNomes));

function controleEstoque(p){
    const produtosCriticos = produtos.filter(produto =>
        produto.quantidade < produto.minimo
    );

    const totalEstoque = produtos.reduce((total, produto) => {
        return total + produto.quantidade;
    }, 0);

    return {
        totalEstoque,
        produtosCriticos
    };
}

const produtos = [
  { nome: "Arroz", quantidade: 40, minimo: 30 },
  { nome: "Feijão", quantidade: 18, minimo: 20 },
  { nome: "Macarrão", quantidade: 25, minimo: 15 },
  { nome: "Óleo", quantidade: 8, minimo: 10 },
  { nome: "Açúcar", quantidade: 50, minimo: 25 },
  { nome: "Sal", quantidade: 12, minimo: 10 },
  { nome: "Café", quantidade: 5, minimo: 15 },
  { nome: "Leite", quantidade: 30, minimo: 20 },
  { nome: "Biscoito", quantidade: 9, minimo: 12 },
  { nome: "Farinha", quantidade: 22, minimo: 20 }
];

const resultado = controleEstoque(produtos);

console.log("O total de Estoque é de " + resultado.totalEstoque);
console.log(resultado.produtosCriticos);

function VendasDoMes(venda) {

    const FaturamentoTotal = venda.reduce((total, valor) => {
        return total + valor;
    }, 0);

    const mediaDiaria = FaturamentoTotal / venda.length;

    const AcimaMedia = venda.filter(valor => valor > mediaDiaria);

    let maiorSequencia = 0;
    let atualSequencia = 0;

    for (let i = 1; i < venda.length; i++) {
        if (venda[i] > venda[i - 1]) {
            atualSequencia++;
            if (atualSequencia > maiorSequencia) {
                maiorSequencia = atualSequencia;
            }
        } else {
            atualSequencia = 0;
        }
    }

    return {
        FaturamentoTotal,
        mediaDiaria,
        AcimaMedia,
        maiorSequencia: maiorSequencia + 1
    };
}

const vendasDiarias = [
  120, 150, 98, 200, 175, 160, 140,
  90, 110, 130, 180, 220, 210, 195,
  170, 160, 155, 145, 135, 125,
  100, 115, 140, 165, 190, 205,
  215, 230, 225, 240
];

const resultadoVenda = VendasDoMes(vendasDiarias);

console.log("Total = " + resultadoVenda.FaturamentoTotal);
console.log("Média do mês: " + resultadoVenda.mediaDiaria);
console.log("Acima da Média: ", resultadoVenda.AcimaMedia);
console.log("Sequência de crescimento: " + resultadoVenda.maiorSequencia);

function ranked(p){
    return [...p].sort((a,b) => {
        if(b.pontos !== a.pontos){
            return b.pontos - a.pontos;
        }
        if(b.faltas !== a.faltas){
            return b.faltas - a.faltas;
        }
        return a.tempo - b-tempo;
    });
}

const jogadores = [
  { nome: "Carlos", pontos: 18, faltas: 2, tempo: 32 },
  { nome: "Rafael", pontos: 25, faltas: 4, tempo: 38 },
  { nome: "Lucas", pontos: 12, faltas: 1, tempo: 28 },
  { nome: "Bruno", pontos: 9, faltas: 3, tempo: 22 },
  { nome: "Diego", pontos: 30, faltas: 5, tempo: 40 },
  { nome: "Matheus", pontos: 15, faltas: 2, tempo: 26 },
  { nome: "Felipe", pontos: 21, faltas: 4, tempo: 34 },
  { nome: "João", pontos: 7, faltas: 1, tempo: 18 }
];

const ranking = ranked(jogadores);
console.log(ranking);

function detectarSequencias(numeros) {
  const resultado = [];
  let sequenciaAtual = [];

  for (let i = 0; i < numeros.length; i++) {
    const atual = numeros[i];
    const anterior = numeros[i - 1];

    // Primeiro número ou número repetido
    if (i === 0 || atual === anterior) {
      if (sequenciaAtual.length === 0) {
        sequenciaAtual.push(atual);
      }
      continue;
    }

    // Número consecutivo
    if (atual === anterior + 1) {
      sequenciaAtual.push(atual);
    } else {
      // Quebra da sequência
      if (sequenciaAtual.length >= 3) {
        resultado.push([...sequenciaAtual]);
      }
      sequenciaAtual = [atual];
    }
  }
  
  return resultado;
}
const numeros = [
  1, 2, 3, 4, 6,
  8, 9, 10, 11, 12,
  15, 18,
  20, 21, 22, 23,
  25, 26,
  30,
  32, 33, 34,
  40, 41, 42, 43, 44,
  50,
  60, 61, 62,
  70,
  80, 81, 82, 83, 84, 85,
  90,
  100
];

console.log(detectarSequencias(numeros));

function saldodoMes(entradas, saidas){
    const final = [];
    let saldoFinal = 0;
    const SaldoNegativos = [];

    for(let i = 0; i < entradas.length; i++){
        const saldoDia = entradas[i] - saidas[i];

        final.push({
            dia: i + 1,
            entrada: entradas[i],
            saidas: saidas[i],
            saldo: saldoDia
        });

        saldoFinal += saldoDia;
        
        if (saldoDia < 0){
            SaldoNegativos.push({
                dia: i + 1,
                saldo: saldoDia}); 
        }
    }

    return{
        final,
        saldoFinal,
        SaldoNegativos
    };
}

const entradas = [
  120, 200, 150, 80, 300, 90, 60, 400, 220, 180,
  75,  260, 140, 310, 95,  500, 130, 170, 210, 60
];

const saidas = [
  100, 180, 170, 120, 250, 110, 90, 350, 240, 200,
  80,  300, 160, 280, 120, 450, 150, 190, 260, 100
];

const SaldoBanco = saldodoMes(entradas, saidas);

console.log("------------------------");
console.log("RELATÓRIO DO MÊS");
console.table(SaldoBanco.final);
console.log("");
    if(SaldoBanco.saldoFinal > 0){
        console.log("Saldo Final Positivo!!");
        console.log("Saldo Total: " + SaldoBanco.saldoFinal);
        console.log("");
    } else{
        console.log("Saldo Final Negativo. CUIDADO!!");
        console.log("Saldo Total: " + SaldoBanco.saldoFinal);
        console.log("");
    }
console.log("Dias com Saldo Negativo:");
console.table(SaldoBanco.SaldoNegativos);
console.log("------------------------");

function validarFormularios(formularios) {
    const validos = [];
    const invalidos = [];

    const errosPorCampo = {
        nome: 0,
        email: 0,
        idade: 0
    };

    for (let i = 0; i < formularios.length; i++) {
        const form = formularios[i];
        let formValido = true;

        if (!form.nome) {
            errosPorCampo.nome++;
            formValido = false;
        }

        if (!form.email) {
            errosPorCampo.email++;
            formValido = false;
        }

        if (!form.idade) {
            errosPorCampo.idade++;
            formValido = false;
        }

        if (formValido) {
            validos.push(form);
        } else {
            invalidos.push(form);
        }
    }

    return {
        validos,
        invalidos,
        errosPorCampo
    };
}

const formularios = [
  { nome: "Ana", email: "ana@email.com", idade: 20 },
  { nome: "", email: "bruno@email.com", idade: 25 },
  { nome: "Carlos", email: "", idade: null },
  { nome: "Diana", email: "diana@email.com", idade: 30 },
  { nome: null, email: "eva@email.com", idade: 22 }
];

const resultadoForm = validarFormularios(formularios);

console.log("Formulários válidos:");
console.table(resultadoForm.validos);

console.log("Formulários inválidos:");
console.table(resultadoForm.invalidos);

console.log("Erros por campo:");
console.table(resultadoForm.errosPorCampo);

function atendimento(clientes){
    const filaOrdem = [...clientes].sort((a,b) => {
        return b.prioridade - a.prioridade;
    });

    let tempoTotalEspera = 0;
    let tempoAcumulado = 0;
    const historico = [];

    for(let i = 0; i < filaOrdem.length; i++){
        const cliente = filaOrdem[i];

        historico.push({
            nome: cliente.nome,
            prioridade: cliente.prioridade,
            TempoEspera: tempoAcumulado,
            tempoAtendimento: cliente.tempoAtendimento
        });

        tempoAcumulado += cliente.tempoAtendimento;
        tempoTotalEspera += tempoAcumulado;
    }

    return{
        filaOrdem,
        historico,
        tempoTotalEspera
    };
}

const clientes = [
  { nome: "Ana", prioridade: 2, tempoAtendimento: 15 },
  { nome: "Bruno", prioridade: 1, tempoAtendimento: 10 },
  { nome: "Carlos", prioridade: 3, tempoAtendimento: 20 },
  { nome: "Diana", prioridade: 2, tempoAtendimento: 5 },
  { nome: "Eva", prioridade: 1, tempoAtendimento: 12 },
  { nome: "Fernando", prioridade: 3, tempoAtendimento: 18 },
  { nome: "Gabriela", prioridade: 2, tempoAtendimento: 25 },
  { nome: "Henrique", prioridade: 1, tempoAtendimento: 8 },
  { nome: "Isabela", prioridade: 3, tempoAtendimento: 30 },
  { nome: "João", prioridade: 2, tempoAtendimento: 10 },
  { nome: "Karen", prioridade: 1, tempoAtendimento: 14 },
  { nome: "Lucas", prioridade: 2, tempoAtendimento: 22 },
  { nome: "Marina", prioridade: 3, tempoAtendimento: 16 },
  { nome: "Nicolas", prioridade: 1, tempoAtendimento: 9 },
  { nome: "Olivia", prioridade: 2, tempoAtendimento: 11 },
  { nome: "Paulo", prioridade: 1, tempoAtendimento: 7 },
  { nome: "Renata", prioridade: 3, tempoAtendimento: 19 },
  { nome: "Sofia", prioridade: 2, tempoAtendimento: 13 },
  { nome: "Tiago", prioridade: 1, tempoAtendimento: 6 },
  { nome: "Viviane", prioridade: 3, tempoAtendimento: 21 }
];

const resultadoFila = atendimento(clientes);

console.log("Fila ordenada por prioridade:");
console.table(resultadoFila.filaOrdem);

console.log("Histórico de atendimento:");
console.table(resultadoFila.historico);

console.log("Tempo total de espera:", resultadoFila.tempoTotalEspera);
