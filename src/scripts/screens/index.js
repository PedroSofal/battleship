import '../../styles/style.css';
import '../../styles/main-menu.css';
import '../../styles/layouts.css';
import '../../styles/buttons.css';
import '../../styles/options.css';
import '../../styles/dialogs.css';
import '../../styles/options.css';

import GameAudio from '../helpers/audio.js';
import Settings from '../helpers/settings.js';
import Navigation from '../helpers/navigation.js';
import Animation from '../helpers/animations.js';

class MainMenu {
  static continueButton = document.querySelector('#continue');
  static newGameButton = document.querySelector('#new-game');
  static settingsButton = document.querySelector('#settings');
  static propeller1 = document.querySelector('#helicopter1 .propeller');
  static propeller2 = document.querySelector('#helicopter2 .propeller');

  static setEventListeners() {
    MainMenu.continueButton.addEventListener('click', () => {
      if (localStorage.getItem('saved-game')) {
        sessionStorage.setItem('route-safe', 3);
        Navigation.toBattle();
      }
    });

    MainMenu.newGameButton.addEventListener('click', () => {
      sessionStorage.setItem('route-safe', 1);
      Navigation.toCharacterSelection();
    });
  }

  static verifySavedGame() {
    if (localStorage.getItem('saved-game')) {
      MainMenu.continueButton.disabled = false;
    }
  }

  static playMainMenuMusic() {
    GameAudio.playMusic(GameAudio.mainMenu);
    document.body.removeEventListener('mousedown', MainMenu.playMainMenuMusic);
  }

  static init() {
    sessionStorage.clear();
    Animation.rotatePropeller(MainMenu.propeller1);
    Animation.rotatePropeller(MainMenu.propeller2);
    Animation.moveSea();
    Settings.init();
    MainMenu.verifySavedGame();
    MainMenu.setEventListeners();
    document.body.addEventListener('mousedown', MainMenu.playMainMenuMusic);
  }
}

Navigation.loadScreen();
MainMenu.init();