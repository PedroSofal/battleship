import Player from "./player.js";
import Bot from "./bot.js";
import DOM from "./DOM.js";

export default class Game {
  constructor() {
    this.players = [];
    this.turn = 0;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  startGame() {
    this.createBoards();
  }

  createBoards() {
    DOM.createBoard(this.players[0]);
    DOM.createBoard(this.players[1]);
  }

  updateBoards() {
    DOM.updateBoard(this.players[0]);
    DOM.updateBoard(this.players[1]);
  }

  nextPlayer() {
    this.turn = this.turn === 0 ? 1 : 0;
  }

  gameOver() {
    let isGameOver = false;
    this.players.forEach(player => {
      if (player.gameboard.areAllShipsSunk()) {
        isGameOver = true;
      }
    });
    return isGameOver;
  }
}

export const game = new Game();

game.addPlayer(new Player('Jack Sparrow', 'human'));
game.addPlayer(new Bot('Dave Jones', 'bot'));
game.startGame();
game.players[0].gameboard.placeShip(5, 5, 'col', game.players[0].gameboard.ships.carrier);
game.players[0].gameboard.placeShip(2, 5, 'col', game.players[0].gameboard.ships.battleship);
game.players[0].gameboard.placeShip(4, 1, 'col', game.players[0].gameboard.ships.cruiser);
game.players[0].gameboard.placeShip(7, 3, 'col', game.players[0].gameboard.ships.submarine);
game.players[0].gameboard.placeShip(0, 1, 'row', game.players[0].gameboard.ships.destroyer);

game.players[1].gameboard.placeShip(5, 5, 'col', game.players[1].gameboard.ships.carrier);
game.players[1].gameboard.placeShip(2, 5, 'col', game.players[1].gameboard.ships.battleship);
game.players[1].gameboard.placeShip(4, 1, 'col', game.players[1].gameboard.ships.cruiser);
game.players[1].gameboard.placeShip(7, 3, 'col', game.players[1].gameboard.ships.submarine);
game.players[1].gameboard.placeShip(0, 1, 'row', game.players[1].gameboard.ships.destroyer);
game.updateBoards();