import Save from './save.js';

export default class Navigation {
  static toMainMenu() {
    window.location.href = 'index.html';
  }

  static toStrategyRoom() {
    const confirmation = prompt('Are you sure you want to go back to the strategy room? All battle progress will be lost.');
    
    if (confirmation) {
      window.location.href = 'strategy-room.html';
    }
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

    if (page === '/strategy-room.html' && routeSafe < 1) {
      Navigation.displayRouteError();
    } else if (page === '/battle.html' && routeSafe < 2) {
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
}