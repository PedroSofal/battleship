import Game from "./gameHelpers.js";
import Player from "./player.js";
import Bot from "./bot.js";
import DOM from "./DOM";

jest.mock("./DOM");

const game = new Game();
game.addPlayer(new Player('Jack Sparrow', 'human'));
game.addPlayer(new Bot('Dave Jones', 'bot'));
const player1 = game.players[0];
const player2 = game.players[1];

beforeEach(() => {
  player1.gameboard.occupied = [];
  player2.gameboard.occupied = [];
});

describe('ship placement', () => {
  test('ship is placed on gameboard', () => {
    player1.gameboard.placeShip(0, 0, 'row', player1.gameboard.ships.battleship);
    expect(player1.gameboard.occupied).toEqual([
      {
        ship: player1.gameboard.ships.battleship,
        coords: [0, 0],
        class: 'occupied',
      },
      {
        ship: player1.gameboard.ships.battleship,
        coords: [1, 0],
        class: 'occupied',
      },
      {
        ship: player1.gameboard.ships.battleship,
        coords: [2, 0],
        class: 'occupied',
      },
      {
        ship: player1.gameboard.ships.battleship,
        coords: [3, 0],
        class: 'occupied',
      },
    ]);
  });

  test('ship is not placed on gameboard due to overlap', () => {
    player1.gameboard.occupied = [
      {
        ship: player1.gameboard.ships.battleship,
        coords: [1, 2],
        class: 'occupied',
      },
    ];
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.battleship);
    expect(player1.gameboard.occupied).toEqual([
      {
        ship: player1.gameboard.ships.battleship,
        coords: [1, 2],
        class: 'occupied',
      },
    ]);
  });

  test('ship is not placed on gameboard due to invalid coords (out of bounds)', () => {
    player1.gameboard.placeShip(9, 9, 'row', player1.gameboard.ships.battleship);
    expect(player1.gameboard.occupied).toEqual([]);
  });
});

describe('attack detection system', () => {
  test('attack hits ship', () => {
    player1.gameboard.ships.battleship.hits = 0;
    player1.gameboard.attacked = [];
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.battleship);
    player1.gameboard.receiveAttack(1, 2);
    expect(player1.gameboard.ships.battleship.hits).toBe(1);
    expect(player1.gameboard.attacked).toEqual([
      {
        coords: [1, 2],
        result: 'hit',
        class: 'hit',
      },
    ]);
  });

  test('attack hits sea', () => {
    player1.gameboard.ships.battleship.hits = 0;
    player1.gameboard.attacked = [];
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.battleship);
    player1.gameboard.receiveAttack(5, 3);
    expect(player1.gameboard.ships.battleship.hits).toBe(0);
    expect(player1.gameboard.attacked).toEqual([
      {
        coords: [5, 3],
        result: 'miss',
        class: 'miss',
      },
    ]);
  });

  test('attack sinks ship', () => {
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.destroyer);
    player1.gameboard.receiveAttack(1, 2);
    player1.gameboard.receiveAttack(2, 2);
    expect(player1.gameboard.ships.destroyer.isSunk()).toBeTruthy();
  });
});

describe('player movement', () => {
  test("attack the other player's board succesfully", () => {
    player2.gameboard.placeShip(1, 2, 'row', player2.gameboard.ships.battleship);
    player1.attack(1, 2, player2);
    expect(player2.gameboard.ships.battleship.hits).toBe(1);
  });

  test("tries to attack an already attacked square", () => {
    player2.gameboard.placeShip(1, 2, 'row', player2.gameboard.ships.battleship);
    player1.attack(1, 2, player2);
    player1.attack(1, 2, player2);
    expect(player2.gameboard.ships.battleship.hits).toBe(1);
  });
});

describe('bot movement', () => {
  test("performs random attack on player1's board", () => {
    player1.gameboard.attacked = [];
    player2.attack(player1);
    expect(player1.gameboard.attacked.length).not.toBe(0);
  });

  test("performs smart attack on player1's board within boundaries", () => {
    player1.gameboard.ships.destroyer.hits = 0;
    player1.gameboard.attacked = [];
    player1.gameboard.placeShip(0, 0, 'row', player1.gameboard.ships.destroyer);
    player1.gameboard.receiveAttack(0, 0);
    player2.attack(player1);
    expect(player1.gameboard.attacked[1].coords[0]).toBeLessThanOrEqual(1);
    expect(player1.gameboard.attacked[1].coords[0]).toBeGreaterThanOrEqual(0);
    expect(player1.gameboard.attacked[1].coords[1]).toBeLessThanOrEqual(1);
    expect(player1.gameboard.attacked[1].coords[1]).toBeGreaterThanOrEqual(0);
  });

  test("performs random attack for last attack sank player1's ship", () => {
    const randomAttackSpy = jest.spyOn(player2, 'randomAttack');
    player1.gameboard.ships.destroyer.hits = 1;
    player1.gameboard.attacked = [];
    player1.gameboard.placeShip(0, 0, 'row', player1.gameboard.ships.destroyer);
    player1.gameboard.receiveAttack(0, 0);
    player2.attack(player1);
    expect(randomAttackSpy).toHaveBeenCalled();
  });
});

describe('game loop', () => {
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
    expect(game.gameOver()).toBeTruthy();
  });

  test('game is not over because not all ships have been sunk', () => {
    player1.gameboard.ships.battleship.hits = 0;
    player1.gameboard.placeShip(1, 2, 'row', player1.gameboard.ships.battleship);
    player1.gameboard.receiveAttack(1, 2);
    player1.gameboard.receiveAttack(2, 2);
    player1.gameboard.receiveAttack(3, 2);
    expect(game.gameOver()).toBeFalsy();
  });
});