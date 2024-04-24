import BoardHelper from './board-helpers.js';

export default class BoardRender {
  static loadedHumanBoard = null;
  static loadedCpuBoard = null;

  static getHumanBoard() {
    return BoardRender.loadedHumanBoard;
  }

  static getCpuBoard() {
    return BoardRender.loadedCpuBoard;
  }
  
  static loadBoard(player) {
    const boardContainer = document.createElement('div');
    const numberOfRows = player.gameboard.maxRow + 1;
    const numberOfCols = player.gameboard.maxCol + 1;
  
    for (let i = 0; i < numberOfRows; i++) {
      const boardRow = document.createElement('div');
      boardRow.className = 'row';
      boardContainer.appendChild(boardRow);
  
      for (let j = 0; j < numberOfCols; j++) {
        const boardCol = document.createElement('div');
        boardCol.className = 'col square';
        boardRow.appendChild(boardCol);
      }
    }
  
    boardContainer.className = `board ${player.type}-board`;
    if (player.type === 'human') BoardRender.loadedHumanBoard = boardContainer;
    if (player.type === 'cpu') BoardRender.loadedCpuBoard = boardContainer;
  }

  static updateBoard(player) {
    const gameboard = document.querySelector(`.${player.type}-board`);
    const grid = BoardHelper.gridFromHtmlSquares(gameboard.children);

    player.gameboard.squares.forEach(square => {
      const row = square.coords[0];
      const col = square.coords[1];
      let classListValue = `col square`;
      if (square.className) classListValue += ` ${square.className}`;
      
      if (square.className === 'occupied'
      && player.type === 'cpu') {
        return;
      } else {
        grid[row][col].classList = classListValue;
      }
    });
  }

  static showSunkenShips(player) {
    const board = document.querySelector(`#${player.type}-board`);
    const shipIcons = board.querySelectorAll('.ship__icon');
    const shipObjects = player.gameboard.ships;

    for (const ship of Object.values(shipObjects)) {
      if (ship.isSunk()) {
        const sunkShipIcon = Array.from(shipIcons).find(element => element.id === ship.name.en);
        sunkShipIcon.classList.add('sunken');
      }
    }
  }
}