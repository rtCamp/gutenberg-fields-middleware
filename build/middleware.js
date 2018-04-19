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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(28);
var hide = __webpack_require__(9);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(44);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41);
var defined = __webpack_require__(22);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(22);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(64);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(69);

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
/* 20 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(78)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(48)(String, 'String', function (iterated) {
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
/* 22 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(63);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
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
/* 30 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(47);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(6);
var dPs = __webpack_require__(80);
var enumBugKeys = __webpack_require__(27);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(45)('iframe');
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
var global = __webpack_require__(2);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(12);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(33);
var wksExt = __webpack_require__(37);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(95);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(99);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(47);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(61)(false);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(24);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var fails = __webpack_require__(11);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(11)(function () {
  return Object.defineProperty(__webpack_require__(45)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(13);
var IE_PROTO = __webpack_require__(25)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(33);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(49);
var hide = __webpack_require__(9);
var has = __webpack_require__(5);
var Iterators = __webpack_require__(12);
var $iterCreate = __webpack_require__(79);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(46);
var ITERATOR = __webpack_require__(1)('iterator');
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(40);
var hiddenKeys = __webpack_require__(27).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(20);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(44);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(53);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(12);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23);
var TAG = __webpack_require__(1)('toStringTag');
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(119);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(122);

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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inputField;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(19);
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fields__ = __webpack_require__(67);




/**
 * Gutenberg Fields Middleware.
 */

var _wp$blocks = wp.blocks,
    InspectorControls = _wp$blocks.InspectorControls,
    BlockControls = _wp$blocks.BlockControls,
    BlockAlignmentToolbar = _wp$blocks.BlockAlignmentToolbar;
