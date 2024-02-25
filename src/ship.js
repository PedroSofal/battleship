class Ship {
  constructor(size) {
    this.size = size;
    this.hits = 0;
  }
  
  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits >= this.size;
  }
}

export const carrier = new Ship(5);
export const battleship = new Ship(4);
export const cruiser = new Ship(3);
export const submarine = new Ship(3);
export const destroyer = new Ship(2);