export default class GameSpeed {
  static normal = {
    triggerRadarDelay: 500,
    shotDropDelay: 3500,
    reactionDelay: 300,
    reactionSpan: 3000,
    typing: 15,
    reactionWrapperSlide: 200,
    radarLockAlarmDelay: 2000,
    radarLockScreenDelay: 3500,
    sinkRoundDelay: 4000,
    missileAlertCut: 4000,
  }

  static fast = {
    triggerRadarDelay: 200,
    shotDropDelay: 1000,
    reactionDelay: 300,
    reactionSpan: 1500,
    typing: 5,
    reactionWrapperSlide: 50,
    radarLockAlarmDelay: 500,
    radarLockScreenDelay: 2000,
    sinkRoundDelay: 2000,
    missileAlertCut: 1300,
  }

  static speedOptionsArray = [
    GameSpeed.normal,
    GameSpeed.fast,
  ];

  static activeGameSpeed;

  static getActiveGameSpeed() {
    const speed = parseInt(localStorage.getItem('game-speed'));
    return GameSpeed.speedOptionsArray[speed];
  }
}