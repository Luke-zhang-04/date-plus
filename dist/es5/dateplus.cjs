/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 3.1.0
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
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
      it = o[Symbol.iterator]();
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

/**
 * Convert namespace
 *
 * @namespace
 * @classdesc A namespace program to convert units
 */
var Convert = function (_Date) {
  _inherits(Convert, _Date);

  var _super = _createSuper(Convert);

  function Convert() {
    _classCallCheck(this, Convert);

    return _super.apply(this, arguments);
  }

  return Convert;
}(_wrapNativeSuper(Date));

Convert.msToSecs = function (ms) {
  return {
    ms: ms % 1000,
    seconds: (ms - ms % 1000) / 1000
  };
};
/**
 * Converts milliseconds to minutes with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with minutes, seconds, and milliseconds
 * @public
 * @static
 */


Convert.msToMins = function (ms) {
  var milliseconds = ms % 1000 % 1000;
  var seconds = (ms - ms % 1000) / 1000 % 60;
  var minutes = (ms - seconds * 1000 - milliseconds) / (1000 * 60);
  return {
    ms: milliseconds,
    seconds: seconds,
    minutes: minutes
  };
};
/**
 * Converts milliseconds to hours with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with hours, minutes, seconds, and milliseconds
 * @public
 * @static
 */


