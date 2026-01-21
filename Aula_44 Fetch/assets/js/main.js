// Função que busca as páginas
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);
    //O fetch serve para fazer requisições HTTP (buscar dados ou páginas no servidor) de forma assíncrona,
    //retornando uma Promise com a resposta.

    if(response.status !== 200) throw new Error('ERRO 404!');

    const html = await response.text();
    carregaResultado(html);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}