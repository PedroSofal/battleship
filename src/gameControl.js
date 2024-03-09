import Player from "./player.js";
import Bot from "./bot.js";
import DOM from "./DOM.js";

export default class Game {
  static players = [];
  static turn = 0;

  static newGame() {
    DOM.loadBoard(Game.players[0]);
    DOM.loadBoard(Game.players[1]);
  }

  static addPlayer(player) {
    Game.players.push(player);
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
    Game.addPlayer(new Player(sessionStorage.getItem('player1-name')));
    Game.addPlayer(new Bot(sessionStorage.getItem('player2-char')));
    Game.newGame();
  }
}

Game.init();