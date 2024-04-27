import BoardRender from './board-render.js';
import Game from './game-control.js';
import StrategyRoom from '../screens/strategy-room.js';
import BoardHelper from './board-helpers.js';

export default class DragAndDrop {
  static board = document.querySelector('#strategy-board');
  static fleet = document.querySelector('#fleet');
  static grid = [];
  static axis = 'row';
  static hoveredSquare = null;
  static selectedShip = null;
  static shipsPlaced = 0;

  static setEventListeners() {
    window.addEventListener('keypress', (e) => DragAndDrop.changeAxis(e.key));
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

      sessionStorage.setItem(shipName + '-row', DragAndDrop.hoveredSquare[0]);
      sessionStorage.setItem(shipName + '-col', DragAndDrop.hoveredSquare[1]);
      sessionStorage.setItem(shipName + '-axis', DragAndDrop.axis);

      draggingShip.classList.add('placed');
      e.target.appendChild(draggingShip);
      
      DragAndDrop.shipsPlaced++;
      if (DragAndDrop.shipsPlaced === DragAndDrop.fleet.children.length) {
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
    if (key === 'x') {
      DragAndDrop.axis = 'row';
      DragAndDrop.board.setAttribute('data-activeAxis', 'x');
    }

    if (key === 'z') {
      DragAndDrop.axis = 'col';
      DragAndDrop.board.setAttribute('data-activeAxis', 'y');
    }
  }

  static init() {
    DragAndDrop.grid = BoardHelper.objectsGridFromHtmlSquares(DragAndDrop.board.children);
    DragAndDrop.shipsPlaced = 0;
    DragAndDrop.setEventListeners();
  }
}