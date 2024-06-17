import activationScreenHTML from '../../html/components/activation-screen.html';
document.querySelector('#content').innerHTML += activationScreenHTML;

import '../../styles/style.css';
import '../../styles/main-menu.css';
import '../../styles/buttons.css';
import '../../styles/options.css';
import '../../styles/dialogs.css';
import '../../styles/options.css';

import GameAudio from '../helpers/audio.js';
import Settings from '../helpers/settings.js';
import Navigation from '../helpers/navigation.js';
import Animation from '../helpers/animations.js';

class MainMenu {
  static content = document.querySelector('#content');
  static activationScreen = document.querySelector('#activation-screen');
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

    window.addEventListener('click', MainMenu.closeActivationScreen);
    window.addEventListener('touchend', MainMenu.closeActivationScreen);
    window.addEventListener('keydown', MainMenu.closeActivationScreen);
  }

  static closeActivationScreen() {
    MainMenu.activationScreen.close();
    MainMenu.content.classList.remove('blurred');
    GameAudio.liberate();
    window.removeEventListener('click', MainMenu.closeActivationScreen);
    window.removeEventListener('keydown', MainMenu.closeActivationScreen);
  }

  static verifySavedGame() {
    if (localStorage.getItem('saved-game')) {
      MainMenu.continueButton.disabled = false;
    }
  }

  static playMainMenuMusic() {
    GameAudio.playMusic(GameAudio.mainMenu);
  }

  static init() {
    sessionStorage.clear();
    Settings.init();
    MainMenu.activationScreen.showModal();
    MainMenu.playMainMenuMusic();
    Animation.rotatePropeller(MainMenu.propeller1);
    Animation.rotatePropeller(MainMenu.propeller2);
    Animation.moveSea();
    MainMenu.verifySavedGame();
    MainMenu.setEventListeners();
  }
}

Navigation.loadScreen();
MainMenu.init();