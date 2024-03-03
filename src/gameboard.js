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
      if (!square) return; false; 

      const overlapedSquare = square.content !== 'water' ? true : false;
      
      axis === 'row' ? row++ : col++;

      const isOutOfBounds = row > this.maxRow + 1 || row < 0
        || col > this.maxCol + 1 || col < 0;

      if (overlapedSquare || isOutOfBounds) {
        return false;
      }
    }
    return true;
  }

  placeShip(row, col, axis, ship) {
    const isSquareAvailable = this.verifySquareAvailability(row, col, axis, ship);

    if (isSquareAvailable) {
      for (let i = 0; i < ship.size; i++) {
        const square = this.findSquare(row, col);
        square.content = ship;
        square.className = 'occupied';
        axis === 'row' ? row++ : col++;
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
      square.content.hit();
      square.className = 'hit';
      if (square.content.hits === 1) this.sequence.start = square;
      if (!square.content.isSunk()) this.sequence.next = square;
      if (square.content.isSunk()) {
        this.sequence.start = null;
        this.sequence.next = null;
      }
    } else {
      square.className = 'miss';
    }
  }

  areAllShipsSunk() {
    for (const ship of Object.values(this.ships)) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }

  resetGameboard() {
    this.squares = [];
    for (const coord of this.board) {
      this.squares.push(new SquareInfo([coord[0], coord[1]], 'water', false, null));
    }
  }
}