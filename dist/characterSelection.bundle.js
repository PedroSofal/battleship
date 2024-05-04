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

/***/ "./src/assets/characters/nimitz.jpg":
/*!******************************************!*\
  !*** ./src/assets/characters/nimitz.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/nimitz.0afd1c1e52f63c98c4c8.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/nimitz.jpg?");

/***/ }),

/***/ "./src/assets/characters/noronha.jpg":
/*!*******************************************!*\
  !*** ./src/assets/characters/noronha.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/noronha.8487c9a4a847564b7df2.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/noronha.jpg?");

/***/ }),

/***/ "./src/assets/characters/olafsson.jpg":
/*!********************************************!*\
  !*** ./src/assets/characters/olafsson.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/olafsson.3ac7d47fca07febb05ea.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/olafsson.jpg?");

/***/ }),

/***/ "./src/assets/characters/rackham.jpg":
/*!*******************************************!*\
  !*** ./src/assets/characters/rackham.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/rackham.a2d4f74ef684bdcb6c96.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/rackham.jpg?");

/***/ }),

/***/ "./src/assets/characters/violeta.jpg":
/*!*******************************************!*\
  !*** ./src/assets/characters/violeta.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/violeta.cf16259d277ce9c23cc0.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/violeta.jpg?");

/***/ }),

/***/ "./src/assets/characters/yamato.jpg":
/*!******************************************!*\
  !*** ./src/assets/characters/yamato.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/images/yamato.48f06a5e2e25ea3e460b.jpg\";\n\n//# sourceURL=webpack://24-battleship/./src/assets/characters/yamato.jpg?");

/***/ }),

/***/ "./src/scripts/factories/characters.js":
/*!*********************************************!*\
  !*** ./src/scripts/factories/characters.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   charObjects: () => (/* binding */ charObjects)\n/* harmony export */ });\n/* harmony import */ var _assets_characters_nimitz_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/characters/nimitz.jpg */ \"./src/assets/characters/nimitz.jpg\");\n/* harmony import */ var _assets_characters_yamato_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/characters/yamato.jpg */ \"./src/assets/characters/yamato.jpg\");\n/* harmony import */ var _assets_characters_olafsson_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/characters/olafsson.jpg */ \"./src/assets/characters/olafsson.jpg\");\n/* harmony import */ var _assets_characters_violeta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/characters/violeta.jpg */ \"./src/assets/characters/violeta.jpg\");\n/* harmony import */ var _assets_characters_rackham_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/characters/rackham.jpg */ \"./src/assets/characters/rackham.jpg\");\n/* harmony import */ var _assets_characters_noronha_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/characters/noronha.jpg */ \"./src/assets/characters/noronha.jpg\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\nvar Char = /*#__PURE__*/_createClass(function Char(name, fullName, src, color, colorAlpha) {\n  _classCallCheck(this, Char);\n  this.name = name;\n  this.fullName = fullName;\n  this.src = src;\n  this.color = color;\n  this.colorAlpha = colorAlpha;\n});\nvar charObjects = {\n  nimitz: new Char('nimitz', 'Douglas Nimitz', _assets_characters_nimitz_jpg__WEBPACK_IMPORTED_MODULE_0__, 'rgb(255, 53, 54)', 'rgba(255, 53, 54, 0.5)'),\n  yamato: new Char('yamato', 'Satoru Yamato', _assets_characters_yamato_jpg__WEBPACK_IMPORTED_MODULE_1__, 'rgb(7, 89, 201)', 'rgba(7, 89, 201, 0.5)'),\n  olafsson: new Char('olafsson', 'Leif Oláfsson', _assets_characters_olafsson_jpg__WEBPACK_IMPORTED_MODULE_2__, 'rgb(241, 94, 24)', 'rgba(241, 94, 24, 0.5)'),\n  violeta: new Char('violeta', 'Violeta Pavlichenko', _assets_characters_violeta_jpg__WEBPACK_IMPORTED_MODULE_3__, 'rgb(244, 195, 67)', 'rgba(244, 195, 67, 0.5)'),\n  rackham: new Char('rackham', 'Jack Rackham', _assets_characters_rackham_jpg__WEBPACK_IMPORTED_MODULE_4__, 'rgb(220, 220, 220)', 'rgba(220, 220, 220, 0.5)'),\n  noronha: new Char('noronha', 'Alberto Noronha', _assets_characters_noronha_jpg__WEBPACK_IMPORTED_MODULE_5__, 'rgb(62, 244, 84)', 'rgba(62, 244, 84, 0.5)')\n};\n\n//# sourceURL=webpack://24-battleship/./src/scripts/factories/characters.js?");

/***/ }),

