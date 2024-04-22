/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/place-ships.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/place-ships.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* WRAPPERS ***********/\r\n\r\n.place-ships-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 434px 640px 300px;\r\n  grid-template-rows: 60px 300px 260px 120px;\r\n  grid-template-areas:\r\n    \"fleet board charName\"\r\n    \"fleet board charPhoto\"\r\n    \"fleet board charQuotes\"\r\n    \"fleet footer footer\";\r\n  gap: 1rem;\r\n  place-content: center;\r\n  min-height: 100vh;\r\n}\r\n\r\n.wrapper--fleet {\r\n  grid-area: fleet;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.4rem;\r\n  padding: 1.8rem 2.2rem;\r\n  border-top: 1.5rem solid var(--color-750);\r\n  border-right: 2rem solid var(--color-850);\r\n  border-left: 1rem solid var(--color-750);\r\n  border-bottom: 1.5rem solid var(--color-850);\r\n}\r\n\r\n.wrapper--player-board {\r\n  grid-area: board;\r\n}\r\n\r\n.wrapper--character-name {\r\n  grid-area: charName;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background-color: var(--color-900);\r\n  border: 5px solid var(--color-800);\r\n}\r\n\r\n.wrapper--character-photo {\r\n  grid-area: charPhoto;\r\n}\r\n\r\n.wrapper--character-quotes {\r\n  grid-area: charQuotes;\r\n  padding: 0.6rem 1rem;\r\n  background-color: var(--color-900);\r\n  border: 5px solid var(--color-800);\r\n}\r\n\r\n.wrapper--footer {\r\n  grid-area: footer;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem 1.4rem;\r\n  border-top: 0.5rem solid var(--color-750);\r\n  border-right: 1rem solid var(--color-850);\r\n  border-left: 1rem solid var(--color-750);\r\n  border-bottom: 1rem solid var(--color-850);\r\n}\r\n\r\n/* CONTENTS ***********/\r\n\r\n.ship {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.6rem;\r\n}\r\n\r\n.ship__name {\r\n  padding-left: 0.8rem;\r\n  font-size: var(--fs-300);\r\n  text-transform: capitalize;\r\n}\r\n\r\n.ship__yard {\r\n  padding: 0.8rem;\r\n  height: calc(50px + 1.6rem);\r\n  border-bottom: 2px solid var(--color-100);\r\n  background-color: var(--color-900);\r\n}\r\n\r\n.ship__drag:not([draggable]) {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.ship__drag[draggable] {\r\n  cursor: grab;\r\n}\r\n\r\n.character-name {\r\n  font-size: var(--fs-300);\r\n  text-align: center;\r\n}\r\n\r\n.character-quotes {\r\n  font-family: var(--sec-ff);\r\n  font-style: italic;\r\n  font-size: var(--fs-500);\r\n}\r\n\r\n.instructions {\r\n  font-family: var(--sec-ff);\r\n}\r\n\r\n.instructions button {\r\n  padding: 0.4rem;\r\n  border-radius: 5px;\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-400);\r\n  color: var(--color-100);\r\n  background-color: var(--color-800);\r\n  cursor: pointer;\r\n  transition: all 100ms ease-in-out;\r\n}\r\n\r\n.instructions button:hover {\r\n  background-color:var(--color-750);\r\n}\r\n\r\n.instructions button:active {\r\n  background-color:var(--color-850);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/place-ships.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/backgrounds/menu-background.jpg */ \"./src/assets/backgrounds/menu-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --main-ff: \"Press Start 2P\", system-ui;\r\n  --sec-ff: \"Roboto Mono\", monospace;\r\n\r\n  --color-900: #0C0C1C;\r\n  --color-850: #181836;\r\n  --color-800: #202040;\r\n  --color-750: #2A2A51;\r\n  --color-500: #0038FF;\r\n  --color-600: #AF40FF;\r\n  --color-100: #cdcdcd;\r\n\r\n  --color-player: #0038FF;\r\n  --color-player-alpha: rgba(255, 0, 32, 0.5);\r\n  --color-cpu: #ff0020;\r\n\r\n  --fs-300: 0.7rem;\r\n  --fs-400: 0.8rem;\r\n  --fs-500: 0.95rem;\r\n  --fs-600: 1.1rem;\r\n  --fs-700: 1.4rem;\r\n  --fs-900: 4.2rem;\r\n\r\n  --icon-size: 2.2rem;\r\n}\r\n\r\nhtml {\r\n  font-family: var(--main-ff);\r\n  font-size: 20px;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: var(--color-900);\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n\r\n  margin: 0;\r\n  color: var(--color-100);\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* BUTTONS ***********/\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.main-button {\r\n  border: 0;\r\n  border-radius: 8px;\r\n  padding: 1.1rem 0.8rem;\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-600);\r\n  color: var(--color-100);\r\n  background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%,#00DDEB);\r\n  box-shadow: rgba(64, 40, 196, 0.2) 0 15px 30px -5px;\r\n  /* user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation; */\r\n}\r\n\r\n.main-button:active,\r\n.main-button:hover {\r\n  box-shadow: rgba(151, 65, 252, 0.5) 0 15px 30px -5px;\r\n}\r\n\r\n.main-button span {\r\n  background-color: rgb(5, 6, 45);\r\n  padding: 1rem 1.6rem;\r\n  border-radius: 6px;\r\n  transition: all 100ms ease-in-out;\r\n}\r\n\r\n.main-button:hover span {\r\n  background: none;\r\n}\r\n\r\n/* @media (min-width: 768px) {\r\n  .main-button {\r\n    font-size: 24px;\r\n    min-width: 196px;\r\n  }\r\n} */\r\n\r\nbutton:disabled {\r\n  opacity: 0.3;\r\n}\r\n\r\n.secondary-button {\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-600);\r\n  border-style: none;\r\n  background-color: transparent;\r\n  color: var(--color-100);\r\n}\r\n\r\n.secondary-button:focus-visible {\r\n  outline-style: none;\r\n}\r\n\r\n.wrapper {\r\n  background-color: var(--color-800);\r\n}\r\n\r\n/* DIALOGS ***********/\r\n\r\n.dialog {\r\n  position: fixed;\r\n  margin: auto;\r\n  inset: 0;\r\n  padding: 0;\r\n  border: none;\r\n  background: transparent;\r\n  color: inherit;\r\n  opacity: 0;\r\n  transform: translateY(50%);\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\n.dialog--open {\r\n  opacity: 1;\r\n  transform: translate(0);\r\n}\r\n\r\n.dialog::backdrop {\r\n  background-color: var(--color-900);\r\n  opacity: 0;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\n.dialog--open::backdrop {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* GAMEBOARDS ***********/\r\n\r\n.wrapper--board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.6rem;\r\n  padding: 2rem 3rem;\r\n  border-top: 1.5rem solid var(--color-750);\r\n  border-right: 2rem solid var(--color-850);\r\n  border-left: 1rem solid var(--color-750);\r\n  border-bottom: 1.5rem solid var(--color-850);\r\n}\r\n\r\n.not-clickable {\r\n  pointer-events: none;\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\n.row {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 50px);\r\n}\r\n\r\n.human-board {\r\n  background: radial-gradient(\r\n    var(--color-player-alpha),\r\n    transparent\r\n  );\r\n}\r\n\r\n.human-board .square {\r\n  outline: 1px solid var(--color-player);\r\n}\r\n\r\n.cpu-board .square {\r\n  outline: 1px solid var(--color-cpu);\r\n  cursor: crosshair;\r\n}\r\n\r\n.cpu-board .square:not(.occupied):not(.miss):not(.hit):not(.close):not(.sunk):hover {\r\n  background-color: var(--color-cpu-alpha);\r\n}\r\n\r\n.square {\r\n  overflow: visible;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n#strategy-board .square:not(.occupied) {\r\n  position: relative;\r\n}\r\n\r\n#strategy-board .square:not(.occupied)::after {\r\n  content: '~~';\r\n  color: var(--color-player-alpha);\r\n  font-family: var(--sec-ff);\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 25%;\r\n  left: -25%;\r\n  position: absolute;\r\n}\r\n\r\n#strategy-board[data-activeAxis=x] .square:not(.occupied)::after {\r\n  animation: x-axis 700ms infinite steps(3);\r\n}\r\n\r\n@keyframes x-axis {\r\n  from { transform: translateX(0%); }\r\n  to { transform: translateX(100%); }\r\n}\r\n\r\n#strategy-board[data-activeAxis=y] .square:not(.occupied)::after {\r\n  animation: y-axis 600ms infinite steps(3);\r\n}\r\n\r\n@keyframes y-axis {\r\n  from { transform: rotateZ(90deg) translateX(0%); }\r\n  to { transform: rotateZ(90deg) translateX(100%); }\r\n}\r\n\r\n.square {\r\n  outline-offset: -3px;\r\n}\r\n\r\n.close,\r\n.miss {\r\n  background: radial-gradient(#2d78be, #00488b, transparent);\r\n}\r\n\r\n.sunk,\r\n.hit {\r\n  background: radial-gradient(#ff6e35, #ff0015, transparent);\r\n}\r\n\r\n.explosion {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  z-index: 1;\r\n}\r\n\r\n.gameboard-name {\r\n  align-self: flex-start;\r\n  font-size: var(--fs-300);\r\n}\r\n\r\n.gameboard-display {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.dashed-border {\r\n  stroke-width: 10;\r\n  stroke-dasharray: 250 250;\r\n  stroke-dashoffset: 130;\r\n}\r\n\r\n.wrapper--human-board .dashed-border {\r\n  stroke: var(--color-player);\r\n}\r\n\r\n.wrapper--cpu-board .dashed-border {\r\n  stroke: var(--color-cpu);\r\n}\r\n\r\n.gameboard-display__radar-signal {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform-origin: 0 0;\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    var(--color-player) 0%,\r\n    transparent 50%\r\n  );\r\n  animation: sweep 5s infinite linear;\r\n}\r\n\r\n@keyframes sweep {\r\n  to { transform: rotateZ(360deg); }\r\n}\r\n\r\n#human-board .ship__icon,\r\n#cpu-board .ship__icon {\r\n  position: absolute;\r\n}\r\n\r\n.cpu-board .ship__icon {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n}\r\n\r\n.cpu-board .ship__icon:not(sunken).revealed {\r\n  visibility: visible;\r\n  opacity: 1;\r\n  transition: opacity 1s ease-in-out;\r\n}\r\n\r\n.ship__icon.sunken {\r\n  visibility: visible;\r\n  animation: sink-ship 1s ease-in-out forwards;\r\n}\r\n\r\n@keyframes sink-ship {\r\n  70% { opacity: 1; }\r\n  100% { filter: brightness(40%); opacity: 1; }\r\n}\r\n\r\n.ship__yard:hover {\r\n  background: var(--color-850);\r\n}\r\n\r\n.ship__icon {\r\n  height: 50px;\r\n  transform-origin: 25px 25px;\r\n}\r\n\r\n.ship__icon#carrier {\r\n  width: 250px;\r\n}\r\n\r\n.ship__icon#battleship {\r\n  width: 200px;\r\n}\r\n\r\n.ship__icon#cruiser {\r\n  width: 150px;\r\n}\r\n\r\n.ship__icon#submarine {\r\n  width: 150px;\r\n}\r\n\r\n.ship__icon#destroyer {\r\n  width: 100px;\r\n}\r\n\r\n.gameboard-display {\r\n  min-width: 500px;\r\n  min-height: 500px;\r\n  background-color: var(--color-900);\r\n}\r\n\r\n.gameboard-display > * {\r\n  position: absolute;\r\n}\r\n\r\n/* DRAG AND DROP ***********/\r\n\r\n.dragging {\r\n  opacity: 1;\r\n  cursor: grabbing;\r\n}\r\n\r\n.ship__drag--clone {\r\n  position: absolute;\r\n  left: -100%;\r\n}\r\n\r\n.rotated {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.dragover--allowed-placement {\r\n  background-color: #4CAF50;\r\n}\r\n\r\n.dragover--not-allowed-placement {\r\n  background-color: red;\r\n}\r\n\r\n/* HEADER & OPTIONS ***********/\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  z-index: 999;\r\n}\r\n\r\n.header__title {\r\n  font-size: var(--fs-500);\r\n}\r\n\r\n.options-wrapper {\r\n  display: grid;\r\n  grid-template-rows: 130px 1fr 130px;\r\n  gap: 1rem;\r\n}\r\n\r\n.wrapper--title {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem 1.4rem;\r\n  border-top: 0.5rem solid var(--color-750);\r\n  border-right: 1rem solid var(--color-850);\r\n  border-left: 1rem solid var(--color-750);\r\n  border-bottom: 1rem solid var(--color-850);\r\n}\r\n\r\n.dialog--options .wrapper--footer {\r\n  grid-area: unset;\r\n  justify-content: center;\r\n  gap: 1.4rem;\r\n}\r\n\r\n.label {\r\n  color: var(--color-100);\r\n  font-size: var(--fs-600);\r\n}\r\n\r\n.wrapper--options {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.4rem;\r\n  width: 26rem;\r\n  padding: 2rem;\r\n  background-color: var(--color-900);\r\n  border: 5px solid var(--color-800);\r\n}\r\n\r\n.options__language,\r\n.options__music,\r\n.options__sfx {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1.4rem;\r\n}\r\n\r\ninput[type=\"range\"] {\r\n  width: 7.5rem;\r\n}\r\n\r\n.language-radio,\r\n.music-radio,\r\n.sfx-radio {\r\n  display: none;\r\n}\r\n\r\n.icon {\r\n  height: var(--icon-size);\r\n  padding: 5px;\r\n  opacity: 0.3;\r\n  cursor: pointer;\r\n  transition: all 150ms ease-in-out;\r\n  outline-offset: 1rem;\r\n}\r\n\r\n.lang-selected + .label .icon--flag {\r\n  outline: 1px solid #ccc;\r\n  outline-offset: 0px;\r\n  opacity: 1;\r\n}\r\n\r\n.audio-selected + .label .icon--speaker {\r\n  opacity: 1;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://24-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://24-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://24-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/place-ships.css":
/*!*****************************!*\
  !*** ./src/place-ships.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_place_ships_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./place-ships.css */ \"./node_modules/css-loader/dist/cjs.js!./src/place-ships.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_place_ships_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_place_ships_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_place_ships_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_place_ships_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://24-battleship/./src/place-ships.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://24-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://24-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://24-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://24-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://24-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://24-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://24-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/audio/music/corsairs-studio-kolomna.mp3":
