import speakerOn from './assets/icons/audio-enabled.png'
import speakerOff from './assets/icons/audio-disabled.png'
import Settings from "./settings.js";

export default class Header {
  // static flag = document.querySelector('#flag');
  static audio = document.querySelector('#audio');
  static speaker = document.querySelector('#speaker');

  static setEventListeners() {
    // Header.flag.addEventListener('click', (e) => Settings.changeLang(e.target));
    Header.audio.addEventListener('click', (e) => {
      Settings.changeAudio(e.target);
      Header.updateSpeakerIcon();
    });
  }

  static updateSpeakerIcon() {
    if (localStorage.getItem('audio') === 'on') {
      Header.speaker.src = speakerOn;
    } else {
      Header.speaker.src = speakerOff;
    }
  }

  static init() {
    Header.updateSpeakerIcon();
    Header.setEventListeners();
  }
}