var addFilter = wp.hooks.addFilter;
var withState = wp.components.withState;

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
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, GutenbergFieldsMiddleWare);

		this.blockConfigs = {};
		this.fields = {};
		this.inspectorControlFields = {};
		this.inspectorControls = null;
		this.config = _.extend({}, config);
		this.innerFields = {};
		this.blockControls = null;

		this.setupBlockFields = this.setupBlockFields.bind(this);
		this.setupField = this.setupField.bind(this);
		this.getInnerFields = this.getInnerFields.bind(this);
		this.updateAlignment = this.updateAlignment.bind(this);
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

			var blockStates = _.extend({
				editable: ''
			}, this.config.blockStates || {});

			delete this.blockConfigs.blockStates;

			var blockAlignmentControls = ['left', 'center', 'right', 'wide', 'full'];

			this.blockConfigs.edit = withState(blockStates)(function (props) {
				_this.setupBlockFields(props);

				_this.blockControls = _this.config.attributes.align && wp.element.createElement(
					BlockControls,
					null,
					wp.element.createElement(BlockAlignmentToolbar, {
						value: props.align,
						onChange: function onChange(nextAlign) {
							return props.setAttributes({ align: nextAlign });
						},
						controls: _this.config.attributes.align.controls || blockAlignmentControls,
						wideControlsEnabled: _this.config.attributes.align.wideControlsEnabled || false
					})
				);

				var wrapperClassName = 'middleware-block ' + props.className;
				props.middleware = _this;

				if (_this.config.edit) {
					if (_this.constructor.isClassComponent(_this.config.edit)) {
						return wp.element.createElement(
							'div',
							{ className: wrapperClassName },
							wp.element.createElement(_this.config.edit, props)
						);
					}

					return wp.element.createElement(
						'div',
						{ className: wrapperClassName },
						_this.config.edit(props)
					);
				}

				return wp.element.createElement(
					'div',
					{ className: wrapperClassName },
					_this.edit(props)
				);
			});

			if (this.config.attributes.align && !this.config.attributes.getEditWrapperProps) {
				this.blockConfigs.getEditWrapperProps = function (attributes) {
					var align = attributes.align;

					if (_.contains(blockAlignmentControls, attributes.align)) {
						return { 'data-align': align };
					}
				};
			}

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
   * @param {Object} innerFields  Inner Fields.
   *
   * @return {Object} Field.
   */

	}, {
		key: 'getField',
		value: function getField(props, config, attributeKey) {
			var field = {};

			switch (config.type) {
				case 'text':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["p" /* text */](props, config, attributeKey, this);
					break;
				case 'rich-text':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["n" /* richText */](props, config, attributeKey, this);
					break;
				case 'link':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["j" /* link */](props, config, attributeKey, this);
					break;
				case 'image':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["h" /* image */](props, config, attributeKey, this);
					break;
				case 'video':
				case 'audio':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["k" /* mediaUpload */](props, config, attributeKey, this);
					break;
				case 'select':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["o" /* select */](props, config, attributeKey, this);
					break;
				case 'range':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["m" /* range */](props, config, attributeKey, this);
					break;
				case 'radio':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["l" /* radio */](props, config, attributeKey, this);
					break;
				case 'checkbox':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["b" /* checkbox */](props, config, attributeKey, this);
					break;
				case 'button-editable':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["a" /* buttonEditable */](props, config, attributeKey, this);
					break;
				case 'color':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["d" /* color */](props, config, attributeKey, this);
					break;
				case 'code-editor':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["c" /* codeEditor */](props, config, attributeKey, this);
					break;
				case 'date-time':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["e" /* dateTime */](props, config, attributeKey, this);
					break;
				case 'textarea':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["q" /* textarea */](props, config, attributeKey, this);
					break;
				case 'switch':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["g" /* formToggle */](props, config, attributeKey, this);
					break;
				case 'tree-select':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["r" /* treeSelect */](props, config, attributeKey, this);
					break;
				case 'file-upload':
					field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["f" /* fileUpload */](props, config, attributeKey, this);
					break;
			}

			if (_.contains(['email', 'hidden', 'number', 'search', 'tel', 'time', 'date', 'datetime-local', 'file', 'month', 'password', 'time', 'url', 'week'], config.type)) {
				field[attributeKey] = __WEBPACK_IMPORTED_MODULE_4__fields__["i" /* inputField */](props, config, attributeKey, this.fields);
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

			// Setup inner fields first.
			_.each(this.blockConfigs.attributes, function (attribute) {
				if (attribute.field && attribute.field.innerFields) {
					_.each(attribute.field.innerFields, function (innerFieldAttributeKey) {
						_.extend(_this2.innerFields, _this2.setupField(props, _this2.blockConfigs.attributes[innerFieldAttributeKey], innerFieldAttributeKey, false));
					});
				}
			});

			_.each(this.blockConfigs.attributes, function (attribute, attributeKey) {
				if (attribute.field && !_this2.innerFields[attributeKey]) {
					_this2.setupField(props, attribute, attributeKey);
				}
			});

			this.inspectorControls = props.isSelected ? wp.element.createElement(
				InspectorControls,
				{ key: 'inspector-control' },
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.inspectorControlFields).map(function (key) {
					return _this2.inspectorControlFields[key];
				})
			) : null;
		}

		/**
   * Setup a single Field.
   *
   * @param {Object} props Properties.
   * @param {Object} attribute Attribute.
   * @param {String} attributeKey Attribute key.
   * @param {Boolean} extend Whether to extend the field with field objects.
   * @return {Object|void} Field.
   */

	}, {
		key: 'setupField',
		value: function setupField(props, attribute, attributeKey) {
			var extend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

			var config = _.extend({
				onFocus: function onFocus() {
					props.setState({
						editable: attributeKey
					});
				}
			}, attribute.field);

			var field = this.getField(props, config, attributeKey);

			if ('inspector' === config.placement) {
				_.extend(this.inspectorControlFields, field);
			} else if (extend) {
				_.extend(this.fields, field);
			}

			return field;
		}

		/**
   * Get inner fields using the attribute key.
   *
   * @param {String} attributeKey Attribute key.
   * @return {Object} Inner fields.
   */

	}, {
		key: 'getInnerFields',
		value: function getInnerFields(attributeKey) {
			var _this3 = this;

			var innerFields = {};
			var config = this.blockConfigs.attributes[attributeKey].field;

			if (config && !_.isEmpty(config.innerFields)) {
				_.each(config.innerFields, function (innerFieldAttributeKey, innerFieldKeyName) {
					innerFields[innerFieldKeyName] = _this3.innerFields[innerFieldAttributeKey];
				});
			}

			return innerFields;
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
			props.setAttributes(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, extraUpdatedAttributes, { align: nextAlign }));
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
			var _this4 = this;

			return [this.blockControls, this.inspectorControls, wp.element.createElement(
				'div',
				{ key: props.className },
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.fields).map(function (key) {
					return _this4.fields[key];
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(13);
var $keys = __webpack_require__(14);

__webpack_require__(43)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(42);
var toAbsoluteIndex = __webpack_require__(62);
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_editable__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button_editable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_editor__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__code_editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__color__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_time__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__date_time__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_upload__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__file_upload__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_toggle__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__form_toggle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__input_field__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__input_field__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__link__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__media_upload__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__media_upload__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__radio__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__radio__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__range__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_12__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rich_text__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_13__rich_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__select__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_14__select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_15__text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__textarea__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_16__textarea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tree_select__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_17__tree_select__["a"]; });



















/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buttonEditable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_button_editable__ = __webpack_require__(73);

/**
 * Button field.
 */

var __ = wp.i18n.__;



function buttonEditable(props, config, attributeKey, middleware) {
	var defaultAttributes = {
		placeholder: __('Add text…'),
		tagName: 'span',
		value: props.attributes[attributeKey] ? props.attributes[attributeKey] : '',
		className: 'wp-block-button__link',
		keepPlaceholderOnFocus: true,
		inlineToolbar: true,
		formattingControls: ['bold', 'italic', 'strikethrough']
	};

	var fieldAttributes = _.extend(defaultAttributes, config);
	var innerFields = middleware.getInnerFields(attributeKey);
	var backgroundColorAttributeKey = config.innerFields ? config.innerFields.backgroundColor : '';
	var textColorAttributeKey = config.innerFields ? config.innerFields.color : '';
	var buttonClassAttributeKey = config.innerFields ? config.innerFields.class : '';

	fieldAttributes.onChange = function (value) {
		if (config.onChange) {
			config.onChange(value, props);
		} else {
			var newAttributes = {};
			newAttributes[attributeKey] = value;
			props.setAttributes(newAttributes);
		}
	};

	return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_button_editable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		buttonValue: fieldAttributes.value,
		isSelected: props.isSelected && attributeKey === props.editable,
		linkField: innerFields.link,
		backgroundColor: backgroundColorAttributeKey ? props.attributes[backgroundColorAttributeKey] : null,
		textColor: textColorAttributeKey ? props.attributes[textColorAttributeKey] : null,
		buttonClass: buttonClassAttributeKey ? props.attributes[buttonClassAttributeKey] : null
	}));
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(72) });


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(14);
var gOPS = __webpack_require__(30);
var pIE = __webpack_require__(20);
var toObject = __webpack_require__(13);
var IObject = __webpack_require__(41);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function () {
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
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);






