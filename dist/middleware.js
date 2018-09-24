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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(65);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);





var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/components/field/index.js';
var Component = wp.element.Component;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Toolbar = _wp$components.Toolbar,
    PanelBody = _wp$components.PanelBody;
var PanelColor = wp.components.PanelColor;

/**
 * Field component as a wrapper for some fields so that the props can be dynamically updated from edit method if required.
 */

var Field = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Field, _Component);

	function Field() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Field);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Field.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Field)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Field, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    id = _props.id,
			    placement = _props.placement,
			    label = _props.label,
			    help = _props.help,
			    baseControlClassName = _props.baseControlClassName,
			    type = _props.type,
			    panel = _props.panel,
			    initialOpen = _props.initialOpen;


			var field = null;

			if ('inspector' === placement || label || help) {
				field = wp.element.createElement(
					BaseControl,
					{ label: label, help: help, id: id, className: baseControlClassName, __source: {
							fileName: _jsxFileName,
							lineNumber: 25
						}
					},
					this.props.children
				);
			} else if ('block-controls' === placement) {
				field = wp.element.createElement(
					Toolbar,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 31
						}
					},
					this.props.children
				);
			} else {
				field = this.props.children;
			}

			if ('color' === type && panel) {
				field = wp.element.createElement(
					PanelColor,
					{ title: label, colorValue: value, initialOpen: initialOpen, __source: {
							fileName: _jsxFileName,
							lineNumber: 41
						}
					},
					this.props.children
				);
			}

			if ('date-time' === type) {
				if (panel) {
					field = wp.element.createElement(
						PanelBody,
						{ initialOpen: initialOpen, title: [props.label + ': ', wp.element.createElement(
								'span',
								{ key: 'label', __source: {
										fileName: _jsxFileName,
										lineNumber: 52
									}
								},
								props.getFormattedDate()
							)], __source: {
								fileName: _jsxFileName,
								lineNumber: 50
							}
						},
						this.props.children
					);
				} else {
					field = wp.element.createElement(
						'div',
						{ className: 'middleware-date-time-no-panel', __source: {
								fileName: _jsxFileName,
								lineNumber: 60
							}
						},
						field
					);
				}
			}

			if ('color' === type) {
				field = wp.element.createElement(
					'div',
					{ className: 'middleware-color-field', __source: {
							fileName: _jsxFileName,
							lineNumber: 69
						}
					},
					field
				);
			}

			if ('link' === type) {
				field = wp.element.createElement(
					'div',
					{ className: 'middleware-link-field', __source: {
							fileName: _jsxFileName,
							lineNumber: 77
						}
					},
					field
				);
			}

			return field;
		}
	}]);

	return Field;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Field);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(31)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(2);
var ctx = __webpack_require__(33);
var hide = __webpack_require__(11);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(69);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(42);
var enumBugKeys = __webpack_require__(32);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(49);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(95);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(99);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(49);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getMiddlewareWarnings;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDashIconSuffix;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDashIconSuffixByType;
/**
 * Get middeware warnings when some dependency is not added.
 *
 * @return {string} Warning.
 */
function getMiddlewareWarnings() {
	var error = false;

	if ('undefined' === typeof wp) {
		error = 'MIDDLEWARE ERROR: No wp object found, its a dependency for gutenberg middleware to work.';
	} else if ('undefined' === typeof wp.blocks) {
		error = 'MIDDLEWARE ERROR: wp.blocks object is not defined, have you used wp-blocks as dependency when enqueuing middleware script ?';
	} else if ('undefined' === typeof wp.i18n) {
		error = 'MIDDLEWARE ERROR: wp.i18n object is not defined, have you used wp-i18n as dependency when enqueuing middleware script ?';
	} else if ('undefined' === typeof wp.element) {
		error = 'MIDDLEWARE ERROR: wp.element object is not defined, have you used wp-element as dependency when enqueuing middleware script ?';
	} else if ('undefined' === typeof wp.date) {
		error = 'MIDDLEWARE ERROR: wp.date object is not defined, have you used wp-date as dependency when enqueuing middleware script ?';
	} else if ('undefined' === typeof wp.hooks) {
		error = 'MIDDLEWARE ERROR: wp.hooks object is not defined, have you used wp-hooks as dependency when enqueuing middleware script ?';
	}

	return error;
}

/**
 * Get dashicon css class suffix using extension.
 *
 * @param {string} extension File extension.
 * @return {string} Dashicon suffix.
 */
function getDashIconSuffix(extension) {
	var suffix = 'media-default';

	if ('zip' === extension) {
		suffix = 'media-archive';
	} else if (_.contains(['pdf', 'epub', 'azw', 'indd'], extension)) {
		suffix = 'book';
	} else if (_.contains(['jpg', 'png', 'gif', 'jpeg', 'tif', 'ico', 'bmp', 'svg'], extension)) {
		suffix = 'format-image';
	} else if (_.contains(['mp4', 'avi', 'flv', 'mov', 'mpg', 'rm', 'swf', 'wmv', 'ogv', '3gp', '3g2', 'm4v', 'mpeg'], extension)) {
		suffix = 'media-video';
	} else if (_.contains(['pptx', 'pptm', 'ppt', 'pot', 'potx', 'potm', 'pps', 'ppsx'], extension)) {
		suffix = 'media-interactive';
	} else if (_.contains(['mp3', 'm4a', 'ogg', 'wav'], extension)) {
		suffix = 'media-audio';
	} else if (_.contains(['xls', 'xlsx', 'xla', 'xlb', 'xlc', 'xld', 'xlk', 'xll', 'xlm', 'xlt', 'xlv', 'xlw', 'numbers'], extension)) {
		suffix = 'media-spreadsheet';
	} else if (_.contains(['doc', 'docx', 'docm', 'pages'], extension)) {
		suffix = 'media-document';
	} else if (_.contains(['txt', 'odt', 'rtf', 'log'], extension)) {
		suffix = 'media-text';
	}

	return suffix;
}

/**
 * Get dashicon suffix by file type.
 *
 * @param {string} type File type.
 * @return {string} Dashicon suffix.
 */
function getDashIconSuffixByType(type) {
	var suffix = '';

	if ('image' === type) {
		suffix = 'format-image';
	} else if (_.contains(['video', 'audio', 'interactive', 'spreadsheet', 'document', 'text'], type)) {
		suffix = 'media-' + type;
	} else {
		suffix = getDashIconSuffix(type);
	}

	return suffix;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(78)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(50)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(64);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(80);
var enumBugKeys = __webpack_require__(32);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(47)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(81).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
var global = __webpack_require__(4);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(16);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(36);
var wksExt = __webpack_require__(40);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(62)(false);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(28);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(29);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(2);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(47)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(17);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(76);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(85);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(36);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(51);
var hide = __webpack_require__(11);
var has = __webpack_require__(7);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(79);
var setToStringTag = __webpack_require__(38);
var getPrototypeOf = __webpack_require__(48);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(42);
var hiddenKeys = __webpack_require__(32).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(19);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(34);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(46);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(55);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(28);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inputField;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/input-field/index.js';
/**
 * Input field for email, hidden, number, search, tel.
 */

var TextControl = wp.components.TextControl;


function inputField(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend(defaultConfig, {
		className: 'middleware-input-field middleware-input-field-' + config.type
	});

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.id = fieldAttributes.id ? fieldAttributes.id : attributeKey;

	return wp.element.createElement(TextControl, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}));
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(25);