/*!************************************************************!*\
  !*** ./src/assets/audio/music/corsairs-studio-kolomna.mp3 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/corsairs-studio-kolomna.mp3\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/music/corsairs-studio-kolomna.mp3?");

/***/ }),

/***/ "./src/assets/audio/music/dance-of-devils-giulio-fazio.mp3":
/*!*****************************************************************!*\
  !*** ./src/assets/audio/music/dance-of-devils-giulio-fazio.mp3 ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/dance-of-devils-giulio-fazio.mp3\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/music/dance-of-devils-giulio-fazio.mp3?");

/***/ }),

/***/ "./src/assets/audio/music/no-time-to-die-hartzmann.mp3":
/*!*************************************************************!*\
  !*** ./src/assets/audio/music/no-time-to-die-hartzmann.mp3 ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/no-time-to-die-hartzmann.mp3\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/music/no-time-to-die-hartzmann.mp3?");

/***/ }),

/***/ "./src/assets/audio/sfx/hit1.ogg":
/*!***************************************!*\
  !*** ./src/assets/audio/sfx/hit1.ogg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/hit1.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/hit1.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/hit2.ogg":
/*!***************************************!*\
  !*** ./src/assets/audio/sfx/hit2.ogg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/hit2.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/hit2.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/hit3.ogg":
/*!***************************************!*\
  !*** ./src/assets/audio/sfx/hit3.ogg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/hit3.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/hit3.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/last-sink.ogg":
/*!********************************************!*\
  !*** ./src/assets/audio/sfx/last-sink.ogg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/last-sink.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/last-sink.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/miss1.ogg":
/*!****************************************!*\
  !*** ./src/assets/audio/sfx/miss1.ogg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/miss1.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/miss1.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/miss2.ogg":
/*!****************************************!*\
  !*** ./src/assets/audio/sfx/miss2.ogg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/miss2.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/miss2.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/miss3.ogg":
/*!****************************************!*\
  !*** ./src/assets/audio/sfx/miss3.ogg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/miss3.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/miss3.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/missile-alert.ogg":
/*!************************************************!*\
  !*** ./src/assets/audio/sfx/missile-alert.ogg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/missile-alert.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/missile-alert.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/radar-lock.ogg":
/*!*********************************************!*\
  !*** ./src/assets/audio/sfx/radar-lock.ogg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/radar-lock.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/radar-lock.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/sink1.ogg":
/*!****************************************!*\
  !*** ./src/assets/audio/sfx/sink1.ogg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/sink1.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/sink1.ogg?");

/***/ }),

/***/ "./src/assets/audio/sfx/sink2.ogg":
/*!****************************************!*\
  !*** ./src/assets/audio/sfx/sink2.ogg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/sink2.ogg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/sfx/sink2.ogg?");

/***/ }),

/***/ "./src/assets/backgrounds/menu-background.jpg":
/*!****************************************************!*\
  !*** ./src/assets/backgrounds/menu-background.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/menu-background.8a15326c5ae3c99d9677.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/backgrounds/menu-background.jpg?");

/***/ }),

/***/ "./src/assets/characters/nimitz.jpg":
/*!******************************************!*\
  !*** ./src/assets/characters/nimitz.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/nimitz.0afd1c1e52f63c98c4c8.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/nimitz.jpg?");

/***/ }),

/***/ "./src/assets/characters/noronha.jpg":
/*!*******************************************!*\
  !*** ./src/assets/characters/noronha.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/noronha.8487c9a4a847564b7df2.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/noronha.jpg?");

/***/ }),

/***/ "./src/assets/characters/olafsson.jpg":
/*!********************************************!*\
  !*** ./src/assets/characters/olafsson.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/olafsson.3ac7d47fca07febb05ea.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/olafsson.jpg?");

/***/ }),

/***/ "./src/assets/characters/rackham.jpg":
/*!*******************************************!*\
  !*** ./src/assets/characters/rackham.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/rackham.a2d4f74ef684bdcb6c96.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/rackham.jpg?");

/***/ }),

/***/ "./src/assets/characters/violeta.jpg":
/*!*******************************************!*\
  !*** ./src/assets/characters/violeta.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/violeta.cf16259d277ce9c23cc0.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/violeta.jpg?");

/***/ }),

/***/ "./src/assets/characters/yamato.jpg":
/*!******************************************!*\
  !*** ./src/assets/characters/yamato.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/yamato.48f06a5e2e25ea3e460b.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/yamato.jpg?");

/***/ }),

/***/ "./src/assets/explosions/splash1.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash1.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash1.bad47b7fff4a612907a5.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash1.png?");

/***/ }),

/***/ "./src/assets/explosions/splash10.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash10.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash10.7970b0358a045044daae.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash10.png?");

/***/ }),

/***/ "./src/assets/explosions/splash11.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash11.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash11.3f5fb9dc168856837230.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash11.png?");

/***/ }),

/***/ "./src/assets/explosions/splash12.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash12.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash12.e627ddc99ac7657cb3c6.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash12.png?");

/***/ }),

/***/ "./src/assets/explosions/splash13.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash13.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash13.67fd35cdc077bca23718.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash13.png?");

/***/ }),

/***/ "./src/assets/explosions/splash14.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash14.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash14.67e9adaa3cfd2b0685d6.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash14.png?");

/***/ }),

/***/ "./src/assets/explosions/splash15.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash15.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash15.5cac329ef7c80e650a00.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash15.png?");

/***/ }),

/***/ "./src/assets/explosions/splash16.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash16.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash16.c4b63a61283d3601a602.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash16.png?");

/***/ }),

/***/ "./src/assets/explosions/splash2.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash2.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash2.fdb42138b21face1eaac.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash2.png?");

/***/ }),

/***/ "./src/assets/explosions/splash3.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash3.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash3.dfd254d7e93883492d3d.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash3.png?");

/***/ }),

/***/ "./src/assets/explosions/splash4.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash4.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash4.d14762227aa5b4962b0b.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash4.png?");

/***/ }),

/***/ "./src/assets/explosions/splash5.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash5.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash5.f30b0fc50b5f09ac6044.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash5.png?");

/***/ }),

/***/ "./src/assets/explosions/splash6.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash6.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash6.b44076dcf61e73c16aec.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash6.png?");

/***/ }),

/***/ "./src/assets/explosions/splash7.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash7.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash7.3d020a64bfe04ddc89aa.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash7.png?");

/***/ }),

/***/ "./src/assets/explosions/splash8.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash8.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash8.2616fb88f706d08821e7.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash8.png?");

/***/ }),

/***/ "./src/assets/explosions/splash9.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash9.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/splash9.57ab595b3f205f8f0d91.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash9.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion1.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion1.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion1.6add52f7275a152f78d7.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion1.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion10.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion10.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion10.78ac793df964e5807e25.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion10.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion11.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion11.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion11.16bc801737c0a21042ea.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion11.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion12.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion12.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion12.65d31d49adede8709ea3.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion12.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion13.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion13.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion13.a61b4bd1c85851189476.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion13.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion14.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion14.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion14.c6700b437421795607fc.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion14.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion15.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion15.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion15.33db3e8b13cd9f214ded.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion15.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion16.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion16.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion16.59d4a123062a5d010bfb.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion16.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion2.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion2.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion2.b4f87d9adfe4e7728c7a.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion2.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion3.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion3.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion3.823100f2d198e4c28654.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion3.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion4.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion4.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion4.437c952fa2ad0619a68a.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion4.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion5.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion5.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion5.4b434521fbce857a5471.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion5.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion6.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion6.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion6.61861ec0537713f08d18.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion6.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion7.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion7.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion7.93c52a71c1a63acee698.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion7.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion8.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion8.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion8.e0f651cb0b5c9300a6df.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion8.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion9.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion9.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/square_explosion9.8e56c4381877cd5a73e9.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion9.png?");

/***/ }),

/***/ "./src/assets/ships/battleship.png":
/*!*****************************************!*\
  !*** ./src/assets/ships/battleship.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/battleship.afb4edf4acf418e18647.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/battleship.png?");

/***/ }),

/***/ "./src/assets/ships/carrier.png":
/*!**************************************!*\
  !*** ./src/assets/ships/carrier.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/carrier.ec7ae721b78d4b6ef282.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/carrier.png?");

/***/ }),

/***/ "./src/assets/ships/cruiser.png":
/*!**************************************!*\
  !*** ./src/assets/ships/cruiser.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cruiser.393ba612cb51a117d235.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/cruiser.png?");

/***/ }),

/***/ "./src/assets/ships/destroyer.png":
/*!****************************************!*\
  !*** ./src/assets/ships/destroyer.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/destroyer.54eab7a849a82c0c46a4.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/destroyer.png?");

/***/ }),

