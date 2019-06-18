/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\n  parent: 'content',\n  width: 800,\n  height: 600,\n  localStorageName: 'phaseres6webpack'\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  offset: 100,\n  tileSize: 60,\n  gameSize: 7\n});\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_Boot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Boot */ \"./src/scenes/Boot.js\");\n/* harmony import */ var _scenes_Splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/Splash */ \"./src/scenes/Splash.js\");\n/* harmony import */ var _scenes_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/Game */ \"./src/scenes/Game.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar gameConfig = Object.assign(_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  scene: [_scenes_Boot__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_Splash__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]\n});\n\nvar Game =\n/*#__PURE__*/\nfunction (_Phaser$Game) {\n  _inherits(Game, _Phaser$Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, gameConfig));\n  }\n\n  return Game;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game);\n\nwindow.game = new Game();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scenes/Boot.js":
/*!****************************!*\
  !*** ./src/scenes/Boot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(_default, _Phaser$Scene);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, {\n      key: 'BootScene'\n    }));\n  }\n\n  _createClass(_default, [{\n    key: \"preload\",\n    value: function preload() {\n      this.fontsReady = false;\n      this.fontsLoaded = this.fontsLoaded.bind(this);\n      this.add.text(100, 100, 'loading fonts...');\n      this.load.image('loaderBg', './assets/images/loader-bg.png');\n      this.load.image('loaderBar', './assets/images/loader-bar.png');\n      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({\n        google: {\n          families: ['Bangers']\n        },\n        active: this.fontsLoaded\n      });\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.fontsReady) {\n        this.scene.start('SplashScene');\n      }\n    }\n  }, {\n    key: \"fontsLoaded\",\n    value: function fontsLoaded() {\n      this.fontsReady = true;\n    }\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/scenes/Boot.js?");

/***/ }),

/***/ "./src/scenes/Game.js":
/*!****************************!*\
  !*** ./src/scenes/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _sprites_Blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprites/Blob */ \"./src/sprites/Blob.js\");\n/* harmony import */ var _sprites_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprites/Tile */ \"./src/sprites/Tile.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* globals __DEV__ */\n\n\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(_default, _Phaser$Scene);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, {\n      key: 'GameScene'\n    }));\n  }\n\n  _createClass(_default, [{\n    key: \"init\",\n    value: function init() {}\n  }, {\n    key: \"preload\",\n    value: function preload() {}\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.createTiles();\n      this.players = [];\n      this.players[0] = this.createBlob(Math.floor(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize / 2), 0);\n      this.players[0].setTint('0xFFC0C0');\n      this.players[1] = this.createBlob(Math.floor(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize / 2), _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize - 1);\n      this.players[1].setTint('0xC0C0FF');\n      this.turn = 0;\n      this.blocked = false;\n      this.setHighlights();\n    }\n  }, {\n    key: \"getPlayerAt\",\n    value: function getPlayerAt(gx, gy) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.players[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var player = _step.value;\n          if (player.gx == gx && player.gy == gy) return player;\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return null;\n    }\n  }, {\n    key: \"createTiles\",\n    value: function createTiles() {\n      this.tiles = [];\n\n      for (var gy = 0; gy < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize; gy++) {\n        this.tiles[gy] = [];\n\n        for (var gx = 0; gx < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize; gx++) {\n          var tile = new _sprites_Tile__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            scene: this,\n            gx: gx,\n            gy: gy\n          });\n          this.add.existing(tile);\n          this.tiles[gy][gx] = tile;\n        }\n      }\n    }\n  }, {\n    key: \"createBlob\",\n    value: function createBlob(gx, gy) {\n      var blob = new _sprites_Blob__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        scene: this,\n        gx: gx,\n        gy: gy\n      });\n      this.add.existing(blob);\n      return blob;\n    }\n  }, {\n    key: \"clickTile\",\n    value: function clickTile(gx, gy) {\n      var _this = this;\n\n      // Don't let the player move if input is blocked.\n      if (this.blocked) return; // Get the current player.\n\n      var player = this.players[this.turn]; // Make sure you're only moving 1 tile max per axis and not 0 tiles.\n\n      var gdx = Math.abs(player.gx - gx);\n      var gdy = Math.abs(player.gy - gy);\n      if (gdx > 1 || gdy > 1 || gdx == 0 && gdy == 0) return; // Time to move the player!\n\n      if (player.move({\n        gx: gx,\n        gy: gy,\n        onComplete: function onComplete() {\n          // Update the turn when the animation is done.\n          _this.turn = 1 - _this.turn;\n\n          _this.setHighlights(); // Unblock the input.\n\n\n          _this.blocked = false;\n        }\n      })) {\n        this.blocked = true;\n      }\n    }\n  }, {\n    key: \"setHighlights\",\n    value: function setHighlights() {\n      var player = this.players[this.turn];\n\n      for (var gy = 0; gy < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize; gy++) {\n        for (var gx = 0; gx < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize; gx++) {\n          var tile = this.tiles[gy][gx];\n          var gdx = Math.abs(player.gx - gx);\n          var gdy = Math.abs(player.gy - gy);\n          tile.removeHighlight();\n\n          if (gdx <= 1 && gdy <= 1 && !(gdx == 0 && gdy == 0)) {\n            if (player.move({\n              gx: gx,\n              gy: gy,\n              testMovement: true\n            })) tile.setHighlight();\n          }\n        }\n      }\n    }\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene); //\n\n\n\n\n//# sourceURL=webpack:///./src/scenes/Game.js?");

