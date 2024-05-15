import GameAudio from './audio.js';
import Settings from './settings.js';

export default class Radar {
  static radarLockScreen = null;
  static radarLockFoes = null;
  static countermeasureIndicator = null;

  static countermeasure = false;

  static queryElements() {
    Radar.radarLockScreen = document.querySelector('#radar-lock');
    Radar.radarLockFoes = document.querySelectorAll('#radar-lock-foe > path');
    Radar.countermeasureIndicator = document.querySelector('#countermeasure-indicator');
  }

  static triggerRadar(attack) {
    Radar.countermeasure = false;
    Radar.radarLockAlert(attack);
    Radar.missileLaunchAlert(attack.className);
  }

  static radarLockAlert(square) {
    if (square.content !== 'water') {
      if (square.content.hits === 1) {
        Radar.activateRadarLockAlert();
      }
  
      if (square.content.isSunk()) {
        Radar.deactivateRadarLockAlert();
      }
    }
  }

  static activateRadarLockAlert() {
    setTimeout(() => {
      GameAudio.playRadarLockInfiniteLoop('start');
    }, Settings.getGameSpeed().radarLockAlarmDelay);
    setTimeout(() => {
      Radar.radarLockScreen.classList.add('lightUp');
    }, Settings.getGameSpeed().radarLockScreenDelay);
  }

  static deactivateRadarLockAlert() {
    GameAudio.playRadarLockInfiniteLoop('stop');
    Radar.radarLockScreen.classList.remove('lightUp');
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
      const friendIndicators = document.querySelector('#radar-lock-friendly');
      const firstFriend = friendIndicators.querySelectorAll('circle:not(.sunken)')[0];
      firstFriend.classList.add('sunken');
    }
  }

  static init() {
    Radar.queryElements();
  }
}