export default class Save {
  static saveFileTemplate = {
    humanBoard: [],
    cpuBoard: [],
    nextTurn: null,
    cpuShipsPositions: [],
  }

  static saveRound(player, attackedSquare, isRadarLockAlarmActive) {
    const saveFile = Save.retrieveSavedGameData() ?? Save.saveFileTemplate;

    saveFile.radarLock = isRadarLockAlarmActive

    if (player.type === 'human') {
      saveFile.humanBoard.push(attackedSquare.coords);
      saveFile.nextTurn = 'human';
    } else {
      saveFile.cpuBoard.push(attackedSquare.coords);
      saveFile.cpuSequence = player.sequence;
      saveFile.nextTurn = 'cpu';
    }

    localStorage.setItem('saved-game', JSON.stringify(saveFile));
  }

  static retrieveSavedGameData() {
    const data = localStorage.getItem('saved-game');
  
    if (data !== 'undefined') {
      return JSON.parse(data);
    }
  }

  static deleteSavedGameData() {
    localStorage.removeItem('saved-game');
  }
}