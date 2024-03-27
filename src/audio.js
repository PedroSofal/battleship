import miss1 from './assets/audio/sfx/miss1.ogg';
import miss2 from './assets/audio/sfx/miss2.ogg';
import hit1 from './assets/audio/sfx/hit1.ogg';
import hit2 from './assets/audio/sfx/hit2.ogg';
import mainMenuSong1 from './assets/audio/music/no-time-to-die-hartzmann.mp3';
import placeShipsSong1 from './assets/audio/music/corsairs-studio-kolomna.mp3';
import battleSong1 from './assets/audio/music/dance-of-devils-giulio-fazio.mp3';

export default class GameAudio {
  static miss = [miss1, miss2];
  static hit = [hit1, hit2];
  static mainMenu = [mainMenuSong1];
  static placeShips = [placeShipsSong1];
  static battle = [battleSong1, mainMenuSong1, placeShipsSong1];

  static currentSongIndex = 0;
  static currentSong = new Audio();

  static play(category) {
    const random = Math.floor(Math.random() * category.length);
    const audio = new Audio(category[random]);
    audio.play();
  }

  static queuePlaylist(category) {
    GameAudio.currentSong.addEventListener('ended', function() {
      GameAudio.currentSongIndex++;
      
      if (GameAudio.currentSongIndex >= category.length) {
        GameAudio.currentSongIndex = 0;
      }
      
      GameAudio.currentSong.src = category[GameAudio.currentSongIndex];
      GameAudio.currentSong.play();
    });

    GameAudio.currentSong.src = category[0];
    GameAudio.currentSong.play();
  }
}