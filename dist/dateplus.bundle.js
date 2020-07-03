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
   * @version 1.1.1
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
   * @version 1.1.1
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
        return Math.round(Math.abs((_this2.getTime() - e.getTime()) / n._oneDay));
      };
      return _this2;
    }

    return n;
  }(r["default"]);

  s["default"] = n, n._oneDay = 864e5, n.getElapsedDays = function (e, s) {
    return Math.round(Math.abs((e.getTime() - s.getTime()) / n._oneDay));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQyxVQUFGLEdBQWEsVUFBQSxDQUFDO0FBQUEsV0FBRSxLQUFHLENBQUgsR0FBSyxFQUFQO0FBQUEsR0FBejZCLEVBQW03QixDQUFDLENBQUMsU0FBRixHQUFZLFVBQUEsQ0FBQztBQUFBLFdBQUUsS0FBRyxDQUFMO0FBQUEsR0FBaDhCO0FBQXU4QixDQXRCdlosQ0FBcjVCLENBQWYiLCJmaWxlIjoiZGF0ZXBsdXMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHM9e307ZnVuY3Rpb24gdChvKXtpZihzW29dKXJldHVybiBzW29dLmV4cG9ydHM7dmFyIHI9c1tvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsdCksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gdC5tPWUsdC5jPXMsdC5kPWZ1bmN0aW9uKGUscyxvKXt0Lm8oZSxzKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUscyx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSx0LnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sdC50PWZ1bmN0aW9uKGUscyl7aWYoMSZzJiYoZT10KGUpKSw4JnMpcmV0dXJuIGU7aWYoNCZzJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYodC5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnMmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgciBpbiBlKXQuZChvLHIsZnVuY3Rpb24ocyl7cmV0dXJuIGVbc119LmJpbmQobnVsbCxyKSk7cmV0dXJuIG99LHQubj1mdW5jdGlvbihlKXt2YXIgcz1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gdC5kKHMsXCJhXCIscyksc30sdC5vPWZ1bmN0aW9uKGUscyl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpfSx0LnA9XCJcIix0KHQucz0wKX0oW2Z1bmN0aW9uKGUscyx0KXtcInVzZSBzdHJpY3RcIjt2YXIgbz10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkocyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCByPW8odCgxKSk7Y2xhc3MgbiBleHRlbmRzIHIuZGVmYXVsdHtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy5hZGRaZXJvcz0oZT1cIi9cIik9Pm4uYWRkWmVyb3ModGhpcy5mb3JtYXREYXRlKCksZSksdGhpcy5mb3JtYXREYXRlPShlPVwiL1wiKT0+bi5mb3JtYXREYXRlKHRoaXMsZSksdGhpcy5nZXRXb3JkRGF5PSgpPT5uLl9kYXlzUmVmZXJlbmNlW3RoaXMuZ2V0RGF5KCldLHRoaXMuZ2V0V29yZE1vbnRoPSgpPT5uLl9tb250aHNSZWZlcmVuY2VbdGhpcy5nZXRNb250aCgpXX19cy5kZWZhdWx0PW4sbi5fZGF5c1JlZmVyZW5jZT17MDpcIlN1bmRheVwiLDE6XCJNb25kYXlcIiwyOlwiVHVlc2RheVwiLDM6XCJXZWRuZXNkYXlcIiw0OlwiVGh1cnNkYXlcIiw1OlwiRnJpZGF5XCIsNjpcIlNhdHVyZGF5XCJ9LG4uX2tleXNSZWZlcmVuY2U9e3k6XCJ5ZWFyXCIsbTpcIm1vbnRoXCIsZDpcImRheVwifSxuLl9tb250aHNSZWZlcmVuY2U9ezA6XCJKYW51YXJ5XCIsMTpcIkZlYnVyYXJ5XCIsMjpcIk1hcmNoXCIsMzpcIkFwcmlsXCIsNDpcIk1heVwiLDU6XCJKdW5lXCIsNjpcIkp1bHlcIiw3OlwiQXVndXN0XCIsODpcIlNlcHRlbWJlclwiLDk6XCJPY3RvYmVyXCIsMTA6XCJOb3ZlbWJlclwiLDExOlwiRGVjZW1iZXJcIn0sbi5hZGRaZXJvcz0oZSxzPVwiL1wiKT0+e2xldCB0PVwiXCI7Zm9yKGxldCBvPTA7bzwyO28rKyllLnNwbGl0KHMpW29dLmxlbmd0aDwyP3QrPWAwJHtlLnNwbGl0KHMpW29dfSR7c31gOnQrPWAke2Uuc3BsaXQocylbb119JHtzfWA7cmV0dXJuIGUuc3BsaXQocylbMl0ubGVuZ3RoPDI/dCs9XCIwXCIrZS5zcGxpdChzKVsyXTp0Kz1lLnNwbGl0KHMpWzJdLHR9LG4uZm9ybWF0RGF0ZT0oZSxzPVwiL1wiKT0+e2NvbnN0IHQ9ZS5nZXRNb250aCgpLnRvU3RyaW5nKCksbz1lLmdldERhdGUoKS50b1N0cmluZygpO3JldHVybltlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSx0LG9dLmpvaW4ocyl9LG4uZ2V0RGF0ZVZhbHVlcz0oZSxzPVwieTptOmRcIix0PVwiYXV0b1wiKT0+e2xldCBvPVwiL1wiO2lmKFwiYXV0b1wiPT09dCl7Zm9yKGNvbnN0IHMgb2YgZSlpZihpc05hTihOdW1iZXIocykpKXtvPXM7YnJlYWt9fWVsc2Ugbz10O2NvbnN0IHI9ZS5zcGxpdChvKSx1PXMuc3BsaXQoXCI6XCIpLGE9e307Zm9yKGxldCBlPTA7ZTwzO2UrKyl7Y29uc3Qgcz1uLl9rZXlzUmVmZXJlbmNlW3VbZV1dO2Fbc109TnVtYmVyKHJbZV0pLGNvbnNvbGUubG9nKHMscltlXSl9cmV0dXJuIGF9LG4uZ2V0V29yZERheT1lPT5uLl9kYXlzUmVmZXJlbmNlW2VdLG4uZ2V0V29yZE1vbnRoPWU9Pm4uX21vbnRoc1JlZmVyZW5jZVtlXX0sZnVuY3Rpb24oZSxzLHQpe1widXNlIHN0cmljdFwiO3ZhciBvPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xuLyoqXG4gKiBEYXRlUGx1c1xuICogQSBzaW1wbGUgcHJvZ3JhbSB0byBhc3Npc3Qgd2l0aCBkYXRlIG1hbmlwdWxhdGlvblxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4xXG4gKiBAZXhwb3J0cyBBbGlhc1xuICogQGZpbGUgZGVmaW5lcyBhbGlhcyBzdGF0aWMgbWV0aG9kcyBmcm9tIGNvbnZlcnNpb24udHMgd2l0aCBsb25nZXIgbmFtZXNcbiAqL1xuY29uc3Qgcj1vKHQoMikpO2NsYXNzIG4gZXh0ZW5kcyByLmRlZmF1bHR7fXMuZGVmYXVsdD1uLG4ubXNUb1NlY29uZHM9bi5tc1RvU2VjcyxuLm1zVG9NaW51dGVzPW4ubXNUb01pbnMsbi5tc1RvSG91cnM9bi5tc1RvSHJzLG4uc2Vjb25kc1RvTXM9bi5zZWNzVG9NcyxuLnNlY29uZHNUb01pbnV0ZXM9bi5zZWNzVG9NaW5zLG4uc2Vjb25kc1RvSG91cnM9bi5zZWNzVG9IcnMsbi5zZWNvbmRzVG9EYXlzPW4uc2Vjc1RvRGF5cyxuLm1pbnV0ZXNUb01zPW4ubWluc1RvTXMsbi5taW51dGVzVG9TZWNvbmRzPW4ubWluc1RvU2VjcyxuLm1pbnV0ZXNUb0hvdXJzPW4ubWluc1RvSHJzLG4ubWludXRlc1RvRGF5cz1uLm1pbnNUb0RheXMsbi5ob3Vyc1RvTXM9bi5ocnNUb01zLG4uaG91cnNUb1NlY29uZHM9bi5ocnNUb1NlY3Msbi5ob3Vyc1RvTWludXRlcz1uLmhyc1RvTWlucyxuLmhvdXJzVG9EYXlzPW4uaHJzVG9EYXlzLG4uZGF5c1RvU2Vjb25kcz1uLmRheXNUb1NlY3Msbi5kYXlzVG9NaW51dGVzPW4uZGF5c1RvTWlucyxuLmRheXNUb0hvdXJzPW4uZGF5c1RvSHJzfSxmdW5jdGlvbihlLHMsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7XG4vKipcbiAqIERhdGVQbHVzXG4gKiBBIHNpbXBsZSBwcm9ncmFtIHRvIGFzc2lzdCB3aXRoIGRhdGUgbWFuaXB1bGF0aW9uXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjFcbiAqIEBleHBvcnRzIEVsYXBzZVxuICogQGZpbGUgZGVmaW5lcyBFbGFwc2UgY2xhc3MgZm9yIGVsYXBzZWRcbiAqL1xuY29uc3Qgcj1vKHQoMykpO2NsYXNzIG4gZXh0ZW5kcyByLmRlZmF1bHR7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMuZ2V0RWxhcHNlZERheXM9ZT0+TWF0aC5yb3VuZChNYXRoLmFicygodGhpcy5nZXRUaW1lKCktZS5nZXRUaW1lKCkpL24uX29uZURheSkpfX1zLmRlZmF1bHQ9bixuLl9vbmVEYXk9ODY0ZTUsbi5nZXRFbGFwc2VkRGF5cz0oZSxzKT0+TWF0aC5yb3VuZChNYXRoLmFicygoZS5nZXRUaW1lKCktcy5nZXRUaW1lKCkpL24uX29uZURheSkpfSxmdW5jdGlvbihlLHMsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y2xhc3MgbyBleHRlbmRzIERhdGV7fXMuZGVmYXVsdD1vLG8ubXNUb1NlY3M9ZT0+KHttczplJTFlMyxzZWNvbmRzOihlLWUlMWUzKS8xZTN9KSxvLm1zVG9NaW5zPWU9Pntjb25zdCBzPWUlMWUzJTFlMyx0PShlLWUlMWUzKS8xZTMlNjA7cmV0dXJue21zOnMsc2Vjb25kczp0LG1pbnV0ZXM6KGUtMWUzKnQtcykvNmU0fX0sby5tc1RvSHJzPWU9Pntjb25zdCBzPWUlMWUzJTFlMyx0PShlLWUlMWUzKS8xZTMlNjAsbz0oZS0xZTMqdC1zKS82ZTQlNjA7cmV0dXJue21zOnMsc2Vjb25kczp0LG1pbnV0ZXM6byxob3VyczooZS0xZTMqbyo2MC0xZTMqdC1zKS8zNmU1fX0sby5tc1RvRGF5cz1lPT57Y29uc3Qgcz1lJTFlMyUxZTMsdD0oZS1lJTFlMykvMWUzJTYwLG89KGUtMWUzKnQtcykvNmU0JTYwLHI9KGUtMWUzKm8qNjAtMWUzKnQtcykvMzZlNSUyNDtyZXR1cm57bXM6cyxzZWNvbmRzOnQsbWludXRlczpvLGhvdXJzOnIsZGF5czooZS0xZTMqcio2MCo2MC0xZTMqbyo2MC0xZTMqdC1zKS84NjRlNX19LG8uc2Vjc1RvTXM9ZT0+MWUzKmUsby5zZWNzVG9NaW5zPWU9Pm8ubXNUb01pbnMoby5zZWNzVG9NcyhlKSksby5zZWNzVG9IcnM9ZT0+by5tc1RvSHJzKG8uc2Vjc1RvTXMoZSkpLG8uc2Vjc1RvRGF5cz1lPT5vLm1zVG9EYXlzKG8uc2Vjc1RvTXMoZSkpLG8ubWluc1RvTXM9ZT0+NjAqZSoxZTMsby5taW5zVG9TZWNzPWU9PjYwKmUsby5taW5zVG9IcnM9ZT0+by5tc1RvSHJzKG8ubWluc1RvTXMoZSkpLG8ubWluc1RvRGF5cz1lPT5vLm1zVG9EYXlzKG8ubWluc1RvTXMoZSkpLG8uaHJzVG9Ncz1lPT42MCplKjYwKjFlMyxvLmhyc1RvU2Vjcz1lPT42MCplKjYwLG8uaHJzVG9NaW5zPWU9PjYwKmUsby5ocnNUb0RheXM9ZT0+by5tc1RvRGF5cyhvLmhyc1RvTXMoZSkpLG8uZGF5c1RvTXM9ZT0+MjQqZSo2MCo2MCoxZTMsby5kYXlzVG9TZWNzPWU9PjI0KmUqNjAqNjAsby5kYXlzVG9NaW5zPWU9PjI0KmUqNjAsby5kYXlzVG9IcnM9ZT0+MjQqZX1dKTsiXX0=