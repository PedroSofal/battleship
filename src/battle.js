import './style.css'
import './battle.css'
import DOM from "./DOM.js";
import Game from './gameControl.js';

export default class Battle {
  static gameboards = document.querySelector('#gameboards');

  static retrievePlayer1ShipsPositions() {
    const player1board = Game.players[0].gameboard;

    for (const ship of Object.values(player1board.ships)) {
      player1board.placeShip(
        parseInt(sessionStorage.getItem(ship.name + '-row')),
        parseInt(sessionStorage.getItem(ship.name + '-col')),
        sessionStorage.getItem(ship.name + '-axis'),
        ship
      );
    }

    Battle.gameboards.appendChild(DOM.getPlayerBoard());
    DOM.updateBoard(Game.players[0]);
  }

  static setPlayer2ShipsPositions() {
    Game.players[1].setFormationRandomly();
    Battle.gameboards.appendChild(DOM.getCpuBoard());

    document.querySelectorAll('.bot-board .square').forEach(square => {
      square.addEventListener('click', Battle.handleClick);
    })

    DOM.updateBoard(Game.players[1]);
  }

  static handleClick = function(e) {
    const col = Array.from(e.target.parentNode.children).indexOf(e.target);
    const row = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    Game.playerPlays(row, col, Game.players[1]);
  }

  static init() {
    Battle.retrievePlayer1ShipsPositions();
    Battle.setPlayer2ShipsPositions();
  }
}

Battle.init();