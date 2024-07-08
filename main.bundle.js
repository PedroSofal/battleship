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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/buttons.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/buttons.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Global */\r\n\r\nbutton:not([disabled]):not(.main-button) {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:disabled {\r\n  opacity: 0.3;\r\n}\r\n\r\nbutton:focus-visible {\r\n  outline-style: none;\r\n}\r\n\r\nbutton:hover {\r\n  color: var(--color-main-button);\r\n}\r\n\r\n/* Main */\r\n\r\n.main-button {\r\n  position: relative;\r\n  border: none;\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-700);\r\n  color: var(--color-100);\r\n  background: none;\r\n  cursor: crosshair;\r\n  z-index: 1;\r\n}\r\n\r\n.main-button::before {\r\n  content: '';\r\n  display: inline;\r\n  width: calc(100% + 2.1875em);\r\n  height: calc(100% + 2.1875em);\r\n  border: max(0.1875em, 0.5vmin) solid var(--color-main-button);\r\n  position: absolute;\r\n  top: -1.1875em;\r\n  left: -1.1875em;\r\n  z-index: -1;\r\n  background-color: var(--color-main-button);\r\n  transform: translateY(80%) scaleX(0%);\r\n}\r\n\r\n.main-button:not([disabled]):hover.main-button::before {\r\n  animation: show-button-container 200ms steps(2) forwards,\r\n    hue-rotate 2s ease-in-out infinite;\r\n}\r\n\r\n@keyframes show-button-container {\r\n  50% { transform: translateY(0) scaleX(30%); background-color: var(--color-main-button); }\r\n  100% { transform: translateY(0) scaleX(100%); background-color: var(--color-800); }\r\n}\r\n\r\n@keyframes hue-rotate {\r\n  0%, 100% { filter: hue-rotate(0deg); }\r\n  50% { filter: hue-rotate(-10deg) saturate(400%); }\r\n}\r\n\r\n.main-button--small {\r\n  font-size: var(--fs-600);\r\n}\r\n\r\n.main-button--white {\r\n  color: var(--color-main-button);\r\n}\r\n\r\n/* Secondary */\r\n\r\n.header-button {\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-600);\r\n  border-style: none;\r\n  background-color: transparent;\r\n  color: var(--color-100);\r\n}\r\n\r\n.close-button {\r\n  box-sizing: content-box;\r\n  --close-button-size: max(0.75rem, 1.8vmin);\r\n\r\n  width: calc(var(--close-button-size) * 2);\r\n  height: calc(var(--close-button-size) * 2);\r\n  border-style: none;\r\n  border-radius: 50%;\r\n  font-family: var(--main-ff);\r\n  font-size: var(--close-button-size);\r\n  background-color: var(--color-accent-2);\r\n  color: var(--color-100);\r\n}\r\n\r\n.close-button--big {\r\n  --close-button-size: max(0.9rem, 2vmin);\r\n  padding: 0.3rem 0.21rem 0.21rem 0.3rem;\r\n}\r\n\r\n.help-button {\r\n  position: fixed;\r\n  right: var(--outer-margin);\r\n  bottom: var(--outer-margin);\r\n  padding: clamp(0.8rem, 3vmin, 1.5rem);\r\n  border-style: none;\r\n  border-radius: 50%;\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-700);\r\n  background-color: var(--color-900);\r\n  color: var(--color-100);\r\n  transition: transform 50ms ease-in-out;\r\n}\r\n\r\n.help-button:hover {\r\n  background-color: var(--color-800);\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* Selection */\r\n\r\n.selection-button {\r\n  padding: 0.75rem;\r\n  border-style: none;\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-600);\r\n  background-color: transparent;\r\n  color: var(--color-100);\r\n}\r\n\r\n.selection-button.selected {\r\n  opacity: 1;\r\n}\r\n\r\n/* Key */\r\n\r\n.key-button {\r\n  padding: 0.5rem;\r\n  border-radius: 0.3125rem;\r\n  font-family: var(--main-ff);\r\n  font-size: var(--fs-400);\r\n  color: var(--color-100);\r\n  background-color: var(--color-700);\r\n  cursor: pointer;\r\n  transition: all 50ms ease-in-out;\r\n}\r\n\r\n.key-button:hover {\r\n  background-color:var(--color-600);\r\n}\r\n\r\n.key-button:active {\r\n  background-color:var(--color-900);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/buttons.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dialogs.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dialogs.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.dialog {\r\n  position: fixed;\r\n  margin: auto;\r\n  inset: 0;\r\n  padding: 0;\r\n  border: none;\r\n  overflow: hidden;\r\n  background: transparent;\r\n  color: inherit;\r\n  opacity: 0;\r\n  transform: translateY(50%);\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\n.dialog.opened {\r\n  opacity: 1;\r\n  transform: translate(0);\r\n}\r\n\r\n.dialog::backdrop {\r\n  background-color: var(--color-900);\r\n  opacity: 0;\r\n  transition: all 500ms ease-in-out;\r\n}\r\n\r\n.dialog.opened::backdrop {\r\n  opacity: 0.8;\r\n}\r\n\r\n.activation-screen {\r\n  position: fixed;\r\n  margin: auto;\r\n  inset: 0;\r\n  padding: 0;\r\n  border: none;\r\n  background: transparent;\r\n  color: inherit;\r\n  font-size: var(--fs-700);\r\n  text-align: center;\r\n}\r\n\r\n.activation-screen::backdrop {\r\n  background-color: var(--color-900);\r\n  opacity: 0.5;\r\n}\r\n\r\n.activation-screen:focus-visible {\r\n  outline: none;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/dialogs.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main-menu.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main-menu.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/backgrounds/sky.jpg */ \"./src/assets/backgrounds/sky.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* WRAPPER ***********/\r\n\r\n.main-menu {\r\n  display: grid;\r\n  grid-auto-flow: row;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  align-content: space-between;\r\n  height: min(100svh, 67.5rem);\r\n}\r\n\r\n/* LOGO ***********/\r\n\r\n.main-menu__title-container {\r\n  padding: clamp(0.6rem, 3.5vmin, 2.4rem) clamp(1rem, 4.5vmin, 3rem);\r\n  margin-block-start: clamp(1rem, 4.5vh, 3rem);\r\n  background-color: var(--color-800);\r\n  z-index: 1;\r\n}\r\n\r\n.main-menu__title {\r\n  margin: 0;\r\n  font-size: var(--fs-900);\r\n  pointer-events: none;\r\n}\r\n\r\n/* ANIMATED BG ***********/\r\n\r\n.menu-bg {\r\n  --distance-from-top: min(13vh, 15vw, 8.5rem);\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: min(215vh, 135vw);\r\n  min-width: 18rem;\r\n  max-width: calc(120rem + var(--silver-border-width) * 2);\r\n  height: min(84vh, 60vw);\r\n  min-height: 12rem;\r\n  max-height: 57rem;\r\n  margin-block-start: var(--distance-from-top);\r\n  overflow: hidden;\r\n  container-type: size;\r\n  /* transition: all 1s ease-in; */\r\n}\r\n\r\n.menu-bg.transition {\r\n  filter: blur(10px);\r\n  transform: scale(1.3);\r\n  opacity: 0;\r\n}\r\n\r\n.menu-bg * {\r\n  position: absolute;\r\n}\r\n\r\n.menu-bg > *:not(.helicopter) {\r\n  width: min(215vh, 135vw, calc(120rem + var(--silver-border-width) * 2));\r\n  min-width: 22rem;\r\n  margin-block-start: max(calc(var(--distance-from-top) - 34vh), -9.5rem);\r\n}\r\n\r\n#sky {\r\n  width: 200cqw;\r\n  height: calc(min(107.5cqh, 42.2cqw) - var(--distance-from-top));\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-position-y: bottom;\r\n  background-size: contain;\r\n  animation: move-sky 80s steps(240) infinite;\r\n}\r\n\r\n@keyframes move-sky {\r\n  to { transform: translateX(-25%); }\r\n}\r\n\r\n\r\n#clouds {\r\n  transform: translateX(100cqw);\r\n  animation: move-clouds 60s steps(60) infinite;\r\n}\r\n\r\n@keyframes move-clouds {\r\n  to { transform: translateX(-100%); }\r\n}\r\n\r\n#sea-base {\r\n  animation: wave 3s steps(6) infinite;\r\n}\r\n\r\n#sea-move1,\r\n#sea-move2 {\r\n  opacity: 0;\r\n  animation: wave 3s steps(6) infinite;\r\n}\r\n\r\n@keyframes wave {\r\n  0%, 100% {\r\n    transform: none;\r\n  }\r\n  50% {\r\n    transform: translateY(max(-1cqh, 0.25rem));\r\n  }\r\n}\r\n\r\n#ship {\r\n  animation: sail 3s steps(6) infinite;\r\n}\r\n\r\n@keyframes sail {\r\n  0%, 100% {\r\n    transform: translate(max(0.5cqw, 0.1875rem), max(2cqh, 0.25rem)) rotateZ(1deg);\r\n  }\r\n  50% {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n.helicopter {\r\n  animation: fly 15s linear 2s infinite;\r\n  margin-block-start: var(--distance-from-top);\r\n}\r\n\r\n.helicopter > img {\r\n  width: clamp(6rem, 50cqmin, 20.125rem);\r\n  height: auto;\r\n}\r\n\r\n#helicopter1 {\r\n  top: 0cqh;\r\n  right: 0;\r\n  transform: rotateZ(-5deg);\r\n}\r\n\r\n#helicopter2 {\r\n  top: 15cqb;\r\n  right: -12cqw;\r\n  transform: translateX(10cqw) scale(0.6) rotateZ(-5deg);\r\n}\r\n\r\n@keyframes fly {\r\n  100% { transform: translateX(-300vw) rotateZ(-5deg); }\r\n}\r\n\r\n/* BUTTONS ***********/\r\n\r\n.main-menu__buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  column-gap: min(12vw, 10rem);\r\n  row-gap: min(6vh, 4rem);\r\n  width: 100%;\r\n  margin-block-end: min(max(calc(-20rem + 42vh), 8vh), 8.5rem);\r\n  z-index: 1;\r\n}\r\n\r\n/* MEDIA QUERIES ***********/\r\n\r\n@media (max-aspect-ratio: 11/8) {\r\n  .menu-bg {\r\n    height: max(60vh, min(65vh, 52vw));\r\n  }\r\n\r\n  .menu-bg > *:not(.helicopter) {\r\n    margin-block-start: max(calc(var(--distance-from-top) - 24vw + 4vh), -9.5rem);\r\n  }\r\n\r\n  #sky {\r\n    height: calc(min(max(44cqw, 109cqh), max(92cqh, 46cqw)) - var(--distance-from-top));\r\n  }\r\n}\r\n\r\n@media (max-aspect-ratio: 7/8) {\r\n  .main-menu {\r\n    align-content: center;\r\n    row-gap: 5vh;\r\n  }\r\n\r\n  .main-menu > * {\r\n    margin: 0;\r\n  }\r\n\r\n  .menu-bg {\r\n    position: relative;\r\n    width: 100vw;\r\n    height: min(40vh, 65vw);\r\n    border-inline: 0 !important;\r\n  }\r\n\r\n  .menu-bg > *:not(.helicopter) {\r\n    margin-block-start: min(calc(var(--distance-from-top) - 34vw + 8vh), -6vw);\r\n  }\r\n\r\n  .main-menu__buttons {\r\n    flex-direction: column;\r\n  }\r\n  \r\n  #helicopter1 {\r\n    top: -10cqh;\r\n  }\r\n  \r\n  #helicopter2 {\r\n    top: 10cqb;\r\n  }\r\n\r\n  #sky {\r\n    height: calc(63cqw - var(--distance-from-top));\r\n  }\r\n}\r\n\r\n@media (min-aspect-ratio: 3/1) {\r\n  .main-menu {\r\n    grid-template-columns: auto auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    column-gap: 6vw;\r\n  }\r\n\r\n  .menu-bg {\r\n    --distance-from-top: min(-8vh, 15vw);\r\n    grid-column: 1 / 2;\r\n    position: relative;\r\n    width: min(200vh, 55vw);\r\n    height: min(75vh, 60vw);\r\n  }\r\n\r\n  .menu-bg > *:not(.helicopter) {\r\n    /* margin-block-start: calc(var(--distance-from-top) + 0rem - min(25vh, 14vw)); */\r\n    margin-block-start: calc(var(--distance-from-top) - 10vh);\r\n  }\r\n\r\n  .main-menu__title-container {\r\n    display: flex;\r\n    margin: 0;\r\n  }\r\n\r\n  .main-menu__buttons {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 3rem;\r\n    margin: 0;\r\n  }\r\n\r\n  #helicopter1 {\r\n    top: 30cqh;\r\n  }\r\n\r\n  #helicopter2 {\r\n    top: 50cqh;\r\n  }\r\n\r\n  #sky {\r\n    height: calc(min(92cqh, 42cqw) - var(--distance-from-top));\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/main-menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/options.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/options.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* WRAPPER ***********/\r\n\r\n.options {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--main-gap-size);\r\n}\r\n\r\n/* CONTAINERS ***********/\r\n\r\n.options__list {\r\n  width: clamp(15rem, 80vw, 62.5rem);\r\n  height: clamp(6rem, -0.7826rem + 53.913vh, 41rem);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  padding-block: 1.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.options__list:hover {\r\n  border-style: solid;\r\n  border-image-slice: 1;\r\n  border-image-source: var(--gradient-silver);\r\n  background-color: var(--color-800);\r\n}\r\n\r\n.options__close-alternate {\r\n  display: none;\r\n}\r\n\r\n/* OPTIONS ***********/\r\n\r\n.options__item {\r\n  box-sizing: content-box;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  column-gap: 1.75rem;\r\n  height: clamp(3rem, 10vh, 5rem);\r\n  min-height: 3rem;\r\n  padding-inline: 2.5rem;\r\n}\r\n\r\n.options__item:hover {\r\n  background-color: var(--color-600);\r\n}\r\n\r\n.options__selections {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: end;\r\n  column-gap: 1rem;\r\n}\r\n\r\n.label {\r\n  color: var(--color-100);\r\n  font-size: var(--fs-600);\r\n}\r\n\r\ninput[type=\"range\"] {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background: var(--color-100);\r\n  border-radius: 0.75rem;\r\n  height: min(0.75rem, 2vh);\r\n  width: clamp(8rem, 20vw, 12.5rem);\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"range\"]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  background-color: var(--color-slider-thumb);\r\n  border-radius: 0.25rem;\r\n  height: min(1.75rem, 6vh);\r\n  width: 1rem;\r\n}\r\n\r\ninput[type=\"range\"]::-moz-range-thumb {\r\n  background-color: var(--color-slider-thumb);\r\n  border: none;\r\n  border-radius: 0.25rem;\r\n  height: min(1.75rem, 6vh);\r\n  width: 1rem;\r\n}\r\n\r\n.icon {\r\n  height: var(--icon-size);\r\n  opacity: 0.3;\r\n  cursor: pointer;\r\n  transition: all 150ms ease-in-out;\r\n  outline-offset: 1.25rem;\r\n}\r\n\r\n.icon:not([data-content=\"battle\"] .difficulty-option):hover {\r\n  opacity: 1;\r\n}\r\n\r\n[data-content=\"battle\"] .options__item--difficulty {\r\n  opacity: 0.3;\r\n}\r\n\r\n.language-radio {\r\n  display: none;\r\n}\r\n\r\n.language-radio.selected + .label .icon--flag {\r\n  outline: 1px solid #ccc;\r\n  outline-offset: 0px;\r\n  opacity: 1;\r\n}\r\n\r\n.icon--flag {\r\n  padding: 0.3125rem;\r\n}\r\n\r\n/* MEDIA QUERIES ***********/\r\n\r\n@media (width < 650px) {\r\n  .options__item {\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: start;\r\n    row-gap: 1rem;\r\n    min-height: unset;\r\n    height: unset;\r\n    padding-block: min(1.5rem, 3vh);\r\n  }\r\n\r\n  .options__selections {\r\n    justify-content: start;\r\n  }\r\n}\r\n\r\n@media (min-aspect-ratio: 3/1) and (max-height: 440px) {\r\n  .options {\r\n    flex-direction: row;\r\n  }\r\n\r\n  .options__list {\r\n    width: clamp(30rem, 50vw, 45rem);\r\n    height: min(80vh, 18rem);\r\n  }\r\n\r\n  .options__footer {\r\n    display: none;\r\n  }\r\n\r\n  .options__close-alternate {\r\n    display: unset;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/options.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/backgrounds/set-up-bg.jpg */ \"./src/assets/backgrounds/set-up-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/backgrounds/battle-bg.jpg */ \"./src/assets/backgrounds/battle-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* VARIABLES ***********/\r\n\r\n:root {\r\n  --main-ff: \"Press Start 2P\", system-ui;\r\n  --sec-ff: \"Roboto Mono\", monospace;\r\n\r\n  --color-900: #0C0C1C;\r\n  --color-800: #161238;\r\n  --color-700: #20284b;\r\n  --color-600: #2d3c64;\r\n  --color-300: #3f5192;\r\n  --color-200: #d7d8f0;\r\n  --color-100: #cdcdcd;\r\n  --color-accent-1: #0038ff;\r\n  --color-accent-2: #9b0eff;\r\n\r\n  --color-player: #0038FF;\r\n  --color-player-alpha: unset;\r\n  --color-cpu: #ff0020;\r\n  --color-main-button: white;\r\n  --color-radar-light: rgba(255, 0, 0, 0.3);\r\n  --color-slider-thumb: #256dd8;\r\n  --color-allowed: #4CAF50;\r\n  --color-not-allowed: #ce1928;\r\n  \r\n  --gradient-silver: linear-gradient(var(--color-200), var(--color-300));\r\n  --gradient-silver-dark: linear-gradient(#53558a, #1e253d);\r\n  --gradient-miss: radial-gradient(#2d78be, #00488b, transparent);\r\n  --gradient-hit: radial-gradient(#ff6e35, #ff0015, transparent);\r\n  --gradient-human-board: radial-gradient(var(--color-player-alpha), transparent);\r\n  --gradient-radar-sweep: linear-gradient(to top right, var(--color-player) 0%, transparent 50%);\r\n\r\n  --fs-300: clamp(0.5rem, min(0.3885rem + 0.5vw, 1.6vh), 0.85rem);\r\n  --fs-400: clamp(0.5rem, min(0.3885rem + 0.65vw, 2.1vh), 1rem);\r\n  --fs-500: clamp(0.6rem, min(0.465rem + 0.4459vw, 4vh), 1rem);\r\n  --fs-600: clamp(0.7rem, 2vmin, 1.2em);\r\n  --fs-700: clamp(1.2rem, 2.5vmin, 2.4em);\r\n  --fs-900: clamp(1.5rem, 7.5vmin, 5em);\r\n\r\n  --icon-size: clamp(2rem, 8vmin, 2.75rem);\r\n  --square-size: min(2.85em, 3.125rem);\r\n  --main-gap-size: clamp(0.5em, 2vmin, 1.25em);\r\n  --silver-border-width: clamp(0.2em, 0.5vmin, 0.5em);\r\n  --outer-margin: min(3vmin, 1.25rem);\r\n}\r\n\r\n/* GLOBAL ***********/\r\n\r\nhtml {\r\n  font-family: var(--main-ff);\r\n  line-height: 1.2;\r\n  color: var(--color-100);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-weight: normal;\r\n}\r\n\r\nbody {\r\n  /* Also inline for better performance */\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #110f26;\r\n}\r\n\r\nmain {\r\n  position: relative;\r\n}\r\n\r\nh1 {\r\n  font-size: var(--fs-700);\r\n}\r\n\r\n.big-frame {\r\n  border-top: min(3.5vmin, 2.3rem) solid var(--color-600);\r\n  border-right: min(5vmin, 3.4rem) solid var(--color-800);\r\n  border-left: min(2.5vmin, 1.8rem) solid var(--color-600);\r\n  border-bottom: min(3.5vmin, 2.3rem) solid var(--color-800);\r\n  background-color: var(--color-700);\r\n}\r\n\r\n.small-frame {\r\n  border-top: min(1.5vmin, 1rem) solid var(--color-600);\r\n  border-right: min(2.5vmin, 1.8rem) solid var(--color-800);\r\n  border-left: min(2.5vmin, 1.8rem) solid var(--color-600);\r\n  border-bottom: min(2.5vmin, 1.8rem) solid var(--color-800);\r\n  background-color: var(--color-700);\r\n}\r\n\r\n.secondary-frame {\r\n  border: clamp(0.1875rem, 0.5vmin, 0.4rem) solid var(--color-700);\r\n  background-color: var(--color-900);\r\n}\r\n\r\n.silver-border {\r\n  border: var(--silver-border-width) solid;\r\n  border-image-slice: 1;\r\n  border-image-source: var(--gradient-silver);\r\n}\r\n\r\n.title,\r\n.footer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  column-gap: min(3em, 4vw);\r\n  row-gap: 2em;\r\n  padding: min(1.6em, 4vh);\r\n  height: clamp(100%, min(16vh, 24vw), 8.125rem);\r\n}\r\n\r\n.not-clickable {\r\n  pointer-events: none;\r\n}\r\n\r\n.blurry {\r\n  filter: blur(10px);\r\n}\r\n\r\n.invisible {\r\n  opacity: 0;\r\n  filter: brightness(400%);\r\n  transform: scale(1.2);\r\n}\r\n\r\n/* MASTER WRAPPER ***********/\r\n\r\n.content {\r\n  grid-template-rows: auto 1fr;\r\n  position: relative;\r\n  height: 100vh;\r\n  transition: filter 500ms ease-in-out;\r\n  overflow: hidden;\r\n\r\n  /* Also inline for better performance */\r\n  display: none;\r\n}\r\n\r\n.content.shown {\r\n  display: grid !important;\r\n}\r\n\r\n.content--main-menu {\r\n  grid-template-rows: auto;\r\n  place-content: center;\r\n}\r\n\r\n/* Background Images */\r\n\r\n.content::before {\r\n  content: '';\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  position: absolute;\r\n  opacity: 0.6;\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 50%;\r\n  background-size: cover;\r\n}\r\n\r\n.content[data-content=\"strategy-room\"]::before,\r\n.content[data-content=\"character-selection\"]::before {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n.content[data-content=\"battle\"]::before {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n\r\n/* LOADING SCREEN ***********/\r\n\r\n.loader {\r\n  /* Also inline for better performance */\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: clamp(1rem, 5vh, 5rem);\r\n  overflow: hidden;\r\n}\r\n\r\n.loader.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.loader__img {\r\n  width: clamp(20rem, 90vmin, 56rem);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/html/components/activation-screen.html":
/*!****************************************************!*\
  !*** ./src/html/components/activation-screen.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<dialog class=\\\"activation-screen\\\" id=\\\"activation-screen\\\"> <p data-en=\\\"Press any key\\\" data-pt=\\\"Pressione qualquer tecla\\\">Press any key</p> </dialog>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://24-battleship/./src/html/components/activation-screen.html?");

/***/ }),

/***/ "./src/html/components/confirm-nav-modal.html":
/*!****************************************************!*\
  !*** ./src/html/components/confirm-nav-modal.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<dialog class=\\\"dialog\\\" id=\\\"confirm-nav-modal\\\"> <section class=\\\"confirm-nav\\\"> <p class=\\\"secondary-frame | confirm-nav__prompt\\\" id=\\\"prompt\\\"></p> <footer class=\\\"small-frame footer | confirm-nav__footer\\\"> <button class=\\\"main-button\\\" id=\\\"no\\\" data-en=\\\"No\\\" data-pt=\\\"Não\\\">No</button> <button class=\\\"main-button\\\" id=\\\"yes\\\" data-en=\\\"Yes\\\" data-pt=\\\"Sim\\\">Yes</button> </footer> </section> </dialog>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://24-battleship/./src/html/components/confirm-nav-modal.html?");

/***/ }),

