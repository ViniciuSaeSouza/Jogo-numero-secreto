//Verifica se o navegador tem suporte ao SpeechRecognition, se não tiver, tentar ver se o navegador reconhece o webkitSpeechRecognition
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Instancia um novo objeto do SpeechRecognition
const recognition = new SpeechRecognition();

// Pega a div inteira do html chamada 'chute'
let elementoChute = document.getElementById("chute");

// Define qual o padrão de linguagem a ser interpretada pelo SpeechRecognition
recognition.lang = "pt-Br";

// Inicia a gravação para receber uma mensagem de voz dita pelo usuário
recognition.start();

// Pega o evento 'result' do recognition e chama a função onSpeak
recognition.addEventListener("result", onSpeak);

// Pega o evento result do recognition e filtra para pegar apenas a transcrição da voz
function onSpeak(e) {
  chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiUmValorValido(chute);
  console.log("Chute:", chute);
}

// Exibte o chute na tela
function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}

// Quando o recognition parar a gravação, verifica se 'acertou = true', se não for, faz a gravação do recognition começar novamente
recognition.addEventListener("end", () => {
  if (!acertou) {
    recognition.start();
  }
});
