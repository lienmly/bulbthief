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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_Boot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Boot */ \"./src/scenes/Boot.js\");\n/* harmony import */ var _scenes_Splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/Splash */ \"./src/scenes/Splash.js\");\n/* harmony import */ var _scenes_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/Game */ \"./src/scenes/Game.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\n\n\n\nconst gameConfig = Object.assign(_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n  scene: [_scenes_Boot__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_Splash__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]\n});\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game {\n  constructor() {\n    super(gameConfig);\n  }\n\n}\n\nwindow.game = new Game();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scenes/Boot.js":
/*!****************************!*\
  !*** ./src/scenes/Boot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'BootScene'\n    });\n  }\n\n  preload() {\n    this.fontsReady = false;\n    this.fontsLoaded = this.fontsLoaded.bind(this);\n    this.add.text(100, 100, 'loading fonts...');\n    this.load.image('loaderBg', './assets/images/loader-bg.png');\n    this.load.image('loaderBar', './assets/images/loader-bar.png');\n    webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({\n      google: {\n        families: ['Bangers']\n      },\n      active: this.fontsLoaded\n    });\n  }\n\n  update() {\n    if (this.fontsReady) {\n      this.scene.start('SplashScene');\n    }\n  }\n\n  fontsLoaded() {\n    this.fontsReady = true;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/scenes/Boot.js?");

/***/ }),

/***/ "./src/scenes/Game.js":
/*!****************************!*\
  !*** ./src/scenes/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _sprites_Blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprites/Blob */ \"./src/sprites/Blob.js\");\n/* harmony import */ var _sprites_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprites/Tile */ \"./src/sprites/Tile.js\");\n/* globals __DEV__ */\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'GameScene'\n    });\n  }\n\n  init() {}\n\n  preload() {}\n\n  create() {\n    this.createTiles();\n    this.endTiles = this.createEndTiles();\n    this.players = [];\n    this.players[0] = this.createBlob(Math.floor(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize / 2), 0);\n    this.players[0].setTint('0xFFC0C0');\n    this.players[1] = this.createBlob(Math.floor(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize / 2), _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize - 1);\n    this.players[1].setTint('0xC0C0FF');\n    this.turn = 0;\n    this.blocked = false;\n    this.setHighlights();\n  }\n\n  getPlayerAt(gx, gy) {\n    for (const player of this.players) {\n      if (player.gx == gx && player.gy == gy) return player;\n    }\n\n    return null;\n  }\n\n  createTiles() {\n    this.tiles = [];\n\n    for (let gy = 0; gy < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize; gy++) {\n      this.tiles[gy] = [];\n\n      for (let gx = 0; gx < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize; gx++) {\n        let tile = new _sprites_Tile__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n          scene: this,\n          gx,\n          gy\n        });\n        this.add.existing(tile);\n        this.tiles[gy][gx] = tile;\n      }\n    }\n  }\n\n  createEndTiles() {\n    let endTiles = [];\n    const gx = Math.floor(_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize / 2);\n    endTiles[0] = new _sprites_Tile__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      scene: this,\n      gx,\n      gy: -1,\n      canWalk: false\n    });\n    endTiles[1] = new _sprites_Tile__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n      scene: this,\n      gx,\n      gy: _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize,\n      canWalk: false\n    });\n\n    for (const tile of endTiles) {\n      this.add.existing(tile);\n    }\n\n    return endTiles;\n  }\n\n  createBlob(gx, gy) {\n    let blob = new _sprites_Blob__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      scene: this,\n      gx,\n      gy\n    });\n    this.add.existing(blob);\n    return blob;\n  }\n\n  clickTile({\n    tile,\n    gx,\n    gy\n  }) {\n    // Don't let the player move if input is blocked.\n    if (this.blocked) return; // If this isn't walkable, stop.\n\n    if (!tile.canWalk) return; // Get the current player.\n\n    let player = this.players[this.turn]; // Make sure you're only moving 1 tile max per axis and not 0 tiles.\n\n    const gdx = Math.abs(player.gx - gx);\n    const gdy = Math.abs(player.gy - gy);\n    if (gdx > 1 || gdy > 1 || gdx == 0 && gdy == 0) return; // Time to move the player!\n\n    if (player.move({\n      gx,\n      gy,\n      onComplete: () => {\n        // Update the turn when the animation is done.\n        this.turn = 1 - this.turn;\n        this.setHighlights(); // Unblock the input.\n\n        this.blocked = false;\n      }\n    })) {\n      this.blocked = true;\n    }\n  }\n\n  setHighlights() {\n    let player = this.players[this.turn];\n\n    for (let gy = 0; gy < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize; gy++) {\n      for (let gx = 0; gx < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize; gx++) {\n        let tile = this.tiles[gy][gx];\n        const gdx = Math.abs(player.gx - gx);\n        const gdy = Math.abs(player.gy - gy);\n        tile.removeHighlight();\n\n        if (gdx <= 1 && gdy <= 1 && !(gdx == 0 && gdy == 0)) {\n          if (player.move({\n            gx,\n            gy,\n            testMovement: true\n          })) tile.setHighlight();\n        }\n      }\n    }\n  }\n\n}); //\n\n//# sourceURL=webpack:///./src/scenes/Game.js?");

/***/ }),

/***/ "./src/scenes/Splash.js":
/*!******************************!*\
  !*** ./src/scenes/Splash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'SplashScene'\n    });\n  }\n\n  preload() {\n    //\n    // load your assets\n    //\n    this.load.image('blob', 'assets/images/blob.png');\n    this.load.image('tile', 'assets/images/tile.png');\n  }\n\n  create() {\n    this.scene.start('GameScene');\n  }\n\n  update() {}\n\n});\n\n//# sourceURL=webpack:///./src/scenes/Splash.js?");

/***/ }),

