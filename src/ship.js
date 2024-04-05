import battleship from './assets/ships/battleship.svg';
import carrier from './assets/ships/carrier.svg';
import cruiser from './assets/ships/cruiser.svg';
import destroyer from './assets/ships/destroyer.svg';
import submarine from './assets/ships/submarine.svg';

class Ship {
  constructor(name_en, name_pt, size, src) {
    this.name_en = name_en;
    this.name_pt = name_pt;
    this.size = size;
    this.src = src;
    this.coords = null;
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
    this.carrier = new Ship('carrier', 'porta-aviões', 5, carrier);
    this.battleship = new Ship('battleship', 'couraçado', 4, battleship);
    this.cruiser = new Ship('cruiser', 'cruzador', 3, cruiser);
    this.submarine = new Ship('submarine', 'submarino', 3, submarine);
    this.destroyer = new Ship('destroyer', 'contratorpedeiro', 2, destroyer);
  }
}