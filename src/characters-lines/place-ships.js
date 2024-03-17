export default class PlaceShipLines {
  static ship = null;

  static preparation = {
    yamato: [
      "Em uma guerra, cada movimento deve ser executado com precisão. Lutaremos com honra e lealdade à nossa terra, se necessário, até o último suspiro, mas faremos justiça!",
    ],
    olafsson: [
      "Não há tempestade de ferro, nem ondas de fogo, que nos impeça de retornar às nossas famílias hoje! A história será escrita com sangue e coragem. Pela honra e pela glória!",
    ],
    violeta: [
      "Marinheiros, preparem-se para deslizar pelas sombras das ondas. A furtividade e a agilidade serão nossas maiores armas. Amanhã iremos atacar sem aviso!",
    ],
    rackham: [
      "É hora de seguir o mapa rumo à liberdade. Contemplem a imensidão do horizonte, marujos, pois amanhã seremos os senhores dos mares!",
    ],
    nimitz: [
      "Soldados, preparem-se para posicionar nossas embarcações no teatro de operações. A vitória somente será conquistada com estratégia, disciplina e fé. Às armas!",
    ],
    noronha: [
      "Senhores, o inimigo nos espera. Lembrem-se do nosso plano de ação estejam fortes mentalmente. As próximas horas serão de luta, mas os próximos dias serão de glória!",
    ]
  }

  static placing = {
    yamato: [
      "Este #SHIP reforçará nossa posição, mantendo o equilíbrio da batalha.",
      "Este #SHIP cortará as esperanças do inimigo como uma lâmina afiada.",
    ],
    olafsson: [
      "Com este #SHIP, faremos tremer as águas e imporemos respeito.",
      "Nossas embarcações esmagarão o inimigo e nos devolverá a glória",
      "O rugido do mar ecoa em meu peito como um trovão. Cada onda é um convite para a glória, e cada navio é uma extensão da bravura do nosso povo.",
    ],
    violeta: [
      "Este #SHIP será nossa arma secreta.",
      "Posicionado estrategicamente, este #SHIP nos permitirá surpreender e desmantelar as forças inimigas.",
    ],
    rackham: [
      "Este #SHIP será a chave para a conquista destas águas.",
    ],
    nimitz: [
      "Este #SHIP aqui ajudará a fortalecerá nossa linha de defesa estratégica.",
      "Com este #SHIP, anularemos as investidas inimigas e garantiremos a supremacia naval de nossa nação.",
    ],
    noronha: [
      "Este #SHIP será a chave para nossa tática de combate.",
      "A criatividade sempre foi o nosso forte. O inimigo nunca esperaria encontrar nosso #SHIP aqui.",
    ]
  }

  static reset = {
    yamato: [
      "Reset Yamato",
    ],
    olafsson: [
      "Reset Olafsson",
    ],
    violeta: [
      "Reset Violeta",
    ],
    rackham: [
      "Reset Rackham",
    ],
    nimitz: [
      "Reset Nimitz",
    ],
    noronha: [
      "Reset Noronha",
    ]
  }

  static randomLine(lineArray) {
    return lineArray[Math.floor(Math.random() * lineArray.length)];
  }

  static getPreparationLine(char) {
    const lineArray = PlaceShipLines.preparation[char];
    return PlaceShipLines.randomLine(lineArray);
  }

  static getPlacingLine(char, ship) {
    PlaceShipLines.ship = ship;
    const lineArray = PlaceShipLines.placing[char];
    return PlaceShipLines.randomLine(lineArray).replace('#SHIP', ship);
  }

  static getResetLine(char) {
    const lineArray = PlaceShipLines.reset[char];
    return PlaceShipLines.randomLine(lineArray);
  }
}