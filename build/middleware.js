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
/******/ 	return __webpack_require__(__webpack_require__.s = 250);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f;
var has = __webpack_require__(19);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(276);
var global = __webpack_require__(11);
var hide = __webpack_require__(33);
var Iterators = __webpack_require__(36);
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

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(98);
var wksExt = __webpack_require__(102);
var defineProperty = __webpack_require__(13).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var core = __webpack_require__(2);
var ctx = __webpack_require__(92);
var hide = __webpack_require__(33);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(162);
var toPrimitive = __webpack_require__(93);
var dP = Object.defineProperty;

exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIObject = __webpack_require__(32);
var arrayIndexOf = __webpack_require__(255)(false);
var IE_PROTO = __webpack_require__(89)('IE_PROTO');

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

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(87);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(88);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12);
var core = __webpack_require__(2);
var fails = __webpack_require__(35);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(21) && !__webpack_require__(35)(function () {
  return Object.defineProperty(__webpack_require__(163)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(34);
var document = __webpack_require__(11).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(268), __esModule: true };

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(19);
var toObject = __webpack_require__(50);
var IE_PROTO = __webpack_require__(89)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(167);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(270);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(279);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(98);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(169);
var hide = __webpack_require__(33);
var has = __webpack_require__(19);
var Iterators = __webpack_require__(36);
var $iterCreate = __webpack_require__(273);
var setToStringTag = __webpack_require__(100);
var getPrototypeOf = __webpack_require__(165);
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(158);
var hiddenKeys = __webpack_require__(91).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(62);
var createDesc = __webpack_require__(52);
var toIObject = __webpack_require__(32);
var toPrimitive = __webpack_require__(93);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(162);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(289);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(293);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(167);

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

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(174);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(36);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(87);
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inputField;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

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

	return wp.element.createElement(
		BaseControl,
		{ id: id, label: label, help: help },
		wp.element.createElement(TextControl, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
			id: id
		}, fieldAttributes))
	);
}

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(34);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(35)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(251);


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fields__ = __webpack_require__(261);



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
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, GutenbergFieldsMiddleWare);

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


	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(GutenbergFieldsMiddleWare, [{
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
						return wp.element.createElement(_this.config.edit, props);
					}

					return _this.config.edit(props);
				}

				return _this.edit(props);
			};

			this.blockConfigs.save = function (props) {
				props.middleware = _this;

				if (_this.config.save) {
					if (_this.constructor.isClassComponent(_this.config.save)) {
						return wp.element.createElement(_this.config.save, props);
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
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["p" /* text */](props, config, attributeKey);
					break;
				case 'rich-text':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["n" /* richText */](props, config, attributeKey);
					break;
				case 'link':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["j" /* link */](props, config, attributeKey);
					break;
				case 'image':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["h" /* image */](props, config, attributeKey);
					break;
				case 'video':
				case 'audio':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["k" /* mediaUpload */](props, config, attributeKey);
					break;
				case 'select':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["o" /* select */](props, config, attributeKey);
					break;
				case 'range':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["m" /* range */](props, config, attributeKey);
					break;
				case 'radio':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["l" /* radio */](props, config, attributeKey);
					break;
				case 'checkbox':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["b" /* checkbox */](props, config, attributeKey);
					break;
				case 'button-editable':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["a" /* buttonEditable */](props, config, attributeKey);
					break;
				case 'color':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["d" /* color */](props, config, attributeKey);
					break;
				case 'code-editor':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["c" /* codeEditor */](props, config, attributeKey);
					break;
				case 'date-time':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["e" /* dateTime */](props, config, attributeKey);
					break;
				case 'textarea':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["q" /* textarea */](props, config, attributeKey);
					break;
				case 'switch':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["g" /* formToggle */](props, config, attributeKey);
					break;
				case 'tree-select':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["r" /* treeSelect */](props, config, attributeKey);
					break;
				case 'file-upload':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["f" /* fileUpload */](props, config, attributeKey);
					break;
			}

			if (_.contains(['email', 'hidden', 'number', 'search', 'tel', 'time', 'date', 'datetime-local', 'file', 'month', 'password', 'time', 'url', 'week'], config.type)) {
				field[attributeKey] = __WEBPACK_IMPORTED_MODULE_3__fields__["i" /* inputField */](props, config, attributeKey);
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

			this.inspectorControls = props.isSelected ? wp.element.createElement(
				InspectorControls,
				{ key: 'inspector-control' },
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.inspectorControlFields).map(function (key) {
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

			return [this.inspectorControls, wp.element.createElement(
				'div',
				{ key: props.className },
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.fields).map(function (key) {
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

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(253), __esModule: true };

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(254);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(50);
var $keys = __webpack_require__(51);

__webpack_require__(161)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(32);
var toLength = __webpack_require__(160);
var toAbsoluteIndex = __webpack_require__(256);
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

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(88);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(259), __esModule: true };

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(260);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(21), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_editable__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button_editable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox__ = __webpack_require__(296);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_editor__ = __webpack_require__(297);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__code_editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__color__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_time__ = __webpack_require__(299);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__date_time__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_upload__ = __webpack_require__(300);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__file_upload__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_toggle__ = __webpack_require__(310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__form_toggle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image__ = __webpack_require__(311);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__input_field__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__input_field__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__link__ = __webpack_require__(313);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__media_upload__ = __webpack_require__(314);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__media_upload__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__radio__ = __webpack_require__(640);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__range__ = __webpack_require__(641);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_12__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rich_text__ = __webpack_require__(642);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_13__rich_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__select__ = __webpack_require__(643);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_14__select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text__ = __webpack_require__(644);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_15__text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__textarea__ = __webpack_require__(645);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_16__textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tree_select__ = __webpack_require__(646);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_17__tree_select__["a"]; });



















/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buttonEditable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_button_editable__ = __webpack_require__(267);

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

	return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_button_editable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		inputValue: props.attributes[attributeKey] ? props.attributes[attributeKey].link : '',
		buttonValue: fieldAttributes.value,
		isSelected: props.isSelected
	}));
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(265);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(266) });


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(51);
var gOPS = __webpack_require__(97);
var pIE = __webpack_require__(62);
var toObject = __webpack_require__(50);
var IObject = __webpack_require__(159);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(35)(function () {
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

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);






var Component = wp.element.Component;
var _wp$blocks = wp.blocks,
    RichText = _wp$blocks.RichText,
    UrlInput = _wp$blocks.UrlInput;
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
			displayForm: false
		};

		_this.onFocus = _this.onFocus.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ButtonEditable, [{
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
			var form = this.state.displayForm && this.props.isSelected && wp.element.createElement(
				"form",
				{
					key: "form-link",
					className: "blocks-button__inline-link",
					onSubmit: this.onSubmit },
				wp.element.createElement(Dashicon, { icon: "admin-links" }),
				wp.element.createElement(UrlInput, {
					value: this.props.inputValue,
					onChange: this.props.onInputChange
				}),
				wp.element.createElement(IconButton, { icon: "editor-break", label: __('Apply'), type: "submit" })
			);

			return wp.element.createElement(
				"div",
				{ className: "button-editable" },
				wp.element.createElement(
					"span",
					{ className: "wp-block-button", key: "button" },
					wp.element.createElement(RichText, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
						onFocus: this.onFocus,
						onClick: this.onFocus // Hack.
					}, this.props))
				),
				form
			);
		}
	}]);

	return ButtonEditable;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ButtonEditable);

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(269);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(50);
var $getPrototypeOf = __webpack_require__(165);

