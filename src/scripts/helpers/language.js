export default class Language {
  static loadDataAttributes(htmlElement, array) {
    htmlElement.setAttribute('data-en', array[0]);
    htmlElement.setAttribute('data-pt', array[1]);
  }
}