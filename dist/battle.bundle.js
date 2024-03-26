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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/battle.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/battle.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.battle-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 150px 650px 650px 150px;\r\n  grid-template-rows: 150px 500px;\r\n  gap: 1rem;\r\n  place-content: center;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.wrapper--player-board {\r\n  grid-column: 2 / 3;\r\n  grid-row: 1 / 3\r\n}\r\n\r\n.wrapper--cpu-board {\r\n  grid-column: 3 / 4;\r\n  grid-row: 1 / 3\r\n}\r\n\r\n.wrapper--radar-lock-warning {\r\n  grid-row: 1 / 2;\r\n  grid-column: 1 / 2;\r\n  position: relative;\r\n  background-color: var(--color-900);\r\n  border: 5px solid var(--color-800);\r\n}\r\n\r\n.wrapper--countermeasure {\r\n  grid-column: 1 / 2;\r\n  display: grid;\r\n  place-content: center;\r\n  height: 50px;\r\n  background-color: var(--color-900);\r\n  border: 5px solid var(--color-800);\r\n}\r\n\r\n.messages-wrapper {\r\n  display: grid;\r\n  grid-template-columns: auto 500px;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  padding-top: 1rem;\r\n  visibility: hidden;\r\n  transform: translateY(-100%);\r\n  transition: all 200ms ease-in-out;\r\n}\r\n\r\n.messages-wrapper.entra {\r\n  visibility: visible;\r\n  transform: translate(0);\r\n}\r\n\r\n.wrapper--character {\r\n  transform: scaleX(0);\r\n  transition: all 200ms ease-in-out;\r\n}\r\n\r\n.wrapper--character {\r\n  transform: scale(1);\r\n}\r\n\r\n.wrapper--quotes {\r\n  padding: 0.4rem;\r\n  background-color: var(--color-900);\r\n  border: 5px solid var(--color-800);\r\n  align-self: flex-start;\r\n}\r\n\r\n.radar-lock-screen {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.radar-lock-foe > path {\r\n  opacity: 0;\r\n}\r\n\r\n.radar-lock-foe > path.lightUp {\r\n  opacity: 1;\r\n}\r\n\r\n.countermeasure-indicator {\r\n  font-size: var(--fs-300);\r\n  color: var(--color-750);\r\n}\r\n\r\n.countermeasure-indicator.lightUp {\r\n  animation: blink 700ms steps(1) 3;\r\n}\r\n\r\n@keyframes blink {\r\n  0%, 100% {\r\n    color: red;\r\n  }\r\n  50% {\r\n    color: var(--color-750);\r\n  }\r\n}\r\n\r\n.quotes {\r\n  font-family: var(--sec-ff);\r\n  font-style: italic;\r\n  font-size: var(--fs-400);\r\n  max-width: 50ch;\r\n}\r\n\r\n/* RESULT DIALOG ***********/\r\n\r\n.dialog {\r\n  position: fixed;\r\n  margin: auto;\r\n  inset: 0;\r\n  padding: 0;\r\n  border: none;\r\n  background: transparent;\r\n  color: inherit;\r\n  opacity: 0;\r\n  transform: translateY(50%);\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\n.dialog--open {\r\n  opacity: 1;\r\n  transform: translate(0);\r\n}\r\n\r\n.dialog::backdrop {\r\n  background-color: var(--color-900);\r\n  opacity: 0;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\n.dialog--open::backdrop {\r\n  opacity: 0.8;\r\n}\r\n\r\n.result-wrapper {\r\n  display: grid;\r\n  grid-template-rows: 130px 240px 130px;\r\n  grid-template-columns: 240px 1fr;\r\n  gap: 1rem;\r\n}\r\n\r\n.result-wrapper[data-result=\"win\"] {\r\n  grid-template-columns: 240px 1fr;\r\n}\r\n\r\n.result-wrapper[data-result=\"lose\"] {\r\n  grid-template-columns: 1fr;\r\n  column-gap: 0;\r\n}\r\n\r\n.result-wrapper[data-result=\"lose\"] .wrapper--character {\r\n  display: none;\r\n}\r\n\r\n.wrapper--result-display,\r\n.wrapper--footer {\r\n  grid-column: 1 / 3;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem 1.4rem;\r\n  border-top: 0.5rem solid var(--color-750);\r\n  border-right: 1rem solid var(--color-850);\r\n  border-left: 1rem solid var(--color-750);\r\n  border-bottom: 1rem solid var(--color-850);\r\n}\r\n\r\n.dialog .wrapper--sayings {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  padding: 1.4rem;\r\n  background-color: var(--color-900);\r\n  border: 5px solid var(--color-800);\r\n}\r\n\r\n.dialog .sayings {\r\n  font-family: var(--sec-ff);\r\n  font-size: var(--fs-600);\r\n  max-width: 50ch;\r\n}\r\n\r\n.secondary-button#see-result {\r\n  height: fit-content;\r\n  visibility: hidden;\r\n}\r\n\r\n.secondary-button#see-result.visible {\r\n  visibility: visible;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/battle.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/backgrounds/menu-background.jpg */ \"./src/assets/backgrounds/menu-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --main-ff: \"Press Start 2P\", system-ui;\r\n  --sec-ff: \"Roboto Mono\", monospace;\r\n\r\n  --color-900: #0C0C1C;\r\n  --color-850: #181836;\r\n  --color-800: #202040;\r\n  --color-750: #2A2A51;\r\n  --color-500: #0038FF;\r\n  --color-600: #AF40FF;\r\n  --color-100: #cdcdcd;\r\n\r\n  --color-player: #0038FF;\r\n  --color-player-alpha: rgba(255, 0, 32, 0.5);\r\n  --color-cpu: #ff0020;\r\n\r\n  --fs-300: 0.7rem;\r\n  --fs-400: 0.8rem;\r\n  --fs-500: 0.95rem;\r\n  --fs-600: 1.1rem;\r\n  --fs-700: 1.4rem;\r\n  --fs-900: 4.2rem;\r\n\r\n  --icon-size: 2.2rem;\r\n}\r\n\r\nhtml {\r\n  font-family: var(--main-ff);\r\n  font-size: 20px;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: var(--color-900);\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n\r\n  margin: 0;\r\n  color: var(--color-100);\r\n}\r\n\r\n/* BUTTONS ***********/\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.main-button {\r\n  border: 0;\r\n  border-radius: 8px;\r\n  padding: 1.1rem 0.8rem;\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-600);\r\n  color: var(--color-100);\r\n  background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%,#00DDEB);\r\n  box-shadow: rgba(64, 40, 196, 0.2) 0 15px 30px -5px;\r\n  /* user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation; */\r\n}\r\n\r\n.main-button:active,\r\n.main-button:hover {\r\n  box-shadow: rgba(151, 65, 252, 0.5) 0 15px 30px -5px;\r\n}\r\n\r\n.main-button span {\r\n  background-color: rgb(5, 6, 45);\r\n  padding: 1rem 1.6rem;\r\n  border-radius: 6px;\r\n  transition: all 100ms ease-in-out;\r\n}\r\n\r\n.main-button:hover span {\r\n  background: none;\r\n}\r\n\r\n/* @media (min-width: 768px) {\r\n  .main-button {\r\n    font-size: 24px;\r\n    min-width: 196px;\r\n  }\r\n} */\r\n\r\nbutton:disabled {\r\n  opacity: 0.3;\r\n}\r\n\r\n.secondary-button {\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-600);\r\n  border-style: none;\r\n  background-color: transparent;\r\n  color: var(--color-100);\r\n}\r\n\r\n.secondary-button:focus-visible {\r\n  outline-style: none;\r\n}\r\n\r\n.wrapper {\r\n  background-color: var(--color-800);\r\n}\r\n\r\n/* GAMEBOARDS ***********/\r\n\r\n.wrapper--board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.6rem;\r\n  padding: 2rem 3rem;\r\n  border-top: 1.5rem solid var(--color-750);\r\n  border-right: 2rem solid var(--color-850);\r\n  border-left: 1rem solid var(--color-750);\r\n  border-bottom: 1.5rem solid var(--color-850);\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\n.row {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 50px);\r\n}\r\n\r\n.human-board {\r\n  background: radial-gradient(\r\n    var(--color-player-alpha),\r\n    transparent\r\n  );\r\n}\r\n\r\n.human-board .square {\r\n  outline: 1px solid var(--color-player);\r\n}\r\n\r\n.cpu-board .square {\r\n  outline: 1px solid var(--color-cpu);\r\n  cursor: crosshair;\r\n}\r\n\r\n.square {\r\n  overflow: visible;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n#strategy-board .square:not(.occupied) {\r\n  position: relative;\r\n}\r\n\r\n#strategy-board .square:not(.occupied)::after {\r\n  content: '~~';\r\n  color: var(--color-player-alpha);\r\n  font-family: var(--sec-ff);\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 25%;\r\n  left: -25%;\r\n  position: absolute;\r\n}\r\n\r\n#strategy-board[data-activeAxis=x] .square:not(.occupied)::after {\r\n  animation: x-axis 700ms infinite steps(3);\r\n}\r\n\r\n@keyframes x-axis {\r\n  from { transform: translateX(0%); }\r\n  to { transform: translateX(100%); }\r\n}\r\n\r\n#strategy-board[data-activeAxis=y] .square:not(.occupied)::after {\r\n  animation: y-axis 600ms infinite steps(3);\r\n}\r\n\r\n@keyframes y-axis {\r\n  from { transform: rotateZ(90deg) translateX(0%); }\r\n  to { transform: rotateZ(90deg) translateX(100%); }\r\n}\r\n\r\n.occupied {\r\n  background-color: blue;\r\n}\r\n\r\n.close,\r\n.miss {\r\n  background-color: lightskyblue;\r\n}\r\n\r\n.sunk,\r\n.hit {\r\n  background-color: red;\r\n}\r\n\r\n.explosion {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 50px;\r\n  z-index: 1;\r\n}\r\n\r\n.gameboard-name {\r\n  align-self: flex-start;\r\n  font-size: var(--fs-300);\r\n}\r\n\r\n.gameboard-display {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.dashed-border {\r\n  stroke-width: 10;\r\n  stroke-dasharray: 250 250;\r\n  stroke-dashoffset: 130;\r\n}\r\n\r\n.wrapper--player-board .dashed-border {\r\n  stroke: var(--color-player);\r\n}\r\n\r\n.wrapper--cpu-board .dashed-border {\r\n  stroke: var(--color-cpu);\r\n}\r\n\r\n.gameboard-display__radar-signal {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform-origin: 0 0;\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    var(--color-player) 0%,\r\n    transparent 50%\r\n  );\r\n  animation: sweep 5s infinite linear;\r\n}\r\n\r\n@keyframes sweep {\r\n  to { transform: rotateZ(360deg); }\r\n}\r\n\r\n#player-board .ship__icon,\r\n#cpu-board .ship__icon {\r\n  position: absolute;\r\n}\r\n\r\n.cpu-board .ship__icon {\r\n  visibility: hidden;\r\n}\r\n\r\n.cpu-board .ship__icon.sunken {\r\n  visibility: visible;\r\n}\r\n\r\n.ship__icon {\r\n  height: 50px;\r\n  background-color: var(--color-player);\r\n  transform-origin: 25px 25px;\r\n}\r\n\r\n.ship__icon#carrier {\r\n  width: 250px;\r\n}\r\n\r\n.ship__icon#battleship {\r\n  width: 200px;\r\n}\r\n\r\n.ship__icon#cruiser {\r\n  width: 150px;\r\n}\r\n\r\n.ship__icon#submarine {\r\n  width: 150px;\r\n}\r\n\r\n.ship__icon#destroyer {\r\n  width: 100px;\r\n}\r\n\r\n.gameboard-display {\r\n  min-width: 500px;\r\n  min-height: 500px;\r\n  background-color: var(--color-900);\r\n}\r\n\r\n.gameboard-display > * {\r\n  position: absolute;\r\n}\r\n\r\n/* DRAG AND DROP ***********/\r\n\r\n.dragging {\r\n  opacity: 1;\r\n  cursor: grabbing;\r\n}\r\n\r\n.ship__drag--clone {\r\n  position: absolute;\r\n  left: -100%;\r\n}\r\n\r\n.rotated {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.dragover--allowed-placement {\r\n  background-color: #4CAF50;\r\n}\r\n\r\n.dragover--not-allowed-placement {\r\n  background-color: red;\r\n}\r\n\r\n/* HEADER ***********/\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  width: 100%;\r\n  padding: 1rem;\r\n}\r\n\r\n.header__title {\r\n  font-size: var(--fs-500);\r\n}\r\n\r\n.header__options {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.header__button {\r\n  border-style: none;\r\n  background: transparent;\r\n}\r\n\r\n.header__icon {\r\n  height: 1.8rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/battle.css":
/*!************************!*\
  !*** ./src/battle.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./battle.css */ \"./node_modules/css-loader/dist/cjs.js!./src/battle.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_battle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://24-battleship/./src/battle.css?");

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

eval("module.exports = __webpack_require__.p + \"images/noronha.982de8033d0b047d9f76.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/noronha.jpg?");

/***/ }),

/***/ "./src/assets/characters/olafsson.jpg":
/*!********************************************!*\
  !*** ./src/assets/characters/olafsson.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/olafsson.6e7ad77fe11ba6d9f0bf.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/olafsson.jpg?");

/***/ }),

