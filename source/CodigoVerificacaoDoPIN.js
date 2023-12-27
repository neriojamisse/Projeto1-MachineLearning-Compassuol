// CodigoVerificacaoDoPIN.js
const pinPorAdivinhar = gerarPinAleatorio();

function gerarPinAleatorio() {
  return Math.floor(1000 + Math.random() * 9000);
}

function receberSupostoPin() {
  let supostoPin;
  
  do {
    supostoPin = prompt("Digite um PIN de 4 dígitos: ");
    if (isNaN(supostoPin) || supostoPin < 0) {
      alert("Por favor, insira um número positivo.");
    }
  } while (isNaN(supostoPin) || supostoPin < 0);

  return supostoPin;
}

function verificarPin(supostoPin, pinPorAdivinhar) {
  if (supostoPin === pinPorAdivinhar.toString()) {
    return "Parabéns! Você acertou!";
  } else {
    const diff = pinPorAdivinhar - parseInt(supostoPin);
    if (diff > 1000) {
      return "Muito menor! Tente um número muito maior.";
    } else if (diff > 0) {
      return "Menor! Tente um número maior.";
    } else if (diff < -1000) {
      return "Muito maior! Tente um número muito menor.";
    } else {
      return "Maior! Tente um número menor.";
    }
  }
}
