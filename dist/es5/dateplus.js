/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 4.0.0-beta1
 */

var DatePlus = (function (exports) {
    'use strict';

    /**
     * Converts milliseconds to seconds with remainders
     *
     * @param ms - Milliseconds to convert
     * @returns Object with seconds and milliseconds
     */
    var msToSecs = function msToSecs(ms) {
      return {
        ms: ms % 1000,
        seconds: (ms - ms % 1000) / 1000
      };
    };
    var msToSeconds = msToSecs;
    /**
     * Converts milliseconds to minutes with remainders
     *
     * @param ms - Milliseconds to convert
     * @returns Object with minutes, seconds, and milliseconds
     */

    var msToMins = function msToMins(ms) {
      var milliseconds = ms % 1000 % 1000;
      var seconds = (ms - ms % 1000) / 1000 % 60;
      var minutes = (ms - seconds * 1000 - milliseconds) / (1000 * 60);
      return {
        ms: milliseconds,
        seconds: seconds,
        minutes: minutes
      };
    };
    var msToMinutes = msToMins;
    /**
     * Converts milliseconds to hours with remainders
     *
     * @param ms - Milliseconds to convert
     * @returns Object with hours, minutes, seconds, and milliseconds
     */

    var msToHrs = function msToHrs(ms) {
      var milliseconds = ms % 1000 % 1000;
      var seconds = (ms - ms % 1000) / 1000 % 60;
      var minutes = (ms - seconds * 1000 - milliseconds) / (1000 * 60) % 60;
      var hours = (ms - minutes * 1000 * 60 - seconds * 1000 - milliseconds) / (1000 * 60 * 60);
      return {
        ms: milliseconds,
        seconds: seconds,
        minutes: minutes,
        hours: hours
      };
    };
    var msToHours = msToHrs;
    /**
     * Converts milliseconds to days with remainders
     *
     * @param ms - Milliseconds to convert
     * @returns Object with days, hours, minutes, seconds, and milliseconds
     */

    var msToDays = function msToDays(ms) {
      var milliseconds = ms % 1000 % 1000;
      var seconds = (ms - ms % 1000) / 1000 % 60;
      var minutes = (ms - seconds * 1000 - milliseconds) / (1000 * 60) % 60;
      var hours = (ms - minutes * 1000 * 60 - seconds * 1000 - milliseconds) / (1000 * 60 * 60) % 24;
      var days = (ms - hours * 1000 * 60 * 60 - minutes * 1000 * 60 - seconds * 1000 - milliseconds) / (1000 * 60 * 60 * 24);
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
     *
     * @param secs - Seconds to convert
     * @returns Converted milliseconds
     */

    var secsToMs = function secsToMs(secs) {
      return secs * 1000;
    };
    var secondsToMs = secsToMs;
    /**
     * Converts seconds to minutes with remainders
     *
     * @param secs - Seconds to convert
     * @returns Converted minutes
     */

    var secsToMins = function secsToMins(secs) {
      return msToMins(secsToMs(secs));
    };
    var secondsToMinutes = secsToMins;
    /**
     * Converts seconds to hours with remainders
     *
     * @param secs - Seconds to convert
     * @returns Converted hours
     */

    var secsToHrs = function secsToHrs(secs) {
      return msToHrs(secsToMs(secs));
    };
    var secondsToHours = secsToHrs;
    /**
     * Converts seconds to days with remainders
     *
     * @param secs - Seconds to convert
     * @returns Converted days
     */

    var secsToDays = function secsToDays(secs) {
      return msToDays(secsToMs(secs));
    };
    var secondsToDays = secsToDays;
    /**
     * Converts hours to milliseconds
     *
     * @param mins - Minutes to convert
     * @returns Converted milliseconds
     */

    var minsToMs = function minsToMs(mins) {
      return mins * 60 * 1000;
    };
    var minutesToMs = secsToDays;
    /**
     * Converts hours to seconds
     *
     * @param mins - Minutes to convert
     * @returns Converted seconds
     */

    var minsToSecs = function minsToSecs(mins) {
      return mins * 60;
    };
    var minutesToSeconds = minsToSecs;
    /**
     * Converts minutes to hours with remainders
     *
     * @param mins - Minutes to convert
     * @returns Converted hours
     */

    var minsToHrs = function minsToHrs(mins) {
      return msToHrs(minsToMs(mins));
    };
    var minutesToHours = minsToHrs;
    /**
     * Converts minutes to days with remainders
     *
     * @param mins - Minutes to convert
     * @returns Converted days
     */

    var minsToDays = function minsToDays(mins) {
      return msToDays(minsToMs(mins));
    };
    var minutesToDays = minsToDays;
    /**
     * Converts hours to milliseconds
     *
     * @param hours - Hours to convert
     * @returns Converted milliseconds
     */

    var hrsToMs = function hrsToMs(hours) {
      return hours * 60 * 60 * 1000;
    };
    var hoursToMs = hrsToMs;
    /**
     * Converts hours to seconds
     *
     * @param hours - Hours to convert
     * @returns Converted seconds
     */

    var hrsToSecs = function hrsToSecs(hours) {
      return hours * 60 * 60;
    };
    var hoursToSeconds = hrsToSecs;
    /**
     * Converts hours to minutes
     *
     * @param hours - Hours to convert
     * @returns Converted minutes
     */

    var hrsToMins = function hrsToMins(hours) {
      return hours * 60;
    };
    var hoursToMinutes = hrsToMins;
    /**
     * Converts hours to days with remainders
     *
     * @param hrs - Hours to convert
     * @returns Converted days
     */

    var hrsToDays = function hrsToDays(hrs) {
      return msToDays(hrsToMs(hrs));
    };
    var hoursToDays = hrsToDays;
    /**
     * Converts days to milliseconds
     *
     * @param days - Days to convert
     * @returns Converted milliseconds
     */

    var daysToMs = function daysToMs(days) {
      return days * 24 * 60 * 60 * 1000;
    };
    /**
     * Converts days to seconds
     *
     * @param days - Days to convert
     * @returns Converted seconds
     */

    var daysToSecs = function daysToSecs(days) {
      return days * 24 * 60 * 60;
    };
    var daysToSeconds = daysToSecs;
    /**
     * Converts days to minutes
     *
     * @param days - Days to convert
     * @returns Converted minutes
     */

    var daysToMins = function daysToMins(days) {
      return days * 24 * 60;
    };
    var daysToMinutes = daysToMins;
    /**
     * Converts days to hours
     *
     * @param days - Days to convert
     * @returns Converted hours
     */

    var daysToHrs = function daysToHrs(days) {
      return days * 24;
    };
    var daysToHours = daysToHrs;

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;

      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;

        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }

        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }

        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };

      return _wrapNativeSuper(Class);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();

      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;

        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;

          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }

        return _possibleConstructorReturn(this, result);
      };
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;

          var F = function () {};

          return {
            s: F,
            n: function () {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: F
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var normalCompletion = true,
          didErr = false,
          err;
      return {
        s: function () {
          it = it.call(o);
        },
        n: function () {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function (e) {
          didErr = true;
          err = e;
        },
        f: function () {
          try {
            if (!normalCompletion && it.return != null) it.return();
          } finally {
            if (didErr) throw err;
          }
        }
      };
    }

    var values = {
      hrsPerDay: 24,
      minsPerHr: 60,
      secsPerMin: 60,
      msPerSec: 1000
    };
    var daysReference = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    };
    var monthsReference = {
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
    var oneMinute = 60 * 1000;
    var oneHour = 60 * oneMinute;
    var oneDay = 24 * oneHour;

    var keysReference = {
      y: "year",
      m: "month",
      d: "day"
    };
    /**
     * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
     *
     * @param date - String date to format
     * @param seperator - Char the date is seperatred by
     * @returns - Date with zeros
     */

    var addZeros = function addZeros(date) {
      var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
      var splitDate = date.split(seperator);
      var newDateValues = splitDate.map(function (section) {
        return section.length < 2 ? "0".concat(section) : section;
      });
      return newDateValues.join(seperator);
    };
    /**
     * Format date into a string in the form YYYY{seperator}MM{seperator}DD
     *
     * @param date - Date object to format
     * @param format - Format of string date
     * @param seperator - String to seperate date values with
     * @returns Formatted date
     */

    var formatDate = function formatDate(date) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "y:m:d";
      var seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/";
      var month = (date.getMonth() + 1).toString();
      var day = date.getDate().toString();
      var year = date.getFullYear().toString();
      var values = {
        m: month,
        d: day,
        y: year
      };
      var formatArray = format.split(":");
      return formatArray.map(function (val) {
        return values[val];
      }).join(seperator);
    };
    /**
     * Gets date values and outputs an object
     *
     * @param date - Date to extract values from, months zero indexed
     * @param format - Format of string date
     * @param seperator - Seperator the date works with; leave auto for auto detection, limited to 1 char
     * @returns Object with all values
     */

    var getDateValues = function getDateValues(date) {
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

      var splitDate = date.split(_seperator);
      var dateFormat = format.split(":");
      var output = {};

      for (var index = 0; index < 3; index++) {
        var key = keysReference[dateFormat[index]];
        output[key] = Number(splitDate[index]);
      }

      return output;
    };
    /**
     * Converts numerical day of week into word form (e.g 0 => "Sunday")
     *
     * @param numerical - Numerical day of week, 0 indexed (0-6)
     * @returns Stringed day of week
     */

    var getWordDay = function getWordDay(numerical) {
      return daysReference[numerical];
    };
    /**
     * Converts numerical month into word form (e.g 0 => "January")
     *
     * @param numerical - Numerical day of week, 0 indexed (0-11)
     * @returns Stringed worded month
     */

    var getWordMonth = function getWordMonth(numerical) {
      return monthsReference[numerical];
    };
    /**
     * Calculates number of elapsed days between date1 and date2
     *
     * @param date1 - Starting date object to calculate
     * @param date2 - Ending date object to calculate
     * @returns - Number of elapsed days
     */

    var getElapsedDays = function getElapsedDays(date1, date2) {
      return Math.round((date1.getTime() - date2.getTime()) / oneDay) * -1;
    };
    /**
     * Calculates number of elapsed hours between date1 and date2
     *
     * @param date1 - Starting date object to calculate
     * @param date2 - Ending date object to calculate
     * @returns - Number of elapsed hours
     */

    var getElapsedHours = function getElapsedHours(date1, date2) {
      return Math.round((date1.getTime() - date2.getTime()) / oneHour) * -1;
    };
    /**
     * Calculates number of elapsed minutes between date1 and date2
     *
     * @param date1 - Starting date object to calculate
     * @param date2 - Ending date object to calculate
     * @returns - Number of elapsed minutes
     */

    var getElapsedMinutes = function getElapsedMinutes(date1, date2) {
      return Math.round((date1.getTime() - date2.getTime()) / oneMinute) * -1;
    };
    /**
     * Calculates number of elapsed seconds between date1 and date2
     *
     * @param date1 - Starting date object to calculate
     * @param date2 - Ending date object to calculate
     * @returns - Number of elapsed seconds
     */

    var getElapsedSeconds = function getElapsedSeconds(date1, date2) {
      return Math.round((date1.getTime() - date2.getTime()) / 1000) * -1;
    };
    /**
     * Calculates number of elapsed milliseconds between date1 and date2
     *
     * @param date1 - Starting date object to calculate
     * @param date2 - Ending date object to calculate
     * @returns - Number of elapsed milliseconds
     */

    var getElapsedMs = function getElapsedMs(date1, date2) {
      return Math.round(date1.getTime() - date2.getTime()) * -1;
    };
    /**
     * Calculates elapsed time between current and previous
     *
     * @param start- Start date
     * @param end - End date
     * @param approx - Text to append to values from days and on, e.g *about* 1 day aga
     * @returns Time difference in string form, e.g "3 seconds ago"
     */

    var getElapsedString = function getElapsedString(start, end) {
      var approx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "about";
      var daysPerMonth = 30;
      var daysPerYear = 365;
      var msPerMonth = oneDay * daysPerMonth;
      var msPerYear = oneDay * daysPerYear;
      var elapsed = getElapsedMs(start, end);
      var val;

      if (elapsed < oneMinute) {
        val = Math.round(elapsed / 1000);
        return "".concat(val, " second").concat(val === 1 ? "" : "s", " ago");
      } else if (elapsed < oneHour) {
        val = Math.round(elapsed / oneMinute);
        return "".concat(val, " minute").concat(val === 1 ? "" : "s", " ago");
      } else if (elapsed < oneDay) {
        val = Math.round(elapsed / oneHour);
        return "".concat(val, " hour").concat(val === 1 ? "" : "s", " ago");
      } else if (elapsed < msPerMonth) {
        val = Math.round(elapsed / oneDay);
        return "".concat(approx, " ").concat(val, " day").concat(val === 1 ? "" : "s", " ago");
      } else if (elapsed < msPerYear) {
        val = Math.round(elapsed / msPerMonth);
        return "".concat(approx, " ").concat(val, " month").concat(val === 1 ? "" : "s", " ago");
      }

      val = Math.round(elapsed / msPerYear);
      return "".concat(approx, " ").concat(val, " year").concat(val === 1 ? "" : "s", " ago");
    };
    /**
     * Convert a utc date to local
     *
     * @param date - Date to use. Note that the parameter will never be mutated.
     * @returns A new date object with the time converted form UTC
     */

    var utcToLocal = function utcToLocal(date) {
      var newDate = date.constructor(date.getTime());
      newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
      return newDate;
    };
    /**
     * Get the current UTC Time
     *
     * @returns UTC Time
     */

    var getUtcTime = function getUtcTime() {
      var now = new Date();
      return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    };

    var DatePlus = function (_Date) {
      _inherits(DatePlus, _Date);

      var _super = _createSuper(DatePlus);

      function DatePlus() {
        _classCallCheck(this, DatePlus);

        return _super.apply(this, arguments);
      }

      _createClass(DatePlus, [{
        key: "addZeros",
        value:
        /**
         * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
         *
         * @param date - String date to format
         * @param seperator - Char the date is seperatred by
         * @returns - Date with zeros
         */
        function addZeros$1() {
          var seperator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
          return addZeros(this.formatDate(), seperator);
        }
        /**
         * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
         *
         * @param seperator - Char to seperate date with
         * @param format - Format of string date
         * @returns Formatted date
         */

      }, {
        key: "formatDate",
        value: function formatDate$1() {
          var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "y:m:d";
          var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
          return formatDate(this, format, seperator);
        }
        /**
         * Gets instantiated day of week in word form (e.g 0 => "Sunday")
         *
         * @returns Stringed day of week
         */

      }, {
        key: "getWordDay",
        value: function getWordDay() {
          return daysReference[this.getDay()];
        }
        /**
         * Gets instantiated month in word form (e.g 0 => "January")
         *
         * @returns Stringed worded month
         */

      }, {
        key: "getWordMonth",
        value: function getWordMonth() {
          return monthsReference[this.getMonth()];
        }
        /**
         * Calculates number of elapsed days between instantiated date and dae
         *
         * @param date - Ending date object to calculate
         * @returns - Number of elapsed days
         */

      }, {
        key: "getElapsedDays",
        value: function getElapsedDays$1(date) {
          return getElapsedDays(this, date);
        }
        /**
         * Calculates number of elapsed hours between date1 and date2
         *
         * @param date - Ending date object to calculate
         * @returns - Number of elapsed hours
         */

      }, {
        key: "getElapsedHours",
        value: function getElapsedHours$1(date) {
          return getElapsedHours(this, date);
        }
        /**
         * Calculates number of elapsed minutes between date1 and date2
         *
         * @param date - Ending date object to calculate
         * @returns - Number of elapsed minutes
         */

      }, {
        key: "getElapsedMinutes",
        value: function getElapsedMinutes$1(date) {
          return getElapsedMinutes(this, date);
        }
        /**
         * Calculates number of elapsed seconds between date1 and date2
         *
         * @param date - Ending date object to calculate
         * @returns - Number of elapsed seconds
         */

      }, {
        key: "getElapsedSeconds",
        value: function getElapsedSeconds$1(date) {
          return getElapsedSeconds(this, date);
        }
        /**
         * Calculates number of elapsed milliseconds between date1 and date2
         *
         * @param date - Ending date object to calculate
         * @returns - Number of elapsed milliseconds
         */

      }, {
        key: "getElapsedMs",
        value: function getElapsedMs$1(date) {
          return getElapsedMs(this, date);
        }
        /**
         * Calculates elapsed time between current and previous
         *
         * @param date - End date
         * @param approx - Text to append to values from days and on, e.g *about* 1 day aga
         * @returns Time difference in string form, e.g "3 seconds ago"
         */

      }, {
        key: "getElapsedString",
        value: function getElapsedString$1(date) {
          var approx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "about";
          return getElapsedString(this, date, approx);
        }
      }]);

      return DatePlus;
    }(_wrapNativeSuper(Date));

    exports.DatePlus = DatePlus;
    exports.addZeros = addZeros;
    exports.daysReference = daysReference;
    exports.daysToHours = daysToHours;
    exports.daysToHrs = daysToHrs;
    exports.daysToMins = daysToMins;
    exports.daysToMinutes = daysToMinutes;
    exports.daysToMs = daysToMs;
    exports.daysToSeconds = daysToSeconds;
    exports.daysToSecs = daysToSecs;
    exports.default = DatePlus;
    exports.formatDate = formatDate;
    exports.getDateValues = getDateValues;
    exports.getElapsedDays = getElapsedDays;
    exports.getElapsedHours = getElapsedHours;
    exports.getElapsedMinutes = getElapsedMinutes;
    exports.getElapsedMs = getElapsedMs;
    exports.getElapsedSeconds = getElapsedSeconds;
    exports.getElapsedString = getElapsedString;
    exports.getUtcTime = getUtcTime;
    exports.getWordDay = getWordDay;
    exports.getWordMonth = getWordMonth;
    exports.hoursToDays = hoursToDays;
    exports.hoursToMinutes = hoursToMinutes;
    exports.hoursToMs = hoursToMs;
    exports.hoursToSeconds = hoursToSeconds;
    exports.hrsToDays = hrsToDays;
    exports.hrsToMins = hrsToMins;
    exports.hrsToMs = hrsToMs;
    exports.hrsToSecs = hrsToSecs;
    exports.minsToDays = minsToDays;
    exports.minsToHrs = minsToHrs;
    exports.minsToMs = minsToMs;
    exports.minsToSecs = minsToSecs;
    exports.minutesToDays = minutesToDays;
    exports.minutesToHours = minutesToHours;
    exports.minutesToMs = minutesToMs;
    exports.minutesToSeconds = minutesToSeconds;
    exports.monthsReference = monthsReference;
    exports.msToDays = msToDays;
    exports.msToHours = msToHours;
    exports.msToHrs = msToHrs;
    exports.msToMins = msToMins;
    exports.msToMinutes = msToMinutes;
    exports.msToSeconds = msToSeconds;
    exports.msToSecs = msToSecs;
    exports.oneDay = oneDay;
    exports.oneHour = oneHour;
    exports.oneMinute = oneMinute;
    exports.secondsToDays = secondsToDays;
    exports.secondsToHours = secondsToHours;
    exports.secondsToMinutes = secondsToMinutes;
    exports.secondsToMs = secondsToMs;
    exports.secsToDays = secsToDays;
    exports.secsToHrs = secsToHrs;
    exports.secsToMins = secsToMins;
    exports.secsToMs = secsToMs;
    exports.utcToLocal = utcToLocal;
    exports.values = values;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
//# sourceMappingURL=dateplus.js.map
