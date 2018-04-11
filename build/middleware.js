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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fields_rich_text__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields_text__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fields_textarea__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fields_input_field__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fields_link__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fields_image__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fields_select__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fields_checkbox__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fields_radio__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fields_range__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fields_button__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fields_button_editable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fields_color__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__fields_dropdown__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fields_code_editor__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fields_date_time__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fields_form_toggle__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__fields_tree_select__ = __webpack_require__(21);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Gutenberg Fields Middleware.
 */

var InspectorControls = wp.blocks.InspectorControls;
var addFilter = wp.hooks.addFilter;

/**
 * Fields
 */




















/**
 * Gutenberg Middleware Class.
 */

var GutenbergFieldsMiddleWare = function () {
	/**
  * Constructor.
  *
  * @param {Object} config Block configuration.
  *
  * @return {void}
  */
	function GutenbergFieldsMiddleWare(config) {
		_classCallCheck(this, GutenbergFieldsMiddleWare);

		this.blockConfigs = {};
		this.fields = {};
		this.inspectorControlFields = {};
		this.inspectorControls = '';
		this.config = _.extend({}, config);

		this.setupBlockFields = this.setupBlockFields.bind(this);
	}

	/**
  * Get middleware block settings.
  *
  * @return {Object} Settings.
  */


	_createClass(GutenbergFieldsMiddleWare, [{
		key: 'getSettings',
		value: function getSettings() {
			var _this = this;

			this.blockConfigs = _.extend({
				title: '',

				category: 'common',

				attributes: {}

			}, this.config);

			this.blockConfigs.edit = function (props) {
				_this.setupBlockFields(props);

				props.middleware = _this;

				if (_this.config.edit) {
					if (_this.constructor.isClassComponent(_this.config.edit)) {
						return React.createElement(_this.config.edit, props);
					}

					return _this.config.edit(props);
				}

				return _this.edit(props);
			};

			this.blockConfigs.save = function (props) {
				props.middleware = _this;

				if (_this.config.save) {
					if (_this.constructor.isClassComponent(_this.config.save)) {
						return React.createElement(_this.config.save, props);
					}

					return _this.config.save(props);
				}

				return _this.save(props);
			};

			return this.blockConfigs;
		}

		/**
   * Get field according to the field type.
   *
   * @param {Object} props        Properties.
   * @param {Object} config       Field configuration provided.
   * @param {String} attributeKey Attribute Key.
   *
   * @return {Object} Field.
   */

	}, {
		key: 'getField',
		value: function getField(props, config, attributeKey) {
			var field = {};

			switch (config.type) {
				case 'text':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_1__fields_text__["a" /* default */])(props, config, attributeKey);
					break;
				case 'rich-text':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_0__fields_rich_text__["a" /* default */])(props, config, attributeKey);
					break;
				case 'link':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_4__fields_link__["a" /* default */])(props, config, attributeKey);
					break;
				case 'image':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_5__fields_image__["a" /* default */])(props, config, attributeKey);
					break;
				case 'select':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_6__fields_select__["a" /* default */])(props, config, attributeKey);
					break;
				case 'range':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_9__fields_range__["a" /* default */])(props, config, attributeKey);
					break;
				case 'radio':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_8__fields_radio__["a" /* default */])(props, config, attributeKey);
					break;
				case 'checkbox':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_7__fields_checkbox__["a" /* default */])(props, config, attributeKey);
					break;
				case 'button':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_10__fields_button__["a" /* default */])(props, config, attributeKey);
					break;
				case 'button-editable':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_11__fields_button_editable__["a" /* default */])(props, config, attributeKey);
					break;
				case 'color':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_12__fields_color__["a" /* default */])(props, config, attributeKey);
					break;
				case 'dropdown':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_13__fields_dropdown__["a" /* default */])(props, config);
					break;
				case 'code-editor':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_14__fields_code_editor__["a" /* default */])(props, config, attributeKey);
					break;
				case 'date-time':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_15__fields_date_time__["a" /* default */])(props, config, attributeKey);
					break;
				case 'textarea':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_2__fields_textarea__["a" /* default */])(props, config, attributeKey);
					break;
				case 'switch':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_16__fields_form_toggle__["a" /* default */])(props, config, attributeKey);
					break;
				case 'tree-select':
					field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_17__fields_tree_select__["a" /* default */])(props, config, attributeKey);
					break;
			}

			if (_.contains(['email', 'hidden', 'number', 'search', 'tel', 'time', 'date', 'datetime-local', 'file', 'month', 'password', 'time', 'url', 'week'], config.type)) {
				field[attributeKey] = Object(__WEBPACK_IMPORTED_MODULE_3__fields_input_field__["a" /* default */])(props, config, attributeKey);
			}

			return field;
		}

		/**
   * Setup block fields and inspector controls.
   *
   * @param {Object} props Properties.
   *
   * @return {void}
   */

	}, {
		key: 'setupBlockFields',
		value: function setupBlockFields(props) {
			var _this2 = this;

			_.each(this.blockConfigs.attributes, function (attribute, attributeKey) {
				if (attribute.field) {
					if ('inspector' === attribute.field.placement) {
						_.extend(_this2.inspectorControlFields, _this2.getField(props, attribute.field, attributeKey));
					} else {
						_.extend(_this2.fields, _this2.getField(props, attribute.field, attributeKey));
					}
				}
			});

			this.inspectorControls = props.isSelected ? React.createElement(
				InspectorControls,
				{ key: 'inspector-control' },
				Object.keys(this.inspectorControlFields).map(function (key) {
					return _this2.inspectorControlFields[key];
				})
			) : null;
		}

		/**
   * Check if it is a react component.
   *
   * @param {*} component Component or function.
   *
   * @return {boolean} Is react component or not.
   */

	}, {
		key: 'edit',


		/**
   * Fallback edit method.
   *
   * @param {Object} props Properties.
   *
   * @return {Object} Edit elements.
   */
		value: function edit(props) {
			var _this3 = this;

			return [this.inspectorControls, React.createElement(
				'div',
				{ key: props.className },
				Object.keys(this.fields).map(function (key) {
					return _this3.fields[key];
				})
			)];
		}

		/**
   * Fallback save method.
   *
   * @return {null} Null.
   */

	}, {
		key: 'save',
		value: function save() {
			return null;
		}
	}], [{
		key: 'isClassComponent',
		value: function isClassComponent(component) {
			return typeof component === 'function' && component.prototype && !!component.prototype.isReactComponent;
		}
	}]);

	return GutenbergFieldsMiddleWare;
}();

