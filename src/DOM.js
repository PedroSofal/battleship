import { playerPlays } from "./gameControl.js";

export default class DOM {
  static gameboards = document.querySelector('#gameboards');
  
  static createBoard(player) {
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
  
        if (player.type === 'bot') {
          const clickHandler = this.createClickHandler(i, j, player);
          boardCol.addEventListener('click', clickHandler);
        }
  
        boardRow.appendChild(boardCol);
      }
    }
  
    boardContainer.className = `board ${player.type}-board`;
    this.gameboards.appendChild(boardContainer);
  }
  
  static createClickHandler(i, j, player) {
    return function handleClick() {
      playerPlays(i, j, player);
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
      this.setClass(grid, square);
    });

    if (player.type === 'bot') return;

    player.gameboard.squares.forEach(occupiedSquare => {
      this.setClass(grid, occupiedSquare);
    });
  }

  static setClass(grid, square) {
    const row = square.coords[0];
    const col = square.coords[1];
    grid[row][col].classList.add(`${square.className}`);
  }
}