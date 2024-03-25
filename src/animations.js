export default class Animation {
  static displayQuote(html, quote) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    
    html.textContent = '';
    let i = 0;
    
    const displayNextChar = () => {
      if (i < quote.length) {
        html.textContent += quote[i];
        i++;
        this.timer = setTimeout(displayNextChar, 15);
      }
    };
    
    displayNextChar();
  }

  static displayReaction(quote, photo) {
    const wrapper = document.querySelector('#reaction-wrapper');
    const characterPhoto = document.querySelector('#character-photo');
    const characterQuotes = document.querySelector('#character-quotes');

    characterPhoto.src = photo;
    wrapper.classList.add('entra');
    characterPhoto.classList.add('entra');
    Animation.displayQuote(characterQuotes, quote);

    setTimeout(() => {
      wrapper.classList.remove('entra');
      characterPhoto.classList.remove('entra');
    }, 3000);
  }
}