import './style.css'
import './battle.css'
import DOM from "./DOM.js";
import Game from './gameControl.js';
import { charObjects } from './characters.js';
import Result from './result.js';
import BattleLines from './quotes/battle-quotes.js';
import Animation from './animations.js';

export default class Battle {
  static root = document.querySelector(':root');
  static playerBoard = document.querySelector('#player-board');
  static cpuBoard = document.querySelector('#cpu-board');
  static radarLockFoes = document.querySelectorAll('.radar-lock-foe > path');

  static retrievePlayerShipsPositions() {
    const playerBackendBoard = Game.players[0].gameboard;
    const playerFrontendBoard = DOM.getPlayerBoard();

    for (const ship of Object.values(playerBackendBoard.ships)) {
      const row = parseInt(sessionStorage.getItem(ship.name + '-row'));
      const col = parseInt(sessionStorage.getItem(ship.name + '-col'));
      const axis = sessionStorage.getItem(ship.name + '-axis');

      playerBackendBoard.placeShip(row, col, axis, ship);
      Battle.renderShipIcons(playerFrontendBoard, row, col, axis, ship);
    }

    Battle.playerBoard.appendChild(playerFrontendBoard);
    DOM.updateBoard(Game.players[0]);
  }

  static setCpuShipsPositions() {
    const cpuBackendBoard = Game.players[1].gameboard;
    const cpuFrontendBoard = DOM.getCpuBoard()
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
    DOM.updateBoard(Game.players[1]);
  }

  static renderShipIcons(board, row, col, axis, ship) {
    const grid = Battle.gridFromHtmlSquares([board]);
    const shipIcon = document.createElement('div');

    shipIcon.classList = 'ship__icon';
    shipIcon.id = ship.name;
    shipIcon.style.mask = `url(${ship.src}) no-repeat center`;
    if (axis === 'col') shipIcon.classList.add('rotated');

    grid[row][col].htmlElement.appendChild(shipIcon);
  }

  static handleClick = function(e) {
    const col = Array.from(e.target.parentNode.children).indexOf(e.target);
    const row = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    Battle.playerPlays(row, col, e);
    e.target.removeEventListener('click', Battle.handleClick);
  }

  static playerPlays(row, col) {
    if (Game.gameOver()) {
      Battle.handleGameOver(Game.players[1]);
      return;
    }
    
    if (Game.turn === 0) {
      const attack = Game.players[0].attack(row, col, Game.players[1]);
      const attackedSquare = Battle.querySquareByCoords(Battle.cpuBoard, attack.coords);
      DOM.showSunkenShips(Game.players[1]);
      DOM.updateBoard(Game.players[0]);
      DOM.updateBoard(Game.players[1]);
      Battle.updateBattleQuote(attack, Game.players[0], Game.players[1]);
      Battle.callAnimation(attack.className, attackedSquare);
      Game.nextPlayer();
      Battle.botPlays();
    }
  }
  
  static botPlays() {
    if (Game.gameOver()) {
      Battle.handleGameOver(Game.players[0]);
      return;
    }

    if (Game.turn === 1) {
      const attack = Game.players[1].attack(Game.players[0]);
      const attackedSquare = Battle.querySquareByCoords(Battle.playerBoard, attack.coords);
      Battle.radarLockWarning(attack.className);
      setTimeout(() => {
        Battle.radarLockFoes.forEach(foe => foe.classList.remove('lightUp'));
        DOM.updateBoard(Game.players[0]);
        DOM.updateBoard(Game.players[1]);
        Battle.updateBattleQuote(attack, Game.players[1], Game.players[0]);
        Battle.callAnimation(attack.className, attackedSquare);
        Game.nextPlayer();
      }, 3500);
    }
  }

  static callAnimation(attack, attackedSquare) {
    if (attack === 'miss' || attack === 'close') {
      Animation.displaySplash(attackedSquare);
    } else {
      Animation.displayExplosion(attackedSquare);
    }
  }

  static querySquareByCoords(board, coords) {
    const grid = Battle.gridFromHtmlSquares([board]);
    const row = coords[0];
    const col = coords[1];
    return grid[0][row].htmlElement.children[col];
  }

  static radarLockWarning(attack) {
    const randomFoe = Math.floor(Math.random() * Battle.radarLockFoes.length);

    if (attack === 'hit') {
      Battle.radarLockFoes[randomFoe].classList.add('lightUp');
      Battle.launchCountermeasures();
    }

    if (attack === 'close') {
      const warning = Math.random() < 0.5 ? true : false;
      if (warning) {
        Battle.radarLockFoes[randomFoe].classList.add('lightUp');
        Battle.launchCountermeasures();
      }
    }
  }

  static launchCountermeasures() {
    console.log('Launching countermeasures!')
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
    Result.init(winner);
    Battle.cpuBoard.querySelectorAll('.square').forEach(square => {
      square.removeEventListener('click', Battle.handleClick);
    });
  }

  static updateBattleQuote(attack, attacker, defender) {
    let quote;
    const result = attack.className;
    const ship = attack.content !== 'water' ? attack.content.name : null;
    
    if (Math.random() < 0.5 && result !== 'sunk') return;
    const sayer = Math.random() < 0.5 ? 'attacker' : 'defender';

    if (sayer === 'attacker') {
      switch(result) {
        case 'miss':
        case 'close':
          quote = BattleLines.getOurMissQuote(attacker.char.name, ship, defender.char.name);
          break;
        case 'hit':
          quote = BattleLines.getOurHitQuote(attacker.char.name, ship, defender.char.name);
          break;
        case 'sunk':
          quote = BattleLines.getOurSinkQuote(attacker.char.name, ship, defender.char.name);
          break;
      }

      Animation.displayReaction(quote, attacker.char.src);
    }

    if (sayer === 'defender') {
      switch(result) {
        case 'miss':
        case 'close':
          quote = BattleLines.getTheirMissQuote(defender.char.name, ship, attacker.char.name);
          break;
        case 'hit':
          quote = BattleLines.getTheirHitQuote(defender.char.name, ship, attacker.char.name);
          break;
        case 'sunk':
          quote = BattleLines.getTheirSinkQuote(defender.char.name, ship, attacker.char.name);
          break;
      }

      Animation.displayReaction(quote, defender.char.src);
    }
  }

  static init() {
    Battle.retrievePlayerShipsPositions();
    Battle.setCpuShipsPositions();
    Battle.root.style.setProperty('--color-player', charObjects[sessionStorage.getItem('player-char')].color);
    Battle.root.style.setProperty('--color-player-alpha', charObjects[sessionStorage.getItem('player-char')].colorAlpha);
    Battle.root.style.setProperty('--color-cpu', charObjects[sessionStorage.getItem('cpu-char')].color);
  }
}

Battle.init();