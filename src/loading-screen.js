export default class LoadingScreen {
  static init() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          document.querySelector('#content').style.display = 'block';
          document.querySelector('#loader').style.display = 'none';
        }, 500);
      }
    }
  }
}