import standardSet from './ship.js';
import Gameboard from './gameboard.js';

export default class Bot {
  constructor(name, char) {
    this.name = name;
    this.char = char;
    this.type = 'cpu';
    this.gameboard = new Gameboard(10, 10, new standardSet());
    this.aim = 'random';
    this.sequence = [];
    this.idealAttackCoords = [];
    this.rounds = 0;
    this.directions = 4;
  }

  randomAttack(enemy) {
    this.aim = 'random';

    const row = this.gameboard.getRandomRow();
    const col = this.gameboard.getRandomCol();

    if (this.isSquareAvailable(row, col, enemy)) {
      return enemy.gameboard.receiveAttack(row, col);
    } else {
      return this.randomAttack(enemy);
    }
  }

  randomAttackImproved(enemy) {
    this.aim = 'random';
    this.getIdealAttackCoords(enemy);

    const random = Math.floor(Math.random() * this.idealAttackCoords.length);
    
    const row = this.idealAttackCoords[random][0];
    const col = this.idealAttackCoords[random][1];

    return enemy.gameboard.receiveAttack(row, col);
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
    this.rounds++;
    const sequenceStart = enemy.gameboard.sequence.start;
    const lastAttack = enemy.gameboard.sequence.next;

    if (sequenceStart) {
      return this.smartAttack(sequenceStart, lastAttack, enemy);
    } else {
      this.sequence = [];
      if (this.rounds < 5) {
        return this.randomAttackImproved(enemy);
      } else {
        return this.randomAttackImproved(enemy);
      }
    }
  }

  isSquareAvailable(row, col, enemy) {
    const isOutOfBounds = row > enemy.gameboard.maxRow || row < 0
    || col > enemy.gameboard.maxCol || col < 0;

    const isAlreadyAttacked = enemy.gameboard.squares.find(square => {
      return JSON.stringify(square.coords) === JSON.stringify([row, col])
      && square.attacked;
    });

    if (isOutOfBounds || isAlreadyAttacked) {
      return false;
    } else {
      return true;
    }
  }

  getIdealTargetSize(enemy) {
    const biggestUnsunkenEnemyShips = Object.values(enemy.gameboard.ships)
      .filter(ship => !ship.isSunk())
      .sort((a, b) => b.size - a.size);

    return biggestUnsunkenEnemyShips[0].size;
  }

  getNumberOfClearDirections(row, col, enemy, searchArea) {
    let numberOfClearDirections = 0;

    function searchSouth(scope) {
      for (let i = 0; i < searchArea; i++) {
        if (!scope.isSquareAvailable(row + i, col, enemy)) return false;
      }
      numberOfClearDirections++;
    }
    function searchNorth(scope) {
      for (let i = 0; i < searchArea; i++) {
        if (!scope.isSquareAvailable(row - i, col, enemy)) return false;
      }
      numberOfClearDirections++;
    }
    function searchEast(scope) {
      for (let i = 0; i < searchArea; i++) {
        if (!scope.isSquareAvailable(row, col + i, enemy)) return false;
      }
      numberOfClearDirections++;
    }
    function searchWest(scope) {
      for (let i = 0; i < searchArea; i++) {
        if (!scope.isSquareAvailable(row, col - i, enemy)) return false;
      }
      numberOfClearDirections++;
    }

    searchSouth(this);
    searchNorth(this);
    searchEast(this);
    searchWest(this);

    return numberOfClearDirections;
  }

  getIdealAttackCoords(enemy) {
    const searchArea = this.getIdealTargetSize(enemy);
    const idealAttackCoords = [];
    let numberOfClearDirections = 0;
    const untouchedSquares = enemy.gameboard.squares.filter(squares => {
      return !squares.attacked;
    })

    for (const square of untouchedSquares) {
      const row = square.coords[0];
      const col = square.coords[1];
      numberOfClearDirections = this.getNumberOfClearDirections(row, col, enemy, searchArea);

      if (numberOfClearDirections >= this.directions) {
        idealAttackCoords.push(square.coords);
      }
    }

    if (idealAttackCoords.length > 0) {
      this.idealAttackCoords = idealAttackCoords;
    } else {
      if (this.directions === 1) this.directions = 4;
      this.directions--;
      console.log(this.directions)
      this.getIdealAttackCoords(enemy);
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