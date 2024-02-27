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

export default class standardSet {
  constructor() {
    this.carrier = new Ship(5);
    this.battleship = new Ship(4);
    this.cruiser = new Ship(3);
    this.submarine = new Ship(3);
    this.destroyer = new Ship(2);
  }
}