var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/index.js';
/**
 * Gutenberg Fields Middleware.
 */



var _ref = 'undefined' !== typeof wp.editor ? wp.editor : {},
    InspectorControls = _ref.InspectorControls,
    BlockControls = _ref.BlockControls;

var _ref2 = 'undefined' !== typeof wp.hooks ? wp.hooks : {},
    addFilter = _ref2.addFilter;

var withState = wp.compose.withState;

var middlewareWarnings = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["c" /* getMiddlewareWarnings */])();

if (middlewareWarnings) {
	console.error(middlewareWarnings); // eslint-disable-line
}

/**
 * Fields
 */
var fields = !middlewareWarnings ? __webpack_require__(72) : false;

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
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, GutenbergFieldsMiddleWare);

		this.blockConfigs = {};
		this.fields = {};
		this.inspectorControlFields = {};
		this.inspectorControls = null;
		this.blockControlFields = {};
		this.blockControls = null;
		this.config = _.extend({}, config);
		this.helperFields = {};

		this.setupBlockFields = this.setupBlockFields.bind(this);
		this.setupField = this.setupField.bind(this);
		this.getHelperFields = this.getHelperFields.bind(this);
		this.getBlockAlignmentToolbarAttributeKey = this.getBlockAlignmentToolbarAttributeKey.bind(this);
		this.getField = this.getField.bind(this);
		this.getFieldConfig = this.getFieldConfig.bind(this);
		this.getBlockControls = this.getBlockControls.bind(this);
		this.getInspectorControls = this.getInspectorControls.bind(this);
	}

	/**
  * Get middleware block settings.
  *
  * @return {Object} Settings.
  */


	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(GutenbergFieldsMiddleWare, [{
		key: 'getSettings',
		value: function getSettings() {
			var _this = this;

			this.blockConfigs = _.extend({
				title: '',

				category: 'common',

				attributes: {}

			}, this.config);

			if (!fields) {
				return this.blockConfigs;
			}

			var blockStates = _.extend({
				editable: ''
			}, this.config.blockStates || {});

			delete this.blockConfigs.blockStates;

			this.blockConfigs.edit = withState(blockStates)(function (props) {
				_this.setupBlockFields(props);

				var wrapperClassName = 'middleware-block ' + props.className;

				if (_this.config.edit) {
					if (_this.constructor.isClassComponent(_this.config.edit)) {
						return wp.element.createElement(
							'div',
							{ className: wrapperClassName, __source: {
									fileName: _jsxFileName,
									lineNumber: 84
								}
							},
							wp.element.createElement(_this.config.edit, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ middleware: _this }, props, {
								__source: {
									fileName: _jsxFileName,
									lineNumber: 84
								}
							}))
						);
					}

					return wp.element.createElement(
						'div',
						{ className: wrapperClassName, __source: {
								fileName: _jsxFileName,
								lineNumber: 87
							}
						},
						_this.config.edit(props, _this)
					);
				}

				return wp.element.createElement(
					'div',
					{ className: wrapperClassName, __source: {
							fileName: _jsxFileName,
							lineNumber: 90
						}
					},
					_this.edit(props, _this)
				);
			});

			var BlockAlignmentToolbarAttributeKey = this.getBlockAlignmentToolbarAttributeKey();

			if (BlockAlignmentToolbarAttributeKey) {
				this.blockConfigs.getEditWrapperProps = function (attributes) {
					var newAttributes = {};
					var getEditWrapperProps = _this.config.getEditWrapperProps ? _this.config.getEditWrapperProps(attributes) : {};
					var align = attributes[BlockAlignmentToolbarAttributeKey];

					if (_.contains(['left', 'center', 'right', 'wide', 'full'], align)) {
						newAttributes = { 'data-align': align };
					}

					return _.extend(newAttributes, getEditWrapperProps);
				};
			}

			this.blockConfigs.save = function (props) {

				if (_this.config.save) {
					if (_this.constructor.isClassComponent(_this.config.save)) {
						return wp.element.createElement(_this.config.save, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ middleware: _this }, props, {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 113
							}
						}));
					}

					return _this.config.save(props, _this);
				}

				return _this.save(props, _this);
			};

			return this.blockConfigs;
		}

		/**
   * Get field according to the field type.
   *
   * @param {Object} props        Properties.
   * @param {String} attributeKey Attribute Key.
   * @param {Object} fieldConfig  Extra field configuration, can be used to override or extend config from edit().
   *
   * @return {Object} Field.
   */

	}, {
		key: 'getField',
		value: function getField(props, attributeKey) {
			var fieldConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

			var field = {};
			var defaultConfig = this.constructor.getDefaultFieldConfig(props, attributeKey);
			var config = _.extend(this.getFieldConfig(attributeKey), fieldConfig);

			switch (config.type) {
				case 'text':
					field = fields.text(props, config, defaultConfig, attributeKey, this);
					break;
				case 'rich-text':
					field = fields.richText(props, config, defaultConfig, attributeKey, this);
					break;
				case 'link':
					field = fields.link(props, config, defaultConfig, attributeKey, this);
					break;
				case 'video':
				case 'audio':
				case 'image':
					field = fields.mediaUpload(props, config, defaultConfig, attributeKey, this);
					break;
				case 'select':
					field = fields.select(props, config, defaultConfig, attributeKey, this);
					break;
				case 'range':
					field = fields.range(props, config, defaultConfig, attributeKey, this);
					break;
				case 'radio':
					field = fields.radio(props, config, defaultConfig, attributeKey, this);
					break;
				case 'checkbox':
					field = fields.checkbox(props, config, defaultConfig, attributeKey, this);
					break;
				case 'button-editable':
					field = fields.buttonEditable(props, config, defaultConfig, attributeKey, this);
					break;
				case 'color':
					field = fields.color(props, config, defaultConfig, attributeKey, this);
					break;
				case 'code-editor':
					field = fields.codeEditor(props, config, defaultConfig, attributeKey, this);
					break;
				case 'date-time':
					field = fields.dateTime(props, config, defaultConfig, attributeKey, this);
					break;
				case 'textarea':
					field = fields.textarea(props, config, defaultConfig, attributeKey, this);
					break;
				case 'switch':
					field = fields.formToggle(props, config, defaultConfig, attributeKey, this);
					break;
				case 'tree-select':
					field = fields.treeSelect(props, config, defaultConfig, attributeKey, this);
					break;
				case 'file-upload':
					field = fields.fileUpload(props, config, defaultConfig, attributeKey, this);
					break;
				case 'block-alignment-toolbar':
					field = fields.blockAlignmentToolbar(props, config, defaultConfig, attributeKey, this);
					break;
				case 'alignment-toolbar':
					field = fields.alignmentToolbar(props, config, defaultConfig, attributeKey, this);
					break;
				case 'icons-toolbar':
					field = fields.iconsToolbar(props, config, defaultConfig, attributeKey, this);
					break;
				case 'media-icon':
					field = fields.mediaIcon(props, config, defaultConfig, attributeKey, this);
					break;
				case 'dropdown-menu':
					field = fields.dropDownMenu(props, config, defaultConfig, attributeKey, this);
					break;
				case 'url-input-button':
					field = fields.urlInputButton(props, config, defaultConfig, attributeKey, this);
					break;
			}

			if (_.contains(['email', 'hidden', 'number', 'search', 'tel', 'time', 'date', 'datetime-local', 'file', 'month', 'password', 'time', 'url', 'week'], config.type)) {
				field = fields.inputField(props, config, defaultConfig, attributeKey, this);
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

			// Setup helper fields first.
			_.each(this.blockConfigs.attributes, function (attribute) {
				if (attribute.field && attribute.field.helperFields) {
					_.each(attribute.field.helperFields, function (helperFieldAttributeKey) {
						_.extend(_this2.helperFields, _this2.setupField(props, helperFieldAttributeKey, false));
					});
				}
			});

			_.each(this.blockConfigs.attributes, function (attribute, attributeKey) {
				if (attribute.field && !_this2.helperFields[attributeKey]) {
					_this2.setupField(props, attributeKey);
				}
			});

			this.inspectorControls = this.getInspectorControls(props);
			this.blockControls = this.getBlockControls(props);
		}

		/**
   * Get block controls.
   *
   * @param {Object} props Props
   * @param {array} fields Fields
   *
   * @return {Object|null}
   */

	}, {
		key: 'getBlockControls',
		value: function getBlockControls(props) {
			var _this3 = this;

			var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			return props.isSelected ? wp.element.createElement(
				BlockControls,
				{ key: 'block-controls', __source: {
						fileName: _jsxFileName,
						lineNumber: 254
					}
				},
				_.isEmpty(fields) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.blockControlFields).map(function (key) {
					return _this3.blockControlFields[key];
				}),
				!_.isEmpty(fields) && fields
			) : null;
		}

		/**
   * Get inspector controls.
   *
   * @param {Object} props Props
   * @param {array} fields Fields
   *
   * @return {Object|null}
   */

	}, {
		key: 'getInspectorControls',
		value: function getInspectorControls(props) {
			var _this4 = this;

			var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			return props.isSelected ? wp.element.createElement(
				InspectorControls,
				{ key: 'inspector-control', __source: {
						fileName: _jsxFileName,
						lineNumber: 275
					}
				},
				_.isEmpty(fields) && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.inspectorControlFields).map(function (key) {
					return _this4.inspectorControlFields[key];
				}),
				!_.isEmpty(fields) && fields
			) : null;
		}

		/**
   * Setup a single Field.
   *
   * @param {Object}  props        Properties.
   * @param {String}  attributeKey Attribute key.
   * @param {Boolean} extend       Whether to extend the field with field objects.
   *
   * @return {Object|void} Field.
   */

	}, {
		key: 'setupField',
		value: function setupField(props, attributeKey) {
			var extend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			var field = this.getField(props, attributeKey);
			var config = this.getFieldConfig(attributeKey);

			if ('inspector' === config.placement) {
				this.inspectorControlFields[attributeKey] = field;
			} else if ('block-controls' === config.placement) {
				this.blockControlFields[attributeKey] = field;
			} else if (extend) {
				this.fields[attributeKey] = field;
			}

			return field;
		}

		/**
   * Get field configuration.
   *
   * @param {String} attributeKey Attribute key.
   *
   * @return {Object}
   */

	}, {
		key: 'getFieldConfig',
		value: function getFieldConfig(attributeKey) {
			var attribute = this.blockConfigs.attributes[attributeKey];
			return !_.isEmpty(attribute.field) ? _.extend(attribute.field, { key: attributeKey }) : {};
		}

		/**
   * Get default configuration for all fields.
   *
   * @param {Object} props         Properties.
   * @param {String} attributeKey  Attribute Key.
   *
   * @return {Object} Default Config object.
   */

	}, {
		key: 'getHelperFields',


		/**
   * Get helper fields using the attribute key.
   *
   * @param {String} attributeKey Attribute key.
   * @return {Object} Helper fields.
   */
		value: function getHelperFields(attributeKey) {
			var _this5 = this;

			var helperFields = {};
			var config = this.blockConfigs.attributes[attributeKey].field;

			if (config && !_.isEmpty(config.helperFields)) {
				_.each(config.helperFields, function (helperFieldAttributeKey, helperFieldKeyName) {
					helperFields[helperFieldKeyName] = _this5.helperFields[helperFieldAttributeKey];
				});
			}

			return helperFields;
		}

		/**
   * Get helper fields value.
   *
   * @param {Object} props Properties.
   * @param {Object} config Field configuration passed as attributeKey.field.
   * @param {String} attributeKeyName Attribute key name as attributeKey.field.helperField.keyName.
   * @return {mixed|null} Helper field value.
   */

	}, {
		key: 'getHelperFieldValue',
		value: function getHelperFieldValue(props, config, attributeKeyName) {
			var attributeKey = config.helperFields ? config.helperFields[attributeKeyName] : '';
			return attributeKey ? props.attributes[attributeKey] : null;
		}

		/**
   * Check if it is a react component.
   *
   * @param {*} component Component or function.
   *
   * @return {boolean} Is react component or not.
   */

	}, {
		key: 'updateAlignment',
		value: function updateAlignment(props, nextAlign) {
			var extraUpdatedAttributes = ['wide', 'full'].indexOf(nextAlign) !== -1 ? { width: undefined, height: undefined } : {};
			props.setAttributes(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, extraUpdatedAttributes, { align: nextAlign }));
		}

		/**
   * Get block alignment toolbar attribute key set.
   *
   * @return {string} Attribute key.
   */

	}, {
		key: 'getBlockAlignmentToolbarAttributeKey',
		value: function getBlockAlignmentToolbarAttributeKey() {
			var blockAlignmentToolbarAttributeKey = '';

			if (!_.isEmpty(this.blockConfigs.attributes)) {
				_.each(this.blockConfigs.attributes, function (attribute, attributeKey) {
					if (attribute.field && 'block-alignment-toolbar' === attribute.field.type) {
						blockAlignmentToolbarAttributeKey = attributeKey;
					}
				});
			}

			return blockAlignmentToolbarAttributeKey;
		}

		/**
   * Fallback edit method.
   *
   * @param {Object} props Properties.
   *
   * @return {Object} Edit elements.
   */

	}, {
		key: 'edit',
		value: function edit(props) {
			var _this6 = this;

			return [this.blockControls, this.inspectorControls, wp.element.createElement(
				'div',
				{ key: props.className, __source: {
						fileName: _jsxFileName,
						lineNumber: 427
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.fields).map(function (key) {
					return _this6.fields[key];
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
		key: 'getDefaultFieldConfig',
		value: function getDefaultFieldConfig(props, attributeKey) {
			return {
				value: props.attributes[attributeKey],
				onChange: function onChange(value) {
					var newAttributes = {};
					newAttributes[attributeKey] = value;
					props.setAttributes(newAttributes);
				},
				onFocus: function onFocus() {
					props.setState({
						editable: attributeKey
					});
				}
			};
		}
	}, {
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(17);
var $keys = __webpack_require__(18);

__webpack_require__(45)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(44);
var toAbsoluteIndex = __webpack_require__(63);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(68) });


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(35);
var pIE = __webpack_require__(24);
var toObject = __webpack_require__(17);
var IObject = __webpack_require__(43);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alignment_toolbar__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "alignmentToolbar", function() { return __WEBPACK_IMPORTED_MODULE_0__alignment_toolbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_icon__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mediaIcon", function() { return __WEBPACK_IMPORTED_MODULE_1__media_icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_alignment_toolbar__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "blockAlignmentToolbar", function() { return __WEBPACK_IMPORTED_MODULE_2__block_alignment_toolbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_editable__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "buttonEditable", function() { return __WEBPACK_IMPORTED_MODULE_3__button_editable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "checkbox", function() { return __WEBPACK_IMPORTED_MODULE_4__checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__code_editor__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "codeEditor", function() { return __WEBPACK_IMPORTED_MODULE_5__code_editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__color__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return __WEBPACK_IMPORTED_MODULE_6__color__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__date_time__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dateTime", function() { return __WEBPACK_IMPORTED_MODULE_7__date_time__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dropdown_menu__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dropDownMenu", function() { return __WEBPACK_IMPORTED_MODULE_8__dropdown_menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__file_upload__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fileUpload", function() { return __WEBPACK_IMPORTED_MODULE_9__file_upload__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_toggle__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "formToggle", function() { return __WEBPACK_IMPORTED_MODULE_10__form_toggle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__icons_toolbar__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "iconsToolbar", function() { return __WEBPACK_IMPORTED_MODULE_11__icons_toolbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__input_field__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inputField", function() { return __WEBPACK_IMPORTED_MODULE_12__input_field__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__link__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return __WEBPACK_IMPORTED_MODULE_13__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__media_upload__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mediaUpload", function() { return __WEBPACK_IMPORTED_MODULE_14__media_upload__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__radio__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radio", function() { return __WEBPACK_IMPORTED_MODULE_15__radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__range__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_16__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rich_text__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "richText", function() { return __WEBPACK_IMPORTED_MODULE_17__rich_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__select__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_18__select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return __WEBPACK_IMPORTED_MODULE_19__text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__textarea__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "textarea", function() { return __WEBPACK_IMPORTED_MODULE_20__textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tree_select__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treeSelect", function() { return __WEBPACK_IMPORTED_MODULE_21__tree_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__url_input_button__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "urlInputButton", function() { return __WEBPACK_IMPORTED_MODULE_22__url_input_button__["a"]; });
























/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = alignmentToolbar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/alignment-toolbar/index.js';
/**
 * alignment-toolbar field.
 */

var AlignmentToolbar = wp.editor.AlignmentToolbar;



function alignmentToolbar(props, config, defaultConfig) {
	var fieldAttributes = _.extend(defaultConfig, config);

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_1__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 14
			}
		}),
		wp.element.createElement(AlignmentToolbar, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 15
			}
		}))
	);
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(17);
var $getPrototypeOf = __webpack_require__(48);

__webpack_require__(45)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
__webpack_require__(39);
module.exports = __webpack_require__(40).f('iterator');


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(37);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(38);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(18);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(83);
var step = __webpack_require__(84);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(50)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(92);
__webpack_require__(93);
__webpack_require__(94);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(51);
var META = __webpack_require__(88).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(31);
var setToStringTag = __webpack_require__(38);
var uid = __webpack_require__(23);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(40);
var wksDefine = __webpack_require__(41);
var enumKeys = __webpack_require__(89);
var isArray = __webpack_require__(90);
var anObject = __webpack_require__(8);
var isObject = __webpack_require__(12);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(34);
var createDesc = __webpack_require__(19);
var _create = __webpack_require__(37);
var gOPNExt = __webpack_require__(91);
var $GOPD = __webpack_require__(53);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(18);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(35).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(36)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(23)('meta');
var isObject = __webpack_require__(12);
var has = __webpack_require__(7);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(35);
var pIE = __webpack_require__(24);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(28);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10);
var gOPN = __webpack_require__(52).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 92 */
/***/ (function(module, exports) {



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('asyncIterator');


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('observable');


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(5);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(98).set });


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(12);
var anObject = __webpack_require__(8);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(33)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(37) });


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaIcon;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/media-icon/index.js';
/**
 * media-icon field.
 */



var MediaUpload = wp.editor.MediaUpload;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Button = _wp$components.Button;
var __ = wp.i18n.__;


function mediaIcon(props, config, defaultConfig, attributeKey, middleware) {
	var defaultAttributes = _.extend(defaultConfig, {
		mediaType: 'image',
		button: false,
		buttonText: __('Upload'),
		buttonClass: ''
	});

	delete defaultAttributes.onChange;

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.icon = config.icon ? config.icon : Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* getDashIconSuffixByType */])(fieldAttributes.mediaType);
	fieldAttributes.iconLabel = config.iconLabel ? config.iconLabel : __('Add ') + fieldAttributes.mediaType;
	fieldAttributes.iconLabelAdded = config.iconLabelAdded ? config.iconLabelAdded : __('Edit ') + fieldAttributes.mediaType;

	fieldAttributes.render = function (_ref) {
		var open = _ref.open;

		if (defaultAttributes.button) {
			return wp.element.createElement(
				Button,
				{ onClick: open, className: fieldAttributes.buttonClass, __source: {
						fileName: _jsxFileName,
						lineNumber: 30
					}
				},
				fieldAttributes.buttonText
			);
		}

		return wp.element.createElement(IconButton, {
			className: 'components-toolbar__control',
			label: props.attributes[attributeKey] ? fieldAttributes.iconLabelAdded : fieldAttributes.iconLabel,
			icon: fieldAttributes.icon,
			onClick: open,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 37
			}
		});
	};

	fieldAttributes.onSelect = function (media) {
		var newAttributes = {};
		newAttributes[attributeKey] = media;
		props.setAttributes(newAttributes);
	};

	fieldAttributes.type = fieldAttributes.mediaType;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_2__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 55
			}
		}),
		wp.element.createElement(MediaUpload, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 56
			}
		}))
	);
}

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = blockAlignmentToolbar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/block-alignment-toolbar/index.js';
/**
 * block-alignment-toolbar field.
 */

