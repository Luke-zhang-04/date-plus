"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hrsPerDay = 24,
    minsPerHr = 60,
    secsPerMin = 60,
    msPerSec = 1000;
/**
 * Convert namespace
 * @classdesc A namespace program to convert units
 * @namespace
 */

var Convert = /*#__PURE__*/function (_Date) {
  _inherits(Convert, _Date);

  var _super = _createSuper(Convert);

  function Convert() {
    _classCallCheck(this, Convert);

    return _super.apply(this, arguments);
  }

  return Convert;
}( /*#__PURE__*/_wrapNativeSuper(Date));

exports["default"] = Convert;
/**
 * Converts milliseconds to seconds with remainder
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with seconds and milliseconds
 */

Convert.msToSecs = function (ms) {
  return {
    ms: ms % msPerSec,
    seconds: (ms - ms % msPerSec) / msPerSec
  };
};
/**
 * Converts milliseconds to minutes with remainder
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
 */


Convert.msToMins = function (ms) {
  var milliseconds = ms % msPerSec % msPerSec,
      seconds = (ms - ms % msPerSec) / msPerSec % secsPerMin,
      minutes = (ms - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin);
  return {
    ms: milliseconds,
    seconds: seconds,
    minutes: minutes
  };
};
/**
 * Converts milliseconds to hours with remainder
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
 */


Convert.msToHrs = function (ms) {
  var milliseconds = ms % msPerSec % msPerSec,
      seconds = (ms - ms % msPerSec) / msPerSec % secsPerMin,
      minutes = (ms - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin) % minsPerHr,
      hours = (ms - minutes * msPerSec * secsPerMin - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin * minsPerHr);
  return {
    ms: milliseconds,
    seconds: seconds,
    minutes: minutes,
    hours: hours
  };
};
/**
 * Converts milliseconds to days with remainder
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with days, hours, minutes, seconds, and milliseconds
 */


Convert.msToDays = function (ms) {
  var milliseconds = ms % msPerSec % msPerSec,
      seconds = (ms - ms % msPerSec) / msPerSec % secsPerMin,
      minutes = (ms - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin) % minsPerHr,
      hours = (ms - minutes * msPerSec * secsPerMin - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin * minsPerHr) % hrsPerDay,
      days = (ms - hours * msPerSec * secsPerMin * minsPerHr - minutes * msPerSec * secsPerMin - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin * minsPerHr * hrsPerDay);
  return {
    ms: milliseconds,
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days
  };
};
/**
 * Converts seconds to milliseconds
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {number} converted milliseconds
 */


Convert.secsToMs = function (secs) {
  return secs * msPerSec;
};
/**
 * Converts seconds to minutes remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted minutes
 */


Convert.secsToMins = function (secs) {
  return Convert.msToMins(Convert.secsToMs(secs));
};
/**
 * Converts seconds to hours remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted hours
 */


Convert.secsToHrs = function (secs) {
  return Convert.msToHrs(Convert.secsToMs(secs));
};