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

    DragAndDrop.addFleetEventListeners();
    DragAndDrop.addBoardEventListeners();
  }

  static gridFromHtmlSquares(squares) {
    const matrix = Array.from(squares).map(row => Array.from(row.children)).flat();

    for (let i = 0; i < matrix.length; i++) {
      const row = Array.from(matrix[i].children);
      DragAndDrop.grid.push([]);
      for (let j = 0; j < row.length; j++) {
        DragAndDrop.grid[i].push({
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
    const squares = DragAndDrop.board.firstChild.querySelectorAll('.square');
    return Array.from(squares);
  }

  static getShipsFromFleet() {
    const ships = DragAndDrop.fleet.querySelectorAll('.ship__icon');
    return Array.from(ships);
  }

  static addFleetEventListeners() {
    const ships = DragAndDrop.getShipsFromFleet();
    ships.forEach(ship => {
      ship.parentNode.addEventListener('dragstart', (e) => DragAndDrop.dragStart(e));
      ship.parentNode.addEventListener('dragend', (e) => DragAndDrop.dragEnd(e));
    });
  }

  static addBoardEventListeners() {
    const squares = DragAndDrop.getSquaresFromBoard();
    squares.forEach(square => {
      square.addEventListener('dragover', (e) => DragAndDrop.dragOver(e));
      square.addEventListener('dragleave', () => DragAndDrop.dragLeave());
      square.addEventListener('drop', (e) => DragAndDrop.drop(e));
    });
  }

  static dragStart(e) {
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.currentTarget);
    
    DragAndDrop.selectedShip = Object.values(Game.players[0].gameboard.ships).find(ship => {
      return ship.name === e.currentTarget.querySelector('.ship__icon').id;
    });

    const shipDragClone = e.currentTarget.cloneNode(true);
    shipDragClone.classList.add('ship__drag--clone');
    
    const shipIcon = shipDragClone.querySelector('.ship__icon');
    if (DragAndDrop.axis === 'col') shipIcon.classList.add('drag-image-rotated');

    document.body.appendChild(shipDragClone);
    e.dataTransfer.setDragImage(shipDragClone, 20, 20);
  }

  static drop(e) {
    e.preventDefault();
    let placedShip = false;

    if (DragAndDrop.hoveredSquare) {
      placedShip = Game.players[0].gameboard.placeShip(
        DragAndDrop.hoveredSquare[0], DragAndDrop.hoveredSquare[1], DragAndDrop.axis, DragAndDrop.selectedShip
      );
    }

    if (placedShip) {
      sessionStorage.setItem(DragAndDrop.selectedShip.name + '-row', DragAndDrop.hoveredSquare[0]);
      sessionStorage.setItem(DragAndDrop.selectedShip.name + '-col', DragAndDrop.hoveredSquare[1]);
      sessionStorage.setItem(DragAndDrop.selectedShip.name + '-axis', DragAndDrop.axis);
      if (DragAndDrop.axis === 'col') document.querySelector('.dragging').style.transform = 'rotateZ(90deg)'
      e.target.appendChild(document.querySelector('.dragging'));
      DragAndDrop.shipsPlaced++;
    }

    DOM.updateBoard(Game.players[0]);
  }

  static dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
    e.currentTarget.removeAttribute('draggable');
    e.currentTarget.addEventListener('mousedown', (e) => e.preventDefault());
    document.body.removeChild(document.querySelector('.ship__drag--clone'));
  }

  static dragOver(e) {
    e.preventDefault();
    DragAndDrop.hoveredSquare = DragAndDrop.extractIndicesFromGrid(DragAndDrop.grid, e.target);
    
    if (DragAndDrop.hoveredSquare) {
      for (let i = 0; i < DragAndDrop.selectedShip.size; i++) {
        let row = DragAndDrop.hoveredSquare[0];
        let col = DragAndDrop.hoveredSquare[1];
        DragAndDrop.axis === 'row' ? col += i : row += i;
        if (row > DragAndDrop.grid.length - 1 || col > DragAndDrop.grid[0].length - 1) {
          break;
        }
  
        DragAndDrop.grid[row][col].htmlElement.classList.add('dragover');
      }
    }
  }

  static dragLeave() {
    for (let i = 0; i < DragAndDrop.grid.length; i++) {
      for (let j = 0; j < DragAndDrop.grid[i].length; j++) {
        DragAndDrop.grid[i][j].htmlElement.classList.remove('dragover');
      }
    }
  }

  static init() {
    DragAndDrop.gridFromHtmlSquares(DragAndDrop.board.children);
    DragAndDrop.setEventListeners();
  }
}