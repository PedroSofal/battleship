import GameAudio from './audio.js';

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

  static loadLanguage() {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');

    const textElements = document.querySelectorAll('[data-en]');
    const langOptions = document.querySelectorAll('.language-radio');
    const chosenLang = localStorage.getItem('lang');
    textElements.forEach(element => element.textContent = element.getAttribute(`data-${chosenLang}`));
    langOptions.forEach(element => {
      element.classList.remove('lang-selected');
      if (element.id === `lang-${localStorage.getItem('lang')}`) {
        element.classList.add('lang-selected');
      }
    })
  }

  static loadSettings() {
    if (!localStorage.getItem('music-vol') || !localStorage.getItem('sfx-vol')) {
      localStorage.setItem('music-vol', 1);
      localStorage.setItem('sfx-vol', 1)
    }

    const musicVolume = parseFloat(localStorage.getItem('music-vol'));
    const sfxVolume = parseFloat(localStorage.getItem('sfx-vol'));

    document.querySelector('#music-volume-slider').value = parseFloat(musicVolume);
    document.querySelector('#sfx-volume-slider').value = parseFloat(sfxVolume);
    
    Settings.loadLanguage();
  }
}