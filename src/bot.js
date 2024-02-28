import Player from "./player.js";

export const activePlayers = [];

export default class Bot extends Player {
  constructor(name) {
    super(name);
  }

  getRandomRow() {
    const board = this.gameboard.board;
    const numberOfRows = board[board.length - 1][0];
    return Math.floor(Math.random() * (numberOfRows + 1));
  }

  getRandomCol() {
    const board = this.gameboard.board;
    const numberOfCols = board[board.length - 1][1];
    return Math.floor(Math.random() * (numberOfCols + 1));
  }

  randomAttack() {
    this.attack(this.getRandomRow(), this.getRandomCol(), activePlayers[0]);
  }

  smartAttack(lastHit) {
    let row = lastHit[0];
    let col = lastHit[1];
    
    const axis = Math.random() < 0.5 ? 'row' : 'col';

    if (axis === 'row') {
      if (row === 9) row--;
      else if (row === 0) row++;
      else {
        row += Math.random() < 0.5 ? 1 : -1;
      }
    }

    if (axis === 'col') {
      if (col === 9) col--;
      else if (col === 0) col++;
      else {
        col += Math.random() < 0.5 ? 1 : -1;
      }
    }

    this.attack(row, col, activePlayers[0]);
  }

  playRound() {
    const attackList = activePlayers[0].gameboard.attacked;
    let lastAttack;
    let lastResult;
    let sankShip;

    if (attackList.length > 0) {
      lastAttack = attackList[attackList.length - 1];
      lastResult = lastAttack.result;
      sankShip = activePlayers[0].gameboard.occupied.find(square => {
        return JSON.stringify(square.coords) === JSON.stringify(lastAttack.coords);
      }).ship.isSunk();
    }

    if (lastResult === 'hit' && !sankShip) {
      this.smartAttack(lastAttack.coords);
    } else {
      this.randomAttack();
    }
  }
}

// temporary instanciation
activePlayers.push(new Player('Human'));
activePlayers.push(new Bot('Bot'));