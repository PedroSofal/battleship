export default class Result {
  static modal = document.querySelector('#result-modal');
  static wrapper = document.querySelector('#result-wrapper');
  static title = document.querySelector('#result-title');
  static character = document.querySelector('#result-character');
  static quote = document.querySelector('#result-quote');
  static seeBoards = document.querySelector('#see-boards');
  static playAgain = document.querySelector('#play-again');
  static seeResult = document.querySelector('#see-result');

  static displayResult(winner) {
    if (winner.type === 'human') {
      Result.wrapper.setAttribute('data-result', 'win');
      Result.title.textContent = 'Congratulations!';
      Result.character.src = winner.char.src;
    } else {
      Result.wrapper.setAttribute('data-result', 'lose');
      Result.title.textContent = 'You have been defeated';
    }
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

  static init(winner) {
    Result.displayResult(winner);
    Result.setEventListeners();
    Result.modal.showModal();
    Result.modal.classList.add('dialog--open');
  }
}

setTimeout(() => {
  Result.init({type: 'human', char: {src: ''}})
}, 500);