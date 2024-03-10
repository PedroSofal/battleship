import './style.css';
import './place-ships.css';
import Game from "./gameControl.js";
import DOM from "./DOM.js";
import DragAndDrop from "./dragAndDrop.js";
import { charObjects } from './characters.js';

export default class PlaceShips {
  static root = document.querySelector(':root');
  static fleet = document.querySelector('#fleet');
  static strategyBoard = document.querySelector('#strategy-board');
  static character = document.querySelector('#character');
  static confirmBtn = document.querySelector('#confirmFormation');
  static resetBtn = document.querySelector('#resetFormation');

  static setEventListeners() {
    PlaceShips.confirmBtn.addEventListener('click', PlaceShips.confirmFormation);
    PlaceShips.resetBtn.addEventListener('click', PlaceShips.resetFormation);
  }

  static loadFleet() {
    for (const shipObject of Object.values(Game.players[0].gameboard.ships)) {
      const ship = document.createElement('div');
      const shipName = document.createElement('p');
      const shipYard = document.createElement('div');
      const shipIcon = document.createElement('div');

      ship.classList = 'ship';
      shipName.classList = 'ship__name';
      shipYard.classList = 'ship__yard';
      shipIcon.classList = 'ship__icon';
      
      shipName.textContent = shipObject.name;
      shipIcon.id = shipObject.name;
      shipIcon.setAttribute('draggable', 'true');
      
      shipYard.appendChild(shipIcon);
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
    PlaceShips.fleet.querySelectorAll('.ship__icon').forEach(ship => {
      ship.classList.remove('placed');
    });
    Game.players[0].gameboard.resetGameboard();
    DragAndDrop.shipsPlaced = 0;
    DOM.updateBoard(Game.players[0]);
  }

  static init() {
    PlaceShips.setEventListeners();
    PlaceShips.loadFleet(Game.players[0]);
    PlaceShips.strategyBoard.appendChild(DOM.getPlayerBoard());
    PlaceShips.character.src = charObjects[sessionStorage.getItem('player1-char')].src;
    PlaceShips.root.style.setProperty('--color-player1', charObjects[sessionStorage.getItem('player1-char')].color);
    PlaceShips.root.style.setProperty('--color-player1-alpha', charObjects[sessionStorage.getItem('player1-char')].colorAlpha);
    PlaceShips.root.style.setProperty('--color-player2', charObjects[sessionStorage.getItem('player2-char')].color);
    DragAndDrop.init();
  }
}

PlaceShips.init();
