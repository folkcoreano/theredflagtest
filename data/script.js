const resultado = document.querySelector("#total");
const veredito = document.querySelector("#ver");
const obs = document.querySelector("#obs");
const final = document.querySelector("#show");
const btn = document.querySelector("#btn");
const checkboxes = document.querySelectorAll("cb");
const check = document.querySelector("#check");
const item = document.querySelector(".container");
const head = document.querySelector("#head");
const foot = document.querySelector("#foot");
const butres = document.querySelector("#butres");
const butred = document.querySelector("#butred");
const ch = document.querySelector("#ch");
const ptl = document.querySelector("#pt");
const enl = document.querySelector("#en");

const ui = [
  {
    header:
      "Um teste nada sério que mede o quão questionável podem ser suas ações!",
    footer: `desenvolvido por <a href="https://twitter.com/folkcoreano">@folkcoreano</a> e baseado na infame lista de redflags de <a href="https://twitter.com/rafdaaa">@rafdaaa</a>.`,
    results: "mostrar resultado",
    redo: "refazer",
    unchecked: "Parabéns! Você não marcou nada.",
  },
  {
    header:
      "A not-so-serious test that measures how questionable your actions can be!",
    footer: `developed by <a href="https://twitter.com/folkcoreano">@folkcoreano</a> and based on <a href="https://twitter.com/rafdaaa">@rafdaaa</a>'s infamous redflag list.`,
    results: "show results",
    redo: "redo",
    unchecked: "Congratulations! You haven't checked anything.",
  },
];

