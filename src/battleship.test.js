import { battleship } from "./ship.js";
import Gameboard from "./gameboard.js";
let testBoard;

describe('ship placement', () => {
  beforeEach(() => {
    testBoard = new Gameboard(10, 10, [battleship]);
  })

  test('ship is placed on gameboard', () => {
    testBoard.occupied = [];
    testBoard.placeShip(0, 0, 'row', testBoard.ships[0]);
    expect(testBoard.occupied).toEqual([
      {
        ship: battleship,
        coords: [0, 0]
      },
      {
        ship: battleship,
        coords: [1, 0]
      },
      {
        ship: battleship,
        coords: [2, 0]
      },
      {
        ship: battleship,
        coords: [3, 0]
      },
    ]);
  });

  test('ship is not placed on gameboard due to overlap', () => {
    testBoard.occupied = [
      {
        ship: battleship,
        coords: [1, 2]
      },
    ];
    testBoard.placeShip(1, 2, 'row', testBoard.ships[0]);
    expect(testBoard.occupied).toEqual([
      {
        ship: battleship,
        coords: [1, 2]
      },
    ]);
  });

  test('ship is not placed on gameboard due to invalid coords (out of bounds)', () => {
    testBoard.occupied = [];
    testBoard.placeShip(9, 9, 'row', testBoard.ships[0]);
    expect(testBoard.occupied).toEqual([]);
  });
});

describe('attack detection system', () => {
  beforeEach(() => {
    testBoard = new Gameboard(10, 10, [battleship]);
    testBoard.occupied = [];
    testBoard.attacked = [];
    battleship.hits = 0;
  });

  test('attack hits ship', () => {
    testBoard.placeShip(1, 2, 'row', testBoard.ships[0]);
    testBoard.receiveAttack(1, 2);
    expect(battleship.hits).toBe(1);
    expect(testBoard.attacked).toEqual([
      {
        coords: [1, 2],
        result: 'hit'
      },
    ]);
  });

  test('attack hits sea', () => {
    testBoard.placeShip(1, 2, 'row', testBoard.ships[0]);
    testBoard.receiveAttack(5, 3);
    expect(battleship.hits).toBe(0);
    expect(testBoard.attacked).toEqual([
      {
        coords: [5, 3],
        result: 'miss'
      },
    ]);
  });

  test('game is over because all ships have been sunk', () => {
    testBoard.placeShip(1, 2, 'row', testBoard.ships[0]);
    testBoard.receiveAttack(1, 2);
    testBoard.receiveAttack(2, 2);
    testBoard.receiveAttack(3, 2);
    testBoard.receiveAttack(4, 2);
    expect(testBoard.isGameOver()).toBeTruthy();
  });

  test('game is not over because not all ships have been sunk', () => {
    testBoard.placeShip(1, 2, 'row', testBoard.ships[0]);
    testBoard.receiveAttack(1, 2);
    testBoard.receiveAttack(2, 2);
    testBoard.receiveAttack(3, 2);
    expect(testBoard.isGameOver()).toBeFalsy();
  });
});