/***/ "./src/assets/ships/submarine.png":
/*!****************************************!*\
  !*** ./src/assets/ships/submarine.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/submarine.4a9dd40e6338e4a8f51e.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/submarine.png?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar DOM = /*#__PURE__*/function () {\n  function DOM() {\n    _classCallCheck(this, DOM);\n  }\n  _createClass(DOM, null, [{\n    key: \"getHumanBoard\",\n    value: function getHumanBoard() {\n      return DOM.loadedHumanBoard;\n    }\n  }, {\n    key: \"getCpuBoard\",\n    value: function getCpuBoard() {\n      return DOM.loadedCpuBoard;\n    }\n  }, {\n    key: \"loadBoard\",\n    value: function loadBoard(player) {\n      var boardContainer = document.createElement('div');\n      var numberOfRows = player.gameboard.maxRow + 1;\n      var numberOfCols = player.gameboard.maxCol + 1;\n      for (var i = 0; i < numberOfRows; i++) {\n        var boardRow = document.createElement('div');\n        boardRow.className = 'row';\n        boardContainer.appendChild(boardRow);\n        for (var j = 0; j < numberOfCols; j++) {\n          var boardCol = document.createElement('div');\n          boardCol.className = 'col square';\n          boardRow.appendChild(boardCol);\n        }\n      }\n      boardContainer.className = \"board \".concat(player.type, \"-board\");\n      if (player.type === 'human') DOM.loadedHumanBoard = boardContainer;\n      if (player.type === 'cpu') DOM.loadedCpuBoard = boardContainer;\n    }\n  }, {\n    key: \"gridFromHtmlSquares\",\n    value: function gridFromHtmlSquares(squares) {\n      var rows = Array.from(squares);\n      var grid = [];\n      rows.forEach(function (row) {\n        return grid.push(Array.from(row.children));\n      });\n      return grid;\n    }\n  }, {\n    key: \"updateBoard\",\n    value: function updateBoard(player) {\n      var gameboard = document.querySelector(\".\".concat(player.type, \"-board\"));\n      var grid = DOM.gridFromHtmlSquares(gameboard.children);\n      player.gameboard.squares.forEach(function (square) {\n        var row = square.coords[0];\n        var col = square.coords[1];\n        var classListValue = \"col square\";\n        if (square.className) classListValue += \" \".concat(square.className);\n        if (square.className === 'occupied' && player.type === 'cpu') {\n          return;\n        } else {\n          grid[row][col].classList = classListValue;\n        }\n      });\n    }\n  }, {\n    key: \"showSunkenShips\",\n    value: function showSunkenShips(player) {\n      var board = document.querySelector(\"#\".concat(player.type, \"-board\"));\n      var shipIcons = board.querySelectorAll('.ship__icon');\n      var shipObjects = player.gameboard.ships;\n      var _loop = function _loop() {\n        var ship = _Object$values[_i];\n        if (ship.isSunk()) {\n          var sunkShipIcon = Array.from(shipIcons).find(function (element) {\n            return element.id === ship.name.en;\n          });\n          sunkShipIcon.classList.add('sunken');\n        }\n      };\n      for (var _i = 0, _Object$values = Object.values(shipObjects); _i < _Object$values.length; _i++) {\n        _loop();\n      }\n    }\n  }]);\n  return DOM;\n}();\n_defineProperty(DOM, \"loadedHumanBoard\", null);\n_defineProperty(DOM, \"loadedCpuBoard\", null);\n\n\n//# sourceURL=webpack://24-battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Animation)\n/* harmony export */ });\n/* harmony import */ var _assets_explosions_square_explosion1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/explosions/square_explosion1.png */ \"./src/assets/explosions/square_explosion1.png\");\n/* harmony import */ var _assets_explosions_square_explosion2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/explosions/square_explosion2.png */ \"./src/assets/explosions/square_explosion2.png\");\n/* harmony import */ var _assets_explosions_square_explosion3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/explosions/square_explosion3.png */ \"./src/assets/explosions/square_explosion3.png\");\n/* harmony import */ var _assets_explosions_square_explosion4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/explosions/square_explosion4.png */ \"./src/assets/explosions/square_explosion4.png\");\n/* harmony import */ var _assets_explosions_square_explosion5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/explosions/square_explosion5.png */ \"./src/assets/explosions/square_explosion5.png\");\n/* harmony import */ var _assets_explosions_square_explosion6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/explosions/square_explosion6.png */ \"./src/assets/explosions/square_explosion6.png\");\n/* harmony import */ var _assets_explosions_square_explosion7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/explosions/square_explosion7.png */ \"./src/assets/explosions/square_explosion7.png\");\n/* harmony import */ var _assets_explosions_square_explosion8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/explosions/square_explosion8.png */ \"./src/assets/explosions/square_explosion8.png\");\n/* harmony import */ var _assets_explosions_square_explosion9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/explosions/square_explosion9.png */ \"./src/assets/explosions/square_explosion9.png\");\n/* harmony import */ var _assets_explosions_square_explosion10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/explosions/square_explosion10.png */ \"./src/assets/explosions/square_explosion10.png\");\n/* harmony import */ var _assets_explosions_square_explosion11_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/explosions/square_explosion11.png */ \"./src/assets/explosions/square_explosion11.png\");\n/* harmony import */ var _assets_explosions_square_explosion12_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/explosions/square_explosion12.png */ \"./src/assets/explosions/square_explosion12.png\");\n/* harmony import */ var _assets_explosions_square_explosion13_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/explosions/square_explosion13.png */ \"./src/assets/explosions/square_explosion13.png\");\n/* harmony import */ var _assets_explosions_square_explosion14_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/explosions/square_explosion14.png */ \"./src/assets/explosions/square_explosion14.png\");\n/* harmony import */ var _assets_explosions_square_explosion15_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/explosions/square_explosion15.png */ \"./src/assets/explosions/square_explosion15.png\");\n/* harmony import */ var _assets_explosions_square_explosion16_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/explosions/square_explosion16.png */ \"./src/assets/explosions/square_explosion16.png\");\n/* harmony import */ var _assets_explosions_splash1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/explosions/splash1.png */ \"./src/assets/explosions/splash1.png\");\n/* harmony import */ var _assets_explosions_splash2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/explosions/splash2.png */ \"./src/assets/explosions/splash2.png\");\n/* harmony import */ var _assets_explosions_splash3_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/explosions/splash3.png */ \"./src/assets/explosions/splash3.png\");\n/* harmony import */ var _assets_explosions_splash4_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/explosions/splash4.png */ \"./src/assets/explosions/splash4.png\");\n/* harmony import */ var _assets_explosions_splash5_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/explosions/splash5.png */ \"./src/assets/explosions/splash5.png\");\n/* harmony import */ var _assets_explosions_splash6_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/explosions/splash6.png */ \"./src/assets/explosions/splash6.png\");\n/* harmony import */ var _assets_explosions_splash7_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/explosions/splash7.png */ \"./src/assets/explosions/splash7.png\");\n/* harmony import */ var _assets_explosions_splash8_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/explosions/splash8.png */ \"./src/assets/explosions/splash8.png\");\n/* harmony import */ var _assets_explosions_splash9_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/explosions/splash9.png */ \"./src/assets/explosions/splash9.png\");\n/* harmony import */ var _assets_explosions_splash10_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/explosions/splash10.png */ \"./src/assets/explosions/splash10.png\");\n/* harmony import */ var _assets_explosions_splash11_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/explosions/splash11.png */ \"./src/assets/explosions/splash11.png\");\n/* harmony import */ var _assets_explosions_splash12_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/explosions/splash12.png */ \"./src/assets/explosions/splash12.png\");\n/* harmony import */ var _assets_explosions_splash13_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/explosions/splash13.png */ \"./src/assets/explosions/splash13.png\");\n/* harmony import */ var _assets_explosions_splash14_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/explosions/splash14.png */ \"./src/assets/explosions/splash14.png\");\n/* harmony import */ var _assets_explosions_splash15_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/explosions/splash15.png */ \"./src/assets/explosions/splash15.png\");\n/* harmony import */ var _assets_explosions_splash16_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/explosions/splash16.png */ \"./src/assets/explosions/splash16.png\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Animation = /*#__PURE__*/function () {\n  function Animation() {\n    _classCallCheck(this, Animation);\n  }\n  _createClass(Animation, null, [{\n    key: \"displayQuote\",\n    value: function displayQuote(html, quote) {\n      if (Animation.quoteTimer) {\n        clearTimeout(Animation.quoteTimer);\n      }\n      html.textContent = '';\n      var i = 0;\n      var displayNextChar = function displayNextChar() {\n        if (i < quote.length) {\n          html.textContent += quote[i];\n          i++;\n          Animation.quoteTimer = setTimeout(displayNextChar, 15);\n        }\n      };\n      displayNextChar();\n    }\n  }, {\n    key: \"displayReaction\",\n    value: function displayReaction(html, quote, photo) {\n      Animation.activeReactions++;\n      Animation.characterPhoto.src = photo;\n      Animation.wrapper.classList.add('entra');\n      Animation.characterPhoto.classList.add('entra');\n      Animation.displayQuote(html, quote);\n      setTimeout(function () {\n        if (Animation.activeReactions <= 1) {\n          Animation.wrapper.classList.remove('entra');\n          Animation.characterPhoto.classList.remove('entra');\n        }\n        Animation.activeReactions--;\n      }, 3000);\n    }\n  }, {\n    key: \"displayExplosion\",\n    value: function displayExplosion(square) {\n      var explosion = document.createElement('img');\n      explosion.classList = 'explosion';\n      square.appendChild(explosion);\n      var _loop = function _loop(i) {\n        setTimeout(function () {\n          explosion.src = \"\".concat(Animation.explosion[i]);\n        }, 50 * i);\n      };\n      for (var i = 0; i < Animation.explosion.length; i++) {\n        _loop(i);\n      }\n      setTimeout(function () {\n        square.removeChild(explosion);\n      }, 50 * Animation.explosion.length);\n    }\n  }, {\n    key: \"displaySplash\",\n    value: function displaySplash(square) {\n      var explosion = document.createElement('img');\n      explosion.classList = 'explosion';\n      square.appendChild(explosion);\n      var _loop2 = function _loop2(i) {\n        setTimeout(function () {\n          explosion.src = \"\".concat(Animation.splash[i]);\n        }, 50 * i);\n      };\n      for (var i = 0; i < Animation.splash.length; i++) {\n        _loop2(i);\n      }\n      setTimeout(function () {\n        square.removeChild(explosion);\n      }, 50 * Animation.splash.length);\n    }\n  }, {\n    key: \"shake\",\n    value: function shake(html) {\n      html.classList.add('shake');\n      setTimeout(function () {\n        html.classList.remove('shake');\n      }, 500);\n    }\n  }]);\n  return Animation;\n}();\n_defineProperty(Animation, \"explosion\", [_assets_explosions_square_explosion1_png__WEBPACK_IMPORTED_MODULE_0__, _assets_explosions_square_explosion2_png__WEBPACK_IMPORTED_MODULE_1__, _assets_explosions_square_explosion3_png__WEBPACK_IMPORTED_MODULE_2__, _assets_explosions_square_explosion4_png__WEBPACK_IMPORTED_MODULE_3__, _assets_explosions_square_explosion5_png__WEBPACK_IMPORTED_MODULE_4__, _assets_explosions_square_explosion6_png__WEBPACK_IMPORTED_MODULE_5__, _assets_explosions_square_explosion7_png__WEBPACK_IMPORTED_MODULE_6__, _assets_explosions_square_explosion8_png__WEBPACK_IMPORTED_MODULE_7__, _assets_explosions_square_explosion9_png__WEBPACK_IMPORTED_MODULE_8__, _assets_explosions_square_explosion10_png__WEBPACK_IMPORTED_MODULE_9__, _assets_explosions_square_explosion11_png__WEBPACK_IMPORTED_MODULE_10__, _assets_explosions_square_explosion12_png__WEBPACK_IMPORTED_MODULE_11__, _assets_explosions_square_explosion13_png__WEBPACK_IMPORTED_MODULE_12__, _assets_explosions_square_explosion14_png__WEBPACK_IMPORTED_MODULE_13__, _assets_explosions_square_explosion15_png__WEBPACK_IMPORTED_MODULE_14__, _assets_explosions_square_explosion16_png__WEBPACK_IMPORTED_MODULE_15__]);\n_defineProperty(Animation, \"splash\", [_assets_explosions_splash1_png__WEBPACK_IMPORTED_MODULE_16__, _assets_explosions_splash2_png__WEBPACK_IMPORTED_MODULE_17__, _assets_explosions_splash3_png__WEBPACK_IMPORTED_MODULE_18__, _assets_explosions_splash4_png__WEBPACK_IMPORTED_MODULE_19__, _assets_explosions_splash5_png__WEBPACK_IMPORTED_MODULE_20__, _assets_explosions_splash6_png__WEBPACK_IMPORTED_MODULE_21__, _assets_explosions_splash7_png__WEBPACK_IMPORTED_MODULE_22__, _assets_explosions_splash8_png__WEBPACK_IMPORTED_MODULE_23__, _assets_explosions_splash9_png__WEBPACK_IMPORTED_MODULE_24__, _assets_explosions_splash10_png__WEBPACK_IMPORTED_MODULE_25__, _assets_explosions_splash11_png__WEBPACK_IMPORTED_MODULE_26__, _assets_explosions_splash12_png__WEBPACK_IMPORTED_MODULE_27__, _assets_explosions_splash13_png__WEBPACK_IMPORTED_MODULE_28__, _assets_explosions_splash14_png__WEBPACK_IMPORTED_MODULE_29__, _assets_explosions_splash15_png__WEBPACK_IMPORTED_MODULE_30__, _assets_explosions_splash16_png__WEBPACK_IMPORTED_MODULE_31__]);\n_defineProperty(Animation, \"wrapper\", document.querySelector('#reaction-wrapper'));\n_defineProperty(Animation, \"characterPhoto\", document.querySelector('#character-photo'));\n_defineProperty(Animation, \"quoteTimer\", null);\n_defineProperty(Animation, \"activeReactions\", 0);\n\n\n//# sourceURL=webpack://24-battleship/./src/animations.js?");

/***/ }),

/***/ "./src/audio.js":
/*!**********************!*\
  !*** ./src/audio.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameAudio)\n/* harmony export */ });\n/* harmony import */ var _assets_audio_sfx_miss1_ogg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/audio/sfx/miss1.ogg */ \"./src/assets/audio/sfx/miss1.ogg\");\n/* harmony import */ var _assets_audio_sfx_miss2_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/audio/sfx/miss2.ogg */ \"./src/assets/audio/sfx/miss2.ogg\");\n/* harmony import */ var _assets_audio_sfx_miss3_ogg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/audio/sfx/miss3.ogg */ \"./src/assets/audio/sfx/miss3.ogg\");\n/* harmony import */ var _assets_audio_sfx_hit1_ogg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/audio/sfx/hit1.ogg */ \"./src/assets/audio/sfx/hit1.ogg\");\n/* harmony import */ var _assets_audio_sfx_hit2_ogg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/audio/sfx/hit2.ogg */ \"./src/assets/audio/sfx/hit2.ogg\");\n/* harmony import */ var _assets_audio_sfx_hit3_ogg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/audio/sfx/hit3.ogg */ \"./src/assets/audio/sfx/hit3.ogg\");\n/* harmony import */ var _assets_audio_sfx_sink1_ogg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/audio/sfx/sink1.ogg */ \"./src/assets/audio/sfx/sink1.ogg\");\n/* harmony import */ var _assets_audio_sfx_sink2_ogg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/audio/sfx/sink2.ogg */ \"./src/assets/audio/sfx/sink2.ogg\");\n/* harmony import */ var _assets_audio_sfx_last_sink_ogg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/audio/sfx/last-sink.ogg */ \"./src/assets/audio/sfx/last-sink.ogg\");\n/* harmony import */ var _assets_audio_sfx_radar_lock_ogg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/audio/sfx/radar-lock.ogg */ \"./src/assets/audio/sfx/radar-lock.ogg\");\n/* harmony import */ var _assets_audio_sfx_missile_alert_ogg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/audio/sfx/missile-alert.ogg */ \"./src/assets/audio/sfx/missile-alert.ogg\");\n/* harmony import */ var _assets_audio_music_no_time_to_die_hartzmann_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/audio/music/no-time-to-die-hartzmann.mp3 */ \"./src/assets/audio/music/no-time-to-die-hartzmann.mp3\");\n/* harmony import */ var _assets_audio_music_corsairs_studio_kolomna_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/audio/music/corsairs-studio-kolomna.mp3 */ \"./src/assets/audio/music/corsairs-studio-kolomna.mp3\");\n/* harmony import */ var _assets_audio_music_dance_of_devils_giulio_fazio_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/audio/music/dance-of-devils-giulio-fazio.mp3 */ \"./src/assets/audio/music/dance-of-devils-giulio-fazio.mp3\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// SFX\n\n\n\n\n\n\n\n\n\n\n\n\n// MUSIC\n\n\n\nvar GameAudio = /*#__PURE__*/function () {\n  function GameAudio() {\n    _classCallCheck(this, GameAudio);\n  }\n  _createClass(GameAudio, null, [{\n    key: \"playSfx\",\n    value: function playSfx(category) {\n      var random = Math.floor(Math.random() * category.length);\n      var audio = new Audio(category[random]);\n      audio.volume = parseFloat(localStorage.getItem('sfx-vol'));\n      audio.play();\n    }\n  }, {\n    key: \"playRadarLockInfiniteLoop\",\n    value: function playRadarLockInfiniteLoop(action) {\n      if (action === 'start') {\n        GameAudio.radarLockInterval = setInterval(function () {\n          if (!GameAudio.radarLockAudio) {\n            GameAudio.radarLockAudio = new Audio(GameAudio.radarLock[0]);\n          }\n          GameAudio.radarLockAudio.volume = parseFloat(localStorage.getItem('sfx-vol'));\n          GameAudio.radarLockAudio.play();\n        }, 1500);\n      } else if (action === 'stop') {\n        clearInterval(GameAudio.radarLockInterval);\n        if (GameAudio.radarLockAudio) {\n          GameAudio.radarLockAudio.pause();\n          GameAudio.radarLockAudio.currentTime = 0;\n        }\n      }\n    }\n  }, {\n    key: \"playMusic\",\n    value: function playMusic(category) {\n      GameAudio.currentSong.addEventListener('ended', function () {\n        GameAudio.currentSongIndex++;\n        if (GameAudio.currentSongIndex >= category.length) {\n          GameAudio.currentSongIndex = 0;\n        }\n        GameAudio.currentSong.src = category[GameAudio.currentSongIndex];\n        GameAudio.currentSong.muted = true;\n        GameAudio.currentSong.play();\n      });\n      GameAudio.currentSong.src = category[0];\n      GameAudio.currentSong.volume = parseFloat(localStorage.getItem('music-vol'));\n      GameAudio.currentSong.play();\n    }\n  }, {\n    key: \"setMusicVolume\",\n    value: function setMusicVolume(volume) {\n      GameAudio.musicVolume = volume;\n      if (GameAudio.currentSong) {\n        GameAudio.currentSong.volume = volume;\n      }\n    }\n  }]);\n  return GameAudio;\n}();\n_defineProperty(GameAudio, \"miss\", [_assets_audio_sfx_miss1_ogg__WEBPACK_IMPORTED_MODULE_0__, _assets_audio_sfx_miss2_ogg__WEBPACK_IMPORTED_MODULE_1__, _assets_audio_sfx_miss3_ogg__WEBPACK_IMPORTED_MODULE_2__]);\n_defineProperty(GameAudio, \"hit\", [_assets_audio_sfx_hit1_ogg__WEBPACK_IMPORTED_MODULE_3__, _assets_audio_sfx_hit2_ogg__WEBPACK_IMPORTED_MODULE_4__, _assets_audio_sfx_hit3_ogg__WEBPACK_IMPORTED_MODULE_5__]);\n_defineProperty(GameAudio, \"sink\", [_assets_audio_sfx_sink1_ogg__WEBPACK_IMPORTED_MODULE_6__, _assets_audio_sfx_sink2_ogg__WEBPACK_IMPORTED_MODULE_7__]);\n_defineProperty(GameAudio, \"lastSink\", [_assets_audio_sfx_last_sink_ogg__WEBPACK_IMPORTED_MODULE_8__]);\n_defineProperty(GameAudio, \"radarLock\", [_assets_audio_sfx_radar_lock_ogg__WEBPACK_IMPORTED_MODULE_9__]);\n_defineProperty(GameAudio, \"missileAlert\", [_assets_audio_sfx_missile_alert_ogg__WEBPACK_IMPORTED_MODULE_10__]);\n_defineProperty(GameAudio, \"mainMenu\", [_assets_audio_music_no_time_to_die_hartzmann_mp3__WEBPACK_IMPORTED_MODULE_11__]);\n_defineProperty(GameAudio, \"placeShips\", [_assets_audio_music_corsairs_studio_kolomna_mp3__WEBPACK_IMPORTED_MODULE_12__]);\n_defineProperty(GameAudio, \"battle\", [_assets_audio_music_dance_of_devils_giulio_fazio_mp3__WEBPACK_IMPORTED_MODULE_13__, _assets_audio_music_no_time_to_die_hartzmann_mp3__WEBPACK_IMPORTED_MODULE_11__, _assets_audio_music_corsairs_studio_kolomna_mp3__WEBPACK_IMPORTED_MODULE_12__]);\n_defineProperty(GameAudio, \"radarLockInterval\", void 0);\n_defineProperty(GameAudio, \"radarLockAudio\", void 0);\n_defineProperty(GameAudio, \"currentSongIndex\", 0);\n_defineProperty(GameAudio, \"currentSong\", new Audio());\n_defineProperty(GameAudio, \"musicVolume\", 1);\n\n\n//# sourceURL=webpack://24-battleship/./src/audio.js?");