__webpack_require__(161)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(271), __esModule: true };

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(101);
module.exports = __webpack_require__(102).f('iterator');


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(88);
var defined = __webpack_require__(86);
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

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(99);
var descriptor = __webpack_require__(52);
var setToStringTag = __webpack_require__(100);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(33)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var anObject = __webpack_require__(20);
var getKeys = __webpack_require__(51);

module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(11).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(277);
var step = __webpack_require__(278);
var Iterators = __webpack_require__(36);
var toIObject = __webpack_require__(32);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(168)(Array, 'Array', function (iterated, kind) {
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

/***/ 277:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(280), __esModule: true };

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(281);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
module.exports = __webpack_require__(2).Symbol;


/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(11);
var has = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(21);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(169);
var META = __webpack_require__(282).KEY;
var $fails = __webpack_require__(35);
var shared = __webpack_require__(90);
var setToStringTag = __webpack_require__(100);
var uid = __webpack_require__(61);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(102);
var wksDefine = __webpack_require__(103);
var enumKeys = __webpack_require__(283);
var isArray = __webpack_require__(284);
var anObject = __webpack_require__(20);
var isObject = __webpack_require__(34);
var toIObject = __webpack_require__(32);
var toPrimitive = __webpack_require__(93);
var createDesc = __webpack_require__(52);
var _create = __webpack_require__(99);
var gOPNExt = __webpack_require__(285);
var $GOPD = __webpack_require__(171);
var $DP = __webpack_require__(13);
var $keys = __webpack_require__(51);
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
  __webpack_require__(170).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(62).f = $propertyIsEnumerable;
  __webpack_require__(97).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(98)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(33)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(61)('meta');
var isObject = __webpack_require__(34);
var has = __webpack_require__(19);
var setDesc = __webpack_require__(13).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(35)(function () {
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

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(51);
var gOPS = __webpack_require__(97);
var pIE = __webpack_require__(62);
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

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(87);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(32);
var gOPN = __webpack_require__(170).f;
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

/***/ 286:
/***/ (function(module, exports) {



/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103)('asyncIterator');


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103)('observable');


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(290), __esModule: true };

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(291);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(12);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(292).set });


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(34);
var anObject = __webpack_require__(20);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(92)(Function.call, __webpack_require__(171).f(Object.prototype, '__proto__').set, 2);
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

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(294), __esModule: true };

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(295);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(99) });


