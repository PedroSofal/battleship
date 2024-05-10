import StrategyRoomQuotes_en from '../../assets/quotes/en/strategy-room-quotes.js';
import StrategyRoomQuotes_pt from '../../assets/quotes/pt/strategy-room-quotes.js';
import BattleQuotes_en from '../../assets/quotes/en/battle-quotes.js';
import BattleQuotes_pt from '../../assets/quotes/pt/battle-quotes.js';

export default class Quote {
  static strategyRoom = {
    en: StrategyRoomQuotes_en,
    pt: StrategyRoomQuotes_pt,
  }

  static battle = {
    en: BattleQuotes_en,
    pt: BattleQuotes_pt,
  }

  static randomize(quoteArrays) {
    const randomIndex = Math.floor(Math.random() * quoteArrays[0].length);
    const quotes = [];

    for (let i = 0; i < quoteArrays.length; i++) {
      quotes.push(quoteArrays[i][randomIndex]);
    }

    return quotes;
  }

  static replacePlaceholders(quotes, ship, enemy) {
    enemy = enemy ?? 'enemy';
    const replacedQuotes = [];

      for (let i = 0; i < quotes.length; i++) {
        let shipReplacement;
        if (ship) shipReplacement = Object.values(ship.name)[i];

        replacedQuotes.push(quotes[i]
          .replace('#SHIP', shipReplacement)
          .replace('#ENEMY', enemy.slice(0,1).toUpperCase().concat(enemy.slice(1))));
      }
    
    return replacedQuotes;
  }

  static getStrategyQuote(quoteType, charName, shipName, enemyName) {
    const quoteArrays = [];
    Object.values(Quote.strategyRoom).forEach(lang => quoteArrays.push(lang[quoteType][charName]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), shipName, enemyName);
  }

  static getBattleQuote(quoteType, charName, shipName, enemyName) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang[quoteType][charName]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), shipName, enemyName);
  }
}