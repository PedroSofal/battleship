import GameAudio from "./audio.js";

export default class Settings {
  static changeLang(input) {
    localStorage.setItem('lang', input.value);
  }

  static setMusicVolume(volume) {
    GameAudio.setMusicVolume(volume);
    localStorage.setItem('music-vol', volume);
  }

  static setSfxVolume(volume) {
    localStorage.setItem('sfx-vol', volume);
  }

  static loadMainMenuSettings() {
    const musicVolume = parseFloat(localStorage.getItem('music-vol'));
    const sfxVolume = parseFloat(localStorage.getItem('sfx-vol'));

    if (musicVolume > 0) {
      document.querySelector('#music-on').classList.add('audio-selected');
    } else if (musicVolume === 0) {
      document.querySelector('#music-off').classList.add('audio-selected');
    } else {
      document.querySelector('#music-on').classList.add('audio-selected');
      localStorage.setItem('music-vol', 1);
    }

    if (sfxVolume > 0) {
      document.querySelector('#sfx-on').classList.add('audio-selected');
    } else if (sfxVolume === 0) {
      document.querySelector('#sfx-off').classList.add('audio-selected');
    } else {
      document.querySelector('#sfx-on').classList.add('audio-selected');
      localStorage.setItem('sfx-vol', 1);
    }
  }

  static loadHeaderSettings() {
    const musicVolume = parseFloat(localStorage.getItem('music-vol'));
    const sfxVolume = parseFloat(localStorage.getItem('sfx-vol'));

    document.querySelector('#music-volume-slider').value = parseFloat(musicVolume);
    document.querySelector('#sfx-volume-slider').value = parseFloat(sfxVolume);
  }
}