/**
 * Filters the block settings except for default gutenberg blocks.
 *
 * @param {Object} settings Block settings.
 * @param {String} name     Block name.
 *
 * @return {Object} Filtered settings.
 */


var filterBlockSettings = function filterBlockSettings(settings, name) {
	if (!/^core/.test(name)) {
		var middleware = new GutenbergFieldsMiddleWare(settings);
		return middleware.getSettings();
	}

	return settings;
};

addFilter('blocks.registerBlockType', 'gutenberg-field-middleware/registration/attributes', filterBlockSettings, 1);

/* harmony default export */ __webpack_exports__["default"] = (GutenbergFieldsMiddleWare);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = richText;
/**
 * Text field.
 */

var RichText = wp.blocks.RichText;


function richText(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(RichText, fieldAttributes);
}

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inputField;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Input field for email, hidden, number, search, tel.
 */

var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    TextControl = _wp$components.TextControl;


function inputField(props, config, attributeKey) {
	var defaultAttributes = {

		value: props.attributes[attributeKey],

		className: 'components-text-control__input'
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	var id = fieldAttributes.id ? fieldAttributes.id : _.uniqueId(attributeKey);
	var label = fieldAttributes.label;
	var help = fieldAttributes.help;

	delete fieldAttributes.id;
	delete fieldAttributes.placement;
	delete fieldAttributes.label;
	delete fieldAttributes.help;

	return React.createElement(
		BaseControl,
		{ id: id, label: label, help: help },
		React.createElement(TextControl, _extends({
			id: id
		}, fieldAttributes))
	);
}

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = imagePlaceholder;
/**
 * Image Placeholder.
 */

var ImagePlaceholder = wp.blocks.ImagePlaceholder;
var __ = wp.i18n.__;


function imagePlaceholder(props, config, attributeKey) {
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

	return React.createElement(ImagePlaceholder, fieldAttributes);
}

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = button;
/**
 * Button field.
 */

var Button = wp.components.Button;
var __ = wp.i18n.__;


function button(props, config) {
	var defaultAttributes = {
		buttonText: __('Button')
	};

	var fieldAttributes = _.extend(defaultAttributes, config);
	var buttonText = fieldAttributes.buttonText;

	delete fieldAttributes.buttonText;
	delete fieldAttributes.type;

	return React.createElement(
		Button,
		fieldAttributes,
		buttonText
	);
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buttonEditable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_button_editable__ = __webpack_require__(15);
/**
 * Button field.
 */

var __ = wp.i18n.__;



function buttonEditable(props, config, attributeKey) {
	var defaultAttributes = {
		placeholder: __('Add text…'),
		tagName: 'span',
		value: props.attributes[attributeKey] ? props.attributes[attributeKey].text : '',
		className: 'wp-block-button__link',
		keepPlaceholderOnFocus: true
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			var buttonValue = _.extend({}, props.attributes[attributeKey] || {});
			buttonValue.text = value;
			newAttributes[attributeKey] = buttonValue;
			props.setAttributes(newAttributes);
		}
	};

	fieldAttributes.onInputChange = function (value) {
		if (config.onInputChange) {
			config.onInputChange(value, props);
		} else {
			var newAttributes = {};
			var buttonValue = _.extend({}, props.attributes[attributeKey] || {});
			buttonValue.link = value;
			newAttributes[attributeKey] = buttonValue;
			props.setAttributes(newAttributes);
		}
	};

	return React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_button_editable__["a" /* default */], {
		fieldAttributes: fieldAttributes,
		inputValue: props.attributes[attributeKey] ? props.attributes[attributeKey].link : '',
		buttonValue: fieldAttributes.value,
		isSelected: props.isSelected
	});
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;
var _wp$blocks = wp.blocks,
    RichText = _wp$blocks.RichText,
    UrlInput = _wp$blocks.UrlInput;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton;
var __ = wp.i18n.__;

var ButtonEditable = function (_Component) {
	_inherits(ButtonEditable, _Component);

	function ButtonEditable() {
		_classCallCheck(this, ButtonEditable);

		var _this = _possibleConstructorReturn(this, (ButtonEditable.__proto__ || Object.getPrototypeOf(ButtonEditable)).apply(this, arguments));

		_this.state = {
			displayForm: false
		};

		_this.onFocus = _this.onFocus.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	_createClass(ButtonEditable, [{
		key: "onFocus",
		value: function onFocus() {
			this.setState({
				displayForm: true
			});
		}
	}, {
		key: "onSubmit",
		value: function onSubmit(event) {
			event.preventDefault();
			this.setState({
				displayForm: false
			});
		}
	}, {
		key: "render",
		value: function render() {
			var form = this.state.displayForm && this.props.isSelected && React.createElement(
				"form",
				{
					key: "form-link",
					className: "blocks-button__inline-link",
					onSubmit: this.onSubmit },
				React.createElement(Dashicon, { icon: "admin-links" }),
				React.createElement(UrlInput, {
					value: this.props.inputValue,
					onChange: this.props.fieldAttributes.onInputChange
				}),
				React.createElement(IconButton, { icon: "editor-break", label: __('Apply'), type: "submit" })
			);

			return React.createElement(
				"div",
				{ className: "button-editable" },
				React.createElement(
					"span",
					{ className: "wp-block-button", key: "button" },
					React.createElement(RichText, _extends({
						onFocus: this.onFocus,
						onClick: this.onFocus // Hack.
					}, this.props.fieldAttributes))
				),
				form
			);
		}
	}]);

	return ButtonEditable;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ButtonEditable);

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropdown;
/**
 * Dropdown field.
 */

var Dropdown = wp.components.Dropdown;
var __ = wp.i18n.__;


function dropdown(props, config) {
	var defaultAttributes = {
		renderToggle: function renderToggle(_ref) {
			var isOpen = _ref.isOpen,
			    onToggle = _ref.onToggle;

			return React.createElement(
				'button',
				{ className: 'button-primary button', onClick: onToggle, 'aria-expanded': isOpen },
				__('Toggle Popover!')
			);
		},
		renderContent: function renderContent() {
			return React.createElement(
				'div',
				null,
				__('Dummy Popover Content!')
			);
		}
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return React.createElement(Dropdown, fieldAttributes);
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = codeEditor;
/**
 * Code editor field.
 */

var CodeEditor = wp.components.CodeEditor;


function codeEditor(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(CodeEditor, fieldAttributes);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dateTime;
/**
 * Date time field.
 */

var _wp$components = wp.components,
    DateTimePicker = _wp$components.DateTimePicker,
    PanelBody = _wp$components.PanelBody;
var _wp$date = wp.date,
    dateI18n = _wp$date.dateI18n,
    settings = _wp$date.settings;
var __ = wp.i18n.__;


function dateTime(props, config, attributeKey) {
	var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
	.replace(/\\\\/g, '') // Replace "//" with empty strings
	.split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
	);

	var defaultAttributes = {

		locale: settings.l10n.locale,

		currentDate: props.attributes[attributeKey],

		is12Hour: is12HourTime,

		label: __('Date')
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	var label = fieldAttributes.label;

	var getFormattedDate = function getFormattedDate() {
		return props.attributes[attributeKey] ? dateI18n(settings.formats.datetime, props.attributes[attributeKey]) : '';
	};

	delete fieldAttributes.type;
	delete fieldAttributes.label;

	return React.createElement(
		PanelBody,
		{ initialOpen: false, title: [label + ': ', React.createElement(
				'span',
				{ key: 'label' },
				getFormattedDate()
			)] },
		React.createElement(DateTimePicker, fieldAttributes)
	);
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formToggle;
/**
 * Switch field.
 */

var _wp$components = wp.components,
    FormToggle = _wp$components.FormToggle,
    BaseControl = _wp$components.BaseControl;


function formToggle(props, config, attributeKey) {
	var defaultAttributes = {
		checked: 'on' === props.attributes[attributeKey],
		value: props.attributes[attributeKey] || 'off'
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (event) {
		if (config.onChange) {
			config.onChange(event, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = 'on' === event.target.value ? 'off' : 'on';
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(
		BaseControl,
		{
			label: fieldAttributes.label,
			id: fieldAttributes.id,
			help: fieldAttributes.help,
			className: 'components-toggle-control'
		},
		React.createElement(FormToggle, fieldAttributes)
	);
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = treeSelect;
/**
 * tree-select field.
 */

var TreeSelect = wp.components.TreeSelect;


function treeSelect(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey]
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(TreeSelect, fieldAttributes);
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkbox;
/**
 * Checkbox field.
 */

var CheckboxControl = wp.components.CheckboxControl;


function checkbox(props, config, attributeKey) {
	var defaultAttributes = {
		value: '1',
		checked: props.attributes[attributeKey]
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (checked) {
		if (config.onChange) {
			config.onChange(checked, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = checked ? defaultAttributes.value : false;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(CheckboxControl, fieldAttributes);
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = color;
/**
 * Color Palette field.
 */

var ColorPalette = wp.blocks.ColorPalette;
var PanelColor = wp.components.PanelColor;
var __ = wp.i18n.__;


function color(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || '',

		label: __('Color')
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(
		PanelColor,
		{ title: fieldAttributes.label, colorValue: fieldAttributes.value },
		React.createElement(ColorPalette, fieldAttributes)
	);
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = textarea;
/**
 * Textarea field.
 */

var _wp$components = wp.components,
    TextareaControl = _wp$components.TextareaControl,
    BaseControl = _wp$components.BaseControl;


function textarea(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(
		BaseControl,
		{
			id: fieldAttributes.id
		},
		React.createElement(TextareaControl, fieldAttributes)
	);
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = select;
/**
 * Select field.
 */

var SelectControl = wp.components.SelectControl;


function select(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(SelectControl, fieldAttributes);
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = radio;
/**
 * Radio Control field.
 */

var RadioControl = wp.components.RadioControl;


function radio(props, config, attributeKey) {
	var defaultValue = config.default || '';
	var defaultAttributes = {
		selected: props.attributes[attributeKey] || defaultValue
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(RadioControl, fieldAttributes);
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = range;
/**
 * Range field.
 */

var RangeControl = wp.components.RangeControl;


function range(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(RangeControl, fieldAttributes);
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = text;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_field__ = __webpack_require__(5);
/**
 * Text field.
 */

var PlainText = wp.blocks.PlainText;



function text(props, config, attributeKey) {
	if ('inspector' === config.placement) {
		return Object(__WEBPACK_IMPORTED_MODULE_0__input_field__["a" /* default */])(props, config, attributeKey);
	}

	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	return React.createElement(PlainText, fieldAttributes);
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = link;
/**
 * Url field.
 */

var UrlInput = wp.blocks.UrlInput;
var BaseControl = wp.components.BaseControl;


function link(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || ''
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.type;

	if ('inspector' === config.placement) {
		delete fieldAttributes.placement;
		return React.createElement(
			BaseControl,
			{
				label: fieldAttributes.label,
				id: fieldAttributes.id,
				help: fieldAttributes.help,
				className: fieldAttributes.className
			},
			React.createElement(UrlInput, fieldAttributes)
		);
	}

	return React.createElement(UrlInput, fieldAttributes);
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = image;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_image_placeholder__ = __webpack_require__(8);
/**
 * Image Field.
 */

var MediaUpload = wp.blocks.MediaUpload;
var Button = wp.components.Button;
var __ = wp.i18n.__;




function image(props, config, attributeKey) {
	var buttonText = config.buttonText ? config.buttonText : __('Open Media Library');
	var image = props.attributes[attributeKey];

	var defaultAttributes = {

		type: 'image',

		value: image || '',

		render: function render(_ref) {
			var open = _ref.open;

			var nodes = [];

			if (!image) {
				if (config.imagePlaceholder) {
					nodes.push(Object(__WEBPACK_IMPORTED_MODULE_0__components_image_placeholder__["a" /* default */])(props, config, attributeKey));
				} else {
					nodes.push(React.createElement(
						Button,
						{ className: 'button button-large button-upload', onClick: open },
						buttonText
					));
				}
			} else {
				nodes.push(React.createElement('img', { className: 'uploaded-image', src: image.url, alt: image.alt }));

				if (!!config.removeButtonText) {
					nodes.push(React.createElement(
						Button,
						{ className: 'button button-large button-remove', onClick: function onClick() {
								var newAttributes = {};
								newAttributes[attributeKey] = '';
								props.setAttributes(newAttributes);
							} },
						config.removeButtonText
					));
				}
			}

			return React.createElement(
				'div',
				{ className: 'blocks-' + config.type + '-upload' },
				nodes
			);
		}
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onSelect = function (media) {
		if (config.onSelect) {
			config.onSelect(media, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = media;
			props.setAttributes(newAttributes);
		}
	};

	delete fieldAttributes.buttonText;
	delete fieldAttributes.imagePlaceholder;
	delete fieldAttributes.removeButtonText;

	return React.createElement(MediaUpload, fieldAttributes);
}

/***/ })
/******/ ]);
//# sourceMappingURL=middleware.js.map