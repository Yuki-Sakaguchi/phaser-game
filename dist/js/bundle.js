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
/******/ 	__webpack_require__.p = "./dist/js/";
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

/***/ "./src/js/common/config.js":
/*!*********************************!*\
  !*** ./src/js/common/config.js ***!
  \*********************************/
/*! exports provided: WIDTH, HEIGHT, GAME_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WIDTH\", function() { return WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEIGHT\", function() { return HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_CONFIG\", function() { return GAME_CONFIG; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * @fileoverview 共通設定\n */\n\nvar WIDTH = 1280;\nvar HEIGHT = 768;\nvar GAME_CONFIG = {\n  type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\n  parent: 'content',\n  width: WIDTH,\n  height: HEIGHT,\n  localStorageName: 'phager-game'\n};\n\n//# sourceURL=webpack:///./src/js/common/config.js?");

/***/ }),

/***/ "./src/js/common/utils.js":
/*!********************************!*\
  !*** ./src/js/common/utils.js ***!
  \********************************/
/*! exports provided: centerGameObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"centerGameObjects\", function() { return centerGameObjects; });\n/**\n * @fileoverview 共通関数\n */\n\n/**\n * オブジェクトをステージの真ん中に配置する\n * @param {Array<Phaser.GameObjects>} objects\n */\nvar centerGameObjects = function centerGameObjects(objects) {\n  objects.forEach(function (object) {\n    return object.setOrigin(0.5);\n  });\n};\n\n//# sourceURL=webpack:///./src/js/common/utils.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scenes_Boot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Boot */ \"./src/js/scenes/Boot.js\");\n/* harmony import */ var _scenes_Splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/Splash */ \"./src/js/scenes/Splash.js\");\n/* harmony import */ var _scenes_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/Game */ \"./src/js/scenes/Game.js\");\n/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/config */ \"./src/js/common/config.js\");\n/**\n * @fileoverview bundle元のファイル\n */\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * ゲームの設定\n */\n\nvar gameConfig = Object.assign(_common_config__WEBPACK_IMPORTED_MODULE_4__[\"GAME_CONFIG\"], {\n  scene: [_scenes_Boot__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_Splash__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _scenes_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]\n});\n/**\n * ゲーム本体\n * @class\n * @extends Phaser.Game\n */\n\nvar Game =\n/*#__PURE__*/\nfunction (_Phaser$Game) {\n  _inherits(Game, _Phaser$Game);\n\n  /**\n   * ゲーム初期化\n   */\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, gameConfig));\n  }\n\n  return Game;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game); // ゲーム実行\n\n\nwindow.game = new Game();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/scenes/Boot.js":
/*!*******************************!*\
  !*** ./src/js/scenes/Boot.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * @fileoverview 初期表示画面\n */\n\n\n/**\n * 初期表示画面クラス\n * @class\n * @extends Phaser.Scene\n */\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(_default, _Phaser$Scene);\n\n  /**\n   * コンストラクタ\n   * @constructor\n   */\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, {\n      key: 'BootScene'\n    }));\n  }\n  /**\n   * 初期化\n   * @method\n   */\n\n\n  _createClass(_default, [{\n    key: \"init\",\n    value: function init() {\n      this.fontsReady = false;\n    }\n    /**\n     * 最低限の事前ロード\n     * @method\n     */\n\n  }, {\n    key: \"preload\",\n    value: function preload() {\n      var _this = this;\n\n      // フォントをロード\n      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({\n        google: {\n          families: ['Bangers']\n        },\n        active: function active() {\n          _this.fontsReady = true;\n        }\n      });\n    }\n    /**\n     * 準備ができたらスプラッシュページへ遷移\n     * @method\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.fontsReady) {\n        this.scene.start('SplashScene');\n      }\n    }\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/js/scenes/Boot.js?");

/***/ }),

/***/ "./src/js/scenes/Game.js":
/*!*******************************!*\
  !*** ./src/js/scenes/Game.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ \"./src/js/common/config.js\");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ \"./src/js/common/utils.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * @fileoverview ゲーム画面\n */\n\n\n\n/**\n * ゲーム画面クラス\n * @class\n * @extends Phaser.Scene\n */\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(_default, _Phaser$Scene);\n\n  /**\n   * コンストラクタ\n   * @constructor\n   */\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, {\n      key: 'GameScene'\n    }));\n  }\n  /**\n   * 初期化\n   * @method\n   */\n\n\n  _createClass(_default, [{\n    key: \"init\",\n    value: function init() {\n      this.speed = 4;\n      this.oldCursor = {};\n    }\n    /**\n     * ゲーム画面を構築\n     * @method\n     */\n\n  }, {\n    key: \"create\",\n    value: function create() {\n      // キャラクター追加\n      this.player = this.add.sprite(_common_config__WEBPACK_IMPORTED_MODULE_1__[\"WIDTH\"] / 2, _common_config__WEBPACK_IMPORTED_MODULE_1__[\"HEIGHT\"] / 2, 'sprite', 'player-3-0');\n      this.anims.create({\n        key: 'walk-left',\n        repeat: -1,\n        frameRate: 5,\n        frames: this.anims.generateFrameNames('sprite', {\n          prefix: 'player-0-',\n          start: 0,\n          end: 3\n        })\n      });\n      this.anims.create({\n        key: 'walk-back',\n        repeat: -1,\n        frameRate: 5,\n        frames: this.anims.generateFrameNames('sprite', {\n          prefix: 'player-1-',\n          start: 0,\n          end: 3\n        })\n      });\n      this.anims.create({\n        key: 'walk-right',\n        repeat: -1,\n        frameRate: 5,\n        frames: this.anims.generateFrameNames('sprite', {\n          prefix: 'player-2-',\n          start: 0,\n          end: 3\n        })\n      });\n      this.anims.create({\n        key: 'walk-front',\n        repeat: -1,\n        frameRate: 5,\n        frames: this.anims.generateFrameNames('sprite', {\n          prefix: 'player-3-',\n          start: 0,\n          end: 3\n        })\n      });\n      this.player.play('walk-front'); // タイトル追加\n\n      var text = this.add.text(_common_config__WEBPACK_IMPORTED_MODULE_1__[\"WIDTH\"] / 2, 100, 'Phaser 3 - ES6 - Webpack ', {\n        font: '64px Bangers',\n        fill: '#ffffff'\n      });\n      Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__[\"centerGameObjects\"])([text]);\n    }\n    /**\n     * 画面更新\n     * @method\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      var cursorKeys = this.input.keyboard.createCursorKeys();\n\n      if (cursorKeys.left.isDown) {\n        this.player.x -= this.speed;\n\n        if (!this.oldCursor.left.isDown) {\n          this.player.play('walk-left');\n        }\n      }\n\n      if (cursorKeys.right.isDown) {\n        this.player.x += this.speed;\n\n        if (!this.oldCursor.right.isDown) {\n          this.player.play('walk-right');\n        }\n      }\n\n      if (cursorKeys.up.isDown) {\n        this.player.y -= this.speed;\n\n        if (!this.oldCursor.up.isDown) {\n          this.player.play('walk-back');\n        }\n      }\n\n      if (cursorKeys.down.isDown) {\n        this.player.y += this.speed;\n\n        if (!this.oldCursor.down.isDown) {\n          this.player.play('walk-front');\n        }\n      }\n\n      this.oldCursor = JSON.parse(JSON.stringify(cursorKeys));\n    }\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/js/scenes/Game.js?");

/***/ }),