/***/ "./src/assets/characters/rackham.jpg":
/*!*******************************************!*\
  !*** ./src/assets/characters/rackham.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/rackham.2e35d8ebd7928ff0aa53.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/rackham.jpg?");

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

eval("module.exports = __webpack_require__.p + \"images/yamato.02bb21162b3fd092ae6a.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/yamato.jpg?");

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

/***/ "./src/assets/ships/battleship.svg":
/*!*****************************************!*\
  !*** ./src/assets/ships/battleship.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/battleship.6f5a865b999164ace612.svg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/battleship.svg?");

/***/ }),

/***/ "./src/assets/ships/carrier.svg":
/*!**************************************!*\
  !*** ./src/assets/ships/carrier.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/carrier.77e17779bb21cdbab918.svg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/carrier.svg?");

/***/ }),

/***/ "./src/assets/ships/cruiser.svg":
/*!**************************************!*\
  !*** ./src/assets/ships/cruiser.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cruiser.4bc2823e20ba025cd703.svg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/cruiser.svg?");

/***/ }),

/***/ "./src/assets/ships/destroyer.svg":
/*!****************************************!*\
  !*** ./src/assets/ships/destroyer.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/destroyer.299f236d4d034ce74976.svg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/destroyer.svg?");

/***/ }),

