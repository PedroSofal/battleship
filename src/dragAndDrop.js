import DOM from "./DOM.js";
import Game from "./gameControl.js";

export default class DragAndDrop {
  static board = document.querySelector('#strategy-board');
  static fleet = document.querySelector('#fleet');
  static grid = [];
  static axis = 'row';
  static hoveredSquare = null;
  static selectedShip = null;
  static shipsPlaced = 0;

  static setEventListeners() {
    window.addEventListener('keypress', function handleWheelScroll(e) {
      if (e.key === 'x') {
        DragAndDrop.axis = 'row';
      }

      if (e.key === 'z') {
        DragAndDrop.axis = 'col';
      }
    });

    this.addFleetEventListeners();
    this.addBoardEventListeners();
  }

  static gridFromHtmlSquares(squares) {
    const matrix = Array.from(squares).map(row => Array.from(row.children)).flat();

    for (let i = 0; i < matrix.length; i++) {
      const row = Array.from(matrix[i].children);
      this.grid.push([]);
      for (let j = 0; j < row.length; j++) {
        this.grid[i].push({
          coords: [i, j],
          htmlElement: row[j],
        });
      }
    }
  }

  static extractIndicesFromGrid(grid, target) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j].htmlElement === target) {
          return [i, j];
        }
      }
    }
  }

  static getSquaresFromBoard() {
    const squares = this.board.firstChild.querySelectorAll('.square');
    return Array.from(squares);
  }

  static getShipsFromFleet() {
    const ships = this.fleet.querySelectorAll('.ship__icon');
    return Array.from(ships);
  }

  static addFleetEventListeners() {
    const ships = this.getShipsFromFleet();
    ships.forEach(ship => {
      ship.addEventListener('dragstart', (e) => this.dragStart(e));
      ship.addEventListener('dragend', (e) => this.dragEnd(e));
    });
  }

  static addBoardEventListeners() {
    const squares = this.getSquaresFromBoard();
    squares.forEach(square => {
      square.addEventListener('dragover', (e) => this.dragOver(e));
      square.addEventListener('dragleave', () => this.dragLeave());
    });
  }

  static dragStart(e) {
    e.currentTarget.classList.add('dragging');

    this.selectedShip = Object.values(Game.players[0].gameboard.ships).find(ship => {
      return ship.name === e.currentTarget.id;
    });
  }

  static dragEnd(e) {
    e.target.classList.remove('dragging');
    
    const placedShip = Game.players[0].gameboard.placeShip(
      this.hoveredSquare[0], this.hoveredSquare[1], this.axis, this.selectedShip
    );

    if (placedShip) {
      e.target.classList.add('placed');
      this.shipsPlaced++;
    }
    DOM.updateBoard(Game.players[0]);
  }

  static dragOver(e) {
    this.hoveredSquare = this.extractIndicesFromGrid(this.grid, e.target);

    for (let i = 0; i < this.selectedShip.size; i++) {
      let row = this.hoveredSquare[0];
      let col = this.hoveredSquare[1];
      this.axis === 'row' ? col += i : row += i;
      if (row > this.grid.length - 1 || col > this.grid[0].length - 1) {
        break;
      }

      this.grid[row][col].htmlElement.classList.add('dragover');
    }
  }

  static dragLeave() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        this.grid[i][j].htmlElement.classList.remove('dragover');
      }
    }
  }

  static init() {
    this.gridFromHtmlSquares(this.board.children);
    this.setEventListeners();
  }
}