import './style.css';
import './main-menu.css';
import { charObjects } from './characters.js';

class MainMenu {
  static lang = 'pt';
  static audio = 'on';
  static player1Char = null;
  static player2Char = null;
  static isSelecting = 'player1';

  static inputName = document.querySelector('#player-name');
  static langOptions = document.querySelectorAll('.language-radio');
  static audioOptions = document.querySelectorAll('.audio-radio');
  static charOptions = document.querySelectorAll('.character-radio');
  static chooseCharacterBtn = document.querySelector('#choose-character');
  static placeShipsBtn = document.querySelector('#place-ships');
  static charSelectionWrapper = document.querySelector('.character-selection-wrapper');
  static player1Name = document.querySelector('#player1Name');
  static player2Name = document.querySelector('#player2Name');
  static player1Photo = document.querySelector('#player1Photo');
  static player2Photo = document.querySelector('#player2Photo');

  static setEventListeners() {
    MainMenu.inputName.addEventListener('input', (e) => {
      if (e.target.value.length > 0 && e.target.value.length < 16) {
        MainMenu.chooseCharacterBtn.disabled = false;
      } else {
        MainMenu.chooseCharacterBtn.disabled = true;
      }
    })

    MainMenu.langOptions.forEach(option => option.addEventListener('change', (e) => {
      MainMenu.changeLang(e.target);
    }));

    MainMenu.audioOptions.forEach(option => option.addEventListener('change', (e) => {
      MainMenu.changeAudio(e.target);
    }));

    MainMenu.chooseCharacterBtn.addEventListener('click', () => {
      if (!MainMenu.inputName.value) {
        return;
      }
      MainMenu.charSelectionWrapper.classList.add('opened');
      MainMenu.player1Name.textContent = MainMenu.inputName.value
      MainMenu.charOptions.forEach(option => {
        option.addEventListener('change', MainMenu.playerSelection);
      });
    });

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
    input.classList.add('char-selected');
    
    if (MainMenu.isSelecting === 'player1') {
      MainMenu.player1Char = input.value;
      MainMenu.player1Photo.src = charObjects[input.value].src;
      MainMenu.player1Photo.alt = charObjects[input.value].name;
      input.classList.add('char-selected--player1');
      MainMenu.isSelecting = 'player2';
      console.log(input)
      input.removeEventListener('change', MainMenu.playerSelection);
      return;
    }
    
    if (MainMenu.isSelecting === 'player2') {
      MainMenu.player2Char = input.value;
      MainMenu.player2Name.textContent = charObjects[input.value].name;
      MainMenu.player2Photo.src = charObjects[input.value].src;
      MainMenu.player2Photo.alt = charObjects[input.value].name;
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

  static init() {
    MainMenu.setEventListeners();
  }
}

MainMenu.init();