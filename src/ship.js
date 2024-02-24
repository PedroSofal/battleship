class Ship {
  size = null;
  hits = 0;
  
  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits >= this.size;
  }
}

class Carrier extends Ship {
  size = 5;
}

class Battleship extends Ship {
  size = 4;
}

class Cruiser extends Ship {
  size = 3;
}

class Submarine extends Ship {
  size = 3;
}

class Destroyer extends Ship {
  size = 2;
}

export const testShip = new Battleship();