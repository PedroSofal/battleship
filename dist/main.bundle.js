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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main-menu.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main-menu.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.main-menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 5fr 520px 4fr;\r\n  justify-content: center;\r\n  place-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n/* NAME & OPTIONS ***********/\r\n\r\n.name-options-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: start;\r\n  gap: 5rem;\r\n  margin: auto;\r\n}\r\n\r\n.game-title {\r\n  margin: 0;\r\n  font-size: var(--fs-900);\r\n}\r\n\r\n.player-name {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.label {\r\n  font-size: var(--fs-600);\r\n}\r\n\r\n.name-input {\r\n  width: 26ch;\r\n  padding: 0.6rem 0.8rem;\r\n  border: 2px solid var(--color-100);\r\n  border-radius: 0;\r\n  font-family: var(--sec-ff);\r\n  font-size: var(--fs-700);\r\n  color: var(--color-100);\r\n  background-color: var(--color-800);\r\n}\r\n\r\n.options {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.4rem\r\n}\r\n\r\n.options__language,\r\n.options__audio {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.4rem;\r\n}\r\n\r\n.language-radio,\r\n.audio-radio {\r\n  display: none;\r\n}\r\n\r\n.icon {\r\n  height: var(--icon-size);\r\n  padding: 5px;\r\n  opacity: 0.3;\r\n  cursor: pointer;\r\n  transition: all 150ms ease-in-out;\r\n  outline-offset: 1rem;\r\n}\r\n\r\n.lang-selected + .label .icon--flag {\r\n  outline: 1px solid #ccc;\r\n  outline-offset: 0px;\r\n  opacity: 1;\r\n}\r\n\r\n.audio-selected + .label .icon--speaker {\r\n  opacity: 1;\r\n}\r\n\r\n/* CHARACTER SELETION ***********/\r\n\r\n.character-selection-wrapper {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1rem;\r\n  width: 520px;\r\n}\r\n\r\n.character-option {\r\n  outline-offset: 2rem;\r\n  transition: all 100ms ease-in-out;\r\n  overflow: hidden;\r\n}\r\n\r\n.character-option.chosen {\r\n  opacity: 0.3;\r\n}\r\n\r\n\r\n.character-option:hover {\r\n  outline: 2px solid var(--color-100);\r\n  outline-offset: 5px;\r\n}\r\n\r\n.character-option:hover .character-photo {\r\n  transform: scale(1.15);\r\n}\r\n\r\n.character-photo {\r\n  background-color: var(--color-900);\r\n  cursor: pointer;\r\n  opacity: 0.3;\r\n  transition: all 200ms ease-in-out;\r\n}\r\n\r\n.character-selection-wrapper.opened .character-photo {\r\n  opacity: 1;\r\n}\r\n\r\n.label--character {\r\n  display: block;\r\n  background-color: var(--color-900);\r\n  position: relative;\r\n}\r\n\r\n.char-selected .label--character::before {\r\n  width: 100%;\r\n  height: 100%;\r\n  outline-style: solid;\r\n  outline-width: 5px;\r\n  outline-offset: -5px;\r\n}\r\n\r\n.char-selected--player .label--character::before {\r\n  outline-color: var(--color-player);\r\n}\r\n\r\n.char-selected--cpu .label--character::before {\r\n  outline-color: var(--color-cpu);\r\n}\r\n\r\n.label--character::before,\r\n.label--character::after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  transition: all 100ms ease-in-out;\r\n}\r\n\r\n.char-selected .label--character::after {\r\n  padding: 0.4rem 0.4rem 0.4rem 0.6rem;\r\n  bottom: 0;\r\n}\r\n\r\n.char-selected--player .label--character::after {\r\n  content: 'P1';\r\n  background-color: var(--color-500);\r\n}\r\n\r\n.char-selected--cpu .label--character::after {\r\n  content: 'P2';\r\n  background-color: var(--color-cpu);\r\n}\r\n\r\n.character-selection-wrapper.closed :not(.char-selected) .label--character{\r\n  opacity: 0.3;\r\n}\r\n\r\n/* READY UP ***********/\r\n\r\n.ready-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 3rem;\r\n}\r\n\r\n.opponents {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.opponents__player {\r\n  display: flex;\r\n  gap: 1rem;\r\n  width: 360px;\r\n  border: 2px solid var(--color-100);\r\n  cursor: pointer;\r\n  opacity: 0.3;\r\n}\r\n\r\n.opponents__player:hover {\r\n  outline: 2px solid var(--color-100);\r\n  outline-offset: 5px;\r\n}\r\n\r\n.opponents__player--selectable {\r\n  opacity: 1;\r\n}\r\n\r\n.opponents__player--selected#player-preview {\r\n  outline: 2px solid var(--color-player);\r\n  outline-offset: 5px;\r\n  opacity: 1;\r\n}\r\n\r\n.opponents__player--selected#cpu-preview {\r\n  outline: 2px solid var(--color-cpu);\r\n  outline-offset: 5px;\r\n  opacity: 1;\r\n}\r\n\r\n.opponents__img {\r\n  transform: scaleY(0);\r\n}\r\n\r\n.opponents__img.animate {\r\n  transform: scale(1);\r\n  transition: all 200ms ease-in-out;\r\n}\r\n\r\n.opponents__info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 0.2rem;\r\n}\r\n\r\n.opponents__name {\r\n  width: 12ch;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.opponents__type {\r\n  font-family: var(--sec-ff);\r\n  font-size: var(--fs-400);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/main-menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/backgrounds/menu-background.jpg */ \"./src/assets/backgrounds/menu-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --main-ff: \"Press Start 2P\", system-ui;\r\n  --sec-ff: \"Roboto Mono\", monospace;\r\n\r\n  --color-900: #0C0C1C;\r\n  --color-850: #181836;\r\n  --color-800: #202040;\r\n  --color-750: #2A2A51;\r\n  --color-500: #0038FF;\r\n  --color-600: #AF40FF;\r\n  --color-100: #cdcdcd;\r\n\r\n  --color-player: #0038FF;\r\n  --color-player-alpha: rgba(255, 0, 32, 0.5);\r\n  --color-cpu: #ff0020;\r\n\r\n  --fs-300: 0.7rem;\r\n  --fs-400: 0.8rem;\r\n  --fs-500: 0.95rem;\r\n  --fs-600: 1.1rem;\r\n  --fs-700: 1.4rem;\r\n  --fs-900: 4.2rem;\r\n\r\n  --icon-size: 2.2rem;\r\n}\r\n\r\nhtml {\r\n  font-family: var(--main-ff);\r\n  font-size: 20px;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: var(--color-900);\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n\r\n  margin: 0;\r\n  color: var(--color-100);\r\n}\r\n\r\n/* BUTTONS ***********/\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.main-button {\r\n  border: 0;\r\n  border-radius: 8px;\r\n  padding: 1.1rem 0.8rem;\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-600);\r\n  color: var(--color-100);\r\n  background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%,#00DDEB);\r\n  box-shadow: rgba(64, 40, 196, 0.2) 0 15px 30px -5px;\r\n  /* user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation; */\r\n}\r\n\r\n.main-button:active,\r\n.main-button:hover {\r\n  box-shadow: rgba(151, 65, 252, 0.5) 0 15px 30px -5px;\r\n}\r\n\r\n.main-button span {\r\n  background-color: rgb(5, 6, 45);\r\n  padding: 1rem 1.6rem;\r\n  border-radius: 6px;\r\n  transition: all 100ms ease-in-out;\r\n}\r\n\r\n.main-button:hover span {\r\n  background: none;\r\n}\r\n\r\n/* @media (min-width: 768px) {\r\n  .main-button {\r\n    font-size: 24px;\r\n    min-width: 196px;\r\n  }\r\n} */\r\n\r\nbutton:disabled {\r\n  opacity: 0.3;\r\n}\r\n\r\n.secondary-button {\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-600);\r\n  border-style: none;\r\n  background-color: transparent;\r\n  color: var(--color-100);\r\n}\r\n\r\n.wrapper {\r\n  background-color: var(--color-800);\r\n}\r\n\r\n/* GAMEBOARDS ***********/\r\n\r\n.wrapper--board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.6rem;\r\n  padding: 2rem 3rem;\r\n  border-top: 1.5rem solid var(--color-750);\r\n  border-right: 2rem solid var(--color-850);\r\n  border-left: 1rem solid var(--color-750);\r\n  border-bottom: 1.5rem solid var(--color-850);\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-rows: repeat(10, 50px);\r\n}\r\n\r\n.row {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 50px);\r\n}\r\n\r\n.human-board {\r\n  background: radial-gradient(\r\n    var(--color-player-alpha),\r\n    transparent\r\n  );\r\n}\r\n\r\n.human-board .square {\r\n  outline: 1px solid var(--color-player);\r\n}\r\n\r\n.cpu-board .square {\r\n  outline: 1px solid var(--color-cpu);\r\n}\r\n\r\n.square {\r\n  overflow: visible;\r\n}\r\n\r\n.occupied {\r\n  background-color: blue;\r\n}\r\n\r\n.close,\r\n.miss {\r\n  background-color: lightskyblue;\r\n}\r\n\r\n.sunk,\r\n.hit {\r\n  background-color: red;\r\n}\r\n\r\n.gameboard-name {\r\n  align-self: flex-start;\r\n  font-size: var(--fs-300);\r\n}\r\n\r\n.gameboard-display {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.dashed-border {\r\n  stroke-width: 10;\r\n  stroke-dasharray: 250 250;\r\n  stroke-dashoffset: 130;\r\n}\r\n\r\n.wrapper--player-board .dashed-border {\r\n  stroke: var(--color-player);\r\n}\r\n\r\n.wrapper--cpu-board .dashed-border {\r\n  stroke: var(--color-cpu);\r\n}\r\n\r\n.gameboard-display__radar-signal {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform-origin: 0 0;\r\n  background-image: linear-gradient(\r\n    to top right,\r\n    var(--color-player) 0%,\r\n    transparent 50%\r\n  );\r\n  animation: sweep 5s infinite linear;\r\n}\r\n\r\n.cpu-board .ship__icon {\r\n  visibility: hidden;\r\n}\r\n\r\n.cpu-board .ship__icon.sunken {\r\n  visibility: visible;\r\n}\r\n\r\n.ship__icon {\r\n  height: 50px;\r\n  background-color: var(--color-player);\r\n  transform-origin: 25px 25px;\r\n}\r\n\r\n.ship__icon#carrier {\r\n  width: 250px;\r\n}\r\n\r\n.ship__icon#battleship {\r\n  width: 200px;\r\n}\r\n\r\n.ship__icon#cruiser {\r\n  width: 150px;\r\n}\r\n\r\n.ship__icon#submarine {\r\n  width: 150px;\r\n}\r\n\r\n.ship__icon#destroyer {\r\n  width: 100px;\r\n}\r\n\r\n@keyframes sweep {\r\n  to { transform: rotateZ(360deg); }\r\n}\r\n\r\n.gameboard-display {\r\n  min-width: 500px;\r\n  min-height: 500px;\r\n  background-color: var(--color-900);\r\n}\r\n\r\n.gameboard-display > * {\r\n  position: absolute;\r\n}\r\n\r\n/* DRAG AND DROP ***********/\r\n\r\n.dragging {\r\n  opacity: 1;\r\n  cursor: grabbing;\r\n}\r\n\r\n.ship__drag--clone {\r\n  position: absolute;\r\n  left: -100%;\r\n}\r\n\r\n.rotated {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.dragover--allowed-placement {\r\n  background-color: #4CAF50;\r\n}\r\n\r\n.dragover--not-allowed-placement {\r\n  background-color: red;\r\n}\r\n\r\n/* HEADER ***********/\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: fixed;\r\n  width: 100%;\r\n  padding: 1rem;\r\n}\r\n\r\n.header__title {\r\n  font-size: var(--fs-500);\r\n}\r\n\r\n.header__options {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.header__button {\r\n  border-style: none;\r\n  background: transparent;\r\n}\r\n\r\n.header__icon {\r\n  height: 1.8rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/main-menu.css":
/*!***************************!*\
  !*** ./src/main-menu.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main-menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main-menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://24-battleship/./src/main-menu.css?");

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

/***/ "./src/characters.js":
/*!***************************!*\
  !*** ./src/characters.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   charObjects: () => (/* binding */ charObjects)\n/* harmony export */ });\n/* harmony import */ var _assets_characters_nimitz_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/characters/nimitz.jpg */ \"./src/assets/characters/nimitz.jpg\");\n/* harmony import */ var _assets_characters_yamato_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/characters/yamato.jpg */ \"./src/assets/characters/yamato.jpg\");\n/* harmony import */ var _assets_characters_olafsson_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/characters/olafsson.jpg */ \"./src/assets/characters/olafsson.jpg\");\n/* harmony import */ var _assets_characters_violeta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/characters/violeta.jpg */ \"./src/assets/characters/violeta.jpg\");\n/* harmony import */ var _assets_characters_rackham_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/characters/rackham.jpg */ \"./src/assets/characters/rackham.jpg\");\n/* harmony import */ var _assets_characters_noronha_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/characters/noronha.jpg */ \"./src/assets/characters/noronha.jpg\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar Char = /*#__PURE__*/_createClass(function Char(name, src, color, colorAlpha) {\n  _classCallCheck(this, Char);\n  this.name = name;\n  this.src = src;\n  this.color = color;\n  this.colorAlpha = colorAlpha;\n});\nvar charObjects = {\n  nimitz: new Char('yamato', _assets_characters_nimitz_jpg__WEBPACK_IMPORTED_MODULE_0__, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),\n  yamato: new Char('olafsson', _assets_characters_yamato_jpg__WEBPACK_IMPORTED_MODULE_1__, 'rgb(58, 113, 203)', 'rgba(58, 113, 203, 0.5)'),\n  olafsson: new Char('violeta', _assets_characters_olafsson_jpg__WEBPACK_IMPORTED_MODULE_2__, 'rgb(143, 202, 94)', 'rgba(143, 202, 94, 0.5)'),\n  violeta: new Char('rackham', _assets_characters_violeta_jpg__WEBPACK_IMPORTED_MODULE_3__, 'rgb(244, 195, 67)', 'rgba(244, 195, 67, 0.5)'),\n  rackham: new Char('nimitz', _assets_characters_rackham_jpg__WEBPACK_IMPORTED_MODULE_4__, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),\n  noronha: new Char('noronha', _assets_characters_noronha_jpg__WEBPACK_IMPORTED_MODULE_5__, 'rgb(143, 202, 94)', 'rgba(143, 202, 94, 0.5)')\n};\n\n//# sourceURL=webpack://24-battleship/./src/characters.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _main_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-menu.css */ \"./src/main-menu.css\");\n/* harmony import */ var _characters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters.js */ \"./src/characters.js\");\nvar _MainMenu;\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nvar MainMenu = /*#__PURE__*/function () {\n  function MainMenu() {\n    _classCallCheck(this, MainMenu);\n  }\n  _createClass(MainMenu, null, [{\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      MainMenu.nameInput.addEventListener('input', function (e) {\n        if (e.target.value.length > 0 && e.target.value.length <= 24) {\n          MainMenu.playerName.textContent = MainMenu.nameInput.value;\n          MainMenu.charSelectionWrapper.classList.add('opened');\n          MainMenu.charOptions.forEach(function (option) {\n            option.addEventListener('click', MainMenu.playerSelection);\n          });\n          if (MainMenu.playerChar && MainMenu.cpuChar) {\n            MainMenu.placeShipsBtn.disabled = false;\n          }\n        } else {\n          MainMenu.placeShipsBtn.disabled = true;\n        }\n      });\n      MainMenu.langOptions.forEach(function (option) {\n        return option.addEventListener('change', function (e) {\n          MainMenu.changeLang(e.target);\n        });\n      });\n      MainMenu.audioOptions.forEach(function (option) {\n        return option.addEventListener('change', function (e) {\n          MainMenu.changeAudio(e.target);\n        });\n      });\n      MainMenu.placeShipsBtn.addEventListener('click', function () {\n        if (!MainMenu.nameInput.value || !MainMenu.playerChar || !MainMenu.cpuChar) {\n          return;\n        }\n        sessionStorage.setItem('player-name', MainMenu.nameInput.value);\n        sessionStorage.setItem('lang', MainMenu.lang);\n        sessionStorage.setItem('audio', MainMenu.audio);\n        window.location.href = 'place-ships.html';\n      });\n      MainMenu.opponents.forEach(function (opponent) {\n        opponent.addEventListener('click', function (e) {\n          return MainMenu.playerEditing(e);\n        });\n      });\n    }\n  }, {\n    key: \"changeLang\",\n    value: function changeLang(input) {\n      MainMenu.langOptions.forEach(function (option) {\n        return option.classList.remove('lang-selected');\n      });\n      input.classList.add('lang-selected');\n      MainMenu.lang = input.value;\n    }\n  }, {\n    key: \"changeAudio\",\n    value: function changeAudio(input) {\n      MainMenu.audioOptions.forEach(function (option) {\n        return option.classList.remove('audio-selected');\n      });\n      input.classList.add('audio-selected');\n      MainMenu.audio = input.value;\n    }\n  }, {\n    key: \"handleCharSelection\",\n    value: function handleCharSelection(selectedChar) {\n      MainMenu.resetCharSelection();\n      selectedChar.classList.add('char-selected');\n      selectedChar.classList.add(\"char-selected--\".concat(MainMenu.isSelecting));\n      MainMenu.opponents.forEach(function (opponent) {\n        opponent.classList.remove('opponents__player--selected');\n      });\n      if (MainMenu.isSelecting === 'player') {\n        MainMenu.associateCharToPlayer(selectedChar);\n        if (MainMenu.isEditing) {\n          MainMenu.deactivatePlayerSelection();\n        } else {\n          MainMenu.isSelecting = 'cpu';\n          MainMenu.cpuPreview.classList.add('opponents__player--selected');\n        }\n        return;\n      }\n      if (MainMenu.isSelecting === 'cpu') {\n        MainMenu.associateCharToCpu(selectedChar);\n        MainMenu.deactivatePlayerSelection();\n      }\n    }\n  }, {\n    key: \"playerEditing\",\n    value: function playerEditing(e) {\n      var opponent = e.currentTarget.id.includes('player') ? 'player' : 'cpu';\n      if (!sessionStorage.getItem('player-char') || !sessionStorage.getItem('cpu-char')) return;\n      MainMenu.placeShipsBtn.disabled = true;\n      MainMenu.isSelecting = opponent;\n      MainMenu.resetCharSelection();\n      MainMenu.opponents.forEach(function (div) {\n        div.classList.remove('opponents__player--selected');\n        div.classList.remove('opponents__player--selectable');\n      });\n      e.currentTarget.classList.add('opponents__player--selected');\n      if (MainMenu.isEditing) {\n        MainMenu.restoreCharSelection();\n      } else {\n        MainMenu.isEditing = true;\n        MainMenu.enableCharacterEditing();\n      }\n      MainMenu.hideChosenCharacter();\n    }\n  }, {\n    key: \"enableCharacterEditing\",\n    value: function enableCharacterEditing() {\n      MainMenu.charSelectionWrapper.classList.remove('closed');\n      MainMenu.charOptions.forEach(function (option) {\n        option.addEventListener('click', MainMenu.playerSelection);\n      });\n    }\n  }, {\n    key: \"deactivatePlayerSelection\",\n    value: function deactivatePlayerSelection() {\n      MainMenu.charOptions.forEach(function (option) {\n        option.removeEventListener('click', MainMenu.playerSelection);\n      });\n      MainMenu.opponents.forEach(function (opponent) {\n        opponent.classList.remove('opponents__player--selected');\n        opponent.classList.add('opponents__player--selectable');\n      });\n      MainMenu.charSelectionWrapper.classList.add('closed');\n      MainMenu.isEditing = false;\n      MainMenu.placeShipsBtn.disabled = false;\n    }\n  }, {\n    key: \"resetCharSelection\",\n    value: function resetCharSelection() {\n      MainMenu.charOptions.forEach(function (option) {\n        if (option.classList.contains(\"char-selected--\".concat(MainMenu.isSelecting))) {\n          option.classList.remove('char-selected');\n          option.classList.remove(\"char-selected--\".concat(MainMenu.isSelecting));\n        }\n      });\n    }\n  }, {\n    key: \"associateCharToPlayer\",\n    value: function associateCharToPlayer(selectedChar) {\n      MainMenu.playerChar = selectedChar.id;\n      MainMenu.playerPhoto.src = _characters_js__WEBPACK_IMPORTED_MODULE_2__.charObjects[selectedChar.id].src;\n      MainMenu.playerPhoto.alt = _characters_js__WEBPACK_IMPORTED_MODULE_2__.charObjects[selectedChar.id].name;\n      MainMenu.playerPhoto.classList.remove('animate');\n      setTimeout(function () {\n        return MainMenu.playerPhoto.classList.add('animate');\n      });\n      sessionStorage.setItem('player-char', MainMenu.playerChar);\n    }\n  }, {\n    key: \"associateCharToCpu\",\n    value: function associateCharToCpu(selectedChar) {\n      MainMenu.cpuChar = selectedChar.id;\n      MainMenu.cpuName.textContent = _characters_js__WEBPACK_IMPORTED_MODULE_2__.charObjects[selectedChar.id].name;\n      MainMenu.cpuPhoto.src = _characters_js__WEBPACK_IMPORTED_MODULE_2__.charObjects[selectedChar.id].src;\n      MainMenu.cpuPhoto.alt = _characters_js__WEBPACK_IMPORTED_MODULE_2__.charObjects[selectedChar.id].name;\n      MainMenu.cpuPhoto.classList.remove('animate');\n      setTimeout(function () {\n        return MainMenu.cpuPhoto.classList.add('animate');\n      });\n      sessionStorage.setItem('cpu-char', MainMenu.cpuChar);\n    }\n  }, {\n    key: \"restoreCharSelection\",\n    value: function restoreCharSelection() {\n      var wasSelecting = MainMenu.isSelecting === 'player' ? 'cpu' : 'player';\n      var selectedChar = document.getElementById(sessionStorage.getItem(\"\".concat(wasSelecting, \"-char\")));\n      selectedChar.classList.add('char-selected');\n      selectedChar.classList.add(\"char-selected--\".concat(wasSelecting));\n      MainMenu.charOptions.forEach(function (option) {\n        return option.classList.remove('chosen');\n      });\n    }\n  }, {\n    key: \"hideChosenCharacter\",\n    value: function hideChosenCharacter() {\n      var chosenCharacter = document.querySelector('.char-selected');\n      chosenCharacter.classList.add('chosen');\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      sessionStorage.clear();\n      MainMenu.setEventListeners();\n    }\n  }]);\n  return MainMenu;\n}();\n_MainMenu = MainMenu;\n_defineProperty(MainMenu, \"lang\", 'pt');\n_defineProperty(MainMenu, \"audio\", 'on');\n_defineProperty(MainMenu, \"playerChar\", null);\n_defineProperty(MainMenu, \"cpuChar\", null);\n_defineProperty(MainMenu, \"isSelecting\", 'player');\n_defineProperty(MainMenu, \"isEditing\", false);\n_defineProperty(MainMenu, \"nameInput\", document.querySelector('#name-input'));\n_defineProperty(MainMenu, \"langOptions\", document.querySelectorAll('.language-radio'));\n_defineProperty(MainMenu, \"audioOptions\", document.querySelectorAll('.audio-radio'));\n_defineProperty(MainMenu, \"charOptions\", document.querySelectorAll('.character-option'));\n_defineProperty(MainMenu, \"placeShipsBtn\", document.querySelector('#place-ships'));\n_defineProperty(MainMenu, \"charSelectionWrapper\", document.querySelector('.character-selection-wrapper'));\n_defineProperty(MainMenu, \"playerPreview\", document.querySelector('#player-preview'));\n_defineProperty(MainMenu, \"cpuPreview\", document.querySelector('#cpu-preview'));\n_defineProperty(MainMenu, \"opponents\", document.querySelectorAll('.opponents__player'));\n_defineProperty(MainMenu, \"playerName\", document.querySelector('#player-name'));\n_defineProperty(MainMenu, \"cpuName\", document.querySelector('#cpu-name'));\n_defineProperty(MainMenu, \"playerPhoto\", document.querySelector('#player-photo'));\n_defineProperty(MainMenu, \"cpuPhoto\", document.querySelector('#cpu-photo'));\n_defineProperty(MainMenu, \"playerSelection\", function (e) {\n  _MainMenu.handleCharSelection(e.currentTarget);\n});\nMainMenu.init();\n\n//# sourceURL=webpack://24-battleship/./src/index.js?");

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
/******/ 			"main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;