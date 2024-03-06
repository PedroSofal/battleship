import './style.css'
import './main-menu.css'

const placeShipsBtn = document.querySelector('#place-ships');
const languageOptions = document.querySelectorAll('.language-radio');

languageOptions.forEach(option => option.addEventListener('change', () => {
  changeLanguage(option.value);
}));

function changeLanguage(language) {
}

console.log(placeShipsBtn)
placeShipsBtn.addEventListener('click', () => {
  window.location.href = 'place-ships.html';
});