/***/ }),

/***/ 296:
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

	return wp.element.createElement(CheckboxControl, fieldAttributes);
}

/***/ }),

/***/ 297:
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

	return wp.element.createElement(CodeEditor, fieldAttributes);
}

/***/ }),

/***/ 298:
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

	return wp.element.createElement(
		PanelColor,
		{ title: fieldAttributes.label, colorValue: fieldAttributes.value },
		wp.element.createElement(ColorPalette, fieldAttributes)
	);
}

/***/ }),

/***/ 299:
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

	return wp.element.createElement(
		PanelBody,
		{ initialOpen: false, title: [label + ': ', wp.element.createElement(
				'span',
				{ key: 'label' },
				getFormattedDate()
			)] },
		wp.element.createElement(DateTimePicker, fieldAttributes)
	);
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(90)('wks');
var uid = __webpack_require__(61);
var Symbol = __webpack_require__(11).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fileUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);

/**
 * File Upload.
 */



var _wp$components = wp.components,
    FormFileUpload = _wp$components.FormFileUpload,
    Button = _wp$components.Button;
var __ = wp.i18n.__;
var mediaUpload = wp.utils.mediaUpload;


function fileUpload(props, config, attributeKey) {
	var buttonText = config.buttonText ? config.buttonText : __('Upload');

	var defaultAttributes = {
		accept: '*',
		allowedTypes: ['image', 'video', 'audio', 'text', 'message', 'application'],
		isLarge: true
	};

	var fieldAttributes = _.extend(defaultAttributes, config);

	/**
  * Set media when the file is uploaded.
  *
  * @param {Array} files Uploaded Files.
  * @return {void}
  */
	var setMedia = function setMedia(files) {
		var newAttributes = {};

		if (!_.isEmpty(props.attributes[attributeKey]) && !_.isEmpty(files)) {
			files = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(props.attributes[attributeKey]), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(files));
		}

		if (!_.isEmpty(files)) {
			files = files.map(function (file) {
				file.name = file.url ? file.url.substring(file.url.lastIndexOf('/') + 1) : '';
				return file;
			});
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
  * Get allowed file type with file name.
  *
  * @param {String} fileName File url.
  * @return {String} Allowed file type.
  */
	var getAllowedType = function getAllowedType(fileName) {
		if (fileName && !_.isEmpty(fileName) && _.first(fileName).type) {
			var fileType = _.first(fileName).type;
			if (fileType) {
				var typeParts = fileType.split('/');
				return _.first(typeParts) && _.contains(fieldAttributes.allowedTypes, _.first(typeParts)) ? _.first(typeParts) : '';
			}
		}
	};

	/**
  * Remove files.
  *
  * @param {Object} event Event Object.
  * @return {void}
  */
	var removeFiles = function removeFiles(event) {
		if (config.removeFiles) {
			config.removeFiles(event, props);
		} else {
			updateMedia([]);
		}
	};

	/**
  * Remove single file.
  *
  * @param {Object} event Event Object.
  * @return {void}
  */
	var removeFile = function removeFile(event) {
		if (config.removeFile) {
			config.removeFile(event, props);
		} else {
			var key = parseInt(event.currentTarget.dataset.key, 10);
			props.attributes[attributeKey].splice(key, 1);
			updateMedia([]); // To force update.
			updateMedia(props.attributes[attributeKey]);
			if (_.isEmpty(props.attributes[attributeKey])) {
				updateMedia([]); // To remove 'remove' button.
			}
		}
	};

	/**
  * Get dash icon for the given file name.
  *
  * @param {String} fileName File name.
  * @return {String} Dash Icon class.
  */
	var getDashIcon = function getDashIcon(fileName) {
		var fileExtension = fileName.split('.').pop();
		var dashiconSuffix = 'media-default';

		if ('zip' === fileExtension) {
			dashiconSuffix = 'media-archive';
		} else if (_.contains(['pdf', 'epub', 'azw', 'indd'], fileExtension)) {
			dashiconSuffix = 'book';
		} else if (_.contains(['jpg', 'png', 'gif', 'jpeg', 'tif', 'ico', 'bmp', 'svg'], fileExtension)) {
			dashiconSuffix = 'format-image';
		} else if (_.contains(['mp4', 'avi', 'flv', 'mov', 'mpg', 'rm', 'swf', 'wmv', 'ogv', '3gp', '3g2', 'm4v'], fileExtension)) {
			dashiconSuffix = 'media-video';
		} else if (_.contains(['pptx', 'pptm', 'ppt', 'pot', 'potx', 'potm', 'pps', 'ppsx'], fileExtension)) {
			dashiconSuffix = 'media-interactive';
		} else if (_.contains(['mp3', 'm4a', 'ogg', 'wav'], fileExtension)) {
			dashiconSuffix = 'media-audio';
		} else if (_.contains(['xls', 'xlsx', 'xla', 'xlb', 'xlc', 'xld', 'xlk', 'xll', 'xlm', 'xlt', 'xlv', 'xlw', 'numbers'], fileExtension)) {
			dashiconSuffix = 'media-spreadsheet';
		} else if (_.contains(['doc', 'docx', 'docm', 'pages'], fileExtension)) {
			dashiconSuffix = 'media-document';
		} else if (_.contains(['txt', 'odt', 'rtf', 'log'], fileExtension)) {
			dashiconSuffix = 'media-text';
		}

		return 'dashicons-' + dashiconSuffix;
	};

	/**
  * Handles when the file is uploaded.
  *
  * @param {Object} event Event object.
  * @return {void}
  */
	fieldAttributes.onChange = function (event) {
		if (config.onChange) {
			config.onChange(event, props, setMedia, getAllowedType);
		} else {
			mediaUpload(event.target.files, setMedia, getAllowedType(event.target.files));
		}
	};

	var fieldWrapperClasses = 'file-upload-field';
	fieldWrapperClasses += 'inspector' !== config.placement ? ' block-field' : ' inspector-field';

	delete fieldAttributes.buttonText;

	return wp.element.createElement(
		'div',
		{ className: fieldWrapperClasses },
		wp.element.createElement(
			'div',
			{ className: 'file-upload-filed-actions' },
			wp.element.createElement(
				FormFileUpload,
				fieldAttributes,
				buttonText
			),
			!_.isEmpty(props.attributes[attributeKey]) && wp.element.createElement(
				Button,
				{ isLarge: true, onClick: removeFiles },
				__('Remove')
			)
		),
		props.attributes[attributeKey] && !_.isEmpty(props.attributes[attributeKey]) && wp.element.createElement(
			'ul',
			{ className: 'file-upload-field-files' },
			props.attributes[attributeKey].map(function (file, key) {
				if (file.id && file.name) {
					var dashIcon = getDashIcon(file.name);

					return wp.element.createElement(
						'li',
						null,
						wp.element.createElement('button', { className: 'dashicons dashicons-no-alt middleware-remove-file', 'data-key': key, onClick: removeFile }),
						wp.element.createElement(
							'div',
							{ className: 'middleware-field-media-thumbnail' },
							wp.element.createElement('span', { className: 'dashicons ' + dashIcon })
						),
						wp.element.createElement(
							'div',
							{ className: 'middleware-file' },
							wp.element.createElement(
								'a',
								{ target: '_blank', href: file.url },
								file.name
							)
						)
					);
				}
			})
		)
	);
}

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(302);

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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(303), __esModule: true };

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(304);
module.exports = __webpack_require__(2).Array.from;


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(92);
var $export = __webpack_require__(12);
var toObject = __webpack_require__(50);
var call = __webpack_require__(305);
var isArrayIter = __webpack_require__(306);
var toLength = __webpack_require__(160);
var createProperty = __webpack_require__(307);
var getIterFn = __webpack_require__(173);

