import Settings from './settings.js';

export default class Header {
  static navBtn = document.querySelector('#nav-btn');
  static navMenu = document.querySelector('#nav-menu');
  static navBattle = document.querySelector('#nav-battle');
  static navPlaceShips = document.querySelector('#nav-place-ships');
  static navMainMenu = document.querySelector('#nav-main-menu');
  static optionsBtn = document.querySelector('#options-btn');
  static closeOptions = document.querySelector('#close-options');
  static optionsModal = document.querySelector('#options-modal');
  static langOptions = document.querySelectorAll('.language-radio');
  static musicVolumeSlider = document.querySelector('#music-volume-slider');
  static sfxVolumeSlider = document.querySelector('#sfx-volume-slider');

  static setEventListeners() {
    Header.navBtn.addEventListener('click', Header.openNavigation);
    document.addEventListener('click', (e) => Header.closeNavigation(e));
    Header.navBattle.addEventListener('click', () => window.location.href = 'battle.html');
    Header.navPlaceShips.addEventListener('click', () => window.location.href = 'place-ships.html');
    Header.navMainMenu.addEventListener('click', () => window.location.href = 'index.html');
    Header.optionsBtn.addEventListener('click', Header.openOptionsModal);
    Header.closeOptions.addEventListener('click', Header.closeOptionsModal);

    Header.langOptions.forEach(option => option.addEventListener('change', (e) => {
      Header.langOptions.forEach(option => option.classList.remove('lang-selected'));
      e.target.classList.add('lang-selected');
      Settings.changeLang(e.target);
    }));

    Header.musicVolumeSlider.addEventListener('change', (e) => {
      Settings.setMusicVolume(parseFloat(e.target.value));
    });

    Header.sfxVolumeSlider.addEventListener('change', (e) => {
      Settings.setSfxVolume(parseFloat(e.target.value));
    });
  }

  static openNavigation() {
    Header.navMenu.classList.toggle('opened');
  }

  static closeNavigation(e) {
    if (e.target !== Header.navBtn) {
      Header.navMenu.classList.remove('opened');
    }
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