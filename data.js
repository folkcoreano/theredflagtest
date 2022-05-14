const ui = [
  {
    header:
      "Um teste nada sério que mede o quão questionável podem ser suas ações!",
    footer: `<div class="box-a" id="pe">
      desenvolvido por
      <a href="https://twitter.com/folkcoreano">@folkcoreano</a> e baseado na
      infame lista de redflags de
      <a href="https://twitter.com/rafdaaa">@rafdaaa</a>.
    </div>`,
    results: "mostrar resultado",
    redo: "refazer",
  },
  {
    header:
      "¡Una prueba no tan seria que mide qué tan cuestionables pueden ser tus acciones!",
    footer: "",
    results: "mostrar resultado",
    redo: "rehacer",
  },
  {
    header:
      "A not-so-serious test that measures how questionable your actions can be!",
    footer: "",
    results: "show results",
    redo: "redo",
  },
];

const redflags = [
  {
    flag: "se identifica com o ryan gosling",
    flag_en: "identifies with ryan gosling",
    valor: "0200",
    id: "rg",
  },
  {
    flag: "não gosta de gatos",
    flag_en: "doesn't like cats",
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
