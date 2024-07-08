import Player from "../src/scripts/factories/player.js";
import AI_EASY from "../src/scripts/factories/ai-easy.js";

let player;
let cpu;

function isGameOver() {
  if (player.gameboard.areAllShipsSunk() || cpu.gameboard.areAllShipsSunk()) {
    return true;
  } else {
    return false;
  }
}

beforeEach(() => {
  player = new Player('Yamato', 'Yamato');
  cpu = new AI_EASY('Noronha', 'Noronha', player);
});

afterEach(() => {
  player = null;
  cpu = null;
});

describe('ship placement', () => {
  test('ship is placed on gameboard', () => {
    player.gameboard.placeShip(0, 0, 'col', player.gameboard.ships.destroyer);
    expect(player.gameboard.squares).toContainEqual(
      {
        coords: [0, 0],
        content: player.gameboard.ships.destroyer,
        attacked: false,
        className: 'occupied',
      },
      {
        coords: [1, 0],
        content: player.gameboard.ships.destroyer,
        attacked: false,
        className: 'occupied',
      },
    );
  });

  test('ship is not placed on gameboard due to overlap', () => {
    player.gameboard.placeShip(0, 2, 'col', player.gameboard.ships.battleship);
    player.gameboard.placeShip(1, 2, 'col', player.gameboard.ships.destroyer);
    expect(player.gameboard.squares).not.toContainEqual(
      {
        coords: [1, 2],
        content: player.gameboard.ships.destroyer,
        attacked: false,
        className: 'occupied',
      },
    );
    expect(player.gameboard.squares).not.toContainEqual(
      {
        coords: [2, 2],
        content: player.gameboard.ships.destroyer,
        attacked: false,
        className: 'occupied',
      },
    );
  });

  test('ship is not placed on gameboard due to invalid coords (out of bounds)', () => {
    player.gameboard.placeShip(9, 9, 'col', player.gameboard.ships.battleship);
    expect(player.gameboard.squares).toContainEqual(
      {
        coords: [9, 9],
        content: 'water',
        attacked: false,
        className: null,
      },
    );
  });
});

describe('attack detection system', () => {
  test('attack hits ship', () => {
    player.gameboard.ships.battleship.hits = 0;
    player.gameboard.placeShip(1, 2, 'col', player.gameboard.ships.battleship);
    player.gameboard.receiveAttack(1, 2);
    expect(player.gameboard.ships.battleship.hits).toBe(1);
    expect(player.gameboard.squares).toContainEqual(
      {
        coords: [1, 2],
        content: player.gameboard.ships.battleship,
        attacked: true,
        className: 'hit',
      },
    );
  });

  test('attack hits sea', () => {
    player.gameboard.ships.battleship.hits = 0;
    player.gameboard.placeShip(1, 2, 'col', player.gameboard.ships.battleship);
    player.gameboard.receiveAttack(5, 3);
    expect(player.gameboard.ships.battleship.hits).toBe(0);
    expect(player.gameboard.squares).toContainEqual(
      {
        coords: [5, 3],
        content: 'water',
        attacked: true,
        className: 'miss',
      },
    );
  });

  test('attack sinks ship', () => {
    player.gameboard.placeShip(1, 2, 'col', player.gameboard.ships.destroyer);
    player.gameboard.receiveAttack(1, 2);
    player.gameboard.receiveAttack(2, 2);
    expect(player.gameboard.ships.destroyer.isSunk()).toBeTruthy();
  });
});

describe('player movement', () => {
  test("attack the other player's board succesfully", () => {
    cpu.gameboard.placeShip(1, 2, 'col', cpu.gameboard.ships.battleship);
    player.attack(1, 2, cpu);
    expect(cpu.gameboard.ships.battleship.hits).toBe(1);
  });

  test("tries to attack an already attacked square", () => {
    cpu.gameboard.placeShip(1, 2, 'col', cpu.gameboard.ships.battleship);
    player.attack(1, 2, cpu);
    player.attack(1, 2, cpu);
    expect(cpu.gameboard.ships.battleship.hits).toBe(1);
  });
});

describe('bot movement', () => {
  test("performs random attack on player's board", () => {
    const randomAttackSpy = jest.spyOn(cpu, 'randomAttack');
    cpu.attack(player);
    expect(randomAttackSpy).toHaveBeenCalled();
  });

  test("performs focused attack on player's board", () => {
    const focusedAttackSpy = jest.spyOn(cpu, 'focusedAttack');
    player.gameboard.ships.destroyer.hits = 0;
    player.gameboard.placeShip(0, 0, 'row', player.gameboard.ships.destroyer);
    player.gameboard.receiveAttack(0, 0);
    cpu.attack(player);
    expect(focusedAttackSpy).toHaveBeenCalled();
  });

  test("performs random attack for last attack sank player's ship", () => {
    const randomAttackSpy = jest.spyOn(cpu, 'randomAttack');
    player.gameboard.ships.destroyer.hits = 1;
    player.gameboard.attacked = [];
    player.gameboard.placeShip(0, 0, 'row', player.gameboard.ships.destroyer);
    player.gameboard.receiveAttack(0, 0);
    cpu.attack(player);
    expect(randomAttackSpy).toHaveBeenCalled();
  });
});

describe('game loop', () => {
  test('game is over because all player ships have been sunk', () => {
    let col = 0;
    for (const ship of Object.values(player.gameboard.ships)) {
      player.gameboard.placeShip(0, col, 'col', ship);
      col += 2;
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        player.gameboard.receiveAttack(j, i);
      }
    }
    expect(isGameOver()).toBeTruthy();
  });

  test('game is not over because not all ships have been sunk', () => {
    player.gameboard.ships.battleship.hits = 0;
    player.gameboard.placeShip(1, 2, 'col', player.gameboard.ships.battleship);
    player.gameboard.receiveAttack(1, 2);
    player.gameboard.receiveAttack(2, 2);
    player.gameboard.receiveAttack(3, 2);
    expect(isGameOver()).toBeFalsy();
  });
});