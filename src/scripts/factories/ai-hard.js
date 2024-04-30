import AI from './bot.js';

export default class AI_HARD extends AI {
  constructor(name, char, enemy) {
    super(name, char, enemy);
    this.idealAttackCoords = [];
    this.directions = 4;
    this.untouchedSquares = [...this.enemy.gameboard.squares];
  }

  randomAttack() {
    this.aim = 'random';
    this.updateUntouchedSquares();
    this.getIdealAttackCoords();
  
    const random = Math.floor(Math.random() * this.idealAttackCoords.length);
    const row = this.idealAttackCoords[random][0];
    const col = this.idealAttackCoords[random][1];
  
    return this.enemy.gameboard.receiveAttack(row, col);
  }

  getIdealTargetSize() {
    const biggestUnsunkenEnemyShips = Object.values(this.enemy.gameboard.ships)
      .filter(ship => !ship.isSunk())
      .sort((a, b) => b.size - a.size);

    return biggestUnsunkenEnemyShips[0].size;
  }

  getNumberOfClearDirections(row, col, searchArea) {
    let numberOfClearDirections = 0;

    function searchSouth(scope) {
      for (let i = 0; i < searchArea; i++) {
        if (!scope.isSquareAvailable(row + i, col)) return false;
      }
      numberOfClearDirections++;
    }
    function searchNorth(scope) {
      for (let i = 0; i < searchArea; i++) {
        if (!scope.isSquareAvailable(row - i, col)) return false;
      }
      numberOfClearDirections++;
    }
    function searchEast(scope) {
      for (let i = 0; i < searchArea; i++) {
        if (!scope.isSquareAvailable(row, col + i)) return false;
      }
      numberOfClearDirections++;
    }
    function searchWest(scope) {
      for (let i = 0; i < searchArea; i++) {
        if (!scope.isSquareAvailable(row, col - i)) return false;
      }
      numberOfClearDirections++;
    }

    searchSouth(this);
    searchNorth(this);
    searchEast(this);
    searchWest(this);

    return numberOfClearDirections;
  }

  getIdealAttackCoords() {
    const searchArea = this.getIdealTargetSize();
    const idealAttackCoords = [];
    let numberOfClearDirections = 0;

    for (const square of this.untouchedSquares) {
      const row = square.coords[0];
      const col = square.coords[1];
      numberOfClearDirections = this.getNumberOfClearDirections(row, col, searchArea);

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
      this.getIdealAttackCoords();
    }
  }

  updateUntouchedSquares() {
    const toBeRemoved = [];

    for (let i = 0; i < this.untouchedSquares.length; i++) {
      if (this.untouchedSquares[i].content !== 'water' && this.untouchedSquares[i].attacked) {
        const row = this.untouchedSquares[i].coords[0];
        const col = this.untouchedSquares[i].coords[1];

        const adjacencies = [
          [row + 1, col],
          [row - 1, col],
          [row, col + 1],
          [row, col - 1],
        ]
        
        for (const coords of adjacencies) {
          const searchedSquare = this.untouchedSquares.find(square => {
            return JSON.stringify(square.coords) === JSON.stringify([...coords]);
          });
          
          if (searchedSquare) {
            if (!searchedSquare.attacked) {
              toBeRemoved.push(searchedSquare);
            }
          }
        }
      }

      if (this.untouchedSquares[i].attacked) {
        toBeRemoved.push(this.untouchedSquares[i]);
      }
    }

    for (let i = toBeRemoved.length - 1; i >= 0; i--) {
      const square = toBeRemoved[i];
      const squareIndex = this.untouchedSquares.indexOf(square);
      this.untouchedSquares.splice(squareIndex, 1);
    }    
  }
}