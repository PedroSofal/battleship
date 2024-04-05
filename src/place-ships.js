import './style.css';
import './place-ships.css';
import Game from "./gameControl.js";
import DOM from "./DOM.js";
import DragAndDrop from "./dragAndDrop.js";
import { charObjects } from './characters.js';
import PlaceShipQuotes from './quotes/place-ships-quotes.js';
import Animation from './animations.js';
import GameAudio from './audio.js';
import Header from './header.js';
import Settings from './settings.js';

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
      
      shipName.setAttribute('data-en', shipObject.name_en);
      shipName.setAttribute('data-pt', shipObject.name_pt);
      // shipName.textContent = shipName.getAttribute(`data-${localStorage.getItem('lang')}`);
      shipDrag.setAttribute('draggable', 'true');
      shipIcon.id = shipObject.name_en;
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
    const preparationQuote = PlaceShipQuotes.getPreparationQuote(PlaceShips.character.name);
    Animation.displayQuote(PlaceShips.characterQuotes, preparationQuote);

    PlaceShips.root.style.setProperty('--color-player', charObjects[sessionStorage.getItem('player-char')].color);
    PlaceShips.root.style.setProperty('--color-player-alpha', charObjects[sessionStorage.getItem('player-char')].colorAlpha);
    PlaceShips.root.style.setProperty('--color-cpu', charObjects[sessionStorage.getItem('cpu-char')].color);
  }

  static loadBoard() {
    PlaceShips.strategyBoard.appendChild(DOM.getPlayerBoard());
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
    const resetQuote = PlaceShipQuotes.getResetQuote(PlaceShips.character.name);
    Animation.displayQuote(PlaceShips.characterQuotes, resetQuote);
    PlaceShips.confirmBtn.disabled = true;
    DragAndDrop.init();
  }

  static updatePlacingQuote(shipId) {
    const ship = Object.values(Game.players[0].gameboard.ships).find(ship => {
      return ship.name_en === shipId;
    })
    const shipName = getShipName();
    const charName = PlaceShips.character.name;
    const placingQuote = PlaceShipQuotes.getPlacingQuote(charName, shipName);

    function getShipName() {
      if (localStorage.getItem('lang') === 'en') {
        return ship.name_en;
      } else if (localStorage.getItem('lang') === 'pt') {
        return ship.name_pt;
      }
    }

    Animation.displayQuote(PlaceShips.characterQuotes, placingQuote);
  }

  static playPlaceShipMusic() {
    GameAudio.playMusic(GameAudio.placeShips);
    document.body.removeEventListener('mousemove', PlaceShips.playPlaceShipMusic);
  }

  static init() {
    PlaceShips.loadFleet();
    PlaceShips.loadBoard();
    PlaceShips.loadCharacter();
    PlaceShips.setEventListeners();
    Settings.loadLanguage();
    DragAndDrop.init();
    Header.init();
    document.body.addEventListener('mousemove', PlaceShips.playPlaceShipMusic);
  }
}

PlaceShips.init();
