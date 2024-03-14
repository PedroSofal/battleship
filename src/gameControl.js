import Player from "./player.js";
import Bot from "./bot.js";
import DOM from "./DOM.js";
import { charObjects } from "./characters.js";

export default class Game {
  static players = [];
  static turn = 0;

  static setPlayers() {
    const player1name = sessionStorage.getItem('player1-name');
    const player1char = charObjects[sessionStorage.getItem('player1-char')];
    const player2name = charObjects[sessionStorage.getItem('player2-char')].name;
    const player2char = charObjects[sessionStorage.getItem('player2-char')];

    const player1 = new Player(player1name, player1char);
    const player2 = new Bot(player2name, player2char);

    Game.players.push(player1);
    Game.players.push(player2);
  }

  static newGame() {
    DOM.loadBoard(Game.players[0]);
    DOM.loadBoard(Game.players[1]);
  }

  static nextPlayer() {
    Game.turn = Game.turn === 0 ? 1 : 0;
  }

  static gameOver() {
    let isGameOver = false;
    Game.players.forEach(player => {
      if (player.gameboard.areAllShipsSunk()) {
        isGameOver = true;
      }
    });
    return isGameOver;
  }

  static init() {
    Game.setPlayers();
    Game.newGame();
  }
}

Game.init();