/***/ "./src/scripts/helpers/navigation.js":
/*!*******************************************!*\
  !*** ./src/scripts/helpers/navigation.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\n/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save.js */ \"./src/scripts/helpers/save.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Navigation = /*#__PURE__*/function () {\n  function Navigation() {\n    _classCallCheck(this, Navigation);\n  }\n  _createClass(Navigation, null, [{\n    key: \"toMainMenu\",\n    value: function toMainMenu() {\n      window.location.href = 'index.html';\n    }\n  }, {\n    key: \"toCharacterSelection\",\n    value: function toCharacterSelection() {\n      window.location.href = 'character-selection.html';\n    }\n  }, {\n    key: \"toStrategyRoom\",\n    value: function toStrategyRoom() {\n      window.location.href = 'strategy-room.html';\n      // const confirmation = prompt('Are you sure you want to go back to the strategy room? All battle progress will be lost.');\n\n      // if (confirmation) {\n      //   window.location.href = 'strategy-room.html';\n      // }\n    }\n  }, {\n    key: \"toBattle\",\n    value: function toBattle() {\n      window.location.href = 'battle.html';\n    }\n  }, {\n    key: \"reloadBattle\",\n    value: function reloadBattle() {\n      var confirmation = prompt('Are you sure you want to restart the battle?');\n      if (confirmation) {\n        _save_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteSavedGameData();\n        window.location.href = 'battle.html';\n      }\n    }\n  }, {\n    key: \"routeGuard\",\n    value: function routeGuard() {\n      var page = window.location.pathname;\n      var routeSafe = sessionStorage.getItem('route-safe') || 0;\n      var savedGame = localStorage.getItem('saved-game');\n      if (page === '/strategy-room.html' && routeSafe < 1) {\n        Navigation.displayRouteError();\n      } else if (page === '/battle.html' && routeSafe < 2 && !savedGame) {\n        Navigation.displayRouteError();\n      } else {\n        Navigation.displayLoader();\n      }\n    }\n  }, {\n    key: \"displayRouteError\",\n    value: function displayRouteError() {\n      window.location.href = 'index.html';\n      var lang = localStorage.getItem('lang');\n      if (lang === 'en') {\n        alert('Oops! Please complete the previous steps before accessing this page.');\n      } else if (lang === 'pt') {\n        alert('Ops! Por favor, complete as etapas anteriores antes de acessar esta página.');\n      }\n    }\n  }, {\n    key: \"displayLoader\",\n    value: function displayLoader() {\n      document.onreadystatechange = function () {\n        if (document.readyState === 'complete') {\n          setTimeout(function () {\n            document.querySelector('#content').style.display = 'block';\n            document.querySelector('#loader').style.display = 'none';\n          }, 500);\n        }\n      };\n    }\n  }, {\n    key: \"loadScreen\",\n    value: function loadScreen() {\n      Navigation.routeGuard();\n    }\n  }]);\n  return Navigation;\n}();\n\n\n//# sourceURL=webpack://24-battleship/./src/scripts/helpers/navigation.js?");

/***/ }),