/***/ }),

/***/ "./src/bot.js":
/*!********************!*\
  !*** ./src/bot.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bot)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar Bot = /*#__PURE__*/function () {\n  function Bot(name, _char) {\n    _classCallCheck(this, Bot);\n    this.name = name;\n    this[\"char\"] = _char;\n    this.type = 'cpu';\n    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](10, 10, new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n    this.aim = 'random';\n    this.sequence = [];\n  }\n  _createClass(Bot, [{\n    key: \"randomAttack\",\n    value: function randomAttack(enemy) {\n      this.aim = 'random';\n      var row = this.gameboard.getRandomRow();\n      var col = this.gameboard.getRandomCol();\n      if (this.isSquareAvailable(row, col, enemy)) {\n        return enemy.gameboard.receiveAttack(row, col);\n      } else {\n        return this.randomAttack(enemy);\n      }\n    }\n  }, {\n    key: \"smartAttack\",\n    value: function smartAttack(sequenceStart, lastAttack, enemy) {\n      if (JSON.stringify(lastAttack.coords) === JSON.stringify(sequenceStart.coords) || lastAttack.content === 'water') {\n        var _enemy$gameboard;\n        var row = sequenceStart.coords[0];\n        var col = sequenceStart.coords[1];\n        var nextAttack = this.spreadAim(row, col, enemy);\n        return (_enemy$gameboard = enemy.gameboard).receiveAttack.apply(_enemy$gameboard, _toConsumableArray(nextAttack));\n      }\n      if (lastAttack.content !== 'water') {\n        this.sequence.push(lastAttack);\n        if (this.aim === 'lock-row' || this.aim === 'lock-col') {\n          var _enemy$gameboard2;\n          var _nextAttack = this.lockAim(sequenceStart, this.aim, enemy);\n          return (_enemy$gameboard2 = enemy.gameboard).receiveAttack.apply(_enemy$gameboard2, _toConsumableArray(_nextAttack));\n        } else {\n          var _enemy$gameboard3;\n          if (sequenceStart.coords[0] === lastAttack.coords[0]) this.aim = 'lock-row';\n          if (sequenceStart.coords[1] === lastAttack.coords[1]) this.aim = 'lock-col';\n          var _nextAttack2 = this.lockAim(sequenceStart, this.aim, enemy);\n          return (_enemy$gameboard3 = enemy.gameboard).receiveAttack.apply(_enemy$gameboard3, _toConsumableArray(_nextAttack2));\n        }\n      }\n    }\n  }, {\n    key: \"attack\",\n    value: function attack(enemy) {\n      var sequenceStart = enemy.gameboard.sequence.start;\n      var lastAttack = enemy.gameboard.sequence.next;\n      if (sequenceStart) {\n        return this.smartAttack(sequenceStart, lastAttack, enemy);\n      } else {\n        this.sequence = [];\n        return this.randomAttack(enemy);\n      }\n    }\n  }, {\n    key: \"isSquareAvailable\",\n    value: function isSquareAvailable(row, col, enemy) {\n      var isOutOfBounds = row > enemy.gameboard.maxRow || row < 0 || col > enemy.gameboard.maxCol || col < 0;\n      if (isOutOfBounds) {\n        return false;\n      }\n      var isAlreadyAttacked = enemy.gameboard.squares.find(function (square) {\n        return JSON.stringify(square.coords) === JSON.stringify([row, col]) && square.attacked;\n      });\n      if (isAlreadyAttacked) {\n        return false;\n      } else {\n        return true;\n      }\n    }\n  }, {\n    key: \"spreadAim\",\n    value: function spreadAim(row, col, enemy) {\n      this.aim = 'spread';\n      var possibleMoves = [[row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]];\n      return this.getRandomAdjacency(possibleMoves, enemy);\n    }\n  }, {\n    key: \"lockAim\",\n    value: function lockAim(sequenceStart, aim, enemy) {\n      var possibleMoves = [];\n      if (aim === 'lock-col') {\n        possibleMoves.push([sequenceStart.coords[0] + 1, sequenceStart.coords[1]]);\n        possibleMoves.push([sequenceStart.coords[0] - 1, sequenceStart.coords[1]]);\n        var _iterator = _createForOfIteratorHelper(this.sequence),\n          _step;\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var square = _step.value;\n            possibleMoves.push([square.coords[0] + 1, square.coords[1]]);\n            possibleMoves.push([square.coords[0] - 1, square.coords[1]]);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n      if (aim === 'lock-row') {\n        possibleMoves.push([sequenceStart.coords[0], sequenceStart.coords[1] + 1]);\n        possibleMoves.push([sequenceStart.coords[0], sequenceStart.coords[1] - 1]);\n        var _iterator2 = _createForOfIteratorHelper(this.sequence),\n          _step2;\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var _square = _step2.value;\n            possibleMoves.push([_square.coords[0], _square.coords[1] + 1]);\n            possibleMoves.push([_square.coords[0], _square.coords[1] - 1]);\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n      }\n      return this.getRandomAdjacency(possibleMoves, enemy);\n    }\n  }, {\n    key: \"getRandomAdjacency\",\n    value: function getRandomAdjacency(moves, enemy) {\n      var _this = this;\n      var adjacencies = moves.filter(function (move) {\n        return _this.isSquareAvailable.apply(_this, _toConsumableArray(move).concat([enemy]));\n      });\n      return adjacencies[Math.floor(Math.random() * adjacencies.length)];\n    }\n  }]);\n  return Bot;\n}();\n\n\n//# sourceURL=webpack://24-battleship/./src/bot.js?");

/***/ }),

/***/ "./src/characters.js":
/*!***************************!*\
  !*** ./src/characters.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   charObjects: () => (/* binding */ charObjects)\n/* harmony export */ });\n/* harmony import */ var _assets_characters_nimitz_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/characters/nimitz.jpg */ \"./src/assets/characters/nimitz.jpg\");\n/* harmony import */ var _assets_characters_yamato_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/characters/yamato.jpg */ \"./src/assets/characters/yamato.jpg\");\n/* harmony import */ var _assets_characters_olafsson_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/characters/olafsson.jpg */ \"./src/assets/characters/olafsson.jpg\");\n/* harmony import */ var _assets_characters_violeta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/characters/violeta.jpg */ \"./src/assets/characters/violeta.jpg\");\n/* harmony import */ var _assets_characters_rackham_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/characters/rackham.jpg */ \"./src/assets/characters/rackham.jpg\");\n/* harmony import */ var _assets_characters_noronha_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/characters/noronha.jpg */ \"./src/assets/characters/noronha.jpg\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar Char = /*#__PURE__*/_createClass(function Char(name, fullName, src, color, colorAlpha) {\n  _classCallCheck(this, Char);\n  this.name = name;\n  this.fullName = fullName;\n  this.src = src;\n  this.color = color;\n  this.colorAlpha = colorAlpha;\n});\nvar charObjects = {\n  nimitz: new Char('nimitz', 'Douglas Nimitz', _assets_characters_nimitz_jpg__WEBPACK_IMPORTED_MODULE_0__, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),\n  yamato: new Char('yamato', 'Satoru Yamato', _assets_characters_yamato_jpg__WEBPACK_IMPORTED_MODULE_1__, 'rgb(7, 89, 201)', 'rgba(7, 89, 201, 0.5)'),\n  olafsson: new Char('olafsson', 'Leif Oláfsson', _assets_characters_olafsson_jpg__WEBPACK_IMPORTED_MODULE_2__, 'rgb(241, 94, 24)', 'rgba(241, 94, 24, 0.5)'),\n  violeta: new Char('violeta', 'Violeta Pavlichenko', _assets_characters_violeta_jpg__WEBPACK_IMPORTED_MODULE_3__, 'rgb(244, 195, 67)', 'rgba(244, 195, 67, 0.5)'),\n  rackham: new Char('rackham', 'Jack Rackham', _assets_characters_rackham_jpg__WEBPACK_IMPORTED_MODULE_4__, 'rgb(220, 220, 220)', 'rgba(220, 220, 220, 0.5)'),\n  noronha: new Char('noronha', 'Alberto Noronha', _assets_characters_noronha_jpg__WEBPACK_IMPORTED_MODULE_5__, 'rgb(62, 244, 84)', 'rgba(62, 244, 84, 0.5)')\n};\n\n//# sourceURL=webpack://24-battleship/./src/characters.js?");

/***/ }),

