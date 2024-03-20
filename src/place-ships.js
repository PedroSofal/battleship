import './style.css';
import './place-ships.css';
import Game from "./gameControl.js";
import DOM from "./DOM.js";
import DragAndDrop from "./dragAndDrop.js";
import { charObjects } from './characters.js';
import PlaceShipQuotes from './quotes/place-ships-quotes.js';

export default class PlaceShips {
  static root = document.querySelector(':root');
  static fleet = document.querySelector('#fleet');
  static strategyBoard = document.querySelector('#strategy-board');
  static characterPhoto = document.querySelector('#character');
  static quotes = document.querySelector('#quotes');
  static confirmBtn = document.querySelector('#confirmFormation');
  static resetBtn = document.querySelector('#resetFormation');

  static character = null;

  static setEventListeners() {
    PlaceShips.confirmBtn.addEventListener('click', PlaceShips.confirmFormation);
    PlaceShips.resetBtn.addEventListener('click', PlaceShips.resetFormation);
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
      
      shipName.textContent = shipObject.name;
      shipDrag.setAttribute('draggable', 'true');
      shipIcon.id = shipObject.name;
      shipIcon.style.mask = `url(${shipObject.src}) no-repeat center`;
      
      shipDrag.appendChild(shipIcon);
      shipYard.appendChild(shipDrag);
      ship.appendChild(shipName);
      ship.appendChild(shipYard);
      PlaceShips.fleet.appendChild(ship);
    }
  }

  static confirmFormation() {
    if (DragAndDrop.shipsPlaced === 5) {
      window.location.href = 'battle.html';
    }
  }

  static resetFormation() {
    PlaceShips.strategyBoard.innerHTML = '';
    PlaceShips.fleet.innerHTML = '';
    Game.players[0].gameboard.resetGameboard();
    DOM.loadBoard(Game.players[0]);
    PlaceShips.strategyBoard.appendChild(DOM.getPlayerBoard());
    PlaceShips.loadFleet(Game.players[0]);
    DragAndDrop.init();
    PlaceShips.quotes.textContent = PlaceShipQuotes.getResetQuote(PlaceShips.character.name);
  }

  static updatePlaceQuote(shipName) {
    const charName = PlaceShips.character.name;
    const placingQuote = PlaceShipQuotes.getPlacingQuote(charName, shipName);
    PlaceShips.quotes.textContent = placingQuote;
  }

  static init() {
    PlaceShips.loadFleet(Game.players[0]);
    PlaceShips.strategyBoard.appendChild(DOM.getPlayerBoard());
    PlaceShips.character = charObjects[sessionStorage.getItem('player-char')];
    PlaceShips.characterPhoto.src = PlaceShips.character.src;
    PlaceShips.quotes.textContent = PlaceShipQuotes.getPreparationQuote(PlaceShips.character.name);
    PlaceShips.root.style.setProperty('--color-player', charObjects[sessionStorage.getItem('player-char')].color);
    PlaceShips.root.style.setProperty('--color-player-alpha', charObjects[sessionStorage.getItem('player-char')].colorAlpha);
    PlaceShips.root.style.setProperty('--color-cpu', charObjects[sessionStorage.getItem('cpu-char')].color);
    PlaceShips.setEventListeners();
    DragAndDrop.init();
  }
}

PlaceShips.init();