var BlockAlignmentToolbar = wp.editor.BlockAlignmentToolbar;



function blockAlignmentToolbar(props, config, defaultConfig) {
	var fieldAttributes = _.extend(defaultConfig, config);

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_1__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 14
			}
		}),
		wp.element.createElement(BlockAlignmentToolbar, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 15
			}
		}))
	);
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buttonEditable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_button_editable__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/button-editable/index.js';
/**
 * Button field.
 */

var __ = wp.i18n.__;




function buttonEditable(props, config, defaultConfig, attributeKey, middleware) {
	var defaultAttributes = _.extend(defaultConfig, {
		placeholder: __('Add text…'),
		tagName: 'span',
		value: props.attributes[attributeKey] ? props.attributes[attributeKey] : '',
		className: 'wp-block-button__link',
		keepPlaceholderOnFocus: true,
		inlineToolbar: true,
		formattingControls: ['bold', 'italic', 'strikethrough']
	});

	var fieldAttributes = _.extend(defaultAttributes, config);
	var helperFields = middleware.getHelperFields(attributeKey);

	var setEditable = function setEditable() {
		props.setState({
			editable: attributeKey
		});
	};

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_2__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 30
			}
		}),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_button_editable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			buttonValue: fieldAttributes.value,
			isSelected: props.isSelected && attributeKey === props.editable,
			linkField: helperFields.link,
			backgroundColor: middleware.getHelperFieldValue(props, config, 'backgroundColor'),
			textColor: middleware.getHelperFieldValue(props, config, 'color'),
			buttonClass: middleware.getHelperFieldValue(props, config, 'class'),
			setEditable: setEditable,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 31
			}
		}))
	);
}

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__editor_scss__);






