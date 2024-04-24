import '../../styles/style.css';
import '../../styles/place-ships.css';
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

export default class PlaceShips {
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
    PlaceShips.confirmBtn.addEventListener('click', PlaceShips.nextScreen);
    PlaceShips.resetBtn.addEventListener('click', PlaceShips.resetFormation);
    PlaceShips.xAxisBtn.addEventListener('click', () => DragAndDrop.changeAxis('x'));
    PlaceShips.yAxisBtn.addEventListener('click', () => DragAndDrop.changeAxis('z'));
  }

  static loadFleet() {
    for (const shipObject of Object.values(Game.players[0].gameboard.ships)) {
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
      PlaceShips.fleet.appendChild(ship);
    }
  }

  static loadCharacter() {
    PlaceShips.character = charObjects[sessionStorage.getItem('player-char')];
    PlaceShips.characterName.textContent = PlaceShips.character.fullName;
    PlaceShips.characterPhoto.src = PlaceShips.character.src;

    Settings.setLanguageDataAttributes(PlaceShips.characterQuotes, Quote.getPreparationQuote(PlaceShips.character.name));
    Animation.displayQuote(PlaceShips.characterQuotes, PlaceShips.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
    
    PlaceShips.root.style.setProperty('--color-player', PlaceShips.character.color);
    PlaceShips.root.style.setProperty('--color-player-alpha', PlaceShips.character.colorAlpha);
    PlaceShips.root.style.setProperty('--color-cpu', charObjects[sessionStorage.getItem('cpu-char')].color);
  }

  static loadBoard() {
    PlaceShips.strategyBoard.appendChild(BoardRender.getHumanBoard());
  }

  static resetFormation() {
    PlaceShips.strategyBoard.innerHTML = '';
    PlaceShips.fleet.innerHTML = '';
    Game.players[0].gameboard.resetGameboard();
    BoardRender.loadBoard(Game.players[0]);

    PlaceShips.loadFleet();
    PlaceShips.loadBoard();
    Settings.loadLanguage();
    Settings.setLanguageDataAttributes(PlaceShips.characterQuotes, Quote.getResetQuote(PlaceShips.character.name));
    Animation.displayQuote(PlaceShips.characterQuotes, PlaceShips.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
    PlaceShips.confirmBtn.disabled = true;
    DragAndDrop.init();
  }

  static updatePlaceShipQuote(shipId) {
    const ship = Object.values(Game.players[0].gameboard.ships).find(ship => {
      return ship.name.en === shipId;
    })
    const charName = PlaceShips.character.name;
    Settings.setLanguageDataAttributes(PlaceShips.characterQuotes, Quote.getPlaceShipQuote(charName, ship));
    Animation.displayQuote(PlaceShips.characterQuotes, PlaceShips.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
  }

  static playPlaceShipMusic() {
    GameAudio.playMusic(GameAudio.placeShips);
    document.body.removeEventListener('mousedown', PlaceShips.playPlaceShipMusic);
  }

  static nextScreen() {
    if (DragAndDrop.shipsPlaced === DragAndDrop.fleet.children.length) {
      sessionStorage.setItem('route-safe', 2);
      window.location.href = 'battle.html';
    }
  }

  static init() {
    Game.init();
    PlaceShips.loadFleet();
    PlaceShips.loadBoard();
    Settings.loadLanguage();
    PlaceShips.loadCharacter();
    PlaceShips.setEventListeners();
    DragAndDrop.init();
    Header.init();
    document.body.addEventListener('mousedown', PlaceShips.playPlaceShipMusic);
  }
}

LoadingScreen.init();
PlaceShips.init();