import '../../styles/style.css'
import '../../styles/battle.css'
import BoardRender from "../helpers/board-render.js";
import Game from '../helpers/game-control.js';
import { charObjects } from '../factories/characters.js';
import Result from './result.js';
import Animation from '../helpers/animations.js';
import GameAudio from '../helpers/audio.js';
import Header from '../helpers/header.js';
import Quote from '../helpers/quote.js';
import Language from '../helpers/language.js';
import LoadingScreen from './loading-screen.js';
import Settings from '../helpers/settings.js';

export default class Battle {
  static root = document.querySelector(':root');
  static wrapper = document.querySelector('.battle-wrapper');
  static humanBoard = document.querySelector('#human-board');
  static cpuBoard = document.querySelector('#cpu-board');
  static radarLockScreen = document.querySelector('.wrapper--radar-lock-warning')
  static radarLockFoes = document.querySelectorAll('.radar-lock-foe > path');
  static countermeasureIndicator = document.querySelector('#countermeasure');
  static characterQuotes = document.querySelector('#character-quotes');

  static countermeasure = false;

  static retrievePlayerShipsPositions() {
    const playerBackendBoard = Game.players[0].gameboard;
    const playerFrontendBoard = BoardRender.getHumanBoard();

    for (const ship of Object.values(playerBackendBoard.ships)) {
      const row = parseInt(sessionStorage.getItem(ship.name.en + '-row'));
      const col = parseInt(sessionStorage.getItem(ship.name.en + '-col'));
      const axis = sessionStorage.getItem(ship.name.en + '-axis');

      playerBackendBoard.placeShip(row, col, axis, ship);
      Battle.renderShipIcons(playerFrontendBoard, row, col, axis, ship);
    }

    Battle.humanBoard.appendChild(playerFrontendBoard);
    BoardRender.updateBoard(Game.players[0]);
  }

  static setCpuShipsPositions() {
    const cpuBackendBoard = Game.players[1].gameboard;
    const cpuFrontendBoard = BoardRender.getCpuBoard()
    cpuBackendBoard.setFormationRandomly();

    for (const ship of Object.values(cpuBackendBoard.ships)) {
      const row = ship.coords[0];
      const col = ship.coords[1];
      const axis = ship.coords[2];
      
      Battle.renderShipIcons(cpuFrontendBoard, row, col, axis, ship);
    }

    Battle.cpuBoard.appendChild(cpuFrontendBoard);
    document.querySelectorAll('.cpu-board .square').forEach(square => {
      square.addEventListener('click', Battle.handleClick);
    });
    BoardRender.updateBoard(Game.players[1]);
  }

  static renderShipIcons(board, row, col, axis, ship) {
    const grid = Battle.gridFromHtmlSquares([board]);
    const shipIcon = document.createElement('div');

    shipIcon.classList = 'ship__icon';
    shipIcon.id = ship.name.en;
    shipIcon.style.background = `url(${ship.src}) no-repeat center`;
    shipIcon.style.mask = `url(${ship.src}) no-repeat center`;
    if (axis === 'col') shipIcon.classList.add('rotated');

    grid[row][col].htmlElement.appendChild(shipIcon);
  }

  static handleClick = function(e) {
    const col = Array.from(e.target.parentNode.children).indexOf(e.target);
    const row = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    Battle.playerPlays(row, col, e);
  }

  static playerPlays(row, col, e) {
    if (Game.gameOver()) {
      return;
    }
    
    if (Game.turn === 0) {
      const attack = Game.players[0].attack(row, col, Game.players[1]);
      const attackedHtmlSquare = Battle.querySquareByCoords(Battle.cpuBoard, attack.coords);
      const delay = attack.className === 'sunk' ? 1000 : 0;

      BoardRender.updateBoard(Game.players[0]);
      BoardRender.updateBoard(Game.players[1]);
      BoardRender.showSunkenShips(Game.players[1]);
      Battle.callAnimation(attack.className, attackedHtmlSquare);
      Game.nextPlayer();
      e.target.removeEventListener('click', Battle.handleClick);
      setTimeout(() => {
        Battle.botPlays();
      }, delay);
      if (!Game.gameOver()) {
        setTimeout(() => {
          Battle.updateBattleQuote(attack, Game.players[0], Game.players[1]);
        }, 300);
      }
    }
  }
  
