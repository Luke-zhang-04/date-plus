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
  var s = {};

  function t(o) {
    if (s[o]) return s[o].exports;
    var r = s[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }

  return t.m = e, t.c = s, t.d = function (e, s, o) {
    t.o(e, s) || Object.defineProperty(e, s, {
      enumerable: !0,
      get: o
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, s) {
    if (1 & s && (e = t(e)), 8 & s) return e;
    if (4 & s && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & s && "string" != typeof e) for (var r in e) {
      t.d(o, r, function (s) {
        return e[s];
      }.bind(null, r));
    }
    return o;
  }, t.n = function (e) {
    var s = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(s, "a", s), s;
  }, t.o = function (e, s) {
    return Object.prototype.hasOwnProperty.call(e, s);
  }, t.p = "", t(t.s = 0);
}([function (e, s, t) {
  "use strict";

  var o = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var r = o(t(1));

  var n = /*#__PURE__*/function (_r$default) {
    _inherits(n, _r$default);

    var _super = _createSuper(n);

    function n() {
      var _this;

      _classCallCheck(this, n);

      _this = _super.apply(this, arguments), _this.addZeros = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
        return n.addZeros(_this.formatDate(), e);
      }, _this.formatDate = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
        return n.formatDate(_assertThisInitialized(_this), e);
      }, _this.getWordDay = function () {
        return n._daysReference[_this.getDay()];
      }, _this.getWordMonth = function () {
        return n._monthsReference[_this.getMonth()];
      };
      return _this;
    }

    return n;
  }(r["default"]);

  s["default"] = n, n._daysReference = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }, n._keysReference = {
    y: "year",
    m: "month",
    d: "day"
  }, n._monthsReference = {
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
  }, n.addZeros = function (e) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var t = "";

    for (var _o = 0; _o < 2; _o++) {
      e.split(s)[_o].length < 2 ? t += "0".concat(e.split(s)[_o]).concat(s) : t += "".concat(e.split(s)[_o]).concat(s);
    }

    return e.split(s)[2].length < 2 ? t += "0" + e.split(s)[2] : t += e.split(s)[2], t;
  }, n.formatDate = function (e) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var t = e.getMonth().toString(),
        o = e.getDate().toString();
    return [e.getFullYear().toString(), t, o].join(s);
  }, n.getDateValues = function (e) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "y:m:d";
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "auto";
    var o = "/";

    if ("auto" === t) {
      var _iterator = _createForOfIteratorHelper(e),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _s = _step.value;

          if (isNaN(Number(_s))) {
            o = _s;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else o = t;

    var r = e.split(o),
        u = s.split(":"),
        a = {};

    for (var _e = 0; _e < 3; _e++) {
      var _s2 = n._keysReference[u[_e]];
      a[_s2] = Number(r[_e]), console.log(_s2, r[_e]);
    }

    return a;
  }, n.getWordDay = function (e) {
    return n._daysReference[e];
  }, n.getWordMonth = function (e) {
    return n._monthsReference[e];
  };
}, function (e, s, t) {
  "use strict";

  var o = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  /**
   * DatePlus
   * A simple program to assist with date manipulation
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 2.0.0
   * @exports Alias
   * @file defines alias static methods from conversion.ts with longer names
   */

  var r = o(t(2));

  var n = /*#__PURE__*/function (_r$default2) {
    _inherits(n, _r$default2);

    var _super2 = _createSuper(n);

    function n() {
      _classCallCheck(this, n);

      return _super2.apply(this, arguments);
    }

    return n;
  }(r["default"]);

  s["default"] = n, n.msToSeconds = n.msToSecs, n.msToMinutes = n.msToMins, n.msToHours = n.msToHrs, n.secondsToMs = n.secsToMs, n.secondsToMinutes = n.secsToMins, n.secondsToHours = n.secsToHrs, n.secondsToDays = n.secsToDays, n.minutesToMs = n.minsToMs, n.minutesToSeconds = n.minsToSecs, n.minutesToHours = n.minsToHrs, n.minutesToDays = n.minsToDays, n.hoursToMs = n.hrsToMs, n.hoursToSeconds = n.hrsToSecs, n.hoursToMinutes = n.hrsToMins, n.hoursToDays = n.hrsToDays, n.daysToSeconds = n.daysToSecs, n.daysToMinutes = n.daysToMins, n.daysToHours = n.daysToHrs;
}, function (e, s, t) {
  "use strict";

  var o = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  /**
   * DatePlus
   * A simple program to assist with date manipulation
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 2.0.0
   * @exports Elapse
   * @file defines Elapse class for elapsed
   */

  var r = o(t(3));

  var n = /*#__PURE__*/function (_r$default3) {
    _inherits(n, _r$default3);

    var _super3 = _createSuper(n);

    function n() {
      var _this2;

      _classCallCheck(this, n);

      _this2 = _super3.apply(this, arguments), _this2.getElapsedDays = function (e) {
        return -1 * Math.round((_this2.getTime() - e.getTime()) / n._oneDay);
      };
      return _this2;
    }

    return n;
  }(r["default"]);

  s["default"] = n, n._oneDay = 864e5, n.getElapsedDays = function (e, s) {
    return -1 * Math.round((e.getTime() - s.getTime()) / n._oneDay);
  };
}, function (e, s, t) {
  "use strict";

  Object.defineProperty(s, "__esModule", {
    value: !0
  });

  var o = /*#__PURE__*/function (_Date) {
    _inherits(o, _Date);

    var _super4 = _createSuper(o);

    function o() {
      _classCallCheck(this, o);

      return _super4.apply(this, arguments);
    }

    return o;
  }( /*#__PURE__*/_wrapNativeSuper(Date));

  s["default"] = o, o.msToSecs = function (e) {
    return {
      ms: e % 1e3,
      seconds: (e - e % 1e3) / 1e3
    };
  }, o.msToMins = function (e) {
    var s = e % 1e3 % 1e3,
        t = (e - e % 1e3) / 1e3 % 60;
    return {
      ms: s,
      seconds: t,
      minutes: (e - 1e3 * t - s) / 6e4
    };
  }, o.msToHrs = function (e) {
    var s = e % 1e3 % 1e3,
        t = (e - e % 1e3) / 1e3 % 60,
        o = (e - 1e3 * t - s) / 6e4 % 60;
    return {
      ms: s,
      seconds: t,
      minutes: o,
      hours: (e - 1e3 * o * 60 - 1e3 * t - s) / 36e5
    };
  }, o.msToDays = function (e) {
    var s = e % 1e3 % 1e3,
        t = (e - e % 1e3) / 1e3 % 60,
        o = (e - 1e3 * t - s) / 6e4 % 60,
        r = (e - 1e3 * o * 60 - 1e3 * t - s) / 36e5 % 24;
    return {
      ms: s,
      seconds: t,
      minutes: o,
      hours: r,
      days: (e - 1e3 * r * 60 * 60 - 1e3 * o * 60 - 1e3 * t - s) / 864e5
    };
  }, o.secsToMs = function (e) {
    return 1e3 * e;
  }, o.secsToMins = function (e) {
    return o.msToMins(o.secsToMs(e));
  }, o.secsToHrs = function (e) {
    return o.msToHrs(o.secsToMs(e));
  }, o.secsToDays = function (e) {
    return o.msToDays(o.secsToMs(e));
  }, o.minsToMs = function (e) {
    return 60 * e * 1e3;
  }, o.minsToSecs = function (e) {
    return 60 * e;
  }, o.minsToHrs = function (e) {
    return o.msToHrs(o.minsToMs(e));
  }, o.minsToDays = function (e) {
    return o.msToDays(o.minsToMs(e));
  }, o.hrsToMs = function (e) {
    return 60 * e * 60 * 1e3;
  }, o.hrsToSecs = function (e) {
    return 60 * e * 60;
  }, o.hrsToMins = function (e) {
    return 60 * e;
  }, o.hrsToDays = function (e) {
    return o.msToDays(o.hrsToMs(e));
  }, o.daysToMs = function (e) {
    return 24 * e * 60 * 60 * 1e3;
  }, o.daysToSecs = function (e) {
    return 24 * e * 60 * 60;
  }, o.daysToMins = function (e) {
    return 24 * e * 60;
  }, o.daysToHrs = function (e) {
    return 24 * e;
  };
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQUEsQ0FBQztBQUFBLFdBQUUsS0FBRyxDQUFILEdBQUssRUFBUDtBQUFBLEdBQXo2QixFQUFtN0IsQ0FBQyxDQUFDLFNBQUYsR0FBWSxVQUFBLENBQUM7QUFBQSxXQUFFLEtBQUcsQ0FBTDtBQUFBLEdBQWg4QjtBQUF1OEIsQ0F0QnpZLENBQXI1QixDQUFmIiwiZmlsZSI6ImRhdGVwbHVzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciBzPXt9O2Z1bmN0aW9uIHQobyl7aWYoc1tvXSlyZXR1cm4gc1tvXS5leHBvcnRzO3ZhciByPXNbb109e2k6byxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW29dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLHQpLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIHQubT1lLHQuYz1zLHQuZD1mdW5jdGlvbihlLHMsbyl7dC5vKGUscyl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHMse2VudW1lcmFibGU6ITAsZ2V0Om99KX0sdC5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHQudD1mdW5jdGlvbihlLHMpe2lmKDEmcyYmKGU9dChlKSksOCZzKXJldHVybiBlO2lmKDQmcyYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbz1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHQucihvKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZzJiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIHIgaW4gZSl0LmQobyxyLGZ1bmN0aW9uKHMpe3JldHVybiBlW3NdfS5iaW5kKG51bGwscikpO3JldHVybiBvfSx0Lm49ZnVuY3Rpb24oZSl7dmFyIHM9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHQuZChzLFwiYVwiLHMpLHN9LHQubz1mdW5jdGlvbihlLHMpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKX0sdC5wPVwiXCIsdCh0LnM9MCl9KFtmdW5jdGlvbihlLHMsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgcj1vKHQoMSkpO2NsYXNzIG4gZXh0ZW5kcyByLmRlZmF1bHR7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMuYWRkWmVyb3M9KGU9XCIvXCIpPT5uLmFkZFplcm9zKHRoaXMuZm9ybWF0RGF0ZSgpLGUpLHRoaXMuZm9ybWF0RGF0ZT0oZT1cIi9cIik9Pm4uZm9ybWF0RGF0ZSh0aGlzLGUpLHRoaXMuZ2V0V29yZERheT0oKT0+bi5fZGF5c1JlZmVyZW5jZVt0aGlzLmdldERheSgpXSx0aGlzLmdldFdvcmRNb250aD0oKT0+bi5fbW9udGhzUmVmZXJlbmNlW3RoaXMuZ2V0TW9udGgoKV19fXMuZGVmYXVsdD1uLG4uX2RheXNSZWZlcmVuY2U9ezA6XCJTdW5kYXlcIiwxOlwiTW9uZGF5XCIsMjpcIlR1ZXNkYXlcIiwzOlwiV2VkbmVzZGF5XCIsNDpcIlRodXJzZGF5XCIsNTpcIkZyaWRheVwiLDY6XCJTYXR1cmRheVwifSxuLl9rZXlzUmVmZXJlbmNlPXt5OlwieWVhclwiLG06XCJtb250aFwiLGQ6XCJkYXlcIn0sbi5fbW9udGhzUmVmZXJlbmNlPXswOlwiSmFudWFyeVwiLDE6XCJGZWJ1cmFyeVwiLDI6XCJNYXJjaFwiLDM6XCJBcHJpbFwiLDQ6XCJNYXlcIiw1OlwiSnVuZVwiLDY6XCJKdWx5XCIsNzpcIkF1Z3VzdFwiLDg6XCJTZXB0ZW1iZXJcIiw5OlwiT2N0b2JlclwiLDEwOlwiTm92ZW1iZXJcIiwxMTpcIkRlY2VtYmVyXCJ9LG4uYWRkWmVyb3M9KGUscz1cIi9cIik9PntsZXQgdD1cIlwiO2ZvcihsZXQgbz0wO288MjtvKyspZS5zcGxpdChzKVtvXS5sZW5ndGg8Mj90Kz1gMCR7ZS5zcGxpdChzKVtvXX0ke3N9YDp0Kz1gJHtlLnNwbGl0KHMpW29dfSR7c31gO3JldHVybiBlLnNwbGl0KHMpWzJdLmxlbmd0aDwyP3QrPVwiMFwiK2Uuc3BsaXQocylbMl06dCs9ZS5zcGxpdChzKVsyXSx0fSxuLmZvcm1hdERhdGU9KGUscz1cIi9cIik9Pntjb25zdCB0PWUuZ2V0TW9udGgoKS50b1N0cmluZygpLG89ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtyZXR1cm5bZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksdCxvXS5qb2luKHMpfSxuLmdldERhdGVWYWx1ZXM9KGUscz1cInk6bTpkXCIsdD1cImF1dG9cIik9PntsZXQgbz1cIi9cIjtpZihcImF1dG9cIj09PXQpe2Zvcihjb25zdCBzIG9mIGUpaWYoaXNOYU4oTnVtYmVyKHMpKSl7bz1zO2JyZWFrfX1lbHNlIG89dDtjb25zdCByPWUuc3BsaXQobyksdT1zLnNwbGl0KFwiOlwiKSxhPXt9O2ZvcihsZXQgZT0wO2U8MztlKyspe2NvbnN0IHM9bi5fa2V5c1JlZmVyZW5jZVt1W2VdXTthW3NdPU51bWJlcihyW2VdKSxjb25zb2xlLmxvZyhzLHJbZV0pfXJldHVybiBhfSxuLmdldFdvcmREYXk9ZT0+bi5fZGF5c1JlZmVyZW5jZVtlXSxuLmdldFdvcmRNb250aD1lPT5uLl9tb250aHNSZWZlcmVuY2VbZV19LGZ1bmN0aW9uKGUscyx0KXtcInVzZSBzdHJpY3RcIjt2YXIgbz10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkocyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcbi8qKlxuICogRGF0ZVBsdXNcbiAqIEEgc2ltcGxlIHByb2dyYW0gdG8gYXNzaXN0IHdpdGggZGF0ZSBtYW5pcHVsYXRpb25cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMlxuICogQGV4cG9ydHMgQWxpYXNcbiAqIEBmaWxlIGRlZmluZXMgYWxpYXMgc3RhdGljIG1ldGhvZHMgZnJvbSBjb252ZXJzaW9uLnRzIHdpdGggbG9uZ2VyIG5hbWVzXG4gKi9cbmNvbnN0IHI9byh0KDIpKTtjbGFzcyBuIGV4dGVuZHMgci5kZWZhdWx0e31zLmRlZmF1bHQ9bixuLm1zVG9TZWNvbmRzPW4ubXNUb1NlY3Msbi5tc1RvTWludXRlcz1uLm1zVG9NaW5zLG4ubXNUb0hvdXJzPW4ubXNUb0hycyxuLnNlY29uZHNUb01zPW4uc2Vjc1RvTXMsbi5zZWNvbmRzVG9NaW51dGVzPW4uc2Vjc1RvTWlucyxuLnNlY29uZHNUb0hvdXJzPW4uc2Vjc1RvSHJzLG4uc2Vjb25kc1RvRGF5cz1uLnNlY3NUb0RheXMsbi5taW51dGVzVG9Ncz1uLm1pbnNUb01zLG4ubWludXRlc1RvU2Vjb25kcz1uLm1pbnNUb1NlY3Msbi5taW51dGVzVG9Ib3Vycz1uLm1pbnNUb0hycyxuLm1pbnV0ZXNUb0RheXM9bi5taW5zVG9EYXlzLG4uaG91cnNUb01zPW4uaHJzVG9NcyxuLmhvdXJzVG9TZWNvbmRzPW4uaHJzVG9TZWNzLG4uaG91cnNUb01pbnV0ZXM9bi5ocnNUb01pbnMsbi5ob3Vyc1RvRGF5cz1uLmhyc1RvRGF5cyxuLmRheXNUb1NlY29uZHM9bi5kYXlzVG9TZWNzLG4uZGF5c1RvTWludXRlcz1uLmRheXNUb01pbnMsbi5kYXlzVG9Ib3Vycz1uLmRheXNUb0hyc30sZnVuY3Rpb24oZSxzLHQpe1widXNlIHN0cmljdFwiO3ZhciBvPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xuLyoqXG4gKiBEYXRlUGx1c1xuICogQSBzaW1wbGUgcHJvZ3JhbSB0byBhc3Npc3Qgd2l0aCBkYXRlIG1hbmlwdWxhdGlvblxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4yXG4gKiBAZXhwb3J0cyBFbGFwc2VcbiAqIEBmaWxlIGRlZmluZXMgRWxhcHNlIGNsYXNzIGZvciBlbGFwc2VkXG4gKi9cbmNvbnN0IHI9byh0KDMpKTtjbGFzcyBuIGV4dGVuZHMgci5kZWZhdWx0e2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLmdldEVsYXBzZWREYXlzPWU9Pi0xKk1hdGgucm91bmQoKHRoaXMuZ2V0VGltZSgpLWUuZ2V0VGltZSgpKS9uLl9vbmVEYXkpfX1zLmRlZmF1bHQ9bixuLl9vbmVEYXk9ODY0ZTUsbi5nZXRFbGFwc2VkRGF5cz0oZSxzKT0+LTEqTWF0aC5yb3VuZCgoZS5nZXRUaW1lKCktcy5nZXRUaW1lKCkpL24uX29uZURheSl9LGZ1bmN0aW9uKGUscyx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkocyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjbGFzcyBvIGV4dGVuZHMgRGF0ZXt9cy5kZWZhdWx0PW8sby5tc1RvU2Vjcz1lPT4oe21zOmUlMWUzLHNlY29uZHM6KGUtZSUxZTMpLzFlM30pLG8ubXNUb01pbnM9ZT0+e2NvbnN0IHM9ZSUxZTMlMWUzLHQ9KGUtZSUxZTMpLzFlMyU2MDtyZXR1cm57bXM6cyxzZWNvbmRzOnQsbWludXRlczooZS0xZTMqdC1zKS82ZTR9fSxvLm1zVG9IcnM9ZT0+e2NvbnN0IHM9ZSUxZTMlMWUzLHQ9KGUtZSUxZTMpLzFlMyU2MCxvPShlLTFlMyp0LXMpLzZlNCU2MDtyZXR1cm57bXM6cyxzZWNvbmRzOnQsbWludXRlczpvLGhvdXJzOihlLTFlMypvKjYwLTFlMyp0LXMpLzM2ZTV9fSxvLm1zVG9EYXlzPWU9Pntjb25zdCBzPWUlMWUzJTFlMyx0PShlLWUlMWUzKS8xZTMlNjAsbz0oZS0xZTMqdC1zKS82ZTQlNjAscj0oZS0xZTMqbyo2MC0xZTMqdC1zKS8zNmU1JTI0O3JldHVybnttczpzLHNlY29uZHM6dCxtaW51dGVzOm8saG91cnM6cixkYXlzOihlLTFlMypyKjYwKjYwLTFlMypvKjYwLTFlMyp0LXMpLzg2NGU1fX0sby5zZWNzVG9Ncz1lPT4xZTMqZSxvLnNlY3NUb01pbnM9ZT0+by5tc1RvTWlucyhvLnNlY3NUb01zKGUpKSxvLnNlY3NUb0hycz1lPT5vLm1zVG9IcnMoby5zZWNzVG9NcyhlKSksby5zZWNzVG9EYXlzPWU9Pm8ubXNUb0RheXMoby5zZWNzVG9NcyhlKSksby5taW5zVG9Ncz1lPT42MCplKjFlMyxvLm1pbnNUb1NlY3M9ZT0+NjAqZSxvLm1pbnNUb0hycz1lPT5vLm1zVG9IcnMoby5taW5zVG9NcyhlKSksby5taW5zVG9EYXlzPWU9Pm8ubXNUb0RheXMoby5taW5zVG9NcyhlKSksby5ocnNUb01zPWU9PjYwKmUqNjAqMWUzLG8uaHJzVG9TZWNzPWU9PjYwKmUqNjAsby5ocnNUb01pbnM9ZT0+NjAqZSxvLmhyc1RvRGF5cz1lPT5vLm1zVG9EYXlzKG8uaHJzVG9NcyhlKSksby5kYXlzVG9Ncz1lPT4yNCplKjYwKjYwKjFlMyxvLmRheXNUb1NlY3M9ZT0+MjQqZSo2MCo2MCxvLmRheXNUb01pbnM9ZT0+MjQqZSo2MCxvLmRheXNUb0hycz1lPT4yNCplfV0pOyJdfQ==