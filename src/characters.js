import nimitz from './assets/characters/nimitz.jpg'
import yamato from './assets/characters/yamato.jpg'
import olafsson from './assets/characters/olafsson.jpg'
import violeta from './assets/characters/violeta.jpg'
import rackham from './assets/characters/rackham.jpg'
import noronha from './assets/characters/noronha.jpg'

class Char {
  constructor(name, fullName, src, color, colorAlpha) {
    this.name = name;
    this.fullName = fullName;
    this.src = src;
    this.color = color;
    this.colorAlpha = colorAlpha;
  }
}

export const charObjects = {
  nimitz: new Char('nimitz', 'Douglas Nimitz', nimitz, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),
  yamato: new Char('yamato', 'Satoru Yamato', yamato, 'rgb(58, 113, 203)', 'rgba(58, 113, 203, 0.5)'),
  olafsson: new Char('olafsson', 'Leif Oláfsson', olafsson, 'rgb(143, 202, 94)', 'rgba(143, 202, 94, 0.5)'),
  violeta: new Char('violeta', 'Violeta Pavlichenko', violeta, 'rgb(244, 195, 67)', 'rgba(244, 195, 67, 0.5)'),
  rackham: new Char('rackham', 'Jack Rackham', rackham, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),
  noronha: new Char('noronha', 'Alberto Noronha', noronha, 'rgb(143, 202, 94)', 'rgba(143, 202, 94, 0.5)'),
}