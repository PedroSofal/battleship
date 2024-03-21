import './style.css';
import './main-menu.css';
import { charObjects } from './characters.js';

class MainMenu {
  static lang = 'pt';
  static audio = 'on';
  static playerChar = null;
  static cpuChar = null;
  static isSelecting = 'player';
  static isEditing = false;

  static nameInput = document.querySelector('#name-input');
  static langOptions = document.querySelectorAll('.language-radio');
  static audioOptions = document.querySelectorAll('.audio-radio');
  static charOptions = document.querySelectorAll('.character-option');
  static placeShipsBtn = document.querySelector('#place-ships');
  static charSelectionWrapper = document.querySelector('.character-selection-wrapper');
  static playerPreview = document.querySelector('#player-preview');
  static cpuPreview = document.querySelector('#cpu-preview');
  static opponents = document.querySelectorAll('.opponents__player');
  static playerName = document.querySelector('#player-name');
  static cpuName = document.querySelector('#cpu-name');
  static playerPhoto = document.querySelector('#player-photo');
  static cpuPhoto = document.querySelector('#cpu-photo');

  static setEventListeners() {
    MainMenu.nameInput.addEventListener('input', (e) => {
      if (e.target.value.length > 0 && e.target.value.length <= 24) {
        MainMenu.playerName.textContent = MainMenu.nameInput.value;
        MainMenu.charSelectionWrapper.classList.add('opened');
        MainMenu.charOptions.forEach(option => {
          option.addEventListener('click', MainMenu.playerSelection);
        });
        if (MainMenu.playerChar && MainMenu.cpuChar) {
          MainMenu.placeShipsBtn.disabled = false;
        }
      } else {
        MainMenu.placeShipsBtn.disabled = true;
      }
    })

    MainMenu.langOptions.forEach(option => option.addEventListener('change', (e) => {
      MainMenu.changeLang(e.target);
    }));

    MainMenu.audioOptions.forEach(option => option.addEventListener('change', (e) => {
      MainMenu.changeAudio(e.target);
    }));

    MainMenu.placeShipsBtn.addEventListener('click', () => {
      if (!MainMenu.nameInput.value || !MainMenu.playerChar || !MainMenu.cpuChar) {
        return;
      }
      sessionStorage.setItem('player-name', MainMenu.nameInput.value);
      sessionStorage.setItem('lang', MainMenu.lang);
      sessionStorage.setItem('audio', MainMenu.audio);
      window.location.href = 'place-ships.html';
    });

    MainMenu.opponents.forEach(opponent => {
      opponent.addEventListener('click', (e) => MainMenu.playerEditing(e));
    });
  }

  static changeLang(input) {
    MainMenu.langOptions.forEach(option => option.classList.remove('lang-selected'));
    input.classList.add('lang-selected');
    MainMenu.lang = input.value;
  }

  static changeAudio(input) {
    MainMenu.audioOptions.forEach(option => option.classList.remove('audio-selected'));
    input.classList.add('audio-selected');
    MainMenu.audio = input.value;
  }

  static handleCharSelection(selectedChar) {
    MainMenu.resetCharSelection();
    selectedChar.classList.add('char-selected');
    selectedChar.classList.add(`char-selected--${MainMenu.isSelecting}`);
    MainMenu.opponents.forEach(opponent => {
      opponent.classList.remove('opponents__player--selected');
    });

    if (MainMenu.isSelecting === 'player') {
      MainMenu.associateCharToPlayer(selectedChar);
      if (MainMenu.isEditing) {
        MainMenu.deactivatePlayerSelection();
      } else {
        MainMenu.isSelecting = 'cpu'
        MainMenu.cpuPreview.classList.add('opponents__player--selected');
      }
      return;
    }
    
    if (MainMenu.isSelecting === 'cpu') {
      MainMenu.associateCharToCpu(selectedChar);
      MainMenu.deactivatePlayerSelection();
    }
  }

  static playerSelection = function(e) {
    MainMenu.handleCharSelection(e.currentTarget);
  }

  static playerEditing(e) {
    const opponent = e.currentTarget.id.includes('player') ? 'player' : 'cpu';
    if (!sessionStorage.getItem('player-char') || !sessionStorage.getItem('cpu-char')) return;

    MainMenu.placeShipsBtn.disabled = true;
    MainMenu.isSelecting = opponent;
    MainMenu.resetCharSelection();
    MainMenu.opponents.forEach(div => {
      div.classList.remove('opponents__player--selected');
      div.classList.remove('opponents__player--selectable');
    });
    e.currentTarget.classList.add('opponents__player--selected');

    if (MainMenu.isEditing) {
      MainMenu.restoreCharSelection();
    } else {
      MainMenu.isEditing = true;
      MainMenu.enableCharacterEditing();
    }

    MainMenu.hideChosenCharacter();
  }

  static enableCharacterEditing() {
    MainMenu.charSelectionWrapper.classList.remove('closed');
    MainMenu.charOptions.forEach(option => {
      option.addEventListener('click', MainMenu.playerSelection);
    });
  }

  static deactivatePlayerSelection() {
    MainMenu.charOptions.forEach(option => {
      option.removeEventListener('click', MainMenu.playerSelection);
      option.classList.remove('chosen');
    });

    MainMenu.opponents.forEach(opponent => {
      opponent.classList.remove('opponents__player--selected');
      opponent.classList.add('opponents__player--selectable');
    });

    MainMenu.charSelectionWrapper.classList.add('closed');
    MainMenu.isEditing = false;
    MainMenu.placeShipsBtn.disabled = false;
  }

  static resetCharSelection() {
    MainMenu.charOptions.forEach(option => {
      if (option.classList.contains(`char-selected--${MainMenu.isSelecting}`)) {
        option.classList.remove('char-selected');
        option.classList.remove(`char-selected--${MainMenu.isSelecting}`);
      }
    });
  }

  static associateCharToPlayer(selectedChar) {
    MainMenu.playerChar = selectedChar.id;
    MainMenu.playerPhoto.src = charObjects[selectedChar.id].src;
    MainMenu.playerPhoto.alt = charObjects[selectedChar.id].name;
    MainMenu.playerPhoto.classList.remove('animate');
    setTimeout(() => MainMenu.playerPhoto.classList.add('animate'));
    sessionStorage.setItem('player-char', MainMenu.playerChar);
  }

  static associateCharToCpu(selectedChar) {
    MainMenu.cpuChar = selectedChar.id;
    MainMenu.cpuName.textContent = charObjects[selectedChar.id].name;
    MainMenu.cpuPhoto.src = charObjects[selectedChar.id].src;
    MainMenu.cpuPhoto.alt = charObjects[selectedChar.id].name;
    MainMenu.cpuPhoto.classList.remove('animate');
    setTimeout(() => MainMenu.cpuPhoto.classList.add('animate'));
    sessionStorage.setItem('cpu-char', MainMenu.cpuChar);
  }

  static restoreCharSelection() {
    const wasSelecting = MainMenu.isSelecting === 'player' ? 'cpu' : 'player';
    const selectedChar = document.getElementById(sessionStorage.getItem(`${wasSelecting}-char`));
    selectedChar.classList.add('char-selected');
    selectedChar.classList.add(`char-selected--${wasSelecting}`);
    MainMenu.charOptions.forEach(option => option.classList.remove('chosen'));
  }

  static hideChosenCharacter() {
    const chosenCharacter = document.querySelector('.char-selected');
    chosenCharacter.classList.add('chosen');
  }

  static init() {
    sessionStorage.clear();
    MainMenu.setEventListeners();
  }
}

MainMenu.init();