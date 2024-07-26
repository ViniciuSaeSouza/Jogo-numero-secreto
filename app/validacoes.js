// Define uma variável para manter a gravação de microfone aberta até que o número seja acertado
let acertou = false;

function verificaSeOChutePossuiUmValorValido(chute) {
  if (chute == "game over") {
    document.body.innerHTML = `
            <h1>GAME OVER</h1>
            <h2>Tentar novamente?</h2>
            <button id="jogar-novamente" class='btn-jogar-novamente btn-gameover'>Jogar novamente</button>
        `;
    document.body.style.backgroundColor = "red";
  }

  // Faz o casting da string 'chute' para inteiro
  const numero = parseInt(chute);

  // Se a função chute for inválido retornar true, mostra a mensagem de erro e para a função
  if (chuteForInvalido(numero)) {
    if (chute == "game over") {
      document.body.innerHTML = `
            <h1>GAME OVER</h1>
            <h2>Tentar novamente?</h2>
            <button id="jogar-novamente" class='btn-jogar-novamente btn-gameover'>Jogar novamente</button>
        `;
      document.body.style.backgroundColor = "red";
    } else {
      elementoChute.innerHTML += "<div>Valor inválido.</div>";
    }
    return;
  }

  // Se a função chuteForaDoEscopo retornar true, mostra a mensagem de erro e para a essa função
  if (chuteForaDoEscopo(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  // Verifica se o número chutado é igual ao número secreto
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
            <h2 id="chute-dica">Parabéns! Você acertou o número secreto <i class="fa-solid fa-check-double"></i></h2>
            <h3>O número sorteado era: ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar-novamente">Jogar novamente</button>
        `;
    acertou = true;
  }
  // Verifica se o número chutado é menor que o número secreto
  if (numero < numeroSecreto) {
    elementoChute.innerHTML += `<div id="chute-dica">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
  }
  // Verifica se o número chutado é maior que o número secreto
  if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div id="chute-dica">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
  }
}

// Verifica se o chute não é um número, se não for número retorna 'true'
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

// Verifica se o número chutado está fora do escopo do menor e maior valor definido em 'sortearNumero.js' e retorna 'true' se estiver fora
function chuteForaDoEscopo(numero) {
  return numero < menorValor || numero > maiorValor;
}

// Escuta o click no botão jogar novamente e da reload na página quando acontece o evento(e)
document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