/***/ "./src/dragAndDrop.js":
/*!****************************!*\
  !*** ./src/dragAndDrop.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DragAndDrop)\n/* harmony export */ });\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _gameControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameControl.js */ \"./src/gameControl.js\");\n/* harmony import */ var _place_ships_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place-ships.js */ \"./src/place-ships.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar DragAndDrop = /*#__PURE__*/function () {\n  function DragAndDrop() {\n    _classCallCheck(this, DragAndDrop);\n  }\n  _createClass(DragAndDrop, null, [{\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      window.addEventListener('keypress', function (e) {\n        return DragAndDrop.changeAxis(e.key);\n      });\n      DragAndDrop.addFleetEventListeners();\n      DragAndDrop.addBoardEventListeners();\n    }\n  }, {\n    key: \"changeAxis\",\n    value: function changeAxis(key) {\n      if (key === 'x') {\n        DragAndDrop.axis = 'row';\n        DragAndDrop.board.setAttribute('data-activeAxis', 'x');\n      }\n      if (key === 'z') {\n        DragAndDrop.axis = 'col';\n        DragAndDrop.board.setAttribute('data-activeAxis', 'y');\n      }\n    }\n  }, {\n    key: \"gridFromHtmlSquares\",\n    value: function gridFromHtmlSquares(squares) {\n      var matrix = Array.from(squares).map(function (row) {\n        return Array.from(row.children);\n      }).flat();\n      for (var i = 0; i < matrix.length; i++) {\n        var row = Array.from(matrix[i].children);\n        DragAndDrop.grid.push([]);\n        for (var j = 0; j < row.length; j++) {\n          DragAndDrop.grid[i].push({\n            coords: [i, j],\n            htmlElement: row[j]\n          });\n        }\n      }\n    }\n  }, {\n    key: \"extractIndicesFromGrid\",\n    value: function extractIndicesFromGrid(grid, target) {\n      for (var i = 0; i < grid.length; i++) {\n        for (var j = 0; j < grid[i].length; j++) {\n          if (grid[i][j].htmlElement === target) {\n            return [i, j];\n          }\n        }\n      }\n    }\n  }, {\n    key: \"getSquaresFromBoard\",\n    value: function getSquaresFromBoard() {\n      var squares = DragAndDrop.board.firstChild.querySelectorAll('.square');\n      return Array.from(squares);\n    }\n  }, {\n    key: \"getShipsFromFleet\",\n    value: function getShipsFromFleet() {\n      var ships = DragAndDrop.fleet.querySelectorAll('.ship__icon');\n      return Array.from(ships);\n    }\n  }, {\n    key: \"addFleetEventListeners\",\n    value: function addFleetEventListeners() {\n      var ships = DragAndDrop.getShipsFromFleet();\n      ships.forEach(function (ship) {\n        ship.parentNode.addEventListener('dragstart', function (e) {\n          return DragAndDrop.dragStart(e);\n        });\n        ship.parentNode.addEventListener('dragend', function (e) {\n          return DragAndDrop.dragEnd(e);\n        });\n      });\n    }\n  }, {\n    key: \"addBoardEventListeners\",\n    value: function addBoardEventListeners() {\n      var squares = DragAndDrop.getSquaresFromBoard();\n      squares.forEach(function (square) {\n        square.addEventListener('dragover', function (e) {\n          return DragAndDrop.dragOver(e);\n        });\n        square.addEventListener('dragleave', function () {\n          return DragAndDrop.dragLeave();\n        });\n        square.addEventListener('drop', function (e) {\n          return DragAndDrop.drop(e);\n        });\n      });\n    }\n  }, {\n    key: \"dragStart\",\n    value: function dragStart(e) {\n      e.currentTarget.classList.add('dragging');\n      e.dataTransfer.setData('text/plain', e.currentTarget);\n      DragAndDrop.selectedShip = Object.values(_gameControl_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players[0].gameboard.ships).find(function (ship) {\n        return ship.name.en === e.currentTarget.querySelector('.ship__icon').id;\n      });\n      var shipDragClone = e.currentTarget.cloneNode(true);\n      shipDragClone.classList.add('ship__drag--clone');\n      var shipIcon = shipDragClone.querySelector('.ship__icon');\n      if (DragAndDrop.axis === 'col') shipIcon.classList.add('rotated');\n      document.body.appendChild(shipDragClone);\n      e.dataTransfer.setDragImage(shipDragClone, 20, 20);\n    }\n  }, {\n    key: \"dragEnd\",\n    value: function dragEnd(e) {\n      e.currentTarget.classList.remove('dragging');\n      document.body.removeChild(document.querySelector('.ship__drag--clone'));\n      if (e.currentTarget.classList.contains('placed')) {\n        e.currentTarget.removeAttribute('draggable');\n        e.currentTarget.addEventListener('mousedown', function (e) {\n          return e.preventDefault();\n        });\n        _place_ships_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updatePlaceShipQuote(e.target.firstChild.id);\n      }\n    }\n  }, {\n    key: \"drop\",\n    value: function drop(e) {\n      e.preventDefault();\n      var placedShip = false;\n      if (DragAndDrop.hoveredSquare) {\n        placedShip = _gameControl_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players[0].gameboard.placeShip(DragAndDrop.hoveredSquare[0], DragAndDrop.hoveredSquare[1], DragAndDrop.axis, DragAndDrop.selectedShip);\n      }\n      if (placedShip) {\n        var draggingShip = document.querySelector('.dragging');\n        if (DragAndDrop.axis === 'col') draggingShip.classList.add('rotated');\n        sessionStorage.setItem(DragAndDrop.selectedShip.name.en + '-row', DragAndDrop.hoveredSquare[0]);\n        sessionStorage.setItem(DragAndDrop.selectedShip.name.en + '-col', DragAndDrop.hoveredSquare[1]);\n        sessionStorage.setItem(DragAndDrop.selectedShip.name.en + '-axis', DragAndDrop.axis);\n        draggingShip.classList.add('placed');\n        e.target.appendChild(draggingShip);\n        DragAndDrop.shipsPlaced++;\n        if (DragAndDrop.shipsPlaced === DragAndDrop.fleet.children.length) {\n          _place_ships_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].confirmBtn.disabled = false;\n        }\n      }\n      _DOM_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateBoard(_gameControl_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players[0]);\n    }\n  }, {\n    key: \"dragOver\",\n    value: function dragOver(e) {\n      e.preventDefault();\n      DragAndDrop.hoveredSquare = DragAndDrop.extractIndicesFromGrid(DragAndDrop.grid, e.target);\n      if (DragAndDrop.hoveredSquare) {\n        var allowedPlacement = _gameControl_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].players[0].gameboard.verifySquareAvailability(DragAndDrop.hoveredSquare[0], DragAndDrop.hoveredSquare[1], DragAndDrop.axis, DragAndDrop.selectedShip);\n        for (var i = 0; i < DragAndDrop.selectedShip.size; i++) {\n          var row = DragAndDrop.hoveredSquare[0];\n          var col = DragAndDrop.hoveredSquare[1];\n          DragAndDrop.axis === 'row' ? col += i : row += i;\n          if (row > DragAndDrop.grid.length - 1 || col > DragAndDrop.grid[0].length - 1) {\n            break;\n          }\n          if (allowedPlacement) {\n            DragAndDrop.grid[row][col].htmlElement.classList.add('dragover--allowed-placement');\n          } else {\n            DragAndDrop.grid[row][col].htmlElement.classList.add('dragover--not-allowed-placement');\n          }\n        }\n      }\n    }\n  }, {\n    key: \"dragLeave\",\n    value: function dragLeave() {\n      for (var i = 0; i < DragAndDrop.grid.length; i++) {\n        for (var j = 0; j < DragAndDrop.grid[i].length; j++) {\n          DragAndDrop.grid[i][j].htmlElement.classList.remove('dragover--allowed-placement');\n          DragAndDrop.grid[i][j].htmlElement.classList.remove('dragover--not-allowed-placement');\n        }\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      DragAndDrop.grid = [];\n      DragAndDrop.shipsPlaced = 0;\n      DragAndDrop.gridFromHtmlSquares(DragAndDrop.board.children);\n      DragAndDrop.setEventListeners();\n    }\n  }]);\n  return DragAndDrop;\n}();\n_defineProperty(DragAndDrop, \"board\", document.querySelector('#strategy-board'));\n_defineProperty(DragAndDrop, \"fleet\", document.querySelector('#fleet'));\n_defineProperty(DragAndDrop, \"grid\", []);\n_defineProperty(DragAndDrop, \"axis\", 'row');\n_defineProperty(DragAndDrop, \"hoveredSquare\", null);\n_defineProperty(DragAndDrop, \"selectedShip\", null);\n_defineProperty(DragAndDrop, \"shipsPlaced\", 0);\n\n\n//# sourceURL=webpack://24-battleship/./src/dragAndDrop.js?");

/***/ }),

/***/ "./src/gameControl.js":
/*!****************************!*\
  !*** ./src/gameControl.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _bot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bot.js */ \"./src/bot.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _characters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters.js */ \"./src/characters.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n  }\n  _createClass(Game, null, [{\n    key: \"setPlayers\",\n    value: function setPlayers() {\n      var playerName = sessionStorage.getItem('player-name');\n      var playerChar = _characters_js__WEBPACK_IMPORTED_MODULE_3__.charObjects[sessionStorage.getItem('player-char')];\n      var cpuName = _characters_js__WEBPACK_IMPORTED_MODULE_3__.charObjects[sessionStorage.getItem('cpu-char')].name;\n      var cpuChar = _characters_js__WEBPACK_IMPORTED_MODULE_3__.charObjects[sessionStorage.getItem('cpu-char')];\n      var player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](playerName, playerChar);\n      var cpu = new _bot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cpuName, cpuChar);\n      Game.players.push(player);\n      Game.players.push(cpu);\n    }\n  }, {\n    key: \"newGame\",\n    value: function newGame() {\n      _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadBoard(Game.players[0]);\n      _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadBoard(Game.players[1]);\n    }\n  }, {\n    key: \"nextPlayer\",\n    value: function nextPlayer() {\n      Game.turn = Game.turn === 0 ? 1 : 0;\n    }\n  }, {\n    key: \"gameOver\",\n    value: function gameOver() {\n      var isGameOver = false;\n      Game.players.forEach(function (player) {\n        if (player.gameboard.areAllShipsSunk()) {\n          isGameOver = true;\n        }\n      });\n      return isGameOver;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      Game.setPlayers();\n      Game.newGame();\n    }\n  }]);\n  return Game;\n}();\n_defineProperty(Game, \"players\", []);\n_defineProperty(Game, \"turn\", 0);\n\nGame.init();\n\n//# sourceURL=webpack://24-battleship/./src/gameControl.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar SquareInfo = /*#__PURE__*/_createClass(function SquareInfo(coords, content, attacked, className) {\n  _classCallCheck(this, SquareInfo);\n  this.coords = coords;\n  this.content = content;\n  this.attacked = attacked;\n  this.className = className;\n});\nvar Gameboard = /*#__PURE__*/function () {\n  function Gameboard(row, col, set) {\n    _classCallCheck(this, Gameboard);\n    this.squares = [];\n    this.ships = set;\n    this.board = this.buildGrid(row, col);\n    this.maxRow = this.board[this.board.length - 1][0];\n    this.maxCol = this.board[this.board.length - 1][1];\n    this.sequence = {\n      start: null,\n      next: null\n    };\n  }\n  _createClass(Gameboard, [{\n    key: \"buildGrid\",\n    value: function buildGrid(row, col) {\n      var grid = [];\n      for (var i = 0; i < row; i++) {\n        for (var j = 0; j < col; j++) {\n          grid.push([i, j]);\n          this.squares.push(new SquareInfo([i, j], 'water', false, null));\n        }\n      }\n      return grid;\n    }\n  }, {\n    key: \"findSquare\",\n    value: function findSquare(row, col) {\n      var square = this.squares.find(function (square) {\n        return JSON.stringify(square.coords) === JSON.stringify([row, col]);\n      });\n      return square;\n    }\n  }, {\n    key: \"verifySquareAvailability\",\n    value: function verifySquareAvailability(row, col, axis, ship) {\n      for (var i = 0; i < ship.size; i++) {\n        var square = this.findSquare(row, col);\n        var adjacencies = this.getAdjacencies(row, col);\n        if (!square) return false;\n        var overlapedSquare = square.content !== 'water' || adjacencies.some(function (square) {\n          return square.content !== 'water';\n        });\n        var isOutOfBounds = row > this.maxRow || row < 0 || col > this.maxCol || col < 0;\n        axis === 'row' ? col++ : row++;\n        if (overlapedSquare || isOutOfBounds) {\n          return false;\n        }\n      }\n      return true;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip(row, col, axis, ship) {\n      var isSquareAvailable = this.verifySquareAvailability(row, col, axis, ship);\n      if (isSquareAvailable) {\n        ship.coords = [row, col, axis];\n        for (var i = 0; i < ship.size; i++) {\n          var square = this.findSquare(row, col);\n          square.content = ship;\n          square.className = 'occupied';\n          axis === 'row' ? col++ : row++;\n        }\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(row, col) {\n      var square = this.findSquare(row, col);\n      square.attacked = true;\n      if (square.content !== 'water') {\n        square.content.hit();\n        if (square.content.hits === 1) {\n          this.sequence.start = square;\n        }\n        if (!square.content.isSunk()) {\n          this.sequence.next = square;\n          square.className = 'hit';\n        }\n        if (square.content.isSunk()) {\n          this.sequence.start = null;\n          this.sequence.next = null;\n          square.className = 'sunk';\n        }\n        return square;\n      }\n      if (square.content === 'water') {\n        var adjacencies = this.getAdjacencies(row, col);\n        if (adjacencies.some(function (square) {\n          return square.content !== 'water' && !square.attacked;\n        })) {\n          square.className = 'close';\n        } else {\n          square.className = 'miss';\n        }\n        return square;\n      }\n    }\n  }, {\n    key: \"getAdjacencies\",\n    value: function getAdjacencies(row, col) {\n      var adjacencies = [];\n      var posX = row + 1 > this.maxRow ? this.maxRow : row + 1;\n      var posY = col + 1 > this.maxCol ? this.maxCol : col + 1;\n      var negX = row - 1 < 0 ? 0 : row - 1;\n      var negY = col - 1 < 0 ? 0 : col - 1;\n      var adjacentPosX = this.findSquare(posX, col);\n      var adjacentPosY = this.findSquare(row, posY);\n      var adjacentNegX = this.findSquare(negX, col);\n      var adjacentNegY = this.findSquare(row, negY);\n      adjacencies.push(adjacentPosX, adjacentPosY, adjacentNegX, adjacentNegY);\n      return adjacencies;\n    }\n  }, {\n    key: \"areAllShipsSunk\",\n    value: function areAllShipsSunk() {\n      for (var _i = 0, _Object$values = Object.values(this.ships); _i < _Object$values.length; _i++) {\n        var ship = _Object$values[_i];\n        if (!ship.isSunk()) return false;\n      }\n      return true;\n    }\n  }, {\n    key: \"setFormationRandomly\",\n    value: function setFormationRandomly() {\n      var isSquareAvailable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var shipCounter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var placingParameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      if (shipCounter >= Object.keys(this.ships).length) {\n        return;\n      }\n      if (isSquareAvailable) {\n        this.placeShip.apply(this, _toConsumableArray(placingParameters));\n        shipCounter++;\n        isSquareAvailable = false;\n        placingParameters = false;\n        return this.setFormationRandomly(isSquareAvailable, shipCounter);\n      }\n      if (!isSquareAvailable) {\n        var row = this.getRandomRow();\n        var col = this.getRandomCol();\n        var axis = Math.random() < 0.5 ? 'row' : 'col';\n        var ship = Object.values(this.ships)[shipCounter];\n        var _placingParameters = [row, col, axis, ship];\n        isSquareAvailable = this.verifySquareAvailability(row, col, axis, ship);\n        return this.setFormationRandomly(isSquareAvailable, shipCounter, _placingParameters);\n      }\n    }\n  }, {\n    key: \"getRandomRow\",\n    value: function getRandomRow() {\n      var board = this.board;\n      var numberOfRows = board[board.length - 1][0];\n      return Math.floor(Math.random() * (numberOfRows + 1));\n    }\n  }, {\n    key: \"getRandomCol\",\n    value: function getRandomCol() {\n      var board = this.board;\n      var numberOfCols = board[board.length - 1][1];\n      return Math.floor(Math.random() * (numberOfCols + 1));\n    }\n  }, {\n    key: \"resetGameboard\",\n    value: function resetGameboard() {\n      this.squares = [];\n      var _iterator = _createForOfIteratorHelper(this.board),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var coord = _step.value;\n          this.squares.push(new SquareInfo([coord[0], coord[1]], 'water', false, null));\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }]);\n  return Gameboard;\n}();\n\n\n//# sourceURL=webpack://24-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Header = /*#__PURE__*/function () {\n  function Header() {\n    _classCallCheck(this, Header);\n  }\n  _createClass(Header, null, [{\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      Header.optionsBtn.addEventListener('click', Header.openOptionsModal);\n      Header.closeOptions.addEventListener('click', Header.closeOptionsModal);\n      Header.langOptions.forEach(function (option) {\n        return option.addEventListener('change', function (e) {\n          Header.langOptions.forEach(function (option) {\n            return option.classList.remove('lang-selected');\n          });\n          e.target.classList.add('lang-selected');\n          _settings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeLang(e.target);\n        });\n      });\n      Header.musicVolumeSlider.addEventListener('change', function (e) {\n        _settings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setMusicVolume(parseFloat(e.target.value));\n      });\n      Header.sfxVolumeSlider.addEventListener('change', function (e) {\n        _settings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setSfxVolume(parseFloat(e.target.value));\n      });\n    }\n  }, {\n    key: \"openOptionsModal\",\n    value: function openOptionsModal() {\n      Header.optionsModal.classList.add('dialog--open');\n      _settings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadSettings();\n      Header.optionsModal.showModal();\n    }\n  }, {\n    key: \"closeOptionsModal\",\n    value: function closeOptionsModal() {\n      Header.optionsModal.classList.remove('dialog--open');\n      Header.optionsModal.close();\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      Header.setEventListeners();\n    }\n  }]);\n  return Header;\n}();\n_defineProperty(Header, \"optionsBtn\", document.querySelector('#options-btn'));\n_defineProperty(Header, \"closeOptions\", document.querySelector('#close-options'));\n_defineProperty(Header, \"optionsModal\", document.querySelector('#options-modal'));\n_defineProperty(Header, \"langOptions\", document.querySelectorAll('.language-radio'));\n_defineProperty(Header, \"musicVolumeSlider\", document.querySelector('#music-volume-slider'));\n_defineProperty(Header, \"sfxVolumeSlider\", document.querySelector('#sfx-volume-slider'));\n\n\n//# sourceURL=webpack://24-battleship/./src/header.js?");

