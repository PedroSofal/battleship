export default class DOM { 
  static gameboards = document.querySelector('#gameboards');
  
  static createBoard(player) {
    const boardContainer = document.createElement('div');
    const numberOfSquares = (player.gameboard.maxRow + 1) * (player.gameboard.maxCol + 1);

    for (let i = 0; i < numberOfSquares; i++) {
      const square = document.createElement('div');
      square.className = 'square';
      boardContainer.appendChild(square);
    }

    boardContainer.className = `board ${player.type}-board`;
    this.gameboards.appendChild(boardContainer);
  }
}