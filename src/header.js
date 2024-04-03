import Settings from "./settings.js";

export default class Header {
  static optionsBtn = document.querySelector('#options-btn');
  static closeOptions = document.querySelector('#close-options');
  static optionsModal = document.querySelector('#options-modal');
  static langOptions = document.querySelectorAll('.language-radio');
  static musicVolumeSlider = document.querySelector('#music-volume-slider');
  static sfxVolumeSlider = document.querySelector('#sfx-volume-slider');

  static setEventListeners() {
    Header.optionsBtn.addEventListener('click', Header.openOptionsModal);
    Header.closeOptions.addEventListener('click', Header.closeOptionsModal);

    Header.langOptions.forEach(option => option.addEventListener('change', (e) => {
      Header.langOptions.forEach(option => option.classList.remove('lang-selected'));
      Settings.changeLang(e.target);
    }));

    Header.musicVolumeSlider.addEventListener('change', (e) => {
      Settings.setMusicVolume(parseFloat(e.target.value));
    });

    Header.sfxVolumeSlider.addEventListener('change', (e) => {
      Settings.setSfxVolume(parseFloat(e.target.value));
    });
  }

  static openOptionsModal() {
    Header.optionsModal.classList.add('dialog--open');
    Settings.loadHeaderSettings();
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