/***/ }),

/***/ "./src/scenes/Splash.js":
/*!******************************!*\
  !*** ./src/scenes/Splash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(_default, _Phaser$Scene);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, {\n      key: 'SplashScene'\n    }));\n  }\n\n  _createClass(_default, [{\n    key: \"preload\",\n    value: function preload() {\n      //\n      // load your assets\n      //\n      this.load.image('blob', 'assets/images/blob.png');\n      this.load.image('tile', 'assets/images/tile.png');\n    }\n  }, {\n    key: \"create\",\n    value: function create() {\n      this.scene.start('GameScene');\n    }\n  }, {\n    key: \"update\",\n    value: function update() {}\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/scenes/Splash.js?");

/***/ }),

/***/ "./src/sprites/Blob.js":
/*!*****************************!*\
  !*** ./src/sprites/Blob.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n // Player appears this much smaller than one tile size.\n\nvar SCALE = 0.7;\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$GameObjects$S) {\n  _inherits(_default, _Phaser$GameObjects$S);\n\n  function _default(_ref) {\n    var _this;\n\n    var scene = _ref.scene,\n        gx = _ref.gx,\n        gy = _ref.gy;\n\n    _classCallCheck(this, _default);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, scene, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gx), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gy), 'blob'));\n    _this.scene = scene;\n    _this.gx = gx;\n    _this.gy = gy;\n    _this.displayWidth = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize * SCALE;\n    _this.displayHeight = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize * SCALE;\n    return _this;\n  } // Move a player to [gx, gy] over time millisecnds.\n  // onComplete is called when the tween is completed.\n  // If test is true, this will only return true or false but not actually move.\n\n\n  _createClass(_default, [{\n    key: \"move\",\n    value: function move(_ref2) {\n      var _this2 = this;\n\n      var gx = _ref2.gx,\n          gy = _ref2.gy,\n          _ref2$time = _ref2.time,\n          time = _ref2$time === void 0 ? 300 : _ref2$time,\n          _ref2$onComplete = _ref2.onComplete,\n          _onComplete = _ref2$onComplete === void 0 ? null : _ref2$onComplete,\n          _ref2$testMovement = _ref2.testMovement,\n          testMovement = _ref2$testMovement === void 0 ? false : _ref2$testMovement;\n\n      // Check if this move will push another player.\n      var other = this.scene.getPlayerAt(gx, gy);\n\n      if (other != null) {\n        // Yes - it pushes another player.\n        // Get the delta components of this move.\n        var gxd = gx - this.gx;\n        var gyd = gy - this.gy; // Check where the other player would get pushed.\n        // They get pushed twice as far.\n\n        var pushedPosition = other.getPushedPosition({\n          gxd: gxd * 2,\n          gyd: gyd * 2\n        }); // If they were able to be pushed, then push them.\n\n        if (other.gx != pushedPosition.gx || other.gy != pushedPosition.gy) {\n          if (!testMovement) other.move(pushedPosition);\n        } else {\n          // Otherwise, this move is impossible.\n          return false;\n        }\n      }\n\n      if (testMovement) return true; // Tween to the new position.\n\n      var x = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gx);\n      var y = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gy);\n      this.scene.tweens.add({\n        targets: this,\n        x: x,\n        y: y,\n        ease: 'Cubic',\n        duration: time,\n        onComplete: function onComplete() {\n          // When the animation is done, update position and call back.\n          _this2.gx = gx;\n          _this2.gy = gy;\n          if (_onComplete) _onComplete();\n        }\n      });\n      return true;\n    } // Get the new position when a player is pushed by some movement delta.\n\n  }, {\n    key: \"getPushedPosition\",\n    value: function getPushedPosition(_ref3) {\n      var gxd = _ref3.gxd,\n          gyd = _ref3.gyd;\n      var gx = this.gx;\n      var gy = this.gy; // As long as there is some delta left, keep moving.\n\n      while (Math.abs(gxd) > 0 || Math.abs(gyd) > 0) {\n        // Temporary positions.\n        var gx0 = gx;\n        var gy0 = gy; // If there is an x component to move in remaining:\n\n        if (Math.abs(gxd) > 0) {\n          // If positive, move right.\n          if (gxd > 0) {\n            gxd--;\n            gx0++;\n          } else {\n            // Otherwise move left.\n            gxd++;\n            gx0--;\n          }\n        } // If there is a y component to move in remaining:\n\n\n        if (Math.abs(gyd) > 0) {\n          // If positive, move down.\n          if (gyd > 0) {\n            gyd--;\n            gy0++;\n          } else {\n            // Otherwise, move up.\n            gyd++;\n            gy0--;\n          }\n        } // If at any point we are out of bounds, break the loop.\n\n\n        if (!inBounds({\n          gx: gx0,\n          gy: gy0\n        })) break; // Update the new result position because we are still in bounds.\n\n        gx = gx0;\n        gy = gy0;\n      }\n\n      return {\n        gx: gx,\n        gy: gy\n      };\n    }\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite); // Returns whether a position is within the game space.\n\n\n\n\nfunction inBounds(_ref4) {\n  var gx = _ref4.gx,\n      gy = _ref4.gy;\n  return gx >= 0 && gy >= 0 && gx < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize && gy < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize;\n}\n\n//# sourceURL=webpack:///./src/sprites/Blob.js?");

/***/ }),

