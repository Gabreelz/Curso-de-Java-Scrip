/*1. Sistema de entidades imutáveis com validação Crie uma factory function que gere entidades 
(por exemplo, Produto ou Usuário) onde os dados internos não possam ser alterados diretamente. 
Use Object.defineProperty com getters e setters para validar entradas e Object.freeze para impedir 
mutações externas. O desafio é permitir atualizações controladas sem quebrar a imutabilidade aparente. */


function validarNome(nome){
    if (typeof nome !== 'string' || nome.trim() === '') {
        throw new Error("Nome inválido");
    }
    return nome;
}

function validarPreco(preco){
    if (typeof preco !== 'number' || preco <= 0) {
        throw new Error("Preço inválido");
    }
    return preco;
}

function criarProduto({nome, preco}){
    let _nome = validarNome(nome);
    let _preco = validarPreco(preco);

    const produto = {};

    Object.defineProperty(produto, 'nome', {
        get(){
            return _nome;
        },
        enumerable: true
    });

    Object.defineProperty(produto, 'preco', {
        get(){
            return _preco;
        },
        enumerable: true
    });

    Object.defineProperty(produto, 'update', {
        value(dados) {
            return criarProduto({
                nome: dados.nome ?? _nome,
                preco: dados.preco ?? _preco
            });
        }
    });

    return Object.freeze(produto);
}

const p1 = criarProduto({ nome: 'Notebook', preco: 3000 });
const p3 = criarProduto({ nome: 'Tv', preco: 5000 });

p1.preco = 10;            // x
delete p1.nome;           // x
p1.novaProp = 'teste';    // x

const p2 = p1.update({ preco: 2800 });

console.log(p1.preco); 
console.log(p2.preco); 
console.log(p3.preco); 

