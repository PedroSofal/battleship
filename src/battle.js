import './style.css'
import './battle.css'
import DOM from "./DOM.js";
import Game from './gameControl.js';

export default class Battle {
  static playerBoard = document.querySelector('#player-board');
  static cpuBoard = document.querySelector('#cpu-board');
  static radarLockFoes = document.querySelectorAll('.radar-lock-foe > path');

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

    Battle.playerBoard.appendChild(DOM.getPlayerBoard());
    DOM.updateBoard(Game.players[0]);
  }

  static setPlayer2ShipsPositions() {
    Game.players[1].setFormationRandomly();
    Battle.cpuBoard.appendChild(DOM.getCpuBoard());

    document.querySelectorAll('.bot-board .square').forEach(square => {
      square.addEventListener('click', Battle.handleClick);
    })

    DOM.updateBoard(Game.players[1]);
  }

  static handleClick = function(e) {
    const col = Array.from(e.target.parentNode.children).indexOf(e.target);
    const row = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    Battle.playerPlays(row, col, Game.players[1]);
  }

  static playerPlays(row, col, enemy) {
    if (!Game.gameOver() && Game.turn === 0) {
      Game.players[0].attack(row, col, enemy);
      DOM.updateBoard(Game.players[0]);
      DOM.updateBoard(Game.players[1]);
      Game.nextPlayer();
      Battle.botPlays();
    }
  }
  
  static botPlays() {
    if (!Game.gameOver() && Game.turn === 1) {
      const attack = Game.players[1].attack(Game.players[0]);
      Battle.radarLockWarning(attack);
      setTimeout(() => {
        this.radarLockFoes.forEach(foe => foe.classList.remove('lightUp'));
        DOM.updateBoard(Game.players[0]);
        DOM.updateBoard(Game.players[1]);
        Game.nextPlayer();
      }, 1000);
    }
  };

  static radarLockWarning(attack) {
    const randomFoe = Math.floor(Math.random() * this.radarLockFoes.length);
    console.log(randomFoe)

    if (attack === 'hit') {
      this.radarLockFoes[randomFoe].classList.add('lightUp');
      Battle.launchCountermeasures();
    }

    if (attack === 'close') {
      const warning = Math.random() < 0.5 ? true : false;
      if (warning) {
        this.radarLockFoes[randomFoe].classList.add('lightUp');
        Battle.launchCountermeasures();
      }
    }
  }

  static launchCountermeasures() {
    console.log('Launching countermeasures!')
  }

  static init() {
    Battle.retrievePlayer1ShipsPositions();
    Battle.setPlayer2ShipsPositions();
  }
}

Battle.init();