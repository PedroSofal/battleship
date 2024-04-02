import Settings from "./settings.js";

export default class Header {
  static optionsBtn = document.querySelector('#options-btn');
  static closeOptions = document.querySelector('#close-options');
  static optionsModal = document.querySelector('#options-modal');
  static langOptions = document.querySelectorAll('.language-radio');
  static musicOptions = document.querySelectorAll('.music-radio');
  static sfxOptions = document.querySelectorAll('.sfx-radio');

  static setEventListeners() {
    Header.optionsBtn.addEventListener('click', Header.openOptionsModal);
    Header.closeOptions.addEventListener('click', Header.closeOptionsModal);

    Header.langOptions.forEach(option => option.addEventListener('change', (e) => {
      Header.langOptions.forEach(option => option.classList.remove('lang-selected'));
      Settings.changeLang(e.target);
    }));

    Header.musicOptions.forEach(option => option.addEventListener('change', (e) => {
      Header.musicOptions.forEach(option => option.classList.remove('audio-selected'));
      Settings.muteUnmuteMusic(e.target);
    }));

    Header.sfxOptions.forEach(option => option.addEventListener('change', (e) => {
      Header.sfxOptions.forEach(option => option.classList.remove('audio-selected'));
      Settings.muteUnmuteSfx(e.target);
    }));
  }

  static openOptionsModal() {
    Header.optionsModal.classList.add('dialog--open');
    Settings.loadSettings();
    Header.optionsModal.showModal();
  }

  static closeOptionsModal() {
    Header.optionsModal.classList.remove('dialog--open');
    Header.optionsModal.close();
  }

  static init() {
    Header.setEventListeners();
  }
}