export default class DOM {
  static loadedPlayerBoard = null;
  static loadedCpuBoard = null;

  static gameboards = document.querySelector('#gameboards');

  static getPlayerBoard() {
    return this.loadedPlayerBoard;
  }

  static getCpuBoard() {
    return this.loadedCpuBoard;
  }

  static startBattle() {
    gameboards.appendChild(DOM.getPlayerBoard());
    gameboards.appendChild(DOM.getCpuBoard());
  }
  
  static loadBoard(player, eventCallback) {
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
  
        if (eventCallback) {
          const clickHandler = this.createClickHandler(i, j, player, eventCallback);
          boardCol.addEventListener('click', clickHandler);
        }
  
        boardRow.appendChild(boardCol);
      }
    }
  
    boardContainer.className = `board ${player.type}-board`;
    if (player.type === 'human') this.loadedPlayerBoard = boardContainer;
    if (player.type === 'bot') this.loadedCpuBoard = boardContainer;
  }
  
  static createClickHandler(i, j, player, eventCallback) {
    return function handleClick() {
      eventCallback(i, j, player);
      this.removeEventListener('click', handleClick);
    };
  }  

  static gridFromHtmlSquares(squares) {
    const rows = Array.from(squares);
    const grid = [];
    rows.forEach(row => grid.push(Array.from(row.children)));
    return grid;
  }

  static updateBoard(player) {
    const gameboard = document.querySelector(`.${player.type}-board`);
    const grid = this.gridFromHtmlSquares(gameboard.children);

    player.gameboard.squares.forEach(square => {
      const row = square.coords[0];
      const col = square.coords[1];
      const classListValue = `col square ${square.className}`;
      
      if (square.className === 'occupied'
      && player.type === 'bot') {
        return;
      } else {
        grid[row][col].classList = classListValue;
      }
    });
  }
}