class Gameboard {
  constructor(row, col) {
    this.board = this.buildGrid(row, col);
    this.occupied = [];
    this.attacked = [];
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
      const isOverlaped = this.occupied.find(square => {
        return JSON.stringify(square.coords) === JSON.stringify([row, col]);
      });
      
      axis === 'row' ? row++ : col++;

      const isOutOfBounds = row > this.board[this.board.length - 1][0]
        || col > this.board[this.board.length - 1][1];

      if (isOverlaped || isOutOfBounds) {
        return false;
      }
    }
    return true;
  }

  receiveAttack(row, col) {
    let result;
    const isSquareOccupied = this.occupied.find(square => {
      return JSON.stringify(square.coords) === JSON.stringify([row, col]);
    });

    if (isSquareOccupied) {
      isSquareOccupied.ship.hit();
      result = 'hit';
    } else {
      result = 'miss';
    }

    this.attacked.push({
      coords: [row, col],
      result: result
    });
  }
}

export const testBoard = new Gameboard(10, 10);