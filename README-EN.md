# Battleship

Battleship is a personal portfolio project that consists of the popular Battleship game that runs in the browser.

This project was inspired by the final exercise of the JavaScript course from [The Odin Project](https://www.theodinproject.com/).

However, instead of simply building the basic functionality of a battleship game, I invested time in creating a more immersive gameplay experience by adding menus, characters, difficulty levels, loading screens, and other features found in real games.

For this challenge, I decided to limit myself to using only the three basic languages - HTML, CSS, and JavaScript — to truly solidify the fundamentals of web development. Therefore, no libraries or frameworks were used, except for Jest to set up the initial tests, as part of The Odin Project exercise requirements.

Additionally, I intentionally developed the game using multiple HTML files to represent each game screen, to explore this functionality of Webpack and implement a simple route-guard system.

This is my first project of this scale, and it has been a source of immense learning, particularly regarding code organization. I did my best to build a readable and scalable code environment, and I attempted to implement the BEM convention for CSS, but it is definitely something that can be improved in the future.

However, without a doubt, my biggest challenge was making the game responsive. Since it is a fullscreen game, I had to work on responsiveness on both axes, using more obscure measurement units like vmin, vmax, cqmin, cqh, cqw, etc. I've noticed that the positioning of some elements in real mobile devices may differ from what the browsers devtools show as a preview. Over time, I intend to refine this feature of the game.

Overall, there is still much room for code improvement, but I am happy with the result so far, especially since the initial goal of this project was greatly exceeded.

I hope you enjoy playing as much as I did developing this project! Thank you very much.

## Gameplay Features

- Player vs Computer game mode;
- 3 difficulty levels;
- 6 characters with different personalities for you to choose from;
- 2 languages: portuguese and english;
- 2 game speed modes;
- Separate audio volume controls for music and sound effects;
- Auto save;
- Responsive interface to screen width and height changes.

## Technologies Used

- Languages: HTML, CSS e Javascript
- Package manager: NPM
- Module bundler: Webpack
- Version control: Git
- Transcompiler: Babel
- Framework: Jest

## Play Online

You can play the online version of the game [here](https://pedrosofal.github.io/battleship).

## How to Play

1. If this is your first session, click on New Game;
2. In the Character Selection screen, choose your combatant and then your opponent;
3. In the Strategy Room, drag your ships onto the board to position them without having them adjacent or overlapping each other. When hovering a ship over the board, it will show a green position preview if the spot is free or a red preview if the spot is invalid;
4. On the battle screen, you go first. Click on a cell in the attack board to open fire against the enemy;
5. The game operates in alternating turns. An animation around the boards will indicate whose turn it is;
6. The game is won by the player who sinks all of the opponent's ships first.

### Defense Radar System

- If the computer launches a successful attack or comes very close to one of the player's ships, the defense radar may activate, emitting a sound effect to indicate the deployment of countermeasures.
- Whenever the computer makes a first hit on any of the player's ships, an intermittent beeping alarm will sound to signal that the ship has been detected by the enemy radar. This indicates that the computer will try to sink that ship in its next attacks. The alarm will only turn off when the ship is sunk by the computer or the game ends.
- The aforementioned countermeasures currently have no impact on gameplay, serving only as an audiovisual and immersive aid.

## Credits

### Music

- "Epic" by Benjamin Tissot at [Bensound](https://bensound.com/royalty-free-music/track/epic) - License code: QHDT06OS0LWAJJHV
- "Fearsome Tipsy Pirates" by SigmaMusicArt at [Pixabay](https://pixabay.com/)
- "Battle Ship - Short Version 1" by Hot_Dope at [Pixabay](https://pixabay.com/)
- "No Time to Die" by Hartzmann at [Uppbeat](https://uppbeat.io/t/hartzmann/no-time-to-die) - License code: BYW5PN5THAT2W3K6
- "Corsairs" by Studio Kolmna at [Uppbeat](https://uppbeat.io/t/studiokolomna/corsairs) - License code: ZZBUKXUHLTIW6KAC
- "Dance of Devils" by Giulio Fazio at [Uppbeat](https://uppbeat.io/t/giulio-fazio/dance-of-devils) - License code: YER0VLVCNJWDONGK

### Sound Effects

- "hit1", "hit2", "miss1", "miss2", "miss3" by Iwan Gabovitch at [Open Game Art](https://opengameart.org/users/qubodup)
- "hit3", "sink1", "sink2", "last-sink" by Thimras at [Open Game Art](https://opengameart.org/users/thimras)

### Graphics

- Explosion by Tião Ferreira at [Open Game Art](https://opengameart.org/users/tiao-ferreira)

## Contribution

This project is for portfolio purposes only and does not accept external contributions.

## License

You are allowed to share the project as long as you give proper credit and do not make any changes. You may not use the material for commercial purposes.

## Author

- Name: Pedro Sofal
- LinkedIn: https://www.linkedin.com/in/pedro-sofal-2315212a8/
- Behance: https://www.behance.net/pedrosofal
- Email: pedrosofal@gmail.com