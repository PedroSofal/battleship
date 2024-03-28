import GameAudio from "./audio.js";

export default class Settings {
  static changeLang(input) {
    input.classList.add('lang-selected');
    localStorage.setItem('lang', input.value);
  }

  static changeAudio(input) {
    if (input.type === 'checkbox') {
      input.checked ? input.value = 'on' : input.value = 'off';
    }

    input.classList.add('audio-selected');
    input.value === 'on' ? GameAudio.unmute() : GameAudio.mute();
    localStorage.setItem('audio', input.value);
  }
}