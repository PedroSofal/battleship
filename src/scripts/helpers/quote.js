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

  static getPreparationQuote(char) {
    const quoteArrays = [];
    Object.values(Quote.strategyRoom).forEach(lang => quoteArrays.push(lang.preparation[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays));
  }

  static getPlaceShipQuote(char, ship) {
    const quoteArrays = [];
    Object.values(Quote.strategyRoom).forEach(lang => quoteArrays.push(lang.placeShip[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship);
  }

  static getResetQuote(char, ship) {
    const quoteArrays = [];
    Object.values(Quote.strategyRoom).forEach(lang => quoteArrays.push(lang.reset[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship);
  }

  static getOurMissQuote(char, ship, enemy) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang.ourMiss[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);
  }

  static getOurHitQuote(char, ship, enemy) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang.ourHit[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);
  }

  static getOurSinkQuote(char, ship, enemy) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang.ourSink[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);
  }

  static getOurEscapeQuote(char, ship, enemy) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang.ourEscape[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);
  }

  static getTheirMissQuote(char, ship, enemy) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang.theirMiss[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);
  }

  static getTheirHitQuote(char, ship, enemy) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang.theirHit[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);
  }

  static getTheirSinkQuote(char, ship, enemy) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang.theirSink[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);
  }

  static getOurVictoryQuote(char, ship, enemy) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang.ourVictory[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);
  }

  static getOurDefeatQuote(char, ship, enemy) {
    const quoteArrays = [];
    Object.values(Quote.battle).forEach(lang => quoteArrays.push(lang.ourDefeat[char]));
    return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);
  }
}