export default class Gameboard {
  constructor(row, col, set) {
    this.board = this.buildGrid(row, col);
    this.ships = set;
    this.occupied = [];
    this.attacked = [];
    this.maxRow = this.board[this.board.length - 1][0];
    this.maxCol = this.board[this.board.length - 1][1];
  }

  buildGrid(row, col) {
    const grid = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        grid.push([i, j]);
      }
    }
    return grid;
  }

  placeShip(row, col, axis, ship) {
    const isSquareAvailable = this.verifySquareAvailability(row, col, axis, ship);

    if (isSquareAvailable) {
      for (let i = 0; i < ship.size; i++) {
        this.occupied.push({
          ship: ship,
          coords: [row, col]
        });
        axis === 'row' ? row++ : col++;
      }
    }
  }

  verifySquareAvailability(row, col, axis, ship) {
    for (let i = 0; i < ship.size; i++) {
      const overlapedSquare = this.occupied.find(square => {
        return JSON.stringify(square.coords) === JSON.stringify([row, col]);
      });
      
      axis === 'row' ? row++ : col++;

      const isOutOfBounds = row > this.maxRow || col > this.maxCol;

      if (overlapedSquare || isOutOfBounds) {
        return false;
      }
    }
    return true;
  }

  receiveAttack(row, col) {
    let result;
    const occupiedSquare = this.occupied.find(square => {
      return JSON.stringify(square.coords) === JSON.stringify([row, col]);
    });

    if (occupiedSquare) {
      occupiedSquare.ship.hit();
      result = 'hit';
    } else {
      result = 'miss';
    }

    this.attacked.push({
      coords: [row, col],
      result: result
    });
  }

  areAllShipsSunk() {
    for (const ship of Object.values(this.ships)) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }
}