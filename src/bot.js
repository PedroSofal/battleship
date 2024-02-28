import standardSet from "./ship.js";
import Gameboard from "./gameboard.js";

export default class Bot {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard(10, 10, new standardSet());
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

  randomAttack(enemy) {
    let row = this.getRandomRow();
    let col = this.getRandomCol();

    if (!this.alreadyAttackedSquare(row, col, enemy)) {
      enemy.gameboard.receiveAttack(row, col);
    } else {
      this.randomAttack(enemy);
    }
  }

  smartAttack(lastHit, enemy) {
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

    if (!this.alreadyAttackedSquare(row, col, enemy)) {
      enemy.gameboard.receiveAttack(row, col);
    } else {
      this.smartAttack(lastHit, enemy);
    }
  }

  attack(enemy) {
    const attackList = enemy.gameboard.attacked;
    let lastAttack;
    let lastResult;
    let sankShip;

    if (attackList.length > 0) {
      lastAttack = attackList[attackList.length - 1];
      lastResult = lastAttack.result;
      sankShip = enemy.gameboard.occupied.find(square => {
        return JSON.stringify(square.coords) === JSON.stringify(lastAttack.coords);
      }).ship.isSunk();
    }

    if (lastResult === 'hit' && !sankShip) {
      this.smartAttack(lastAttack.coords, enemy);
    } else {
      this.randomAttack(enemy);
    }
  }

  alreadyAttackedSquare(row, col, enemy) {
    return enemy.gameboard.attacked.find(square => {
      return JSON.stringify(square.coords) === JSON.stringify([row, col]);
    });
  }
}