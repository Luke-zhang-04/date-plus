"use strict";
/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.1
 * @exports DatePlus
 */

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
/* eslint-enable no-magic-numbers */

/**
 * Dateplus class and namespace
 * @classdesc A class and namespace program to assist with date manipulation
 * @class
 * @namespace
 */

var DatePlus = /*#__PURE__*/function (_Date) {
  _inherits(DatePlus, _Date);

  var _super = _createSuper(DatePlus);

  function DatePlus() {
    var _this;

    _classCallCheck(this, DatePlus);

    _this = _super.apply(this, arguments);
    /**
     * Add's 0s to the instantiated (e.g 2020/4/3 => 2020/04/03)
     * @public
     * @instance
     * @param {string} seperator - char the date is seperatred by
     * @returns {string} - date with zeros
     */

    _this.addZeros = function () {
      var seperator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
      return DatePlus.addZeros(_this.formatDate(), seperator);
    };
    /**
     * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
     * @public
     * @instance
     * @param {string} seperator - char to seperate date with
     * @returns {string} formatted date
     */


    _this.formatDate = function () {
      var seperator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
      return DatePlus.formatDate(_assertThisInitialized(_this), seperator);
    };
    /**
     * Gets instantiated day of week in word form (e.g 0 => "Sunday")
     * @public
     * @instance
     * @returns {string} stringed day of week
     */


    _this.getWordDay = function () {
      return DatePlus._daysReference[_this.getDay()];
    };
    /**
     * Gets instantiated month in word form (e.g 0 => "January")
     * @public
     * @instance
     * @returns {string} stringed worded month
     */


    _this.getWordMonth = function () {
      return DatePlus._monthsReference[_this.getMonth()];
    };
    /* eslint-enable max-len */


    return _this;
  }

  return DatePlus;
}( /*#__PURE__*/_wrapNativeSuper(Date));

exports["default"] = DatePlus;
/**
 * Reference to days of the week, zero indexed
 * @private
 * @static
 * @type {Object.<number, string>}
 */

DatePlus._daysReference = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};
/**
 * Reference to months of a year, zero indexed
 * @private
 * @static
 * @type {Object.<number, string>}
 */

DatePlus._monthsReference = {
  0: "January",
  1: "Feburary",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};
/**
 * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
 * @public
 * @static
 * @param {string} date - string date to format
 * @param {string} seperator - char the date is seperatred by
 * @returns {string} - date with zeros
 */

DatePlus.addZeros = function (date) {
  var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
  var newDate = "";

  for (var index = 0; index < 2; index++) {
    if (date.split(seperator)[index].length < 2) {
      newDate += "0".concat(date.split(seperator)[index]).concat(seperator);
    } else {
      newDate += "".concat(date.split(seperator)[index]).concat(seperator);
    }
  }

  if (date.split(seperator)[2].length < 2) {
    newDate += "0".concat(date.split(seperator)[2]);
  } else {
    newDate += date.split(seperator)[2];
  }

  return newDate;
};
/**
 * Format date into a string in the form YYYY{seperator}MM{seperator}DD
 * @public
 * @static
 * @param {Date | DatePlus} date - date object to format
 * @param {string} seperator - string to seperate date values with
 * @returns {string} formatted date
 */


DatePlus.formatDate = function (date) {
  var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
  var month = date.getMonth().toString(),
      day = date.getDate().toString(),
      year = date.getFullYear().toString();
  return [year, month, day].join(seperator);
};
/* eslint-disable max-len */

/**
 * Converts numerical day of week into word form (e.g 0 => "Sunday")
 * @public
 * @static
 * @param {number} numerical - numerical day of week, 0 indexed (0-6)
 * @returns {string} stringed day of week
 */


DatePlus.getWordDay = function (numerical) {
  return DatePlus._daysReference[numerical];
};
/**
 * Converts numerical month into word form (e.g 0 => "January")
 * @public
 * @static
 * @param {number} numerical - numerical day of week, 0 indexed (0-11)
 * @returns {string} stringed worded month
 */


DatePlus.getWordMonth = function (numerical) {
  return DatePlus._monthsReference[numerical];
};
