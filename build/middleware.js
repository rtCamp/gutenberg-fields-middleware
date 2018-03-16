/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Gutenberg Middleware.
 */

var _wp$blocks = wp.blocks,
    _registerBlockType = _wp$blocks.registerBlockType,
    RichText = _wp$blocks.RichText;

var GutenbergMiddleWare = function () {
	function GutenbergMiddleWare() {
		_classCallCheck(this, GutenbergMiddleWare);

		this.blockConfigs = {};
		this.components = {};
		this.config = {};

		this.setBlockComponents = this.setBlockComponents.bind(this);
	}

	_createClass(GutenbergMiddleWare, [{
		key: 'setBlockComponents',
		value: function setBlockComponents(props) {
			var _this = this;

			var changedAttributes = {};

			_.each(this.blockConfigs.attributes, function (attribute, key) {
				if (attribute.field && 'text' === attribute.field.type) {
					_this.components[key] = wp.element.createElement(RichText, {
						onChange: function onChange(newContent) {
							changedAttributes[key] = newContent;
							props.setAttributes(changedAttributes);
						},
						value: props.attributes[key],
						placeholder: attribute.field.placeholder
					});
				}
			});
		}
	}, {
		key: 'registerBlockType',
		value: function registerBlockType(namespace, config) {
			var _this2 = this;

			this.config = config;

			this.blockConfigs = _.extend({
				title: '',

				description: '',

				icon: 'universal-access-alt',

				category: 'common',

				attributes: {}

			}, this.config);

			this.blockConfigs.edit = function (props) {
				_this2.setBlockComponents(props);
				return _this2.config.edit ? _this2.config.edit(props, _this2) : _this2.edit(props);
			};

			this.blockConfigs.save = function (props) {
				return _this2.config.save ? _this2.config.save(props, _this2) : _this2.save(props);
			};

			_registerBlockType(namespace, this.blockConfigs);

			return this;
		}
	}, {
		key: 'edit',
		value: function edit(props) {
			var _this3 = this;

			return wp.element.createElement(
				'div',
				null,
				Object.keys(this.components).map(function (key) {
					return _this3.components[key];
				})
			);
		}
	}, {
		key: 'save',
		value: function save(props) {
			return null;
		}
	}]);

	return GutenbergMiddleWare;
}();

window.gutenbergMiddleWare = new GutenbergMiddleWare();

/***/ })
/******/ ]);