/***/ "./src/assets/ships/submarine.svg":
/*!****************************************!*\
  !*** ./src/assets/ships/submarine.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/submarine.4fde021b54b8bc4b7325.svg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/ships/submarine.svg?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar DOM = /*#__PURE__*/function () {\n  function DOM() {\n    _classCallCheck(this, DOM);\n  }\n  _createClass(DOM, null, [{\n    key: \"getPlayerBoard\",\n    value: function getPlayerBoard() {\n      return DOM.loadedPlayerBoard;\n    }\n  }, {\n    key: \"getCpuBoard\",\n    value: function getCpuBoard() {\n      return DOM.loadedCpuBoard;\n    }\n  }, {\n    key: \"loadBoard\",\n    value: function loadBoard(player) {\n      var boardContainer = document.createElement('div');\n      var numberOfRows = player.gameboard.maxRow + 1;\n      var numberOfCols = player.gameboard.maxCol + 1;\n      for (var i = 0; i < numberOfRows; i++) {\n        var boardRow = document.createElement('div');\n        boardRow.className = 'row';\n        boardContainer.appendChild(boardRow);\n        for (var j = 0; j < numberOfCols; j++) {\n          var boardCol = document.createElement('div');\n          boardCol.className = 'col square';\n          boardRow.appendChild(boardCol);\n        }\n      }\n      boardContainer.className = \"board \".concat(player.type, \"-board\");\n      if (player.type === 'human') DOM.loadedPlayerBoard = boardContainer;\n      if (player.type === 'cpu') DOM.loadedCpuBoard = boardContainer;\n    }\n  }, {\n    key: \"gridFromHtmlSquares\",\n    value: function gridFromHtmlSquares(squares) {\n      var rows = Array.from(squares);\n      var grid = [];\n      rows.forEach(function (row) {\n        return grid.push(Array.from(row.children));\n      });\n      return grid;\n    }\n  }, {\n    key: \"updateBoard\",\n    value: function updateBoard(player) {\n      var gameboard = document.querySelector(\".\".concat(player.type, \"-board\"));\n      var grid = DOM.gridFromHtmlSquares(gameboard.children);\n      player.gameboard.squares.forEach(function (square) {\n        var row = square.coords[0];\n        var col = square.coords[1];\n        var classListValue = \"col square \".concat(square.className);\n        if (square.className === 'occupied' && player.type === 'cpu') {\n          return;\n        } else {\n          grid[row][col].classList = classListValue;\n        }\n      });\n    }\n  }, {\n    key: \"showSunkenShips\",\n    value: function showSunkenShips(player) {\n      var cpuBoard = document.querySelector('#cpu-board');\n      var shipIcons = cpuBoard.querySelectorAll('.ship__icon');\n      var cpuShips = player.gameboard.ships;\n      var _loop = function _loop() {\n        var ship = _Object$values[_i];\n        if (ship.isSunk()) {\n          var sunkShipIcon = Array.from(shipIcons).find(function (element) {\n            return element.id === ship.name;\n          });\n          sunkShipIcon.classList.add('sunken');\n        }\n      };\n      for (var _i = 0, _Object$values = Object.values(cpuShips); _i < _Object$values.length; _i++) {\n        _loop();\n      }\n    }\n  }]);\n  return DOM;\n}();\n_defineProperty(DOM, \"loadedPlayerBoard\", null);\n_defineProperty(DOM, \"loadedCpuBoard\", null);\n\n\n//# sourceURL=webpack://24-battleship/./src/DOM.js?");

/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Animation)\n/* harmony export */ });\n/* harmony import */ var _assets_explosions_square_explosion1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/explosions/square_explosion1.png */ \"./src/assets/explosions/square_explosion1.png\");\n/* harmony import */ var _assets_explosions_square_explosion2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/explosions/square_explosion2.png */ \"./src/assets/explosions/square_explosion2.png\");\n/* harmony import */ var _assets_explosions_square_explosion3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/explosions/square_explosion3.png */ \"./src/assets/explosions/square_explosion3.png\");\n/* harmony import */ var _assets_explosions_square_explosion4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/explosions/square_explosion4.png */ \"./src/assets/explosions/square_explosion4.png\");\n/* harmony import */ var _assets_explosions_square_explosion5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/explosions/square_explosion5.png */ \"./src/assets/explosions/square_explosion5.png\");\n/* harmony import */ var _assets_explosions_square_explosion6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/explosions/square_explosion6.png */ \"./src/assets/explosions/square_explosion6.png\");\n/* harmony import */ var _assets_explosions_square_explosion7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/explosions/square_explosion7.png */ \"./src/assets/explosions/square_explosion7.png\");\n/* harmony import */ var _assets_explosions_square_explosion8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/explosions/square_explosion8.png */ \"./src/assets/explosions/square_explosion8.png\");\n/* harmony import */ var _assets_explosions_square_explosion9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/explosions/square_explosion9.png */ \"./src/assets/explosions/square_explosion9.png\");\n/* harmony import */ var _assets_explosions_square_explosion10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/explosions/square_explosion10.png */ \"./src/assets/explosions/square_explosion10.png\");\n/* harmony import */ var _assets_explosions_square_explosion11_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/explosions/square_explosion11.png */ \"./src/assets/explosions/square_explosion11.png\");\n/* harmony import */ var _assets_explosions_square_explosion12_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/explosions/square_explosion12.png */ \"./src/assets/explosions/square_explosion12.png\");\n/* harmony import */ var _assets_explosions_square_explosion13_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/explosions/square_explosion13.png */ \"./src/assets/explosions/square_explosion13.png\");\n/* harmony import */ var _assets_explosions_square_explosion14_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/explosions/square_explosion14.png */ \"./src/assets/explosions/square_explosion14.png\");\n/* harmony import */ var _assets_explosions_square_explosion15_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/explosions/square_explosion15.png */ \"./src/assets/explosions/square_explosion15.png\");\n/* harmony import */ var _assets_explosions_square_explosion16_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/explosions/square_explosion16.png */ \"./src/assets/explosions/square_explosion16.png\");\n/* harmony import */ var _assets_explosions_splash1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/explosions/splash1.png */ \"./src/assets/explosions/splash1.png\");\n/* harmony import */ var _assets_explosions_splash2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/explosions/splash2.png */ \"./src/assets/explosions/splash2.png\");\n/* harmony import */ var _assets_explosions_splash3_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/explosions/splash3.png */ \"./src/assets/explosions/splash3.png\");\n/* harmony import */ var _assets_explosions_splash4_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/explosions/splash4.png */ \"./src/assets/explosions/splash4.png\");\n/* harmony import */ var _assets_explosions_splash5_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/explosions/splash5.png */ \"./src/assets/explosions/splash5.png\");\n/* harmony import */ var _assets_explosions_splash6_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/explosions/splash6.png */ \"./src/assets/explosions/splash6.png\");\n/* harmony import */ var _assets_explosions_splash7_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/explosions/splash7.png */ \"./src/assets/explosions/splash7.png\");\n/* harmony import */ var _assets_explosions_splash8_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/explosions/splash8.png */ \"./src/assets/explosions/splash8.png\");\n/* harmony import */ var _assets_explosions_splash9_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/explosions/splash9.png */ \"./src/assets/explosions/splash9.png\");\n/* harmony import */ var _assets_explosions_splash10_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/explosions/splash10.png */ \"./src/assets/explosions/splash10.png\");\n/* harmony import */ var _assets_explosions_splash11_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/explosions/splash11.png */ \"./src/assets/explosions/splash11.png\");\n/* harmony import */ var _assets_explosions_splash12_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/explosions/splash12.png */ \"./src/assets/explosions/splash12.png\");\n/* harmony import */ var _assets_explosions_splash13_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/explosions/splash13.png */ \"./src/assets/explosions/splash13.png\");\n/* harmony import */ var _assets_explosions_splash14_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/explosions/splash14.png */ \"./src/assets/explosions/splash14.png\");\n/* harmony import */ var _assets_explosions_splash15_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/explosions/splash15.png */ \"./src/assets/explosions/splash15.png\");\n/* harmony import */ var _assets_explosions_splash16_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./assets/explosions/splash16.png */ \"./src/assets/explosions/splash16.png\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Animation = /*#__PURE__*/function () {\n  function Animation() {\n    _classCallCheck(this, Animation);\n  }\n  _createClass(Animation, null, [{\n    key: \"displayQuote\",\n    value: function displayQuote(html, quote) {\n      var _this = this;\n      if (this.timer) {\n        clearTimeout(this.timer);\n      }\n      html.textContent = '';\n      var i = 0;\n      var displayNextChar = function displayNextChar() {\n        if (i < quote.length) {\n          html.textContent += quote[i];\n          i++;\n          _this.timer = setTimeout(displayNextChar, 15);\n        }\n      };\n      displayNextChar();\n    }\n  }, {\n    key: \"displayReaction\",\n    value: function displayReaction(quote, photo) {\n      var wrapper = document.querySelector('#reaction-wrapper');\n      var characterPhoto = document.querySelector('#character-photo');\n      var characterQuotes = document.querySelector('#character-quotes');\n      characterPhoto.src = photo;\n      wrapper.classList.add('entra');\n      characterPhoto.classList.add('entra');\n      Animation.displayQuote(characterQuotes, quote);\n      setTimeout(function () {\n        wrapper.classList.remove('entra');\n        characterPhoto.classList.remove('entra');\n      }, 3000);\n    }\n  }, {\n    key: \"displayExplosion\",\n    value: function displayExplosion(square) {\n      var explosion = document.createElement('img');\n      explosion.classList = 'explosion';\n      square.appendChild(explosion);\n      var _loop = function _loop(i) {\n        setTimeout(function () {\n          explosion.src = \"\".concat(Animation.explosion[i]);\n        }, 50 * i);\n      };\n      for (var i = 0; i < Animation.explosion.length; i++) {\n        _loop(i);\n      }\n      setTimeout(function () {\n        square.removeChild(explosion);\n      }, 50 * Animation.explosion.length);\n    }\n  }, {\n    key: \"displaySplash\",\n    value: function displaySplash(square) {\n      var explosion = document.createElement('img');\n      explosion.classList = 'explosion';\n      square.appendChild(explosion);\n      var _loop2 = function _loop2(i) {\n        setTimeout(function () {\n          explosion.src = \"\".concat(Animation.splash[i]);\n        }, 50 * i);\n      };\n      for (var i = 0; i < Animation.splash.length; i++) {\n        _loop2(i);\n      }\n      setTimeout(function () {\n        square.removeChild(explosion);\n      }, 50 * Animation.splash.length);\n    }\n  }]);\n  return Animation;\n}();\n_defineProperty(Animation, \"explosion\", [_assets_explosions_square_explosion1_png__WEBPACK_IMPORTED_MODULE_0__, _assets_explosions_square_explosion2_png__WEBPACK_IMPORTED_MODULE_1__, _assets_explosions_square_explosion3_png__WEBPACK_IMPORTED_MODULE_2__, _assets_explosions_square_explosion4_png__WEBPACK_IMPORTED_MODULE_3__, _assets_explosions_square_explosion5_png__WEBPACK_IMPORTED_MODULE_4__, _assets_explosions_square_explosion6_png__WEBPACK_IMPORTED_MODULE_5__, _assets_explosions_square_explosion7_png__WEBPACK_IMPORTED_MODULE_6__, _assets_explosions_square_explosion8_png__WEBPACK_IMPORTED_MODULE_7__, _assets_explosions_square_explosion9_png__WEBPACK_IMPORTED_MODULE_8__, _assets_explosions_square_explosion10_png__WEBPACK_IMPORTED_MODULE_9__, _assets_explosions_square_explosion11_png__WEBPACK_IMPORTED_MODULE_10__, _assets_explosions_square_explosion12_png__WEBPACK_IMPORTED_MODULE_11__, _assets_explosions_square_explosion13_png__WEBPACK_IMPORTED_MODULE_12__, _assets_explosions_square_explosion14_png__WEBPACK_IMPORTED_MODULE_13__, _assets_explosions_square_explosion15_png__WEBPACK_IMPORTED_MODULE_14__, _assets_explosions_square_explosion16_png__WEBPACK_IMPORTED_MODULE_15__]);\n_defineProperty(Animation, \"splash\", [_assets_explosions_splash1_png__WEBPACK_IMPORTED_MODULE_16__, _assets_explosions_splash2_png__WEBPACK_IMPORTED_MODULE_17__, _assets_explosions_splash3_png__WEBPACK_IMPORTED_MODULE_18__, _assets_explosions_splash4_png__WEBPACK_IMPORTED_MODULE_19__, _assets_explosions_splash5_png__WEBPACK_IMPORTED_MODULE_20__, _assets_explosions_splash6_png__WEBPACK_IMPORTED_MODULE_21__, _assets_explosions_splash7_png__WEBPACK_IMPORTED_MODULE_22__, _assets_explosions_splash8_png__WEBPACK_IMPORTED_MODULE_23__, _assets_explosions_splash9_png__WEBPACK_IMPORTED_MODULE_24__, _assets_explosions_splash10_png__WEBPACK_IMPORTED_MODULE_25__, _assets_explosions_splash11_png__WEBPACK_IMPORTED_MODULE_26__, _assets_explosions_splash12_png__WEBPACK_IMPORTED_MODULE_27__, _assets_explosions_splash13_png__WEBPACK_IMPORTED_MODULE_28__, _assets_explosions_splash14_png__WEBPACK_IMPORTED_MODULE_29__, _assets_explosions_splash15_png__WEBPACK_IMPORTED_MODULE_30__, _assets_explosions_splash16_png__WEBPACK_IMPORTED_MODULE_31__]);\n\n\n//# sourceURL=webpack://24-battleship/./src/animations.js?");

