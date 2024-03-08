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
      MainMenu.changelang(e.target.value);
    }));

    MainMenu.audioOptions.forEach(option => option.addEventListener('change', (e) => {
      MainMenu.changeAudio(e.target.value);
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

  static changelang(lang) {
    MainMenu.lang = lang;
  }

  static changeAudio(audio) {
    MainMenu.audio = audio;
  }

  static changechar(char) {
    char.classList.add('char-selected');
    
    if (MainMenu.isSelecting === 'player1') {
      MainMenu.player1char = char.value;
      char.classList.add('char-selected--player1');
      MainMenu.isSelecting = 'player2';
      return;
    }
    
    if (MainMenu.isSelecting === 'player2') {
      MainMenu.player2char = char.value;
      char.classList.add('char-selected--player2');
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