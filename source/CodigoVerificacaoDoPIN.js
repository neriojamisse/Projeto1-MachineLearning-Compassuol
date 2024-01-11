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
  const resultElement = document.getElementById('result');
  
  if (supostoPin === pinPorAdivinhar.toString()) {
    resultElement.textContent = "Parabéns! Você acertou!";
  } else {
    const diff = pinPorAdivinhar - parseInt(supostoPin);
    if (diff > 1000) {
      resultElement.textContent = "Muito menor! Tente um número muito maior.";
    } else if (diff > 0) {
      resultElement.textContent = "Menor! Tente um número maior.";
    } else if (diff < -1000) {
      resultElement.textContent = "Muito maior! Tente um número muito menor.";
    } else {
      resultElement.textContent = "Maior! Tente um número menor.";
    }
  }
}

function verificar() {
  const supostoPin = document.getElementById('pinInput').value;
  verificarPin(supostoPin, pinPorAdivinhar);
}
