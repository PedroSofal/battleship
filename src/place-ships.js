import './style.css';
import './place-ships.css';
import Game from "./gameControl.js";
import DOM from "./DOM.js";
import DragAndDrop from "./dragAndDrop.js";
import { charObjects } from './characters.js';
import PlaceShipLines from './characters-lines/place-ships.js';

export default class PlaceShips {
  static root = document.querySelector(':root');
  static fleet = document.querySelector('#fleet');
  static strategyBoard = document.querySelector('#strategy-board');
  static characterPhoto = document.querySelector('#character');
  static lines = document.querySelector('#lines');
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
    PlaceShips.lines.textContent = PlaceShipLines.getResetLine(PlaceShips.character.name);
  }

  static updatePlaceLine(shipName) {
    const charName = PlaceShips.character.name;
    const placingLine = PlaceShipLines.getPlacingLine(charName, shipName);
    PlaceShips.lines.textContent = placingLine;
  }

  static init() {
    PlaceShips.loadFleet(Game.players[0]);
    PlaceShips.strategyBoard.appendChild(DOM.getPlayerBoard());
    PlaceShips.character = charObjects[sessionStorage.getItem('player1-char')];
    PlaceShips.characterPhoto.src = PlaceShips.character.src;
    PlaceShips.lines.textContent = PlaceShipLines.getPreparationLine(PlaceShips.character.name);
    PlaceShips.root.style.setProperty('--color-player1', charObjects[sessionStorage.getItem('player1-char')].color);
    PlaceShips.root.style.setProperty('--color-player1-alpha', charObjects[sessionStorage.getItem('player1-char')].colorAlpha);
    PlaceShips.root.style.setProperty('--color-player2', charObjects[sessionStorage.getItem('player2-char')].color);
    PlaceShips.setEventListeners();
    DragAndDrop.init();
  }
}

PlaceShips.init();