$export($export.S + $export.F * !__webpack_require__(308)(function (iter) { Array.from(iter); }), 'Array', {
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

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(20);
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

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(36);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(13);
var createDesc = __webpack_require__(52);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 308:
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

/***/ 309:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 310:
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

	return wp.element.createElement(
		BaseControl,
		{
			label: fieldAttributes.label,
			id: fieldAttributes.id,
			help: fieldAttributes.help,
			className: 'components-toggle-control'
		},
		wp.element.createElement(FormToggle, fieldAttributes)
	);
}

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = image;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_image_placeholder__ = __webpack_require__(312);
/**
 * Image Field.
 */

var MediaUpload = wp.blocks.MediaUpload;
var Button = wp.components.Button;
var __ = wp.i18n.__;




function image(props, config, attributeKey) {
	var buttonText = config.buttonText ? config.buttonText : __('Open Media Library');
	var imageObject = props.attributes[attributeKey];

	var defaultAttributes = {

		type: 'image',

		value: imageObject || '',

		render: function render(_ref) {
			var open = _ref.open;

			var nodes = [];

			if (!imageObject) {
				if (config.imagePlaceholder) {
					nodes.push(Object(__WEBPACK_IMPORTED_MODULE_0__components_image_placeholder__["a" /* default */])(props, config, attributeKey));
				} else {
					nodes.push(wp.element.createElement(
						Button,
						{ className: 'button button-large button-upload', onClick: open },
						buttonText
					));
				}
			} else {
				nodes.push(wp.element.createElement('img', { className: 'uploaded-image', src: imageObject.url, alt: imageObject.alt }));

				if (!!config.removeButtonText) {
					nodes.push(wp.element.createElement(
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

			return wp.element.createElement(
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

	return wp.element.createElement(MediaUpload, fieldAttributes);
}

/***/ }),

/***/ 312:
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

	return wp.element.createElement(ImagePlaceholder, fieldAttributes);
}

/***/ }),

/***/ 313:
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

	if ('inspector' === config.placement) {
		delete fieldAttributes.placement;
		return wp.element.createElement(
			BaseControl,
			{
				label: fieldAttributes.label,
				id: fieldAttributes.id,
				help: fieldAttributes.help,
				className: fieldAttributes.className
			},
			wp.element.createElement(UrlInput, fieldAttributes)
		);
	}

	return wp.element.createElement(UrlInput, fieldAttributes);
}

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_media_placeholder__ = __webpack_require__(315);
/**
 * Video/Audio field.
 */
var __ = wp.i18n.__;



function mediaUpload(props, config, attributeKey) {
	var defaultAttributes = {
		placeholderText: __('Select a ') + config.type + __(' file from your library, or upload a new one'),
		buttonText: __('Upload'),
		isSelected: props.isSelected
	};
	var fieldAttributes = _.extend(defaultAttributes, config);

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

	fieldAttributes.setCaption = function (caption) {
		var attributeValue = _.extend({}, props.attributes[attributeKey]);
		if (attributeValue) {
			var newAttributes = {};
			attributeValue.mediaCaption = caption;
			newAttributes[attributeKey] = attributeValue;
			props.setAttributes(newAttributes);
		}
	};

	fieldAttributes.mediaData = props.attributes[attributeKey];

	return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_media_placeholder__["a" /* default */], fieldAttributes);
}

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);






