export default class LoadingScreen {
  static routeGuard() {
    const page = window.location.pathname;
    const routeSafe = sessionStorage.getItem('route-safe') || 0;

    if (page === '/strategy-room.html' && routeSafe < 1) {
      LoadingScreen.displayRouteError();
    } else if (page === '/battle.html' && routeSafe < 2) {
      LoadingScreen.displayRouteError();
    } else {
      LoadingScreen.displayLoader();
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

  static init() {
    LoadingScreen.routeGuard();
  }
}