const resultado = document.querySelector("#total");
const veredito = document.querySelector("#ver");
const final = document.querySelector("#show");

var total = 0;

function UC(elem) {
  if (elem.checked == true) {
    total += Number(elem.value);
  } else {
    total -= Number(elem.value);
  }

  resultado.textContent = total.toFixed(0);

  if (elem.checked == false) {
    veredito.textContent = "";
  }

  if (total < 0) {
    resultado.textContent = 0;
  }

  if (total >= 1 && total <= 500) {
    veredito.textContent = "Você é apenas meio bobo.";
  }

  if (total >= 501 && total <= 2000) {
    veredito.textContent = "Tem que ver isso aí, hein...";
  }

  if (total >= 2001 && total <= 5000) {
    veredito.textContent = "Tu é meio esquisito...";
  }

  if (total >= 5001 && total <= 8000) {
    veredito.textContent = "Quase uma ameaça.";
  }

  if (total >= 8001 && total <= 10000) {
    veredito.textContent = "ce fei zé se endireita";
  }

  if (total >= 10001 && total <= 15000) {
    veredito.textContent = "ninguém é tão desgraçado assim";
  }

  if (total >= 15001) {
    veredito.textContent = "vai se foder toma no cu porra desgraça";
  }
}

resultado.textContent = total;

function sh() {
  final.style.opacity = 1;
}