const redflags = [
  {
    flag: "se identifica com o ryan gosling",
    valor: "0200",
    id: "rg",
  },
  {
    flag: "não gosta de gatos",
    valor: "0150",
    id: "",
  },
  {
    flag: "é fã de weezer",
    valor: "0300",
    id: "",
  },
  {
    flag: "é nice guy",
    valor: "0400",
    id: "",
  },
  {
    flag: "coleciona funko pop",
    valor: "0250",
    id: "",
  },
  {
    flag: "faz chart semanalmente no last.fm",
    valor: "0100",
    id: "",
  },
  {
    flag: "ageplayer",
    valor: "1000",
    id: "",
  },
  {
    flag: "é branco e usa dread",
    valor: "450",
    id: "",
  },
  {
    flag: "usa whatsapp gb",
    valor: "750",
    id: "",
  },
  {
    flag: "se identifica com o joker",
    valor: "250",
    id: "",
  },
  {
    flag: "não-negro que faz piada com n-word",
    valor: "700",
    id: "",
  },
  {
    flag: "loiro natural",
    valor: "250",
    id: "",
  },
  {
    flag: "incel/femcel",
    valor: "300",
    id: "",
  },
  {
    flag: "crypto bro",
    valor: "0500",
    id: "",
  },
  {
    flag: "começou a fumar coincidentemente após assistir cowboy bebop, euphoria ou skins",
    valor: "0100",
    id: "",
  },
  {
    flag: "não usa mais máscara",
    valor: "0500",
    id: "",
  },
  {
    flag: "se identifica com o bo burnham",
    valor: "0300",
    id: "",
  },
  {
    flag: "usa letterboxd",
    valor: "0200",
    id: "",
  },
  {
    flag: "faz elitismo acadêmico",
    valor: "0300",
    id: "",
  },
  {
    flag: "surta ao jogar/falar de lol",
    valor: "0500",
    id: "",
  },
  {
    flag: "não sabe temperar carne/acha que é só sobre sal e pimenta",
    valor: "0075",
    id: "",
  },
  {
    flag: "fã de sewerslvt",
    valor: "0500",
    id: "",
  },
  {
    flag: "branco com tatuagem tribal",
    valor: "0150",
    id: "",
  },
  {
    flag: "burguês",
    valor: "0250",
    id: "",
  },
  {
    flag: "mistura português com inglês",
    valor: "0200",
    id: "",
  },
  {
    flag: "fã de pewdiepie",
    valor: "0500",
    id: "",
  },
  {
    flag: "faz gatekeepin",
    valor: "0250",
    id: "",
  },
  {
    flag: "pega uber black",
    valor: "0200",
    id: "",
  },
  {
    flag: "tem uma lista de redflags",
    valor: "0100",
    id: "",
  },
  {
    flag: "acha que fã é dono da obra",
    valor: "0250",
    id: "",
  },
  {
    flag: "fã do tarantino",
    valor: "0500",
    id: "",
  },
  {
    flag: "se chama caio/joão/pedro/enzo",
    valor: "0050",
    id: "",
  },
  {
    flag: "gosta da hq de the boys",
    valor: "0500",
    id: "",
  },
  {
    flag: "AINDA usa myanimelist",
    valor: "0250",
    id: "",
  },
  {
    flag: "usa snapchat",
    valor: "0500",
    id: "",
  },
  {
    flag: "sem confirmação de leitura no whatsapp",
    valor: "0200",
    id: "",
  },
  {
    flag: "acha o superman chato",
    valor: "0100",
    id: "",
  },
  {
    flag: "diz que vai votar nulo neste ano",
    valor: "0350",
    id: "",
  },
  {
    flag: "é católico apostólico romano",
    valor: "0500",
    id: "",
  },
  {
    flag: "defende ceo",
    valor: "0700",
    id: "",
  },
  {
    flag: "é fã do luba",
    valor: "0250",
    id: "",
  },
  {
    flag: "defende o griffth ironicamente",
    valor: "0500",
    id: "",
  },
  {
    flag: "tem como anime favorito um hentai",
    valor: "0300",
    id: "",
  },
  {
    flag: "viu a versão extendida de senhor dos aneis",
    valor: "0150",
    id: "",
  },
  {
    flag: "faz kinkshaming",
    valor: "0100",
    id: "",
  },
  {
    flag: "não gosta de grant morrison",
    valor: "0400",
    id: "",
  },
  {
    flag: "harry styles",
    valor: "0600",
    id: "",
  },
  {
    flag: "brinca que seu parceiro romântico é seu pai/mãe",
    valor: "0500",
    id: "",
  },
  {
    flag: "não gosta de sapos",
    valor: "0400",
    id: "",
  },
  {
    flag: "tem como marido qualquer boneco de snk",
    valor: "0250",
    id: "",
  },
  {
    flag: "fala poggers não ironicamente",
    valor: "0100",
    id: "",
  },
  {
    flag: "fã de one piece",
    valor: "0300",
    id: "",
  },
  {
    flag: "romantiza serial killer",
    valor: "0750",
    id: "",
  },
  {
    flag: "não gosta de cachorro",
    valor: "0150",
    id: "",
  },
  {
    flag: "ancap",
    valor: "0400",
    id: "",
  },
  {
    flag: "faz referência pra jojo/evangelion constantemente",
    valor: "0150",
    id: "",
  },
  {
    flag: "é contra modo fácil em videojogos",
    valor: "0300",
    id: "",
  },
  {
    flag: "tem olho claro",
    valor: "0150",
    id: "",
  },
  {
    flag: "interrompe pessoas constantemente",
    valor: "0300",
    id: "",
  },
  {
    flag: "zoa pisskink mas bebe cerveja",
    valor: "0250",
    id: "",
  },
  {
    flag: "é invejosa",
    valor: "0200",
    id: "",
  },
  {
    flag: "se auto declara potterhead",
    valor: "0800",
    id: "",
  },
  {
    flag: "ruivo natural fiscal de ruivo",
    valor: "0300",
    id: "",
  },
  {
    flag: "sabe desenhar",
    valor: "0300",
    id: "",
  },
  {
    flag: "gosta de sertanejo universitário",
    valor: "0100",
    id: "",
  },
  {
    flag: "litrão boleto coxinha",
    valor: "0100",
    id: "",
  },
  {
    flag: "sabe desenhar nsfw",
    valor: "0250",
    id: "",
  },
  {
    flag: "pula música ouvindo albúm",
    valor: "0250",
    id: "",
  },
  {
    flag: "usa muito meme de american psycho",
    valor: "0200",
    id: "",
  },
  {
    flag: "é fã maluco do zack snyder",
    valor: "0500",
    id: "",
  },
  {
    flag: "usa normie como insulto",
    valor: "0300",
    id: "",
  },
  {
    flag: "usa facebook",
    valor: "0500",
    id: "fb",
  },
  {
    flag: "chama toda ex de maluca",
    valor: "0700",
    id: "",
  },
  {
    flag: "defende o griffth NÃO ironicamente",
    valor: "1000",
    id: "",
  },
];

