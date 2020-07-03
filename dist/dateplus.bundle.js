"use strict";

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (e) {
  var t = {};

  function r(s) {
    if (t[s]) return t[s].exports;
    var n = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, s) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: s
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var s = Object.create(null);
    if (r.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      r.d(s, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return s;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 0);
}([function (e, t, r) {
  "use strict";

  var s = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = s(r(1));

  var o = /*#__PURE__*/function (_n$default) {
    _inherits(o, _n$default);

    var _super = _createSuper(o);

    function o() {
      var _this;

      _classCallCheck(this, o);

      _this = _super.apply(this, arguments), _this.addZeros = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
        return o.addZeros(_this.formatDate(), e);
      }, _this.formatDate = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
        return o.formatDate(_assertThisInitialized(_this), e);
      }, _this.getWordDay = function () {
        return o._daysReference[_this.getDay()];
      }, _this.getWordMonth = function () {
        return o._monthsReference[_this.getMonth()];
      };
      return _this;
    }

    return o;
  }(n["default"]);

  t["default"] = o, o._daysReference = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }, o._keysReference = {
    y: "year",
    m: "month",
    d: "day"
  }, o._monthsReference = {
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
  }, o.addZeros = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var r = "";

    for (var _s = 0; _s < 2; _s++) {
      e.split(t)[_s].length < 2 ? r += "0".concat(e.split(t)[_s]).concat(t) : r += "".concat(e.split(t)[_s]).concat(t);
    }

    return e.split(t)[2].length < 2 ? r += "0" + e.split(t)[2] : r += e.split(t)[2], r;
  }, o.formatDate = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var r = e.getMonth().toString(),
        s = e.getDate().toString();
    return [e.getFullYear().toString(), r, s].join(t);
  }, o.getDateValues = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "y:m:d";
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "auto";
    var s = "/";

    if ("auto" === r) {
      var _iterator = _createForOfIteratorHelper(e),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t = _step.value;

          if (isNaN(Number(_t))) {
            s = _t;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else s = r;

    var n = e.split(s),
        u = t.split(":"),
        a = {};

    for (var _e = 0; _e < 3; _e++) {
      var _t2 = o._keysReference[u[_e]];
      a[_t2] = Number(n[_e]), console.log(_t2, n[_e]);
    }

    return a;
  }, o.getWordDay = function (e) {
    return o._daysReference[e];
  }, o.getWordMonth = function (e) {
    return o._monthsReference[e];
  };
}, function (e, t, r) {
  "use strict";

  var s = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  /**
   * DatePlus
   * A simple program to assist with date manipulation
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.1.0
   * @exports Elapse
   * @file defines Elapse class for elapsed
   */

  var n = s(r(2));

  var o = /*#__PURE__*/function (_n$default2) {
    _inherits(o, _n$default2);

    var _super2 = _createSuper(o);

    function o() {
      var _this2;

      _classCallCheck(this, o);

      _this2 = _super2.apply(this, arguments), _this2.getElapsedDays = function (e) {
        return Math.round(Math.abs((_this2.getTime() - e.getTime()) / o._oneDay));
      };
      return _this2;
    }

    return o;
  }(n["default"]);

  t["default"] = o, o._oneDay = 864e5, o.getElapsedDays = function (e, t) {
    return Math.round(Math.abs((e.getTime() - t.getTime()) / o._oneDay));
  };
}, function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var s = /*#__PURE__*/function (_Date) {
    _inherits(s, _Date);

    var _super3 = _createSuper(s);

    function s() {
      _classCallCheck(this, s);

      return _super3.apply(this, arguments);
    }

    return s;
  }( /*#__PURE__*/_wrapNativeSuper(Date));

  t["default"] = s, s.msToSecs = function (e) {
    return {
      ms: e % 1e3,
      seconds: (e - e % 1e3) / 1e3
    };
  }, s.msToMins = function (e) {
    var t = e % 1e3 % 1e3,
        r = (e - e % 1e3) / 1e3 % 60;
    return {
      ms: t,
      seconds: r,
      minutes: (e - 1e3 * r - t) / 6e4
    };
  }, s.msToHrs = function (e) {
    var t = e % 1e3 % 1e3,
        r = (e - e % 1e3) / 1e3 % 60,
        s = (e - 1e3 * r - t) / 6e4 % 60;
    return {
      ms: t,
      seconds: r,
      minutes: s,
      hours: (e - 1e3 * s * 60 - 1e3 * r - t) / 36e5
    };
  }, s.msToDays = function (e) {
    var t = e % 1e3 % 1e3,
        r = (e - e % 1e3) / 1e3 % 60,
        s = (e - 1e3 * r - t) / 6e4 % 60,
        n = (e - 1e3 * s * 60 - 1e3 * r - t) / 36e5 % 24;
    return {
      ms: t,
      seconds: r,
      minutes: s,
      hours: n,
      days: (e - 1e3 * n * 60 * 60 - 1e3 * s * 60 - 1e3 * r - t) / 864e5
    };
  }, s.secsToMs = function (e) {
    return 1e3 * e;
  }, s.secsToMins = function (e) {
    return s.msToMins(s.secsToMs(e));
  };
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBQyxNQUFJLENBQUosR0FBTSxFQUFOLEdBQVMsRUFBWCxHQUFjLE1BQUksQ0FBSixHQUFNLEVBQXBCLEdBQXVCLE1BQUksQ0FBM0IsR0FBNkIsQ0FBOUIsSUFBaUM7QUFBeEUsS0FBTjtBQUFxRixHQUF4ZSxFQUF5ZSxDQUFDLENBQUMsUUFBRixHQUFXLFVBQUEsQ0FBQztBQUFBLFdBQUUsTUFBSSxDQUFOO0FBQUEsR0FBcmYsRUFBNmYsQ0FBQyxDQUFDLFVBQUYsR0FBYSxVQUFBLENBQUM7QUFBQSxXQUFFLENBQUMsQ0FBQyxRQUFGLENBQVcsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFYLENBQVgsQ0FBRjtBQUFBLEdBQTNnQjtBQUF1aUIsQ0FYUyxDQUFyNUIsQ0FBZiIsImZpbGUiOiJkYXRlcGx1cy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiByKHMpe2lmKHRbc10pcmV0dXJuIHRbc10uZXhwb3J0czt2YXIgbj10W3NdPXtpOnMsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtzXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyxyKSxuLmw9ITAsbi5leHBvcnRzfXJldHVybiByLm09ZSxyLmM9dCxyLmQ9ZnVuY3Rpb24oZSx0LHMpe3IubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpzfSl9LHIucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHM9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIocyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHMsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBuIGluIGUpci5kKHMsbixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG4pKTtyZXR1cm4gc30sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIlwiLHIoci5zPTApfShbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBzPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG49cyhyKDEpKTtjbGFzcyBvIGV4dGVuZHMgbi5kZWZhdWx0e2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLmFkZFplcm9zPShlPVwiL1wiKT0+by5hZGRaZXJvcyh0aGlzLmZvcm1hdERhdGUoKSxlKSx0aGlzLmZvcm1hdERhdGU9KGU9XCIvXCIpPT5vLmZvcm1hdERhdGUodGhpcyxlKSx0aGlzLmdldFdvcmREYXk9KCk9Pm8uX2RheXNSZWZlcmVuY2VbdGhpcy5nZXREYXkoKV0sdGhpcy5nZXRXb3JkTW9udGg9KCk9Pm8uX21vbnRoc1JlZmVyZW5jZVt0aGlzLmdldE1vbnRoKCldfX10LmRlZmF1bHQ9byxvLl9kYXlzUmVmZXJlbmNlPXswOlwiU3VuZGF5XCIsMTpcIk1vbmRheVwiLDI6XCJUdWVzZGF5XCIsMzpcIldlZG5lc2RheVwiLDQ6XCJUaHVyc2RheVwiLDU6XCJGcmlkYXlcIiw2OlwiU2F0dXJkYXlcIn0sby5fa2V5c1JlZmVyZW5jZT17eTpcInllYXJcIixtOlwibW9udGhcIixkOlwiZGF5XCJ9LG8uX21vbnRoc1JlZmVyZW5jZT17MDpcIkphbnVhcnlcIiwxOlwiRmVidXJhcnlcIiwyOlwiTWFyY2hcIiwzOlwiQXByaWxcIiw0OlwiTWF5XCIsNTpcIkp1bmVcIiw2OlwiSnVseVwiLDc6XCJBdWd1c3RcIiw4OlwiU2VwdGVtYmVyXCIsOTpcIk9jdG9iZXJcIiwxMDpcIk5vdmVtYmVyXCIsMTE6XCJEZWNlbWJlclwifSxvLmFkZFplcm9zPShlLHQ9XCIvXCIpPT57bGV0IHI9XCJcIjtmb3IobGV0IHM9MDtzPDI7cysrKWUuc3BsaXQodClbc10ubGVuZ3RoPDI/cis9YDAke2Uuc3BsaXQodClbc119JHt0fWA6cis9YCR7ZS5zcGxpdCh0KVtzXX0ke3R9YDtyZXR1cm4gZS5zcGxpdCh0KVsyXS5sZW5ndGg8Mj9yKz1cIjBcIitlLnNwbGl0KHQpWzJdOnIrPWUuc3BsaXQodClbMl0scn0sby5mb3JtYXREYXRlPShlLHQ9XCIvXCIpPT57Y29uc3Qgcj1lLmdldE1vbnRoKCkudG9TdHJpbmcoKSxzPWUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7cmV0dXJuW2UuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLHIsc10uam9pbih0KX0sby5nZXREYXRlVmFsdWVzPShlLHQ9XCJ5Om06ZFwiLHI9XCJhdXRvXCIpPT57bGV0IHM9XCIvXCI7aWYoXCJhdXRvXCI9PT1yKXtmb3IoY29uc3QgdCBvZiBlKWlmKGlzTmFOKE51bWJlcih0KSkpe3M9dDticmVha319ZWxzZSBzPXI7Y29uc3Qgbj1lLnNwbGl0KHMpLHU9dC5zcGxpdChcIjpcIiksYT17fTtmb3IobGV0IGU9MDtlPDM7ZSsrKXtjb25zdCB0PW8uX2tleXNSZWZlcmVuY2VbdVtlXV07YVt0XT1OdW1iZXIobltlXSksY29uc29sZS5sb2codCxuW2VdKX1yZXR1cm4gYX0sby5nZXRXb3JkRGF5PWU9Pm8uX2RheXNSZWZlcmVuY2VbZV0sby5nZXRXb3JkTW9udGg9ZT0+by5fbW9udGhzUmVmZXJlbmNlW2VdfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHM9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7XG4vKipcbiAqIERhdGVQbHVzXG4gKiBBIHNpbXBsZSBwcm9ncmFtIHRvIGFzc2lzdCB3aXRoIGRhdGUgbWFuaXB1bGF0aW9uXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBleHBvcnRzIEVsYXBzZVxuICogQGZpbGUgZGVmaW5lcyBFbGFwc2UgY2xhc3MgZm9yIGVsYXBzZWRcbiAqL1xuY29uc3Qgbj1zKHIoMikpO2NsYXNzIG8gZXh0ZW5kcyBuLmRlZmF1bHR7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMuZ2V0RWxhcHNlZERheXM9ZT0+TWF0aC5yb3VuZChNYXRoLmFicygodGhpcy5nZXRUaW1lKCktZS5nZXRUaW1lKCkpL28uX29uZURheSkpfX10LmRlZmF1bHQ9byxvLl9vbmVEYXk9ODY0ZTUsby5nZXRFbGFwc2VkRGF5cz0oZSx0KT0+TWF0aC5yb3VuZChNYXRoLmFicygoZS5nZXRUaW1lKCktdC5nZXRUaW1lKCkpL28uX29uZURheSkpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y2xhc3MgcyBleHRlbmRzIERhdGV7fXQuZGVmYXVsdD1zLHMubXNUb1NlY3M9ZT0+KHttczplJTFlMyxzZWNvbmRzOihlLWUlMWUzKS8xZTN9KSxzLm1zVG9NaW5zPWU9Pntjb25zdCB0PWUlMWUzJTFlMyxyPShlLWUlMWUzKS8xZTMlNjA7cmV0dXJue21zOnQsc2Vjb25kczpyLG1pbnV0ZXM6KGUtMWUzKnItdCkvNmU0fX0scy5tc1RvSHJzPWU9Pntjb25zdCB0PWUlMWUzJTFlMyxyPShlLWUlMWUzKS8xZTMlNjAscz0oZS0xZTMqci10KS82ZTQlNjA7cmV0dXJue21zOnQsc2Vjb25kczpyLG1pbnV0ZXM6cyxob3VyczooZS0xZTMqcyo2MC0xZTMqci10KS8zNmU1fX0scy5tc1RvRGF5cz1lPT57Y29uc3QgdD1lJTFlMyUxZTMscj0oZS1lJTFlMykvMWUzJTYwLHM9KGUtMWUzKnItdCkvNmU0JTYwLG49KGUtMWUzKnMqNjAtMWUzKnItdCkvMzZlNSUyNDtyZXR1cm57bXM6dCxzZWNvbmRzOnIsbWludXRlczpzLGhvdXJzOm4sZGF5czooZS0xZTMqbio2MCo2MC0xZTMqcyo2MC0xZTMqci10KS84NjRlNX19LHMuc2Vjc1RvTXM9ZT0+MWUzKmUscy5zZWNzVG9NaW5zPWU9PnMubXNUb01pbnMocy5zZWNzVG9NcyhlKSl9XSk7Il19