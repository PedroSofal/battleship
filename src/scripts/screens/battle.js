import '../../styles/style.css'
import '../../styles/battle.css'
import BoardRender from "../helpers/board-render.js";
import Game from '../helpers/game-control.js';
import { charObjects } from '../factories/characters.js';
import GameAudio from '../helpers/audio.js';
import Header from '../helpers/header.js';
import LoadingScreen from './loading-screen.js';
import Settings from '../helpers/settings.js';
import GameLoop from '../helpers/game-loop.js';
import BoardHelper from '../helpers/board-helpers.js';

export default class Battle {
  static root = document.querySelector(':root');
  static humanBoard = document.querySelector('#human-board');
  static cpuBoard = document.querySelector('#cpu-board');
  static wrapper = document.querySelector('.battle-wrapper');
  static characterQuotes = document.querySelector('#character-quotes');

  static retrievePlayerShipsPositions() {
    const playerBackendBoard = Game.player1.gameboard;
    const playerFrontendBoard = BoardRender.getHumanBoard();

    for (const ship of Object.values(playerBackendBoard.ships)) {
      const row = parseInt(sessionStorage.getItem(ship.name.en + '-row'));
      const col = parseInt(sessionStorage.getItem(ship.name.en + '-col'));
      const axis = sessionStorage.getItem(ship.name.en + '-axis');

      playerBackendBoard.placeShip(row, col, axis, ship);
      Battle.renderShipIcons(playerFrontendBoard, row, col, axis, ship);
    }

    Battle.humanBoard.appendChild(playerFrontendBoard);
    BoardRender.updateBoard(Game.player1);
  }

  static setCpuShipsPositions() {
    const cpuBackendBoard = Game.player2.gameboard;
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
    BoardRender.updateBoard(Game.player2);
  }

  static renderShipIcons(board, row, col, axis, ship) {
    const grid = BoardHelper.objectsGridFromHtmlSquares([board]);
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
    GameLoop.playerPlays(row, col, e);
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