var Component = wp.element.Component;
var __ = wp.i18n.__;

// const { rawHandler } = wp.api;

var _wp$blocks = wp.blocks,
    PlainText = _wp$blocks.PlainText,
    MediaUpload = _wp$blocks.MediaUpload,
    BlockControls = _wp$blocks.BlockControls;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    FormFileUpload = _wp$components.FormFileUpload,
    Button = _wp$components.Button,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton,
    DropZone = _wp$components.DropZone;
var mediaUpload = wp.utils.mediaUpload;

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

			if (this.state.mediaData) {
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
			var _props = this.props,
			    type = _props.type,
			    caption = _props.caption,
			    mediaData = _props.mediaData,
			    placeholderText = _props.placeholderText,
			    buttonText = _props.buttonText,
			    className = _props.className,
			    isSelected = _props.isSelected,
			    setCaption = _props.setCaption;


			var mediaCaption = mediaData && mediaData.mediaCaption ? mediaData.mediaCaption || '' : '';

			var controls = !this.state.editing && isSelected && wp.element.createElement(
				BlockControls,
				{ key: 'controls' },
				wp.element.createElement(
					Toolbar,
					null,
					wp.element.createElement(IconButton, {
						className: 'components-icon-button components-toolbar__control',
						label: __('Edit ') + type,
						onClick: this.switchToEditing,
						icon: 'edit'
					})
				)
			);

			if (this.state.editing) {
				var mediaIcon = 'media-' + type;

				return [controls, wp.element.createElement(
					Placeholder,
					{
						key: 'placeholder',
						icon: mediaIcon,
						label: type,
						className: className + ' wp-block-' + type,
						instructions: placeholderText },
					wp.element.createElement(DropZone, {
						onFilesDrop: this.onFilesDrop
					}),
					wp.element.createElement(
						'form',
						{ onSubmit: this.onSelectUrl },
						wp.element.createElement('input', {
							type: 'url',
							className: 'components-placeholder__input',
							placeholder: __('Enter URL of ') + type + __(' file here…'),
							onChange: this.onUrlChange,
							value: this.state.mediaData.url || '' }),
						wp.element.createElement(
							Button,
							{
								isLarge: true,
								type: 'submit' },
							__('Use URL')
						)
					),
					wp.element.createElement(
						FormFileUpload,
						{
							isLarge: true,
							className: 'wp-block-video__upload-button',
							onChange: this.uploadFromFiles,
							accept: type + '/*'
						},
						buttonText
					),
					wp.element.createElement(MediaUpload, {
						onSelect: this.onSelectMedia,
						type: type,
						render: function render(_ref5) {
							var open = _ref5.open;
							return wp.element.createElement(
								Button,
								{ isLarge: true, onClick: open },
								__('Add from Media Library')
							);
						}
					})
				)];
			}

			return [controls, wp.element.createElement(
				'figure',
				{ key: type, className: className + ' wp-block-' + type },
				'video' === type && wp.element.createElement('video', { controls: true, src: this.state.mediaData.url }),
				'audio' === type && wp.element.createElement('audio', { controls: true, src: this.state.mediaData.url }),
				isSelected && caption && wp.element.createElement(PlainText, {
					placeholder: __('Write caption…'),
					value: mediaCaption,
					isSelected: isSelected,
					onChange: setCaption
				})
			)];
		}
	}]);

	return MediaPlaceholder;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (MediaPlaceholder);

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(317);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(320);

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

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(318), __esModule: true };

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
__webpack_require__(63);
module.exports = __webpack_require__(319);


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(174);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(36);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(159);
var defined = __webpack_require__(86);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(321), __esModule: true };

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
__webpack_require__(63);
module.exports = __webpack_require__(322);


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var get = __webpack_require__(173);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(13);
var createDesc = __webpack_require__(52);
module.exports = __webpack_require__(21) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(86);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(158);
var enumBugKeys = __webpack_require__(91);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 52:
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

