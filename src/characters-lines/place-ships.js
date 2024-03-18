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
      "O #SHIP reforçará nossa posição defensiva, mantendo o equilíbrio da batalha.",
      "Cortaremos as esperanças do inimigo como uma lâmina afiada.",
      "Tripulação do #SHIP, lembrem-se do nosso código de conduta e honrem a nossa pátria.",
      "No silêncio antes da tempestade, encontro a calma interior e vejo com clareza as fraquezas do inimigo.",
    ],
    olafsson: [
      "Com este #SHIP, faremos tremer as águas e imporemos respeito.",
      "Nossas embarcações esmagarão o inimigo e nos devolverá a glória",
      "O rugido do mar ecoa como um trovão. Cada onda é um convite para a glória, e cada navio é uma extensão da bravura do nosso povo.",
      "O #SHIP será como uma tempestade intransponível em alto mar.",
    ],
    violeta: [
      "O #SHIP será nossa arma secreta.",
      "Com a estratégia ofensiva adequada, este #SHIP nos permitirá surpreender e desmantelar as forças inimigas rapidamente.",
      "Sorrateiro como uma serpente, letal como um tubarão.",
      "Emergiremos das sombras das ondas para mandá-los às profundezas do oceano.",
    ],
    rackham: [
      "O #SHIP será a chave para a conquista destas águas.",
      "Bons ventos e mares tranquilos, marujos.",
      "Homens do #SHIP, será uma honra lutar ao seu lado.",
      "Levantem as bandeiras, #SHIP!",
    ],
    nimitz: [
      "Estou enviando o #SHIP para reforçar nossa frente de ataque.",
      "Com este #SHIP, anularemos as investidas inimigas e garantiremos a supremacia naval de nossa nação.",
      "Todos apostos no convés!",
      "#SHIP, prossiga 3 milhas náuticas a leste para sua posição de combate.",
    ],
    noronha: [
      "Este #SHIP será a chave para nossa tática de combate.",
      "A criatividade sempre foi o nosso forte. Nosso #SHIP vindo desta posição será um grande elemento surpresa.",
      "Somos resistentes como um #SHIP, capazes de superar qualquer obstáculo.",
      "#O SHIP defenderá o perímetro.",
    ]
  }

  static reset = {
    yamato: [
      "A busca pela mais precisa solução tática nosa leva aprimorar nossos planos.",
    ],
    olafsson: [
      "As mudanças das marés demandam adaptações em nossas táticas.",
    ],
    violeta: [
      "Nada como a arte da ludibriação. O inimigo pensa que não tínhamos ciência de suas espionagens. Traçaremos o real plano de ação agora.",
    ],
    rackham: [
      "Ótimo, alguém derramou bebida no mapa e agora precisaremos elaborar o plano novamente. Favor enviarem a equipe de limpeza para cá.",
    ],
    nimitz: [
      "Marinheiros, nosso planejamento sofrerá modificações.",
    ],
    noronha: [
      "As novas condições climáticas demandam quer o plano B seja colocado em ação.",
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