import GameAudio from './audio.js';
import GameSpeed from './speed.js';

export default class Settings {
  static changeLang(input) {
    localStorage.setItem('lang', input.value);
    Settings.loadLanguage();
  }

  static setMusicVolume(volume) {
    GameAudio.setMusicVolume(volume);
    localStorage.setItem('music-vol', volume);
  }

  static setSfxVolume(volume) {
    localStorage.setItem('sfx-vol', volume);
    if (GameAudio.radarLockAudio) {
      GameAudio.radarLockAudio.volume = parseFloat(volume);
    }
  }

  static setLanguageDataAttributes(htmlElement, array) {
    htmlElement.setAttribute('data-en', array[0]);
    htmlElement.setAttribute('data-pt', array[1]);
  }

  static setGameSpeed(speed) {
    localStorage.setItem('game-speed', speed);
    GameSpeed.activeGameSpeed = GameSpeed.speedOptionsArray[speed];
  }

  static getGameSpeed() {
    return GameSpeed.getActiveGameSpeed();
  }

  static loadLanguage() {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');

    const textElements = document.querySelectorAll('[data-en]');
    const langOptions = document.querySelectorAll('.language-radio');
    const chosenLang = localStorage.getItem('lang');

    textElements.forEach(element => element.textContent = element.getAttribute(`data-${chosenLang}`));
    langOptions.forEach(element => {
      element.classList.remove('lang-selected');
      if (element.value === localStorage.getItem('lang')) {
        element.classList.add('lang-selected');
      }
    });
  }

  static loadSettings() {
    if (!localStorage.getItem('music-vol') || !localStorage.getItem('sfx-vol') || !localStorage.getItem('game-speed')) {
      localStorage.setItem('music-vol', 1);
      localStorage.setItem('sfx-vol', 1);
      localStorage.setItem('game-speed', 0);
    }

    const speedOptions = document.querySelectorAll('[id$="game-speed"]');
    const musicVolume = parseFloat(localStorage.getItem('music-vol'));
    const sfxVolume = parseFloat(localStorage.getItem('sfx-vol'));
    const gameSpeed = parseFloat(localStorage.getItem('game-speed'));

    document.querySelector('#music-volume-slider').value = parseFloat(musicVolume);
    document.querySelector('#sfx-volume-slider').value = parseFloat(sfxVolume);

    speedOptions.forEach(element => {
      element.classList.remove('selected');
      if (parseFloat(element.value) === gameSpeed) {
        element.classList.add('selected');
      }
    });
    
    Settings.loadLanguage();
  }
}