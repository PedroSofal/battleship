import standardSet from "./ship.js";
import Gameboard from "./gameboard.js";

export default class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard(10, 10, new standardSet());
  }

  attack(row, col, enemy) {
    const alreadyAttackedSquare = enemy.gameboard.attacked.find(square => {
      return JSON.stringify(square.coords) === JSON.stringify([row, col]);
    });

    if (!alreadyAttackedSquare) {
      enemy.gameboard.receiveAttack(row, col);
    }
  }
}