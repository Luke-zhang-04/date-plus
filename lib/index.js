"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var elapse_1 = __importDefault(require("./elapse"));
/* eslint-enable no-magic-numbers */

/**
 * Dateplus class and namespace
 * @classdesc A class and namespace program to assist with date manipulation
 * @class
 * @namespace
 */


var DatePlus = /*#__PURE__*/function (_elapse_1$default) {
  _inherits(DatePlus, _elapse_1$default);

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
}(elapse_1["default"]);

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
/* eslint-disable id-length */

/**
 * Reference to months of a year, zero indexed
 * @private
 * @static
 * @type {Object.<number, string>}
 */

DatePlus._keysReference = {
  y: "year",
  m: "month",
  d: "day"
};
/* eslint-enable id-length */

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
/**
 * Gets date values and outputs an object
 * @public
 * @static
 * @param {string} date - date to extract values from, months zero indexed
 * @param {DateFormat}format - format of string date
 * @param {string} seperator - Seperator the date works with; leave auto for auto detection, limited to 1 char
 * @returns {interfaces.YearObj} object with all values
 */


DatePlus.getDateValues = function (date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "y:m:d";
  var seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "auto";
  var _seperator = "/";

  if (seperator === "auto") {
    var _iterator = _createForOfIteratorHelper(date),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var letter = _step.value;

        if (isNaN(Number(letter))) {
          _seperator = letter;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    _seperator = seperator;
  }

  var dateData = date.split(_seperator),
      dateFormat = format.split(":"),
      output = {};

  for (var index = 0; index < 3; index++) {
    var key = DatePlus._keysReference[dateFormat[index]];
    output[key] = Number(dateData[index]);
    console.log(key, dateData[index]);
  }

  return output;
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