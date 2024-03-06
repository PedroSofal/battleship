import Game from "./gameControl.js";
import DOM from "./DOM.js";
import DragAndDrop from "./dragAndDrop.js";

export default class SetUpModal {
  static modal = document.querySelector('#setUpModal');
  static fleetContainer = this.modal.querySelector('#fleetContainer');
  static gameboardContainer = this.modal.querySelector('#boardContainer');
  static confirmBtn = this.modal.querySelector('#confirmBtn');
  static resetBtn = this.modal.querySelector('#resetBtn');

  static setEventListeners() {
    this.confirmBtn.addEventListener('click', this.confirmFormation);
    this.resetBtn.addEventListener('click', this.resetFleet);
  }

  static setUp() {
    this.loadFleet(Game.players[0]);
    this.gameboardContainer.appendChild(DOM.getPlayerBoard());
    DragAndDrop.init();
  }

  static loadFleet() {
    for (const ship of Object.values(Game.players[0].gameboard.ships)) {
      const shipIcon = document.createElement('div');
      shipIcon.className = 'ship-icon';
      shipIcon.id = ship.name;
      shipIcon.setAttribute('draggable', 'true');
      this.fleetContainer.appendChild(shipIcon);
    }
  }

  static confirmFormation() {
    if (DragAndDrop.shipsPlaced === 5) {
      SetUpModal.modal.close();
      DOM.startBattle();
    }
  }

  static resetFleet() {
    SetUpModal.fleetContainer.querySelectorAll('.ship-icon').forEach(ship => {
      ship.classList.remove('placed');
    });
    Game.players[0].gameboard.resetGameboard();
    DragAndDrop.shipsPlaced = 0;
    DOM.updateBoard(Game.players[0]);
  }

  static init() {
    this.setEventListeners();
  }
}

// SetUpModal.init();
