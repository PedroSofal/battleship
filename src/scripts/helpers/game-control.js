import Player from '../factories/player.js';
import Bot from '../factories/bot.js';
import BoardRender from './board-render.js';
import { charObjects } from '../factories/characters.js';

export default class Game {
  static players = [];
  static turn = 0;

  static setPlayers() {
    const playerName = sessionStorage.getItem('player-name');
    const playerChar = charObjects[sessionStorage.getItem('player-char')];
    const cpuName = charObjects[sessionStorage.getItem('cpu-char')].name;
    const cpuChar = charObjects[sessionStorage.getItem('cpu-char')];

    const player = new Player(playerName, playerChar);
    const cpu = new Bot(cpuName, cpuChar);

    Game.players.push(player);
    Game.players.push(cpu);
  }

  static newGame() {
    BoardRender.loadBoard(Game.players[0]);
    BoardRender.loadBoard(Game.players[1]);
  }

  static nextPlayer() {
    Game.turn = Game.turn === 0 ? 1 : 0;
  }

  static gameOver() {
    let isGameOver = false;
    Game.players.forEach(player => {
      if (player.gameboard.areAllShipsSunk()) {
        isGameOver = true;
      }
    });
    return isGameOver;
  }

  static init() {
    Game.setPlayers();
    Game.newGame();
  }
}