var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/components/button-editable/index.js';
var Component = wp.element.Component;
var RichText = wp.editor.RichText;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    IconButton = _wp$components.IconButton;
var __ = wp.i18n.__;




var ButtonEditable = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ButtonEditable, _Component);

	function ButtonEditable() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ButtonEditable);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ButtonEditable.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ButtonEditable)).apply(this, arguments));

		_this.state = {
			displayForm: true
		};

		_this.onClick = _this.onClick.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ButtonEditable, [{
		key: 'onClick',
		value: function onClick() {
			this.setState({
				displayForm: true
			});

			this.props.setEditable();
		}
	}, {
		key: 'onSubmit',
		value: function onSubmit(event) {
			event.preventDefault();
			this.setState({
				displayForm: false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var link = this.props.linkField;

			var buttonClass = this.props.buttonClass ? ' ' + this.props.buttonClass : '';

			var form = link && this.props.isSelected && this.state.displayForm && wp.element.createElement(
				'form',
				{
					key: 'form-link',
					className: 'block-library-button__inline-link',
					onSubmit: this.onSubmit, __source: {
						fileName: _jsxFileName,
						lineNumber: 40
					}
				},
				wp.element.createElement(Dashicon, { icon: 'admin-links', __source: {
						fileName: _jsxFileName,
						lineNumber: 44
					}
				}),
				link,
				wp.element.createElement(IconButton, { icon: 'editor-break', label: __('Apply'), type: 'submit', __source: {
						fileName: _jsxFileName,
						lineNumber: 46
					}
				})
			);

			return wp.element.createElement(
				'div',
				{ className: 'button-editable middleware-button-editable', __source: {
						fileName: _jsxFileName,
						lineNumber: 51
					}
				},
				wp.element.createElement(
					'span',
					{ className: 'wp-block-button', key: 'button', onClick: this.onClick, __source: {
							fileName: _jsxFileName,
							lineNumber: 52
						}
					},
					wp.element.createElement(RichText, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
						className: this.props.className + buttonClass,
						style: {
							backgroundColor: this.props.backgroundColor,
							color: this.props.textColor
						}
					}, this.props, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 53
						}
					}))
				),
				form
			);
		}
	}]);

	return ButtonEditable;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ButtonEditable);

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkbox;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/checkbox/index.js';
/**
 * Checkbox field.
 */

