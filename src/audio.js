import miss1 from './assets/audio/sfx/miss1.ogg';
import miss2 from './assets/audio/sfx/miss2.ogg';
import hit1 from './assets/audio/sfx/hit1.ogg';
import hit2 from './assets/audio/sfx/hit2.ogg';
import radarLock from './assets/audio/sfx/radar-lock.ogg';
import missileAlert from './assets/audio/sfx/missile-alert.ogg';
import mainMenuSong1 from './assets/audio/music/no-time-to-die-hartzmann.mp3';
import placeShipsSong1 from './assets/audio/music/corsairs-studio-kolomna.mp3';
import battleSong1 from './assets/audio/music/dance-of-devils-giulio-fazio.mp3';

export default class GameAudio {
  static miss = [miss1, miss2];
  static hit = [hit1, hit2];
  static radarLock = [radarLock];
  static missileAlert = [missileAlert];
  static mainMenu = [mainMenuSong1];
  static placeShips = [placeShipsSong1];
  static battle = [battleSong1, mainMenuSong1, placeShipsSong1];
  static radarLockInterval;

  static currentSongIndex = 0;
  static currentSong = new Audio();

  static playSfx(category) {
    if (localStorage.getItem('sfx') === 'on') {
      const random = Math.floor(Math.random() * category.length);
      const audio = new Audio(category[random]);
      audio.play();
    }
  }

  static playRadarLockInfiniteLoop(action) {
    if (localStorage.getItem('sfx') === 'on') {
      if (action === 'start') {
          GameAudio.radarLockInterval = setInterval(() => {
            const audio = new Audio(GameAudio.radarLock[0]);
            audio.play();
          }, 1500);
      } else if (action === 'stop') {
          clearInterval(GameAudio.radarLockInterval);
      }
    }
  }

  static playMusic(category) {
    GameAudio.currentSong.addEventListener('ended', function() {
      GameAudio.currentSongIndex++;
      
      if (GameAudio.currentSongIndex >= category.length) {
        GameAudio.currentSongIndex = 0;
      }
      
      GameAudio.currentSong.src = category[GameAudio.currentSongIndex];
      GameAudio.currentSong.play();
    });

    GameAudio.currentSong.src = category[0];
    
    if (localStorage.getItem('music') === 'off') {
      GameAudio.currentSong.muted = true;
    }

    GameAudio.currentSong.play();
  }

  static muteMusic() {
    GameAudio.currentSong.muted = true;
  }

  static unmuteMusic() {
    GameAudio.currentSong.muted = false;
  }
}