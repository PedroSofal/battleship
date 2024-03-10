export default class DOM {
  static loadedPlayerBoard = null;
  static loadedCpuBoard = null;

  static getPlayerBoard() {
    return DOM.loadedPlayerBoard;
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
    if (player.type === 'human') DOM.loadedPlayerBoard = boardContainer;
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
      const classListValue = `col square ${square.className}`;
      
      if (square.className === 'occupied'
      && player.type === 'cpu') {
        return;
      } else {
        grid[row][col].classList = classListValue;
      }
    });
  }
}