var Component = wp.element.Component;
var RichText = wp.blocks.RichText;
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

		_this.onFocus = _this.onFocus.bind(_this);
		_this.onSubmit = _this.onSubmit.bind(_this);
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ButtonEditable, [{
		key: 'onFocus',
		value: function onFocus() {
			this.setState({
				displayForm: true
			});
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
			this.props.style = _.extend({
				backgroundColor: this.props.backgroundColor,
				color: this.props.textColor
			}, this.props.style);

			var buttonClass = this.props.buttonClass ? ' ' + this.props.buttonClass : '';
			this.props.className = this.props.className + buttonClass;

			var form = link && this.props.isSelected && this.state.displayForm && wp.element.createElement(
				'form',
				{
					key: 'form-link',
					className: 'blocks-button__inline-link',
					onSubmit: this.onSubmit },
				wp.element.createElement(Dashicon, { icon: 'admin-links' }),
				link,
				wp.element.createElement(IconButton, { icon: 'editor-break', label: __('Apply'), type: 'submit' })
			);

			return wp.element.createElement(
				'div',
				{ className: 'button-editable' },
				wp.element.createElement(
					'span',
					{ className: 'wp-block-button', key: 'button' },
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(13);
var $getPrototypeOf = __webpack_require__(46);

__webpack_require__(43)('getPrototypeOf', function () {
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

__webpack_require__(21);
__webpack_require__(36);
module.exports = __webpack_require__(37).f('iterator');


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24);
var defined = __webpack_require__(22);
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

var create = __webpack_require__(34);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(6);
var getKeys = __webpack_require__(14);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
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

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(83);
var step = __webpack_require__(84);
var Iterators = __webpack_require__(12);
var toIObject = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(48)(Array, 'Array', function (iterated, kind) {
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
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(49);
var META = __webpack_require__(88).KEY;
var $fails = __webpack_require__(11);
var shared = __webpack_require__(26);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(16);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(37);
var wksDefine = __webpack_require__(38);
var enumKeys = __webpack_require__(89);
var isArray = __webpack_require__(90);
var anObject = __webpack_require__(6);
var isObject = __webpack_require__(10);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(34);
var gOPNExt = __webpack_require__(91);
var $GOPD = __webpack_require__(51);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(14);
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
  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(20).f = $propertyIsEnumerable;
  __webpack_require__(30).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(33)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(16)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(5);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(11)(function () {
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
var getKeys = __webpack_require__(14);
var gOPS = __webpack_require__(30);
var pIE = __webpack_require__(20);
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
var cof = __webpack_require__(23);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8);
var gOPN = __webpack_require__(50).f;
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

__webpack_require__(38)('asyncIterator');


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('observable');


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(98).set });


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(10);
var anObject = __webpack_require__(6);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(28)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
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
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(34) });


/***/ }),
/* 102 */
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
/* 103 */
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
/* 104 */
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
/* 105 */
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
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fileUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(115);
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(108);

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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
__webpack_require__(110);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(28);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(13);
var call = __webpack_require__(111);
var isArrayIter = __webpack_require__(112);
var toLength = __webpack_require__(42);
var createProperty = __webpack_require__(113);
var getIterFn = __webpack_require__(52);

$export($export.S + $export.F * !__webpack_require__(114)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6);
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(12);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(4);
var createDesc = __webpack_require__(15);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
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
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
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
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_image_placeholder__ = __webpack_require__(118);
/**
 * Video/Audio field.
 */
var __ = wp.i18n.__;



function mediaUpload(props, config, attributeKey) {
	var defaultAttributes = {
		placeholderText: __('Select a image file from your library, or upload a new one'),
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

	return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__components_image_placeholder__["a" /* default */], fieldAttributes);
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__editor_scss__);








var Component = wp.element.Component;
var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    PlainText = _wp$blocks.PlainText,
    MediaUpload = _wp$blocks.MediaUpload;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    FormFileUpload = _wp$components.FormFileUpload,
    Button = _wp$components.Button,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton,
    DropZone = _wp$components.DropZone;
var mediaUpload = wp.utils.mediaUpload;

/**
 * ImagePlaceholder component class.
 */

var ImagePlaceholder = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ImagePlaceholder, _Component);

	function ImagePlaceholder() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, ImagePlaceholder);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ImagePlaceholder.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(ImagePlaceholder)).apply(this, arguments));

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


	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(ImagePlaceholder, [{
		key: 'uploadFromFiles',
		value: function uploadFromFiles(event) {
			var _this2 = this;

			mediaUpload(event.target.files, function (_ref) {
				var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 1),
				    media = _ref2[0];

				return _this2.onSelectMedia(media);
			}, 'image');
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
			}, 'image');
		}

		/**
   * Callback method when image is selected.
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
			var _props = this.props,
			    caption = _props.caption,
			    mediaData = _props.mediaData,
			    placeholderText = _props.placeholderText,
			    buttonText = _props.buttonText,
			    className = _props.className,
			    isSelected = _props.isSelected,
			    setCaption = _props.setCaption;


			var mediaCaption = mediaData && mediaData.mediaCaption ? mediaData.mediaCaption || '' : '';

			var controls = this.props.isSelected && wp.element.createElement(
				Toolbar,
				{ key: 'image' },
				wp.element.createElement(IconButton, {
					className: 'components-icon-button components-toolbar__control',
					label: __('Edit image'),
					onClick: this.switchToEditing,
					icon: 'edit'
				})
			);

			if (this.state.editing) {
				var mediaIcon = 'format-image';

				return wp.element.createElement(
					Placeholder,
					{
						key: 'placeholder',
						icon: mediaIcon,
						label: 'image',
						className: 'wp-middleware-block-image ' + className,
						instructions: placeholderText },
					wp.element.createElement(DropZone, { onFilesDrop: this.onFilesDrop }),
					wp.element.createElement(
						'form',
						{ onSubmit: this.onSelectUrl },
						wp.element.createElement('input', {
							type: 'url',
							className: 'components-placeholder__input',
							placeholder: __('Enter URL of image file here…'),
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
							accept: 'image/*'
						},
						buttonText
					),
					wp.element.createElement(MediaUpload, {
						onSelect: this.onSelectMedia,
						type: 'image',
						render: function render(_ref5) {
							var open = _ref5.open;
							return wp.element.createElement(
								Button,
								{ isLarge: true, onClick: open },
								__('Add from Media Library')
							);
						}
					})
				);
			}

			return wp.element.createElement(
				'div',
				{ className: 'middleware-media-field' },
				controls,
				wp.element.createElement(
					'figure',
					{ key: 'image', className: 'wp-middleware-block-image ' + className },
					wp.element.createElement('img', { src: this.state.mediaData.url, alt: this.state.mediaData.title || '' }),
					isSelected && caption && wp.element.createElement(PlainText, {
						placeholder: __('Write caption…'),
						value: mediaCaption,
						isSelected: isSelected,
						onChange: setCaption
					})
				)
			);
		}
	}]);

	return ImagePlaceholder;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ImagePlaceholder);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(21);
module.exports = __webpack_require__(121);


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(53);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(12);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(21);
module.exports = __webpack_require__(124);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(6);
var get = __webpack_require__(52);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
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
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaUpload;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_media_placeholder__ = __webpack_require__(128);
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
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__editor_scss__);








var Component = wp.element.Component;
var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    PlainText = _wp$blocks.PlainText,
    MediaUpload = _wp$blocks.MediaUpload;
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

			var controls = this.props.isSelected && wp.element.createElement(
				Toolbar,
				{ key: type },
				wp.element.createElement(IconButton, {
					className: 'components-icon-button components-toolbar__control',
					label: __('Edit ') + type,
					onClick: this.switchToEditing,
					icon: 'edit'
				})
			);

			if (this.state.editing) {
				var mediaIcon = 'media-' + type;

				return wp.element.createElement(
					Placeholder,
					{
						key: 'placeholder',
						icon: mediaIcon,
						label: type,
						className: className + ' wp-block-' + type,
						instructions: placeholderText },
					wp.element.createElement(DropZone, { onFilesDrop: this.onFilesDrop }),
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
				);
			}

			return wp.element.createElement(
				'div',
				{ className: 'middleware-media-field' },
				controls,
				wp.element.createElement(
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
				)
			);
		}
	}]);

	return MediaPlaceholder;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (MediaPlaceholder);

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
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
/* 131 */
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
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = richText;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);

/**
 * Text field.
 */


var RichText = wp.blocks.RichText;


function richText(props, config, attributeKey) {
	var defaultAttributes = {
		value: props.attributes[attributeKey] || '',
		inlineToolbar: true
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

	return wp.element.createElement(RichText, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldAttributes, {
		isSelected: props.isSelected && attributeKey === props.editable
	}));
}

/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
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
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = text;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_field__ = __webpack_require__(55);
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
/* 136 */
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
/* 137 */
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

/***/ })
/******/ ]);