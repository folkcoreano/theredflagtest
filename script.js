const resultado = document.querySelector("#total");
const veredito = document.querySelector("#ver");
const obs = document.querySelector("#obs");
const final = document.querySelector("#show");
const face = document.querySelector("#fb");
const btn = document.querySelector("#btn");
const checkboxes = document.querySelectorAll("cb");
const check = document.querySelector("#check");

function show() {
  final.style.display = "block";
  btn.style.display = "none";
}

var total = 0;

function UC(elem) {
  if (elem.checked == true) {
    total += Number(elem.value);
  } else {
    total -= Number(elem.value);
  }

  const allbox = document.querySelectorAll('input[type="checkbox"]');

  const chebox = document.querySelectorAll('input[type="checkbox"]:checked');

  check.textContent = `Você marcou ${chebox.length} de ${allbox.length} items da lista.`;

  resultado.textContent = `${total.toFixed(0)} pontos.`;

  if (elem.checked == false) {
    veredito.textContent = "";
  }

  if (total < 0) {
    resultado.textContent = 0;
  }

  if (face.checked == true) {
    obs.textContent = `also, no bitches?`;
  } else {
    obs.textContent = "";
  }

  if (total >= 1 && total <= 500) {
    veredito.textContent = "Você é apenas meio bobo.";
  }

  if (total >= 501 && total <= 1000) {
    veredito.textContent = "Não se preocupe, poderia ser pior!";
  }

  if (total >= 1001 && total <= 2000) {
    veredito.textContent = "Dá pra resolver, ainda há tempo.";
  }

  if (total >= 2001 && total <= 3000) {
    veredito.textContent = "Não é tão ruim assim, vai.";
  }

  if (total >= 3001 && total <= 4000) {
    veredito.textContent = "Preocupante mas nem tanto!";
  }

  if (total >= 4001 && total <= 5000) {
    veredito.textContent = "Tem que ver isso aí, hein...";
  }

  if (total >= 5001 && total <= 6000) {
    veredito.textContent = "Quase uma ameaça.";
  }

  if (total >= 6001 && total <= 7000) {
    veredito.textContent = "Tu é meio esquisito...";
  }

  if (total >= 7001 && total <= 8000) {
    veredito.textContent = "Já pode ir tomando vergonha na cara.";
  }

  if (total >= 8001 && total <= 9000) {
    veredito.textContent = "Não dá pra te defender.";
  }

  if (total >= 9001 && total <= 10000) {
    veredito.textContent = "cê acha isso bonito? te orienta";
  }

  if (total >= 10001 && total <= 11000) {
    veredito.textContent = "ce fei zé se endireita";
  }

  if (total >= 11001 && total <= 15000) {
    veredito.textContent = "Procure um advogado.";
  }

  if (total >= 15001) {
    veredito.textContent = "Talvez você precise de um grupo de advogados.";
  }
}

resultado.textContent = "Parabéns! Você não marcou nada.";
