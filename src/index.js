import './ship.js'
import './gameboard.js'
import './player.js'
import './bot.js'
// import './gameControl.js'
// import './DOM.js'
// import './dragAndDrop.js'
import './style.css'
import './main-menu.css'

const languageOptions = document.querySelectorAll('.language-radio');

languageOptions.forEach(option => option.addEventListener('change', () => {
  changeLanguage(option.value);
}));

function changeLanguage(language) {

}