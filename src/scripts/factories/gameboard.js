class SquareInfo {
  constructor(coords, content, attacked, className) {
    this.coords = coords;
    this.content = content;
    this.attacked = attacked;
    this.className = className;
  }
}

export default class Gameboard {
  constructor(row, col, set) {
    this.squares = [];
    this.ships = set;
    this.board = this.buildGrid(row, col);
    this.maxRow = this.board[this.board.length - 1][0];
    this.maxCol = this.board[this.board.length - 1][1];
    this.sequence = {
      start: null,
      next: null,
    };
  }

  buildGrid(row, col) {
    const grid = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        grid.push([i, j]);
        this.squares.push(new SquareInfo([i, j], 'water', false, null));
      }
    }
    return grid;
  }

  findSquare(row, col) {
    const square = this.squares.find(square => {
      return JSON.stringify(square.coords) === JSON.stringify([row, col]);
    });
    return square;
  }

  verifySquareAvailability(row, col, axis, ship) {
    for (let i = 0; i < ship.size; i++) {
      const square = this.findSquare(row, col);
      const adjacencies = this.getAdjacencies(row, col);

      if (!square) return false; 

      const overlapedSquare = square.content !== 'water'
        || adjacencies.some(square => square.content !== 'water');

      const isOutOfBounds = row > this.maxRow || row < 0
        || col > this.maxCol || col < 0;

        axis === 'row' ? col++ : row++;

      if (overlapedSquare || isOutOfBounds) {
        return false;
      }
    }
    return true;
  }

  placeShip(row, col, axis, ship) {
    const isSquareAvailable = this.verifySquareAvailability(row, col, axis, ship);

    if (isSquareAvailable) {
      ship.coords = [row, col, axis];
      
      for (let i = 0; i < ship.size; i++) {
        const square = this.findSquare(row, col);
        square.content = ship;
        square.className = 'occupied';
        axis === 'row' ? col++ : row++;
      }
      return true;
    } else {
      return false;
    }
  }

  receiveAttack(row, col) {
    const square = this.findSquare(row, col);
    square.attacked = true;

    if (square.content !== 'water') {
      return this.handleHit(square);
    }
    
    if (square.content === 'water') {
      return this.handleMiss(square, row, col);
    }
  }

  handleHit(square) {
    square.content.hit();

    if (square.content.hits === 1) {
      this.sequence.start = square;
    }

    if (!square.content.isSunk()) {
      this.sequence.next = square;
      square.className = 'hit';
    }

    if (square.content.isSunk()) {
      this.sequence.start = null;
      this.sequence.next = null;
      square.className = 'sunk';
    }

    return square;
  }

  handleMiss(square, row, col) {
    const adjacencies = this.getAdjacencies(row, col);

    if (adjacencies.some(square => square.content !== 'water' && !square.attacked)) {
      square.className = 'close';
    } else {
      square.className = 'miss';
    }

    return square;
  }

  getAdjacencies(row, col) {
    const adjacencies = [];

    const posX = row + 1 > this.maxRow ? this.maxRow : row + 1;
    const posY = col + 1 > this.maxCol ? this.maxCol : col + 1;
    const negX = row - 1 < 0 ? 0 : row - 1;
    const negY = col - 1 < 0 ? 0 : col - 1;
    const adjacentPosX = this.findSquare(posX, col);
    const adjacentPosY = this.findSquare(row, posY);
    const adjacentNegX = this.findSquare(negX, col);
    const adjacentNegY = this.findSquare(row, negY);

    adjacencies.push(adjacentPosX, adjacentPosY, adjacentNegX, adjacentNegY);
    return adjacencies;
  }

  areAllShipsSunk() {
    for (const ship of Object.values(this.ships)) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }

  setFormationRandomly(isSquareAvailable = false, shipCounter = 0, placingParameters = false) {
    if (shipCounter >= Object.keys(this.ships).length) {
      return;
    }

    if (isSquareAvailable) {
      this.placeShip(...placingParameters);
      shipCounter++;
      isSquareAvailable = false;
      placingParameters = false;
      return this.setFormationRandomly(isSquareAvailable, shipCounter);
    }
    
    if (!isSquareAvailable) {
      const row = this.getRandomRow();
      const col = this.getRandomCol();
      const axis = Math.random() < 0.5 ? 'row' : 'col';
      const ship = Object.values(this.ships)[shipCounter];
      const placingParameters = [row, col, axis, ship];

      isSquareAvailable = this.verifySquareAvailability(row, col, axis, ship);
      return this.setFormationRandomly(isSquareAvailable, shipCounter, placingParameters);
    }
  }

  getRandomRow() {
    const board = this.board;
    const numberOfRows = board[board.length - 1][0];
    return Math.floor(Math.random() * (numberOfRows + 1));
  }

  getRandomCol() {
    const board = this.board;
    const numberOfCols = board[board.length - 1][1];
    return Math.floor(Math.random() * (numberOfCols + 1));
  }

  resetGameboard() {
    this.squares = [];
    for (const coord of this.board) {
      this.squares.push(new SquareInfo([coord[0], coord[1]], 'water', false, null));
    }
  }
}