import standardSet from "./ship.js";
import Gameboard from "./gameboard.js";

export default class Player {
  constructor(name, char) {
    this.name = name;
    this.char = char;
    this.type = 'human';
    this.gameboard = new Gameboard(10, 10, new standardSet());
  }

  attack(row, col, enemy) {
    if (this.isSquareAvailable(row, col, enemy)) {
      return enemy.gameboard.receiveAttack(row, col);
    }
  }

  isSquareAvailable(row, col, enemy) {
    const isAlreadyAttacked = enemy.gameboard.squares.find(square => {
      return JSON.stringify(square.coords) === JSON.stringify([row, col])
      && square.attacked === true;
    });

    if (isAlreadyAttacked) {
      return false;
    } else {
      return true;
    }
  }
}