var CheckboxControl = wp.components.CheckboxControl;


function checkbox(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend(defaultConfig, {
		value: '1',
		checked: props.attributes[attributeKey]
	});

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onChange = function (checked) {
		var newAttributes = {};
		newAttributes[attributeKey] = checked ? fieldAttributes.value : false;
		props.setAttributes(newAttributes);
	};

	delete fieldAttributes.type;

	return wp.element.createElement(CheckboxControl, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}));
}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = codeEditor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/code-editor/index.js';
/**
 * Code editor field.
 */

var CodeEditor = wp.components.CodeEditor;



function codeEditor(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend(defaultConfig, {
		value: props.attributes[attributeKey] || ''
	});

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_1__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 18
			}
		}),
		wp.element.createElement(CodeEditor, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 19
			}
		}))
	);
}

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = color;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/color/index.js';
/**
 * Color Palette field.
 */

var PanelColor = wp.editor.PanelColor;
var __ = wp.i18n.__;





function color(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend(defaultConfig, {
		value: props.attributes[attributeKey] || '',
		title: __('Color'),
		initialOpen: false,
		panel: 'inspector' === config.placement
	});

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_2__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 24
			}
		}),
		wp.element.createElement(PanelColor, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 25
			}
		}))
	);
}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dateTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/date-time/index.js';
/**
 * Date time field.
 */

var DateTimePicker = wp.components.DateTimePicker;
var _wp$date = wp.date,
    dateI18n = _wp$date.dateI18n,
    getSettings = _wp$date.getSettings;
var __ = wp.i18n.__;





function dateTime(props, config, defaultConfig, attributeKey) {
	var settings = getSettings();
	var is12HourTime = /a(?!\\)/i.test(settings.formats.time.toLowerCase() // Test only the lower case a
	.replace(/\\\\/g, '') // Replace "//" with empty strings
	.split('').reverse().join('') // Reverse the string and test for "a" not followed by a slash
	);

	var defaultAttributes = _.extend(defaultConfig, {
		locale: settings.l10n.locale,
		currentDate: props.attributes[attributeKey],
		is12Hour: is12HourTime,
		label: __('Date'),
		initialOpen: false,
		panel: true
	});

	delete defaultAttributes.value;

	var fieldAttributes = _.extend(defaultAttributes, config);

	var getFormattedDate = function getFormattedDate() {
		return props.attributes[attributeKey] ? dateI18n(settings.formats.datetime, props.attributes[attributeKey]) : '';
	};

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_2__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 41
			}
		}),
		wp.element.createElement(DateTimePicker, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			getFormattedDate: getFormattedDate,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 42
			}
		}))
	);
}

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dropDownMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/dropdown-menu/index.js';
/**
 * icons-toolbar field.
 */

var DropdownMenu = wp.components.DropdownMenu;




function dropDownMenu(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend({}, defaultConfig);
	delete defaultAttributes.value;
	delete defaultAttributes.onChange;

	var fieldAttributes = _.extend(defaultAttributes, config);

	if (!_.isEmpty(config.controls)) {
		fieldAttributes.controls = config.controls.map(function (control) {
			control.onClick = function () {
				var newAttributes = {};
				newAttributes[attributeKey] = control.isActive ? '' : control.value;
				props.setAttributes(newAttributes);
			};

			control.isActive = control.value === props.attributes[attributeKey];

			return control;
		});
	}

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_1__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 33
			}
		}),
		wp.element.createElement(DropdownMenu, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 34
			}
		}))
	);
}

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fileUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_file_upload__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_field__ = __webpack_require__(1);


