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
import Header from '../helpers/header.js';
import LoadingScreen from './loading-screen.js';
import Settings from '../helpers/settings.js';

export default class Battle {
  static root = document.querySelector(':root');

  static playBattleMusic() {
    GameAudio.playMusic(GameAudio.battle);
    document.body.removeEventListener('mousedown', Battle.playBattleMusic);
  }

  static init() {
    Game.init_BATTLE();
    Battle.root.style.setProperty('--color-player', charObjects[sessionStorage.getItem('player-char')].color);
    Battle.root.style.setProperty('--color-player-alpha', charObjects[sessionStorage.getItem('player-char')].colorAlpha);
    Battle.root.style.setProperty('--color-cpu', charObjects[sessionStorage.getItem('cpu-char')].color);
    Battle.root.style.setProperty('--color-cpu-alpha', charObjects[sessionStorage.getItem('cpu-char')].colorAlpha);
    document.body.addEventListener('mousedown', Battle.playBattleMusic);
    Settings.loadAllSettings();
    Header.init();
  }
}

LoadingScreen.init();
Battle.init();