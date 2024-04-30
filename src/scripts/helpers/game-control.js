import Player from '../factories/player.js';
import AI_EASY from '../factories/ai-easy.js';
import AI_MEDIUM from '../factories/ai-medium.js';
import AI_HARD from '../factories/ai-hard.js';
import BoardRender from './board-render.js';
import { charObjects } from '../factories/characters.js';

export default class Game {
  static player1 = null;
  static player2 = null;
  static turn = 1;

  static setPlayers() {
    const playerName = sessionStorage.getItem('player-name');
    const playerChar = charObjects[sessionStorage.getItem('player-char')];
    const cpuName = charObjects[sessionStorage.getItem('cpu-char')].name;
    const cpuChar = charObjects[sessionStorage.getItem('cpu-char')];

    const human = new Player(playerName, playerChar);
    Game.player1 = human;
    
    const cpu = new AI_HARD(cpuName, cpuChar, Game.player1);
    Game.player2 = cpu;
  }

  static newGame() {
    BoardRender.loadBoard(Game.player1);
    BoardRender.loadBoard(Game.player2);
  }

  static nextPlayer() {
    Game.turn = Game.turn === 1 ? 2 : 1;
  }

  static gameOver() {
    if (Game.player1.gameboard.areAllShipsSunk() || Game.player2.gameboard.areAllShipsSunk()) {
      return true;
    } else {
      return false;
    }
  }

  static init() {
    Game.setPlayers();
    Game.newGame();
  }
}