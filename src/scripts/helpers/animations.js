import Settings from './settings.js';

import square_explosion1 from '../../assets/explosions/square_explosion1.png';
import square_explosion2 from '../../assets/explosions/square_explosion2.png';
import square_explosion3 from '../../assets/explosions/square_explosion3.png';
import square_explosion4 from '../../assets/explosions/square_explosion4.png';
import square_explosion5 from '../../assets/explosions/square_explosion5.png';
import square_explosion6 from '../../assets/explosions/square_explosion6.png';
import square_explosion7 from '../../assets/explosions/square_explosion7.png';
import square_explosion8 from '../../assets/explosions/square_explosion8.png';
import square_explosion9 from '../../assets/explosions/square_explosion9.png';
import square_explosion10 from '../../assets/explosions/square_explosion10.png';
import square_explosion11 from '../../assets/explosions/square_explosion11.png';
import square_explosion12 from '../../assets/explosions/square_explosion12.png';
import square_explosion13 from '../../assets/explosions/square_explosion13.png';
import square_explosion14 from '../../assets/explosions/square_explosion14.png';
import square_explosion15 from '../../assets/explosions/square_explosion15.png';
import square_explosion16 from '../../assets/explosions/square_explosion16.png';

import splash1 from '../../assets/explosions/splash1.png';
import splash2 from '../../assets/explosions/splash2.png';
import splash3 from '../../assets/explosions/splash3.png';
import splash4 from '../../assets/explosions/splash4.png';
import splash5 from '../../assets/explosions/splash5.png';
import splash6 from '../../assets/explosions/splash6.png';
import splash7 from '../../assets/explosions/splash7.png';
import splash8 from '../../assets/explosions/splash8.png';
import splash9 from '../../assets/explosions/splash9.png';
import splash10 from '../../assets/explosions/splash10.png';
import splash11 from '../../assets/explosions/splash11.png';
import splash12 from '../../assets/explosions/splash12.png';
import splash13 from '../../assets/explosions/splash13.png';
import splash14 from '../../assets/explosions/splash14.png';
import splash15 from '../../assets/explosions/splash15.png';
import splash16 from '../../assets/explosions/splash16.png';

export default class Animation {
  static explosion = [
    square_explosion1,
    square_explosion2,
    square_explosion3,
    square_explosion4,
    square_explosion5,
    square_explosion6,
    square_explosion7,
    square_explosion8,
    square_explosion9,
    square_explosion10,
    square_explosion11,
    square_explosion12,
    square_explosion13,
    square_explosion14,
    square_explosion15,
    square_explosion16,
  ];

  static splash = [
    splash1,
    splash2,
    splash3,
    splash4,
    splash5,
    splash6,
    splash7,
    splash8,
    splash9,
    splash10,
    splash11,
    splash12,
    splash13,
    splash14,
    splash15,
    splash16,
  ];

  static wrapper = document.querySelector('#reaction-wrapper');
  static characterPhoto = document.querySelector('#character-photo');
  static quoteTimer = null;
  static activeReactions = 0;

  static displayQuote(html, quote) {
    if (Animation.quoteTimer) {
      clearTimeout(Animation.quoteTimer);
    }

    html.textContent = '';
    let i = 0;
    
    const displayNextChar = () => {
      if (i < quote.length) {
        html.textContent += quote[i];
        i++;
        Animation.quoteTimer = setTimeout(displayNextChar, Settings.getGameSpeed().typing);
      }
    };
    
    displayNextChar();
  }

  static displayReaction(html, quote, photo) {
    Animation.activeReactions++;
    Animation.characterPhoto.src = photo;
    Animation.wrapper.style.transitionDuration = `${Settings.getGameSpeed().reactionWrapperSlide}ms`;
    Animation.wrapper.classList.add('entra');
    Animation.characterPhoto.classList.add('entra');
    Animation.displayQuote(html, quote);

    setTimeout(() => {
      if (Animation.activeReactions <= 1) {
        Animation.wrapper.classList.remove('entra');
        Animation.characterPhoto.classList.remove('entra');
      }
      Animation.activeReactions--;
    }, Settings.getGameSpeed().reactionSpan);
  }

  static displayExplosion(square) {
    const explosion = document.createElement('img');
    explosion.classList = 'explosion';
    square.appendChild(explosion);

    for (let i = 0; i < Animation.explosion.length; i++) {
      setTimeout(() => {
        explosion.src = `${Animation.explosion[i]}`;
      }, 50 * i);
    }

    setTimeout(() => {
      square.removeChild(explosion);
    }, 50 * Animation.explosion.length);
  }

  static displaySplash(square) {
    const explosion = document.createElement('img');
    explosion.classList = 'explosion';
    square.appendChild(explosion);

    for (let i = 0; i < Animation.splash.length; i++) {
      setTimeout(() => {
        explosion.src = `${Animation.splash[i]}`;
      }, 50 * i);
    }

    setTimeout(() => {
      square.removeChild(explosion);
    }, 50 * Animation.splash.length);
  }

  static shake(html) {
    html.classList.add('shake');
    setTimeout(() => {
      html.classList.remove('shake');
    }, 500);
  }
}