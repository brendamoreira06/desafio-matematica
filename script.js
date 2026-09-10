// ============================================================
// Desafio de Matemática — lógica do jogo
// ============================================================

const TEMPO_POR_PERGUNTA = 10; // segundos para responder cada conta
const VIDAS_INICIAIS = 3;
const PONTOS_PARA_VENCER = 100;
const PONTOS_POR_ACERTO = 10;

// Referências dos elementos do HTML.
const pontosValueEl = document.getElementById('pontosValue');
const vidasValueEl = document.getElementById('vidasValue');
const tempoValueEl = document.getElementById('tempoValue');
const perguntaDisplayEl = document.getElementById('perguntaDisplay');
const formResposta = document.getElementById('formResposta');
const respostaInput = document.getElementById('respostaInput');
const responderBtn = document.getElementById('responderBtn');
const telaInicial = document.getElementById('telaInicial');
const mensagemFinal = document.getElementById('mensagemFinal');
const textoFinalEl = document.getElementById('textoFinal');
const iniciarBtn = document.getElementById('iniciarBtn');
const reiniciarBtn = document.getElementById('reiniciarBtn');

// Variáveis de estado da partida atual.
let pontos = 0;
let vidas = VIDAS_INICIAIS;
let tempoRestante = TEMPO_POR_PERGUNTA;
let respostaCorreta = 0;
let timerId = null;

// ------------------------------------------------------------
// Gera uma nova conta aleatória (soma, subtração ou multiplicação)
// e guarda a resposta correta em `respostaCorreta`.
// ------------------------------------------------------------
function gerarPergunta() {
  const operacoes = ['+', '-', 'x'];
  const operacao = operacoes[Math.floor(Math.random() * operacoes.length)];

  let a, b;

  if (operacao === 'x') {
    // números menores para a multiplicação não ficar difícil demais
    a = Math.floor(Math.random() * 12) + 1;
    b = Math.floor(Math.random() * 12) + 1;
  } else {
    a = Math.floor(Math.random() * 50) + 1;
    b = Math.floor(Math.random() * 50) + 1;
    // na subtração, garante que o resultado nunca seja negativo
    if (operacao === '-' && b > a) {
      [a, b] = [b, a];
    }
  }

  if (operacao === '+') respostaCorreta = a + b;
  if (operacao === '-') respostaCorreta = a - b;
  if (operacao === 'x') respostaCorreta = a * b;

  perguntaDisplayEl.textContent = `${a} ${operacao} ${b} = ?`;

  respostaInput.value = '';
  respostaInput.focus();

  tempoRestante = TEMPO_POR_PERGUNTA;
  tempoValueEl.textContent = tempoRestante;

  reiniciarTimer();
}

// ------------------------------------------------------------
// (Re)inicia o cronômetro da pergunta atual.
// ------------------------------------------------------------
function reiniciarTimer() {
  clearInterval(timerId); // garante que não existam dois timers rodando
  timerId = setInterval(tick, 1000);
}

// ------------------------------------------------------------
// Executada uma vez por segundo enquanto uma pergunta está ativa.
// ------------------------------------------------------------
function tick() {
  tempoRestante -= 1;
  tempoValueEl.textContent = tempoRestante;

  if (tempoRestante <= 0) {
    perderVida('O tempo acabou.');
  }
}

// ------------------------------------------------------------
// Chamada quando o formulário é enviado (clique no botão ou tecla Enter).
// ------------------------------------------------------------
function verificarResposta(evento) {
  evento.preventDefault(); // impede o recarregamento padrão da página

  const valorDigitado = Number(respostaInput.value);

  if (valorDigitado === respostaCorreta) {
    pontos += PONTOS_POR_ACERTO;
    pontosValueEl.textContent = pontos;

    if (pontos >= PONTOS_PARA_VENCER) {
      finalizarJogo(true);
    } else {
      gerarPergunta();
    }
  } else {
    perderVida('Resposta incorreta.');
  }
}

// ------------------------------------------------------------
// Reduz uma vida e decide se o jogo continua ou termina.
// Recebe o motivo (texto) só para possível uso futuro/depuração.
// ------------------------------------------------------------
function perderVida(motivo) {
  vidas -= 1;
  vidasValueEl.textContent = vidas;

  if (vidas <= 0) {
    finalizarJogo(false);
  } else {
    gerarPergunta();
  }
}

// ------------------------------------------------------------
// Encerra a partida e mostra a mensagem final.
// ------------------------------------------------------------
function finalizarJogo(venceu) {
  clearInterval(timerId);
  respostaInput.disabled = true;
  responderBtn.disabled = true;

  textoFinalEl.textContent = venceu
    ? `Você venceu! Pontuação final: ${pontos}.`
    : `Fim de jogo. Pontuação final: ${pontos}.`;

  mensagemFinal.classList.remove('escondido');
}

// ------------------------------------------------------------
// Prepara e inicia uma nova partida.
// ------------------------------------------------------------
function iniciarJogo() {
  pontos = 0;
  vidas = VIDAS_INICIAIS;
  pontosValueEl.textContent = pontos;
  vidasValueEl.textContent = vidas;

  respostaInput.disabled = false;
  responderBtn.disabled = false;

  telaInicial.classList.add('escondido');
  mensagemFinal.classList.add('escondido');

  gerarPergunta();
}

// ------------------------------------------------------------
// Eventos.
// ------------------------------------------------------------
iniciarBtn.addEventListener('click', iniciarJogo);
reiniciarBtn.addEventListener('click', iniciarJogo);
formResposta.addEventListener('submit', verificarResposta);
