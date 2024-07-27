// lista para guardar os números aletórios
let listaDeNumerosAleatorios = [];
let numeroLimite = 10;
// variavel que vai armazenar o número que foi gerado na função. 
let numeroSecreto = criarNumeroAleatorio();
let tentativas = 1;

// função com que vai exibir a mensagem na tela com os paramentros definidos. 
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//chamando as funções e dando os valores a ser exibidos.
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
} 

mensagemInicial();

//função de verificar chute sem paramentro
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentiva = tentativas > 1 ? 'tentativas' : 'tentivas';
        let mensagemTentivas = `Você descobriu o número secreto com ${tentativas} ${palavraTentiva}`;
        exibirTextoNaTela('p', `${mensagemTentivas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        } 
        tentativas++;
        limparCampo()
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = criarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
//função de criar o número sem paramentro e com retorno. 
function criarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosAleatorios.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosAleatorios = [];
    }
    

    if (listaDeNumerosAleatorios.includes(numeroEscolhido)) {
        return criarNumeroAleatorio();
    } else {
        listaDeNumerosAleatorios.push(numeroEscolhido);
        console.log(listaDeNumerosAleatorios);
        return numeroEscolhido;
    }
}