/***/ }),

/***/ "./src/battle.js":
/*!***********************!*\
  !*** ./src/battle.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Battle)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _battle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battle.css */ \"./src/battle.css\");\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/* harmony import */ var _gameControl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameControl.js */ \"./src/gameControl.js\");\n/* harmony import */ var _characters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters.js */ \"./src/characters.js\");\n/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result.js */ \"./src/result.js\");\n/* harmony import */ var _quotes_battle_quotes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes/battle-quotes.js */ \"./src/quotes/battle-quotes.js\");\n/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations.js */ \"./src/animations.js\");\nvar _Battle;\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\n\n\n\nvar Battle = /*#__PURE__*/function () {\n  function Battle() {\n    _classCallCheck(this, Battle);\n  }\n  _createClass(Battle, null, [{\n    key: \"retrievePlayerShipsPositions\",\n    value: function retrievePlayerShipsPositions() {\n      var playerBackendBoard = _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[0].gameboard;\n      var playerFrontendBoard = _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getPlayerBoard();\n      for (var _i = 0, _Object$values = Object.values(playerBackendBoard.ships); _i < _Object$values.length; _i++) {\n        var ship = _Object$values[_i];\n        var row = parseInt(sessionStorage.getItem(ship.name + '-row'));\n        var col = parseInt(sessionStorage.getItem(ship.name + '-col'));\n        var axis = sessionStorage.getItem(ship.name + '-axis');\n        playerBackendBoard.placeShip(row, col, axis, ship);\n        Battle.renderShipIcons(playerFrontendBoard, row, col, axis, ship);\n      }\n      Battle.playerBoard.appendChild(playerFrontendBoard);\n      _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateBoard(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[0]);\n    }\n  }, {\n    key: \"setCpuShipsPositions\",\n    value: function setCpuShipsPositions() {\n      var cpuBackendBoard = _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1].gameboard;\n      var cpuFrontendBoard = _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCpuBoard();\n      cpuBackendBoard.setFormationRandomly();\n      for (var _i2 = 0, _Object$values2 = Object.values(cpuBackendBoard.ships); _i2 < _Object$values2.length; _i2++) {\n        var ship = _Object$values2[_i2];\n        var row = ship.coords[0];\n        var col = ship.coords[1];\n        var axis = ship.coords[2];\n        Battle.renderShipIcons(cpuFrontendBoard, row, col, axis, ship);\n      }\n      Battle.cpuBoard.appendChild(cpuFrontendBoard);\n      document.querySelectorAll('.cpu-board .square').forEach(function (square) {\n        square.addEventListener('click', Battle.handleClick);\n      });\n      _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateBoard(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1]);\n    }\n  }, {\n    key: \"renderShipIcons\",\n    value: function renderShipIcons(board, row, col, axis, ship) {\n      var grid = Battle.gridFromHtmlSquares([board]);\n      var shipIcon = document.createElement('div');\n      shipIcon.classList = 'ship__icon';\n      shipIcon.id = ship.name;\n      shipIcon.style.mask = \"url(\".concat(ship.src, \") no-repeat center\");\n      if (axis === 'col') shipIcon.classList.add('rotated');\n      grid[row][col].htmlElement.appendChild(shipIcon);\n    }\n  }, {\n    key: \"playerPlays\",\n    value: function playerPlays(row, col, e) {\n      if (_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gameOver()) {\n        Battle.handleGameOver(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1]);\n        return;\n      }\n      if (_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].turn === 0) {\n        var attack = _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[0].attack(row, col, _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1]);\n        var attackedSquare = Battle.querySquareByCoords(Battle.cpuBoard, attack.coords);\n        _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showSunkenShips(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1]);\n        _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateBoard(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[0]);\n        _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateBoard(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1]);\n        Battle.callAnimation(attack.className, attackedSquare);\n        _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nextPlayer();\n        Battle.botPlays();\n        e.target.removeEventListener('click', Battle.handleClick);\n        setTimeout(function () {\n          Battle.updateBattleQuote(attack, _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[0], _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1]);\n        }, 300);\n      }\n    }\n  }, {\n    key: \"botPlays\",\n    value: function botPlays() {\n      if (_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].gameOver()) {\n        Battle.handleGameOver(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[0]);\n        return;\n      }\n      if (_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].turn === 1) {\n        setTimeout(function () {\n          var attack = _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1].attack(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[0]);\n          var attackedSquare = Battle.querySquareByCoords(Battle.playerBoard, attack.coords);\n          Battle.radarLockWarning(attack.className);\n          setTimeout(function () {\n            Battle.radarLockFoes.forEach(function (foe) {\n              return foe.classList.remove('lightUp');\n            });\n            Battle.countermeasureIndicator.classList.remove('lightUp');\n            _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateBoard(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[0]);\n            _DOM_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateBoard(_gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1]);\n            Battle.callAnimation(attack.className, attackedSquare);\n            _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nextPlayer();\n            setTimeout(function () {\n              Battle.updateBattleQuote(attack, _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[1], _gameControl_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].players[0]);\n            }, 300);\n          }, 3500);\n        }, 400);\n      }\n    }\n  }, {\n    key: \"callAnimation\",\n    value: function callAnimation(attack, attackedSquare) {\n      if (attack === 'miss' || attack === 'close') {\n        _animations_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].displaySplash(attackedSquare);\n      } else {\n        _animations_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].displayExplosion(attackedSquare);\n      }\n    }\n  }, {\n    key: \"querySquareByCoords\",\n    value: function querySquareByCoords(board, coords) {\n      var grid = Battle.gridFromHtmlSquares([board]);\n      var row = coords[0];\n      var col = coords[1];\n      return grid[0][row].htmlElement.children[col];\n    }\n  }, {\n    key: \"radarLockWarning\",\n    value: function radarLockWarning(attack) {\n      var randomFoe = Math.floor(Math.random() * Battle.radarLockFoes.length);\n      if (attack === 'hit') {\n        Battle.radarLockFoes[randomFoe].classList.add('lightUp');\n        Battle.launchCountermeasures();\n      }\n      if (attack === 'close') {\n        var warning = Math.random() < 0.5 ? true : false;\n        if (warning) {\n          Battle.radarLockFoes[randomFoe].classList.add('lightUp');\n          Battle.launchCountermeasures();\n        }\n      }\n    }\n  }, {\n    key: \"launchCountermeasures\",\n    value: function launchCountermeasures() {\n      setTimeout(function () {\n        Battle.countermeasureIndicator.classList.add('lightUp');\n      }, 300);\n    }\n  }, {\n    key: \"gridFromHtmlSquares\",\n    value: function gridFromHtmlSquares(squares) {\n      var matrix = Array.from(squares).map(function (row) {\n        return Array.from(row.children);\n      }).flat();\n      var grid = [];\n      for (var i = 0; i < matrix.length; i++) {\n        var row = Array.from(matrix[i].children);\n        grid.push([]);\n        for (var j = 0; j < row.length; j++) {\n          grid[i].push({\n            coords: [i, j],\n            htmlElement: row[j]\n          });\n        }\n      }\n      return grid;\n    }\n  }, {\n    key: \"handleGameOver\",\n    value: function handleGameOver(winner) {\n      _result_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].init(winner);\n      Battle.cpuBoard.querySelectorAll('.square').forEach(function (square) {\n        square.removeEventListener('click', Battle.handleClick);\n      });\n    }\n  }, {\n    key: \"updateBattleQuote\",\n    value: function updateBattleQuote(attack, attacker, defender) {\n      var quote;\n      var result = attack.className;\n      var ship = attack.content !== 'water' ? attack.content.name : null;\n      if (Math.random() < 0.5 && result !== 'sunk') return;\n      var sayer = Math.random() < 0.5 ? 'attacker' : 'defender';\n      if (sayer === 'attacker') {\n        switch (result) {\n          case 'miss':\n          case 'close':\n            quote = _quotes_battle_quotes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getOurMissQuote(attacker[\"char\"].name, ship, defender[\"char\"].name);\n            break;\n          case 'hit':\n            quote = _quotes_battle_quotes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getOurHitQuote(attacker[\"char\"].name, ship, defender[\"char\"].name);\n            break;\n          case 'sunk':\n            quote = _quotes_battle_quotes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getOurSinkQuote(attacker[\"char\"].name, ship, defender[\"char\"].name);\n            break;\n        }\n        _animations_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].displayReaction(quote, attacker[\"char\"].src);\n      }\n      if (sayer === 'defender') {\n        switch (result) {\n          case 'miss':\n          case 'close':\n            quote = _quotes_battle_quotes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTheirMissQuote(defender[\"char\"].name, ship, attacker[\"char\"].name);\n            break;\n          case 'hit':\n            quote = _quotes_battle_quotes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTheirHitQuote(defender[\"char\"].name, ship, attacker[\"char\"].name);\n            break;\n          case 'sunk':\n            quote = _quotes_battle_quotes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTheirSinkQuote(defender[\"char\"].name, ship, attacker[\"char\"].name);\n            break;\n        }\n        _animations_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].displayReaction(quote, defender[\"char\"].src);\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      Battle.retrievePlayerShipsPositions();\n      Battle.setCpuShipsPositions();\n      Battle.root.style.setProperty('--color-player', _characters_js__WEBPACK_IMPORTED_MODULE_4__.charObjects[sessionStorage.getItem('player-char')].color);\n      Battle.root.style.setProperty('--color-player-alpha', _characters_js__WEBPACK_IMPORTED_MODULE_4__.charObjects[sessionStorage.getItem('player-char')].colorAlpha);\n      Battle.root.style.setProperty('--color-cpu', _characters_js__WEBPACK_IMPORTED_MODULE_4__.charObjects[sessionStorage.getItem('cpu-char')].color);\n    }\n  }]);\n  return Battle;\n}();\n_Battle = Battle;\n_defineProperty(Battle, \"root\", document.querySelector(':root'));\n_defineProperty(Battle, \"playerBoard\", document.querySelector('#player-board'));\n_defineProperty(Battle, \"cpuBoard\", document.querySelector('#cpu-board'));\n_defineProperty(Battle, \"radarLockFoes\", document.querySelectorAll('.radar-lock-foe > path'));\n_defineProperty(Battle, \"countermeasureIndicator\", document.querySelector('#countermeasure'));\n_defineProperty(Battle, \"handleClick\", function (e) {\n  var col = Array.from(e.target.parentNode.children).indexOf(e.target);\n  var row = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);\n  _Battle.playerPlays(row, col, e);\n});\n\nBattle.init();\n\n//# sourceURL=webpack://24-battleship/./src/battle.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   charObjects: () => (/* binding */ charObjects)\n/* harmony export */ });\n/* harmony import */ var _assets_characters_nimitz_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/characters/nimitz.jpg */ \"./src/assets/characters/nimitz.jpg\");\n/* harmony import */ var _assets_characters_yamato_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/characters/yamato.jpg */ \"./src/assets/characters/yamato.jpg\");\n/* harmony import */ var _assets_characters_olafsson_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/characters/olafsson.jpg */ \"./src/assets/characters/olafsson.jpg\");\n/* harmony import */ var _assets_characters_violeta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/characters/violeta.jpg */ \"./src/assets/characters/violeta.jpg\");\n/* harmony import */ var _assets_characters_rackham_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/characters/rackham.jpg */ \"./src/assets/characters/rackham.jpg\");\n/* harmony import */ var _assets_characters_noronha_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/characters/noronha.jpg */ \"./src/assets/characters/noronha.jpg\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar Char = /*#__PURE__*/_createClass(function Char(name, fullName, src, color, colorAlpha) {\n  _classCallCheck(this, Char);\n  this.name = name;\n  this.fullName = fullName;\n  this.src = src;\n  this.color = color;\n  this.colorAlpha = colorAlpha;\n});\nvar charObjects = {\n  nimitz: new Char('nimitz', 'Douglas Nimitz', _assets_characters_nimitz_jpg__WEBPACK_IMPORTED_MODULE_0__, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),\n  yamato: new Char('yamato', 'Satoru Yamato', _assets_characters_yamato_jpg__WEBPACK_IMPORTED_MODULE_1__, 'rgb(58, 113, 203)', 'rgba(58, 113, 203, 0.5)'),\n  olafsson: new Char('olafsson', 'Leif Oláfsson', _assets_characters_olafsson_jpg__WEBPACK_IMPORTED_MODULE_2__, 'rgb(143, 202, 94)', 'rgba(143, 202, 94, 0.5)'),\n  violeta: new Char('violeta', 'Violeta Pavlichenko', _assets_characters_violeta_jpg__WEBPACK_IMPORTED_MODULE_3__, 'rgb(244, 195, 67)', 'rgba(244, 195, 67, 0.5)'),\n  rackham: new Char('rackham', 'Jack Rackham', _assets_characters_rackham_jpg__WEBPACK_IMPORTED_MODULE_4__, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),\n  noronha: new Char('noronha', 'Alberto Noronha', _assets_characters_noronha_jpg__WEBPACK_IMPORTED_MODULE_5__, 'rgb(143, 202, 94)', 'rgba(143, 202, 94, 0.5)')\n};\n\n//# sourceURL=webpack://24-battleship/./src/characters.js?");

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

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar Player = /*#__PURE__*/function () {\n  function Player(name, _char) {\n    _classCallCheck(this, Player);\n    this.name = name;\n    this[\"char\"] = _char;\n    this.type = 'human';\n    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](10, 10, new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n  }\n  _createClass(Player, [{\n    key: \"attack\",\n    value: function attack(row, col, enemy) {\n      if (this.isSquareAvailable(row, col, enemy)) {\n        return enemy.gameboard.receiveAttack(row, col);\n      }\n    }\n  }, {\n    key: \"isSquareAvailable\",\n    value: function isSquareAvailable(row, col, enemy) {\n      var isAlreadyAttacked = enemy.gameboard.squares.find(function (square) {\n        return JSON.stringify(square.coords) === JSON.stringify([row, col]) && square.attacked === true;\n      });\n      if (isAlreadyAttacked) {\n        return false;\n      } else {\n        return true;\n      }\n    }\n  }]);\n  return Player;\n}();\n\n\n//# sourceURL=webpack://24-battleship/./src/player.js?");

/***/ }),

