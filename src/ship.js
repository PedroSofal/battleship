class Ship {
  constructor(name, size) {
    this.name = name;
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
    this.carrier = new Ship('carrier', 5);
    this.battleship = new Ship('battleship', 4);
    this.cruiser = new Ship('cruiser', 3);
    this.submarine = new Ship('submarine', 3);
    this.destroyer = new Ship('destroyer', 2);
  }
}