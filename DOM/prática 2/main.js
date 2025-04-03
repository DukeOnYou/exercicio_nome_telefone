const telefone = document.getElementById('telefone');
const nome = document.getElementById('nome');
const form = document.getElementById('form');
let nomes = [];
let telefones = [];
let linhas = '';

function adicionarLinhas(){
    let linha = `<tr><td>${nome.value}</td>
    <td>${telefone.value}</td></tr>`;
    linhas += linha;
}

function resgataCorpo(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function adicionaNasArrays(){
    nomes += nome.value;
    telefones += telefone.value;
}

function adicionarNaTabela(){
    if (nomes.includes(nome.value) && telefones.includes(telefone.value)){
        alert('Esse nome e telefone já foram inseridos!')
    }else{
        adicionarLinhas();
        resgataCorpo();
        adicionaNasArrays();
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarNaTabela();
})

