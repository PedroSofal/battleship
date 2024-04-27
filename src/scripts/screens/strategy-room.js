import '../../styles/style.css';
import '../../styles/containers.css';
import '../../styles/buttons.css';
import '../../styles/options.css';
import '../../styles/gameboards.css';
import '../../styles/ships.css';
import '../../styles/dialogs.css';
import '../../styles/navigation.css';

import Game from "../helpers/game-control.js";
import BoardRender from "../helpers/board-render.js";
import DragAndDrop from "../helpers/drag-and-drop.js";
import { charObjects } from '../factories/characters.js';
import Animation from '../helpers/animations.js';
import GameAudio from '../helpers/audio.js';
import Header from '../helpers/header.js';
import Settings from '../helpers/settings.js';
import Quote from '../helpers/quote.js';
import LoadingScreen from './loading-screen.js';

export default class StrategyRoom {
  static root = document.querySelector(':root');
  static fleet = document.querySelector('#fleet');
  static strategyBoard = document.querySelector('#strategy-board');
  static characterName = document.querySelector('#character-name');
  static characterPhoto = document.querySelector('#character-photo');
  static characterQuotes = document.querySelector('#character-quotes');
  static confirmBtn = document.querySelector('#confirmFormation');
  static resetBtn = document.querySelector('#resetFormation');
  static xAxisBtn = document.querySelector('#x-axis-button');
  static yAxisBtn = document.querySelector('#y-axis-button');

  static character = null;

  static setEventListeners() {
    StrategyRoom.confirmBtn.addEventListener('click', StrategyRoom.nextScreen);
    StrategyRoom.resetBtn.addEventListener('click', StrategyRoom.resetFormation);
    StrategyRoom.xAxisBtn.addEventListener('click', () => DragAndDrop.changeAxis('x'));
    StrategyRoom.yAxisBtn.addEventListener('click', () => DragAndDrop.changeAxis('z'));
  }

  static loadFleet() {
    for (const shipObject of Object.values(Game.player1.gameboard.ships)) {
      const ship = document.createElement('div');
      const shipName = document.createElement('p');
      const shipYard = document.createElement('div');
      const shipDrag = document.createElement('div');
      const shipIcon = document.createElement('div');

      ship.classList = 'ship';
      shipName.classList = 'ship__name';
      shipYard.classList = 'ship__yard';
      shipDrag.classList = 'ship__drag';
      shipIcon.classList = 'ship__icon';
      
      shipName.setAttribute('data-en', shipObject.name.en);
      shipName.setAttribute('data-pt', shipObject.name.pt);
      shipDrag.setAttribute('draggable', 'true');
      shipIcon.id = shipObject.name.en;
      shipIcon.style.background = `url(${shipObject.src}) no-repeat center`;
      shipIcon.style.mask = `url(${shipObject.src}) no-repeat center`;
      
      shipDrag.appendChild(shipIcon);
      shipYard.appendChild(shipDrag);
      ship.appendChild(shipName);
      ship.appendChild(shipYard);
      StrategyRoom.fleet.appendChild(ship);
    }
  }

  static loadCharacter() {
    StrategyRoom.character = charObjects[sessionStorage.getItem('player-char')];
    StrategyRoom.characterName.textContent = StrategyRoom.character.fullName;
    StrategyRoom.characterPhoto.src = StrategyRoom.character.src;

    Settings.setLanguageDataAttributes(StrategyRoom.characterQuotes, Quote.getPreparationQuote(StrategyRoom.character.name));
    Animation.displayQuote(StrategyRoom.characterQuotes, StrategyRoom.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
    
    StrategyRoom.root.style.setProperty('--color-player', StrategyRoom.character.color);
    StrategyRoom.root.style.setProperty('--color-player-alpha', StrategyRoom.character.colorAlpha);
    StrategyRoom.root.style.setProperty('--color-cpu', charObjects[sessionStorage.getItem('cpu-char')].color);
  }

  static loadBoard() {
    StrategyRoom.strategyBoard.appendChild(BoardRender.getHumanBoard());
  }

  static resetFormation() {
    StrategyRoom.strategyBoard.innerHTML = '';
    StrategyRoom.fleet.innerHTML = '';
    Game.player1.gameboard.resetGameboard();
    BoardRender.loadBoard(Game.player1);

    StrategyRoom.loadFleet();
    StrategyRoom.loadBoard();
    Settings.loadLanguage();
    Settings.setLanguageDataAttributes(StrategyRoom.characterQuotes, Quote.getResetQuote(StrategyRoom.character.name));
    Animation.displayQuote(StrategyRoom.characterQuotes, StrategyRoom.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
    StrategyRoom.confirmBtn.disabled = true;
    DragAndDrop.init();
  }

  static updatePlaceShipQuote(shipId) {
    const ship = Object.values(Game.player1.gameboard.ships).find(ship => {
      return ship.name.en === shipId;
    })
    const charName = StrategyRoom.character.name;
    Settings.setLanguageDataAttributes(StrategyRoom.characterQuotes, Quote.getPlaceShipQuote(charName, ship));
    Animation.displayQuote(StrategyRoom.characterQuotes, StrategyRoom.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
  }

  static playStrategyRoomMusic() {
    GameAudio.playMusic(GameAudio.strategyRoom);
    document.body.removeEventListener('mousedown', StrategyRoom.playStrategyRoomMusic);
  }

  static nextScreen() {
    if (DragAndDrop.shipsPlaced === DragAndDrop.fleet.children.length) {
      sessionStorage.setItem('route-safe', 2);
      window.location.href = 'battle.html';
    }
  }

  static init() {
    Game.init();
    StrategyRoom.loadFleet();
    StrategyRoom.loadBoard();
    Settings.loadAllSettings();
    StrategyRoom.loadCharacter();
    StrategyRoom.setEventListeners();
    DragAndDrop.init();
    Header.init();
    document.body.addEventListener('mousedown', StrategyRoom.playStrategyRoomMusic);
  }
}

LoadingScreen.init();
StrategyRoom.init();