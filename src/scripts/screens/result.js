import Game from '../helpers/game-control.js';
import Quote from '../helpers/quote.js';
import Settings from '../helpers/settings.js';

export default class Result {
  static modal = document.querySelector('#result-modal');
  static title = document.querySelector('#result-title');
  static character = document.querySelector('#result-character');
  static quote = document.querySelector('#result-quote');
  static seeBoards = document.querySelector('#see-boards');
  static playAgain = document.querySelector('#play-again');
  static seeResult = document.querySelector('#see-result');

  static displayResult() {
    Result.character.src = Game.player1.char.src;

    if (Game.player1.result === 'win') {
      Result.title.setAttribute('data-en', 'Victory!');
      Result.title.setAttribute('data-pt', 'Vitória!');
      Settings.setLanguageDataAttributes(Result.quote, Quote.getOurVictoryQuote(Game.player1.char.name));
    } else {
      Result.title.setAttribute('data-en', 'Defeat');
      Result.title.setAttribute('data-pt', 'Derrota');
      Settings.setLanguageDataAttributes(Result.quote, Quote.getOurDefeatQuote(Game.player1.char.name));
    }

    Settings.loadLanguageSettings();
    Result.modal.showModal();
    Result.modal.classList.add('dialog--open');
  }

  static setEventListeners() {
    Result.seeBoards.addEventListener('click', () => {
      Result.modal.close();
      Result.modal.classList.remove('dialog--open');
      Result.seeResult.classList.add('visible');
    });
    
    Result.playAgain.addEventListener('click', () => {
      Result.modal.classList.remove('dialog--open');
      window.location.href = 'index.html';
    });

    Result.seeResult.addEventListener('click', () => {
      Result.modal.showModal();
      Result.modal.classList.add('dialog--open');
      Result.seeResult.classList.remove('visible');
    });
  }

  static init() {
    Result.displayResult();
    Result.setEventListeners();
  }
}