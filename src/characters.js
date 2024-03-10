import char1 from './assets/characters/char1.jpg'
import char2 from './assets/characters/char2.jpg'
import char3 from './assets/characters/char3.jpg'
import char4 from './assets/characters/char4.jpg'
import char5 from './assets/characters/char5.jpg'
import char6 from './assets/characters/char6.jpg'

class Char {
  constructor(name, src, color, colorAlpha) {
    this.name = name;
    this.src = src;
    this.color = color;
    this.colorAlpha = colorAlpha;
  }
}

export const charObjects = {
  char1: new Char('Char 1', char1, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),
  char2: new Char('Char 2', char2, 'rgb(58, 113, 203)', 'rgba(58, 113, 203, 0.5)'),
  char3: new Char('Char 3', char3, 'rgb(143, 202, 94)', 'rgba(143, 202, 94, 0.5)'),
  char4: new Char('Char 4', char4, 'rgb(244, 195, 67)', 'rgba(244, 195, 67, 0.5)'),
  char5: new Char('Char 5', char5, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),
  char6: new Char('Char 6', char6, 'rgb(143, 202, 94)', 'rgba(143, 202, 94, 0.5)'),
}