Convert.msToHrs = function (ms) {
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
/**
 * Converts milliseconds to days with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with days, hours, minutes, seconds, and milliseconds
 * @public
 * @static
 */


Convert.msToDays = function (ms) {
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
 * @param {number} secs - Seconds to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */


Convert.secsToMs = function (secs) {
  return secs * 1000;
};
/**
 * Converts seconds to minutes with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted minutes
 * @public
 * @static
 */


Convert.secsToMins = function (secs) {
  return Convert.msToMins(Convert.secsToMs(secs));
};
/**
 * Converts seconds to hours with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted hours
 * @public
 * @static
 */


Convert.secsToHrs = function (secs) {
  return Convert.msToHrs(Convert.secsToMs(secs));
};
/**
 * Converts seconds to days with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */


Convert.secsToDays = function (secs) {
  return Convert.msToDays(Convert.secsToMs(secs));
};
/**
 * Converts hours to milliseconds
 *
 * @param {number} mins - Minutes to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */


Convert.minsToMs = function (mins) {
  return mins * 60 * 1000;
};
/**
 * Converts hours to seconds
 *
 * @param {number} mins - Minutes to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */


Convert.minsToSecs = function (mins) {
  return mins * 60;
};
/**
 * Converts minutes to hours with remainders
 *
 * @param {number} mins - Minutes to convert
 * @returns {Object<string, number>} Converted hours
 * @public
 * @static
 */


Convert.minsToHrs = function (mins) {
  return Convert.msToHrs(Convert.minsToMs(mins));
};
/**
 * Converts minutes to days with remainders
 *
 * @param {number} mins - Minutes to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */


Convert.minsToDays = function (mins) {
  return Convert.msToDays(Convert.minsToMs(mins));
};
/**
 * Converts hours to milliseconds
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */


Convert.hrsToMs = function (hours) {
  return hours * 60 * 60 * 1000;
};
/**
 * Converts hours to seconds
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */


Convert.hrsToSecs = function (hours) {
  return hours * 60 * 60;
};
/**
 * Converts hours to minutes
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted minutes
 * @public
 * @static
 */


Convert.hrsToMins = function (hours) {
  return hours * 60;
};
/**
 * Converts hours to days with remainders
 *
 * @param {number} hrs - Hours to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */


Convert.hrsToDays = function (hrs) {
  return Convert.msToDays(Convert.hrsToMs(hrs));
};
/**
 * Converts days to milliseconds
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */


Convert.daysToMs = function (days) {
  return days * 24 * 60 * 60 * 1000;
};
/**
 * Converts days to seconds
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */


Convert.daysToSecs = function (days) {
  return days * 24 * 60 * 60;
};
/**
 * Converts days to minutes
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted minutes
 * @public
 * @static
 */


Convert.daysToMins = function (days) {
  return days * 24 * 60;
};
/**
 * Converts days to hours
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted hours
 * @public
 * @static
 */


Convert.daysToHrs = function (days) {
  return days * 24;
};

/**
 * Elapse class and namespace
 *
 * @namespace
 * @class
 * @classdesc A class and namespace program to find elapsed times
 */

var Elapse = function (_Convert) {
  _inherits(Elapse, _Convert);

  var _super = _createSuper(Elapse);

  function Elapse() {
    var _this;

    _classCallCheck(this, Elapse);

    _this = _super.apply(this, arguments);
    /**
     * Calculates number of elapsed days between instantiated date and dae
     *
     * @param {Date | DatePlus} date - Ending date object to calculate
     * @returns {number} - Number of elapsed days
     * @public
     * @instance
     */

    _this.getElapsedDays = function (date) {
      return Math.round((_this.getTime() - date.getTime()) / Elapse._oneDay) * -1;
    };

    return _this;
  }

  return Elapse;
}(Convert);
Elapse._oneDay = 24 * 60 * 60 * 1000;
/**
 * Calculates number of elapsed days between date1 and date2
 *
 * @param {Date | DatePlus} date1 - Starting date object to calculate
 * @param {Date | DatePlus} date2 - Ending date object to calculate
 * @returns {number} - Number of elapsed days
 * @public
 * @static
 */

Elapse.getElapsedDays = function (date1, date2) {
  return Math.round((date1.getTime() - date2.getTime()) / Elapse._oneDay) * -1;
};

var Alias = function (_Elapse) {
  _inherits(Alias, _Elapse);

  var _super = _createSuper(Alias);

  function Alias() {
    _classCallCheck(this, Alias);

    return _super.apply(this, arguments);
  }

  return Alias;
}(Elapse);
Alias.msToSeconds = Alias.msToSecs;
/**
 * Converts milliseconds to minutes with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with minutes, seconds, and milliseconds
 * @public
 * @static
 */

Alias.msToMinutes = Alias.msToMins;
/**
 * Converts milliseconds to hours with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with hours, minutes, seconds, and milliseconds
 * @public
 * @static
 */

Alias.msToHours = Alias.msToHrs;
/**
 * Converts seconds to milliseconds
 *
 * @param {number} secs - Seconds to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Alias.secondsToMs = Alias.secsToMs;
/**
 * Converts seconds to minutes with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted minutes
 * @public
 * @static
 */

Alias.secondsToMinutes = Alias.secsToMins;
/**
 * Converts seconds to hours with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted hours
 * @public
 * @static
 */

Alias.secondsToHours = Alias.secsToHrs;
/**
 * Converts seconds to days with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */

Alias.secondsToDays = Alias.secsToDays;
/**
 * Converts hours to milliseconds
 *
 * @param {number} mins - Minutes to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Alias.minutesToMs = Alias.minsToMs;
/**
 * Converts hours to seconds
 *
 * @param {number} mins - Minutes to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */

Alias.minutesToSeconds = Alias.minsToSecs;
/**
 * Converts minutes to hours with remainders
 *
 * @param {number} mins - Minutes to convert
 * @returns {Object<string, number>} Converted hours
 * @public
 * @static
 */

Alias.minutesToHours = Alias.minsToHrs;
/**
 * Converts minutes to days with remainders
 *
 * @param {number} mins - Minutes to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */

Alias.minutesToDays = Alias.minsToDays;
/**
 * Converts hours to milliseconds
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Alias.hoursToMs = Alias.hrsToMs;
/**
 * Converts hours to seconds
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */

Alias.hoursToSeconds = Alias.hrsToSecs;
/**
 * Converts hours to minutes
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted minutes
 * @public
 * @static
 */

Alias.hoursToMinutes = Alias.hrsToMins;
/**
 * Converts hours to days with remainders
 *
 * @param {number} hrs - Hours to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */

Alias.hoursToDays = Alias.hrsToDays;
/**
 * Converts days to seconds
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */

Alias.daysToSeconds = Alias.daysToSecs;
/**
 * Converts days to minutes
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted minutes
 * @public
 * @static
 */

Alias.daysToMinutes = Alias.daysToMins;
/**
 * Converts days to hours
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted hours
 * @public
 * @static
 */

Alias.daysToHours = Alias.daysToHrs;

/**
 * Dateplus class and namespace
 *
 * @namespace
 * @class
 * @classdesc A class and namespace program to assist with date manipulation
 */

var DatePlus = function (_Alias) {
  _inherits(DatePlus, _Alias);

  var _super = _createSuper(DatePlus);

  function DatePlus() {
    var _this;

    _classCallCheck(this, DatePlus);

    _this = _super.apply(this, arguments);
    /**
     * Add's 0s to the instantiated (e.g 2020/4/3 => 2020/04/03)
     *
     * @param {string} seperator - Char the date is seperatred by
     * @returns {string} - Date with zeros
     * @public
     * @instance
     */

    _this.addZeros = function () {
      var seperator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
      return DatePlus.addZeros(_this.formatDate(), seperator);
    };
    /**
     * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
     *
     * @param {string} seperator - Char to seperate date with
     * @returns {string} Formatted date
     * @public
     * @instance
     */


    _this.formatDate = function () {
      var seperator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
      return DatePlus.formatDate(_assertThisInitialized(_this), seperator);
    };
    /**
     * Gets instantiated day of week in word form (e.g 0 => "Sunday")
     *
     * @returns {string} Stringed day of week
     * @public
     * @instance
     */


    _this.getWordDay = function () {
      return DatePlus._daysReference[_this.getDay()];
    };
    /**
     * Gets instantiated month in word form (e.g 0 => "January")
     *
     * @returns {string} Stringed worded month
     * @public
     * @instance
     */


    _this.getWordMonth = function () {
      return DatePlus._monthsReference[_this.getMonth()];
    };

    return _this;
  }

  return DatePlus;
}(Alias);
/**
 * Reference to days of the week, zero indexed
 *
 * @private
 * @type {Object<number, string>}
 * @static
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
 *
 * @private
 * @type {Object<number, string>}
 * @static
 */

DatePlus._keysReference = {
  y: "year",
  m: "month",
  d: "day"
};
/**
 * Reference to months of a year, zero indexed
 *
 * @private
 * @type {Object<number, string>}
 * @static
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
 *
 * @param {string} date - String date to format
 * @param {string} seperator - Char the date is seperatred by
 * @returns {string} - Date with zeros
 * @public
 * @static
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
 *
 * @param {Date | DatePlus} date - Date object to format
 * @param {string} seperator - String to seperate date values with
 * @returns {string} Formatted date
 * @public
 * @static
 */


DatePlus.formatDate = function (date) {
  var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
  var month = date.getMonth().toString();
  var day = date.getDate().toString();
  var year = date.getFullYear().toString();
  return [year, month, day].join(seperator);
};
/**
 * Gets date values and outputs an object
 *
 * @param {string} date - Date to extract values from, months zero indexed
 * @param {DateFormat} format - Format of string date
 * @param {string} seperator - Seperator the date works with; leave auto for auto detection,
 *   limited to 1 char
 * @returns {Object<string, number>} Object with all values
 * @public
 * @static
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

  var dateData = date.split(_seperator);
  var dateFormat = format.split(":");
  var output = {};

  for (var index = 0; index < 3; index++) {
    var key = DatePlus._keysReference[dateFormat[index]];
    output[key] = Number(dateData[index]);
  }

  return output;
};
/**
 * Converts numerical day of week into word form (e.g 0 => "Sunday")
 *
 * @param {number} numerical - Numerical day of week, 0 indexed (0-6)
 * @returns {string} Stringed day of week
 * @public
 * @static
 */


DatePlus.getWordDay = function (numerical) {
  return DatePlus._daysReference[numerical];
};
/**
 * Converts numerical month into word form (e.g 0 => "January")
 *
 * @param {number} numerical - Numerical day of week, 0 indexed (0-11)
 * @returns {string} Stringed worded month
 * @public
 * @static
 */


DatePlus.getWordMonth = function (numerical) {
  return DatePlus._monthsReference[numerical];
};

exports.DatePlus = DatePlus;
exports.default = DatePlus;
//# sourceMappingURL=dateplus.cjs.map
