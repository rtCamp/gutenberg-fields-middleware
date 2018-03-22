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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fields_rich_text__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields_media_upload__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fields_url_input__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fields_select_control__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fields_checkbox_control__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fields_radio_control__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fields_range_control__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Gutenberg Fields Middleware.
 */

var _wp$blocks = wp.blocks,
    _registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls;

/**
 * Fields
 */









var GutenbergFieldsMiddleWare = function () {
	function GutenbergFieldsMiddleWare() {
		_classCallCheck(this, GutenbergFieldsMiddleWare);

		this.setBlockComponents = this.setBlockComponents.bind(this);
	}

	_createClass(GutenbergFieldsMiddleWare, [{
		key: 'registerBlockType',
		value: function registerBlockType(namespace, config) {
			var _this = this;

			this.blockConfigs = {};
			this.fields = {};
			this.inspectorControlFields = {};
			this.inspectorControls = '';
			this.config = _.extend({}, config);

			this.blockConfigs = _.extend({
				title: '',

				description: '',

				icon: 'universal-access-alt',

				category: 'common',

				attributes: {}

			}, this.config);

			this.blockConfigs.edit = function (props) {
				_this.setBlockComponents(props);
				return _this.config.edit ? _this.config.edit(props, _this) : _this.edit(props);
			};

			this.blockConfigs.save = function (props) {
				return _this.config.save ? _this.config.save(props, _this) : _this.save(props);
			};

			_registerBlockType(namespace, this.blockConfigs);

			return this;
		}
	}, {
		key: 'getFields',
		value: function getFields(fieldType, attributeKey, props, config) {
			var fields = {};

			switch (fieldType) {
				case 'text':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_0__fields_rich_text__["a" /* default */])(props, config, attributeKey);
					break;
				case 'url':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_2__fields_url_input__["a" /* default */])(props, config, attributeKey);
					break;
				case 'image':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_1__fields_media_upload__["a" /* default */])(props, config, attributeKey);
					break;
				case 'video':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_1__fields_media_upload__["a" /* default */])(props, config, attributeKey);
					break;
				case 'audio':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_1__fields_media_upload__["a" /* default */])(props, config, attributeKey);
					break;
				case 'select':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_3__fields_select_control__["a" /* default */])(props, config, attributeKey);
					break;
				case 'range':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_6__fields_range_control__["a" /* default */])(props, config, attributeKey);
					break;
				case 'radio':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_5__fields_radio_control__["a" /* default */])(props, config, attributeKey);
					break;
				case 'checkbox':
					fields[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_4__fields_checkbox_control__["a" /* default */])(props, config, attributeKey);
					break;
			}

			return fields;
		}
	}, {
		key: 'setBlockComponents',
		value: function setBlockComponents(props) {
			var _this2 = this;

			_.each(this.blockConfigs.attributes, function (attribute, attributeKey) {
				if (attribute.field) {
					if ('inspector' === attribute.field.position) {
						_.extend(_this2.inspectorControlFields, _this2.getFields(attribute.field.type, attributeKey, props, attribute.field));
					} else {
						_.extend(_this2.fields, _this2.getFields(attribute.field.type, attributeKey, props, attribute.field));
					}
				}
			});

			this.inspectorControls = wp.element.createElement(
				InspectorControls,
				{ key: 'inspector-control' },
				Object.keys(this.inspectorControlFields).map(function (key) {
					return _this2.inspectorControlFields[key];
				})
			);
		}
	}, {
		key: 'edit',
		value: function edit(props) {
			var _this3 = this;

			return [this.inspectorControls, wp.element.createElement(
				'div',
				{ key: props.className },
				Object.keys(this.fields).map(function (key) {
					return _this3.fields[key];
				})
			)];
		}
	}, {
		key: 'save',
		value: function save(props) {
			return null;
		}
	}]);

	return GutenbergFieldsMiddleWare;
}();

window.gutenbergFieldsMiddleWare = new GutenbergFieldsMiddleWare();

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Text field.
 */

var _wp$blocks = wp.blocks,
    RichText = _wp$blocks.RichText,
    PlainText = _wp$blocks.PlainText;