/***/ "./src/html/components/settings-modal.html":
/*!*************************************************!*\
  !*** ./src/html/components/settings-modal.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/flag-united-kingdom.jpg */ \"./src/assets/icons/flag-united-kingdom.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/flag-brazil.jpg */ \"./src/assets/icons/flag-brazil.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = \"<dialog class=\\\"dialog dialog--options\\\" id=\\\"settings-modal\\\"> <div class=\\\"options\\\"> <header class=\\\"small-frame title | options__header\\\"> <h1 data-en=\\\"Options\\\" data-pt=\\\"Opções\\\">Options</h1> </header> <ul class=\\\"secondary-frame | options__list\\\"> <li class=\\\"options__item\\\"> <label class=\\\"label\\\" data-en=\\\"Language\\\" data-pt=\\\"Idioma\\\">Language</label> <div class=\\\"options__selections\\\"> <input class=\\\"language-radio lang-selected\\\" type=\\\"radio\\\" name=\\\"language\\\" id=\\\"lang-en\\\" value=\\\"en\\\"> <label class=\\\"label\\\" for=\\\"lang-en\\\"> <img class=\\\"icon icon--flag\\\" id=\\\"ukFlag\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"> </label> <input class=\\\"language-radio\\\" type=\\\"radio\\\" name=\\\"language\\\" id=\\\"lang-pt\\\" value=\\\"pt\\\"> <label class=\\\"label\\\" for=\\\"lang-pt\\\"> <img class=\\\"icon icon--flag\\\" id=\\\"brazilFlag\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"> </label> </div> </li> <li class=\\\"options__item\\\"> <label class=\\\"label\\\" for=\\\"music-volume-slider\\\" data-en=\\\"Volume - music\\\" data-pt=\\\"Volume - música\\\">Volume - music</label> <input id=\\\"music-volume-slider\\\" type=\\\"range\\\" min=\\\"0\\\" max=\\\"1\\\" step=\\\"0.1\\\" value=\\\"1\\\"> </li> <li class=\\\"options__item\\\"> <label class=\\\"label\\\" for=\\\"sfx-volume-slider\\\" data-en=\\\"Volume - effects\\\" data-pt=\\\"Volume - efeitos\\\">Volume - effects</label> <input id=\\\"sfx-volume-slider\\\" type=\\\"range\\\" min=\\\"0\\\" max=\\\"1\\\" step=\\\"0.1\\\" value=\\\"1\\\"> </li> <li class=\\\"options__item options__item--difficulty\\\"> <label class=\\\"label\\\" data-en=\\\"Difficulty\\\" data-pt=\\\"Dificuldade\\\">Difficulty</label> <div class=\\\"options__selections\\\"> <button class=\\\"selection-button icon difficulty-option\\\" id=\\\"recruit\\\" value=\\\"0\\\" data-en=\\\"RECRUIT\\\" data-pt=\\\"RECRUTA\\\">RECRUIT</button> <button class=\\\"selection-button icon difficulty-option\\\" id=\\\"captain\\\" value=\\\"1\\\" data-en=\\\"CAPTAIN\\\" data-pt=\\\"CAPITÃO\\\">CAPTAIN</button> <button class=\\\"selection-button icon difficulty-option\\\" id=\\\"admiral\\\" value=\\\"2\\\" data-en=\\\"ADMIRAL\\\" data-pt=\\\"ALMIRANTE\\\">ADMIRAL</button> </div> </li> <li class=\\\"options__item\\\"> <label class=\\\"label\\\" data-en=\\\"Game speed\\\" data-pt=\\\"Velocidade do jogo\\\">Game speed</label> <div class=\\\"options__selections\\\"> <button class=\\\"selection-button icon\\\" id=\\\"normal-game-speed\\\" value=\\\"0\\\" data-en=\\\"NORMAL\\\" data-pt=\\\"NORMAL\\\">NORMAL</button> <button class=\\\"selection-button icon\\\" id=\\\"fast-game-speed\\\" value=\\\"1\\\" data-en=\\\"FAST\\\" data-pt=\\\"RÁPIDO\\\">FAST</button> </div> </li> </ul> <footer class=\\\"small-frame footer | options__footer\\\"> <button class=\\\"main-button\\\" id=\\\"close-settings\\\" data-en=\\\"Close\\\" data-pt=\\\"Fechar\\\">Close</button> </footer> <button class=\\\"close-button close-button--big | options__close-alternate\\\" id=\\\"close-settings-x\\\">X</button> </div> </dialog>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://24-battleship/./src/html/components/settings-modal.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://24-battleship/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/buttons.css":
