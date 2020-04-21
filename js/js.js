

let jogadorNome;

let jogadorPontos = 0;
let jogadorEscolha = 0;

let computadorPontos = 0;
let computadorEscolha = 0;

function mensagem(texto) {
    document.getElementById("mensagem").innerHTML = texto;
}

function definirNomeJogador(nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
}

// Sorteia entre dois numeros.

function sortear (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// calculo e retorna quem ganhou 
// 0 - Empate
// 1 - Jogador
// 2 - Computador

function calcularEscolha(jogador, computador) {
    
    if(jogador == 1 && computador == 1) {
        return 0;
    }
    else if(jogador == 1 && computador == 2) {
        return 2;
    }
    else if(jogador == 1 && computador == 3) {
        return 1;
    }

    // Logica 02

    else if(jogador == 2 && computador == 1) {
        return 1;
    }
    else if(jogador == 2 && computador == 2) {
        return 0;
    }
    else if(jogador == 2 && computador == 3) {
        return 2;
    }

    // Logica 03

    else if(jogador == 3 && computador == 1) {
        return 2;
    }
    else if(jogador == 3 && computador == 2) {
        return 1;
    }
    else if(jogador == 3 && computador == 3) {
        return 0;
    }
}


// Escolhe a jogada do usuário
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura


function jogar(escolha) {

    jogadorEscolha = escolha;

    // sortear a jogada do computador
    computadorEscolha = sortear(1, 3);

    let ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if(ganhador == 0) {
        mensagem('empate');
    }
    if(ganhador == 1) {
        mensagem('Ponto para o ' + jogadorNome);
        somarPontosJogador();
    }
    if(ganhador == 2) {
        mensagem('Ponto para o Computador');
        somarPontosComputador();
    }
}

function somarPontosJogador() {
    jogadorPontos++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
};

function somarPontosComputador() {
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
};

document.getElementById("jogador-escolha1").onclick = function() {
    jogar(1);
};
document.getElementById("jogador-escolha2").onclick = function() {
    jogar(2);
};
document.getElementById("jogador-escolha3").onclick = function() {
    jogar(3);
};

jogadorNome = prompt("Qual é o seu nome ?");

definirNomeJogador(jogadorNome);

mensagem('Seja bem vindo(a) ' + jogadorNome + ', está preparado para jogar ?');
