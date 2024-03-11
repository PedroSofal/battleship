import './style.css';
import './main-menu.css';
import { charObjects } from './characters.js';

class MainMenu {
  static lang = 'pt';
  static audio = 'on';
  static player1Char = null;
  static player2Char = null;
  static isSelecting = 'player1';
  static isEditing = false;

  static inputName = document.querySelector('#player-name');
  static langOptions = document.querySelectorAll('.language-radio');
  static audioOptions = document.querySelectorAll('.audio-radio');
  static charOptions = document.querySelectorAll('.character-radio');
  static placeShipsBtn = document.querySelector('#place-ships');
  static charSelectionWrapper = document.querySelector('.character-selection-wrapper');
  static player1Preview = document.querySelector('#player1-preview');
  static player2Preview = document.querySelector('#player2-preview');
  static player1Name = document.querySelector('#player1-name');
  static player2Name = document.querySelector('#player2-name');
  static player1Photo = document.querySelector('#player1-photo');
  static player2Photo = document.querySelector('#player2-photo');

  static setEventListeners() {
    MainMenu.inputName.addEventListener('input', (e) => {
      if (e.target.value.length > 0 && e.target.value.length <= 24) {
        MainMenu.player1Name.textContent = MainMenu.inputName.value;
        MainMenu.charSelectionWrapper.classList.add('opened');
        MainMenu.charOptions.forEach(option => {
          option.addEventListener('change', MainMenu.playerSelection);
        });
        if (MainMenu.player1Char && MainMenu.player2Char) {
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
      if (!MainMenu.inputName.value || !MainMenu.player1Char || !MainMenu.player2Char) {
        return;
      }
      sessionStorage.setItem('player1-name', MainMenu.inputName.value);
      sessionStorage.setItem('lang', MainMenu.lang);
      sessionStorage.setItem('audio', MainMenu.audio);
      sessionStorage.setItem('player1-char', MainMenu.player1Char);
      sessionStorage.setItem('player2-char', MainMenu.player2Char);
      window.location.href = 'place-ships.html';
    });

    MainMenu.player1Preview.addEventListener('click', () => {
      MainMenu.isSelecting = 'player1';
      MainMenu.enableCharacterEditing();
    });

    MainMenu.player2Preview.addEventListener('click', () => {
      MainMenu.isSelecting = 'player2';
      MainMenu.enableCharacterEditing();
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

  static changechar(input) {
    if (MainMenu.isSelecting === 'player1') {
      MainMenu.charOptions.forEach(option => {
        if (option.classList.contains('char-selected--player1')) {
          option.classList.remove('char-selected')
          option.classList.remove('char-selected--player1')
        }
      });

      MainMenu.player1Char = input.value;
      MainMenu.player1Photo.src = charObjects[input.value].src;
      MainMenu.player1Photo.alt = charObjects[input.value].name;
      input.classList.add('char-selected');
      input.classList.add('char-selected--player1');
      input.removeEventListener('change', MainMenu.playerSelection);
      if (MainMenu.isEditing) {
        MainMenu.deactivatePlayerSelection();
      } else {
        MainMenu.isSelecting = 'player2';
      }
      return;
    }
    
    if (MainMenu.isSelecting === 'player2') {
      MainMenu.charOptions.forEach(option => {
        if (option.classList.contains('char-selected--player2')) {
          option.classList.remove('char-selected')
          option.classList.remove('char-selected--player2')
        }
      });

      MainMenu.player2Char = input.value;
      MainMenu.player2Name.textContent = charObjects[input.value].name;
      MainMenu.player2Photo.src = charObjects[input.value].src;
      MainMenu.player2Photo.alt = charObjects[input.value].name;
      input.classList.add('char-selected');
      input.classList.add('char-selected--player2');
      MainMenu.isSelecting = false;
      MainMenu.deactivatePlayerSelection();
      MainMenu.placeShipsBtn.disabled = false;
    }
  }

  static playerSelection = function(e) {
    MainMenu.changechar(e.target);
  }

  static deactivatePlayerSelection() {
    MainMenu.charOptions.forEach(option => {
      option.removeEventListener('change', MainMenu.playerSelection);
    });

    MainMenu.charSelectionWrapper.classList.add('closed');
  }

  static enableCharacterEditing() {
    MainMenu.isEditing = true;
    MainMenu.charSelectionWrapper.classList.remove('closed');
    MainMenu.charOptions.forEach(option => {
      option.addEventListener('change', MainMenu.playerSelection);
    });
  }

  static init() {
    MainMenu.setEventListeners();
  }
}

MainMenu.init();