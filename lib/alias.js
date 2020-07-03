"use strict";

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
/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.1
 * @exports Alias
 * @file defines alias static methods from conversion.ts with longer names
 */

var elapse_1 = __importDefault(require("./elapse"));

var Alias = /*#__PURE__*/function (_elapse_1$default) {
  _inherits(Alias, _elapse_1$default);

  var _super = _createSuper(Alias);

  function Alias() {
    _classCallCheck(this, Alias);

    return _super.apply(this, arguments);
  }

  return Alias;
}(elapse_1["default"]);

exports["default"] = Alias;
/**
 * Converts milliseconds to seconds with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with seconds and milliseconds
 */

Alias.msToSeconds = Alias.msToSecs;
/**
 * Converts milliseconds to minutes with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
 */

Alias.msToMinutes = Alias.msToMins;
/**
 * Converts milliseconds to hours with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
 */

Alias.msToHours = Alias.msToHrs;
/**
 * Converts seconds to milliseconds
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {number} converted milliseconds
 */

Alias.secondsToMs = Alias.secsToMs;
/**
 * Converts seconds to minutes with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted minutes
 */

Alias.secondsToMinutes = Alias.secsToMins;
/**
 * Converts seconds to hours with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted hours
 */

Alias.secondsToHours = Alias.secsToHrs;
/**
 * Converts seconds to days with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted days
 */

Alias.secondsToDays = Alias.secsToDays;
/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted milliseconds
 */

Alias.minutesToMs = Alias.minsToMs;
/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted seconds
 */

Alias.minutesToSeconds = Alias.minsToSecs;
/**
 * Converts minutes to hours with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted hours
 */

Alias.minutesToHours = Alias.minsToHrs;
/**
 * Converts minutes to days with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted days
 */

Alias.minutesToDays = Alias.minsToDays;
/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted milliseconds
 */

Alias.hoursToMs = Alias.hrsToMs;
/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted seconds
 */

Alias.hoursToSeconds = Alias.hrsToSecs;
/**
 * Converts hours to minutes
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted minutes
 */

Alias.hoursToMinutes = Alias.hrsToMins;
/**
 * Converts hours to days with remainders
 * @public
 * @static
 * @param {number} hrs - hours to convert
 * @returns {Object.<string, number>} converted days
 */

Alias.hoursToDays = Alias.hrsToDays;
/**
 * Converts days to seconds
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted seconds
 */

Alias.daysToSeconds = Alias.daysToSecs;
/**
 * Converts days to minutes
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted minutes
 */

Alias.daysToMinutes = Alias.daysToMins;
/**
 * Converts days to hours
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted hours
 */

Alias.daysToHours = Alias.daysToHrs;