/***/ "./src/scripts/helpers/save.js":
/*!*************************************!*\
  !*** ./src/scripts/helpers/save.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Save)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Save = /*#__PURE__*/function () {\n  function Save() {\n    _classCallCheck(this, Save);\n  }\n  _createClass(Save, null, [{\n    key: \"saveRound\",\n    value:\n    // static setEventListeners() {\n    //   window.addEventListener('beforeunload', function(e) {\n    //     e.preventDefault();\n    //     e.returnValue = '';\n    //   });\n    // }\n\n    function saveRound(player, attackedSquare) {\n      var _Save$retrieveSavedGa;\n      var saveFile = (_Save$retrieveSavedGa = Save.retrieveSavedGameData()) !== null && _Save$retrieveSavedGa !== void 0 ? _Save$retrieveSavedGa : Save.saveFileTemplate;\n      if (player.type === 'human') {\n        saveFile.humanBoard.push(attackedSquare.coords);\n        saveFile.nextTurn = 'human';\n      } else {\n        saveFile.cpuBoard.push(attackedSquare.coords);\n        saveFile.nextTurn = 'cpu';\n      }\n      localStorage.setItem('saved-game', JSON.stringify(saveFile));\n    }\n  }, {\n    key: \"retrieveSavedGameData\",\n    value: function retrieveSavedGameData() {\n      var data = localStorage.getItem('saved-game');\n      if (data !== 'undefined') {\n        return JSON.parse(data);\n      }\n    }\n  }, {\n    key: \"deleteSavedGameData\",\n    value: function deleteSavedGameData() {\n      localStorage.removeItem('saved-game');\n    }\n  }]);\n  return Save;\n}();\n_defineProperty(Save, \"saveFileTemplate\", {\n  humanBoard: [],\n  cpuBoard: [],\n  nextTurn: null,\n  cpuShipsPositions: []\n});\n\n\n//# sourceURL=webpack://24-battleship/./src/scripts/helpers/save.js?");

/***/ }),

/***/ "./src/scripts/screens/character-selection.js":
/*!****************************************************!*\
  !*** ./src/scripts/screens/character-selection.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CharSelection)\n/* harmony export */ });\n/* harmony import */ var _factories_characters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/characters.js */ \"./src/scripts/factories/characters.js\");\n/* harmony import */ var _helpers_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/navigation.js */ \"./src/scripts/helpers/navigation.js\");\nvar _CharSelection;\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar CharSelection = /*#__PURE__*/function () {\n  function CharSelection() {\n    _classCallCheck(this, CharSelection);\n  }\n  _createClass(CharSelection, null, [{\n    key: \"setEventListeners\",\n    value: function setEventListeners() {\n      CharSelection.opponents.forEach(function (opponent) {\n        opponent.addEventListener('click', function (e) {\n          return CharSelection.playerEditing(e);\n        });\n      });\n    }\n  }, {\n    key: \"handleCharSelection\",\n    value: function handleCharSelection(selectedChar) {\n      if (selectedChar.classList.contains('char-selected')) return;\n      CharSelection.resetCharSelection();\n      selectedChar.classList.add('char-selected');\n      selectedChar.classList.add(\"char-selected--\".concat(CharSelection.isSelecting));\n      CharSelection.opponents.forEach(function (opponent) {\n        opponent.classList.remove('opponents__player--selected');\n      });\n      if (CharSelection.isSelecting === 'player' && !CharSelection.isEditing) {\n        CharSelection.associateCharToPlayer(selectedChar);\n        CharSelection.isSelecting = 'cpu';\n        CharSelection.cpuPreview.classList.add('opponents__player--selected');\n        return;\n      }\n      if (CharSelection.isSelecting === 'player' && CharSelection.isEditing) {\n        CharSelection.associateCharToPlayer(selectedChar);\n        CharSelection.deactivatePlayerSelection();\n        return;\n      }\n      if (CharSelection.isSelecting === 'cpu') {\n        CharSelection.associateCharToCpu(selectedChar);\n        CharSelection.deactivatePlayerSelection();\n        return;\n      }\n    }\n  }, {\n    key: \"activatePlayerSelection\",\n    value: function activatePlayerSelection() {\n      CharSelection.charSelectionWrapper.classList.add('opened');\n      CharSelection.charOptions.forEach(function (option) {\n        option.addEventListener('click', CharSelection.playerSelection);\n      });\n    }\n  }, {\n    key: \"deactivatePlayerSelection\",\n    value: function deactivatePlayerSelection() {\n      CharSelection.charOptions.forEach(function (option) {\n        option.removeEventListener('click', CharSelection.playerSelection);\n        option.classList.remove('chosen');\n      });\n      CharSelection.opponents.forEach(function (opponent) {\n        opponent.classList.remove('opponents__player--selected');\n        opponent.classList.add('opponents__player--selectable');\n      });\n      CharSelection.charSelectionWrapper.classList.add('closed');\n      CharSelection.isEditing = false;\n      CharSelection.placeShipsBtn.disabled = false;\n    }\n  }, {\n    key: \"playerEditing\",\n    value: function playerEditing(e) {\n      var opponent = e.currentTarget.id.includes('player') ? 'player' : 'cpu';\n      if (!sessionStorage.getItem('player-char') || !sessionStorage.getItem('cpu-char')) return;\n      CharSelection.placeShipsBtn.disabled = true;\n      CharSelection.isSelecting = opponent;\n      CharSelection.resetCharSelection();\n      CharSelection.opponents.forEach(function (div) {\n        div.classList.remove('opponents__player--selected');\n        div.classList.remove('opponents__player--selectable');\n      });\n      e.currentTarget.classList.add('opponents__player--selected');\n      if (CharSelection.isEditing) {\n        CharSelection.restoreCharSelection();\n      } else {\n        CharSelection.enableCharacterEditing();\n      }\n      CharSelection.hideChosenCharacter();\n    }\n  }, {\n    key: \"resetCharSelection\",\n    value: function resetCharSelection() {\n      CharSelection.charOptions.forEach(function (option) {\n        if (option.classList.contains(\"char-selected--\".concat(CharSelection.isSelecting))) {\n          option.classList.remove('char-selected');\n          option.classList.remove(\"char-selected--\".concat(CharSelection.isSelecting));\n        }\n      });\n    }\n  }, {\n    key: \"restoreCharSelection\",\n    value: function restoreCharSelection() {\n      var wasSelecting = CharSelection.isSelecting === 'player' ? 'cpu' : 'player';\n      var selectedChar = document.getElementById(sessionStorage.getItem(\"\".concat(wasSelecting, \"-char\")));\n      selectedChar.classList.add('char-selected');\n      selectedChar.classList.add(\"char-selected--\".concat(wasSelecting));\n      CharSelection.charOptions.forEach(function (option) {\n        return option.classList.remove('chosen');\n      });\n    }\n  }, {\n    key: \"enableCharacterEditing\",\n    value: function enableCharacterEditing() {\n      CharSelection.isEditing = true;\n      CharSelection.charSelectionWrapper.classList.remove('closed');\n      CharSelection.charOptions.forEach(function (option) {\n        option.addEventListener('click', CharSelection.playerSelection);\n      });\n    }\n  }, {\n    key: \"hideChosenCharacter\",\n    value: function hideChosenCharacter() {\n      var chosenCharacter = document.querySelector('.char-selected');\n      chosenCharacter.classList.add('chosen');\n    }\n  }, {\n    key: \"associateCharToPlayer\",\n    value: function associateCharToPlayer(selectedChar) {\n      CharSelection.playerChar = selectedChar.id;\n      CharSelection.playerPhoto.src = _factories_characters_js__WEBPACK_IMPORTED_MODULE_0__.charObjects[selectedChar.id].src;\n      CharSelection.playerPhoto.alt = _factories_characters_js__WEBPACK_IMPORTED_MODULE_0__.charObjects[selectedChar.id].name;\n      CharSelection.playerPhoto.classList.remove('animate');\n      setTimeout(function () {\n        return CharSelection.playerPhoto.classList.add('animate');\n      });\n      sessionStorage.setItem('player-char', CharSelection.playerChar);\n    }\n  }, {\n    key: \"associateCharToCpu\",\n    value: function associateCharToCpu(selectedChar) {\n      CharSelection.cpuChar = selectedChar.id;\n      CharSelection.cpuName.textContent = _factories_characters_js__WEBPACK_IMPORTED_MODULE_0__.charObjects[selectedChar.id].name;\n      CharSelection.cpuPhoto.src = _factories_characters_js__WEBPACK_IMPORTED_MODULE_0__.charObjects[selectedChar.id].src;\n      CharSelection.cpuPhoto.alt = _factories_characters_js__WEBPACK_IMPORTED_MODULE_0__.charObjects[selectedChar.id].name;\n      CharSelection.cpuPhoto.classList.remove('animate');\n      setTimeout(function () {\n        return CharSelection.cpuPhoto.classList.add('animate');\n      });\n      sessionStorage.setItem('cpu-char', CharSelection.cpuChar);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      CharSelection.setEventListeners();\n    }\n  }]);\n  return CharSelection;\n}();\n_CharSelection = CharSelection;\n_defineProperty(CharSelection, \"playerChar\", null);\n_defineProperty(CharSelection, \"cpuChar\", null);\n_defineProperty(CharSelection, \"isSelecting\", 'player');\n_defineProperty(CharSelection, \"isEditing\", false);\n_defineProperty(CharSelection, \"charOptions\", document.querySelectorAll('.character-option'));\n_defineProperty(CharSelection, \"charSelectionWrapper\", document.querySelector('.character-selection-wrapper'));\n_defineProperty(CharSelection, \"opponents\", document.querySelectorAll('.opponents__player'));\n_defineProperty(CharSelection, \"playerPreview\", document.querySelector('#player-preview'));\n_defineProperty(CharSelection, \"cpuPreview\", document.querySelector('#cpu-preview'));\n_defineProperty(CharSelection, \"placeShipsBtn\", document.querySelector('#place-ships'));\n_defineProperty(CharSelection, \"playerName\", document.querySelector('#player-name'));\n_defineProperty(CharSelection, \"cpuName\", document.querySelector('#cpu-name'));\n_defineProperty(CharSelection, \"playerPhoto\", document.querySelector('#player-photo'));\n_defineProperty(CharSelection, \"cpuPhoto\", document.querySelector('#cpu-photo'));\n_defineProperty(CharSelection, \"playerSelection\", function (e) {\n  _CharSelection.handleCharSelection(e.currentTarget);\n});\n\n_helpers_navigation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadScreen();\nCharSelection.init();\n\n//# sourceURL=webpack://24-battleship/./src/scripts/screens/character-selection.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/screens/character-selection.js");
/******/ 	
/******/ })()
;