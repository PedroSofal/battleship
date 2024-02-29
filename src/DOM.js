import { game } from './gameLoop.js';

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
        if (player.type === 'bot') boardCol.onclick = () => this.handleClick(i, j, player);
        boardRow.appendChild(boardCol);
      }
    }

    boardContainer.className = `board ${player.type}-board`;
    this.gameboards.appendChild(boardContainer);
  }

  static gridFromHtmlSquares(gameboard) {
    const rows = Array.from(gameboard.children);
    const grid = [];
    rows.forEach(row => grid.push(Array.from(row.children)));
    return grid;
  }

  static handleClick(row, col, enemy) {
    game.players[0].attack(row, col, enemy);
    this.updateBoard(enemy);
  }

  static updateBoard(player) {
    const gameboard = document.querySelector(`.${player.type}-board`);
    const grid = this.gridFromHtmlSquares(gameboard);

    player.gameboard.attacked.forEach(attackedSquare => {
      this.setClass(grid, attackedSquare);
    });

    if (player.type === 'bot') return;

    player.gameboard.occupied.forEach(occupiedSquare => {
      this.setClass(grid, occupiedSquare);
    });
  }

  static setClass(grid, squareStatus) {
    const row = squareStatus.coords[0];
    const col = squareStatus.coords[1];
    grid[row][col].classList.add(`${squareStatus.class}`);
  }
}