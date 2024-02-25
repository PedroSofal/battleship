import { testShip } from "./ship.js";
import { testBoard } from "./gameboard.js";

describe('ship placement', () => {
  test('ship is placed on gameboard', () => {
    testBoard.occupied = [];
    testBoard.placeShip(0, 0, 'row', testShip);
    expect(testBoard.occupied).toEqual([
      {
        ship: testShip,
        coords: [0, 0]
      },
      {
        ship: testShip,
        coords: [1, 0]
      },
      {
        ship: testShip,
        coords: [2, 0]
      },
      {
        ship: testShip,
        coords: [3, 0]
      },
    ]);
  });

  test('ship is not placed on gameboard due to overlap', () => {
    testBoard.occupied = [
      {
        ship: testShip,
        coords: [1, 2]
      },
    ];
    testBoard.placeShip(1, 2, 'row', testShip);
    expect(testBoard.occupied).toEqual([
      {
        ship: testShip,
        coords: [1, 2]
      },
    ]);
  });

  test('ship is not placed on gameboard due to invalid coords (out of bounds)', () => {
    testBoard.occupied = [];
    testBoard.placeShip(9, 9, 'row', testShip);
    expect(testBoard.occupied).toEqual([]);
  });
});

describe('attack detection system', () => {
  test('attack hits ship', () => {
    testBoard.occupied = [];
    testBoard.attacked = [];
    testShip.hits = 0;
    testBoard.placeShip(1, 2, 'row', testShip);
    testBoard.receiveAttack(1, 2);
    expect(testShip.hits).toBe(1);
    expect(testBoard.attacked).toEqual([
      {
        coords: [1, 2],
        result: 'hit'
      },
    ]);
  });

  test('attack hits sea', () => {
    testBoard.occupied = [];
    testBoard.attacked = [];
    testShip.hits = 0;
    testBoard.placeShip(1, 2, 'row', testShip);
    testBoard.receiveAttack(5, 3);
    expect(testShip.hits).toBe(0);
    expect(testBoard.attacked).toEqual([
      {
        coords: [5, 3],
        result: 'miss'
      },
    ]);
  });
})