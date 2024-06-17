import headerHTML from '../../html/components/header.html';
document.querySelector('header').innerHTML += headerHTML;

import '../../styles/style.css';
import '../../styles/buttons.css';
import '../../styles/strategy-room.css';
import '../../styles/header.css';
import '../../styles/options.css';
import '../../styles/gameboards.css';
import '../../styles/ships.css';
import '../../styles/dialogs.css';
import '../../styles/navigation.css';

import Game from "../helpers/game-control.js";
import BoardRender from "../helpers/board-render.js";
import DragAndDrop from "../helpers/drag-and-drop.js";
import { charObjects } from '../factories/characters.js';
import Animation from '../helpers/animations.js';
import GameAudio from '../helpers/audio.js';
import Settings from '../helpers/settings.js';
import Quote from '../helpers/quote.js';
import Navigation from '../helpers/navigation.js';
import Save from '../helpers/save.js';

function isTouchEnabled() {
  return window.matchMedia('(pointer: coarse)').matches ? true : false;
}

export default class StrategyRoom {
  static root = document.querySelector(':root');
  static fleet = document.querySelector('#fleet');
  static strategyBoard = document.querySelector('#human-board');
  static characterName = document.querySelector('#character-name');
  static characterPhoto = document.querySelector('#character-photo');
  static characterQuotes = document.querySelector('#character-quotes');
  static confirmBtn = document.querySelector('#confirmFormation');
  static resetBtn = document.querySelector('#resetFormation');
  static xAxisBtn = document.querySelector('#x-axis-button');
  static yAxisBtn = document.querySelector('#y-axis-button');
  static instructions = document.querySelector('.instructions');
  static instructionsPara = document.querySelector('.instructions__para');
  static openInstructionsButton = document.querySelector('#open-instructions');
  static closeInstructionsButton = document.querySelector('#close-instructions');

  static character = null;

  static setEventListeners() {
    StrategyRoom.confirmBtn.addEventListener('click', StrategyRoom.nextScreen);
    StrategyRoom.resetBtn.addEventListener('click', StrategyRoom.resetFormation);
    StrategyRoom.xAxisBtn.addEventListener('click', () => DragAndDrop.changeAxis('x'));
    StrategyRoom.yAxisBtn.addEventListener('click', () => DragAndDrop.changeAxis('z'));
    StrategyRoom.closeInstructionsButton.addEventListener('click', StrategyRoom.closeInstructions)
    StrategyRoom.openInstructionsButton.addEventListener('click', StrategyRoom.openInstructions)
  }

  static loadTitle() {
    const title = document.querySelector('.header__title');
    title.setAttribute('data-en', 'Strategy Room');
    title.setAttribute('data-pt', 'Sala de Estratégia');
  }

  static loadFleet() {
    for (const shipObject of Object.values(Game.player1.gameboard.ships)) {
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
      shipIcon.style.backgroundImage = `url(${shipObject.src})`;
      shipIcon.style.maskImage = `url(${shipObject.src})`;
      
      shipDrag.appendChild(shipIcon);
      shipYard.appendChild(shipDrag);
      ship.appendChild(shipName);
      ship.appendChild(shipYard);
      StrategyRoom.fleet.appendChild(ship);
    }
  }

  static loadCharacter() {
    StrategyRoom.character = charObjects[localStorage.getItem('human-char')];
    StrategyRoom.characterName.textContent = StrategyRoom.character.fullName;
    StrategyRoom.characterPhoto.src = StrategyRoom.character.src;

    Settings.setLanguageDataAttributes(StrategyRoom.characterQuotes, Quote.getStrategyQuote('preparation', StrategyRoom.character.name));
    Animation.displayQuote(StrategyRoom.characterQuotes, StrategyRoom.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
    
    StrategyRoom.root.style.setProperty('--color-player', StrategyRoom.character.color);
    StrategyRoom.root.style.setProperty('--color-player-alpha', StrategyRoom.character.colorAlpha);
    StrategyRoom.root.style.setProperty('--color-cpu', charObjects[localStorage.getItem('cpu-char')].color);
  }

  static loadInstructions() {
    let instructions;
    if (isTouchEnabled()) {
      instructions =
      `
        <span data-en="Touch the board to change the axis" data-pt="Toque no tabuleiro para alternar os eixos">Touch the board to change the axis</span>
      `
    } else {
      instructions =
      `
        <span data-en="Change the axis with " data-pt="Alterne os eixos com ">Change the axis with </span>
        <button class="key-button" id="y-axis-button">Z</button>
        <span data-en=" and " data-pt=" e "> and </span>
        <button class="key-button" id="x-axis-button">X</button>
      `
    }

    StrategyRoom.instructionsPara.innerHTML = instructions;
  }

  static resetFormation() {
    if (DragAndDrop.shipsPlaced === 0) return;

    StrategyRoom.strategyBoard.innerHTML = '';
    StrategyRoom.strategyBoard.classList.remove('active');
    StrategyRoom.fleet.innerHTML = '';
    Game.player1.gameboard.resetGameboard();
    BoardRender.loadBoard(Game.player1);

    StrategyRoom.loadFleet();
    Settings.loadLanguageSettings();
    Settings.setLanguageDataAttributes(StrategyRoom.characterQuotes, Quote.getStrategyQuote('reset', StrategyRoom.character.name));
    Animation.displayQuote(StrategyRoom.characterQuotes, StrategyRoom.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
    StrategyRoom.confirmBtn.disabled = true;
    StrategyRoom.resetBtn.disabled = true;
    DragAndDrop.init();
  }

  static updatePlaceShipQuote(shipId) {
    const ship = Object.values(Game.player1.gameboard.ships).find(ship => {
      return ship.name.en === shipId;
    })
    const charName = StrategyRoom.character.name;
    Settings.setLanguageDataAttributes(StrategyRoom.characterQuotes, Quote.getStrategyQuote('placeShip', charName, ship));
    Animation.displayQuote(StrategyRoom.characterQuotes, StrategyRoom.characterQuotes.getAttribute(`data-${localStorage.getItem('lang')}`));
  }

  static closeInstructions() {
    StrategyRoom.instructions.classList.add('hidden');
  }

  static openInstructions() {
    StrategyRoom.instructions.classList.remove('hidden');
  }

  static playStrategyRoomMusic() {
    GameAudio.playMusic(GameAudio.strategyRoom);
    document.body.removeEventListener('mousedown', StrategyRoom.playStrategyRoomMusic);
  }

  static nextScreen() {
    if (DragAndDrop.shipsPlaced === DragAndDrop.fleet.children.length) {
      sessionStorage.setItem('route-safe', 3);
      Navigation.toBattle();
    }
  }

  static init() {
    Save.deleteSavedGameData();
    GameAudio.liberate();
    Game.init_INFOS();
    StrategyRoom.loadTitle();
    StrategyRoom.loadFleet();
    StrategyRoom.loadInstructions();
    Navigation.init();
    Settings.init();
    StrategyRoom.loadCharacter();
    StrategyRoom.setEventListeners();
    DragAndDrop.init();
    document.body.addEventListener('mousedown', StrategyRoom.playStrategyRoomMusic);
  }
}

Navigation.loadScreen();
StrategyRoom.init();