/***/ 61:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(272)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(168)(String, 'String', function (iterated) {
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

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = radio;
/**
 * Radio Control field.
 */

var RadioControl = wp.components.RadioControl;


function radio(props, config, attributeKey) {
	var defaultAttributes = {
		selected: props.attributes[attributeKey]
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

	return wp.element.createElement(RadioControl, fieldAttributes);
}

/***/ }),

/***/ 641:
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

	return wp.element.createElement(RangeControl, fieldAttributes);
}

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = richText;
/**
 * Text field.
 */

var RichText = wp.blocks.RichText;


function richText(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || '',
		inlineToolbar: true,
		isSelected: false,
		onFocus: function onFocus() {
			this.isSelected = true;
		}
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

	return wp.element.createElement(RichText, fieldAttributes);
}

/***/ }),

/***/ 643:
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

	return wp.element.createElement(SelectControl, fieldAttributes);
}

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = text;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_field__ = __webpack_require__(175);
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

	return wp.element.createElement(PlainText, fieldAttributes);
}

/***/ }),

/***/ 645:
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

	return wp.element.createElement(
		BaseControl,
		{
			id: fieldAttributes.id
		},
		wp.element.createElement(TextareaControl, fieldAttributes)
	);
}

/***/ }),

/***/ 646:
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

	return wp.element.createElement(TreeSelect, fieldAttributes);
}

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(90)('keys');
var uid = __webpack_require__(61);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(257);
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

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(34);
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

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(258);

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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(263);

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

/***/ 97:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(20);
var dPs = __webpack_require__(274);
var enumBugKeys = __webpack_require__(91);
var IE_PROTO = __webpack_require__(89)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(163)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(275).appendChild(iframe);
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


/***/ })

/******/ });