import Save from './save.js';

export default class Navigation {
  static navBtn = document.querySelector('#navigate');
  static navMenu = document.querySelector('#nav-menu');
  static navBattle = document.querySelector('#nav-battle');
  static navCharacterSelection = document.querySelector('#nav-character-selection');
  static navStrategyRoom = document.querySelector('#nav-strategy-room');
  static navMainMenu = document.querySelector('#nav-main-menu');

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

  static toMainMenu() {
    window.location.href = 'index.html';
  }
  
  static toCharacterSelection() {
    window.location.href = 'character-selection.html';
  }
  
  static backToCharacterSelection() {
    const confirmation = prompt('Are you sure you want to go back to the character selection? All battle progress will be lost.');
    
    if (confirmation) {
      window.location.href = 'character-selection.html';
    }
  }

  static toStrategyRoom() {
    window.location.href = 'strategy-room.html';
  }

  static backToStrategyRoom() {
    const confirmation = prompt('Are you sure you want to go back to the strategy room? All battle progress will be lost.');
    
    if (confirmation) {
      window.location.href = 'strategy-room.html';
    }
  }

  static toBattle() {
    window.location.href = 'battle.html';
  }

  static reloadBattle() {
    const confirmation = prompt('Are you sure you want to restart the battle?');
    
    if (confirmation) {
      Save.deleteSavedGameData();
      window.location.href = 'battle.html';
    }
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