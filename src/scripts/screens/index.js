import '../../styles/style.css';
import '../../styles/main-menu.css';
import '../../styles/containers.css';
import '../../styles/buttons.css';
import '../../styles/options.css';

import GameAudio from '../helpers/audio.js';
import Settings from '../helpers/settings.js';
import LoadingScreen from './loading-screen.js';
import CharSelection from '../helpers/char-selection.js';

class MainMenu {
  static nameInput = document.querySelector('#name-input');
  static langOptions = document.querySelectorAll('.language-radio');
  static musicVolumeSlider = document.querySelector('#music-volume-slider');
  static sfxVolumeSlider = document.querySelector('#sfx-volume-slider');
  static placeShipsBtn = document.querySelector('#place-ships');

  static setEventListeners() {
    MainMenu.nameInput.addEventListener('input', (e) => {
      if (e.target.value.length > 0 && e.target.value.length <= 24) {
        MainMenu.handleNameInput();
      } else {
        MainMenu.placeShipsBtn.disabled = true;
      }
    });

    MainMenu.langOptions.forEach(option => option.addEventListener('change', (e) => {
      Settings.setLanguage(e.target);
    }));

    MainMenu.musicVolumeSlider.addEventListener('change', (e) => {
      Settings.setMusicVolume(parseFloat(e.target.value));
    });

    MainMenu.sfxVolumeSlider.addEventListener('change', (e) => {
      Settings.setSfxVolume(parseFloat(e.target.value));
    });

    MainMenu.placeShipsBtn.addEventListener('click', () => {
      MainMenu.nextScreen();
    });
  }

  static handleNameInput() {
    CharSelection.playerName.textContent = MainMenu.nameInput.value;
    CharSelection.activatePlayerSelection();
    if (CharSelection.playerChar && CharSelection.cpuChar) {
      MainMenu.placeShipsBtn.disabled = false;
    }
  }

  static playMainMenuMusic() {
    GameAudio.playMusic(GameAudio.mainMenu);
    document.body.removeEventListener('mousedown', MainMenu.playMainMenuMusic);
  }

  static nextScreen() {
    if (MainMenu.nameInput.value && CharSelection.playerChar && CharSelection.cpuChar) {
      sessionStorage.setItem('player-name', MainMenu.nameInput.value);
      sessionStorage.setItem('route-safe', 1);
      window.location.href = 'strategy-room.html';
    }
  }

  static init() {
    sessionStorage.clear();
    Settings.loadAllSettings();
    MainMenu.setEventListeners();
    document.body.addEventListener('mousedown', MainMenu.playMainMenuMusic);
  }
}

LoadingScreen.init();
MainMenu.init();