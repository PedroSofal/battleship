import Game from './game-control.js';
import Quote from './quote.js';
import Settings from './settings.js';

export default class Result {
  static modal = null;
  static title = null;
  static character = null;
  static quote = null;
  static seeBoards = null;
  static playAgain = null;
  static seeResult = null;

  static queryElements() {
    Result.modal = document.querySelector('#result-modal');
    Result.title = document.querySelector('#result-title');
    Result.character = document.querySelector('#result-character');
    Result.quote = document.querySelector('#result-quote');
    Result.seeBoards = document.querySelector('#see-boards');
    Result.playAgain = document.querySelector('#play-again');
    Result.seeResult = document.querySelector('#see-result');
  }

  static displayResult() {
    Result.character.src = Game.player1.char.src;
    
    if (Game.player1.result === 'win') {
      Result.title.setAttribute('data-en', 'Victory!');
      Result.title.setAttribute('data-pt', 'Vitória!');
      Settings.setLanguageDataAttributes(Result.quote, Quote.getBattleQuote('ourVictory', Game.player1.char.name));
    } else {
      Result.title.setAttribute('data-en', 'Defeat');
      Result.title.setAttribute('data-pt', 'Derrota');
      Settings.setLanguageDataAttributes(Result.quote, Quote.getBattleQuote('ourDefeat', Game.player1.char.name));
    }

    Settings.loadLanguageSettings();
    Result.modal.showModal();
    Result.modal.classList.add('opened');
  }

  static setEventListeners() {
    Result.seeBoards.addEventListener('click', () => {
      Result.modal.close();
      Result.modal.classList.remove('opened');
      Result.seeResult.classList.add('visible');
    });
    
    Result.playAgain.addEventListener('click', () => {
      Result.modal.classList.remove('opened');
      window.location.href = 'index.html';
    });

    Result.seeResult.addEventListener('click', () => {
      Result.modal.showModal();
      Result.modal.classList.add('opened');
      Result.seeResult.classList.remove('visible');
    });
  }

  static init() {
    Result.queryElements();
    Result.displayResult();
    Result.setEventListeners();
  }
}