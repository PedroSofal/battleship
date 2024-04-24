import { charObjects } from '../factories/characters.js';

export default class CharSelection {
  static playerChar = null;
  static cpuChar = null;
  static isSelecting = 'player';
  static isEditing = false;

  static charOptions = document.querySelectorAll('.character-option');
  static charSelectionWrapper = document.querySelector('.character-selection-wrapper');
  static opponents = document.querySelectorAll('.opponents__player');
  static playerPreview = document.querySelector('#player-preview');
  static cpuPreview = document.querySelector('#cpu-preview');
  static placeShipsBtn = document.querySelector('#place-ships');
  static playerName = document.querySelector('#player-name');
  static cpuName = document.querySelector('#cpu-name');
  static playerPhoto = document.querySelector('#player-photo');
  static cpuPhoto = document.querySelector('#cpu-photo');

  static setEventListeners() {
    CharSelection.opponents.forEach(opponent => {
      opponent.addEventListener('click', (e) => CharSelection.playerEditing(e));
    });
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

    if (CharSelection.isSelecting === 'player' && !CharSelection.isEditing) {
      CharSelection.associateCharToPlayer(selectedChar);
      CharSelection.isSelecting = 'cpu'
      CharSelection.cpuPreview.classList.add('opponents__player--selected');
      return;
    }
    
    if (CharSelection.isSelecting === 'player' && CharSelection.isEditing) {
      CharSelection.associateCharToPlayer(selectedChar);
      CharSelection.deactivatePlayerSelection();
      return
    }
    
    if (CharSelection.isSelecting === 'cpu') {
      CharSelection.associateCharToCpu(selectedChar);
      CharSelection.deactivatePlayerSelection();
      return
    }
  }

  static activatePlayerSelection() {
    CharSelection.charSelectionWrapper.classList.add('opened');
    CharSelection.charOptions.forEach(option => {
      option.addEventListener('click', CharSelection.playerSelection);
    });
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

    CharSelection.charSelectionWrapper.classList.add('closed');
    CharSelection.isEditing = false;
    CharSelection.placeShipsBtn.disabled = false;
  }

  static playerEditing(e) {
    const opponent = e.currentTarget.id.includes('player') ? 'player' : 'cpu';
    if (!sessionStorage.getItem('player-char') || !sessionStorage.getItem('cpu-char')) return;

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
    const wasSelecting = CharSelection.isSelecting === 'player' ? 'cpu' : 'player';
    const selectedChar = document.getElementById(sessionStorage.getItem(`${wasSelecting}-char`));
    selectedChar.classList.add('char-selected');
    selectedChar.classList.add(`char-selected--${wasSelecting}`);
    CharSelection.charOptions.forEach(option => option.classList.remove('chosen'));
  }

  static enableCharacterEditing() {
    CharSelection.isEditing = true;
    CharSelection.charSelectionWrapper.classList.remove('closed');
    CharSelection.charOptions.forEach(option => {
      option.addEventListener('click', CharSelection.playerSelection);
    });
  }

  static hideChosenCharacter() {
    const chosenCharacter = document.querySelector('.char-selected');
    chosenCharacter.classList.add('chosen');
  }

  static associateCharToPlayer(selectedChar) {
    CharSelection.playerChar = selectedChar.id;
    CharSelection.playerPhoto.src = charObjects[selectedChar.id].src;
    CharSelection.playerPhoto.alt = charObjects[selectedChar.id].name;
    CharSelection.playerPhoto.classList.remove('animate');
    setTimeout(() => CharSelection.playerPhoto.classList.add('animate'));
    sessionStorage.setItem('player-char', CharSelection.playerChar);
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
  
  static init() {
    CharSelection.setEventListeners();
  }
}

CharSelection.init();