export default class GameSpeed {
  static normal = {
    triggerRadar: 500,
    shotDrop: 3500,
    showQuote: 300,
  }

  static fast = {
    triggerRadar: 200,
    shotDrop: 1000,
    showQuote: 300,
  }

  static speedOptionsArray = [
    GameSpeed.normal,
    GameSpeed.fast,
  ];

  static activeGameSpeed = GameSpeed.speedOptionsArray[0];
}