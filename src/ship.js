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
    this.carrier = new Ship('Carrier', 5);
    this.battleship = new Ship('Battleship', 4);
    this.cruiser = new Ship('Cruiser', 3);
    this.submarine = new Ship('Submarine', 3);
    this.destroyer = new Ship('Destroyer', 2);
  }
}