/***/ "./src/sprites/Tile.js":
/*!*****************************!*\
  !*** ./src/sprites/Tile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$GameObjects$S) {\n  _inherits(_default, _Phaser$GameObjects$S);\n\n  function _default(_ref) {\n    var _this;\n\n    var scene = _ref.scene,\n        gx = _ref.gx,\n        gy = _ref.gy;\n\n    _classCallCheck(this, _default);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, scene, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gx), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gy), 'tile'));\n    _this.scene = scene;\n    _this.gx = gx;\n    _this.gy = gy;\n    _this.displayWidth = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize;\n    _this.displayHeight = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize; // Allow this to be interacted with.\n\n    _this.setInteractive({\n      useHandCursor: false\n    }); // When clicked, call the scenes clickTile function on this position.\n\n\n    _this.on('pointerup', function () {\n      _this.scene.clickTile(_this.gx, _this.gy);\n    });\n\n    return _this;\n  }\n\n  _createClass(_default, [{\n    key: \"setHighlight\",\n    value: function setHighlight() {\n      this.setTint('0xDDDDDD');\n    }\n  }, {\n    key: \"removeHighlight\",\n    value: function removeHighlight() {\n      this.clearTint();\n    }\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite);\n\n\n\n//# sourceURL=webpack:///./src/sprites/Tile.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: centerGameObjects, g2a, a2g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"centerGameObjects\", function() { return centerGameObjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g2a\", function() { return g2a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a2g\", function() { return a2g; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nvar centerGameObjects = function centerGameObjects(objects) {\n  objects.forEach(function (object) {\n    object.anchor.setTo(0.5);\n  });\n}; // Convert a game coordinate into a screen coordinate.\n// i.e. game (coordinate) to absolute (coordinate)\n\nfunction g2a(g) {\n  return _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].offset + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize * g;\n} // Convert a screen coordinate into a game coordinate.\n// i.e. absolute (coordinate) to game (coordinate)\n\nfunction a2g(a) {\n  return Math.floor((a - _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].offset) / _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize);\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/lucascozby/Desktop/master_thief/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });