import headerHTML from '../../html/components/header.html';
document.querySelector('header').innerHTML += headerHTML;

import '../../styles/style.css';
import '../../styles/battle.css';
import '../../styles/containers.css';
import '../../styles/buttons.css';
import '../../styles/options.css';
import '../../styles/gameboards.css';
import '../../styles/ships.css';
import '../../styles/dialogs.css';
import '../../styles/navigation.css';

import Game from '../helpers/game-control.js';
import { charObjects } from '../factories/characters.js';
import GameAudio from '../helpers/audio.js';
import Settings from '../helpers/settings.js';
import Navigation from '../helpers/navigation.js';

export default class Battle {
  static root = document.querySelector(':root');

  static loadTitle() {
    const title = document.querySelector('.header__title');
    title.setAttribute('data-en', 'Battle');
    title.setAttribute('data-pt', 'Batalha');
  }

  static playBattleMusic() {
    GameAudio.playMusic(GameAudio.battle);
    document.body.removeEventListener('mousedown', Battle.playBattleMusic);
  }

  static init() {
    Game.init_BATTLE();
    Battle.loadTitle();
    Battle.root.style.setProperty('--color-player', charObjects[localStorage.getItem('human-char')].color);
    Battle.root.style.setProperty('--color-player-alpha', charObjects[localStorage.getItem('human-char')].colorAlpha);
    Battle.root.style.setProperty('--color-cpu', charObjects[localStorage.getItem('cpu-char')].color);
    Battle.root.style.setProperty('--color-cpu-alpha', charObjects[localStorage.getItem('cpu-char')].colorAlpha);
    document.body.addEventListener('mousedown', Battle.playBattleMusic);
    Navigation.init();
    Settings.init();
  }
}

Navigation.loadScreen();
Battle.init();