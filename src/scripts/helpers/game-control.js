import Player from '../factories/player.js';
import AI_EASY from '../factories/ai-easy.js';
import AI_MEDIUM from '../factories/ai-medium.js';
import AI_HARD from '../factories/ai-hard.js';
import BoardRender from './board-render.js';
import BoardHelper from './board-helpers.js';
import { charObjects } from '../factories/characters.js';
import Save from './save.js';
import GameLoop from './game-loop.js';

export default class Game {
  static player1 = null;
  static player2 = null;
  static turn = 'human';

  static root = null;
  static humanBoard = null;
  static cpuBoard = null;
  static wrapper = null;
  static characterQuotes = null;

  static queryElements() {
    Game.root = document.querySelector(':root');
    Game.humanBoard = document.querySelector('#human-board');
    Game.cpuBoard = document.querySelector('#cpu-board');
    Game.wrapper = document.querySelector('.wrapper--battle');
    Game.characterQuotes = document.querySelector('#character-quotes');
  }

  static retrieveShipsPositions(player) {
    const shipsPositions = JSON.parse(localStorage.getItem(`${player.type}ShipsPositions`));
    const backendBoard = player.gameboard;
    const frontendBoard = player.type === 'human'
      ? BoardRender.getHumanBoard()
      : BoardRender.getCpuBoard();

    for (const ship of Object.values(backendBoard.ships)) {
      const shipInfo = shipsPositions[ship.name.en];
      const row = shipInfo.row;
      const col = shipInfo.col;
      const axis = shipInfo.axis;

      backendBoard.placeShip(row, col, axis, ship);
      Game.renderShipIcons(frontendBoard, row, col, axis, ship);
    }

    Game[`${player.type}Board`].appendChild(frontendBoard);
  }

  static randomizeCpuShipsPositions() {
    const cpuBackendBoard = Game.player2.gameboard;
    const cpuFrontendBoard = BoardRender.getCpuBoard();
    cpuBackendBoard.setFormationRandomly();
    
    const cpuShipsPositions = {};
    for (const ship of Object.values(cpuBackendBoard.ships)) {
      const row = ship.coords[0];
      const col = ship.coords[1];
      const axis = ship.coords[2];
      
      Game.renderShipIcons(cpuFrontendBoard, row, col, axis, ship);
      cpuShipsPositions[ship.name.en] = {
        row, col, axis,
      }
    }

    localStorage.setItem('cpuShipsPositions', JSON.stringify(cpuShipsPositions));
    Game.cpuBoard.appendChild(cpuFrontendBoard);
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

  static retrieveRoundsInfo(savedGame, player) {
    for (const coords of savedGame[`${player.type}Board`]) {
      player.gameboard.receiveAttack(...coords);
    }
  }

  static setSquaresClickListeners() {
    const clickableSquares = document.querySelectorAll('.cpu-board [class="col square"]');
    clickableSquares.forEach(square => {
      square.addEventListener('click', Game.handleClick);
    });
  }

  static handleClick = function(e) {
    const col = Array.from(e.target.parentNode.children).indexOf(e.target);
    const row = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    GameLoop.playerPlays(row, col, e);
  }

  static setPlayers() {
    const humanName = charObjects[localStorage.getItem('human-char')].name;
    const humanChar = charObjects[localStorage.getItem('human-char')];
    const cpuName = charObjects[localStorage.getItem('cpu-char')].name;
    const cpuChar = charObjects[localStorage.getItem('cpu-char')];

    const human = new Player(humanName, humanChar);
    Game.player1 = human;

    let cpu;
    switch (localStorage.getItem('difficulty')) {
      case '0':
        cpu = new AI_EASY(cpuName, cpuChar, Game.player1);
        break;
      case '1':
        cpu = new AI_MEDIUM(cpuName, cpuChar, Game.player1);
        break;
      case '2':
        cpu = new AI_HARD(cpuName, cpuChar, Game.player1);
        break;
    }
    Game.player2 = cpu;
  }

  static loadBoards() {
    BoardRender.loadBoard(Game.player1);
    BoardRender.loadBoard(Game.player2);
  }

  static newGame() {
    Save.deleteSavedGameData();
    Game.retrieveShipsPositions(Game.player1);
    Game.randomizeCpuShipsPositions();
    BoardRender.updateBoard(Game.player2);
    Game.setSquaresClickListeners();
    Game.cpuBoard.classList.add('active');
  }

  static loadGame(savedGame) {
    Game.retrieveShipsPositions(Game.player1);
    Game.retrieveShipsPositions(Game.player2);
    Game.retrieveRoundsInfo(savedGame, Game.player1);
    Game.retrieveRoundsInfo(savedGame, Game.player2);
    BoardRender.updateBoard(Game.player1);
    BoardRender.updateBoard(Game.player2);
    Game.setSquaresClickListeners();
    Game.turn = savedGame.nextTurn;

    if (Game.turn === 'cpu') {
      GameLoop.botPlays();
      Game.humanBoard.classList.add('active');
    } else {
      Game.cpuBoard.classList.add('active');
    }
  }

  static nextPlayer() {
    Game.turn = Game.turn === 'human' ? 'cpu' : 'human';
    Game.humanBoard.classList.toggle('active');
    Game.cpuBoard.classList.toggle('active');
  }

  static gameOver() {
    if (Game.player1.gameboard.areAllShipsSunk() || Game.player2.gameboard.areAllShipsSunk()) {
      return true;
    } else {
      return false;
    }
  }

  static init_INFOS() {
    Game.queryElements();
    Game.setPlayers();
    BoardRender.loadBoard(Game.player1);
  }

  static init_BATTLE() {
    Game.queryElements();
    Game.setPlayers();
    BoardRender.loadBoard(Game.player1);
    BoardRender.loadBoard(Game.player2);

    const savedGame = Save.retrieveSavedGameData();
    if (savedGame) {
      Game.loadGame(savedGame);
    } else {
      Game.newGame();
    }
  }
}