function show() {
  final.style.display = "block";
  btn.style.display = "none";
}

total = 0;

function UC(elem) {
  if (elem.checked == true) {
    total += Number(elem.value);
  } else {
    total -= Number(elem.value);
  }

  const allbox = document.querySelectorAll('input[type="checkbox"]');
  const chebox = document.querySelectorAll('input[type="checkbox"]:checked');

  const face = document.querySelector("#fb");

  face.checked
    ? (obs.textContent = "nunca viu um peitinho, né?")
    : (obs.textContent = "");

  check.textContent = `Você marcou ${chebox.length} de ${allbox.length} items da lista.`;

  total == 0 ? (ch.textContent = ui[0].unchecked) : (ch.textContent = "");

  resultado.textContent = `${total.toFixed(0)} pontos.`;

  elem.checked ? "" : (veredito.textContent = "");

  total > 1 && total < 500
    ? (veredito.textContent = "Você é apenas meio bobo.")
    : "";

  total >= 501 && total <= 1000
    ? (veredito.textContent = "Não se preocupe, poderia ser pior!")
    : "";

  total >= 1001 && total <= 2000
    ? (veredito.textContent = "Dá pra resolver, ainda há tempo.")
    : "";

  total >= 2001 && total <= 3000
    ? (veredito.textContent = "Não é tão ruim assim, vai.")
    : "";

  total >= 3001 && total <= 4000
    ? (veredito.textContent = "Preocupante mas nem tanto!")
    : "";

  total >= 4001 && total <= 5000
    ? (veredito.textContent = "Tem que ver isso aí, hein...")
    : "";

  total >= 5001 && total <= 6000
    ? (veredito.textContent = "Quase uma ameaça.")
    : "";

  total >= 6001 && total <= 7000
    ? (veredito.textContent = "Tu é meio esquisito...")
    : "";

  total >= 7001 && total <= 8000
    ? (veredito.textContent = "Já pode ir tomando vergonha na cara.")
    : "";

  total >= 8001 && total <= 9000
    ? (veredito.textContent = "Não dá pra te defender.")
    : "";

  total >= 9001 && total <= 10000
    ? (veredito.textContent = "cê acha isso bonito? te orienta")
    : "";

  total >= 10001 && total <= 11000
    ? (veredito.textContent = "ce fei zé se endireita")
    : "";

  total >= 11001 && total <= 15000
    ? (veredito.textContent = "Procure um advogado.")
    : "";

  total >= 15001
    ? (veredito.textContent = "Talvez você precise de um grupo de advogados.")
    : "";
}
x = 0;

head.textContent = ui[x].header;

ch.textContent = ui[x].unchecked;

foot.innerHTML = ui[x].footer;

function get(elem) {
  ptl.checked ? (x = 0) : "";

  enl.checked ? (x = 1) : "";

  head.textContent = ui[x].header;
  foot.innerHTML = ui[x].footer;
  butres.textContent = ui[x].results;
  butred.textContent = ui[x].redo;
  ch.textContent = ui[x].unchecked;
}
for (i = 0; i < redflags.length; i++) {
  item.innerHTML += `<label><input class="cb select" type="checkbox" id="${redflags[i].id}" value="${redflags[i].valor}" onclick="UC(this)">${redflags[i].flag}</label><br />`;
}
