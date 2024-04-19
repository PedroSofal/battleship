import './style.css';
import './place-ships.css';
import Game from "./gameControl.js";
import DOM from "./DOM.js";
import DragAndDrop from "./dragAndDrop.js";
import { charObjects } from './characters.js';
import Animation from './animations.js';
import GameAudio from './audio.js';
import Header from './header.js';
import Settings from './settings.js';
import Language from './language.js';
import Quote from './quote.js';

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
    PlaceShips.confirmBtn.addEventListener('click', PlaceShips.confirmFormation);
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
    Language.loadDataAttributes(PlaceShips.characterQuotes, Quote.getPreparationQuote(PlaceShips.character.name));
    Animation.displayQuote(PlaceShips.characterQuotes, PlaceShips.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
    PlaceShips.root.style.setProperty('--color-player', charObjects[sessionStorage.getItem('player-char')].color);
    PlaceShips.root.style.setProperty('--color-player-alpha', charObjects[sessionStorage.getItem('player-char')].colorAlpha);
    PlaceShips.root.style.setProperty('--color-cpu', charObjects[sessionStorage.getItem('cpu-char')].color);
  }

  static loadBoard() {
    PlaceShips.strategyBoard.appendChild(DOM.getHumanBoard());
  }

  static confirmFormation() {
    if (DragAndDrop.shipsPlaced === DragAndDrop.fleet.children.length) {
      window.location.href = 'battle.html';
    }
  }

  static resetFormation() {
    PlaceShips.strategyBoard.innerHTML = '';
    PlaceShips.fleet.innerHTML = '';
    Game.players[0].gameboard.resetGameboard();
    DOM.loadBoard(Game.players[0]);

    PlaceShips.loadFleet();
    PlaceShips.loadBoard();
    Settings.loadLanguage();
    Language.loadDataAttributes(PlaceShips.characterQuotes, Quote.getResetQuote(PlaceShips.character.name));
    Animation.displayQuote(PlaceShips.characterQuotes, PlaceShips.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
    PlaceShips.confirmBtn.disabled = true;
    DragAndDrop.init();
  }

  static updatePlaceShipQuote(shipId) {
    const ship = Object.values(Game.players[0].gameboard.ships).find(ship => {
      return ship.name.en === shipId;
    })
    const charName = PlaceShips.character.name;
    Language.loadDataAttributes(PlaceShips.characterQuotes, Quote.getPlaceShipQuote(charName, ship));
    Animation.displayQuote(PlaceShips.characterQuotes, PlaceShips.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
  }

  static playPlaceShipMusic() {
    GameAudio.playMusic(GameAudio.placeShips);
    document.body.removeEventListener('mousemove', PlaceShips.playPlaceShipMusic);
  }

  static init() {
    PlaceShips.loadFleet();
    PlaceShips.loadBoard();
    Settings.loadLanguage();
    PlaceShips.loadCharacter();
    PlaceShips.setEventListeners();
    DragAndDrop.init();
    Header.init();
    document.body.addEventListener('mousemove', PlaceShips.playPlaceShipMusic);
  }
}

PlaceShips.init();