var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/file-upload/index.js';
/**
 * File Upload.
 */




var __ = wp.i18n.__;


function fileUpload(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend(defaultConfig, {
		fileType: 'application',
		isLarge: true,
		buttonText: __('Upload')
	});

	delete defaultAttributes.onChange;
	delete defaultAttributes.value;

	var fieldAttributes = _.extend(defaultAttributes, config);

	fieldAttributes.onSelect = function (files) {
		var newAttributes = {};

		if (!_.isEmpty(props.attributes[attributeKey]) && !_.isEmpty(files) && _.isArray(files)) {
			files = [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(props.attributes[attributeKey]), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(files));
		}

		newAttributes[attributeKey] = files;
		props.setAttributes(newAttributes);
	};

	/**
  * Update media when files are removed.
  *
  * @param {Array} files Updated files.
  * @return {void}
  */
	var updateMedia = function updateMedia(files) {
		var newAttributes = {};
		newAttributes[attributeKey] = files;

		props.setAttributes(newAttributes);
	};

	/**
  * Remove single file.
  *
  * @param {Object} event Event Object.
  * @return {void}
  */
	var removeFile = function removeFile(event) {
		if (fieldAttributes.multiple) {
			var key = parseInt(event.currentTarget.dataset.key, 10);
			props.attributes[attributeKey].splice(key, 1);
			updateMedia([]); // To force update.
			updateMedia(props.attributes[attributeKey]);
		} else {
			updateMedia('');
		}
	};

	fieldAttributes.type = fieldAttributes.fileType;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_3__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ key: 'file-upload' }, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 66
			}
		}),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_file_upload__["a" /* default */], {
			fieldAttributes: fieldAttributes,
			value: props.attributes[attributeKey],
			removeFile: removeFile,
			config: config,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 67
			}
		})
	);
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(116);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
__webpack_require__(118);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(33);
var $export = __webpack_require__(5);
var toObject = __webpack_require__(17);
var call = __webpack_require__(119);
var isArrayIter = __webpack_require__(120);
var toLength = __webpack_require__(44);
var createProperty = __webpack_require__(121);
var getIterFn = __webpack_require__(54);

$export($export.S + $export.F * !__webpack_require__(122)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6);
var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__file_thumb__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editor_scss__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__editor_scss__);






var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/components/file-upload/index.js';
var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon;
var MediaUpload = wp.editor.MediaUpload;





var FileUpload = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(FileUpload, _Component);

	function FileUpload() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, FileUpload);

		return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FileUpload.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(FileUpload)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(FileUpload, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    config = _props.config,
			    value = _props.value,
			    fieldAttributes = _props.fieldAttributes,
			    removeFile = _props.removeFile;


			var fieldWrapperClasses = 'file-upload-field';
			fieldWrapperClasses += 'inspector' !== config.placement ? ' block-field' : ' inspector-field';

			var mediaUploadProps = _.extend({
				render: function render(_ref) {
					var open = _ref.open;

					if (_.isEmpty(value)) {
						return wp.element.createElement(
							Button,
							{ isLarge: fieldAttributes.isLarge, onClick: open, __source: {
									fileName: _jsxFileName,
									lineNumber: 24
								}
							},
							wp.element.createElement(Dashicon, { icon: 'upload', __source: {
									fileName: _jsxFileName,
									lineNumber: 25
								}
							}),
							fieldAttributes.buttonText
						);
					}
					return null;
				}
			}, fieldAttributes);

			return wp.element.createElement(
				'div',
				{ className: fieldWrapperClasses, __source: {
						fileName: _jsxFileName,
						lineNumber: 35
					}
				},
				wp.element.createElement(
					'div',
					{ className: 'file-upload-filed-actions', __source: {
							fileName: _jsxFileName,
							lineNumber: 36
						}
					},
					wp.element.createElement(MediaUpload, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, mediaUploadProps, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 37
						}
					}))
				),
				!_.isEmpty(value) && wp.element.createElement(
					'ul',
					{ className: 'file-upload-field-files', __source: {
							fileName: _jsxFileName,
							lineNumber: 43
						}
					},
					_.isArray(value) && value.map(function (file, key) {
						return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__file_thumb__["a" /* default */], { file: file, key: key, dataKey: key, removeFile: removeFile, __source: {
								fileName: _jsxFileName,
								lineNumber: 45
							}
						});
					}),
					!_.isArray(value) && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__file_thumb__["a" /* default */], { file: value, key: 0, removeFile: removeFile, __source: {
							fileName: _jsxFileName,
							lineNumber: 48
						}
					})
				)
			);
		}
	}]);

	return FileUpload;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (FileUpload);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(25);





var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/components/file-upload/file-thumb.js';


var Component = wp.element.Component;

var FileThumb = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(FileThumb, _Component);

	function FileThumb() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, FileThumb);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (FileThumb.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(FileThumb)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(FileThumb, [{
		key: 'render',
		value: function render() {
			if (_.isEmpty(this.props.file) || !this.props.file.id) {
				return null;
			}

			var dashIcon = 'dashicons dashicons-' + Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* getDashIconSuffix */])(this.props.file.subtype);

			return wp.element.createElement(
				'li',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 14
					}
				},
				wp.element.createElement('button', { className: 'dashicons dashicons-no-alt middleware-remove-file', 'data-key': this.props.dataKey, onClick: this.props.removeFile, __source: {
						fileName: _jsxFileName,
						lineNumber: 15
					}
				}),
				wp.element.createElement(
					'div',
					{ className: 'middleware-field-media-thumbnail', __source: {
							fileName: _jsxFileName,
							lineNumber: 16
						}
					},
					wp.element.createElement('span', { className: dashIcon, __source: {
							fileName: _jsxFileName,
							lineNumber: 17
						}
					})
				),
				wp.element.createElement(
					'div',
					{ className: 'middleware-file', __source: {
							fileName: _jsxFileName,
							lineNumber: 19
						}
					},
					wp.element.createElement(
						'a',
						{ target: '_blank', href: this.props.file.url, __source: {
								fileName: _jsxFileName,
								lineNumber: 20
							}
						},
						this.props.file.filename
					)
				)
			);
		}
	}]);

	return FileThumb;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (FileThumb);

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/form-toggle/index.js';
/**
 * Switch field.
 */

var FormToggle = wp.components.FormToggle;



function formToggle(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend(defaultConfig, {
		checked: 'on' === props.attributes[attributeKey],
		value: props.attributes[attributeKey] || 'off',
		onChange: function onChange(event) {
			var newAttributes = {};
			newAttributes[attributeKey] = 'on' === event.target.value ? 'off' : 'on';
			props.setAttributes(newAttributes);
		}
	});

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_1__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 24
			}
		}),
		wp.element.createElement(FormToggle, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 25
			}
		}))
	);
}

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = iconsToolbar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/icons-toolbar/index.js';
/**
 * icons-toolbar field.
 */

var Toolbar = wp.components.Toolbar;



