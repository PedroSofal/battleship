import AI from './bot.js';

export default class AI_MEDIUM extends AI {
  randomAttack() {
    this.aim = 'random';
  
    const row = this.gameboard.getRandomRow();
    const col = this.gameboard.getRandomCol();
  
    if (!this.isSquareAvailable(row, col)) {
      return this.randomAttack();
    }

    if (!this.areAdjacenciesAvailable(row, col)) {
      return this.randomAttack();
    }
  
    return this.enemy.gameboard.receiveAttack(row, col);
  }

  areAdjacenciesAvailable(row, col) {
    const searchArea = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]
  
    for (const coords of searchArea) {
      const searchedSquare = this.enemy.gameboard.squares.find(square => {
        return JSON.stringify(square.coords) === JSON.stringify([...coords]);
      });
      
      if (searchedSquare) {
        if (searchedSquare.content !== 'water' && searchedSquare.attacked) {
          return false;
        }
      }
    }
    return true;
  }
}