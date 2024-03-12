import standardSet from "./ship.js";
import Gameboard from "./gameboard.js";

export default class Bot {
  constructor(name) {
    this.name = name;
    this.type = 'cpu';
    this.gameboard = new Gameboard(10, 10, new standardSet());
    this.aim = 'random';
    this.sequence = [];
  }

  randomAttack(enemy) {
    this.aim = 'random';

    let row = this.gameboard.getRandomRow();
    let col = this.gameboard.getRandomCol();

    if (this.isSquareAvailable(row, col, enemy)) {
      return enemy.gameboard.receiveAttack(row, col);
    } else {
      return this.randomAttack(enemy);
    }
  }

  smartAttack(sequenceStart, lastAttack, enemy) {
    if (JSON.stringify(lastAttack.coords) === JSON.stringify(sequenceStart.coords)
    || lastAttack.content === 'water') {
      const row = sequenceStart.coords[0];
      const col = sequenceStart.coords[1];
      const nextAttack = this.spreadAim(row, col, enemy);
      return enemy.gameboard.receiveAttack(...nextAttack);
    }

    if (lastAttack.content !== 'water') {
      this.sequence.push(lastAttack);

      if (this.aim === 'lock-row' || this.aim === 'lock-col') {
        const nextAttack = this.lockAim(sequenceStart, this.aim, enemy);
        return enemy.gameboard.receiveAttack(...nextAttack);
      } else {
        if (sequenceStart.coords[0] === lastAttack.coords[0]) this.aim = 'lock-row';
        if (sequenceStart.coords[1] === lastAttack.coords[1]) this.aim = 'lock-col';
        
        const nextAttack = this.lockAim(sequenceStart, this.aim, enemy);
        return enemy.gameboard.receiveAttack(...nextAttack);
      }
    }
  }

  attack(enemy) {
    const sequenceStart = enemy.gameboard.sequence.start;
    const lastAttack = enemy.gameboard.sequence.next;

    if (sequenceStart) {
      return this.smartAttack(sequenceStart, lastAttack, enemy);
    } else {
      this.sequence = [];
      return this.randomAttack(enemy);
    }
  }

  isSquareAvailable(row, col, enemy) {
    const isOutOfBounds = row > enemy.gameboard.maxRow || row < 0
    || col > enemy.gameboard.maxCol || col < 0;

    if (isOutOfBounds) {
      return false;
    }

    const isAlreadyAttacked = enemy.gameboard.squares.find(square => {
      return JSON.stringify(square.coords) === JSON.stringify([row, col])
      && square.attacked;
    });

    if (isAlreadyAttacked) {
      return false;
    } else {
      return true;
    }
  }

  spreadAim(row, col, enemy) {
    this.aim = 'spread';

    const possibleMoves = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]

    return this.getRandomAdjacency(possibleMoves, enemy);
  }

  lockAim(sequenceStart, aim, enemy) {
     const possibleMoves = [];

    if (aim === 'lock-col') {
      possibleMoves.push([sequenceStart.coords[0] + 1, sequenceStart.coords[1]]);
      possibleMoves.push([sequenceStart.coords[0] - 1, sequenceStart.coords[1]]);
      for (const square of this.sequence) {
        possibleMoves.push([square.coords[0] + 1, square.coords[1]]);
        possibleMoves.push([square.coords[0] - 1, square.coords[1]]);
      }
    }

    if (aim === 'lock-row') {
      possibleMoves.push([sequenceStart.coords[0], sequenceStart.coords[1] + 1]);
      possibleMoves.push([sequenceStart.coords[0], sequenceStart.coords[1] - 1]);
      for (const square of this.sequence) {
        possibleMoves.push([square.coords[0], square.coords[1] + 1]);
        possibleMoves.push([square.coords[0], square.coords[1] - 1]);
      }
    }

    return this.getRandomAdjacency(possibleMoves, enemy);
  }

  getRandomAdjacency(moves, enemy) {
    const adjacencies = moves.filter(move => this.isSquareAvailable(...move, enemy));
    return adjacencies[Math.floor(Math.random() * adjacencies.length)];
  }
}