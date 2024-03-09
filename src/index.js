import './style.css';
import './main-menu.css';

class MainMenu {
  static lang = 'pt';
  static audio = 'on';
  static player1char = null;
  static player2char = null;
  static isSelecting = 'player1';

  static inputName = document.querySelector('#player-name');
  static langOptions = document.querySelectorAll('.language-radio');
  static audioOptions = document.querySelectorAll('.audio-radio');
  static charOptions = document.querySelectorAll('.character-radio');
  static placeShipsBtn = document.querySelector('#place-ships');
  static charSelection = document.querySelector('.character-selection-wrapper');

  static setEventListeners() {
    MainMenu.langOptions.forEach(option => option.addEventListener('change', (e) => {
      MainMenu.changelang(e.target);
    }));

    MainMenu.audioOptions.forEach(option => option.addEventListener('change', (e) => {
      MainMenu.changeAudio(e.target);
    }));

    MainMenu.charOptions.forEach(option => {
      option.addEventListener('change', MainMenu.playerSelection);
    });

    MainMenu.placeShipsBtn.addEventListener('click', () => {
      if (!MainMenu.inputName.value || !MainMenu.player1char || !MainMenu.player2char) {
        return;
      }
      sessionStorage.setItem('player1-name', MainMenu.inputName.value);
      sessionStorage.setItem('lang', MainMenu.lang);
      sessionStorage.setItem('audio', MainMenu.audio);
      sessionStorage.setItem('player1-char', MainMenu.player1char);
      sessionStorage.setItem('player2-char', MainMenu.player2char);
      window.location.href = 'place-ships.html';
    });
  }

  static changelang(input) {
    this.langOptions.forEach(option => option.classList.remove('lang-selected'));
    input.classList.add('lang-selected');
    MainMenu.lang = input.value;
  }

  static changeAudio(input) {
    this.audioOptions.forEach(option => option.classList.remove('audio-selected'));
    input.classList.add('audio-selected');
    MainMenu.audio = input.value;
  }

  static changechar(input) {
    input.classList.add('char-selected');
    
    if (MainMenu.isSelecting === 'player1') {
      MainMenu.player1char = input.value;
      input.classList.add('char-selected--player1');
      MainMenu.isSelecting = 'player2';
      return;
    }
    
    if (MainMenu.isSelecting === 'player2') {
      MainMenu.player2char = input.value;
      input.classList.add('char-selected--player2');
      MainMenu.isSelecting = false;
      MainMenu.deactivatePlayerSelection();
    }
  }

  static playerSelection = function(e) {
    MainMenu.changechar(e.target);
  }

  static deactivatePlayerSelection() {
    MainMenu.charOptions.forEach(option => {
      option.removeEventListener('change', MainMenu.playerSelection);
    });

    MainMenu.charSelection.classList.add('closed');
  }

  static init() {
    MainMenu.setEventListeners();
  }
}

MainMenu.init();