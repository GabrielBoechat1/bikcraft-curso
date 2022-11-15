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