/***/ "./src/sprites/Blob.js":
/*!*****************************!*\
  !*** ./src/sprites/Blob.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n // Player appears this much smaller than one tile size.\n\nconst SCALE = 0.7;\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite {\n  constructor({\n    scene,\n    gx,\n    gy\n  }) {\n    super(scene, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gx), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gy), 'blob');\n    this.game = scene;\n    this.gx = gx;\n    this.gy = gy;\n    this.displayWidth = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize * SCALE;\n    this.displayHeight = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize * SCALE;\n  } // Move a player to [gx, gy] over time millisecnds.\n  // onComplete is called when the tween is completed.\n  // If test is true, this will only return true or false but not actually move.\n\n\n  move({\n    gx,\n    gy,\n    time = 300,\n    onComplete = null,\n    testMovement = false\n  }) {\n    // Check if this move will push another player.\n    let other = this.game.getPlayerAt(gx, gy);\n\n    if (other != null) {\n      // Yes - it pushes another player.\n      // Get the delta components of this move.\n      let gxd = gx - this.gx;\n      let gyd = gy - this.gy; // Check where the other player would get pushed.\n      // They get pushed twice as far.\n\n      let pushedPosition = other.getPushedPosition({\n        gxd: gxd * 2,\n        gyd: gyd * 2\n      }); // If they were able to be pushed, then push them.\n\n      if (other.gx != pushedPosition.gx || other.gy != pushedPosition.gy) {\n        if (!testMovement) other.move(pushedPosition);\n      } else {\n        // Otherwise, this move is impossible.\n        return false;\n      }\n    }\n\n    if (testMovement) return true; // Tween to the new position.\n\n    let x = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gx);\n    let y = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gy);\n    this.game.tweens.add({\n      targets: this,\n      x,\n      y,\n      ease: 'Cubic',\n      duration: time,\n      onComplete: () => {\n        // When the animation is done, update position and call back.\n        this.gx = gx;\n        this.gy = gy;\n        if (onComplete) onComplete();\n      }\n    });\n    return true;\n  } // Get the new position when a player is pushed by some movement delta.\n\n\n  getPushedPosition({\n    gxd,\n    gyd\n  }) {\n    let gx = this.gx;\n    let gy = this.gy; // As long as there is some delta left, keep moving.\n\n    while (Math.abs(gxd) > 0 || Math.abs(gyd) > 0) {\n      // Temporary positions.\n      let gx0 = gx;\n      let gy0 = gy; // If there is an x component to move in remaining:\n\n      if (Math.abs(gxd) > 0) {\n        // If positive, move right.\n        if (gxd > 0) {\n          gxd--;\n          gx0++;\n        } else {\n          // Otherwise move left.\n          gxd++;\n          gx0--;\n        }\n      } // If there is a y component to move in remaining:\n\n\n      if (Math.abs(gyd) > 0) {\n        // If positive, move down.\n        if (gyd > 0) {\n          gyd--;\n          gy0++;\n        } else {\n          // Otherwise, move up.\n          gyd++;\n          gy0--;\n        }\n      } // If at any point we are out of bounds, break the loop.\n\n\n      if (!inBounds({\n        gx: gx0,\n        gy: gy0\n      })) break; // Update the new result position because we are still in bounds.\n\n      gx = gx0;\n      gy = gy0;\n    }\n\n    return {\n      gx,\n      gy\n    };\n  }\n\n}); // Returns whether a position is within the game space.\n\nfunction inBounds({\n  gx,\n  gy\n}) {\n  return gx >= 0 && gy >= 0 && gx < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize && gy < _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameSize;\n}\n\n//# sourceURL=webpack:///./src/sprites/Blob.js?");

/***/ }),

/***/ "./src/sprites/Tile.js":
/*!*****************************!*\
  !*** ./src/sprites/Tile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Sprite {\n  constructor({\n    scene,\n    gx,\n    gy,\n    canWalk = true\n  }) {\n    super(scene, Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gx), Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"g2a\"])(gy), 'tile');\n    this.game = scene;\n    this.gx = gx;\n    this.gy = gy;\n    this.displayWidth = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize;\n    this.displayHeight = _constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tileSize;\n    this.canWalk = canWalk; // Allow this to be interacted with.\n\n    this.setInteractive({\n      useHandCursor: false\n    }); // When clicked, call the scenes clickTile function on this position.\n\n    this.on('pointerup', () => {\n      this.game.clickTile({\n        tile: this,\n        gx: this.gx,\n        gy: this.gy\n      });\n    });\n  }\n\n  setHighlight() {\n    this.setTint('0xDDDDDD');\n  }\n\n  removeHighlight() {\n    this.clearTint();\n  }\n\n});\n\n//# sourceURL=webpack:///./src/sprites/Tile.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: centerGameObjects, g2a, a2g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"centerGameObjects\", function() { return centerGameObjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g2a\", function() { return g2a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a2g\", function() { return a2g; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nconst centerGameObjects = objects => {\n  objects.forEach(function (object) {\n    object.anchor.setTo(0.5);\n  });\n}; // Convert a game coordinate into a screen coordinate.\n// i.e. game (coordinate) to absolute (coordinate)\n\nfunction g2a(g) {\n  return _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].offset + _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize * g;\n} // Convert a screen coordinate into a game coordinate.\n// i.e. absolute (coordinate) to game (coordinate)\n\nfunction a2g(a) {\n  return Math.floor((a - _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].offset) / _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tileSize);\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/lucascozby/Desktop/bulbthief/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });