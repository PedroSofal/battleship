import GameAudio from './audio.js';
import Settings from './settings.js';

export default class Radar {
  static radarLockScreen = document.querySelector('.container--radar-lock-warning');
  static radarLockFoes = document.querySelectorAll('.radar-lock-foe > path');
  static countermeasureIndicator = document.querySelector('#countermeasure');

  static countermeasure = false;

  static triggerRadar(attack) {
    Radar.countermeasure = false;
    Radar.radarLockAlert(attack);
    Radar.missileLaunchAlert(attack.className);
  }

  static radarLockAlert(square) {
    if (square.content !== 'water') {
      if (square.content.hits === 1) {
        setTimeout(() => {
          GameAudio.playRadarLockInfiniteLoop('start');
        }, Settings.getGameSpeed().radarLockAlarmDelay);
        setTimeout(() => {
          Radar.radarLockScreen.classList.add('lightUp');
        }, Settings.getGameSpeed().radarLockScreenDelay);
      }
  
      if (square.content.isSunk()) {
        setTimeout(() => {
          GameAudio.playRadarLockInfiniteLoop('stop');
          Radar.radarLockScreen.classList.remove('lightUp');
      }, Settings.getGameSpeed().sinkRoundDelay);
      }
    }
  }

  static missileLaunchAlert(result) {
    const randomFoe = Math.floor(Math.random() * Radar.radarLockFoes.length);

    if (result !== 'miss') {
      Radar.countermeasure = Math.random() < 0.5 ? true : false;
      if (Radar.countermeasure) {
        Radar.radarLockFoes[randomFoe].classList.add('lightUp');
        GameAudio.playMissileAlert(GameAudio.missileAlert);
        Radar.launchCountermeasures();
      }
    }
  }

  static launchCountermeasures() {
    Radar.countermeasureIndicator.classList.add('lightUp');
  }

  static resolveRadarAlert(result) {
    Radar.radarLockFoes.forEach(foe => foe.classList.remove('lightUp'));
    Radar.countermeasureIndicator.classList.remove('lightUp');

    if (result === 'sunk') {
      const friendIndicators = document.querySelector('.radar-lock-friendly');
      const firstFriend = friendIndicators.querySelectorAll('circle:not(.sunken)')[0];
      firstFriend.classList.add('sunken');
    }
  }
}