/*!********************************!*\
  !*** ./src/styles/buttons.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./buttons.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/buttons.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/buttons.css?");

/***/ }),

/***/ "./src/styles/dialogs.css":
/*!********************************!*\
  !*** ./src/styles/dialogs.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialogs_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dialogs.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/dialogs.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialogs_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialogs_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_dialogs_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_dialogs_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/dialogs.css?");

/***/ }),

/***/ "./src/styles/main-menu.css":
/*!**********************************!*\
  !*** ./src/styles/main-menu.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main-menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main-menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/main-menu.css?");

/***/ }),

/***/ "./src/styles/options.css":
/*!********************************!*\
  !*** ./src/styles/options.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./options.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/options.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/options.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://24-battleship/./src/styles/style.css?");

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

/***/ "./src/assets/audio/music/battle-ship-short-version-1-hot-dope.mp3":
/*!*************************************************************************!*\
  !*** ./src/assets/audio/music/battle-ship-short-version-1-hot-dope.mp3 ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/battle-ship-short-version-1-hot-dope.mp3\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/music/battle-ship-short-version-1-hot-dope.mp3?");

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

/***/ "./src/assets/audio/music/epic-benjamin-tissot.mp3":
/*!*********************************************************!*\
  !*** ./src/assets/audio/music/epic-benjamin-tissot.mp3 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/epic-benjamin-tissot.mp3\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/music/epic-benjamin-tissot.mp3?");

/***/ }),

/***/ "./src/assets/audio/music/fearsome-tipsy-pirates-mikhail-smusev.mp3":
/*!**************************************************************************!*\
  !*** ./src/assets/audio/music/fearsome-tipsy-pirates-mikhail-smusev.mp3 ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/fearsome-tipsy-pirates-mikhail-smusev.mp3\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/audio/music/fearsome-tipsy-pirates-mikhail-smusev.mp3?");

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

/***/ "./src/assets/backgrounds/battle-bg.jpg":
/*!**********************************************!*\
  !*** ./src/assets/backgrounds/battle-bg.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/battle-bg.dcfe04c195a1869b4af8.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/backgrounds/battle-bg.jpg?");

/***/ }),

/***/ "./src/assets/backgrounds/propeller1.png":
/*!***********************************************!*\
  !*** ./src/assets/backgrounds/propeller1.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/propeller1.407f42164cbfa820c0c4.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/backgrounds/propeller1.png?");

/***/ }),

/***/ "./src/assets/backgrounds/propeller2.png":
/*!***********************************************!*\
  !*** ./src/assets/backgrounds/propeller2.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/propeller2.20db5dce4e3cf501ca43.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/backgrounds/propeller2.png?");

/***/ }),

/***/ "./src/assets/backgrounds/propeller3.png":
/*!***********************************************!*\
  !*** ./src/assets/backgrounds/propeller3.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/propeller3.dc97522e32ca35179a86.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/backgrounds/propeller3.png?");

/***/ }),

/***/ "./src/assets/backgrounds/set-up-bg.jpg":
/*!**********************************************!*\
  !*** ./src/assets/backgrounds/set-up-bg.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/set-up-bg.91ec04f4eeba3341b0e9.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/backgrounds/set-up-bg.jpg?");

/***/ }),

