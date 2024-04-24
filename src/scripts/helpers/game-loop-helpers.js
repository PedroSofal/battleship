import Battle from '../screens/battle.js';
import Result from '../screens/result.js';
import GameAudio from './audio.js';
import Animation from './animations.js';
import Radar from './radar.js';
import Game from './game-control.js';
import Quote from './quote.js';
import BoardRender from './board-render.js';
import BoardHelper from './board-helpers.js';
import Settings from './settings.js';

export default class GameLoopHelper {
  static callClickAnimation(result, attackedHtmlSquare) {
    switch(result) {
      case 'miss':
      case 'close':
        Animation.displaySplash(attackedHtmlSquare);
        GameAudio.playSfx(GameAudio.miss);
        break;
      case 'hit':
        Animation.displayExplosion(attackedHtmlSquare);
        GameAudio.playSfx(GameAudio.hit);
        break;
      case 'sunk':
        GameAudio.playSfx(GameAudio.hit);
        setTimeout(() => {
          if (Game.gameOver()) {
            GameAudio.playSfx(GameAudio.lastSink);
          } else {
            GameAudio.playSfx(GameAudio.sink);
          }
        }, 300);
        break;
    }
  }

  static callShakeAnimation() {
    Animation.shake(Battle.wrapper);
  }

  static roundAftermath(player, attack) {
    const board = player.type === 'cpu' ? Battle.cpuBoard : Battle.humanBoard;
    const attackedHtmlSquare = BoardHelper.querySquareByCoords(board, attack.coords);

    BoardRender.updateBoard(Game.player1);
    BoardRender.updateBoard(Game.player2);
    BoardRender.showSunkenShips(player);
    GameLoopHelper.callClickAnimation(attack.className, attackedHtmlSquare);
  }

  static updateBattleQuote(attack, attacker, defender) {
    let quoteArray;
    let photo;
    const result = attack.className;
    const ship = attack.content !== 'water' ? attack.content : null;
    
    if (Math.random() < 0.5 && result !== 'sunk') return;
    const sayer = Math.random() < 0.5 ? 'attacker' : 'defender';

    if (sayer === 'attacker') {
      photo = attacker.char.src;
      switch(result) {
        case 'miss':
        case 'close':
          quoteArray = Quote.getOurMissQuote(attacker.char.name, ship, defender.char.name);
          break;
        case 'hit':
          quoteArray = Quote.getOurHitQuote(attacker.char.name, ship, defender.char.name);
          break;
        case 'sunk':
          quoteArray = Quote.getOurSinkQuote(attacker.char.name, ship, defender.char.name);
          break;
      }
    }

    if (sayer === 'defender') {
      photo = defender.char.src;
      switch(result) {
        case 'miss':
          quoteArray = Quote.getTheirMissQuote(defender.char.name, ship, attacker.char.name);
          break;
        case 'close':
          if (Radar.countermeasure) {
            quoteArray = Quote.getOurEscapeQuote(defender.char.name, ship, attacker.char.name);
          } else {
            quoteArray = Quote.getTheirMissQuote(defender.char.name, ship, attacker.char.name);
          }
          break;
        case 'hit':
          quoteArray = Quote.getTheirHitQuote(defender.char.name, ship, attacker.char.name);
          break;
        case 'sunk':
          quoteArray = Quote.getTheirSinkQuote(defender.char.name, ship, attacker.char.name);
          break;
      }
    }

    Settings.setLanguageDataAttributes(Battle.characterQuotes, quoteArray);
    const quote = Battle.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`);
    Animation.displayReaction(Battle.characterQuotes, quote, photo);
  }

  static preventSquareClick(square) {
    square.removeEventListener('click', Battle.handleClick);
  }

  static handleGameOver(winner) {
    GameAudio.playRadarLockInfiniteLoop('stop');
    Radar.radarLockScreen.classList.remove('lightUp');
    Result.init(winner);
    Battle.cpuBoard.querySelectorAll('.square').forEach(square => {
      GameLoopHelper.preventSquareClick(square);
    });
    Battle.cpuBoard.querySelectorAll('.ship__icon').forEach(ship => {
      ship.classList.add('revealed');
    });
  }
}