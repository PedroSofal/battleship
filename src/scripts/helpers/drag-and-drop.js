import BoardRender from './board-render.js';
import Game from './game-control.js';
import StrategyRoom from '../screens/strategy-room.js';
import BoardHelper from './board-helpers.js';

export default class DragAndDrop {
  static board = null;
  static fleet = null;
  static grid = [];
  static axis = 'row';
  static hoveredSquare = null;
  static selectedShip = null;
  static shipsPlaced = 0;
  static humanShipsPositions = {};

  static queryElements() {
    DragAndDrop.board = document.querySelector('#human-board');
    DragAndDrop.fleet = document.querySelector('#fleet');
  }

  static setEventListeners() {
    window.addEventListener('keypress', (e) => DragAndDrop.changeAxis(e.key));
    DragAndDrop.board.addEventListener('touchend', () => DragAndDrop.changeAxis());
    DragAndDrop.addFleetEventListeners();
    DragAndDrop.addBoardEventListeners();
  }

  static addFleetEventListeners() {
    const ships = Array.from(DragAndDrop.fleet.querySelectorAll('.ship__icon'));
    ships.forEach(ship => {
      ship.parentNode.addEventListener('dragstart', (e) => DragAndDrop.dragStart(e));
      ship.parentNode.addEventListener('dragend', (e) => DragAndDrop.dragEnd(e));
    });
  }

  static addBoardEventListeners() {
    const squares = Array.from(DragAndDrop.board.querySelectorAll('.square'));
    squares.forEach(square => {
      square.addEventListener('dragover', (e) => DragAndDrop.dragOver(e));
      square.addEventListener('dragleave', () => DragAndDrop.dragLeave());
      square.addEventListener('drop', (e) => DragAndDrop.drop(e));
    });
  }

  static dragStart(e) {
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.currentTarget);
    
    DragAndDrop.selectedShip = Object.values(Game.player1.gameboard.ships).find(ship => {
      return ship.name.en === e.currentTarget.querySelector('.ship__icon').id;
    });

    const shipDragClone = e.currentTarget.cloneNode(true);
    shipDragClone.classList.add('ship__drag--clone');
    
    const shipIcon = shipDragClone.querySelector('.ship__icon');
    if (DragAndDrop.axis === 'col') shipIcon.classList.add('rotated');

    document.body.appendChild(shipDragClone);
    e.dataTransfer.setDragImage(shipDragClone, 20, 20);
  }

  static dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
    document.body.removeChild(document.querySelector('.ship__drag--clone'));
    
    if (e.currentTarget.classList.contains('placed')) {
      e.currentTarget.removeAttribute('draggable');
      e.currentTarget.addEventListener('mousedown', (e) => e.preventDefault());
      StrategyRoom.updatePlaceShipQuote(e.currentTarget.firstChild.id);
    }
  }

  static drop(e) {
    e.preventDefault();
    let placedShip = false;

    if (DragAndDrop.hoveredSquare) {
      placedShip = Game.player1.gameboard.placeShip(
        DragAndDrop.hoveredSquare[0], DragAndDrop.hoveredSquare[1], DragAndDrop.axis, DragAndDrop.selectedShip
      );
    }

    if (placedShip) {
      const draggingShip = document.querySelector('.dragging');
      const shipName = DragAndDrop.selectedShip.name.en;
      if (DragAndDrop.axis === 'col') draggingShip.classList.add('rotated');

      DragAndDrop.savePosition(shipName);

      draggingShip.classList.add('placed');
      e.target.appendChild(draggingShip);
      
      DragAndDrop.shipsPlaced++;
      StrategyRoom.resetBtn.disabled = false;

      if (DragAndDrop.shipsPlaced === DragAndDrop.fleet.children.length) {
        DragAndDrop.board.classList.add('active');
        localStorage.setItem('humanShipsPositions', JSON.stringify(DragAndDrop.humanShipsPositions));
        StrategyRoom.confirmBtn.disabled = false;
      }
    }

    BoardRender.updateBoard(Game.player1);
  }

  static dragOver(e) {
    e.preventDefault();
    DragAndDrop.hoveredSquare = BoardHelper.extractIndicesFromGrid(DragAndDrop.grid, e.target);
    if (DragAndDrop.hoveredSquare) {
      const allowedPlacement = Game.player1.gameboard.verifySquareAvailability(
        DragAndDrop.hoveredSquare[0], DragAndDrop.hoveredSquare[1], DragAndDrop.axis, DragAndDrop.selectedShip
      );

      for (let i = 0; i < DragAndDrop.selectedShip.size; i++) {
        let row = DragAndDrop.hoveredSquare[0];
        let col = DragAndDrop.hoveredSquare[1];
        DragAndDrop.axis === 'row' ? col += i : row += i;

        if (row > DragAndDrop.grid.length - 1 || col > DragAndDrop.grid[0].length - 1) {
          break;
        }

        if (allowedPlacement) {
          DragAndDrop.grid[row][col].htmlElement.classList.add('dragover--allowed-placement');
        } else {
          DragAndDrop.grid[row][col].htmlElement.classList.add('dragover--not-allowed-placement');
        }
      }
    }
  }

  static dragLeave() {
    for (let i = 0; i < DragAndDrop.grid.length; i++) {
      for (let j = 0; j < DragAndDrop.grid[i].length; j++) {
        DragAndDrop.grid[i][j].htmlElement.classList.remove('dragover--allowed-placement');
        DragAndDrop.grid[i][j].htmlElement.classList.remove('dragover--not-allowed-placement');
      }
    }
  }

  static changeAxis(key) {
    function setAxisToX() {
      DragAndDrop.axis = 'row';
      DragAndDrop.board.setAttribute('data-activeAxis', 'x');
    }

    function setAxisToY() {
      DragAndDrop.axis = 'col';
      DragAndDrop.board.setAttribute('data-activeAxis', 'y');
    }

    if (key) {
      if (key === 'x') setAxisToX();
      if (key === 'z') setAxisToY();
    } else {
      DragAndDrop.axis === 'col' ? setAxisToX() : setAxisToY();
    }
  }

  static savePosition(shipName) {
    const row = DragAndDrop.hoveredSquare[0];
    const col = DragAndDrop.hoveredSquare[1];
    const axis = DragAndDrop.axis;
    DragAndDrop.humanShipsPositions[shipName] = {
      row, col, axis,
    }
  }

  static init() {
    DragAndDrop.queryElements();
    DragAndDrop.grid = BoardHelper.objectsGridFromHTMLBoard(DragAndDrop.board);
    DragAndDrop.shipsPlaced = 0;
    DragAndDrop.setEventListeners();
  }
}