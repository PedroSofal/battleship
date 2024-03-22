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
}
