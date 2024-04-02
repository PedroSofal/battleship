import GameAudio from "./audio.js";

export default class Settings {
  static changeLang(input) {
    input.classList.add('lang-selected');
    localStorage.setItem('lang', input.value);
  }

  static muteUnmuteMusic(input) {
    if (input.type === 'checkbox') {
      input.checked ? input.value = 'on' : input.value = 'off';
    }

    input.classList.add('audio-selected');
    input.value === 'on' ? GameAudio.unmuteMusic() : GameAudio.muteMusic();
    localStorage.setItem('music', input.value);
  }

  static muteUnmuteSfx(input) {
    if (input.type === 'checkbox') {
      input.checked ? input.value = 'on' : input.value = 'off';
    }

    input.classList.add('audio-selected');
    localStorage.setItem('sfx', input.value);
  }

  static loadSettings() {
    const music = localStorage.getItem('music');
    const sfx = localStorage.getItem('sfx');

    if (music === 'on') {
      document.querySelector('#music-on').classList.add('audio-selected');
    } else if (music === 'off') {
      document.querySelector('#music-off').classList.add('audio-selected');
    } else {
      document.querySelector('#music-on').classList.add('audio-selected');
      localStorage.setItem('music', 'on');
    }

    if (sfx === 'on') {
      document.querySelector('#sfx-on').classList.add('audio-selected');
    } else if (sfx === 'off') {
      document.querySelector('#sfx-off').classList.add('audio-selected');
    } else {
      document.querySelector('#sfx-on').classList.add('audio-selected');
      localStorage.setItem('sfx', 'on');
    }
  }
}