/***/ "./src/js/scenes/Splash.js":
/*!*********************************!*\
  !*** ./src/js/scenes/Splash.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/src/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/config */ \"./src/js/common/config.js\");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ \"./src/js/common/utils.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * @fileoverview スプラッシュ画面\n */\n\n\n\n/**\n * スプラッシュ画面クラス\n * @class\n * @extends Phaser.Scene\n */\n\nvar _default =\n/*#__PURE__*/\nfunction (_Phaser$Scene) {\n  _inherits(_default, _Phaser$Scene);\n\n  /**\n   * コンストラクタ\n   * @constructor\n   */\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, {\n      key: 'SplashScene'\n    }));\n  }\n  /**\n   * 初期化\n   * @method\n   */\n\n\n  _createClass(_default, [{\n    key: \"init\",\n    value: function init() {\n      this.assetLoaded = false;\n    }\n    /**\n     * ゲーム全体で使うアセットの事前ロード\n     * @method\n     */\n\n  }, {\n    key: \"preload\",\n    value: function preload() {\n      var _this = this;\n\n      // プログレスバーの外側\n      var boxWidth = 320;\n      var boxHeight = 50;\n      var boxX = _common_config__WEBPACK_IMPORTED_MODULE_1__[\"WIDTH\"] / 2 - boxWidth / 2;\n      var boxY = _common_config__WEBPACK_IMPORTED_MODULE_1__[\"HEIGHT\"] / 2 - boxHeight / 2;\n      var progressBox = this.add.graphics();\n      progressBox.fillStyle(0x222222, 0.8);\n      progressBox.fillRect(boxX, boxY, boxWidth, boxHeight); // プログレスバーの内側\n\n      var barPadding = 20;\n      var progressBar = this.add.graphics(); // ローディングのテキスト\n\n      var loadingText = this.make.text({\n        x: _common_config__WEBPACK_IMPORTED_MODULE_1__[\"WIDTH\"] / 2,\n        y: _common_config__WEBPACK_IMPORTED_MODULE_1__[\"HEIGHT\"] / 2 - 50,\n        text: 'Loading...',\n        style: {\n          font: '20px monospace',\n          fill: '#ffffff'\n        }\n      }); // ローディングのパーセント\n\n      var percentText = this.make.text({\n        x: _common_config__WEBPACK_IMPORTED_MODULE_1__[\"WIDTH\"] / 2,\n        y: _common_config__WEBPACK_IMPORTED_MODULE_1__[\"HEIGHT\"] / 2,\n        text: '0%',\n        style: {\n          font: '18px monospace',\n          fill: '#000000'\n        }\n      }); // 要素を真ん中にセット\n\n      Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__[\"centerGameObjects\"])([loadingText, percentText]); // ゲームで使うアセットを読み込み\n\n      this.load.atlas('sprite', 'dist/images/sprite.png', 'dist/images/sprite.json'); // ロードにあわせてバーと数値を変更\n\n      this.load.on('progress', function (value) {\n        percentText.setText(parseInt(value * 100) + '%');\n        progressBar.clear();\n        progressBar.fillStyle(0xffffff, 1);\n        progressBar.fillRect(boxX + barPadding / 2, boxY + barPadding / 2, boxWidth * value - barPadding, boxHeight - barPadding);\n      }); // ロード完了後に表示を削除\n\n      this.load.on('complete', function () {\n        setTimeout(function () {\n          progressBar.destroy();\n          progressBox.destroy();\n          loadingText.destroy();\n          percentText.destroy();\n          _this.assetLoaded = true;\n        }, 300);\n      });\n    }\n    /**\n     * 準備ができたらゲーム画面に遷移\n     * @method\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.assetLoaded) {\n        this.scene.start('GameScene');\n      }\n    }\n  }]);\n\n  return _default;\n}(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene);\n\n\n\n//# sourceURL=webpack:///./src/js/scenes/Splash.js?");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/sakaguchiyuuki/work/github/phaser-game/src/js/main.js */\"./src/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js?");

/***/ })

/******/ });