/***/ "./src/assets/backgrounds/sky.jpg":
/*!****************************************!*\
  !*** ./src/assets/backgrounds/sky.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/sky.eac21dbc839be2b6afaa.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/backgrounds/sky.jpg?");

/***/ }),

/***/ "./src/assets/explosions/splash1.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash1.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash1.bad47b7fff4a612907a5.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash1.png?");

/***/ }),

/***/ "./src/assets/explosions/splash10.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash10.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash10.7970b0358a045044daae.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash10.png?");

/***/ }),

/***/ "./src/assets/explosions/splash11.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash11.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash11.3f5fb9dc168856837230.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash11.png?");

/***/ }),

/***/ "./src/assets/explosions/splash12.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash12.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash12.e627ddc99ac7657cb3c6.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash12.png?");

/***/ }),

/***/ "./src/assets/explosions/splash13.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash13.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash13.67fd35cdc077bca23718.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash13.png?");

/***/ }),

/***/ "./src/assets/explosions/splash14.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash14.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash14.67e9adaa3cfd2b0685d6.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash14.png?");

/***/ }),

/***/ "./src/assets/explosions/splash15.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash15.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash15.5cac329ef7c80e650a00.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash15.png?");

/***/ }),

/***/ "./src/assets/explosions/splash16.png":
/*!********************************************!*\
  !*** ./src/assets/explosions/splash16.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash16.c4b63a61283d3601a602.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash16.png?");

/***/ }),

/***/ "./src/assets/explosions/splash2.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash2.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash2.fdb42138b21face1eaac.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash2.png?");

/***/ }),

/***/ "./src/assets/explosions/splash3.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash3.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash3.dfd254d7e93883492d3d.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash3.png?");

/***/ }),

/***/ "./src/assets/explosions/splash4.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash4.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash4.d14762227aa5b4962b0b.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash4.png?");

/***/ }),

/***/ "./src/assets/explosions/splash5.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash5.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash5.f30b0fc50b5f09ac6044.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash5.png?");

/***/ }),

/***/ "./src/assets/explosions/splash6.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash6.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash6.b44076dcf61e73c16aec.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash6.png?");

/***/ }),

/***/ "./src/assets/explosions/splash7.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash7.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash7.3d020a64bfe04ddc89aa.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash7.png?");

/***/ }),

/***/ "./src/assets/explosions/splash8.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash8.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash8.2616fb88f706d08821e7.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash8.png?");

/***/ }),

/***/ "./src/assets/explosions/splash9.png":
/*!*******************************************!*\
  !*** ./src/assets/explosions/splash9.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/splash9.57ab595b3f205f8f0d91.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/splash9.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion1.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion1.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion1.6add52f7275a152f78d7.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion1.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion10.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion10.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion10.78ac793df964e5807e25.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion10.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion11.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion11.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion11.16bc801737c0a21042ea.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion11.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion12.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion12.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion12.65d31d49adede8709ea3.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion12.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion13.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion13.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion13.a61b4bd1c85851189476.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion13.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion14.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion14.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion14.c6700b437421795607fc.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion14.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion15.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion15.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion15.33db3e8b13cd9f214ded.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion15.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion16.png":
/*!******************************************************!*\
  !*** ./src/assets/explosions/square_explosion16.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion16.59d4a123062a5d010bfb.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion16.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion2.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion2.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion2.b4f87d9adfe4e7728c7a.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion2.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion3.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion3.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion3.823100f2d198e4c28654.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion3.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion4.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion4.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion4.437c952fa2ad0619a68a.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion4.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion5.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion5.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion5.4b434521fbce857a5471.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion5.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion6.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion6.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion6.61861ec0537713f08d18.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion6.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion7.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion7.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion7.93c52a71c1a63acee698.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion7.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion8.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion8.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion8.e0f651cb0b5c9300a6df.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion8.png?");

/***/ }),

/***/ "./src/assets/explosions/square_explosion9.png":
/*!*****************************************************!*\
  !*** ./src/assets/explosions/square_explosion9.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/square_explosion9.8e56c4381877cd5a73e9.png\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/explosions/square_explosion9.png?");

/***/ }),

/***/ "./src/assets/icons/flag-brazil.jpg":
/*!******************************************!*\
  !*** ./src/assets/icons/flag-brazil.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/flag-brazil.e0a231a5d15dbbf6f756.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/icons/flag-brazil.jpg?");

/***/ }),

/***/ "./src/assets/icons/flag-united-kingdom.jpg":
/*!**************************************************!*\
  !*** ./src/assets/icons/flag-united-kingdom.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/flag-united-kingdom.625329165ff2133e76f8.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/icons/flag-united-kingdom.jpg?");

/***/ }),

/***/ "./src/scripts/helpers/animations.js":
/*!*******************************************!*\
  !*** ./src/scripts/helpers/animations.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Animation)\n/* harmony export */ });\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ \"./src/scripts/helpers/settings.js\");\n/* harmony import */ var _assets_explosions_square_explosion1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/explosions/square_explosion1.png */ \"./src/assets/explosions/square_explosion1.png\");\n/* harmony import */ var _assets_explosions_square_explosion2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/explosions/square_explosion2.png */ \"./src/assets/explosions/square_explosion2.png\");\n/* harmony import */ var _assets_explosions_square_explosion3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/explosions/square_explosion3.png */ \"./src/assets/explosions/square_explosion3.png\");\n/* harmony import */ var _assets_explosions_square_explosion4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/explosions/square_explosion4.png */ \"./src/assets/explosions/square_explosion4.png\");\n/* harmony import */ var _assets_explosions_square_explosion5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/explosions/square_explosion5.png */ \"./src/assets/explosions/square_explosion5.png\");\n/* harmony import */ var _assets_explosions_square_explosion6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/explosions/square_explosion6.png */ \"./src/assets/explosions/square_explosion6.png\");\n/* harmony import */ var _assets_explosions_square_explosion7_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/explosions/square_explosion7.png */ \"./src/assets/explosions/square_explosion7.png\");\n/* harmony import */ var _assets_explosions_square_explosion8_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/explosions/square_explosion8.png */ \"./src/assets/explosions/square_explosion8.png\");\n/* harmony import */ var _assets_explosions_square_explosion9_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/explosions/square_explosion9.png */ \"./src/assets/explosions/square_explosion9.png\");\n/* harmony import */ var _assets_explosions_square_explosion10_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/explosions/square_explosion10.png */ \"./src/assets/explosions/square_explosion10.png\");\n/* harmony import */ var _assets_explosions_square_explosion11_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/explosions/square_explosion11.png */ \"./src/assets/explosions/square_explosion11.png\");\n/* harmony import */ var _assets_explosions_square_explosion12_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/explosions/square_explosion12.png */ \"./src/assets/explosions/square_explosion12.png\");\n/* harmony import */ var _assets_explosions_square_explosion13_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/explosions/square_explosion13.png */ \"./src/assets/explosions/square_explosion13.png\");\n/* harmony import */ var _assets_explosions_square_explosion14_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/explosions/square_explosion14.png */ \"./src/assets/explosions/square_explosion14.png\");\n/* harmony import */ var _assets_explosions_square_explosion15_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/explosions/square_explosion15.png */ \"./src/assets/explosions/square_explosion15.png\");\n/* harmony import */ var _assets_explosions_square_explosion16_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/explosions/square_explosion16.png */ \"./src/assets/explosions/square_explosion16.png\");\n/* harmony import */ var _assets_explosions_splash1_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/explosions/splash1.png */ \"./src/assets/explosions/splash1.png\");\n/* harmony import */ var _assets_explosions_splash2_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/explosions/splash2.png */ \"./src/assets/explosions/splash2.png\");\n/* harmony import */ var _assets_explosions_splash3_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/explosions/splash3.png */ \"./src/assets/explosions/splash3.png\");\n/* harmony import */ var _assets_explosions_splash4_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/explosions/splash4.png */ \"./src/assets/explosions/splash4.png\");\n/* harmony import */ var _assets_explosions_splash5_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/explosions/splash5.png */ \"./src/assets/explosions/splash5.png\");\n/* harmony import */ var _assets_explosions_splash6_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/explosions/splash6.png */ \"./src/assets/explosions/splash6.png\");\n/* harmony import */ var _assets_explosions_splash7_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/explosions/splash7.png */ \"./src/assets/explosions/splash7.png\");\n/* harmony import */ var _assets_explosions_splash8_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../assets/explosions/splash8.png */ \"./src/assets/explosions/splash8.png\");\n/* harmony import */ var _assets_explosions_splash9_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../assets/explosions/splash9.png */ \"./src/assets/explosions/splash9.png\");\n/* harmony import */ var _assets_explosions_splash10_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/explosions/splash10.png */ \"./src/assets/explosions/splash10.png\");\n/* harmony import */ var _assets_explosions_splash11_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/explosions/splash11.png */ \"./src/assets/explosions/splash11.png\");\n/* harmony import */ var _assets_explosions_splash12_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assets/explosions/splash12.png */ \"./src/assets/explosions/splash12.png\");\n/* harmony import */ var _assets_explosions_splash13_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../assets/explosions/splash13.png */ \"./src/assets/explosions/splash13.png\");\n/* harmony import */ var _assets_explosions_splash14_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../assets/explosions/splash14.png */ \"./src/assets/explosions/splash14.png\");\n/* harmony import */ var _assets_explosions_splash15_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../assets/explosions/splash15.png */ \"./src/assets/explosions/splash15.png\");\n/* harmony import */ var _assets_explosions_splash16_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../assets/explosions/splash16.png */ \"./src/assets/explosions/splash16.png\");\n/* harmony import */ var _assets_backgrounds_propeller1_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../assets/backgrounds/propeller1.png */ \"./src/assets/backgrounds/propeller1.png\");\n/* harmony import */ var _assets_backgrounds_propeller2_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../assets/backgrounds/propeller2.png */ \"./src/assets/backgrounds/propeller2.png\");\n/* harmony import */ var _assets_backgrounds_propeller3_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../assets/backgrounds/propeller3.png */ \"./src/assets/backgrounds/propeller3.png\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Animation = /*#__PURE__*/function () {\n  function Animation() {\n    _classCallCheck(this, Animation);\n  }\n  _createClass(Animation, null, [{\n    key: \"displayQuote\",\n    value: function displayQuote(html, quote) {\n      if (Animation.quoteTimer) {\n        clearTimeout(Animation.quoteTimer);\n      }\n      html.textContent = '';\n      var i = 0;\n      var displayNextChar = function displayNextChar() {\n        if (i < quote.length) {\n          html.textContent += quote[i];\n          i++;\n          Animation.quoteTimer = setTimeout(displayNextChar, _settings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameSpeed().typing);\n        }\n      };\n      displayNextChar();\n    }\n  }, {\n    key: \"displayReaction\",\n    value: function displayReaction(html, quote, photo) {\n      var wrapper = document.querySelector('#reaction-wrapper');\n      var characterPhoto = document.querySelector('#character-photo');\n      Animation.activeReactions++;\n      characterPhoto.src = photo;\n      wrapper.style.transitionDuration = \"\".concat(_settings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameSpeed().reactionWrapperSlide, \"ms\");\n      wrapper.classList.add('entra');\n      characterPhoto.classList.add('entra');\n      Animation.displayQuote(html, quote);\n      setTimeout(function () {\n        if (Animation.activeReactions <= 1) {\n          wrapper.classList.remove('entra');\n          characterPhoto.classList.remove('entra');\n        }\n        Animation.activeReactions--;\n      }, _settings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameSpeed().reactionSpan);\n    }\n  }, {\n    key: \"displayExplosion\",\n    value: function displayExplosion(square) {\n      var explosion = document.createElement('img');\n      explosion.classList = 'explosion';\n      square.appendChild(explosion);\n      var _loop = function _loop(i) {\n        setTimeout(function () {\n          explosion.src = \"\".concat(Animation.explosion[i]);\n        }, 50 * i);\n      };\n      for (var i = 0; i < Animation.explosion.length; i++) {\n        _loop(i);\n      }\n      setTimeout(function () {\n        square.removeChild(explosion);\n      }, 50 * Animation.explosion.length);\n    }\n  }, {\n    key: \"displaySplash\",\n    value: function displaySplash(square) {\n      var explosion = document.createElement('img');\n      explosion.classList = 'explosion';\n      square.appendChild(explosion);\n      var _loop2 = function _loop2(i) {\n        setTimeout(function () {\n          explosion.src = \"\".concat(Animation.splash[i]);\n        }, 50 * i);\n      };\n      for (var i = 0; i < Animation.splash.length; i++) {\n        _loop2(i);\n      }\n      setTimeout(function () {\n        square.removeChild(explosion);\n      }, 50 * Animation.splash.length);\n    }\n  }, {\n    key: \"shake\",\n    value: function shake(html) {\n      html.classList.add('shake');\n      setTimeout(function () {\n        html.classList.remove('shake');\n      }, 500);\n    }\n  }, {\n    key: \"rotatePropeller\",\n    value: function rotatePropeller(propeller) {\n      var index = 0;\n      function changePropellerSrc() {\n        propeller.src = Animation.propellers[index];\n        index = (index + 1) % Animation.propellers.length;\n      }\n      setInterval(changePropellerSrc, 100);\n    }\n  }, {\n    key: \"moveSea\",\n    value: function moveSea() {\n      var seaMove1 = document.querySelector('#sea-move1');\n      var seaMove2 = document.querySelector('#sea-move2');\n      function changeSeaOpacity() {\n        setTimeout(function () {\n          seaMove1.style.opacity = 0;\n          seaMove2.style.opacity = 0;\n        }, 300);\n        setTimeout(function () {\n          return seaMove1.style.opacity = 1;\n        }, 600);\n        setTimeout(function () {\n          return seaMove2.style.opacity = 1;\n        }, 900);\n      }\n      changeSeaOpacity();\n      setInterval(changeSeaOpacity, 900);\n    }\n  }]);\n  return Animation;\n}();\n_defineProperty(Animation, \"explosion\", [_assets_explosions_square_explosion1_png__WEBPACK_IMPORTED_MODULE_1__, _assets_explosions_square_explosion2_png__WEBPACK_IMPORTED_MODULE_2__, _assets_explosions_square_explosion3_png__WEBPACK_IMPORTED_MODULE_3__, _assets_explosions_square_explosion4_png__WEBPACK_IMPORTED_MODULE_4__, _assets_explosions_square_explosion5_png__WEBPACK_IMPORTED_MODULE_5__, _assets_explosions_square_explosion6_png__WEBPACK_IMPORTED_MODULE_6__, _assets_explosions_square_explosion7_png__WEBPACK_IMPORTED_MODULE_7__, _assets_explosions_square_explosion8_png__WEBPACK_IMPORTED_MODULE_8__, _assets_explosions_square_explosion9_png__WEBPACK_IMPORTED_MODULE_9__, _assets_explosions_square_explosion10_png__WEBPACK_IMPORTED_MODULE_10__, _assets_explosions_square_explosion11_png__WEBPACK_IMPORTED_MODULE_11__, _assets_explosions_square_explosion12_png__WEBPACK_IMPORTED_MODULE_12__, _assets_explosions_square_explosion13_png__WEBPACK_IMPORTED_MODULE_13__, _assets_explosions_square_explosion14_png__WEBPACK_IMPORTED_MODULE_14__, _assets_explosions_square_explosion15_png__WEBPACK_IMPORTED_MODULE_15__, _assets_explosions_square_explosion16_png__WEBPACK_IMPORTED_MODULE_16__]);\n_defineProperty(Animation, \"splash\", [_assets_explosions_splash1_png__WEBPACK_IMPORTED_MODULE_17__, _assets_explosions_splash2_png__WEBPACK_IMPORTED_MODULE_18__, _assets_explosions_splash3_png__WEBPACK_IMPORTED_MODULE_19__, _assets_explosions_splash4_png__WEBPACK_IMPORTED_MODULE_20__, _assets_explosions_splash5_png__WEBPACK_IMPORTED_MODULE_21__, _assets_explosions_splash6_png__WEBPACK_IMPORTED_MODULE_22__, _assets_explosions_splash7_png__WEBPACK_IMPORTED_MODULE_23__, _assets_explosions_splash8_png__WEBPACK_IMPORTED_MODULE_24__, _assets_explosions_splash9_png__WEBPACK_IMPORTED_MODULE_25__, _assets_explosions_splash10_png__WEBPACK_IMPORTED_MODULE_26__, _assets_explosions_splash11_png__WEBPACK_IMPORTED_MODULE_27__, _assets_explosions_splash12_png__WEBPACK_IMPORTED_MODULE_28__, _assets_explosions_splash13_png__WEBPACK_IMPORTED_MODULE_29__, _assets_explosions_splash14_png__WEBPACK_IMPORTED_MODULE_30__, _assets_explosions_splash15_png__WEBPACK_IMPORTED_MODULE_31__, _assets_explosions_splash16_png__WEBPACK_IMPORTED_MODULE_32__]);\n_defineProperty(Animation, \"propellers\", [_assets_backgrounds_propeller1_png__WEBPACK_IMPORTED_MODULE_33__, _assets_backgrounds_propeller2_png__WEBPACK_IMPORTED_MODULE_34__, _assets_backgrounds_propeller3_png__WEBPACK_IMPORTED_MODULE_35__]);\n_defineProperty(Animation, \"quoteTimer\", null);\n_defineProperty(Animation, \"activeReactions\", 0);\n\n\n//# sourceURL=webpack://24-battleship/./src/scripts/helpers/animations.js?");

/***/ }),

/***/ "./src/scripts/helpers/audio.js":
/*!**************************************!*\
  !*** ./src/scripts/helpers/audio.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameAudio)\n/* harmony export */ });\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ \"./src/scripts/helpers/settings.js\");\n/* harmony import */ var _assets_audio_sfx_miss1_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/audio/sfx/miss1.ogg */ \"./src/assets/audio/sfx/miss1.ogg\");\n/* harmony import */ var _assets_audio_sfx_miss2_ogg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/audio/sfx/miss2.ogg */ \"./src/assets/audio/sfx/miss2.ogg\");\n/* harmony import */ var _assets_audio_sfx_miss3_ogg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/audio/sfx/miss3.ogg */ \"./src/assets/audio/sfx/miss3.ogg\");\n/* harmony import */ var _assets_audio_sfx_hit1_ogg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/audio/sfx/hit1.ogg */ \"./src/assets/audio/sfx/hit1.ogg\");\n/* harmony import */ var _assets_audio_sfx_hit2_ogg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/audio/sfx/hit2.ogg */ \"./src/assets/audio/sfx/hit2.ogg\");\n/* harmony import */ var _assets_audio_sfx_hit3_ogg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/audio/sfx/hit3.ogg */ \"./src/assets/audio/sfx/hit3.ogg\");\n/* harmony import */ var _assets_audio_sfx_sink1_ogg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/audio/sfx/sink1.ogg */ \"./src/assets/audio/sfx/sink1.ogg\");\n/* harmony import */ var _assets_audio_sfx_sink2_ogg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/audio/sfx/sink2.ogg */ \"./src/assets/audio/sfx/sink2.ogg\");\n/* harmony import */ var _assets_audio_sfx_last_sink_ogg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/audio/sfx/last-sink.ogg */ \"./src/assets/audio/sfx/last-sink.ogg\");\n/* harmony import */ var _assets_audio_sfx_radar_lock_ogg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/audio/sfx/radar-lock.ogg */ \"./src/assets/audio/sfx/radar-lock.ogg\");\n/* harmony import */ var _assets_audio_sfx_missile_alert_ogg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/audio/sfx/missile-alert.ogg */ \"./src/assets/audio/sfx/missile-alert.ogg\");\n/* harmony import */ var _assets_audio_music_battle_ship_short_version_1_hot_dope_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/audio/music/battle-ship-short-version-1-hot-dope.mp3 */ \"./src/assets/audio/music/battle-ship-short-version-1-hot-dope.mp3\");\n/* harmony import */ var _assets_audio_music_epic_benjamin_tissot_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/audio/music/epic-benjamin-tissot.mp3 */ \"./src/assets/audio/music/epic-benjamin-tissot.mp3\");\n/* harmony import */ var _assets_audio_music_fearsome_tipsy_pirates_mikhail_smusev_mp3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/audio/music/fearsome-tipsy-pirates-mikhail-smusev.mp3 */ \"./src/assets/audio/music/fearsome-tipsy-pirates-mikhail-smusev.mp3\");\n/* harmony import */ var _assets_audio_music_dance_of_devils_giulio_fazio_mp3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/audio/music/dance-of-devils-giulio-fazio.mp3 */ \"./src/assets/audio/music/dance-of-devils-giulio-fazio.mp3\");\n/* harmony import */ var _assets_audio_music_corsairs_studio_kolomna_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/audio/music/corsairs-studio-kolomna.mp3 */ \"./src/assets/audio/music/corsairs-studio-kolomna.mp3\");\n/* harmony import */ var _assets_audio_music_no_time_to_die_hartzmann_mp3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/audio/music/no-time-to-die-hartzmann.mp3 */ \"./src/assets/audio/music/no-time-to-die-hartzmann.mp3\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n// SFX\n\n\n\n\n\n\n\n\n\n\n\n\n// MUSIC\n\n\n\n\n\n\nvar GameAudio = /*#__PURE__*/function () {\n  function GameAudio() {\n    _classCallCheck(this, GameAudio);\n  }\n  _createClass(GameAudio, null, [{\n    key: \"playSfx\",\n    value: function playSfx(category) {\n      var random = Math.floor(Math.random() * category.length);\n      var audio = new Audio(category[random]);\n      audio.volume = parseFloat(localStorage.getItem('sfx-vol'));\n      GameAudio.play(audio);\n    }\n  }, {\n    key: \"playRadarLockInfiniteLoop\",\n    value: function playRadarLockInfiniteLoop(action) {\n      if (action === 'start') {\n        GameAudio.isRadarLockAudioPlaying = true;\n        GameAudio.radarLockInterval = setInterval(function () {\n          if (!GameAudio.radarLockAudio) {\n            GameAudio.radarLockAudio = new Audio(GameAudio.radarLock[0]);\n          }\n          GameAudio.radarLockAudio.volume = parseFloat(localStorage.getItem('sfx-vol'));\n          GameAudio.play(GameAudio.radarLockAudio);\n        }, 1500);\n      } else if (action === 'stop') {\n        GameAudio.isRadarLockAudioPlaying = false;\n        setTimeout(function () {\n          clearInterval(GameAudio.radarLockInterval);\n          if (GameAudio.radarLockAudio) {\n            GameAudio.radarLockAudio.pause();\n            GameAudio.radarLockAudio.currentTime = 0;\n          }\n        }, _settings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameSpeed().sinkRoundDelay);\n      }\n    }\n  }, {\n    key: \"playMissileAlert\",\n    value: function playMissileAlert(category) {\n      var audio = new Audio(category[0]);\n      audio.volume = parseFloat(localStorage.getItem('sfx-vol'));\n      GameAudio.play(audio);\n      setTimeout(function () {\n        audio.muted = true;\n      }, _settings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameSpeed().missileAlertCut);\n    }\n  }, {\n    key: \"playMusic\",\n    value: function playMusic(category) {\n      GameAudio.currentSong.addEventListener('ended', function () {\n        GameAudio.currentSongIndex++;\n        if (GameAudio.currentSongIndex >= category.length) {\n          GameAudio.currentSongIndex = 0;\n        }\n        GameAudio.currentSong.src = category[GameAudio.currentSongIndex];\n        // GameAudio.currentSong.muted = false;\n        GameAudio.play(GameAudio.currentSong);\n      });\n      GameAudio.currentSong.src = category[0];\n      GameAudio.currentSong.volume = parseFloat(localStorage.getItem('music-vol'));\n      GameAudio.play(GameAudio.currentSong);\n    }\n  }, {\n    key: \"setMusicVolume\",\n    value: function setMusicVolume(volume) {\n      GameAudio.musicVolume = volume;\n      if (GameAudio.currentSong) {\n        GameAudio.currentSong.volume = volume;\n      }\n    }\n  }, {\n    key: \"liberate\",\n    value: function liberate() {\n      GameAudio.enable = true;\n      GameAudio.queue.forEach(function (audio) {\n        return audio.play();\n      });\n    }\n  }, {\n    key: \"play\",\n    value: function play(audio) {\n      if (GameAudio.enable) {\n        audio.play();\n      } else {\n        GameAudio.queue.push(audio);\n      }\n    }\n  }]);\n  return GameAudio;\n}();\n_defineProperty(GameAudio, \"enable\", false);\n_defineProperty(GameAudio, \"queue\", []);\n_defineProperty(GameAudio, \"miss\", [_assets_audio_sfx_miss1_ogg__WEBPACK_IMPORTED_MODULE_1__, _assets_audio_sfx_miss2_ogg__WEBPACK_IMPORTED_MODULE_2__, _assets_audio_sfx_miss3_ogg__WEBPACK_IMPORTED_MODULE_3__]);\n_defineProperty(GameAudio, \"hit\", [_assets_audio_sfx_hit1_ogg__WEBPACK_IMPORTED_MODULE_4__, _assets_audio_sfx_hit2_ogg__WEBPACK_IMPORTED_MODULE_5__, _assets_audio_sfx_hit3_ogg__WEBPACK_IMPORTED_MODULE_6__]);\n_defineProperty(GameAudio, \"sink\", [_assets_audio_sfx_sink1_ogg__WEBPACK_IMPORTED_MODULE_7__, _assets_audio_sfx_sink2_ogg__WEBPACK_IMPORTED_MODULE_8__]);\n_defineProperty(GameAudio, \"lastSink\", [_assets_audio_sfx_last_sink_ogg__WEBPACK_IMPORTED_MODULE_9__]);\n_defineProperty(GameAudio, \"radarLock\", [_assets_audio_sfx_radar_lock_ogg__WEBPACK_IMPORTED_MODULE_10__]);\n_defineProperty(GameAudio, \"missileAlert\", [_assets_audio_sfx_missile_alert_ogg__WEBPACK_IMPORTED_MODULE_11__]);\n_defineProperty(GameAudio, \"mainMenu\", [_assets_audio_music_battle_ship_short_version_1_hot_dope_mp3__WEBPACK_IMPORTED_MODULE_12__]);\n_defineProperty(GameAudio, \"characterSelection\", [_assets_audio_music_epic_benjamin_tissot_mp3__WEBPACK_IMPORTED_MODULE_13__]);\n_defineProperty(GameAudio, \"strategyRoom\", [_assets_audio_music_fearsome_tipsy_pirates_mikhail_smusev_mp3__WEBPACK_IMPORTED_MODULE_14__]);\n_defineProperty(GameAudio, \"battle\", [_assets_audio_music_dance_of_devils_giulio_fazio_mp3__WEBPACK_IMPORTED_MODULE_15__, _assets_audio_music_corsairs_studio_kolomna_mp3__WEBPACK_IMPORTED_MODULE_16__, _assets_audio_music_fearsome_tipsy_pirates_mikhail_smusev_mp3__WEBPACK_IMPORTED_MODULE_14__, _assets_audio_music_epic_benjamin_tissot_mp3__WEBPACK_IMPORTED_MODULE_13__]);\n_defineProperty(GameAudio, \"radarLockInterval\", void 0);\n_defineProperty(GameAudio, \"radarLockAudio\", void 0);\n_defineProperty(GameAudio, \"isRadarLockAudioPlaying\", false);\n_defineProperty(GameAudio, \"currentSongIndex\", 0);\n_defineProperty(GameAudio, \"currentSong\", new Audio());\n_defineProperty(GameAudio, \"musicVolume\", 1);\n\n\n//# sourceURL=webpack://24-battleship/./src/scripts/helpers/audio.js?");

/***/ }),

/***/ "./src/scripts/helpers/navigation.js":
/*!*******************************************!*\
  !*** ./src/scripts/helpers/navigation.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var _html_components_confirm_nav_modal_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/components/confirm-nav-modal.html */ \"./src/html/components/confirm-nav-modal.html\");\n/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save.js */ \"./src/scripts/helpers/save.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ \"./src/scripts/helpers/settings.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\ndocument.querySelector('#content').innerHTML += _html_components_confirm_nav_modal_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\nvar Navigation = /*#__PURE__*/function () {\n  function Navigation() {\n    _classCallCheck(this, Navigation);\n  }\n  _createClass(Navigation, null, [{\n    key: \"queryElements\",\n    value: function queryElements() {\n      Navigation.navBtn = document.querySelector('#navigate');\n      Navigation.navMenu = document.querySelector('#nav-menu');\n      Navigation.navBattle = document.querySelector('#nav-battle');\n      Navigation.navCharacterSelection = document.querySelector('#nav-character-selection');\n      Navigation.navStrategyRoom = document.querySelector('#nav-strategy-room');\n      Navigation.navMainMenu = document.querySelector('#nav-main-menu');\n      Navigation.confirmNavModal = document.querySelector('#confirm-nav-modal');\n      Navigation.confirmNavPrompt = document.querySelector('#prompt');\n      Navigation.yes = document.querySelector('#yes');\n      Navigation.no = document.querySelector('#no');\n    }\n  }, {\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      Navigation.navBtn.addEventListener('click', Navigation.openNavigation);\n      document.addEventListener('click', function (e) {\n        return Navigation.closeNavigation(e);\n      });\n      Navigation.navBattle.addEventListener('click', Navigation.reloadBattle);\n      Navigation.navCharacterSelection.addEventListener('click', Navigation.backToCharacterSelection);\n      Navigation.navStrategyRoom.addEventListener('click', Navigation.backToStrategyRoom);\n      Navigation.navMainMenu.addEventListener('click', Navigation.toMainMenu);\n    }\n  }, {\n    key: \"openNavigation\",\n    value: function openNavigation() {\n      Navigation.navMenu.classList.toggle('opened');\n    }\n  }, {\n    key: \"closeNavigation\",\n    value: function closeNavigation(e) {\n      if (!e.target.closest('#navigate')) {\n        Navigation.navMenu.classList.remove('opened');\n      }\n    }\n  }, {\n    key: \"confirmNavigation\",\n    value: function confirmNavigation(message_EN, message_PT, yesBtn_EN, yesBtn_PT, noBtn_EN, noBtn_PT, destiny) {\n      Navigation.confirmNavPrompt.setAttribute('data-en', message_EN);\n      Navigation.confirmNavPrompt.setAttribute('data-pt', message_PT);\n      Navigation.yes.setAttribute('data-en', yesBtn_EN);\n      Navigation.yes.setAttribute('data-pt', yesBtn_PT);\n      Navigation.no.setAttribute('data-en', noBtn_EN);\n      Navigation.no.setAttribute('data-pt', noBtn_PT);\n      _settings_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadLanguageSettings();\n      Navigation.confirmNavModal.classList.add('opened');\n      Navigation.confirmNavModal.showModal();\n      Navigation.no.addEventListener('click', function () {\n        Navigation.confirmNavModal.classList.remove('opened');\n        Navigation.confirmNavModal.close();\n      });\n      Navigation.yes.addEventListener('click', function () {\n        Navigation.confirmNavModal.classList.remove('opened');\n        Navigation.confirmNavModal.close();\n        _save_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteSavedGameData();\n        window.location.href = destiny;\n      });\n    }\n  }, {\n    key: \"toMainMenu\",\n    value: function toMainMenu() {\n      window.location.href = 'index.html';\n    }\n  }, {\n    key: \"toCharacterSelection\",\n    value: function toCharacterSelection() {\n      document.querySelector('.menu-bg').classList.add('transition');\n      setTimeout(function () {\n        window.location.href = 'character-selection.html';\n      }, 1000);\n    }\n  }, {\n    key: \"backToCharacterSelection\",\n    value: function backToCharacterSelection() {\n      var message_EN = 'Are you sure you want to go back to the character selection? All progress will be lost.';\n      var message_PT = 'Tem certeza que deseja voltar para a seleção de personagens? Todo o progresso será perdido.';\n      var yesBtn_EN = 'Yes, go back';\n      var yesBtn_PT = 'Sim, voltar';\n      var noBtn_EN = 'No, stay';\n      var noBtn_PT = 'Não, ficar';\n      var destiny = 'character-selection.html';\n      Navigation.confirmNavigation(message_EN, message_PT, yesBtn_EN, yesBtn_PT, noBtn_EN, noBtn_PT, destiny);\n    }\n  }, {\n    key: \"toStrategyRoom\",\n    value: function toStrategyRoom() {\n      window.location.href = 'strategy-room.html';\n    }\n  }, {\n    key: \"backToStrategyRoom\",\n    value: function backToStrategyRoom() {\n      var message_EN = 'Are you sure you want to go back to the strategy room? All progress will be lost.';\n      var message_PT = 'Tem certeza que deseja voltar para a sala de estratégia? Todo o progresso será perdido.';\n      var yesBtn_EN = 'Yes, go back';\n      var yesBtn_PT = 'Sim, voltar';\n      var noBtn_EN = 'No, stay';\n      var noBtn_PT = 'Não, ficar';\n      var destiny = 'strategy-room.html';\n      Navigation.confirmNavigation(message_EN, message_PT, yesBtn_EN, yesBtn_PT, noBtn_EN, noBtn_PT, destiny);\n    }\n  }, {\n    key: \"toBattle\",\n    value: function toBattle() {\n      window.location.href = 'battle.html';\n    }\n  }, {\n    key: \"reloadBattle\",\n    value: function reloadBattle() {\n      var message_EN = 'Are you sure you want to restart the battle?';\n      var message_PT = 'Tem certeza que deseja reiniciar a batalha?.';\n      var yesBtn_EN = 'Yes, restart';\n      var yesBtn_PT = 'Sim, reiniciar';\n      var noBtn_EN = 'No';\n      var noBtn_PT = 'Não';\n      var destiny = 'battle.html';\n      Navigation.confirmNavigation(message_EN, message_PT, yesBtn_EN, yesBtn_PT, noBtn_EN, noBtn_PT, destiny);\n    }\n  }, {\n    key: \"routeGuard\",\n    value: function routeGuard() {\n      var page = window.location.pathname;\n      var routeSafe = sessionStorage.getItem('route-safe') || 0;\n      var savedGame = localStorage.getItem('saved-game');\n      if (page === '/character-selection.html' && routeSafe < 1) {\n        Navigation.displayRouteError();\n      } else if (page === '/strategy-room.html' && routeSafe < 2) {\n        Navigation.displayRouteError();\n      } else if (page === '/battle.html' && routeSafe < 3 && !savedGame) {\n        Navigation.displayRouteError();\n      } else {\n        Navigation.displayLoader();\n      }\n    }\n  }, {\n    key: \"displayRouteError\",\n    value: function displayRouteError() {\n      window.location.href = 'index.html';\n      var lang = localStorage.getItem('lang');\n      if (lang === 'en') {\n        alert('Oops! Please complete the previous steps before accessing this page.');\n      } else if (lang === 'pt') {\n        alert('Ops! Por favor, complete as etapas anteriores antes de acessar esta página.');\n      }\n    }\n  }, {\n    key: \"displayLoader\",\n    value: function displayLoader() {\n      document.onreadystatechange = function () {\n        if (document.readyState === 'complete') {\n          setTimeout(function () {\n            document.querySelector('#content').classList.add('shown');\n            document.querySelector('#loader').classList.add('hidden');\n          }, 500);\n        }\n      };\n    }\n  }, {\n    key: \"loadScreen\",\n    value: function loadScreen() {\n      Navigation.routeGuard();\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      Navigation.queryElements();\n      Navigation.setEventListeners();\n    }\n  }]);\n  return Navigation;\n}();\n_defineProperty(Navigation, \"navBtn\", null);\n_defineProperty(Navigation, \"navMenu\", null);\n_defineProperty(Navigation, \"navBattle\", null);\n_defineProperty(Navigation, \"navCharacterSelection\", null);\n_defineProperty(Navigation, \"navStrategyRoom\", null);\n_defineProperty(Navigation, \"navMainMenu\", null);\n_defineProperty(Navigation, \"confirmNavModal\", null);\n_defineProperty(Navigation, \"confirmNavPrompt\", null);\n_defineProperty(Navigation, \"yes\", null);\n_defineProperty(Navigation, \"no\", null);\n\n\n//# sourceURL=webpack://24-battleship/./src/scripts/helpers/navigation.js?");

/***/ }),

/***/ "./src/scripts/helpers/save.js":
/*!*************************************!*\
  !*** ./src/scripts/helpers/save.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Save)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Save = /*#__PURE__*/function () {\n  function Save() {\n    _classCallCheck(this, Save);\n  }\n  _createClass(Save, null, [{\n    key: \"saveRound\",\n    value: function saveRound(player, attackedSquare, isRadarLockAlarmActive) {\n      var _Save$retrieveSavedGa;\n      var saveFile = (_Save$retrieveSavedGa = Save.retrieveSavedGameData()) !== null && _Save$retrieveSavedGa !== void 0 ? _Save$retrieveSavedGa : Save.saveFileTemplate;\n      saveFile.radarLock = isRadarLockAlarmActive;\n      if (player.type === 'human') {\n        saveFile.humanBoard.push(attackedSquare.coords);\n        saveFile.nextTurn = 'human';\n      } else {\n        saveFile.cpuBoard.push(attackedSquare.coords);\n        saveFile.cpuSequence = player.sequence;\n        saveFile.nextTurn = 'cpu';\n      }\n      localStorage.setItem('saved-game', JSON.stringify(saveFile));\n    }\n  }, {\n    key: \"retrieveSavedGameData\",\n    value: function retrieveSavedGameData() {\n      var data = localStorage.getItem('saved-game');\n      if (data !== 'undefined') {\n        return JSON.parse(data);\n      }\n    }\n  }, {\n    key: \"deleteSavedGameData\",\n    value: function deleteSavedGameData() {\n      localStorage.removeItem('saved-game');\n    }\n  }]);\n  return Save;\n}();\n_defineProperty(Save, \"saveFileTemplate\", {\n  humanBoard: [],\n  cpuBoard: [],\n  nextTurn: null,\n  cpuShipsPositions: []\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/scripts/helpers/save.js?");

/***/ }),

/***/ "./src/scripts/helpers/settings.js":
/*!*****************************************!*\
  !*** ./src/scripts/helpers/settings.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Settings)\n/* harmony export */ });\n/* harmony import */ var _html_components_settings_modal_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/components/settings-modal.html */ \"./src/html/components/settings-modal.html\");\n/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio.js */ \"./src/scripts/helpers/audio.js\");\n/* harmony import */ var _speed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speed.js */ \"./src/scripts/helpers/speed.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\ndocument.querySelector('#content').innerHTML += _html_components_settings_modal_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\nvar Settings = /*#__PURE__*/function () {\n  function Settings() {\n    _classCallCheck(this, Settings);\n  }\n  _createClass(Settings, null, [{\n    key: \"queryElements\",\n    value: function queryElements() {\n      Settings.settingsButton = document.querySelector('#settings');\n      Settings.closeSettings = document.querySelector('#close-settings');\n      Settings.settingsModal = document.querySelector('#settings-modal');\n      Settings.langOptions = document.querySelectorAll('.language-radio');\n      Settings.speedOptions = document.querySelectorAll('[id$=\"game-speed\"]');\n      Settings.difficultyOptions = document.querySelectorAll('.difficulty-option');\n      Settings.musicVolumeSlider = document.querySelector('#music-volume-slider');\n      Settings.sfxVolumeSlider = document.querySelector('#sfx-volume-slider');\n    }\n  }, {\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      Settings.settingsButton.addEventListener('click', Settings.openSettingsModal);\n      Settings.closeSettings.addEventListener('click', Settings.closeSettingsModal);\n      Settings.langOptions.forEach(function (option) {\n        return option.addEventListener('change', function (e) {\n          Settings.setLanguage(e.target);\n        });\n      });\n      Settings.speedOptions.forEach(function (option) {\n        return option.addEventListener('click', function (e) {\n          Settings.setGameSpeed(e.target.value);\n        });\n      });\n      Settings.difficultyOptions.forEach(function (option) {\n        return option.addEventListener('click', function (e) {\n          if (document.querySelector('[data-content=\"battle\"]')) return;\n          Settings.setDifficulty(e.target.value);\n        });\n      });\n      Settings.musicVolumeSlider.addEventListener('change', function (e) {\n        Settings.setMusicVolume(parseFloat(e.target.value));\n      });\n      Settings.sfxVolumeSlider.addEventListener('change', function (e) {\n        Settings.setSfxVolume(parseFloat(e.target.value));\n      });\n    }\n  }, {\n    key: \"openSettingsModal\",\n    value: function openSettingsModal() {\n      Settings.settingsModal.classList.add('opened');\n      Settings.settingsModal.showModal();\n    }\n  }, {\n    key: \"closeSettingsModal\",\n    value: function closeSettingsModal() {\n      Settings.settingsModal.classList.remove('opened');\n      Settings.settingsModal.close();\n    }\n  }, {\n    key: \"setLanguage\",\n    value: function setLanguage(input) {\n      localStorage.setItem('lang', input.value);\n      Settings.loadLanguageSettings();\n    }\n  }, {\n    key: \"setMusicVolume\",\n    value: function setMusicVolume(volume) {\n      localStorage.setItem('music-vol', volume);\n      _audio_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setMusicVolume(volume);\n      Settings.loadAudioSettings();\n    }\n  }, {\n    key: \"setSfxVolume\",\n    value: function setSfxVolume(volume) {\n      localStorage.setItem('sfx-vol', volume);\n      if (_audio_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].radarLockAudio) {\n        _audio_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].radarLockAudio.volume = parseFloat(volume);\n      }\n      Settings.loadAudioSettings();\n    }\n  }, {\n    key: \"setLanguageDataAttributes\",\n    value: function setLanguageDataAttributes(htmlElement, array) {\n      htmlElement.setAttribute('data-en', array[0]);\n      htmlElement.setAttribute('data-pt', array[1]);\n    }\n  }, {\n    key: \"setGameSpeed\",\n    value: function setGameSpeed(speed) {\n      localStorage.setItem('game-speed', speed);\n      _speed_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].activeGameSpeed = _speed_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].speedOptionsArray[speed];\n      Settings.loadGameSpeedSettings();\n    }\n  }, {\n    key: \"setDifficulty\",\n    value: function setDifficulty(difficulty) {\n      localStorage.setItem('difficulty', difficulty);\n      Settings.loadDifficultySettings();\n    }\n  }, {\n    key: \"getGameSpeed\",\n    value: function getGameSpeed() {\n      return _speed_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getActiveGameSpeed();\n    }\n  }, {\n    key: \"loadLanguageSettings\",\n    value: function loadLanguageSettings() {\n      if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en');\n      var textElements = document.querySelectorAll('[data-en]');\n      var langOptions = document.querySelectorAll('.language-radio');\n      var chosenLang = localStorage.getItem('lang');\n      textElements.forEach(function (element) {\n        return element.textContent = element.getAttribute(\"data-\".concat(chosenLang));\n      });\n      langOptions.forEach(function (element) {\n        element.classList.remove('selected');\n        if (element.value === localStorage.getItem('lang')) {\n          element.classList.add('selected');\n        }\n      });\n    }\n  }, {\n    key: \"loadAudioSettings\",\n    value: function loadAudioSettings() {\n      if (!localStorage.getItem('music-vol') || !localStorage.getItem('sfx-vol')) {\n        localStorage.setItem('music-vol', 1);\n        localStorage.setItem('sfx-vol', 1);\n      }\n      var musicVolume = parseFloat(localStorage.getItem('music-vol'));\n      var sfxVolume = parseFloat(localStorage.getItem('sfx-vol'));\n      document.querySelector('#music-volume-slider').value = parseFloat(musicVolume);\n      document.querySelector('#sfx-volume-slider').value = parseFloat(sfxVolume);\n    }\n  }, {\n    key: \"loadGameSpeedSettings\",\n    value: function loadGameSpeedSettings() {\n      if (!localStorage.getItem('game-speed')) {\n        localStorage.setItem('game-speed', 0);\n      }\n      var speedOptions = document.querySelectorAll('[id$=\"game-speed\"]');\n      var gameSpeed = parseFloat(localStorage.getItem('game-speed'));\n      speedOptions.forEach(function (element) {\n        element.classList.remove('selected');\n        if (parseFloat(element.value) === gameSpeed) {\n          element.classList.add('selected');\n        }\n      });\n    }\n  }, {\n    key: \"loadDifficultySettings\",\n    value: function loadDifficultySettings() {\n      if (!localStorage.getItem('difficulty')) {\n        localStorage.setItem('difficulty', 0);\n      }\n      var difficultyOptions = document.querySelectorAll('.difficulty-option');\n      var difficulty = parseFloat(localStorage.getItem('difficulty'));\n      difficultyOptions.forEach(function (element) {\n        element.classList.remove('selected');\n        element.selected = false;\n        if (parseFloat(element.value) === difficulty) {\n          element.classList.add('selected');\n          element.selected = true;\n        }\n      });\n    }\n  }, {\n    key: \"loadAllSettings\",\n    value: function loadAllSettings() {\n      Settings.loadAudioSettings();\n      Settings.loadGameSpeedSettings();\n      Settings.loadDifficultySettings();\n      Settings.loadLanguageSettings();\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      Settings.queryElements();\n      Settings.loadAllSettings();\n      Settings.setEventListeners();\n    }\n  }]);\n  return Settings;\n}();\n_defineProperty(Settings, \"settingsButton\", null);\n_defineProperty(Settings, \"closeSettings\", null);\n_defineProperty(Settings, \"settingsModal\", null);\n_defineProperty(Settings, \"langOptions\", null);\n_defineProperty(Settings, \"speedOptions\", null);\n_defineProperty(Settings, \"difficultyOptions\", null);\n_defineProperty(Settings, \"musicVolumeSlider\", null);\n_defineProperty(Settings, \"sfxVolumeSlider\", null);\n\n\n//# sourceURL=webpack://24-battleship/./src/scripts/helpers/settings.js?");

/***/ }),

/***/ "./src/scripts/helpers/speed.js":
/*!**************************************!*\
  !*** ./src/scripts/helpers/speed.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameSpeed)\n/* harmony export */ });\nvar _GameSpeed;\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar GameSpeed = /*#__PURE__*/function () {\n  function GameSpeed() {\n    _classCallCheck(this, GameSpeed);\n  }\n  _createClass(GameSpeed, null, [{\n    key: \"getActiveGameSpeed\",\n    value: function getActiveGameSpeed() {\n      var speed = parseInt(localStorage.getItem('game-speed'));\n      return GameSpeed.speedOptionsArray[speed];\n    }\n  }]);\n  return GameSpeed;\n}();\n_GameSpeed = GameSpeed;\n_defineProperty(GameSpeed, \"normal\", {\n  triggerRadarDelay: 500,\n  shotDropDelay: 3500,\n  reactionDelay: 300,\n  reactionSpan: 3000,\n  typing: 15,\n  reactionWrapperSlide: 200,\n  radarLockAlarmDelay: 2000,\n  radarLockScreenDelay: 3500,\n  sinkRoundDelay: 4000,\n  missileAlertCut: 4000\n});\n_defineProperty(GameSpeed, \"fast\", {\n  triggerRadarDelay: 200,\n  shotDropDelay: 1000,\n  reactionDelay: 300,\n  reactionSpan: 1500,\n  typing: 5,\n  reactionWrapperSlide: 50,\n  radarLockAlarmDelay: 500,\n  radarLockScreenDelay: 2000,\n  sinkRoundDelay: 2000,\n  missileAlertCut: 1300\n});\n_defineProperty(GameSpeed, \"speedOptionsArray\", [_GameSpeed.normal, _GameSpeed.fast]);\n_defineProperty(GameSpeed, \"activeGameSpeed\", void 0);\n\n\n//# sourceURL=webpack://24-battleship/./src/scripts/helpers/speed.js?");

/***/ }),

/***/ "./src/scripts/screens/index.js":
/*!**************************************!*\
  !*** ./src/scripts/screens/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _html_components_activation_screen_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/components/activation-screen.html */ \"./src/html/components/activation-screen.html\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_main_menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/main-menu.css */ \"./src/styles/main-menu.css\");\n/* harmony import */ var _styles_buttons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/buttons.css */ \"./src/styles/buttons.css\");\n/* harmony import */ var _styles_options_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/options.css */ \"./src/styles/options.css\");\n/* harmony import */ var _styles_dialogs_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/dialogs.css */ \"./src/styles/dialogs.css\");\n/* harmony import */ var _helpers_audio_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/audio.js */ \"./src/scripts/helpers/audio.js\");\n/* harmony import */ var _helpers_settings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/settings.js */ \"./src/scripts/helpers/settings.js\");\n/* harmony import */ var _helpers_navigation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/navigation.js */ \"./src/scripts/helpers/navigation.js\");\n/* harmony import */ var _helpers_animations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/animations.js */ \"./src/scripts/helpers/animations.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\ndocument.querySelector('#content').innerHTML += _html_components_activation_screen_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n\n\n\n\n\n\n\n\nvar MainMenu = /*#__PURE__*/function () {\n  function MainMenu() {\n    _classCallCheck(this, MainMenu);\n  }\n  _createClass(MainMenu, null, [{\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      MainMenu.continueButton.addEventListener('click', function () {\n        if (localStorage.getItem('saved-game')) {\n          sessionStorage.setItem('route-safe', 3);\n          _helpers_navigation_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].toBattle();\n        }\n      });\n      MainMenu.newGameButton.addEventListener('click', function () {\n        sessionStorage.setItem('route-safe', 1);\n        _helpers_navigation_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].toCharacterSelection();\n      });\n      window.addEventListener('click', MainMenu.closeActivationScreen);\n      window.addEventListener('touchend', MainMenu.closeActivationScreen);\n      window.addEventListener('keypress', MainMenu.closeActivationScreen);\n    }\n  }, {\n    key: \"closeActivationScreen\",\n    value: function closeActivationScreen() {\n      MainMenu.activationScreen.close();\n      MainMenu.content.classList.remove('blurry');\n      _helpers_audio_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].liberate();\n      window.removeEventListener('click', MainMenu.closeActivationScreen);\n      window.removeEventListener('keypress', MainMenu.closeActivationScreen);\n    }\n  }, {\n    key: \"verifySavedGame\",\n    value: function verifySavedGame() {\n      if (localStorage.getItem('saved-game')) {\n        MainMenu.continueButton.disabled = false;\n      }\n    }\n  }, {\n    key: \"playMainMenuMusic\",\n    value: function playMainMenuMusic() {\n      _helpers_audio_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].playMusic(_helpers_audio_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].mainMenu);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      sessionStorage.clear();\n      _helpers_settings_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].init();\n      MainMenu.activationScreen.showModal();\n      MainMenu.playMainMenuMusic();\n      _helpers_animations_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].rotatePropeller(MainMenu.propeller1);\n      _helpers_animations_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].rotatePropeller(MainMenu.propeller2);\n      _helpers_animations_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"].moveSea();\n      MainMenu.verifySavedGame();\n      MainMenu.setEventListeners();\n    }\n  }]);\n  return MainMenu;\n}();\n_defineProperty(MainMenu, \"content\", document.querySelector('#content'));\n_defineProperty(MainMenu, \"activationScreen\", document.querySelector('#activation-screen'));\n_defineProperty(MainMenu, \"continueButton\", document.querySelector('#continue'));\n_defineProperty(MainMenu, \"newGameButton\", document.querySelector('#new-game'));\n_defineProperty(MainMenu, \"settingsButton\", document.querySelector('#settings'));\n_defineProperty(MainMenu, \"propeller1\", document.querySelector('#helicopter1 .propeller'));\n_defineProperty(MainMenu, \"propeller2\", document.querySelector('#helicopter2 .propeller'));\n_helpers_navigation_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].loadScreen();\nMainMenu.init();\n\n//# sourceURL=webpack://24-battleship/./src/scripts/screens/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/screens/index.js");
/******/ 	
/******/ })()
;