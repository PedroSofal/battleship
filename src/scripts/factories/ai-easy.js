import AI from './bot.js';

export default class AI_EASY extends AI {
  randomAttack() {
    this.aim = 'random';

    const row = this.gameboard.getRandomRow();
    const col = this.gameboard.getRandomCol();

    if (!this.isSquareAvailable(row, col)) {
      return this.randomAttack();
    }

    return this.enemy.gameboard.receiveAttack(row, col);
  }
}