/***/ }),

/***/ "./src/language.js":
/*!*************************!*\
  !*** ./src/language.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Language)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Language = /*#__PURE__*/function () {\n  function Language() {\n    _classCallCheck(this, Language);\n  }\n  _createClass(Language, null, [{\n    key: \"loadDataAttributes\",\n    value: function loadDataAttributes(htmlElement, array) {\n      htmlElement.setAttribute('data-en', array[0]);\n      htmlElement.setAttribute('data-pt', array[1]);\n    }\n  }]);\n  return Language;\n}();\n\n\n//# sourceURL=webpack://24-battleship/./src/language.js?");

/***/ }),

/***/ "./src/place-ships.js":
/*!****************************!*\
  !*** ./src/place-ships.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlaceShips)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _place_ships_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-ships.css */ \"./src/place-ships.css\");\n/* harmony import */ var _gameControl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameControl.js */ \"./src/gameControl.js\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dragAndDrop.js */ \"./src/dragAndDrop.js\");\n/* harmony import */ var _characters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters.js */ \"./src/characters.js\");\n/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animations.js */ \"./src/animations.js\");\n/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio.js */ \"./src/audio.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\n/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./language.js */ \"./src/language.js\");\n/* harmony import */ var _quote_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quote.js */ \"./src/quote.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar PlaceShips = /*#__PURE__*/function () {\n  function PlaceShips() {\n    _classCallCheck(this, PlaceShips);\n  }\n  _createClass(PlaceShips, null, [{\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      PlaceShips.confirmBtn.addEventListener('click', PlaceShips.nextScreen);\n      PlaceShips.resetBtn.addEventListener('click', PlaceShips.resetFormation);\n      PlaceShips.xAxisBtn.addEventListener('click', function () {\n        return _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].changeAxis('x');\n      });\n      PlaceShips.yAxisBtn.addEventListener('click', function () {\n        return _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].changeAxis('z');\n      });\n    }\n  }, {\n    key: \"loadFleet\",\n    value: function loadFleet() {\n      for (var _i = 0, _Object$values = Object.values(_gameControl_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].players[0].gameboard.ships); _i < _Object$values.length; _i++) {\n        var shipObject = _Object$values[_i];\n        var ship = document.createElement('div');\n        var shipName = document.createElement('p');\n        var shipYard = document.createElement('div');\n        var shipDrag = document.createElement('div');\n        var shipIcon = document.createElement('div');\n        ship.classList = 'ship';\n        shipName.classList = 'ship__name';\n        shipYard.classList = 'ship__yard';\n        shipDrag.classList = 'ship__drag';\n        shipIcon.classList = 'ship__icon';\n        shipName.setAttribute('data-en', shipObject.name.en);\n        shipName.setAttribute('data-pt', shipObject.name.pt);\n        shipDrag.setAttribute('draggable', 'true');\n        shipIcon.id = shipObject.name.en;\n        shipIcon.style.background = \"url(\".concat(shipObject.src, \") no-repeat center\");\n        shipIcon.style.mask = \"url(\".concat(shipObject.src, \") no-repeat center\");\n        shipDrag.appendChild(shipIcon);\n        shipYard.appendChild(shipDrag);\n        ship.appendChild(shipName);\n        ship.appendChild(shipYard);\n        PlaceShips.fleet.appendChild(ship);\n      }\n    }\n  }, {\n    key: \"loadCharacter\",\n    value: function loadCharacter() {\n      PlaceShips.character = _characters_js__WEBPACK_IMPORTED_MODULE_5__.charObjects[sessionStorage.getItem('player-char')];\n      PlaceShips.characterName.textContent = PlaceShips.character.fullName;\n      PlaceShips.characterPhoto.src = PlaceShips.character.src;\n      _language_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].loadDataAttributes(PlaceShips.characterQuotes, _quote_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].getPreparationQuote(PlaceShips.character.name));\n      _animations_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].displayQuote(PlaceShips.characterQuotes, PlaceShips.characterQuotes.getAttribute(\"data-\".concat(localStorage.getItem('lang'))));\n      PlaceShips.root.style.setProperty('--color-player', _characters_js__WEBPACK_IMPORTED_MODULE_5__.charObjects[sessionStorage.getItem('player-char')].color);\n      PlaceShips.root.style.setProperty('--color-player-alpha', _characters_js__WEBPACK_IMPORTED_MODULE_5__.charObjects[sessionStorage.getItem('player-char')].colorAlpha);\n      PlaceShips.root.style.setProperty('--color-cpu', _characters_js__WEBPACK_IMPORTED_MODULE_5__.charObjects[sessionStorage.getItem('cpu-char')].color);\n    }\n  }, {\n    key: \"loadBoard\",\n    value: function loadBoard() {\n      PlaceShips.strategyBoard.appendChild(_DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getHumanBoard());\n    }\n  }, {\n    key: \"resetFormation\",\n    value: function resetFormation() {\n      PlaceShips.strategyBoard.innerHTML = '';\n      PlaceShips.fleet.innerHTML = '';\n      _gameControl_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].players[0].gameboard.resetGameboard();\n      _DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadBoard(_gameControl_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].players[0]);\n      PlaceShips.loadFleet();\n      PlaceShips.loadBoard();\n      _settings_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].loadLanguage();\n      _language_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].loadDataAttributes(PlaceShips.characterQuotes, _quote_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].getResetQuote(PlaceShips.character.name));\n      _animations_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].displayQuote(PlaceShips.characterQuotes, PlaceShips.characterQuotes.getAttribute(\"data-\".concat(localStorage.getItem('lang'))));\n      PlaceShips.confirmBtn.disabled = true;\n      _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n    }\n  }, {\n    key: \"updatePlaceShipQuote\",\n    value: function updatePlaceShipQuote(shipId) {\n      var ship = Object.values(_gameControl_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].players[0].gameboard.ships).find(function (ship) {\n        return ship.name.en === shipId;\n      });\n      var charName = PlaceShips.character.name;\n      _language_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].loadDataAttributes(PlaceShips.characterQuotes, _quote_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"].getPlaceShipQuote(charName, ship));\n      _animations_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].displayQuote(PlaceShips.characterQuotes, PlaceShips.characterQuotes.getAttribute(\"data-\".concat(localStorage.getItem('lang'))));\n    }\n  }, {\n    key: \"playPlaceShipMusic\",\n    value: function playPlaceShipMusic() {\n      _audio_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].playMusic(_audio_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].placeShips);\n      document.body.removeEventListener('mousedown', PlaceShips.playPlaceShipMusic);\n    }\n  }, {\n    key: \"nextScreen\",\n    value: function nextScreen() {\n      if (_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].shipsPlaced === _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fleet.children.length) {\n        window.location.href = 'battle.html';\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      PlaceShips.loadFleet();\n      PlaceShips.loadBoard();\n      _settings_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].loadLanguage();\n      PlaceShips.loadCharacter();\n      PlaceShips.setEventListeners();\n      _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n      _header_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].init();\n      document.body.addEventListener('mousedown', PlaceShips.playPlaceShipMusic);\n    }\n  }]);\n  return PlaceShips;\n}();\n_defineProperty(PlaceShips, \"root\", document.querySelector(':root'));\n_defineProperty(PlaceShips, \"fleet\", document.querySelector('#fleet'));\n_defineProperty(PlaceShips, \"strategyBoard\", document.querySelector('#strategy-board'));\n_defineProperty(PlaceShips, \"characterName\", document.querySelector('#character-name'));\n_defineProperty(PlaceShips, \"characterPhoto\", document.querySelector('#character-photo'));\n_defineProperty(PlaceShips, \"characterQuotes\", document.querySelector('#character-quotes'));\n_defineProperty(PlaceShips, \"confirmBtn\", document.querySelector('#confirmFormation'));\n_defineProperty(PlaceShips, \"resetBtn\", document.querySelector('#resetFormation'));\n_defineProperty(PlaceShips, \"xAxisBtn\", document.querySelector('#x-axis-button'));\n_defineProperty(PlaceShips, \"yAxisBtn\", document.querySelector('#y-axis-button'));\n_defineProperty(PlaceShips, \"character\", null);\n\nPlaceShips.init();\n\n//# sourceURL=webpack://24-battleship/./src/place-ships.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player(name, _char) {\n    _classCallCheck(this, Player);\n    this.name = name;\n    this[\"char\"] = _char;\n    this.type = 'human';\n    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](10, 10, new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n  }\n  _createClass(Player, [{\n    key: \"attack\",\n    value: function attack(row, col, enemy) {\n      if (this.isSquareAvailable(row, col, enemy)) {\n        return enemy.gameboard.receiveAttack(row, col);\n      }\n    }\n  }, {\n    key: \"isSquareAvailable\",\n    value: function isSquareAvailable(row, col, enemy) {\n      var isAlreadyAttacked = enemy.gameboard.squares.find(function (square) {\n        return JSON.stringify(square.coords) === JSON.stringify([row, col]) && square.attacked === true;\n      });\n      if (isAlreadyAttacked) {\n        return false;\n      } else {\n        return true;\n      }\n    }\n  }]);\n  return Player;\n}();\n\n\n//# sourceURL=webpack://24-battleship/./src/player.js?");

/***/ }),

/***/ "./src/quote.js":
/*!**********************!*\
  !*** ./src/quote.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Quote)\n/* harmony export */ });\n/* harmony import */ var _quotes_en_place_ships_quotes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotes/en/place-ships-quotes.js */ \"./src/quotes/en/place-ships-quotes.js\");\n/* harmony import */ var _quotes_pt_place_ships_quotes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes/pt/place-ships-quotes.js */ \"./src/quotes/pt/place-ships-quotes.js\");\n/* harmony import */ var _quotes_en_battle_quotes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotes/en/battle-quotes.js */ \"./src/quotes/en/battle-quotes.js\");\n/* harmony import */ var _quotes_pt_battle_quotes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes/pt/battle-quotes.js */ \"./src/quotes/pt/battle-quotes.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\nvar Quote = /*#__PURE__*/function () {\n  function Quote() {\n    _classCallCheck(this, Quote);\n  }\n  _createClass(Quote, null, [{\n    key: \"randomize\",\n    value: function randomize(quoteArrays) {\n      var randomIndex = Math.floor(Math.random()) * quoteArrays[0].length;\n      var quotes = [];\n      for (var i = 0; i < quoteArrays.length; i++) {\n        quotes.push(quoteArrays[i][randomIndex]);\n      }\n      return quotes;\n    }\n  }, {\n    key: \"replacePlaceholders\",\n    value: function replacePlaceholders(quotes, ship, enemy) {\n      var _enemy;\n      enemy = (_enemy = enemy) !== null && _enemy !== void 0 ? _enemy : 'enemy';\n      var replacedQuotes = [];\n      for (var i = 0; i < quotes.length; i++) {\n        var shipReplacement = void 0;\n        if (ship) shipReplacement = Object.values(ship.name)[i];\n        replacedQuotes.push(quotes[i].replace('#SHIP', shipReplacement).replace('#ENEMY', enemy.slice(0, 1).toUpperCase().concat(enemy.slice(1))));\n      }\n      return replacedQuotes;\n    }\n  }, {\n    key: \"getPreparationQuote\",\n    value: function getPreparationQuote(_char) {\n      var quoteArrays = [];\n      Object.values(Quote.placeShip).forEach(function (lang) {\n        return quoteArrays.push(lang.preparation[_char]);\n      });\n      return Quote.replacePlaceholders(Quote.randomize(quoteArrays));\n    }\n  }, {\n    key: \"getPlaceShipQuote\",\n    value: function getPlaceShipQuote(_char2, ship) {\n      var quoteArrays = [];\n      Object.values(Quote.placeShip).forEach(function (lang) {\n        return quoteArrays.push(lang.placeShip[_char2]);\n      });\n      return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship);\n    }\n  }, {\n    key: \"getResetQuote\",\n    value: function getResetQuote(_char3, ship) {\n      var quoteArrays = [];\n      Object.values(Quote.placeShip).forEach(function (lang) {\n        return quoteArrays.push(lang.reset[_char3]);\n      });\n      return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship);\n    }\n  }, {\n    key: \"getOurMissQuote\",\n    value: function getOurMissQuote(_char4, ship, enemy) {\n      var quoteArrays = [];\n      Object.values(Quote.battle).forEach(function (lang) {\n        return quoteArrays.push(lang.ourMiss[_char4]);\n      });\n      return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);\n    }\n  }, {\n    key: \"getOurHitQuote\",\n    value: function getOurHitQuote(_char5, ship, enemy) {\n      var quoteArrays = [];\n      Object.values(Quote.battle).forEach(function (lang) {\n        return quoteArrays.push(lang.ourHit[_char5]);\n      });\n      return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);\n    }\n  }, {\n    key: \"getOurSinkQuote\",\n    value: function getOurSinkQuote(_char6, ship, enemy) {\n      var quoteArrays = [];\n      Object.values(Quote.battle).forEach(function (lang) {\n        return quoteArrays.push(lang.ourSink[_char6]);\n      });\n      return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);\n    }\n  }, {\n    key: \"getTheirMissQuote\",\n    value: function getTheirMissQuote(_char7, ship, enemy) {\n      var quoteArrays = [];\n      Object.values(Quote.battle).forEach(function (lang) {\n        return quoteArrays.push(lang.theirMiss[_char7]);\n      });\n      return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);\n    }\n  }, {\n    key: \"getTheirHitQuote\",\n    value: function getTheirHitQuote(_char8, ship, enemy) {\n      var quoteArrays = [];\n      Object.values(Quote.battle).forEach(function (lang) {\n        return quoteArrays.push(lang.theirHit[_char8]);\n      });\n      return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);\n    }\n  }, {\n    key: \"getTheirSinkQuote\",\n    value: function getTheirSinkQuote(_char9, ship, enemy) {\n      var quoteArrays = [];\n      Object.values(Quote.battle).forEach(function (lang) {\n        return quoteArrays.push(lang.theirSink[_char9]);\n      });\n      return Quote.replacePlaceholders(Quote.randomize(quoteArrays), ship, enemy);\n    }\n  }]);\n  return Quote;\n}();\n_defineProperty(Quote, \"placeShip\", {\n  en: _quotes_en_place_ships_quotes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  pt: _quotes_pt_place_ships_quotes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n_defineProperty(Quote, \"battle\", {\n  en: _quotes_en_battle_quotes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  pt: _quotes_pt_battle_quotes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/quote.js?");

