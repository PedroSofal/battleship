import '../../styles/style.css';
import '../../styles/character-selection.css';
import '../../styles/containers.css';
import '../../styles/buttons.css';
import '../../styles/options.css';
import '../../styles/navigation.css';
import '../../styles/dialogs.css';

import { charObjects } from '../factories/characters.js';
import Navigation from '../helpers/navigation.js';
import Settings from '../helpers/settings.js';
import Save from '../helpers/save.js';
import GameAudio from '../helpers/audio.js';

export default class CharSelection {
  static humanChar = null;
  static cpuChar = null;
  static isSelecting = 'human';
  static isEditing = false;

  static charOptions = document.querySelectorAll('.character-option');
  static charSelectionWrapper = document.querySelector('.character-selection-wrapper');
  static opponentsContainer = document.querySelector('.opponents');
  static opponents = document.querySelectorAll('.opponents__player');
  static status = document.querySelector('.opponents__status');
  static humanPreview = document.querySelector('#human-preview');
  static cpuPreview = document.querySelector('#cpu-preview');
  static placeShipsBtn = document.querySelector('#place-ships');
  static humanName = document.querySelector('#human-name');
  static cpuName = document.querySelector('#cpu-name');
  static humanPhoto = document.querySelector('#human-photo');
  static cpuPhoto = document.querySelector('#cpu-photo');

  static setEventListeners() {
    CharSelection.charOptions.forEach(option => {
      option.addEventListener('click', CharSelection.playerSelection);
    });

    CharSelection.opponents.forEach(opponent => {
      opponent.addEventListener('click', (e) => CharSelection.playerEditing(e));
    });

    CharSelection.placeShipsBtn.addEventListener('click', CharSelection.nextScreen);
  }

  static playerSelection = function(e) {
    CharSelection.handleCharSelection(e.currentTarget);
  }

  static handleCharSelection(selectedChar) {
    if (selectedChar.classList.contains('char-selected')) return;
    
    CharSelection.resetCharSelection();
    selectedChar.classList.add('char-selected');
    selectedChar.classList.add(`char-selected--${CharSelection.isSelecting}`);
    CharSelection.opponents.forEach(opponent => {
      opponent.classList.remove('opponents__player--selected');
    });

    if (CharSelection.isSelecting === 'human' && !CharSelection.isEditing) {
      CharSelection.associateCharToHuman(selectedChar);
      CharSelection.isSelecting = 'cpu'
      CharSelection.cpuPreview.classList.add('opponents__player--selected');
      return;
    }
    
    if (CharSelection.isSelecting === 'human' && CharSelection.isEditing) {
      CharSelection.associateCharToHuman(selectedChar);
      CharSelection.deactivatePlayerSelection();
      return
    }
    
    if (CharSelection.isSelecting === 'cpu') {
      CharSelection.associateCharToCpu(selectedChar);
      CharSelection.deactivatePlayerSelection();
      return
    }
  }

  static deactivatePlayerSelection() {
    CharSelection.charOptions.forEach(option => {
      option.removeEventListener('click', CharSelection.playerSelection);
      option.classList.remove('chosen');
    });

    CharSelection.opponents.forEach(opponent => {
      opponent.classList.remove('opponents__player--selected');
      opponent.classList.add('opponents__player--selectable');
    });

    CharSelection.opponentsContainer.classList.add('ready');
    CharSelection.charSelectionWrapper.classList.add('closed');
    CharSelection.status.setAttribute('data-en', 'READY!');
    CharSelection.status.setAttribute('data-pt', 'PRONTO!');
    Settings.loadLanguageSettings();
    CharSelection.isEditing = false;
    CharSelection.placeShipsBtn.disabled = false;
  }

