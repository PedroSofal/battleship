import miss1 from './assets/audio/miss1.ogg';
import miss2 from './assets/audio/miss2.ogg';
import hit1 from './assets/audio/hit1.ogg';
import hit2 from './assets/audio/hit2.ogg';

export default class GameAudio {
  static miss = [miss1, miss2];
  static hit = [hit1, hit2];

  static play(category) {
    const random = Math.floor(Math.random() * category.length);
    const audio = new Audio(category[random]);
    audio.play();
  }
}