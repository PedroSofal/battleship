export default class BattleQuotes {
  static ourMiss = {
    yamato: [
      "Falhamos em nossos cálculos. Recalculem, imediatamente!",
      "Você não pode se esconder para sempre, #ENEMY.",
      "A paciência é uma virtude inestimável.",
    ],
    olafsson: [
      "Não ouvi nenhuma explosão...",
      "Não adianta fugir, #ENEMY.",
      "Estamos indo atrás de vocês!", // "We're coming for you!",
    ],
    violeta: [
      "Sem sorte desta vez. Recalibrando a mira.",
      "Como podem ter escapado?",
      "Não estamos fazendo muito progresso por aqui.",
    ],
    rackham: [
      "Isso foi só um tiro de advertência.",
      "Deve ter sido o vento...",
      "Não se esconda, #ENEMY!",
    ],
    nimitz: [
      "Os dados do radar não captaram nada desta vez.",
      "Nossa mira precisa de alguns ajustes.",
      "Nenhum retorno...",
    ],
    noronha: [
      "O alvo permanece acima da linha do horizonte.",
      "Nada...",
      "Não estamos conseguindo localizar o inimigo, precisamos de um novo plano de ataque.",
    ]
  }

  static ourHit = {
    yamato: [
      "Direto no alvo! Fiquem atentos a um possível contra-ataque!",
      "Navio inimigo na mira. Jamais duvide de nossa capacidade, #ENEMY.",
      "Não os deixem escapar!",
    ],
    olafsson: [
      "#ENEMY, sua única saída é a rendição. Não daremos trégua!",
      "BOOM! Hahaha!",
      "Sinta a fúria de nossos canhões!",
    ],
    violeta: [
      "Navio inimigo atingido! Estamos no caminho certo.",
      "Isso! As forças de #ENEMY está procurando o que os atingiu até agora.",
      "Eles estão recuando!",
    ],
    rackham: [
      "Na mosca! Pensei que este fosse dar mais trabalho.",
      "Bom trabalho, rapazes. Hoje a cerveja será por minha conta!",
      "Haha! Nós governamos estes mares, #ENEMY!",
    ],
    nimitz: [
      "Alvo atingido! Excelente trabalho, artilharia!",
      "Acerto confirmado. Reportando posição do inimigo.",
      "Pegamos eles!",
    ],
    noronha: [
      "Eles estão nas cordas!",
      "Pegamos uma embarcação deles! Essa não vai muito longe.",
      "Não há como escapar, #ENEMY!",
    ]
  }

  static ourSink = {
    yamato: [
      "#SHIP inimigo destruído!", // "Enemy #SHIP destroyed!",
      "Não tem como nos deter!", // "There's no stopping us!",
    ],
    olafsson: [
      "Lá vão eles para as profundezas!", // "They're going down!",
      "Que a alma dos que caíram em batalha descanse em paz.",
    ],
    violeta: [
      "A nossa chance é agora, vamos, vamos!",
      "Destruição do #SHIP inimigo confirmada!",
    ],
    rackham: [
      "Este é apenas o começo, #ENEMY!",
      "O #SHIP inimigo está flutuando igual a um tijolo!",
    ],
    nimitz: [
      "O naufrágio do #SHIP do inimigo foi um duro golpe em sua linha defensiva. Continuem avançando!", // "The sinking of the enemy's #SHIP was I major blow in their defense line. Keep pushing!"
      "Estamos ganhando espaço no campo do inimigo!",
    ],
    noronha: [
      "Afundamos o #SHIP deles, nossa vitória está cada vez mais próxima!",
      "Nós vamos até o fim!",
    ]
  }

  static theirMiss = {
    yamato: [
      "Estamos ganhando tempo.",
      "Nossa linha de defesa é um escudo impenetrável!",
      "Mais um projétil inimigo que rasga os céus sem direção.",
    ],
    olafsson: [
      "Muito bom! Continuem desperdiçando munição.",
      "Hoje não!",
      "Eles atiram como cegos! Continuem desafiando-os!",
    ],
    violeta: [
      "Continuem nas sombras, o inimigo não consegue nos ver!",
      "Esta era a brecha que precisamos. Avançem com força total!",
      "Desista, #ENEMY!",
    ],
    rackham: [
      "Hahaha! Continue tentando, #ENEMY!",
      "Splash!",
      "Os peixes estão sofrendo nas mãos do inimigo.",
    ],
    nimitz: [
      "Nossas coordenadas ainda não foram rastreadas pelo inimigo. Mas mantenham os olhos abertos, isso pode mudar em breve.",
      "Nossas táticas estão confundindo-os. Bom trabalho!",
      "Um tiro no escuro. Enquanto as forças de #ENEMY continuarem assim, estaremos seguros.",
    ],
    noronha: [
      "Cuidado com os flancos!",
      "Eles nos perderam de vista.",
      "Evasiva bem-sucedida! Não baixem a guarda, eles voltarão!",
    ]
  }

  static theirHit = {
    yamato: [
      "Código vermelho! Hora de contra-atacar com toda a nossa honra!",
      "Continuem lutando, homens, nossos navios aguentam muito mais que isso!",
      "Nosso casco sofreu danos! Reparem imediatamente!",
    ],
    olafsson: [
      "#ENEMY, prepare-se para testemunhar a fúria dos mares!",
      "A união é nossa armadura. Mantenham a posição, guerreiros!",
      "O céu escurece sobre nós. Mas os deuses estão conosco.",
    ],
    violeta: [
      "Acabamos de sofrer danos consideráveis em um de nossos navios. Preparar equipe de resgate!",
      "Vocês não estão sozinhos, marinheiros! Direcionando reforços agora!",
      "Esses danos não são nada para uma tripulação como a nossa! Continuem firmes!",
    ],
    rackham: [
      "Homem ao mar! Homem ao mar!",
      "Você nunca nos pegará vivos, #ENEMY!",
      "Manobra evasiva! Preparem-se para o próximo impacto!",
    ],
    nimitz: [
      "Atenção todas as unidades, estamos sob fogo inimigo. Solicitando apoio imediato!",
      "Fomos acoplados!",
      "Danos reportados no convés! Médicos, estejam prontos para tratar os feridos!",
    ],
    noronha: [
      "Estamos sofrendo grandes avarias em uma de nossas embarcações, precisamos de reforços!",
      "Aguentem firme, marinheiros, estamos deslocando reforços para a sua posição!",
      "Você cometeu um grande erro, #ENEMY.",
    ]
  }

  static theirSink = {
    yamato: [
      "Ainda há esperanças!",
      "Um sacrifício doloroso, mas nossa determinação não se abala!",
    ],
    olafsson: [
      "Nunca nos curvaremos!", // "We will never kneel!",
      "Preparem-se para vingar nossos homens caídos!",
    ],
    violeta: [
      "Não! Não o nosso #SHIP!",
      "Somos mais fortes do que pensa, #ENEMY.",
    ],
    rackham: [
      "Se este é o nosso destino, cairemos de pé.",
      "Não se preocupem, marujos, o resgate chegará a tempo!",
    ],
    nimitz: [
      "Abandonar navio! Abandonar navio!",
      "O #SHIP está afundando, enviem a equipe de resgate!"
    ],
    noronha: [
      "Nosso povo não conhece a palavra desistência. Esta batalha será nossa!",
      "Não baixem a guarda, pessoal! Matenham a calma e sigam com o plano.",
    ]
  }
}