import Result from './result.js';
import GameAudio from './audio.js';
import Animation from './animations.js';
import Radar from './radar.js';
import Game from './game-control.js';
import Quote from './quote.js';
import BoardRender from './board-render.js';
import BoardHelper from './board-helpers.js';
import Settings from './settings.js';
import Save from './save.js';

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
    Animation.shake(Game.wrapper);
  }

  static roundAftermath(player, attack) {
    const board = Game[`${player.type}Board`];
    const attackedHtmlSquare = BoardHelper.querySquareByCoords(board, attack.coords);

    BoardRender.updateBoard(Game.player1);
    BoardRender.updateBoard(Game.player2);
    GameLoopHelper.callClickAnimation(attack.className, attackedHtmlSquare);
    
    Save.saveRound(player, attack, GameAudio.isRadarLockAudioPlaying);
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
          quoteArray = Quote.getBattleQuote('ourMiss', attacker.char.name, ship, defender.char.name);
          break;
        case 'hit':
          quoteArray = Quote.getBattleQuote('ourHit', attacker.char.name, ship, defender.char.name);
          break;
        case 'sunk':
          quoteArray = Quote.getBattleQuote('ourSink', attacker.char.name, ship, defender.char.name);
          break;
      }
    }

    if (sayer === 'defender') {
      photo = defender.char.src;
      switch(result) {
        case 'miss':
          quoteArray = Quote.getBattleQuote('theirMiss', defender.char.name, ship, attacker.char.name);
          break;
        case 'close':
          if (Radar.countermeasure) {
            quoteArray = Quote.getBattleQuote('ourEscape', defender.char.name, ship, attacker.char.name);
          } else {
            quoteArray = Quote.getBattleQuote('theirMiss', defender.char.name, ship, attacker.char.name);
          }
          break;
        case 'hit':
          quoteArray = Quote.getBattleQuote('theirHit', defender.char.name, ship, attacker.char.name);
          break;
        case 'sunk':
          quoteArray = Quote.getBattleQuote('theirSink', defender.char.name, ship, attacker.char.name);
          break;
      }
    }

    Settings.setLanguageDataAttributes(Game.characterQuotes, quoteArray);
    const quote = Game.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`);
    Animation.displayReaction(Game.characterQuotes, quote, photo);
  }

  static preventSquareClick(square) {
    square.removeEventListener('click', Game.handleClick);
  }

  static handleGameOver(winner) {
    GameAudio.playRadarLockInfiniteLoop('stop');
    Radar.radarLockScreen.classList.remove('lightUp');
    Game.player1.result = winner.type === 'human' ? 'win' : 'lose';
    Result.init();
    Game.cpuBoard.querySelectorAll('.square').forEach(square => {
      GameLoopHelper.preventSquareClick(square);
    });
    Game.cpuBoard.querySelectorAll('.ship__icon').forEach(ship => {
      ship.classList.add('revealed');
    });
  }
}