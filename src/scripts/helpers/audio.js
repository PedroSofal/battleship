import Settings from './settings.js';

// SFX
import miss1 from '../../assets/audio/sfx/miss1.ogg';
import miss2 from '../../assets/audio/sfx/miss2.ogg';
import miss3 from '../../assets/audio/sfx/miss3.ogg';
import hit1 from '../../assets/audio/sfx/hit1.ogg';
import hit2 from '../../assets/audio/sfx/hit2.ogg';
import hit3 from '../../assets/audio/sfx/hit3.ogg';
import sink1 from '../../assets/audio/sfx/sink1.ogg';
import sink2 from '../../assets/audio/sfx/sink2.ogg';
import lastSink from '../../assets/audio/sfx/last-sink.ogg';
import radarLock from '../../assets/audio/sfx/radar-lock.ogg';
import missileAlert from '../../assets/audio/sfx/missile-alert.ogg';

// MUSIC
import mainMenuSong from '../../assets/audio/music/battle-ship-short-version-1-hot-dope.mp3';
import charSelectionSong from '../../assets/audio/music/epic-benjamin-tissot.mp3';
import strategyRoomSong from '../../assets/audio/music/fearsome-tipsy-pirates-mikhail-smusev.mp3';
import battleSong1 from '../../assets/audio/music/dance-of-devils-giulio-fazio.mp3';
import battleSong2 from '../../assets/audio/music/corsairs-studio-kolomna.mp3';
import creditsSong from '../../assets/audio/music/no-time-to-die-hartzmann.mp3';

export default class GameAudio {
  static enable = false;
  static queue = [];

  static miss = [miss1, miss2, miss3];
  static hit = [hit1, hit2, hit3];
  static sink = [sink1, sink2];
  static lastSink = [lastSink];
  static radarLock = [radarLock];
  static missileAlert = [missileAlert];
  static mainMenu = [mainMenuSong];
  static characterSelection = [charSelectionSong];
  static strategyRoom = [strategyRoomSong];
  static battle = [battleSong1, battleSong2];
  
  static radarLockInterval;
  static radarLockAudio;
  static currentSongIndex = 0;
  static currentSong = new Audio();
  static musicVolume = 1;

  static liberate() {
    GameAudio.enable = true;
    GameAudio.queue.forEach(audio => audio.play());
  }

  static playSfx(category) {
    const random = Math.floor(Math.random() * category.length);
    const audio = new Audio(category[random]);
    audio.volume = parseFloat(localStorage.getItem('sfx-vol'));

    if (GameAudio.enable) {
      audio.play();
    } else {
      GameAudio.queue.push(audio);
    }
  }

  static playRadarLockInfiniteLoop(action) {
    if (action === 'start') {
        GameAudio.radarLockInterval = setInterval(() => {
          if (!GameAudio.radarLockAudio) {
            GameAudio.radarLockAudio = new Audio(GameAudio.radarLock[0]);
          }
          GameAudio.radarLockAudio.volume = parseFloat(localStorage.getItem('sfx-vol'));
          if (GameAudio.enable) {
            GameAudio.radarLockAudio.play();
          } else {
            GameAudio.queue.push(GameAudio.radarLockAudio);
          }
        }, 1500);
    } else if (action === 'stop') {
        clearInterval(GameAudio.radarLockInterval);
        if (GameAudio.radarLockAudio) {
          GameAudio.radarLockAudio.pause();
          GameAudio.radarLockAudio.currentTime = 0;
        }
    }
  }

  static playMissileAlert(category) {
    const audio = new Audio(category[0]);
    audio.volume = parseFloat(localStorage.getItem('sfx-vol'));
    if (GameAudio.enable) {
      audio.play();
    } else {
      GameAudio.queue.push(audio);
    }
    setTimeout(() => {
      audio.muted = true;
    }, Settings.getGameSpeed().missileAlertCut);
  }

  static playMusic(category) {
    GameAudio.currentSong.addEventListener('ended', function() {
      GameAudio.currentSongIndex++;
      
      if (GameAudio.currentSongIndex >= category.length) {
        GameAudio.currentSongIndex = 0;
      }
      
      GameAudio.currentSong.src = category[GameAudio.currentSongIndex];
      GameAudio.currentSong.muted = true;
      if (GameAudio.enable) {
        GameAudio.currentSong.play();
      } else {
        GameAudio.queue.push(GameAudio.currentSong);
      }
    });

    GameAudio.currentSong.src = category[0];
    GameAudio.currentSong.volume = parseFloat(localStorage.getItem('music-vol'));
    if (GameAudio.enable) {
      GameAudio.currentSong.play();
    } else {
      GameAudio.queue.push(GameAudio.currentSong);
    }
  }

  static setMusicVolume(volume) {
    GameAudio.musicVolume = volume;
    if (GameAudio.currentSong) {
      GameAudio.currentSong.volume = volume;
    }
  }
}