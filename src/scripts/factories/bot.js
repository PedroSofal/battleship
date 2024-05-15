import standardSet from './ship.js';
import Gameboard from './gameboard.js';

export default class AI {
  constructor(name, char, enemy) {
    this.name = name;
    this.char = char;
    this.enemy = enemy;
    this.type = 'cpu';
    this.gameboard = new Gameboard(10, 10, new standardSet());
    this.aim = 'random';
    this.sequence = [];
  }

  attack() {
    const sequenceStart = this.enemy.gameboard.sequence.start;
    const lastAttack = this.enemy.gameboard.sequence.next;

    if (sequenceStart) {
      return this.focusedAttack(sequenceStart, lastAttack);
    } else {
      this.sequence = [];
      return this.randomAttack();
    }
  }

  focusedAttack(sequenceStart, lastAttack) {
    if (JSON.stringify(lastAttack.coords) === JSON.stringify(sequenceStart.coords)
    || lastAttack.content === 'water') {
      return this.findShipAxis(sequenceStart.coords);
    }

    if (lastAttack.content !== 'water') {
      return this.findRestOfShip(sequenceStart, lastAttack);
    }
  }

  findShipAxis(coords) {
    const row = coords[0];
    const col = coords[1];
    const nextAttack = this.spreadAim(row, col);
    return this.enemy.gameboard.receiveAttack(...nextAttack);
  }

  findRestOfShip(sequenceStart, lastAttack) {
    this.sequence.push(lastAttack);

    if (sequenceStart.coords[0] === lastAttack.coords[0]) this.aim = 'lock-row';
    if (sequenceStart.coords[1] === lastAttack.coords[1]) this.aim = 'lock-col';
    
    const nextAttack = this.lockAim(sequenceStart, this.aim);
    return this.enemy.gameboard.receiveAttack(...nextAttack);
  }

  isSquareAvailable(row, col) {
    const isOutOfBounds = row > this.enemy.gameboard.maxRow || row < 0
    || col > this.enemy.gameboard.maxCol || col < 0;

    const isAlreadyAttacked = this.enemy.gameboard.squares.find(square => {
      return JSON.stringify(square.coords) === JSON.stringify([row, col])
      && square.attacked;
    });

    if (isOutOfBounds || isAlreadyAttacked) {
      return false;
    } else {
      return true;
    }
  }

  spreadAim(row, col) {
    this.aim = 'spread';

    const possibleMoves = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]

    return this.getRandomAdjacency(possibleMoves);
  }

  lockAim(sequenceStart, aim) {
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
    
    return this.getRandomAdjacency(possibleMoves);
  }

  getRandomAdjacency(moves) {
    const adjacencies = moves.filter(move => this.isSquareAvailable(...move));
    return adjacencies[Math.floor(Math.random() * adjacencies.length)];
  }
}