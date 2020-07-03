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

  function s(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, s), o.l = !0, o.exports;
  }

  return s.m = e, s.c = t, s.d = function (e, t, r) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (s.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      s.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "", s(s.s = 0);
}([function (e, t, s) {
  "use strict";

  var r = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = r(s(1));

  var n = /*#__PURE__*/function (_o$default) {
    _inherits(n, _o$default);

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
  }(o["default"]);

  t["default"] = n, n._daysReference = {
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
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var s = "";

    for (var _r = 0; _r < 2; _r++) {
      e.split(t)[_r].length < 2 ? s += "0".concat(e.split(t)[_r]).concat(t) : s += "".concat(e.split(t)[_r]).concat(t);
    }

    return e.split(t)[2].length < 2 ? s += "0" + e.split(t)[2] : s += e.split(t)[2], s;
  }, n.formatDate = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var s = e.getMonth().toString(),
        r = e.getDate().toString();
    return [e.getFullYear().toString(), s, r].join(t);
  }, n.getDateValues = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "y:m:d";
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "auto";
    var r = "/";

    if ("auto" === s) {
      var _iterator = _createForOfIteratorHelper(e),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t = _step.value;

          if (isNaN(Number(_t))) {
            r = _t;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else r = s;

    var o = e.split(r),
        u = t.split(":"),
        a = {};

    for (var _e = 0; _e < 3; _e++) {
      var _t2 = n._keysReference[u[_e]];
      a[_t2] = Number(o[_e]), console.log(_t2, o[_e]);
    }

    return a;
  }, n.getWordDay = function (e) {
    return n._daysReference[e];
  }, n.getWordMonth = function (e) {
    return n._monthsReference[e];
  };
}, function (e, t, s) {
  "use strict";

  var r = this && this.__importDefault || function (e) {
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

  var o = r(s(2));

  var n = /*#__PURE__*/function (_o$default2) {
    _inherits(n, _o$default2);

    var _super2 = _createSuper(n);

    function n() {
      var _this2;

      _classCallCheck(this, n);

      _this2 = _super2.apply(this, arguments), _this2.getElapsedDays = function (e) {
        return Math.round(Math.abs((_this2.getTime() - e.getTime()) / n._oneDay));
      };
      return _this2;
    }

    return n;
  }(o["default"]);

  t["default"] = n, n._oneDay = 864e5, n.getElapsedDays = function (e, t) {
    return Math.round(Math.abs((e.getTime() - t.getTime()) / n._oneDay));
  };
}, function (e, t, s) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var r = /*#__PURE__*/function (_Date) {
    _inherits(r, _Date);

    var _super3 = _createSuper(r);

    function r() {
      _classCallCheck(this, r);

      return _super3.apply(this, arguments);
    }

    return r;
  }( /*#__PURE__*/_wrapNativeSuper(Date));

  t["default"] = r, r.msToSecs = function (e) {
    return {
      ms: e % 1e3,
      seconds: (e - e % 1e3) / 1e3
    };
  }, r.msToMins = function (e) {
    var t = e % 1e3 % 1e3,
        s = (e - e % 1e3) / 1e3 % 60;
    return {
      ms: t,
      seconds: s,
      minutes: (e - 1e3 * s - t) / 6e4
    };
  }, r.msToHrs = function (e) {
    var t = e % 1e3 % 1e3,
        s = (e - e % 1e3) / 1e3 % 60,
        r = (e - 1e3 * s - t) / 6e4 % 60;
    return {
      ms: t,
      seconds: s,
      minutes: r,
      hours: (e - 1e3 * r * 60 - 1e3 * s - t) / 36e5
    };
  }, r.msToDays = function (e) {
    var t = e % 1e3 % 1e3,
        s = (e - e % 1e3) / 1e3 % 60,
        r = (e - 1e3 * s - t) / 6e4 % 60,
        o = (e - 1e3 * r * 60 - 1e3 * s - t) / 36e5 % 24;
    return {
      ms: t,
      seconds: s,
      minutes: r,
      hours: o,
      days: (e - 1e3 * o * 60 * 60 - 1e3 * r * 60 - 1e3 * s - t) / 864e5
    };
  }, r.secsToMs = function (e) {
    return 1e3 * e;
  }, r.secsToMins = function (e) {
    return r.msToMins(r.secsToMs(e));
  }, r.secsToHrs = function (e) {
    return r.msToHrs(r.secsToMs(e));
  }, r.secsToDays = function (e) {
    return r.msToDays(r.secsToMs(e));
  }, r.minsToMs = function (e) {
    return 60 * e * 1e3;
  };
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVwbHVzLmJ1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQWUsVUFBUyxDQUFULEVBQVc7QUFBQyxNQUFJLENBQUMsR0FBQyxFQUFOOztBQUFTLFdBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLFFBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBSixFQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLE9BQVo7QUFBb0IsUUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLO0FBQUMsTUFBQSxDQUFDLEVBQUMsQ0FBSDtBQUFLLE1BQUEsQ0FBQyxFQUFDLENBQUMsQ0FBUjtBQUFVLE1BQUEsT0FBTyxFQUFDO0FBQWxCLEtBQVg7QUFBaUMsV0FBTyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssSUFBTCxDQUFVLENBQUMsQ0FBQyxPQUFaLEVBQW9CLENBQXBCLEVBQXNCLENBQUMsQ0FBQyxPQUF4QixFQUFnQyxDQUFoQyxHQUFtQyxDQUFDLENBQUMsQ0FBRixHQUFJLENBQUMsQ0FBeEMsRUFBMEMsQ0FBQyxDQUFDLE9BQW5EO0FBQTJEOztBQUFBLFNBQU8sQ0FBQyxDQUFDLENBQUYsR0FBSSxDQUFKLEVBQU0sQ0FBQyxDQUFDLENBQUYsR0FBSSxDQUFWLEVBQVksQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsSUFBQSxDQUFDLENBQUMsQ0FBRixDQUFJLENBQUosRUFBTSxDQUFOLEtBQVUsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsRUFBMEI7QUFBQyxNQUFBLFVBQVUsRUFBQyxDQUFDLENBQWI7QUFBZSxNQUFBLEdBQUcsRUFBQztBQUFuQixLQUExQixDQUFWO0FBQTJELEdBQTNGLEVBQTRGLENBQUMsQ0FBQyxDQUFGLEdBQUksVUFBUyxDQUFULEVBQVc7QUFBQyxtQkFBYSxPQUFPLE1BQXBCLElBQTRCLE1BQU0sQ0FBQyxXQUFuQyxJQUFnRCxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixNQUFNLENBQUMsV0FBL0IsRUFBMkM7QUFBQyxNQUFBLEtBQUssRUFBQztBQUFQLEtBQTNDLENBQWhELEVBQTZHLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUMsTUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLEtBQXJDLENBQTdHO0FBQThKLEdBQTFRLEVBQTJRLENBQUMsQ0FBQyxDQUFGLEdBQUksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBRyxJQUFFLENBQUYsS0FBTSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBVCxHQUFjLElBQUUsQ0FBbkIsRUFBcUIsT0FBTyxDQUFQO0FBQVMsUUFBRyxJQUFFLENBQUYsSUFBSyxvQkFBaUIsQ0FBakIsQ0FBTCxJQUF5QixDQUF6QixJQUE0QixDQUFDLENBQUMsVUFBakMsRUFBNEMsT0FBTyxDQUFQO0FBQVMsUUFBSSxDQUFDLEdBQUMsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLENBQU47QUFBMEIsUUFBRyxDQUFDLENBQUMsQ0FBRixDQUFJLENBQUosR0FBTyxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixTQUF4QixFQUFrQztBQUFDLE1BQUEsVUFBVSxFQUFDLENBQUMsQ0FBYjtBQUFlLE1BQUEsS0FBSyxFQUFDO0FBQXJCLEtBQWxDLENBQVAsRUFBa0UsSUFBRSxDQUFGLElBQUssWUFBVSxPQUFPLENBQTNGLEVBQTZGLEtBQUksSUFBSSxDQUFSLElBQWEsQ0FBYjtBQUFlLE1BQUEsQ0FBQyxDQUFDLENBQUYsQ0FBSSxDQUFKLEVBQU0sQ0FBTixFQUFRLFVBQVMsQ0FBVCxFQUFXO0FBQUMsZUFBTyxDQUFDLENBQUMsQ0FBRCxDQUFSO0FBQVksT0FBeEIsQ0FBeUIsSUFBekIsQ0FBOEIsSUFBOUIsRUFBbUMsQ0FBbkMsQ0FBUjtBQUFmO0FBQThELFdBQU8sQ0FBUDtBQUFTLEdBQTlpQixFQUEraUIsQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVztBQUFDLFFBQUksQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsVUFBTCxHQUFnQixZQUFVO0FBQUMsYUFBTyxDQUFDLFdBQVI7QUFBaUIsS0FBNUMsR0FBNkMsWUFBVTtBQUFDLGFBQU8sQ0FBUDtBQUFTLEtBQXZFO0FBQXdFLFdBQU8sQ0FBQyxDQUFDLENBQUYsQ0FBSSxDQUFKLEVBQU0sR0FBTixFQUFVLENBQVYsR0FBYSxDQUFwQjtBQUFzQixHQUE3cEIsRUFBOHBCLENBQUMsQ0FBQyxDQUFGLEdBQUksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsV0FBTyxNQUFNLENBQUMsU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxDQUFyQyxFQUF1QyxDQUF2QyxDQUFQO0FBQWlELEdBQWp1QixFQUFrdUIsQ0FBQyxDQUFDLENBQUYsR0FBSSxFQUF0dUIsRUFBeXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRixHQUFJLENBQUwsQ0FBanZCO0FBQXl2QixDQUFwNUIsQ0FBcTVCLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDOztBQUFhLE1BQUksQ0FBQyxHQUFDLFFBQU0sS0FBSyxlQUFYLElBQTRCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxDQUFDLElBQUUsQ0FBQyxDQUFDLFVBQUwsR0FBZ0IsQ0FBaEIsR0FBa0I7QUFBQyxpQkFBUTtBQUFULEtBQXpCO0FBQXFDLEdBQW5GOztBQUFvRixFQUFBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUMsSUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLEdBQXJDO0FBQWlELE1BQU0sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVQ7O0FBQW5KLE1BQXlLLENBQXpLO0FBQUE7O0FBQUE7O0FBQTZMLGlCQUFhO0FBQUE7O0FBQUE7O0FBQUMsaUNBQVMsU0FBVCxHQUFvQixNQUFLLFFBQUwsR0FBYztBQUFBLFlBQUMsQ0FBRCx1RUFBRyxHQUFIO0FBQUEsZUFBUyxDQUFDLENBQUMsUUFBRixDQUFXLE1BQUssVUFBTCxFQUFYLEVBQTZCLENBQTdCLENBQVQ7QUFBQSxPQUFsQyxFQUEyRSxNQUFLLFVBQUwsR0FBZ0I7QUFBQSxZQUFDLENBQUQsdUVBQUcsR0FBSDtBQUFBLGVBQVMsQ0FBQyxDQUFDLFVBQUYsZ0NBQWtCLENBQWxCLENBQVQ7QUFBQSxPQUEzRixFQUF5SCxNQUFLLFVBQUwsR0FBZ0I7QUFBQSxlQUFJLENBQUMsQ0FBQyxjQUFGLENBQWlCLE1BQUssTUFBTCxFQUFqQixDQUFKO0FBQUEsT0FBekksRUFBNkssTUFBSyxZQUFMLEdBQWtCO0FBQUEsZUFBSSxDQUFDLENBQUMsZ0JBQUYsQ0FBbUIsTUFBSyxRQUFMLEVBQW5CLENBQUo7QUFBQSxPQUEvTDtBQUFEO0FBQXdPOztBQUFsYjtBQUFBLElBQW1MLENBQUMsV0FBcEw7O0FBQW1iLEVBQUEsQ0FBQyxXQUFELEdBQVUsQ0FBVixFQUFZLENBQUMsQ0FBQyxjQUFGLEdBQWlCO0FBQUMsT0FBRSxRQUFIO0FBQVksT0FBRSxRQUFkO0FBQXVCLE9BQUUsU0FBekI7QUFBbUMsT0FBRSxXQUFyQztBQUFpRCxPQUFFLFVBQW5EO0FBQThELE9BQUUsUUFBaEU7QUFBeUUsT0FBRTtBQUEzRSxHQUE3QixFQUFvSCxDQUFDLENBQUMsY0FBRixHQUFpQjtBQUFDLElBQUEsQ0FBQyxFQUFDLE1BQUg7QUFBVSxJQUFBLENBQUMsRUFBQyxPQUFaO0FBQW9CLElBQUEsQ0FBQyxFQUFDO0FBQXRCLEdBQXJJLEVBQWtLLENBQUMsQ0FBQyxnQkFBRixHQUFtQjtBQUFDLE9BQUUsU0FBSDtBQUFhLE9BQUUsVUFBZjtBQUEwQixPQUFFLE9BQTVCO0FBQW9DLE9BQUUsT0FBdEM7QUFBOEMsT0FBRSxLQUFoRDtBQUFzRCxPQUFFLE1BQXhEO0FBQStELE9BQUUsTUFBakU7QUFBd0UsT0FBRSxRQUExRTtBQUFtRixPQUFFLFdBQXJGO0FBQWlHLE9BQUUsU0FBbkc7QUFBNkcsUUFBRyxVQUFoSDtBQUEySCxRQUFHO0FBQTlILEdBQXJMLEVBQStULENBQUMsQ0FBQyxRQUFGLEdBQVcsVUFBQyxDQUFELEVBQVc7QUFBQSxRQUFSLENBQVEsdUVBQU4sR0FBTTtBQUFDLFFBQUksQ0FBQyxHQUFDLEVBQU47O0FBQVMsU0FBSSxJQUFJLEVBQUMsR0FBQyxDQUFWLEVBQVksRUFBQyxHQUFDLENBQWQsRUFBZ0IsRUFBQyxFQUFqQjtBQUFvQixNQUFBLENBQUMsQ0FBQyxLQUFGLENBQVEsQ0FBUixFQUFXLEVBQVgsRUFBYyxNQUFkLEdBQXFCLENBQXJCLEdBQXVCLENBQUMsZUFBTSxDQUFDLENBQUMsS0FBRixDQUFRLENBQVIsRUFBVyxFQUFYLENBQU4sU0FBc0IsQ0FBdEIsQ0FBeEIsR0FBa0QsQ0FBQyxjQUFLLENBQUMsQ0FBQyxLQUFGLENBQVEsQ0FBUixFQUFXLEVBQVgsQ0FBTCxTQUFxQixDQUFyQixDQUFuRDtBQUFwQjs7QUFBZ0csV0FBTyxDQUFDLENBQUMsS0FBRixDQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsTUFBZCxHQUFxQixDQUFyQixHQUF1QixDQUFDLElBQUUsTUFBSSxDQUFDLENBQUMsS0FBRixDQUFRLENBQVIsRUFBVyxDQUFYLENBQTlCLEdBQTRDLENBQUMsSUFBRSxDQUFDLENBQUMsS0FBRixDQUFRLENBQVIsRUFBVyxDQUFYLENBQS9DLEVBQTZELENBQXBFO0FBQXNFLEdBQXJnQixFQUFzZ0IsQ0FBQyxDQUFDLFVBQUYsR0FBYSxVQUFDLENBQUQsRUFBVztBQUFBLFFBQVIsQ0FBUSx1RUFBTixHQUFNO0FBQUMsUUFBTSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQUYsR0FBYSxRQUFiLEVBQVI7QUFBQSxRQUFnQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE9BQUYsR0FBWSxRQUFaLEVBQWxDO0FBQXlELFdBQU0sQ0FBQyxDQUFDLENBQUMsV0FBRixHQUFnQixRQUFoQixFQUFELEVBQTRCLENBQTVCLEVBQThCLENBQTlCLEVBQWlDLElBQWpDLENBQXNDLENBQXRDLENBQU47QUFBK0MsR0FBdm9CLEVBQXdvQixDQUFDLENBQUMsYUFBRixHQUFnQixVQUFDLENBQUQsRUFBd0I7QUFBQSxRQUFyQixDQUFxQix1RUFBbkIsT0FBbUI7QUFBQSxRQUFYLENBQVcsdUVBQVQsTUFBUztBQUFDLFFBQUksQ0FBQyxHQUFDLEdBQU47O0FBQVUsUUFBRyxXQUFTLENBQVosRUFBYztBQUFBLGlEQUFnQixDQUFoQjtBQUFBOztBQUFBO0FBQUM7QUFBQSxjQUFVLEVBQVY7O0FBQWlCLGNBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFELENBQVAsQ0FBUixFQUFvQjtBQUFDLFlBQUEsQ0FBQyxHQUFDLEVBQUY7QUFBSTtBQUFNO0FBQWhEO0FBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRCxLQUFoRSxNQUFxRSxDQUFDLEdBQUMsQ0FBRjs7QUFBSSxRQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBRixDQUFRLENBQVIsQ0FBUjtBQUFBLFFBQW1CLENBQUMsR0FBQyxDQUFDLENBQUMsS0FBRixDQUFRLEdBQVIsQ0FBckI7QUFBQSxRQUFrQyxDQUFDLEdBQUMsRUFBcEM7O0FBQXVDLFNBQUksSUFBSSxFQUFDLEdBQUMsQ0FBVixFQUFZLEVBQUMsR0FBQyxDQUFkLEVBQWdCLEVBQUMsRUFBakIsRUFBb0I7QUFBQyxVQUFNLEdBQUMsR0FBQyxDQUFDLENBQUMsY0FBRixDQUFpQixDQUFDLENBQUMsRUFBRCxDQUFsQixDQUFSO0FBQStCLE1BQUEsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxHQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRCxDQUFGLENBQVgsRUFBa0IsT0FBTyxDQUFDLEdBQVIsQ0FBWSxHQUFaLEVBQWMsQ0FBQyxDQUFDLEVBQUQsQ0FBZixDQUFsQjtBQUFzQzs7QUFBQSxXQUFPLENBQVA7QUFBUyxHQUE5NEIsRUFBKzRCLENBQUMsQ0FBQyxVQUFGLEdBQWEsVUFBQSxDQUFDO0FBQUEsV0FBRSxDQUFDLENBQUMsY0FBRixDQUFpQixDQUFqQixDQUFGO0FBQUEsR0FBNzVCLEVBQW03QixDQUFDLENBQUMsWUFBRixHQUFlLFVBQUEsQ0FBQztBQUFBLFdBQUUsQ0FBQyxDQUFDLGdCQUFGLENBQW1CLENBQW5CLENBQUY7QUFBQSxHQUFuOEI7QUFBMjlCLENBQTk1QyxFQUErNUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDOztBQUFhLE1BQUksQ0FBQyxHQUFDLFFBQU0sS0FBSyxlQUFYLElBQTRCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxDQUFDLElBQUUsQ0FBQyxDQUFDLFVBQUwsR0FBZ0IsQ0FBaEIsR0FBa0I7QUFBQyxpQkFBUTtBQUFULEtBQXpCO0FBQXFDLEdBQW5GOztBQUFvRixFQUFBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUMsSUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLEdBQXJDO0FBQ3A3RTs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFUOztBQVhrMUUsTUFXNXpFLENBWDR6RTtBQUFBOztBQUFBOztBQVd4eUUsaUJBQWE7QUFBQTs7QUFBQTs7QUFBQyxtQ0FBUyxTQUFULEdBQW9CLE9BQUssY0FBTCxHQUFvQixVQUFBLENBQUM7QUFBQSxlQUFFLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLE9BQUssT0FBTCxLQUFlLENBQUMsQ0FBQyxPQUFGLEVBQWhCLElBQTZCLENBQUMsQ0FBQyxPQUF4QyxDQUFYLENBQUY7QUFBQSxPQUF6QztBQUFEO0FBQXlHOztBQVhrckU7QUFBQSxJQVdsekUsQ0FBQyxXQVhpekU7O0FBV2pyRSxFQUFBLENBQUMsV0FBRCxHQUFVLENBQVYsRUFBWSxDQUFDLENBQUMsT0FBRixHQUFVLEtBQXRCLEVBQTRCLENBQUMsQ0FBQyxjQUFGLEdBQWlCLFVBQUMsQ0FBRCxFQUFHLENBQUg7QUFBQSxXQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFGLEtBQVksQ0FBQyxDQUFDLE9BQUYsRUFBYixJQUEwQixDQUFDLENBQUMsT0FBckMsQ0FBWCxDQUFQO0FBQUEsR0FBN0M7QUFBOEcsQ0FYcXBCLEVBV3BwQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUM7O0FBQWEsRUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDLElBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixHQUFyQzs7QUFBZCxNQUFxRSxDQUFyRTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1DQUErRSxJQUEvRTs7QUFBcUYsRUFBQSxDQUFDLFdBQUQsR0FBVSxDQUFWLEVBQVksQ0FBQyxDQUFDLFFBQUYsR0FBVyxVQUFBLENBQUM7QUFBQSxXQUFHO0FBQUMsTUFBQSxFQUFFLEVBQUMsQ0FBQyxHQUFDLEdBQU47QUFBVSxNQUFBLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsR0FBTCxJQUFVO0FBQTVCLEtBQUg7QUFBQSxHQUF4QixFQUE2RCxDQUFDLENBQUMsUUFBRixHQUFXLFVBQUEsQ0FBQyxFQUFFO0FBQUMsUUFBTSxDQUFDLEdBQUMsQ0FBQyxHQUFDLEdBQUYsR0FBTSxHQUFkO0FBQUEsUUFBa0IsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxHQUFMLElBQVUsR0FBVixHQUFjLEVBQWxDO0FBQXFDLFdBQU07QUFBQyxNQUFBLEVBQUUsRUFBQyxDQUFKO0FBQU0sTUFBQSxPQUFPLEVBQUMsQ0FBZDtBQUFnQixNQUFBLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBQyxNQUFJLENBQU4sR0FBUSxDQUFULElBQVk7QUFBcEMsS0FBTjtBQUErQyxHQUFoSyxFQUFpSyxDQUFDLENBQUMsT0FBRixHQUFVLFVBQUEsQ0FBQyxFQUFFO0FBQUMsUUFBTSxDQUFDLEdBQUMsQ0FBQyxHQUFDLEdBQUYsR0FBTSxHQUFkO0FBQUEsUUFBa0IsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxHQUFMLElBQVUsR0FBVixHQUFjLEVBQWxDO0FBQUEsUUFBcUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLE1BQUksQ0FBTixHQUFRLENBQVQsSUFBWSxHQUFaLEdBQWdCLEVBQXZEO0FBQTBELFdBQU07QUFBQyxNQUFBLEVBQUUsRUFBQyxDQUFKO0FBQU0sTUFBQSxPQUFPLEVBQUMsQ0FBZDtBQUFnQixNQUFBLE9BQU8sRUFBQyxDQUF4QjtBQUEwQixNQUFBLEtBQUssRUFBQyxDQUFDLENBQUMsR0FBQyxNQUFJLENBQUosR0FBTSxFQUFSLEdBQVcsTUFBSSxDQUFmLEdBQWlCLENBQWxCLElBQXFCO0FBQXJELEtBQU47QUFBaUUsR0FBMVMsRUFBMlMsQ0FBQyxDQUFDLFFBQUYsR0FBVyxVQUFBLENBQUMsRUFBRTtBQUFDLFFBQU0sQ0FBQyxHQUFDLENBQUMsR0FBQyxHQUFGLEdBQU0sR0FBZDtBQUFBLFFBQWtCLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsR0FBTCxJQUFVLEdBQVYsR0FBYyxFQUFsQztBQUFBLFFBQXFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxNQUFJLENBQU4sR0FBUSxDQUFULElBQVksR0FBWixHQUFnQixFQUF2RDtBQUFBLFFBQTBELENBQUMsR0FBQyxDQUFDLENBQUMsR0FBQyxNQUFJLENBQUosR0FBTSxFQUFSLEdBQVcsTUFBSSxDQUFmLEdBQWlCLENBQWxCLElBQXFCLElBQXJCLEdBQTBCLEVBQXRGO0FBQXlGLFdBQU07QUFBQyxNQUFBLEVBQUUsRUFBQyxDQUFKO0FBQU0sTUFBQSxPQUFPLEVBQUMsQ0FBZDtBQUFnQixNQUFBLE9BQU8sRUFBQyxDQUF4QjtBQUEwQixNQUFBLEtBQUssRUFBQyxDQUFoQztBQUFrQyxNQUFBLElBQUksRUFBQyxDQUFDLENBQUMsR0FBQyxNQUFJLENBQUosR0FBTSxFQUFOLEdBQVMsRUFBWCxHQUFjLE1BQUksQ0FBSixHQUFNLEVBQXBCLEdBQXVCLE1BQUksQ0FBM0IsR0FBNkIsQ0FBOUIsSUFBaUM7QUFBeEUsS0FBTjtBQUFxRixHQUF4ZSxFQUF5ZSxDQUFDLENBQUMsUUFBRixHQUFXLFVBQUEsQ0FBQztBQUFBLFdBQUUsTUFBSSxDQUFOO0FBQUEsR0FBcmYsRUFBNmYsQ0FBQyxDQUFDLFVBQUYsR0FBYSxVQUFBLENBQUM7QUFBQSxXQUFFLENBQUMsQ0FBQyxRQUFGLENBQVcsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFYLENBQVgsQ0FBRjtBQUFBLEdBQTNnQixFQUF1aUIsQ0FBQyxDQUFDLFNBQUYsR0FBWSxVQUFBLENBQUM7QUFBQSxXQUFFLENBQUMsQ0FBQyxPQUFGLENBQVUsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFYLENBQVYsQ0FBRjtBQUFBLEdBQXBqQixFQUEra0IsQ0FBQyxDQUFDLFVBQUYsR0FBYSxVQUFBLENBQUM7QUFBQSxXQUFFLENBQUMsQ0FBQyxRQUFGLENBQVcsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFYLENBQVgsQ0FBRjtBQUFBLEdBQTdsQixFQUF5bkIsQ0FBQyxDQUFDLFFBQUYsR0FBVyxVQUFBLENBQUM7QUFBQSxXQUFFLEtBQUcsQ0FBSCxHQUFLLEdBQVA7QUFBQSxHQUFyb0I7QUFBZ3BCLENBWGhHLENBQXI1QixDQUFmIiwiZmlsZSI6ImRhdGVwbHVzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIHMocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBvPXRbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHMpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHMubT1lLHMuYz10LHMuZD1mdW5jdGlvbihlLHQscil7cy5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0scy5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHMudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9cyhlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHMucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSlzLmQocixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxzLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHMuZCh0LFwiYVwiLHQpLHR9LHMubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0scy5wPVwiXCIscyhzLnM9MCl9KFtmdW5jdGlvbihlLHQscyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbz1yKHMoMSkpO2NsYXNzIG4gZXh0ZW5kcyBvLmRlZmF1bHR7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMuYWRkWmVyb3M9KGU9XCIvXCIpPT5uLmFkZFplcm9zKHRoaXMuZm9ybWF0RGF0ZSgpLGUpLHRoaXMuZm9ybWF0RGF0ZT0oZT1cIi9cIik9Pm4uZm9ybWF0RGF0ZSh0aGlzLGUpLHRoaXMuZ2V0V29yZERheT0oKT0+bi5fZGF5c1JlZmVyZW5jZVt0aGlzLmdldERheSgpXSx0aGlzLmdldFdvcmRNb250aD0oKT0+bi5fbW9udGhzUmVmZXJlbmNlW3RoaXMuZ2V0TW9udGgoKV19fXQuZGVmYXVsdD1uLG4uX2RheXNSZWZlcmVuY2U9ezA6XCJTdW5kYXlcIiwxOlwiTW9uZGF5XCIsMjpcIlR1ZXNkYXlcIiwzOlwiV2VkbmVzZGF5XCIsNDpcIlRodXJzZGF5XCIsNTpcIkZyaWRheVwiLDY6XCJTYXR1cmRheVwifSxuLl9rZXlzUmVmZXJlbmNlPXt5OlwieWVhclwiLG06XCJtb250aFwiLGQ6XCJkYXlcIn0sbi5fbW9udGhzUmVmZXJlbmNlPXswOlwiSmFudWFyeVwiLDE6XCJGZWJ1cmFyeVwiLDI6XCJNYXJjaFwiLDM6XCJBcHJpbFwiLDQ6XCJNYXlcIiw1OlwiSnVuZVwiLDY6XCJKdWx5XCIsNzpcIkF1Z3VzdFwiLDg6XCJTZXB0ZW1iZXJcIiw5OlwiT2N0b2JlclwiLDEwOlwiTm92ZW1iZXJcIiwxMTpcIkRlY2VtYmVyXCJ9LG4uYWRkWmVyb3M9KGUsdD1cIi9cIik9PntsZXQgcz1cIlwiO2ZvcihsZXQgcj0wO3I8MjtyKyspZS5zcGxpdCh0KVtyXS5sZW5ndGg8Mj9zKz1gMCR7ZS5zcGxpdCh0KVtyXX0ke3R9YDpzKz1gJHtlLnNwbGl0KHQpW3JdfSR7dH1gO3JldHVybiBlLnNwbGl0KHQpWzJdLmxlbmd0aDwyP3MrPVwiMFwiK2Uuc3BsaXQodClbMl06cys9ZS5zcGxpdCh0KVsyXSxzfSxuLmZvcm1hdERhdGU9KGUsdD1cIi9cIik9Pntjb25zdCBzPWUuZ2V0TW9udGgoKS50b1N0cmluZygpLHI9ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtyZXR1cm5bZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkscyxyXS5qb2luKHQpfSxuLmdldERhdGVWYWx1ZXM9KGUsdD1cInk6bTpkXCIscz1cImF1dG9cIik9PntsZXQgcj1cIi9cIjtpZihcImF1dG9cIj09PXMpe2Zvcihjb25zdCB0IG9mIGUpaWYoaXNOYU4oTnVtYmVyKHQpKSl7cj10O2JyZWFrfX1lbHNlIHI9cztjb25zdCBvPWUuc3BsaXQociksdT10LnNwbGl0KFwiOlwiKSxhPXt9O2ZvcihsZXQgZT0wO2U8MztlKyspe2NvbnN0IHQ9bi5fa2V5c1JlZmVyZW5jZVt1W2VdXTthW3RdPU51bWJlcihvW2VdKSxjb25zb2xlLmxvZyh0LG9bZV0pfXJldHVybiBhfSxuLmdldFdvcmREYXk9ZT0+bi5fZGF5c1JlZmVyZW5jZVtlXSxuLmdldFdvcmRNb250aD1lPT5uLl9tb250aHNSZWZlcmVuY2VbZV19LGZ1bmN0aW9uKGUsdCxzKXtcInVzZSBzdHJpY3RcIjt2YXIgcj10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcbi8qKlxuICogRGF0ZVBsdXNcbiAqIEEgc2ltcGxlIHByb2dyYW0gdG8gYXNzaXN0IHdpdGggZGF0ZSBtYW5pcHVsYXRpb25cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgRWxhcHNlXG4gKiBAZmlsZSBkZWZpbmVzIEVsYXBzZSBjbGFzcyBmb3IgZWxhcHNlZFxuICovXG5jb25zdCBvPXIocygyKSk7Y2xhc3MgbiBleHRlbmRzIG8uZGVmYXVsdHtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy5nZXRFbGFwc2VkRGF5cz1lPT5NYXRoLnJvdW5kKE1hdGguYWJzKCh0aGlzLmdldFRpbWUoKS1lLmdldFRpbWUoKSkvbi5fb25lRGF5KSl9fXQuZGVmYXVsdD1uLG4uX29uZURheT04NjRlNSxuLmdldEVsYXBzZWREYXlzPShlLHQpPT5NYXRoLnJvdW5kKE1hdGguYWJzKChlLmdldFRpbWUoKS10LmdldFRpbWUoKSkvbi5fb25lRGF5KSl9LGZ1bmN0aW9uKGUsdCxzKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjbGFzcyByIGV4dGVuZHMgRGF0ZXt9dC5kZWZhdWx0PXIsci5tc1RvU2Vjcz1lPT4oe21zOmUlMWUzLHNlY29uZHM6KGUtZSUxZTMpLzFlM30pLHIubXNUb01pbnM9ZT0+e2NvbnN0IHQ9ZSUxZTMlMWUzLHM9KGUtZSUxZTMpLzFlMyU2MDtyZXR1cm57bXM6dCxzZWNvbmRzOnMsbWludXRlczooZS0xZTMqcy10KS82ZTR9fSxyLm1zVG9IcnM9ZT0+e2NvbnN0IHQ9ZSUxZTMlMWUzLHM9KGUtZSUxZTMpLzFlMyU2MCxyPShlLTFlMypzLXQpLzZlNCU2MDtyZXR1cm57bXM6dCxzZWNvbmRzOnMsbWludXRlczpyLGhvdXJzOihlLTFlMypyKjYwLTFlMypzLXQpLzM2ZTV9fSxyLm1zVG9EYXlzPWU9Pntjb25zdCB0PWUlMWUzJTFlMyxzPShlLWUlMWUzKS8xZTMlNjAscj0oZS0xZTMqcy10KS82ZTQlNjAsbz0oZS0xZTMqcio2MC0xZTMqcy10KS8zNmU1JTI0O3JldHVybnttczp0LHNlY29uZHM6cyxtaW51dGVzOnIsaG91cnM6byxkYXlzOihlLTFlMypvKjYwKjYwLTFlMypyKjYwLTFlMypzLXQpLzg2NGU1fX0sci5zZWNzVG9Ncz1lPT4xZTMqZSxyLnNlY3NUb01pbnM9ZT0+ci5tc1RvTWlucyhyLnNlY3NUb01zKGUpKSxyLnNlY3NUb0hycz1lPT5yLm1zVG9IcnMoci5zZWNzVG9NcyhlKSksci5zZWNzVG9EYXlzPWU9PnIubXNUb0RheXMoci5zZWNzVG9NcyhlKSksci5taW5zVG9Ncz1lPT42MCplKjFlM31dKTsiXX0=