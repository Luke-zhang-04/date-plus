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

var conversions_1 = __importDefault(require("./conversions"));

var hrsPerDay = 24,
    minsPerHr = 60,
    secsPerMin = 60,
    msPerSec = 1000;
/**
 * Elapse class and namespace
 * @classdesc A class and namespace program to find elapsed times
 * @class
 * @namespace
 */

var Elapse = /*#__PURE__*/function (_conversions_1$defaul) {
  _inherits(Elapse, _conversions_1$defaul);

  var _super = _createSuper(Elapse);

  function Elapse() {
    var _this;

    _classCallCheck(this, Elapse);

    _this = _super.apply(this, arguments);
    /**
     * Calculates number of elapsed days between instantiated date and dae
     * @public
     * @instance
     * @param {Date | DatePlus} date - ending date object to calculate
     * @returns {number} - number of elapsed days
     */

    _this.getElapsedDays = function (date) {
      return Math.round(Math.abs((_this.getTime() - date.getTime()) / Elapse._oneDay));
    };

    return _this;
  }

  return Elapse;
}(conversions_1["default"]);

exports["default"] = Elapse;
/**
 * Gets milliseconds per day
 * @private
 * @static
 * @type {number}
 */

Elapse._oneDay = hrsPerDay * minsPerHr * secsPerMin * msPerSec;
/**
 * Calculates number of elapsed days between date1 and date2
 * @public
 * @static
 * @param {Date | DatePlus} date1 - starting date object to calculate
 * @param {Date | DatePlus} date2 - ending date object to calculate
 * @returns {number} - number of elapsed days
 */

Elapse.getElapsedDays = function (date1, date2) {
  return Math.round(Math.abs((date1.getTime() - date2.getTime()) / Elapse._oneDay));
};