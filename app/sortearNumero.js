// Define os valores iniciais do menor e o maior valor
const menorValor = 1;
const maiorValor = 100;

// Seleciona os elementos HTML
const menorValorHtml = document.getElementById("menor-valor");
const maiorValorHtml = document.getElementById("maior-valor");

// Atribui os valores do menor e maior valor para os elementos HTML
menorValorHtml.innerHTML = menorValor;
maiorValorHtml.innerHTML = maiorValor;

// Define o número secreto
// const numeroSecreto = 5;
const numeroSecreto = gerarNumeroAleatorio();

// Função para gerar o númeo aleatório
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);