/***/ }),

/***/ "./src/quotes/en/battle-quotes.js":
/*!****************************************!*\
  !*** ./src/quotes/en/battle-quotes.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BattleQuotes)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar BattleQuotes = /*#__PURE__*/_createClass(function BattleQuotes() {\n  _classCallCheck(this, BattleQuotes);\n});\n_defineProperty(BattleQuotes, \"ourMiss\", {\n  yamato: [\"We failed in our calculations. Recalculate immediately!\", \"You can't hide forever, #ENEMY.\", \"Patience is an invaluable virtue.\"],\n  olafsson: [\"I didn't hear any explosion...\", \"There's no point in running away, #ENEMY.\", \"We're coming after you!\"],\n  violeta: [\"No luck this time. Recalibrating the aim.\", \"How could they have escaped?\", \"We're not making much progress here.\"],\n  rackham: [\"That was just a warning shot.\", \"It must have been the wind...\", \"Don't hide, #ENEMY!\"],\n  nimitz: [\"The radar data was unable to pick up anything this time.\", \"Our aim needs some adjustments.\", \"No returns...\"],\n  noronha: [\"The target remains above the horizon line.\", \"Nothing...\", \"We're unable to locate the enemy. We need a new attack plan.\"]\n});\n_defineProperty(BattleQuotes, \"ourHit\", {\n  yamato: [\"Bullseye! Stay alert for a possible counterattack!\", \"Enemy ship in sight. Never doubt our capability, #ENEMY.\", \"Don't let them escape!\"],\n  olafsson: [\"#ENEMY, your only way out is surrender. We won't give you any quarter!\", \"BOOM! Hahaha!\", \"Feel the fury of our cannons!\"],\n  violeta: [\"Enemy ship hit! We're on the right track.\", \"That's it! #ENEMY forces are still searching for what hit them.\", \"They're retreating!\"],\n  rackham: [\"Right on target! I thought this one would be trickier.\", \"Good job, lads. Tonight, the booze is on me!\", \"Haha! We rule these seas, #ENEMY!\"],\n  nimitz: [\"Target hit! Excellent job, artillery!\", \"Hit confirmed. Reporting enemy position.\", \"We got'em!\"],\n  noronha: [\"They're on the ropes!\", \"We caught one of their vessels! It won't get very far.\", \"There's no escape, #ENEMY!\"]\n});\n_defineProperty(BattleQuotes, \"ourSink\", {\n  yamato: [\"Enemy #SHIP destroyed!\", \"There's no stopping us!\"],\n  olafsson: [\"They're going down!\", \"May the souls of those who fell in battle rest in peace.\"],\n  violeta: [\"Our chance is now, go, go!\", \"Destruction of enemy #SHIP confirmed!\"],\n  rackham: [\"This is just the beginning, #ENEMY!\", \"The enemy #SHIP is floating like a brick!\"],\n  nimitz: [\"The sinking of the enemy's #SHIP was a major blow in their defensive line. Keep pushing!\", \"We're gaining ground in the enemy's field!\"],\n  noronha: [\"We've sunk their #SHIP, our victory is getting closer!\", \"We will go all the way!\"]\n});\n_defineProperty(BattleQuotes, \"theirMiss\", {\n  yamato: [\"We're buying time.\", \"Our defense line is an impenetrable shield!\", \"Yet another enemy projectile tearing through the skies aimlessly.\"],\n  olafsson: [\"Very good! Keep wasting ammunition.\", \"Not today!\", \"They're shooting like blind men! Keep challenging them!\"],\n  violeta: [\"Stay in the shadows, the enemy can't see us!\", \"This was the opening we needed. Advance at full force!\", \"Give up, #ENEMY!\"],\n  rackham: [\"Hahaha! Keep trying, #ENEMY!\", \"Splash!\", \"The fish are suffering at the hands of the enemy.\"],\n  nimitz: [\"Our coordinates haven't been tracked by the enemy yet. Keep your eyes peeled.\", \"Our tactics are confusing them. Good job!\", \"A shot in the dark. As long as #ENEMY forces continue like this, we'll be safe.\"],\n  noronha: [\"Watch out for the flanks!\", \"They've lost sight of us.\", \"Successful evasion! Don't let your guard down, they'll be back!\"]\n});\n_defineProperty(BattleQuotes, \"theirHit\", {\n  yamato: [\"Code red! Time to counterattack with all our honor!\", \"Keep fighting, men, our ships can take much more than this!\", \"Our hull has suffered damage! Repair it immediately!\"],\n  olafsson: [\"#ENEMY, prepare to witness the fury of the seas!\", \"Unity is our armor. Hold the line, warriors!\", \"The sky darkens upon our heads. But the gods are with us.\"],\n  violeta: [\"We've just suffered considerable damage on one of our ships. Prepare the rescue team!\", \"You are not alone, marines! Directing reinforcements now!\", \"These damages are nothing for a crew like ours! Stay strong!\"],\n  rackham: [\"Man overboard! Man overboard!\", \"You'll never catch us alive, #ENEMY!\", \"Evasive maneuver! Brace for the next impact!\"],\n  nimitz: [\"Attention all units, we're under enemy fire. Requesting immediate support!\", \"We've been hit!\", \"Damage reported on the deck! Medics, be ready to treat the wounded!\"],\n  noronha: [\"We're suffering major damage on one of our vessels, we need reinforcements!\", \"Hold steady, marines, we're dispatching reinforcements to your position!\", \"You've made a big mistake, #ENEMY.\"]\n});\n_defineProperty(BattleQuotes, \"theirSink\", {\n  yamato: [\"There is still hope!\", \"A painful sacrifice, but our determination remains unshaken!\"],\n  olafsson: [\"We will never kneel!\", \"Prepare to avenge our fallen men!\"],\n  violeta: [\"No! Not our #SHIP!\", \"We are stronger than you think, #ENEMY.\"],\n  rackham: [\"If this is our destiny, we will fall with dignity.\", \"Don't worry, marines, the rescue will come in time!\"],\n  nimitz: [\"Abandon ship! Abandon ship!\", \"#SHIP is sinking, send the rescue team!\"],\n  noronha: [\"Our people don't know the word surrender. This battle will be ours!\", \"Don't let your guard down, everyone! Stay calm and stick to the plan.\"]\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/quotes/en/battle-quotes.js?");

/***/ }),

/***/ "./src/quotes/en/place-ships-quotes.js":
/*!*********************************************!*\
  !*** ./src/quotes/en/place-ships-quotes.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlaceShipQuotes)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar PlaceShipQuotes = /*#__PURE__*/_createClass(function PlaceShipQuotes() {\n  _classCallCheck(this, PlaceShipQuotes);\n});\n_defineProperty(PlaceShipQuotes, \"preparation\", {\n  yamato: [\"In war, every move must be executed with precision. We will fight with honor and loyalty to our land until our last breath, if necessary, but we will bring justice!\"],\n  olafsson: [\"There's no iron storm or waves of fire that can keep us from returning to our families today! History will be written with blood and courage. For honor and glory!\"],\n  violeta: [\"Sailors, prepare to glide through the shadows of the waves. Stealth and agility will be our greatest weapons. Tomorrow, we will strike without warning!\"],\n  rackham: [\"It's time to follow the map towards freedom. Behold the vastness of the horizon, sailors, for tomorrow we shall be the masters of the seas!\"],\n  nimitz: [\"Sailors, prepare to position our vessels in the theater of operations. Victory will only be achieved through strategy, discipline, and faith. To arms!\"],\n  noronha: [\"Gentlemen, the enemy awaits us. Remember our action plan and stay mentally strong. The next hours will be of struggle, but the next days will be of glory!\"]\n});\n_defineProperty(PlaceShipQuotes, \"placeShip\", {\n  yamato: [\"O #SHIP reforçará nossa posição defensiva, mantendo o equilíbrio da batalha.\", \"Cortaremos as esperanças do inimigo como uma lâmina afiada.\", \"Tripulação do #SHIP, lembrem-se do nosso código de conduta e honrem a nossa pátria.\", \"No silêncio antes da tempestade, encontro a calma interior e vejo com clareza as fraquezas do inimigo.\"],\n  olafsson: [\"Com este #SHIP, faremos tremer as águas e imporemos respeito.\", \"Nossas embarcações esmagarão o inimigo e nos devolverá a glória\", \"O rugido do mar ecoa como um trovão. Cada onda é um convite para a glória, e cada navio é uma extensão da bravura do nosso povo.\", \"O #SHIP será como uma tempestade intransponível em alto mar.\"],\n  violeta: [\"O #SHIP será nossa arma secreta.\", \"Com a estratégia ofensiva adequada, este #SHIP nos permitirá surpreender e desmantelar as forças inimigas rapidamente.\", \"Sorrateiro como uma serpente, letal como um tubarão.\", \"Emergiremos das sombras das ondas para mandá-los às profundezas do oceano.\"],\n  rackham: [\"O #SHIP será a chave para a conquista destas águas.\", \"Bons ventos e mares tranquilos, marujos.\", \"Homens do #SHIP, será uma honra lutar ao seu lado.\", \"Levantem as bandeiras, #SHIP!\"],\n  nimitz: [\"Estou enviando o #SHIP para reforçar nossa frente de ataque.\", \"Com este #SHIP, anularemos as investidas inimigas e garantiremos a supremacia naval de nossa nação.\", \"Todos apostos no convés!\", \"Tripulação do #SHIP, prossiga 3 milhas náuticas a leste para sua posição de combate.\"],\n  noronha: [\"Este #SHIP será a chave para nossa tática de combate.\", \"A criatividade sempre foi o nosso forte. Nosso #SHIP vindo desta posição será um grande elemento surpresa.\", \"Somos resistentes como um #SHIP, capazes de superar qualquer obstáculo.\", \"#O SHIP defenderá o perímetro.\"]\n});\n_defineProperty(PlaceShipQuotes, \"reset\", {\n  yamato: [\"A busca pela mais precisa solução tática nos leva aprimorar nossos planos.\"],\n  olafsson: [\"As mudanças das marés demandam adaptações em nossas táticas.\"],\n  violeta: [\"Nada como a arte da ludibriação. O inimigo pensa que não tínhamos ciência de suas espionagens. Traçaremos o real plano de ação agora.\"],\n  rackham: [\"Ótimo, alguém derramou bebida no mapa e agora precisaremos elaborar o plano novamente. Favor enviar a equipe de limpeza para o meu escritório.\"],\n  nimitz: [\"Marinheiros, nosso planejamento sofrerá modificações.\"],\n  noronha: [\"As novas condições climáticas demandam quer o plano B seja colocado em ação.\"]\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/quotes/en/place-ships-quotes.js?");

/***/ }),

