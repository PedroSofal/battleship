import { testShip } from "./ship.js";
import { testBoard } from "./gameboard.js";

test('ship is placed on gameboard', () => {
  testBoard.occupied = [];
  testBoard.placeShip(0, 0, 'row', testShip);
  expect(testBoard.occupied).toEqual([[0, 0], [1, 0], [2, 0], [3, 0]]);
});

test('ship is not placed on gameboard due to overlap', () => {
  testBoard.occupied = [[1, 1], [1, 2], [1, 3]];
  testBoard.placeShip(1, 2, 'row', testShip);
  expect(testBoard.occupied).toEqual([[1, 1], [1, 2], [1, 3]]);
});

test('ship is not placed on gameboard due to invalid coords (out of bounds)', () => {
  testBoard.occupied = [];
  testBoard.placeShip(9, 9, 'row', testShip);
  expect(testBoard.occupied).toEqual([]);
});