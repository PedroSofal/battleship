import settingsHTML from '../../html/components/settings-modal.html';
document.body.innerHTML += settingsHTML;

import GameAudio from './audio.js';
import GameSpeed from './speed.js';

export default class Settings {
  static settingsButton = null;
  static closeSettings = null;
  static settingsModal = null;
  static langOptions = null;
  static speedOptions = null;
  static difficultyOptions = null;
  static musicVolumeSlider = null;
  static sfxVolumeSlider = null;

  static queryElements() {
    Settings.settingsButton = document.querySelector('#settings');
    Settings.closeSettings = document.querySelector('#close-settings');
    Settings.settingsModal = document.querySelector('#settings-modal');
    Settings.langOptions = document.querySelectorAll('.language-radio');
    Settings.speedOptions = document.querySelectorAll('[id$="game-speed"]');
    Settings.difficultyOptions = document.querySelectorAll('.difficulty-option');
    Settings.musicVolumeSlider = document.querySelector('#music-volume-slider');
    Settings.sfxVolumeSlider = document.querySelector('#sfx-volume-slider');
  }

  static setEventListeners() {
    Settings.settingsButton.addEventListener('click', Settings.openSettingsModal);
    Settings.closeSettings.addEventListener('click', Settings.closeSettingsModal);

    Settings.langOptions.forEach(option => option.addEventListener('change', (e) => {
      Settings.setLanguage(e.target);
    }));

    Settings.speedOptions.forEach(option => option.addEventListener('click', (e) => {
      Settings.setGameSpeed(e.target.value);
    }));

    Settings.difficultyOptions.forEach(option => option.addEventListener('click', (e) => {
      Settings.setDifficulty(e.target.value);
    }));

    Settings.musicVolumeSlider.addEventListener('change', (e) => {
      Settings.setMusicVolume(parseFloat(e.target.value));
    });

    Settings.sfxVolumeSlider.addEventListener('change', (e) => {
      Settings.setSfxVolume(parseFloat(e.target.value));
    });
  }
  static openSettingsModal() {
    Settings.settingsModal.classList.add('opened');
    Settings.settingsModal.showModal();
  }

  static closeSettingsModal() {
    Settings.settingsModal.classList.remove('opened');
    Settings.settingsModal.close();
  }

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

  static setDifficulty(difficulty) {
    localStorage.setItem('difficulty', difficulty);
    Settings.loadDifficultySettings();
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
      element.classList.remove('selected');
      if (element.value === localStorage.getItem('lang')) {
        element.classList.add('selected');
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

  static loadDifficultySettings() {
    if (!localStorage.getItem('difficulty')) {
      localStorage.setItem('difficulty', 0);
    }

    const difficultyOptions = document.querySelectorAll('.difficulty-option');
    const difficulty = parseFloat(localStorage.getItem('difficulty'));

    difficultyOptions.forEach(element => {
      element.classList.remove('selected');
      element.selected = false;
      if (parseFloat(element.value) === difficulty) {
        element.classList.add('selected');
        element.selected = true;
      }
    });
  }

  static loadAllSettings() {
    Settings.loadAudioSettings();
    Settings.loadGameSpeedSettings();
    Settings.loadDifficultySettings();
    Settings.loadLanguageSettings();
  }

  static init() {
    Settings.queryElements();
    Settings.loadAllSettings();
    Settings.setEventListeners();
  }
}