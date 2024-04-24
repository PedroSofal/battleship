export default class DOM {
  static loadedHumanBoard = null;
  static loadedCpuBoard = null;

  static getHumanBoard() {
    return DOM.loadedHumanBoard;
  }

  static getCpuBoard() {
    return DOM.loadedCpuBoard;
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
    if (player.type === 'human') DOM.loadedHumanBoard = boardContainer;
    if (player.type === 'cpu') DOM.loadedCpuBoard = boardContainer;
  }

  static gridFromHtmlSquares(squares) {
    const rows = Array.from(squares);
    const grid = [];
    rows.forEach(row => grid.push(Array.from(row.children)));
    return grid;
  }

  static updateBoard(player) {
    const gameboard = document.querySelector(`.${player.type}-board`);
    const grid = DOM.gridFromHtmlSquares(gameboard.children);

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