/***/ "./src/quotes/pt/battle-quotes.js":
/*!****************************************!*\
  !*** ./src/quotes/pt/battle-quotes.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BattleQuotes)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar BattleQuotes = /*#__PURE__*/_createClass(function BattleQuotes() {\n  _classCallCheck(this, BattleQuotes);\n});\n_defineProperty(BattleQuotes, \"ourMiss\", {\n  yamato: [\"Falhamos em nossos cálculos. Recalculem, imediatamente!\", \"Você não pode se esconder para sempre, #ENEMY.\", \"A paciência é uma virtude inestimável.\"],\n  olafsson: [\"Não ouvi nenhuma explosão...\", \"Não adianta fugir, #ENEMY.\", \"Estamos indo atrás de vocês!\"],\n  violeta: [\"Sem sorte desta vez. Recalibrando a mira.\", \"Como podem ter escapado?\", \"Não estamos fazendo muito progresso por aqui.\"],\n  rackham: [\"Isso foi só um tiro de advertência.\", \"Deve ter sido o vento...\", \"Não se esconda, #ENEMY!\"],\n  nimitz: [\"Os dados do radar não captaram nada desta vez.\", \"Nossa mira precisa de alguns ajustes.\", \"Nenhum retorno...\"],\n  noronha: [\"O alvo permanece acima da linha do horizonte.\", \"Nada...\", \"Não estamos conseguindo localizar o inimigo, precisamos de um novo plano de ataque.\"]\n});\n_defineProperty(BattleQuotes, \"ourHit\", {\n  yamato: [\"Direto no alvo! Fiquem atentos a um possível contra-ataque!\", \"Navio inimigo na mira. Jamais duvide de nossa capacidade, #ENEMY.\", \"Não os deixem escapar!\"],\n  olafsson: [\"#ENEMY, sua única saída é a rendição. Não daremos trégua!\", \"BOOM! Hahaha!\", \"Sinta a fúria de nossos canhões!\"],\n  violeta: [\"Navio inimigo atingido! Estamos no caminho certo.\", \"Isso! As forças de #ENEMY está procurando o que os atingiu até agora.\", \"Eles estão recuando!\"],\n  rackham: [\"Na mosca! Pensei que este fosse dar mais trabalho.\", \"Bom trabalho, rapazes. Hoje a cerveja será por minha conta!\", \"Haha! Nós governamos estes mares, #ENEMY!\"],\n  nimitz: [\"Alvo atingido! Excelente trabalho, artilharia!\", \"Acerto confirmado. Reportando posição do inimigo.\", \"Pegamos eles!\"],\n  noronha: [\"Eles estão nas cordas!\", \"Pegamos uma embarcação deles! Essa não vai muito longe.\", \"Não há como escapar, #ENEMY!\"]\n});\n_defineProperty(BattleQuotes, \"ourSink\", {\n  yamato: [\"#SHIP inimigo destruído!\", \"Não tem como nos deter!\"],\n  olafsson: [\"Lá vão eles para as profundezas!\", \"Que a alma dos que caíram em batalha descanse em paz.\"],\n  violeta: [\"A nossa chance é agora, vamos, vamos!\", \"Destruição do #SHIP inimigo confirmada!\"],\n  rackham: [\"Este é apenas o começo, #ENEMY!\", \"O #SHIP inimigo está flutuando igual a um tijolo!\"],\n  nimitz: [\"O naufrágio do #SHIP do inimigo foi um duro golpe em sua linha defensiva. Continuem avançando!\", \"Estamos ganhando espaço no campo do inimigo!\"],\n  noronha: [\"Afundamos o #SHIP deles, nossa vitória está cada vez mais próxima!\", \"Nós vamos até o fim!\"]\n});\n_defineProperty(BattleQuotes, \"theirMiss\", {\n  yamato: [\"Estamos ganhando tempo.\", \"Nossa linha de defesa é um escudo impenetrável!\", \"Mais um projétil inimigo que rasga os céus sem direção.\"],\n  olafsson: [\"Muito bom! Continuem desperdiçando munição.\", \"Hoje não!\", \"Eles atiram como cegos! Continuem desafiando-os!\"],\n  violeta: [\"Continuem nas sombras, o inimigo não consegue nos ver!\", \"Esta era a brecha que precisamos. Avançem com força total!\", \"Desista, #ENEMY!\"],\n  rackham: [\"Hahaha! Continue tentando, #ENEMY!\", \"Splash!\", \"Os peixes estão sofrendo nas mãos do inimigo.\"],\n  nimitz: [\"Nossas coordenadas ainda não foram rastreadas pelo inimigo. Mantenham os olhos abertos.\", \"Nossas táticas estão confundindo-os. Bom trabalho!\", \"Um tiro no escuro. Enquanto as forças de #ENEMY continuarem assim, estaremos seguros.\"],\n  noronha: [\"Cuidado com os flancos!\", \"Eles nos perderam de vista.\", \"Evasiva bem-sucedida! Não baixem a guarda, eles voltarão!\"]\n});\n_defineProperty(BattleQuotes, \"theirHit\", {\n  yamato: [\"Código vermelho! Hora de contra-atacar com toda a nossa honra!\", \"Continuem lutando, homens, nossos navios aguentam muito mais que isso!\", \"Nosso casco sofreu danos! Reparem imediatamente!\"],\n  olafsson: [\"#ENEMY, prepare-se para testemunhar a fúria dos mares!\", \"A união é nossa armadura. Mantenham a posição, guerreiros!\", \"O céu escurece sobre nós. Mas os deuses estão conosco.\"],\n  violeta: [\"Acabamos de sofrer danos consideráveis em um de nossos navios. Preparar equipe de resgate!\", \"Vocês não estão sozinhos, marinheiros! Direcionando reforços agora!\", \"Esses danos não são nada para uma tripulação como a nossa! Continuem firmes!\"],\n  rackham: [\"Homem ao mar! Homem ao mar!\", \"Você nunca nos pegará vivos, #ENEMY!\", \"Manobra evasiva! Preparem-se para o próximo impacto!\"],\n  nimitz: [\"Atenção todas as unidades, estamos sob fogo inimigo. Solicitando apoio imediato!\", \"Fomos acoplados!\", \"Danos reportados no convés! Médicos, estejam prontos para tratar os feridos!\"],\n  noronha: [\"Estamos sofrendo grandes avarias em uma de nossas embarcações, precisamos de reforços!\", \"Aguentem firme, marinheiros, estamos deslocando reforços para a sua posição!\", \"Você cometeu um grande erro, #ENEMY.\"]\n});\n_defineProperty(BattleQuotes, \"theirSink\", {\n  yamato: [\"Ainda há esperanças!\", \"Um sacrifício doloroso, mas nossa determinação não se abala!\"],\n  olafsson: [\"Nunca nos curvaremos!\",\n  // \"We will never kneel!\",\n  \"Preparem-se para vingar nossos homens caídos!\"],\n  violeta: [\"Não! Não o nosso #SHIP!\", \"Somos mais fortes do que pensa, #ENEMY.\"],\n  rackham: [\"Se este é o nosso destino, cairemos de pé.\", \"Não se preocupem, marujos, o resgate chegará a tempo!\"],\n  nimitz: [\"Abandonar navio! Abandonar navio!\", \"O #SHIP está afundando, enviem a equipe de resgate!\"],\n  noronha: [\"Nosso povo não conhece a palavra desistência. Esta batalha será nossa!\", \"Não baixem a guarda, pessoal! Matenham a calma e sigam com o plano.\"]\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/quotes/pt/battle-quotes.js?");

/***/ }),

/***/ "./src/quotes/pt/place-ships-quotes.js":
/*!*********************************************!*\
  !*** ./src/quotes/pt/place-ships-quotes.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PlaceShipQuotes)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar PlaceShipQuotes = /*#__PURE__*/_createClass(function PlaceShipQuotes() {\n  _classCallCheck(this, PlaceShipQuotes);\n});\n_defineProperty(PlaceShipQuotes, \"preparation\", {\n  yamato: [\"In war, every move must be executed with precision. We will fight with honor and loyalty to our land, if necessary, until our last breath, but we will bring justice!\"],\n  olafsson: [\"There's no iron storm or waves of fire that can keep us from returning to our families today! History will be written with blood and courage. For honor and glory!\"],\n  violeta: [\"Marines, prepare to glide through the shadows of the waves. Stealth and agility will be our greatest weapons. Tomorrow, we will strike without warning!\"],\n  rackham: [\"It's time to follow the map towards freedom. Behold the vastness of the horizon, marines, for tomorrow we shall be the lords of the seas!\"],\n  nimitz: [\"Marines, prepare to position our vessels in the theater of operations. Victory will only be achieved through strategy, discipline, and faith. To arms!\"],\n  noronha: [\"Gentlemen, the enemy awaits us. Remember our action plan and stay mentally strong. The next hours will be of struggle, but the next days will be of glory!\"]\n});\n_defineProperty(PlaceShipQuotes, \"placeShip\", {\n  yamato: [\"The #SHIP will reinforce our defensive position, maintaining the balance of the battle.\", \"We will cut through the enemy's hopes like a sharp blade.\", \"#SHIP crew, remember our code of conduct and honor our homeland.\", \"In the silence before the storm, I find inner calm and see the enemy's weaknesses clearly.\"],\n  olafsson: [\"With this #SHIP, we will make the waters tremble and command respect.\", \"Our vessels will crush the enemy and restore our glory.\", \"The roar of the sea echoes like thunder. Each wave is an invitation to glory, and each ship is an extension of our people's bravery.\", \"The #SHIP will be like an impenetrable storm at sea.\"],\n  violeta: [\"This #SHIP will be our secret weapon.\", \"With the proper offensive strategy, this #SHIP will allow us to surprise and dismantle enemy forces quickly.\", \"Stealthy as a serpent, lethal as a shark.\", \"We will emerge from the shadows of the waves to send them to the depths of the ocean.\"],\n  rackham: [\"This #SHIP will be the key to conquering these waters.\", \"Fair winds and calm seas, sailors.\", \"#SHIP men, it will be an honor to fight by your side.\", \"Hoist the colours, #SHIP crew!\"],\n  nimitz: [\"I'm sending the #SHIP to reinforce our frontline.\", \"With this #SHIP, we will nullify enemy assaults and ensure our nation's naval supremacy.\", \"All hands on deck!\", \"#SHIP crew, proceed 3 nautical miles east to your combat position.\"],\n  noronha: [\"This #SHIP will be the key to our combat tactic.\", \"Creativity has always been our strength. Our #SHIP coming from this position will be a significant surprise element.\", \"We are as resilient as a #SHIP, capable of overcoming any obstacle.\", \"Our #SHIP will defend the perimeter.\"]\n});\n_defineProperty(PlaceShipQuotes, \"reset\", {\n  yamato: [\"The pursuit of the most accurate tactical solution leads us to refine our plans.\"],\n  olafsson: [\"The changing tides demand adaptations in our tactics.\"],\n  violeta: [\"There's nothing like the art of deception. The enemy thinks we were unaware of their espionage. We will now outline the real plan of action.\"],\n  rackham: [\"Great, someone spilled a drink on the map, and now we need to devise the plan again. Please send the cleaning staff to my office.\"],\n  nimitz: [\"Marines, our planning will undergo modifications.\"],\n  noronha: [\"The new weather conditions demand that plan B be put into action.\"]\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/quotes/pt/place-ships-quotes.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Settings)\n/* harmony export */ });\n/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.js */ \"./src/audio.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Settings = /*#__PURE__*/function () {\n  function Settings() {\n    _classCallCheck(this, Settings);\n  }\n  _createClass(Settings, null, [{\n    key: \"changeLang\",\n    value: function changeLang(input) {\n      localStorage.setItem('lang', input.value);\n      Settings.loadLanguage();\n    }\n  }, {\n    key: \"setMusicVolume\",\n    value: function setMusicVolume(volume) {\n      _audio_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setMusicVolume(volume);\n      localStorage.setItem('music-vol', volume);\n    }\n  }, {\n    key: \"setSfxVolume\",\n    value: function setSfxVolume(volume) {\n      localStorage.setItem('sfx-vol', volume);\n      if (_audio_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].radarLockAudio) {\n        _audio_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].radarLockAudio.volume = parseFloat(volume);\n      }\n    }\n  }, {\n    key: \"loadLanguage\",\n    value: function loadLanguage() {\n      if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');\n      var textElements = document.querySelectorAll('[data-en]');\n      var langOptions = document.querySelectorAll('.language-radio');\n      var chosenLang = localStorage.getItem('lang');\n      textElements.forEach(function (element) {\n        return element.textContent = element.getAttribute(\"data-\".concat(chosenLang));\n      });\n      langOptions.forEach(function (element) {\n        element.classList.remove('lang-selected');\n        if (element.id === \"lang-\".concat(localStorage.getItem('lang'))) {\n          element.classList.add('lang-selected');\n        }\n      });\n    }\n  }, {\n    key: \"loadSettings\",\n    value: function loadSettings() {\n      if (!localStorage.getItem('music-vol') || !localStorage.getItem('sfx-vol')) {\n        localStorage.setItem('music-vol', 1);\n        localStorage.setItem('sfx-vol', 1);\n      }\n      var musicVolume = parseFloat(localStorage.getItem('music-vol'));\n      var sfxVolume = parseFloat(localStorage.getItem('sfx-vol'));\n      document.querySelector('#music-volume-slider').value = parseFloat(musicVolume);\n      document.querySelector('#sfx-volume-slider').value = parseFloat(sfxVolume);\n      Settings.loadLanguage();\n    }\n  }]);\n  return Settings;\n}();\n\n\n//# sourceURL=webpack://24-battleship/./src/settings.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ standardSet)\n/* harmony export */ });\n/* harmony import */ var _assets_ships_battleship_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/ships/battleship.png */ \"./src/assets/ships/battleship.png\");\n/* harmony import */ var _assets_ships_carrier_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ships/carrier.png */ \"./src/assets/ships/carrier.png\");\n/* harmony import */ var _assets_ships_cruiser_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ships/cruiser.png */ \"./src/assets/ships/cruiser.png\");\n/* harmony import */ var _assets_ships_destroyer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/ships/destroyer.png */ \"./src/assets/ships/destroyer.png\");\n/* harmony import */ var _assets_ships_submarine_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ships/submarine.png */ \"./src/assets/ships/submarine.png\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\nvar Ship = /*#__PURE__*/function () {\n  function Ship(name_en, name_pt, size, src) {\n    _classCallCheck(this, Ship);\n    this.name = {\n      en: name_en,\n      pt: name_pt\n    };\n    this.size = size;\n    this.src = src;\n    this.coords = null;\n    this.hits = 0;\n  }\n  _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hits++;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      return this.hits >= this.size;\n    }\n  }]);\n  return Ship;\n}();\nvar standardSet = /*#__PURE__*/_createClass(function standardSet() {\n  _classCallCheck(this, standardSet);\n  this.carrier = new Ship('carrier', 'porta-aviões', 5, _assets_ships_carrier_png__WEBPACK_IMPORTED_MODULE_1__);\n  this.battleship = new Ship('battleship', 'couraçado', 4, _assets_ships_battleship_png__WEBPACK_IMPORTED_MODULE_0__);\n  this.cruiser = new Ship('cruiser', 'cruzador', 3, _assets_ships_cruiser_png__WEBPACK_IMPORTED_MODULE_2__);\n  this.submarine = new Ship('submarine', 'submarino', 3, _assets_ships_submarine_png__WEBPACK_IMPORTED_MODULE_4__);\n  this.destroyer = new Ship('destroyer', 'contratorpedeiro', 2, _assets_ships_destroyer_png__WEBPACK_IMPORTED_MODULE_3__);\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"placeShips": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/place-ships.js");
/******/ 	
/******/ })()
;