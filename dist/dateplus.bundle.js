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

  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
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
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
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

  var n = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(r(1));

  var s = /*#__PURE__*/function (_o$default) {
    _inherits(s, _o$default);

    var _super = _createSuper(s);

    function s() {
      var _this;

      _classCallCheck(this, s);

      _this = _super.apply(this, arguments), _this.addZeros = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
        return s.addZeros(_this.formatDate(), e);
      }, _this.formatDate = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
        return s.formatDate(_assertThisInitialized(_this), e);
      }, _this.getWordDay = function () {
        return s._daysReference[_this.getDay()];
      }, _this.getWordMonth = function () {
        return s._monthsReference[_this.getMonth()];
      };
      return _this;
    }

    return s;
  }(o["default"]);

  t["default"] = s, s._daysReference = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }, s._keysReference = {
    y: "year",
    m: "month",
    d: "day"
  }, s._monthsReference = {
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
  }, s.addZeros = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var r = "";

    for (var _n = 0; _n < 2; _n++) {
      e.split(t)[_n].length < 2 ? r += "0".concat(e.split(t)[_n]).concat(t) : r += "".concat(e.split(t)[_n]).concat(t);
    }

    return e.split(t)[2].length < 2 ? r += "0" + e.split(t)[2] : r += e.split(t)[2], r;
  }, s.formatDate = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var r = e.getMonth().toString(),
        n = e.getDate().toString();
    return [e.getFullYear().toString(), r, n].join(t);
  }, s.getDateValues = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "y:m:d";
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "auto";
    var n = "/";

    if ("auto" === r) {
      var _iterator = _createForOfIteratorHelper(e),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t = _step.value;

          if (isNaN(Number(_t))) {
            n = _t;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else n = r;

    var o = e.split(n),
        u = t.split(":"),
        a = {};

    for (var _e = 0; _e < 3; _e++) {
      var _t2 = s._keysReference[u[_e]];
      a[_t2] = Number(o[_e]), console.log(_t2, o[_e]);
    }

    return a;
  }, s.getWordDay = function (e) {
    return s._daysReference[e];
  }, s.getWordMonth = function (e) {
    return s._monthsReference[e];
  };
}, function (e, t, r) {
  "use strict";

  var n = this && this.__importDefault || function (e) {
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

  var o = n(r(2));

  var s = /*#__PURE__*/function (_o$default2) {
    _inherits(s, _o$default2);

    var _super2 = _createSuper(s);

    function s() {
      var _this2;

      _classCallCheck(this, s);

      _this2 = _super2.apply(this, arguments), _this2.getElapsedDays = function (e) {
        return Math.round(Math.abs((_this2.getTime() - e.getTime()) / s._oneDay));
      };
      return _this2;
    }

    return s;
  }(o["default"]);

  t["default"] = s, s._oneDay = 864e5, s.getElapsedDays = function (e, t) {
    return Math.round(Math.abs((e.getTime() - t.getTime()) / s._oneDay));
  };
}, function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var n = /*#__PURE__*/function (_Date) {
    _inherits(n, _Date);

    var _super3 = _createSuper(n);

    function n() {
      _classCallCheck(this, n);

      return _super3.apply(this, arguments);
    }

    return n;
  }( /*#__PURE__*/_wrapNativeSuper(Date));

  t["default"] = n, n.msToSeconds = function (e) {
    return {
      ms: e % 1e3,
      seconds: (e - e % 1e3) / 1e3
    };
  }, n.msToMinutes = function (e) {
    var t = e % 1e3 % 1e3,
        r = (e - e % 1e3) / 1e3 % 60;
    return {
      ms: t,
      seconds: r,
      minutes: (e - 1e3 * r - t) / 6e4
    };
  }, n.msToHours = function (e) {
    var t = e % 1e3 % 1e3,
        r = (e - e % 1e3) / 1e3 % 60,
        n = (e - 1e3 * r - t) / 6e4 % 60;
    return {
      ms: t,
      seconds: r,
      minutes: n,
      hours: (e - 1e3 * n * 60 - 1e3 * r - t) / 36e5
    };
  };
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQUEsQ0FBQyxFQUFFO0FBQUMsUUFBTSxDQUFDLEdBQUMsQ0FBQyxHQUFDLEdBQUYsR0FBTSxHQUFkO0FBQUEsUUFBa0IsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxHQUFMLElBQVUsR0FBVixHQUFjLEVBQWxDO0FBQUEsUUFBcUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLE1BQUksQ0FBTixHQUFRLENBQVQsSUFBWSxHQUFaLEdBQWdCLEVBQXZEO0FBQTBELFdBQU07QUFBQyxNQUFBLEVBQUUsRUFBQyxDQUFKO0FBQU0sTUFBQSxPQUFPLEVBQUMsQ0FBZDtBQUFnQixNQUFBLE9BQU8sRUFBQyxDQUF4QjtBQUEwQixNQUFBLEtBQUssRUFBQyxDQUFDLENBQUMsR0FBQyxNQUFJLENBQUosR0FBTSxFQUFSLEdBQVcsTUFBSSxDQUFmLEdBQWlCLENBQWxCLElBQXFCO0FBQXJELEtBQU47QUFBaUUsR0FBbFQ7QUFBbVQsQ0FYNlAsQ0FBcjVCLENBQWYiLCJmaWxlIjoiZGF0ZXBsdXMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIG89dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsciksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKXIuZChuLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCJcIixyKHIucz0wKX0oW2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCBvPW4ocigxKSk7Y2xhc3MgcyBleHRlbmRzIG8uZGVmYXVsdHtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy5hZGRaZXJvcz0oZT1cIi9cIik9PnMuYWRkWmVyb3ModGhpcy5mb3JtYXREYXRlKCksZSksdGhpcy5mb3JtYXREYXRlPShlPVwiL1wiKT0+cy5mb3JtYXREYXRlKHRoaXMsZSksdGhpcy5nZXRXb3JkRGF5PSgpPT5zLl9kYXlzUmVmZXJlbmNlW3RoaXMuZ2V0RGF5KCldLHRoaXMuZ2V0V29yZE1vbnRoPSgpPT5zLl9tb250aHNSZWZlcmVuY2VbdGhpcy5nZXRNb250aCgpXX19dC5kZWZhdWx0PXMscy5fZGF5c1JlZmVyZW5jZT17MDpcIlN1bmRheVwiLDE6XCJNb25kYXlcIiwyOlwiVHVlc2RheVwiLDM6XCJXZWRuZXNkYXlcIiw0OlwiVGh1cnNkYXlcIiw1OlwiRnJpZGF5XCIsNjpcIlNhdHVyZGF5XCJ9LHMuX2tleXNSZWZlcmVuY2U9e3k6XCJ5ZWFyXCIsbTpcIm1vbnRoXCIsZDpcImRheVwifSxzLl9tb250aHNSZWZlcmVuY2U9ezA6XCJKYW51YXJ5XCIsMTpcIkZlYnVyYXJ5XCIsMjpcIk1hcmNoXCIsMzpcIkFwcmlsXCIsNDpcIk1heVwiLDU6XCJKdW5lXCIsNjpcIkp1bHlcIiw3OlwiQXVndXN0XCIsODpcIlNlcHRlbWJlclwiLDk6XCJPY3RvYmVyXCIsMTA6XCJOb3ZlbWJlclwiLDExOlwiRGVjZW1iZXJcIn0scy5hZGRaZXJvcz0oZSx0PVwiL1wiKT0+e2xldCByPVwiXCI7Zm9yKGxldCBuPTA7bjwyO24rKyllLnNwbGl0KHQpW25dLmxlbmd0aDwyP3IrPWAwJHtlLnNwbGl0KHQpW25dfSR7dH1gOnIrPWAke2Uuc3BsaXQodClbbl19JHt0fWA7cmV0dXJuIGUuc3BsaXQodClbMl0ubGVuZ3RoPDI/cis9XCIwXCIrZS5zcGxpdCh0KVsyXTpyKz1lLnNwbGl0KHQpWzJdLHJ9LHMuZm9ybWF0RGF0ZT0oZSx0PVwiL1wiKT0+e2NvbnN0IHI9ZS5nZXRNb250aCgpLnRvU3RyaW5nKCksbj1lLmdldERhdGUoKS50b1N0cmluZygpO3JldHVybltlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSxyLG5dLmpvaW4odCl9LHMuZ2V0RGF0ZVZhbHVlcz0oZSx0PVwieTptOmRcIixyPVwiYXV0b1wiKT0+e2xldCBuPVwiL1wiO2lmKFwiYXV0b1wiPT09cil7Zm9yKGNvbnN0IHQgb2YgZSlpZihpc05hTihOdW1iZXIodCkpKXtuPXQ7YnJlYWt9fWVsc2Ugbj1yO2NvbnN0IG89ZS5zcGxpdChuKSx1PXQuc3BsaXQoXCI6XCIpLGE9e307Zm9yKGxldCBlPTA7ZTwzO2UrKyl7Y29uc3QgdD1zLl9rZXlzUmVmZXJlbmNlW3VbZV1dO2FbdF09TnVtYmVyKG9bZV0pLGNvbnNvbGUubG9nKHQsb1tlXSl9cmV0dXJuIGF9LHMuZ2V0V29yZERheT1lPT5zLl9kYXlzUmVmZXJlbmNlW2VdLHMuZ2V0V29yZE1vbnRoPWU9PnMuX21vbnRoc1JlZmVyZW5jZVtlXX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xuLyoqXG4gKiBEYXRlUGx1c1xuICogQSBzaW1wbGUgcHJvZ3JhbSB0byBhc3Npc3Qgd2l0aCBkYXRlIG1hbmlwdWxhdGlvblxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAZXhwb3J0cyBFbGFwc2VcbiAqIEBmaWxlIGRlZmluZXMgRWxhcHNlIGNsYXNzIGZvciBlbGFwc2VkXG4gKi9cbmNvbnN0IG89bihyKDIpKTtjbGFzcyBzIGV4dGVuZHMgby5kZWZhdWx0e2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLmdldEVsYXBzZWREYXlzPWU9Pk1hdGgucm91bmQoTWF0aC5hYnMoKHRoaXMuZ2V0VGltZSgpLWUuZ2V0VGltZSgpKS9zLl9vbmVEYXkpKX19dC5kZWZhdWx0PXMscy5fb25lRGF5PTg2NGU1LHMuZ2V0RWxhcHNlZERheXM9KGUsdCk9Pk1hdGgucm91bmQoTWF0aC5hYnMoKGUuZ2V0VGltZSgpLXQuZ2V0VGltZSgpKS9zLl9vbmVEYXkpKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NsYXNzIG4gZXh0ZW5kcyBEYXRle310LmRlZmF1bHQ9bixuLm1zVG9TZWNvbmRzPWU9Pih7bXM6ZSUxZTMsc2Vjb25kczooZS1lJTFlMykvMWUzfSksbi5tc1RvTWludXRlcz1lPT57Y29uc3QgdD1lJTFlMyUxZTMscj0oZS1lJTFlMykvMWUzJTYwO3JldHVybnttczp0LHNlY29uZHM6cixtaW51dGVzOihlLTFlMypyLXQpLzZlNH19LG4ubXNUb0hvdXJzPWU9Pntjb25zdCB0PWUlMWUzJTFlMyxyPShlLWUlMWUzKS8xZTMlNjAsbj0oZS0xZTMqci10KS82ZTQlNjA7cmV0dXJue21zOnQsc2Vjb25kczpyLG1pbnV0ZXM6bixob3VyczooZS0xZTMqbio2MC0xZTMqci10KS8zNmU1fX19XSk7Il19