/***/ "./src/quotes/battle-quotes.js":
/*!*************************************!*\
  !*** ./src/quotes/battle-quotes.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BattleQuotes)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar BattleQuotes = /*#__PURE__*/function () {\n  function BattleQuotes() {\n    _classCallCheck(this, BattleQuotes);\n  }\n  _createClass(BattleQuotes, null, [{\n    key: \"randomQuote\",\n    value: function randomQuote(lineArray, ship, enemy) {\n      return lineArray[Math.floor(Math.random() * lineArray.length)].replace('#SHIP', ship).replace('#ENEMY', enemy);\n    }\n  }, {\n    key: \"getOurMissQuote\",\n    value: function getOurMissQuote(_char, ship, enemy) {\n      var lineArray = BattleQuotes.ourMiss[_char];\n      return BattleQuotes.randomQuote(lineArray, ship, enemy);\n    }\n  }, {\n    key: \"getOurHitQuote\",\n    value: function getOurHitQuote(_char2, ship, enemy) {\n      var lineArray = BattleQuotes.ourHit[_char2];\n      return BattleQuotes.randomQuote(lineArray, ship, enemy);\n    }\n  }, {\n    key: \"getOurSinkQuote\",\n    value: function getOurSinkQuote(_char3, ship, enemy) {\n      var lineArray = BattleQuotes.ourSink[_char3];\n      return BattleQuotes.randomQuote(lineArray, ship, enemy);\n    }\n  }, {\n    key: \"getTheirMissQuote\",\n    value: function getTheirMissQuote(_char4, ship, enemy) {\n      var lineArray = BattleQuotes.theirMiss[_char4];\n      return BattleQuotes.randomQuote(lineArray, ship, enemy);\n    }\n  }, {\n    key: \"getTheirHitQuote\",\n    value: function getTheirHitQuote(_char5, ship, enemy) {\n      var lineArray = BattleQuotes.theirHit[_char5];\n      return BattleQuotes.randomQuote(lineArray, ship, enemy);\n    }\n  }, {\n    key: \"getTheirSinkQuote\",\n    value: function getTheirSinkQuote(_char6, ship, enemy) {\n      var lineArray = BattleQuotes.theirSink[_char6];\n      return BattleQuotes.randomQuote(lineArray, ship, enemy);\n    }\n  }]);\n  return BattleQuotes;\n}();\n_defineProperty(BattleQuotes, \"ourMiss\", {\n  yamato: [\"Falhamos em nossos cálculos. Recalculem, imediatamente!\", \"Você não pode se esconder para sempre, #ENEMY.\", \"A paciência é uma virtude inestimável.\"],\n  olafsson: [\"Não ouvi nenhuma explosão...\", \"Não adianta fugir, #ENEMY.\", \"Estamos indo atrás de vocês!\" // \"We're coming for you!\",\n  ],\n  violeta: [\"Sem sorte desta vez. Recalibrando a mira.\", \"Como podem ter escapado?\", \"Não estamos fazendo muito progresso por aqui.\"],\n  rackham: [\"Isso foi só um tiro de advertência.\", \"Deve ter sido o vento...\", \"Não se esconda, #ENEMY!\"],\n  nimitz: [\"Os dados do radar não captaram nada desta vez.\", \"Nossa mira precisa de alguns ajustes.\", \"Nenhum retorno...\"],\n  noronha: [\"O alvo permanece acima da linha do horizonte.\", \"Nada...\", \"Não estamos conseguindo localizar o inimigo, precisamos de um novo plano de ataque.\"]\n});\n_defineProperty(BattleQuotes, \"ourHit\", {\n  yamato: [\"Direto no alvo! Fiquem atentos a um possível contra-ataque!\", \"Navio inimigo na mira. Jamais duvide de nossa capacidade, #ENEMY.\", \"Não os deixem escapar!\"],\n  olafsson: [\"#ENEMY, sua única saída é a rendição. Não daremos trégua!\", \"BOOM! Hahaha!\", \"Sinta a fúria de nossos canhões!\"],\n  violeta: [\"Navio inimigo atingido! Estamos no caminho certo.\", \"Isso! As forças de #ENEMY está procurando o que os atingiu até agora.\", \"Eles estão recuando!\"],\n  rackham: [\"Na mosca! Pensei que este fosse dar mais trabalho.\", \"Bom trabalho, rapazes. Hoje a cerveja será por minha conta!\", \"Haha! Nós governamos estes mares, #ENEMY!\"],\n  nimitz: [\"Alvo atingido! Excelente trabalho, artilharia!\", \"Acerto confirmado. Reportando posição do inimigo.\", \"Pegamos eles!\"],\n  noronha: [\"Eles estão nas cordas!\", \"Pegamos uma embarcação deles! Essa não vai muito longe.\", \"Não há como escapar, #ENEMY!\"]\n});\n_defineProperty(BattleQuotes, \"ourSink\", {\n  yamato: [\"#SHIP inimigo destruído!\",\n  // \"Enemy #SHIP destroyed!\",\n  \"Não tem como nos deter!\" // \"There's no stopping us!\",\n  ],\n  olafsson: [\"Lá vão eles para as profundezas!\",\n  // \"They're going down!\",\n  \"Que a alma dos que caíram em batalha descanse em paz.\"],\n  violeta: [\"A nossa chance é agora, vamos, vamos!\", \"Destruição do #SHIP inimigo confirmada!\"],\n  rackham: [\"Este é apenas o começo, #ENEMY!\", \"O #SHIP inimigo está flutuando igual a um tijolo!\"],\n  nimitz: [\"O naufrágio do #SHIP do inimigo foi um duro golpe em sua linha defensiva. Continuem avançando!\",\n  // \"The sinking of the enemy's #SHIP was I major blow in their defense line. Keep pushing!\"\n  \"Estamos ganhando espaço no campo do inimigo!\"],\n  noronha: [\"Afundamos o #SHIP deles, nossa vitória está cada vez mais próxima!\", \"Nós vamos até o fim!\"]\n});\n_defineProperty(BattleQuotes, \"theirMiss\", {\n  yamato: [\"Estamos ganhando tempo.\", \"Nossa linha de defesa é um escudo impenetrável!\", \"Mais um projétil inimigo que rasga os céus sem direção.\"],\n  olafsson: [\"Muito bom! Continuem desperdiçando munição.\", \"Hoje não!\", \"Eles atiram como cegos! Continuem desafiando-os!\"],\n  violeta: [\"Continuem nas sombras, o inimigo não consegue nos ver!\", \"Esta era a brecha que precisamos. Avançem com força total!\", \"Desista, #ENEMY!\"],\n  rackham: [\"Hahaha! Continue tentando, #ENEMY!\", \"Splash!\", \"Os peixes estão sofrendo nas mãos do inimigo.\"],\n  nimitz: [\"Nossas coordenadas ainda não foram rastreadas pelo inimigo. Mas mantenham os olhos abertos, isso pode mudar em breve.\", \"Nossas táticas estão confundindo-os. Bom trabalho!\", \"Um tiro no escuro. Enquanto as forças de #ENEMY continuarem assim, estaremos seguros.\"],\n  noronha: [\"Cuidado com os flancos!\", \"Eles nos perderam de vista.\", \"Evasiva bem-sucedida! Não baixem a guarda, eles voltarão!\"]\n});\n_defineProperty(BattleQuotes, \"theirHit\", {\n  yamato: [\"Código vermelho! Hora de contra-atacar com toda a nossa honra!\", \"Continuem lutando, homens, nossos navios aguentam muito mais que isso!\", \"Nosso casco sofreu danos! Reparem imediatamente!\"],\n  olafsson: [\"#ENEMY, prepare-se para testemunhar a fúria dos mares!\", \"A união é nossa armadura. Mantenham a posição, guerreiros!\", \"O céu escurece sobre nós. Mas os deuses estão conosco.\"],\n  violeta: [\"Acabamos de sofrer danos consideráveis em um de nossos navios. Preparar equipe de resgate!\", \"Vocês não estão sozinhos, marinheiros! Direcionando reforços agora!\", \"Esses danos não são nada para uma tripulação como a nossa! Continuem firmes!\"],\n  rackham: [\"Homem ao mar! Homem ao mar!\", \"Você nunca nos pegará vivos, #ENEMY!\", \"Manobra evasiva! Preparem-se para o próximo impacto!\"],\n  nimitz: [\"Atenção todas as unidades, estamos sob fogo inimigo. Solicitando apoio imediato!\", \"Fomos acoplados!\", \"Danos reportados no convés! Médicos, estejam prontos para tratar os feridos!\"],\n  noronha: [\"Estamos sofrendo grandes avarias em uma de nossas embarcações, precisamos de reforços!\", \"Aguentem firme, marinheiros, estamos deslocando reforços para a sua posição!\", \"Você cometeu um grande erro, #ENEMY.\"]\n});\n_defineProperty(BattleQuotes, \"theirSink\", {\n  yamato: [\"Ainda há esperanças!\", \"Um sacrifício doloroso, mas nossa determinação não se abala!\"],\n  olafsson: [\"Nunca nos curvaremos!\",\n  // \"We will never kneel!\",\n  \"Preparem-se para vingar nossos homens caídos!\"],\n  violeta: [\"Não! Não o nosso #SHIP!\", \"Somos mais fortes do que pensa, #ENEMY.\"],\n  rackham: [\"Se este é o nosso destino, cairemos de pé.\", \"Não se preocupem, marujos, o resgate chegará a tempo!\"],\n  nimitz: [\"Abandonar navio! Abandonar navio!\", \"O #SHIP está afundando, enviem a equipe de resgate!\"],\n  noronha: [\"Nosso povo não conhece a palavra desistência. Esta batalha será nossa!\", \"Não baixem a guarda, pessoal! Matenham a calma e sigam com o plano.\"]\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/quotes/battle-quotes.js?");

/***/ }),

/***/ "./src/result.js":
/*!***********************!*\
  !*** ./src/result.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Result)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Result = /*#__PURE__*/function () {\n  function Result() {\n    _classCallCheck(this, Result);\n  }\n  _createClass(Result, null, [{\n    key: \"displayResult\",\n    value: function displayResult(winner) {\n      if (winner.type === 'human') {\n        Result.wrapper.setAttribute('data-result', 'win');\n        Result.title.textContent = 'Congratulations!';\n        Result.character.src = winner[\"char\"].src;\n      } else {\n        Result.wrapper.setAttribute('data-result', 'lose');\n        Result.title.textContent = 'You have been defeated';\n      }\n    }\n  }, {\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      Result.seeBoards.addEventListener('click', function () {\n        Result.modal.close();\n        Result.modal.classList.remove('dialog--open');\n        Result.seeResult.classList.add('visible');\n      });\n      Result.playAgain.addEventListener('click', function () {\n        Result.modal.classList.remove('dialog--open');\n        window.location.href = 'index.html';\n      });\n      Result.seeResult.addEventListener('click', function () {\n        Result.modal.showModal();\n        Result.modal.classList.add('dialog--open');\n        Result.seeResult.classList.remove('visible');\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init(winner) {\n      Result.displayResult(winner);\n      Result.setEventListeners();\n      Result.modal.showModal();\n      Result.modal.classList.add('dialog--open');\n    }\n  }]);\n  return Result;\n}();\n_defineProperty(Result, \"modal\", document.querySelector('#result-modal'));\n_defineProperty(Result, \"wrapper\", document.querySelector('#result-wrapper'));\n_defineProperty(Result, \"title\", document.querySelector('#result-title'));\n_defineProperty(Result, \"character\", document.querySelector('#result-character'));\n_defineProperty(Result, \"quote\", document.querySelector('#result-quote'));\n_defineProperty(Result, \"seeBoards\", document.querySelector('#see-boards'));\n_defineProperty(Result, \"playAgain\", document.querySelector('#play-again'));\n_defineProperty(Result, \"seeResult\", document.querySelector('#see-result'));\n\nsetTimeout(function () {\n  Result.init({\n    type: 'human',\n    \"char\": {\n      src: ''\n    }\n  });\n}, 500);\n\n//# sourceURL=webpack://24-battleship/./src/result.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ standardSet)\n/* harmony export */ });\n/* harmony import */ var _assets_ships_battleship_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/ships/battleship.svg */ \"./src/assets/ships/battleship.svg\");\n/* harmony import */ var _assets_ships_carrier_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ships/carrier.svg */ \"./src/assets/ships/carrier.svg\");\n/* harmony import */ var _assets_ships_cruiser_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ships/cruiser.svg */ \"./src/assets/ships/cruiser.svg\");\n/* harmony import */ var _assets_ships_destroyer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/ships/destroyer.svg */ \"./src/assets/ships/destroyer.svg\");\n/* harmony import */ var _assets_ships_submarine_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ships/submarine.svg */ \"./src/assets/ships/submarine.svg\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\nvar Ship = /*#__PURE__*/function () {\n  function Ship(name, size, src) {\n    _classCallCheck(this, Ship);\n    this.name = name;\n    this.size = size;\n    this.src = src;\n    this.coords = null;\n    this.hits = 0;\n  }\n  _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hits++;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      return this.hits >= this.size;\n    }\n  }]);\n  return Ship;\n}();\nvar standardSet = /*#__PURE__*/_createClass(function standardSet() {\n  _classCallCheck(this, standardSet);\n  this.carrier = new Ship('carrier', 5, _assets_ships_carrier_svg__WEBPACK_IMPORTED_MODULE_1__);\n  this.battleship = new Ship('battleship', 4, _assets_ships_battleship_svg__WEBPACK_IMPORTED_MODULE_0__);\n  this.cruiser = new Ship('cruiser', 3, _assets_ships_cruiser_svg__WEBPACK_IMPORTED_MODULE_2__);\n  this.submarine = new Ship('submarine', 3, _assets_ships_submarine_svg__WEBPACK_IMPORTED_MODULE_4__);\n  this.destroyer = new Ship('destroyer', 2, _assets_ships_destroyer_svg__WEBPACK_IMPORTED_MODULE_3__);\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/ship.js?");

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
/******/ 			"battle": 0
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/battle.js");
/******/ 	
/******/ })()
;