  static botPlays() {
    if (Game.gameOver()) {
      Battle.handleGameOver(Game.players[0]);
      return;
    }

    if (Game.turn === 1) {
      setTimeout(() => {
        const attack = Game.players[1].attack(Game.players[0]);
        const attackedHtmlSquare = Battle.querySquareByCoords(Battle.humanBoard, attack.coords);
        Battle.countermeasure = false;
        Battle.radarLockAlert(attack);
        Battle.missileLaunchAlert(attack.className);
        setTimeout(() => {
          Battle.resolveRadarAlert(attack.className);
          BoardRender.updateBoard(Game.players[0]);
          BoardRender.updateBoard(Game.players[1]);
          BoardRender.showSunkenShips(Game.players[0]);
          Battle.callAnimation(attack.className, attackedHtmlSquare);
          if (attack.className === 'hit' || attack.className === 'sunk') {
            Animation.shake(Battle.wrapper);
          }

          if (Game.gameOver()) {
            Battle.handleGameOver(Game.players[1]);
          } else {
            Game.nextPlayer();
            setTimeout(() => {
              Battle.updateBattleQuote(attack, Game.players[1], Game.players[0]);
            }, 300);
          }
        }, 3500);
      }, 500);
    }
  }

  static callAnimation(result, attackedHtmlSquare) {
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

  static querySquareByCoords(board, coords) {
    const grid = Battle.gridFromHtmlSquares([board]);
    const row = coords[0];
    const col = coords[1];
    return grid[0][row].htmlElement.children[col];
  }

  static radarLockAlert(square) {
    if (square.content !== 'water') {
      if (square.content.hits === 1) {
        setTimeout(() => {
          GameAudio.playRadarLockInfiniteLoop('start');
        }, 2000);
        setTimeout(() => {
          Battle.radarLockScreen.classList.add('lightUp');
        }, 3500);
      }
  
      if (square.content.isSunk()) {
        setTimeout(() => {
          GameAudio.playRadarLockInfiniteLoop('stop');
          Battle.radarLockScreen.classList.remove('lightUp');
      }, 4000);
      }
    }
  }

  static missileLaunchAlert(result) {
    const randomFoe = Math.floor(Math.random() * Battle.radarLockFoes.length);

    if (result !== 'miss') {
      Battle.countermeasure = Math.random() < 0.5 ? true : false;
      if (Battle.countermeasure) {
        Battle.radarLockFoes[randomFoe].classList.add('lightUp');
        GameAudio.playSfx(GameAudio.missileAlert);
        Battle.launchCountermeasures();
      }
    }
  }

  static launchCountermeasures() {
    Battle.countermeasureIndicator.classList.add('lightUp');
  }

  static resolveRadarAlert(result) {
    Battle.radarLockFoes.forEach(foe => foe.classList.remove('lightUp'));
    Battle.countermeasureIndicator.classList.remove('lightUp');

    if (result === 'sunk') {
      const friendIndicators = document.querySelector('.radar-lock-friendly');
      const firstFriend = friendIndicators.querySelectorAll('circle:not(.sunken)')[0];
      firstFriend.classList.add('sunken');
    }
  }

  static gridFromHtmlSquares(squares) {
    const matrix = Array.from(squares).map(row => Array.from(row.children)).flat();
    const grid = [];

    for (let i = 0; i < matrix.length; i++) {
      const row = Array.from(matrix[i].children);
      grid.push([]);
      for (let j = 0; j < row.length; j++) {
        grid[i].push({
          coords: [i, j],
          htmlElement: row[j],
        });
      }
    }
    return grid;
  }

  static handleGameOver(winner) {
    GameAudio.playRadarLockInfiniteLoop('stop');
    Battle.radarLockScreen.classList.remove('lightUp');
    Result.init(winner);
    Battle.cpuBoard.querySelectorAll('.square').forEach(square => {
      square.removeEventListener('click', Battle.handleClick);
    });
    Battle.cpuBoard.querySelectorAll('.ship__icon').forEach(ship => {
      ship.classList.add('revealed');
    });
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
          if (Battle.countermeasure) {
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

    Language.loadDataAttributes(Battle.characterQuotes, quoteArray);
    const quote = Battle.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`);
    Animation.displayReaction(Battle.characterQuotes, quote, photo);
  }

  static playBattleMusic() {
    GameAudio.playMusic(GameAudio.battle);
    document.body.removeEventListener('mousedown', Battle.playBattleMusic);
  }

  static init() {
    Game.init();
    Battle.retrievePlayerShipsPositions();
    Battle.setCpuShipsPositions();
    Battle.root.style.setProperty('--color-player', charObjects[sessionStorage.getItem('player-char')].color);
    Battle.root.style.setProperty('--color-player-alpha', charObjects[sessionStorage.getItem('player-char')].colorAlpha);
    Battle.root.style.setProperty('--color-cpu', charObjects[sessionStorage.getItem('cpu-char')].color);
    Battle.root.style.setProperty('--color-cpu-alpha', charObjects[sessionStorage.getItem('cpu-char')].colorAlpha);
    document.body.addEventListener('mousedown', Battle.playBattleMusic);
    Header.init();
    Settings.loadLanguage();
  }
}

LoadingScreen.init();
Battle.init();