  static playerEditing(e) {
    const opponent = e.currentTarget.id.includes('human') ? 'human' : 'cpu';
    console.log(opponent)
    if (!sessionStorage.getItem('human-char') || !sessionStorage.getItem('cpu-char')) return;

    CharSelection.placeShipsBtn.disabled = true;
    CharSelection.isSelecting = opponent;
    CharSelection.resetCharSelection();
    CharSelection.opponents.forEach(div => {
      div.classList.remove('opponents__player--selected');
      div.classList.remove('opponents__player--selectable');
    });
    e.currentTarget.classList.add('opponents__player--selected');

    if (CharSelection.isEditing) {
      CharSelection.restoreCharSelection();
    } else {
      CharSelection.enableCharacterEditing();
    }

    CharSelection.hideChosenCharacter();
  }

  static resetCharSelection() {
    CharSelection.charOptions.forEach(option => {
      if (option.classList.contains(`char-selected--${CharSelection.isSelecting}`)) {
        option.classList.remove('char-selected');
        option.classList.remove(`char-selected--${CharSelection.isSelecting}`);
      }
    });
  }

  static restoreCharSelection() {
    const wasSelecting = CharSelection.isSelecting === 'human' ? 'cpu' : 'human';
    const selectedChar = document.getElementById(sessionStorage.getItem(`${wasSelecting}-char`));
    selectedChar.classList.add('char-selected');
    selectedChar.classList.add(`char-selected--${wasSelecting}`);
    CharSelection.charOptions.forEach(option => option.classList.remove('chosen'));
  }

  static enableCharacterEditing() {
    CharSelection.isEditing = true;
    CharSelection.opponentsContainer.classList.remove('ready');
    CharSelection.charSelectionWrapper.classList.remove('closed');
    CharSelection.status.setAttribute('data-en', 'Awaiting...');
    CharSelection.status.setAttribute('data-pt', 'Aguardando...');
    Settings.loadLanguageSettings();
    CharSelection.charOptions.forEach(option => {
      option.addEventListener('click', CharSelection.playerSelection);
    });
  }

  static hideChosenCharacter() {
    const chosenCharacter = document.querySelector('.char-selected');
    chosenCharacter.classList.add('chosen');
  }

  static associateCharToHuman(selectedChar) {
    CharSelection.humanChar = selectedChar.id;
    CharSelection.humanName.textContent = charObjects[selectedChar.id].name;
    CharSelection.humanPhoto.src = charObjects[selectedChar.id].src;
    CharSelection.humanPhoto.alt = charObjects[selectedChar.id].name;
    CharSelection.humanPhoto.classList.remove('animate');
    setTimeout(() => CharSelection.humanPhoto.classList.add('animate'));
    sessionStorage.setItem('human-char', CharSelection.humanChar);
  }

  static associateCharToCpu(selectedChar) {
    CharSelection.cpuChar = selectedChar.id;
    CharSelection.cpuName.textContent = charObjects[selectedChar.id].name;
    CharSelection.cpuPhoto.src = charObjects[selectedChar.id].src;
    CharSelection.cpuPhoto.alt = charObjects[selectedChar.id].name;
    CharSelection.cpuPhoto.classList.remove('animate');
    setTimeout(() => CharSelection.cpuPhoto.classList.add('animate'));
    sessionStorage.setItem('cpu-char', CharSelection.cpuChar);
  }

  static playCharacterSelectionMusic() {
    GameAudio.playMusic(GameAudio.characterSelection);
    document.body.removeEventListener('mousedown', CharSelection.playCharacterSelectionMusic);
  }

  static nextScreen() {
    if (CharSelection.humanChar && CharSelection.cpuChar) {
      sessionStorage.setItem('route-safe', 2);
      Navigation.toStrategyRoom();
    }
  }

  static init() {
    Save.deleteSavedGameData();
    Navigation.init();
    Settings.init();
    CharSelection.setEventListeners();
    document.body.addEventListener('mousedown', CharSelection.playCharacterSelectionMusic);
  }
}

Navigation.loadScreen();
CharSelection.init();