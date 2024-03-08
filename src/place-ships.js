import './style.css';
import './place-ships.css';
import Game from "./gameControl.js";
import DOM from "./DOM.js";
import DragAndDrop from "./dragAndDrop.js";

export default class PlaceShips {
  static fleet = document.querySelector('#fleet');
  static strategyBoard = document.querySelector('#strategy-board');
  static confirmBtn = document.querySelector('#confirmFormation');
  static resetBtn = document.querySelector('#resetFormation');

  static setEventListeners() {
    this.confirmBtn.addEventListener('click', this.confirmFormation);
    this.resetBtn.addEventListener('click', this.resetFormation);
  }

  static setUp() {
    this.loadFleet(Game.players[0]);
    this.strategyBoard.appendChild(DOM.getPlayerBoard());
    DragAndDrop.init();
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
      this.fleet.appendChild(ship);
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
    this.setEventListeners();
    this.setUp();
  }
}

PlaceShips.init();