var richText = function richText(props, config, attributeKey) {
	var defaultAttributes = {
		onChange: function onChange(value) {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		},


		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	if (fieldAttributes.richText) {
		delete fieldAttributes.richText;
		return wp.element.createElement(RichText, fieldAttributes);
	}

	return wp.element.createElement(PlainText, fieldAttributes);
};

/* harmony default export */ __webpack_exports__["a"] = (richText);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_placeholder__ = __webpack_require__(7);
/**
 * Image, Video, Audio Field.
 */

var MediaUpload = wp.blocks.MediaUpload;
var Button = wp.components.Button;
var __ = wp.i18n.__;




var mediaUpload = function mediaUpload(props, config, attributeKey) {
	var buttonText = config.buttonText ? config.buttonText : __('Open Media Library');
	var image = props.attributes[attributeKey];

	var defaultAttributes = {
		onSelect: function onSelect(media) {
			var newAttributes = {};
			newAttributes[attributeKey] = media;
			props.setAttributes(newAttributes);
		},


		type: 'image',

		value: image || '',

		render: function render(_ref) {
			var open = _ref.open;

			var nodes = [];

			if (!image) {
				if (config.imagePlaceholder) {
					nodes.push(Object(__WEBPACK_IMPORTED_MODULE_0__image_placeholder__["a" /* default */])(props, config, attributeKey));
				} else {
					nodes.push(wp.element.createElement(
						Button,
						{ className: 'button button-large button-upload', onClick: open },
						buttonText
					));
				}
			} else {
				nodes.push(wp.element.createElement('img', { className: 'uploaded-image', src: image.url, alt: image.alt }));

				if (!!config.removeButton) {
					nodes.push(wp.element.createElement(
						Button,
						{ className: 'button button-large button-remove', onClick: function onClick() {
								var newAttributes = {};
								newAttributes[attributeKey] = '';
								props.setAttributes(newAttributes);
							} },
						config.removeButton
					));
				}
			}

			return wp.element.createElement(
				'div',
				{ className: 'blocks-' + config.type + '-upload' },
				nodes
			);
		}
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.buttonText;
	delete fieldAttributes.imagePlaceholder;
	delete fieldAttributes.removeButton;

	return wp.element.createElement(MediaUpload, fieldAttributes);
};

/* harmony default export */ __webpack_exports__["a"] = (mediaUpload);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Image Placeholder.
 */

var ImagePlaceholder = wp.blocks.ImagePlaceholder;
var __ = wp.i18n.__;


var imagePlaceholder = function imagePlaceholder(props, config, attributeKey) {
	var defaultAttributes = {
		onSelectImage: function onSelectImage(media) {
			var newAttributes = {};
			newAttributes[attributeKey] = media;
			props.setAttributes(newAttributes);
		},


		className: 'image-placeholder',

		icon: 'format-gallery',

		label: __('Image'),

		multiple: false
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	return wp.element.createElement(ImagePlaceholder, fieldAttributes);
};

/* harmony default export */ __webpack_exports__["a"] = (imagePlaceholder);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Url field.
 */

var UrlInput = wp.blocks.UrlInput;


var urlInput = function urlInput(props, config, attributeKey) {
	var defaultAttributes = {
		onChange: function onChange(value) {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		},


		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(UrlInput, fieldAttributes);
};

/* harmony default export */ __webpack_exports__["a"] = (urlInput);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Select field.
 */

var SelectControl = wp.components.SelectControl;


var selectControl = function selectControl(props, config, attributeKey) {
	var defaultAttributes = {
		onChange: function onChange(value) {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		},


		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(SelectControl, fieldAttributes);
};

/* harmony default export */ __webpack_exports__["a"] = (selectControl);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Url field.
 */

var CheckboxControl = wp.components.CheckboxControl;


var checkboxControl = function checkboxControl(props, attribute, attributeKey) {
	var defaultAttributes = {
		value: '1'
	};

	// @todo not working correctly.
	defaultAttributes.onChange = function (checked) {
		var newAttributes = {};
		newAttributes[attributeKey] = checked ? defaultAttributes.value : false;
		props.setAttributes(newAttributes);
	};

	var fieldAttributes = _.extend(defaultAttributes, attribute.field);

	delete fieldAttributes.type;

	return wp.element.createElement(CheckboxControl, fieldAttributes);
};

/* harmony default export */ __webpack_exports__["a"] = (checkboxControl);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Url field.
 */

var RadioControl = wp.components.RadioControl;


var radioControl = function radioControl(props, config, attributeKey) {
	var defaultAttributes = {
		onChange: function onChange(value) {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		},


		selected: props.attributes[attributeKey]
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(RadioControl, fieldAttributes);
};

/* harmony default export */ __webpack_exports__["a"] = (radioControl);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Range field.
 */

var RangeControl = wp.components.RangeControl;


var rangeControl = function rangeControl(props, config, attributeKey) {
	var defaultAttributes = {
		onChange: function onChange(value) {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		},


		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(RangeControl, fieldAttributes);
};

/* harmony default export */ __webpack_exports__["a"] = (rangeControl);

/***/ })
/******/ ]);