function iconsToolbar(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend({}, defaultConfig);
	delete defaultAttributes.value;
	delete defaultAttributes.onChange;

	var fieldAttributes = _.extend(defaultAttributes, config);

	if (!_.isEmpty(config.controls)) {
		fieldAttributes.controls = config.controls.map(function (control) {
			control.onClick = function () {
				var newAttributes = {};
				newAttributes[attributeKey] = control.isActive ? '' : control.value;
				props.setAttributes(newAttributes);
			};

			control.isActive = control.value === props.attributes[attributeKey];

			return control;
		});
	}

	delete fieldAttributes.type;

	var toolbarConfig = _.extend({}, config);
	toolbarConfig.placement = 'block-controls' === config.placement ? '' : config.placement; // To avoid one more Toolbar wrapper.

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_1__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 35
			}
		}),
		wp.element.createElement(Toolbar, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 36
			}
		}))
	);
}

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = link;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/link/index.js';
/**
 * Url field.
 */

var URLInput = wp.editor.URLInput;





function link(props, config, defaultConfig) {
	var fieldAttributes = _.extend(defaultConfig, config);

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_2__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 16
			}
		}),
		wp.element.createElement(URLInput, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 17
			}
		}))
	);
}

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_media_placeholder__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/media-upload/index.js';
/**
 * image/video/audio field.
 */
var __ = wp.i18n.__;




function mediaUpload(props, config, defaultConfig, attributeKey, middleware) {
	var vowelPrefix = 'video' === config.type ? __(' a ') : __(' an ');

	var defaultAttributes = _.extend(defaultConfig, {
		placeholderText: __('Select') + vowelPrefix + config.type + __(' file from your library, or upload a new one'),
		buttonText: __('Upload'),
		isSelected: props.isSelected,
		fileUpload: true,
		mediaButtonText: 'inspector' !== config.placement ? __('Add from Media Library') : __('Media Library'),
		mediaUploadButton: true,
		inputUrl: true,
		placeholder: true
	});

	delete defaultAttributes.onChange;
	delete defaultAttributes.value;

	var fieldAttributes = _.extend(defaultAttributes, config);
	var helperFields = middleware.getHelperFields(attributeKey);

	fieldAttributes.className = props.className;

	fieldAttributes.removeMediaAttributes = function () {
		var newAttributes = {};
		newAttributes[attributeKey] = '';
		props.setAttributes(newAttributes);
	};

	fieldAttributes.setMediaAttributes = function (media) {
		if (media && media.url) {
			var newAttributes = {};
			newAttributes[attributeKey] = media;
			props.setAttributes(newAttributes);
		}
	};

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_2__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 45
			}
		}),
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_media_placeholder__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			mediaData: props.attributes[attributeKey],
			captionField: helperFields.caption,
			attributeKey: attributeKey,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		}))
	);
}

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(25);






var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/components/media-placeholder/index.js';



var Component = wp.element.Component;
var __ = wp.i18n.__;
var MediaUpload = wp.editor.MediaUpload;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    FormFileUpload = _wp$components.FormFileUpload,
    Button = _wp$components.Button,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton,
    DropZone = _wp$components.DropZone;
var mediaUpload = wp.editor.mediaUpload;

/**
 * MediaPlaceholder component class.
 */

var MediaPlaceholder = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(MediaPlaceholder, _Component);

	function MediaPlaceholder() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, MediaPlaceholder);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MediaPlaceholder.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(MediaPlaceholder)).apply(this, arguments));

		_this.state = {
			editing: !(_this.props.mediaData && _this.props.mediaData.url),
			mediaData: _this.props.mediaData || ''
		};

		_this.uploadFromFiles = _this.uploadFromFiles.bind(_this);
		_this.onSelectMedia = _this.onSelectMedia.bind(_this);
		_this.switchToEditing = _this.switchToEditing.bind(_this);
		_this.onSelectUrl = _this.onSelectUrl.bind(_this);
		_this.onUrlChange = _this.onUrlChange.bind(_this);
		_this.onFilesDrop = _this.onFilesDrop.bind(_this);
		return _this;
	}

	/**
  * Upload from file.
  *
  * @param {Object} event Event.
  *
  * @return {void}
  */


	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(MediaPlaceholder, [{
		key: 'uploadFromFiles',
		value: function uploadFromFiles(event) {
			var _this2 = this;

			mediaUpload(event.target.files, function (_ref) {
				var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 1),
				    media = _ref2[0];

				return _this2.onSelectMedia(media);
			}, this.props.type);
		}

		/**
   * Dropping a file into the DropZone.
   *
   * @param {Array} files dropped file.
   *
   * @return {void}
   */

	}, {
		key: 'onFilesDrop',
		value: function onFilesDrop(files) {
			var _this3 = this;

			mediaUpload(files, function (_ref3) {
				var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 1),
				    media = _ref4[0];

				return _this3.onSelectMedia(media);
			}, this.props.type);
		}

		/**
   * Callback method when media is selected.
   *
   * @param {Object} media Media.
   *
   * @return {void}
   */

	}, {
		key: 'onSelectMedia',
		value: function onSelectMedia(media) {
			if (media && media.url) {
				this.setState({ mediaData: media, editing: false });
				this.props.setMediaAttributes(media);
			}
		}

		/**
   * Set editing state to true.
   *
   * @return {void}
   */

	}, {
		key: 'switchToEditing',
		value: function switchToEditing() {
			this.setState({ editing: true });
			this.props.removeMediaAttributes();
		}

		/**
   * Handles when url is selected.
   *
   * @param {Object} event Event
   *
   * @return {void}
   */

	}, {
		key: 'onSelectUrl',
		value: function onSelectUrl(event) {
			event.preventDefault();

			if (this.state.mediaData && this.state.mediaData.url) {
				this.setState({
					editing: false
				});
				this.props.setMediaAttributes(this.state.mediaData);
			}
		}

		/**
   * Callback method when url changes.
   *
   * @param {Object} event Event.
   *
   * @return {void}
   */

	}, {
		key: 'onUrlChange',
		value: function onUrlChange(event) {
			this.setState({ mediaData: {
					url: event.target.value
				} });
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _props = this.props,
			    type = _props.type,
			    placeholderText = _props.placeholderText,
			    buttonText = _props.buttonText,
			    className = _props.className,
			    isSelected = _props.isSelected,
			    attributeKey = _props.attributeKey;


			if (this.state.editing) {
				var mediaIcon = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* getDashIconSuffixByType */])(type);
				var placeholderClassName = 'wp-middleware-block-' + type + ' ' + className + ' wp-block-' + type;
				var mediaButtons = [];

				if (this.props.inputUrl) {
					mediaButtons.push(wp.element.createElement(
						'form',
						{ key: 'form-' + attributeKey, onSubmit: this.onSelectUrl, __source: {
								fileName: _jsxFileName,
								lineNumber: 136
							}
						},
						wp.element.createElement('input', {
							type: 'url',
							className: 'components-placeholder__input',
							placeholder: __('Enter URL of ') + type + __(' file here…'),
							onChange: this.onUrlChange,
							value: this.state.mediaData.url || '', __source: {
								fileName: _jsxFileName,
								lineNumber: 137
							}
						}),
						wp.element.createElement(
							Button,
							{
								isLarge: true,
								type: 'submit', __source: {
									fileName: _jsxFileName,
									lineNumber: 143
								}
							},
							__('Use URL')
						)
					));
				}

				if (this.props.fileUpload) {
					mediaButtons.push(wp.element.createElement(
						FormFileUpload,
						{
							key: 'form-field-' + attributeKey,
							isLarge: true,
							className: 'wp-block-video__upload-button',
							onChange: this.uploadFromFiles,
							accept: type + '/*',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 154
							}
						},
						buttonText
					));
				}

				if (this.props.mediaUploadButton) {
					mediaButtons.push(wp.element.createElement(MediaUpload, {
						onSelect: this.onSelectMedia,
						type: type,
						key: 'media-upload',
						render: function render(_ref5) {
							var open = _ref5.open;
							return wp.element.createElement(
								Button,
								{ isLarge: true, onClick: open, __source: {
										fileName: _jsxFileName,
										lineNumber: 173
									}
								},
								_this4.props.mediaButtonText
							);
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 168
						}
					}));
				}

				if (this.props.placeholder) {
					return wp.element.createElement(
						Placeholder,
						{
							key: 'placeholder-' + attributeKey,
							icon: mediaIcon,
							label: type,
							className: placeholderClassName,
							instructions: placeholderText, __source: {
								fileName: _jsxFileName,
								lineNumber: 183
							}
						},
						wp.element.createElement(DropZone, { onFilesDrop: this.onFilesDrop, __source: {
								fileName: _jsxFileName,
								lineNumber: 189
							}
						}),
						mediaButtons
					);
				}

				return mediaButtons;
			}

			return wp.element.createElement(
				'div',
				{ className: 'middleware-media-field', __source: {
						fileName: _jsxFileName,
						lineNumber: 199
					}
				},
				wp.element.createElement(
					Toolbar,
					{ key: type, className: 'middleware-media-toolbar', __source: {
							fileName: _jsxFileName,
							lineNumber: 200
						}
					},
					wp.element.createElement(IconButton, {
						className: 'components-icon-button components-toolbar__control',
						label: __('Edit ') + type,
						onClick: this.switchToEditing,
						icon: 'edit',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 201
						}
					})
				),
				wp.element.createElement(
					'figure',
					{ key: attributeKey + type, className: className + ' wp-block-' + type, __source: {
							fileName: _jsxFileName,
							lineNumber: 209
						}
					},
					'video' === type && wp.element.createElement('video', { controls: true, src: this.state.mediaData.url, __source: {
							fileName: _jsxFileName,
							lineNumber: 211
						}
					}),
					'audio' === type && wp.element.createElement('audio', { controls: true, src: this.state.mediaData.url, __source: {
							fileName: _jsxFileName,
							lineNumber: 214
						}
					}),
					'image' === type && wp.element.createElement('img', { src: this.state.mediaData.url, alt: this.state.mediaData.title || '', __source: {
							fileName: _jsxFileName,
							lineNumber: 217
						}
					}),
					isSelected && this.props.captionField
				)
			);
		}
	}]);

	return MediaPlaceholder;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (MediaPlaceholder);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(133);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(136);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(26);
module.exports = __webpack_require__(135);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(55);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(26);
module.exports = __webpack_require__(138);


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var get = __webpack_require__(54);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = radio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/radio/index.js';
/**
 * Radio Control field.
 */
var RadioControl = wp.components.RadioControl;


function radio(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend(defaultConfig, {
		selected: props.attributes ? props.attributes[attributeKey] || '' : ''
	});

	delete defaultAttributes.value;

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(RadioControl, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}));
}

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = range;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var _jsxFileName = "/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/range/index.js";
var RangeControl = wp.components.RangeControl;


function range(props, config, defaultConfig) {
	var fieldAttributes = _.extend(defaultConfig, config);

	delete fieldAttributes.type;

	return wp.element.createElement(RangeControl, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}));
}

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = richText;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/rich-text/index.js';
/**
 * Text field.
 */


var RichText = wp.editor.RichText;



function richText(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend(defaultConfig, {
		inlineToolbar: true
	});

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_2__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 19
			}
		}),
		wp.element.createElement(RichText, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			isSelected: props.isSelected && attributeKey === props.editable,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 20
			}
		}))
	);
}

/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = select;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var _jsxFileName = "/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/select/index.js";
/**
 * Select field.
 */

var SelectControl = wp.components.SelectControl;


function select(props, config, defaultConfig) {
	var fieldAttributes = _.extend(defaultConfig, config);

	delete fieldAttributes.type;

	return wp.element.createElement(SelectControl, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}));
}

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = text;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_field__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/text/index.js';
/**
 * text field.
 */

var PlainText = wp.editor.PlainText;




function text(props, config, defaultConfig, attributeKey, middleware) {
	if ('inspector' === config.placement) {
		return Object(__WEBPACK_IMPORTED_MODULE_1__input_field__["a" /* default */])(props, config, defaultConfig, attributeKey, middleware);
	}

	var fieldAttributes = _.extend(defaultConfig, config);

	delete fieldAttributes.type;

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_2__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 19
			}
		}),
		wp.element.createElement(PlainText, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 20
			}
		}))
	);
}

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = textarea;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/textarea/index.js';
/**
 * Textarea field.
 */

var TextareaControl = wp.components.TextareaControl;




function textarea(props, config, defaultConfig) {
	var defaultAttributes = _.extend(defaultConfig, {
		className: 'middleware-input-field middleware-input-field-' + config.type
	});

	var fieldAttributes = _.extend(defaultAttributes, config);

	delete fieldAttributes.type;

	return wp.element.createElement(TextareaControl, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}));
}

/***/ }),
/* 147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = treeSelect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

var _jsxFileName = "/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/tree-select/index.js";
/**
 * tree-select field.
 */

var TreeSelect = wp.components.TreeSelect;


function treeSelect(props, config, defaultConfig) {
	var fieldAttributes = _.extend(defaultConfig, config);

	delete fieldAttributes.type;

	return wp.element.createElement(TreeSelect, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 13
		}
	}));
}

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = urlInputButton;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_field__ = __webpack_require__(1);

var _jsxFileName = '/Users/sayedtaqui/valet/middleware/wp-content/plugins/gutenberg-fields-middleware/middleware/fields/url-input-button/index.js';
/**
 * url-input-button field.
 */

var URLInput = wp.editor.URLInput;



function urlInputButton(props, config, defaultConfig, attributeKey) {
	var defaultAttributes = _.extend(defaultConfig, {
		value: props.attributes[attributeKey]
	});

	var fieldAttributes = _.extend(defaultAttributes, config);

	return wp.element.createElement(
		__WEBPACK_IMPORTED_MODULE_1__components_field__["a" /* default */],
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, config, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 16
			}
		}),
		wp.element.createElement(URLInput, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 17
			}
		}))
	);
}

/***/ })
/******/ ]);