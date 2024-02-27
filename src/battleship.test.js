import Player from "./player.js";
let player1;

beforeEach(() => {
  player1 = new Player();
});

describe('ship placement', () => {
  test('ship is placed on gameboard', () => {
    player1.gameboard.occupied = [];
    player1.gameboard.placeShip(0, 0, 'row', player1.gameboard.ships.battleship);
    expect(player1.gameboard.occupied).toEqual([
      {
        ship: player1.gameboard.ships.battleship,
        coords: [0, 0]
      },
      {
        ship: player1.gameboard.ships.battleship,
        coords: [1, 0]
      },
      {
        ship: player1.gameboard.ships.battleship,
        coords: [2, 0]
      },
      {
        ship: player1.gameboard.ships.battleship,
        coords: [3, 0]
      },
    ]);
  });

  test('ship is not placed on gameboard due to overlap', () => {
    player1.gameboard.occupied = [
      {
        ship: player1.gameboard.ships.battleship,
        coords: [1, 2]
      },
    ];
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.battleship);
    expect(player1.gameboard.occupied).toEqual([
      {
        ship: player1.gameboard.ships.battleship,
        coords: [1, 2]
      },
    ]);
  });

  test('ship is not placed on gameboard due to invalid coords (out of bounds)', () => {
    player1.gameboard.occupied = [];
    player1.gameboard.placeShip(9, 9, 'row', player1.gameboard.ships.battleship);
    expect(player1.gameboard.occupied).toEqual([]);
  });
});

describe('attack detection system', () => {
  test('attack hits ship', () => {
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.battleship);
    player1.gameboard.receiveAttack(1, 2);
    expect(player1.gameboard.ships.battleship.hits).toBe(1);
    expect(player1.gameboard.attacked).toEqual([
      {
        coords: [1, 2],
        result: 'hit'
      },
    ]);
  });

  test('attack hits sea', () => {
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.battleship);
    player1.gameboard.receiveAttack(5, 3);
    expect(player1.gameboard.ships.battleship.hits).toBe(0);
    expect(player1.gameboard.attacked).toEqual([
      {
        coords: [5, 3],
        result: 'miss'
      },
    ]);
  });

  test('attack sinks ship', () => {
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.destroyer);
    player1.gameboard.receiveAttack(1, 2);
    player1.gameboard.receiveAttack(2, 2);
    expect(player1.gameboard.ships.destroyer.isSunk()).toBeTruthy();
  });

  test('game is over because all ships have been sunk', () => {
    let col = 0;
    for (const ship of Object.values(player1.gameboard.ships)) {
      player1.gameboard.placeShip(0, col, 'row', ship);
      col++;
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        player1.gameboard.receiveAttack(j, i);
      }
    }
    expect(player1.gameboard.isGameOver()).toBeTruthy();
  });

  test('game is not over because not all ships have been sunk', () => {
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.battleship);
    player1.gameboard.receiveAttack(1, 2);
    player1.gameboard.receiveAttack(2, 2);
    player1.gameboard.receiveAttack(3, 2);
    expect(player1.gameboard.isGameOver()).toBeFalsy();
  });
});

describe('player move', () => {
  test("attack the other player's board succesfully", () => {
    const player2 = new Player();
    player2.gameboard.placeShip(1, 2, 'row', player2.gameboard.ships.battleship);
    player1.attack(1, 2, player2);
    expect(player2.gameboard.ships.battleship.hits).toBe(1);
  });

  test("tries to attack an already attacked square", () => {
    const player2 = new Player();
    player2.gameboard.placeShip(1, 2, 'row', player2.gameboard.ships.battleship);
    player1.attack(1, 2, player2);
    player1.attack(1, 2, player2);
    expect(player2.gameboard.ships.battleship.hits).toBe(1);
  });
});