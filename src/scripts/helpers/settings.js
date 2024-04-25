import GameAudio from './audio.js';
import GameSpeed from './speed.js';

export default class Settings {
  static setLanguage(input) {
    localStorage.setItem('lang', input.value);
    Settings.loadLanguageSettings();
  }

  static setMusicVolume(volume) {
    localStorage.setItem('music-vol', volume);
    GameAudio.setMusicVolume(volume);
    Settings.loadAudioSettings();
  }

  static setSfxVolume(volume) {
    localStorage.setItem('sfx-vol', volume);
    if (GameAudio.radarLockAudio) {
      GameAudio.radarLockAudio.volume = parseFloat(volume);
    }
    Settings.loadAudioSettings();
  }

  static setLanguageDataAttributes(htmlElement, array) {
    htmlElement.setAttribute('data-en', array[0]);
    htmlElement.setAttribute('data-pt', array[1]);
  }

  static setGameSpeed(speed) {
    localStorage.setItem('game-speed', speed);
    GameSpeed.activeGameSpeed = GameSpeed.speedOptionsArray[speed];
    Settings.loadGameSpeedSettings();
  }

  static getGameSpeed() {
    return GameSpeed.getActiveGameSpeed();
  }

  static loadLanguageSettings() {
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

  static loadAudioSettings() {
    if (!localStorage.getItem('music-vol') || !localStorage.getItem('sfx-vol')) {
      localStorage.setItem('music-vol', 1);
      localStorage.setItem('sfx-vol', 1);
    }

    const musicVolume = parseFloat(localStorage.getItem('music-vol'));
    const sfxVolume = parseFloat(localStorage.getItem('sfx-vol'));
    document.querySelector('#music-volume-slider').value = parseFloat(musicVolume);
    document.querySelector('#sfx-volume-slider').value = parseFloat(sfxVolume);
  }

  static loadGameSpeedSettings() {
    if (!localStorage.getItem('game-speed')) {
      localStorage.setItem('game-speed', 0);
    }

    const speedOptions = document.querySelectorAll('[id$="game-speed"]');
    const gameSpeed = parseFloat(localStorage.getItem('game-speed'));

    speedOptions.forEach(element => {
      element.classList.remove('selected');
      if (parseFloat(element.value) === gameSpeed) {
        element.classList.add('selected');
      }
    });
  }

  static loadAllSettings() {
    Settings.loadAudioSettings();
    Settings.loadGameSpeedSettings();
    Settings.loadLanguageSettings();
  }
}