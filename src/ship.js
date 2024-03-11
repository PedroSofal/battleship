import battleship from './assets/ships/battleship.svg';
import carrier from './assets/ships/carrier.svg';
import cruiser from './assets/ships/cruiser.svg';
import destroyer from './assets/ships/destroyer.svg';
import submarine from './assets/ships/submarine.svg';

class Ship {
  constructor(name, size, src) {
    this.name = name;
    this.size = size;
    this.src = src;
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
    this.carrier = new Ship('carrier', 5, carrier);
    this.battleship = new Ship('battleship', 4, battleship);
    this.cruiser = new Ship('cruiser', 3, cruiser);
    this.submarine = new Ship('submarine', 3, submarine);
    this.destroyer = new Ship('destroyer', 2, destroyer);
  }
}