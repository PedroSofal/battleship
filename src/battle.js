import './style.css'
import './battle.css'
import DOM from "./DOM.js";
import Game from './gameControl.js';
import { charObjects } from './characters.js';
import Result from './result.js';
import BattleLines from './quotes/battle-quotes.js';

export default class Battle {
  static root = document.querySelector(':root');
  static playerBoard = document.querySelector('#player-board');
  static cpuBoard = document.querySelector('#cpu-board');
  static radarLockFoes = document.querySelectorAll('.radar-lock-foe > path');
  static quotes = document.querySelector('#quotes');
  static character = document.querySelector('#character');

  static retrievePlayer1ShipsPositions() {
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

  static setPlayer2ShipsPositions() {
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
    Battle.playerPlays(row, col);
    e.target.removeEventListener('click', Battle.handleClick);
  }

  static playerPlays(row, col) {
    if (Game.gameOver()) {
      Battle.handleGameOver(Game.players[1]);
      return;
    }
    
    if (Game.turn === 0) {
      const attack = Game.players[0].attack(row, col, Game.players[1]);
      DOM.showSunkenShips(Game.players[1]);
      DOM.updateBoard(Game.players[0]);
      DOM.updateBoard(Game.players[1]);
      Battle.updateBattleQuote(attack, Game.players[1]);
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
      Battle.radarLockWarning(attack.className);
      setTimeout(() => {
        Battle.radarLockFoes.forEach(foe => foe.classList.remove('lightUp'));
        DOM.updateBoard(Game.players[0]);
        DOM.updateBoard(Game.players[1]);
        Battle.updateBattleQuote(attack, Game.players[0]);
        Game.nextPlayer();
      }, 1000);
    }
  };

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

  static updateBattleQuote(attack, enemy) {
    if (Math.random() < 0.25) return;

    let quote;
    let characterSrc;
    const result = attack.className;
    const ship = attack.content !== 'water' ? attack.content.name : null;

    if (enemy.type === 'cpu') {
      characterSrc = Game.players[0].char.src;
      const char = Game.players[0].char.name;
      const enemy = Game.players[1].char.name;

      switch(result) {
        case 'miss':
        case 'close':
          quote = BattleLines.getOurMissQuote(char, enemy);
          break;
        case 'hit':
          quote = BattleLines.getOurHitQuote(char, ship, enemy);
          break;
        case 'sunk':
          quote = BattleLines.getOurSinkQuote(char, ship, enemy);
          break;
      }
    }
    
    if (enemy.type === 'human') {
      characterSrc = Game.players[1].char.src;
      const char = Game.players[1].char.name;
      const enemy = Game.players[0].char.name;

      switch(result) {
        case 'miss':
        case 'close':
          quote = BattleLines.getTheirMissQuote(char, enemy);
          break;
        case 'hit':
          quote = BattleLines.getTheirHitQuote(char, ship, enemy);
          break;
        case 'sunk':
          quote = BattleLines.getTheirSinkQuote(char, ship, enemy);
          break;
      }
    }

    Battle.quotes.textContent = quote;
    Battle.character.src = characterSrc;
  }

  static init() {
    Battle.retrievePlayer1ShipsPositions();
    Battle.setPlayer2ShipsPositions();
    Battle.root.style.setProperty('--color-player1', charObjects[sessionStorage.getItem('player1-char')].color);
    Battle.root.style.setProperty('--color-player1-alpha', charObjects[sessionStorage.getItem('player1-char')].colorAlpha);
    Battle.root.style.setProperty('--color-player2', charObjects[sessionStorage.getItem('player2-char')].color);
  }
}

Battle.init();