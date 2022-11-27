// Ativar os links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    if (url.includes(link.href)) {
        link.classList.add('ativo');
    };
};

links.forEach(ativarLink);

// Ativar os items do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    };
};

parametros.forEach(ativarProduto);

// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    const ativa = resposta.classList.contains('ativa');

    pergunta.setAttribute('aria-expanded', ativa);
    resposta.classList.toggle('ativa');
    console.log(resposta);
};

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
};

perguntas.forEach(eventosPerguntas);