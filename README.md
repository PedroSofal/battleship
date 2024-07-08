# Battleship

Battleship é um projeto pessoal para portfólio que consiste no jogo de Batalha Naval que roda no navegador.

Este projeto foi inspirado pelo último exercício do curso de Javascript do [The Odin Project](https://www.theodinproject.com/).

Entretanto, em vez de simplesmente construir a funcionalidade básica de um batalha naval, investi tempo em criar uma experiência de jogabilidade mais imersiva, ao adicionar menus, personagens, níveis de dificuldade, telas de carregamento, entre outros recursos existentes em jogos reais.

Para este desafio resolvi limitar-me a usar apenas as 3 linguagens básicas - HTML, CSS e Javascript - para realmente sedimentar os fundamentos do desenvolvimento web. Portanto, nenhuma biblioteca ou framework foram utilizados, com exceção do Jest para montagem dos primeiros testes, como parte dos requisitos do curso The Odin Project.

Também, propositalmente, desenvolvi o jogo utilizando múltiplos arquivos HTML para representar cada tela do jogo, para explorar esta funcionalidade do Webpack e implementar um sistema de route-guard simples.

Este é meu primeiro projeto deste porte, tendo sido fonte de um enorme aprendizado, principalmente em relação à organização do código. Dei meu máximo para construir um ambiente de código legível e escalável, tentei implementar a convenção BEM para CSS, mas definitivamente é algo que pode melhorar no futuro.

No entanto, sem dúvida, meu maior desafio foi tornar o jogo responsivo, pois ao se tratar de um game em tela cheia, precisei trabalhar a responsividade nos dois eixos, utilizando unidades de medidas mais obscuras como vmin, vmax, cqmin, cqh, cqw, etc. Com o tempo, pretendo ir refinando esta funcionalidade do jogo.

No geral, ainda há muito espaço para melhora do código, mas estou feliz com o resultado até aqui, até porque o objetivo inicial com este projeto foi muito superado.

Espero que você se divirta jogando, o mesmo tanto que eu me diverti desenvolvendo este projeto! Muito obrigado.

## Recursos do Jogo

- Modo de jogo Jogador vs Computador;
- 3 níveis de dificuldade;
- 6 personagens com personalidades diferentes para você escolher;
- 2 idiomas: português e inglês;
- 2 modos de velocidade da partida;
- Controles de volume de áudio separados para músicas e efeitos sonoros;
- Interface responsiva a mudanças na largura e altura da tela.

## Tecnologias Utilizadas

- Linguagens: HTML, CSS e Javascript
- Gerenciador de pacotes: NPM
- Empacotador de módulo: Webpack
- Controle de versão: Git
- Transcompilador: Babel
- Framework: Jest

## Jogar Online

Você pode jogar a versão online do jogo [aqui](https://pedrosofal.github.io/battleship).

## Instalação Local

Se preferir, você também pode rodar o jogo localmente:

1. Clone este repositório:
    ```bash
    git clone https://github.com/PedroSofal/battleship.git
    ```
2. Navegue até o seguinte diretório:
    ```bash
    cd battleship/dist
    ```
3. Abra o arquivo `index.html` no seu navegador.

## Como Jogar

1. Se esta é sua primeira sessão, clique em Novo Jogo;
2. Na seleção de personagem, escolha seu combatente e, em seguida, seu adversário;
3. Na Sala de Estratégia, arraste seus navios para o tabuleiros para posicioná-los sem que um fique adjacente ou sobreposto ao outro. Ao flutuar um navio sobre o tabuleiro, o mesmo mostrará uma prévia da posição em cor verde, caso esteja livre, ou vermelha, caso seja um local inválido;
4. Na tela de batalha, você é o primeiro a jogar. Clique em uma célula do tabuleiro de ataque para abrir fogo contra o inimigo;
5. O jogo funciona através de rodadas alternadas. Uma animação ao redor dos tabuleiros indicará de quem é a vez na rodada;
6. Vence o jogo quem afundar todos os navios do adversário primeiro.

### Radar de Defesa

- Caso o computador lance um ataque certeiro ou muito próximo a um navio do jogador, o radar de defesa poderá entrar em ação, emitindo um efeito sonoro para indicar o lançamento de contramedidas.
- Sempre que o computador realizar um primeiro acerto em qualquer navio do jogador, um alarme intermitente soará para sinalizar que o navio foi acoplado pelo radar inimigo. Isso indica que o computador tentará afundar a referida embarcação nos próximos ataques. O alarme somente será desligado quando o navio for afundado pelo computador, ou o jogo terminar.
- As contramedidas mencionadas acima não tem qualquer impacto na jogabilidade até o momento, servindo apenas como auxílio audiovisual e imersivo.

## Créditos

### Músicas

- "Epic" por Benjamin Tissot em [Bensound](https://bensound.com/royalty-free-music/track/epic) - License code: QHDT06OS0LWAJJHV
- "Fearsome Tipsy Pirates" por SigmaMusicArt em [Pixabay](https://pixabay.com/)
- "Battle Ship - Short Version 1" por Hot_Dope em [Pixabay](https://pixabay.com/)
- "No Time to Die" por Hartzmann em [Uppbeat](https://uppbeat.io/t/hartzmann/no-time-to-die) - License code: BYW5PN5THAT2W3K6
- "Corsairs" por Studio Kolmna em [Uppbeat](https://uppbeat.io/t/studiokolomna/corsairs) - License code: ZZBUKXUHLTIW6KAC
- "Dance of Devils" por Giulio Fazio em [Uppbeat](https://uppbeat.io/t/giulio-fazio/dance-of-devils) - License code: YER0VLVCNJWDONGK

### Efeitos Sonoros

- "hit1", "hit2", "miss1", "miss2", "miss3" por Iwan Gabovitch em [Open Game Art](https://opengameart.org/users/qubodup)
- "hit3", "sink1", "sink2", "last-sink" por Thimras em [Open Game Art](https://opengameart.org/users/thimras)

### Gráficos

- Explosão por Tião Ferreira em [Open Game Art](https://opengameart.org/users/tiao-ferreira)

## Contribuição

Este projeto é para fins de portfólio e não aceita contribuições externas.

## Licença

Você tem permissão para compartilhar o projeto, desde que atribua o devido crédito e não faça modificações. Você não pode usar o material para fins comerciais.

## Autor

- Nome: Pedro Sofal
- LinkedIn: https://www.linkedin.com/in/pedro-sofal-2315212a8/
- Behance: https://www.behance.net/pedrosofal
- Email: pedrosofal@gmail.com