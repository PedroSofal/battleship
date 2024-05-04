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

  static playBattleMusic() {
    GameAudio.playMusic(GameAudio.battle);
    document.body.removeEventListener('mousedown', Battle.playBattleMusic);
  }

  static init() {
    Game.init_BATTLE();
    Battle.root.style.setProperty('--color-player', charObjects[sessionStorage.getItem('human-char')].color);
    Battle.root.style.setProperty('--color-player-alpha', charObjects[sessionStorage.getItem('human-char')].colorAlpha);
    Battle.root.style.setProperty('--color-cpu', charObjects[sessionStorage.getItem('cpu-char')].color);
    Battle.root.style.setProperty('--color-cpu-alpha', charObjects[sessionStorage.getItem('cpu-char')].colorAlpha);
    document.body.addEventListener('mousedown', Battle.playBattleMusic);
    Navigation.init();
    Settings.init();
  }
}

Navigation.loadScreen();
Battle.init();