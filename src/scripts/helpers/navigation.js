import Save from './save.js';
import Settings from './settings.js';

export default class Navigation {
  static navBtn = document.querySelector('#navigate');
  static navMenu = document.querySelector('#nav-menu');
  static navBattle = document.querySelector('#nav-battle');
  static navCharacterSelection = document.querySelector('#nav-character-selection');
  static navStrategyRoom = document.querySelector('#nav-strategy-room');
  static navMainMenu = document.querySelector('#nav-main-menu');
  static confirmNavModal = document.querySelector('#confirm-nav-modal');
  static confirmNavPrompt = document.querySelector('#prompt');
  static yes = document.querySelector('#yes');
  static no = document.querySelector('#no');

  static setEventListeners() {
    Navigation.navBtn.addEventListener('click', Navigation.openNavigation);
    document.addEventListener('click', (e) => Navigation.closeNavigation(e));
    Navigation.navBattle.addEventListener('click', Navigation.reloadBattle);
    Navigation.navCharacterSelection.addEventListener('click', Navigation.backToCharacterSelection);
    Navigation.navStrategyRoom.addEventListener('click', Navigation.backToStrategyRoom);
    Navigation.navMainMenu.addEventListener('click', Navigation.toMainMenu);
  }

  static openNavigation() {
    Navigation.navMenu.classList.toggle('opened');
  }

  static closeNavigation(e) {
    if (e.target !== Navigation.navBtn) {
      Navigation.navMenu.classList.remove('opened');
    }
  }

  static confirmNavigation(message_EN, message_PT, yesBtn_EN, yesBtn_PT, noBtn_EN, noBtn_PT, destiny) {
    Navigation.confirmNavPrompt.setAttribute('data-en', message_EN);
    Navigation.confirmNavPrompt.setAttribute('data-pt', message_PT);
    Navigation.yes.setAttribute('data-en', yesBtn_EN);
    Navigation.yes.setAttribute('data-pt', yesBtn_PT);
    Navigation.no.setAttribute('data-en', noBtn_EN);
    Navigation.no.setAttribute('data-pt', noBtn_PT);
    Settings.loadLanguageSettings();
    Navigation.confirmNavModal.classList.add('opened');
    Navigation.confirmNavModal.showModal();

    Navigation.no.addEventListener('click', () => {
      Navigation.confirmNavModal.close();
    })

    Navigation.yes.addEventListener('click', () => {
      Navigation.confirmNavModal.close();
      Save.deleteSavedGameData();
      window.location.href = destiny;
    })
  }

  static toMainMenu() {
    window.location.href = 'index.html';
  }
  
  static toCharacterSelection() {
    window.location.href = 'character-selection.html';
  }
  
  static backToCharacterSelection() {
    const message_EN = 'Are you sure you want to go back to the character selection? All progress will be lost.';
    const message_PT = 'Tem certeza que deseja voltar para a seleção de personagens? Todo o progresso será perdido.';
    const yesBtn_EN = 'Yes, go back';
    const yesBtn_PT = 'Sim, voltar';
    const noBtn_EN = 'No, stay';
    const noBtn_PT = 'Não, ficar';
    const destiny = 'character-selection.html';
    Navigation.confirmNavigation(message_EN, message_PT, yesBtn_EN, yesBtn_PT, noBtn_EN, noBtn_PT, destiny);
  }

  static toStrategyRoom() {
    window.location.href = 'strategy-room.html';
  }

  static backToStrategyRoom() {
    const message_EN = 'Are you sure you want to go back to the strategy room? All progress will be lost.';
    const message_PT = 'Tem certeza que deseja voltar para a sala de estratégia? Todo o progresso será perdido.';
    const yesBtn_EN = 'Yes, go back';
    const yesBtn_PT = 'Sim, voltar';
    const noBtn_EN = 'No, stay';
    const noBtn_PT = 'Não, ficar';
    const destiny = 'strategy-room.html';
    Navigation.confirmNavigation(message_EN, message_PT, yesBtn_EN, yesBtn_PT, noBtn_EN, noBtn_PT, destiny);
  }

  static toBattle() {
    window.location.href = 'battle.html';
  }

  static reloadBattle() {
    const message_EN = 'Are you sure you want to restart the battle?';
    const message_PT = 'Tem certeza que deseja reiniciar a batalha?.';
    const yesBtn_EN = 'Yes, restart';
    const yesBtn_PT = 'Sim, reiniciar';
    const noBtn_EN = 'No';
    const noBtn_PT = 'Não';
    const destiny = 'battle.html';
    Navigation.confirmNavigation(message_EN, message_PT, yesBtn_EN, yesBtn_PT, noBtn_EN, noBtn_PT, destiny);
  }

  static routeGuard() {
    const page = window.location.pathname;
    const routeSafe = sessionStorage.getItem('route-safe') || 0;
    const savedGame = localStorage.getItem('saved-game');

    if (page === '/character-selection.html' && routeSafe < 1) {
      Navigation.displayRouteError();
    } else if (page === '/strategy-room.html' && routeSafe < 2) {
      Navigation.displayRouteError();
    } else if (page === '/battle.html' && routeSafe < 3 && !savedGame) {
      Navigation.displayRouteError();
    } else {
      Navigation.displayLoader();
    }
  }

  static displayRouteError() {
    window.location.href = 'index.html';
    const lang = localStorage.getItem('lang');

    if (lang === 'en') {
      alert('Oops! Please complete the previous steps before accessing this page.');
    } else if (lang === 'pt') {
      alert('Ops! Por favor, complete as etapas anteriores antes de acessar esta página.');
    }
  }

  static displayLoader() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          document.querySelector('#content').style.display = 'block';
          document.querySelector('#loader').style.display = 'none';
        }, 500);
      }
    }
  }

  static loadScreen() {
    Navigation.routeGuard();
  }

  static init() {
    Navigation.setEventListeners();
  }
}