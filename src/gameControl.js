import Player from "./player.js";
import Bot from "./bot.js";
import DOM from "./DOM.js";
import SetUpModal from "./setUpModal.js";

export default class Game {
  static players = [];
  static turn = 0;

  static newGame() {
    DOM.loadBoard(this.players[0]);
    DOM.loadBoard(this.players[1], this.playerPlays);
    this.players[1].setFormationRandomly();
    SetUpModal.setUp(this.players[0]);
  }
  
  static playerPlays(row, col, enemy) {
    if (!Game.gameOver() && Game.turn === 0) {
      Game.players[0].attack(row, col, enemy);
      DOM.updateBoard(Game.players[0]);
      DOM.updateBoard(Game.players[1]);
      Game.nextPlayer();
      Game.botPlays();
    }
  }
  
  static botPlays() {
    setTimeout(() => {
      this.players[1].attack(this.players[0]);
      DOM.updateBoard(this.players[0]);
      DOM.updateBoard(this.players[1]);
      this.nextPlayer();
    }, 0);
  };

  static addPlayer(player) {
    this.players.push(player);
  }

  static nextPlayer() {
    this.turn = this.turn === 0 ? 1 : 0;
  }

  static gameOver() {
    let isGameOver = false;
    this.players.forEach(player => {
      if (player.gameboard.areAllShipsSunk()) {
        isGameOver = true;
      }
    });
    return isGameOver;
  }
}
Game.addPlayer(new Player('Jack Sparrow', 'human'));
Game.addPlayer(new Bot('Dave Jones', 'bot'));
Game.newGame();