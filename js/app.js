let amigosIncluidos = []; // Array para armazenar os nomes dos amigos

function adicionar() {
    // Obtém o nome do amigo digitado
    let nomeAmigo = document.getElementById('nome-amigo').value; 
    
    // Obtém o elemento da lista de amigos
    let listaAmigos = document.getElementById('lista-amigos'); 
    
    //Verifica se o nome do amigo incluído é vazio
    if (nomeAmigo == '') {
        alert('Insira um nome de amigo válido !');
        return;
    };
    nomeAmigo = nomeAmigo.toUpperCase();
    // Verifica se o nome já existe
    if (!amigosIncluidos.includes(nomeAmigo)) { 
        // Adiciona o nome ao array
        amigosIncluidos.push(nomeAmigo); 
    } else {
        alert(`O nome ${nomeAmigo} já foi incluído na lista !`);
    };
    
    // Limpa o campo de entrada
    document.getElementById('nome-amigo').value = ''; 
    
    // Atualiza a lista na tela
    listaAmigos.textContent = amigosIncluidos.join(', '); 

    atualizarLista();
    atualizarSorteio();

};

function sortear() {
    // Verifica se a quantidade de amigos no array é menor do que 4
    if (amigosIncluidos.length < 4) {
        alert ('Inclua pelo menos 4 amigos para o sorteio do amigo secreto');
        return;
    };
    // Embaralha o array de amigos
    for (i = amigosIncluidos.length -1; i > 0; i--) {
        const j = Math.floor(Math.random * i + 1);
        [amigosIncluidos[i], amigosIncluidos[j] = amigosIncluidos[j], amigosIncluidos[i]];
    };
    // Cria pares de amigos para o sorteio
    const pares = amigosIncluidos.map((nome, index) => {
        // Calcula o índice do próximo participante
        const proximoParticipante = (index + 1) % amigosIncluidos.length; 
        // Cria a string com o par de nomes
        return `${nome} retirou ${amigosIncluidos[proximoParticipante]}`; 
    });
    // Exibe os pares na tela
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = pares.join(';'+ '<br>');
};
// Limpa todos os dados e a interface
function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    amigosIncluidos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
};

function excluirAmigo(index) {
    amigosIncluidos.splice(index,1);
    atualizarLista();
    atualizarSorteio();
};

function atualizarLista() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = '';
    // Cria um elemento de parágrafo para cada amigo
    for (i = 0; i < amigosIncluidos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigosIncluidos[i];
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });
         // Adiciona o parágrafo à lista
        listaAmigos.appendChild(paragrafo);
    }
};

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
};