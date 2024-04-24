import Game from './game-control.js';
import GameLoopHelper from './game-loop-helpers.js';
import Radar from './radar.js';
import Settings from './settings.js';

export default class GameLoop {
  static playerPlays(row, col, e) {
    if (Game.gameOver() || Game.turn !== 1) return;
    
    const attack = Game.player1.attack(row, col, Game.player2);
    const delay = attack.className === 'sunk' ? 1000 : 0;

    GameLoopHelper.roundAftermath(Game.player2, attack);
    GameLoopHelper.preventSquareClick(e.target);
    Game.nextPlayer();

    if (Game.gameOver()) {
      GameLoopHelper.handleGameOver(Game.player1);
      return;
    }

    setTimeout(() => {
      GameLoop.botPlays();
    }, delay);

    setTimeout(() => {
      GameLoopHelper.updateBattleQuote(attack, Game.player1, Game.player2);
    }, Settings.getGameSpeed().showQuote);
  }
  
  static botPlays() {
    if (Game.turn !== 2) return;
    const attack = Game.player2.attack(Game.player1);

    setTimeout(() => {
      Radar.triggerRadar(attack);
    }, Settings.getGameSpeed().triggerRadar);

    setTimeout(() => {
      Radar.resolveRadarAlert(attack.className);
      GameLoopHelper.roundAftermath(Game.player1, attack);
      
      if (attack.className === 'hit' || attack.className === 'sunk') {
        GameLoopHelper.callShakeAnimation();
      }

      if (Game.gameOver()) {
        GameLoopHelper.handleGameOver(Game.player2);
        return;
      }

      Game.nextPlayer();
    }, Settings.getGameSpeed().triggerRadar + Settings.getGameSpeed().shotDrop);

    setTimeout(() => {
      GameLoopHelper.updateBattleQuote(attack, Game.player2, Game.player1);
    }, Settings.getGameSpeed().triggerRadar + Settings.getGameSpeed().shotDrop + Settings.getGameSpeed().showQuote);

  }
}