/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 3.0.0
 */

'use strict';

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
 * @classdesc A namespace program to convert units
 * @namespace
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
    ms: ms % Values.MsPerSec,
    seconds: (ms - ms % Values.MsPerSec) / Values.MsPerSec
  };
};
/**
 * Converts milliseconds to minutes with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
 */


Convert.msToMins = function (ms) {
  var milliseconds = ms % Values.MsPerSec % Values.MsPerSec;
  var seconds = (ms - ms % Values.MsPerSec) / Values.MsPerSec % Values.SecsPerMin;
  var minutes = (ms - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin);
  return {
    ms: milliseconds,
    seconds: seconds,
    minutes: minutes
  };
};
/**
 * Converts milliseconds to hours with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
 */


Convert.msToHrs = function (ms) {
  var milliseconds = ms % Values.MsPerSec % Values.MsPerSec;
  var seconds = (ms - ms % Values.MsPerSec) / Values.MsPerSec % Values.SecsPerMin;
  var minutes = (ms - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin) % Values.MinsPerHr;
  var hours = (ms - minutes * Values.MsPerSec * Values.SecsPerMin - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr);
  return {
    ms: milliseconds,
    seconds: seconds,
    minutes: minutes,
    hours: hours
  };
};
/**
 * Converts milliseconds to days with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with days, hours, minutes, seconds, and milliseconds
 */


Convert.msToDays = function (ms) {
  var milliseconds = ms % Values.MsPerSec % Values.MsPerSec;
  var seconds = (ms - ms % Values.MsPerSec) / Values.MsPerSec % Values.SecsPerMin;
  var minutes = (ms - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin) % Values.MinsPerHr;
  var hours = (ms - minutes * Values.MsPerSec * Values.SecsPerMin - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr) % Values.HrsPerDay;
  var days = (ms - hours * Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr - minutes * Values.MsPerSec * Values.SecsPerMin - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr * Values.HrsPerDay);
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
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {number} converted milliseconds
 */


Convert.secsToMs = function (secs) {
  return secs * Values.MsPerSec;
};
/**
 * Converts seconds to minutes with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted minutes
 */


Convert.secsToMins = function (secs) {
  return Convert.msToMins(Convert.secsToMs(secs));
};
/**
 * Converts seconds to hours with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted hours
 */


Convert.secsToHrs = function (secs) {
  return Convert.msToHrs(Convert.secsToMs(secs));
};
/**
 * Converts seconds to days with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted days
 */


Convert.secsToDays = function (secs) {
  return Convert.msToDays(Convert.secsToMs(secs));
};
/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted milliseconds
 */


Convert.minsToMs = function (mins) {
  return mins * Values.SecsPerMin * Values.MsPerSec;
};
/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted seconds
 */


Convert.minsToSecs = function (mins) {
  return mins * Values.SecsPerMin;
};
/**
 * Converts minutes to hours with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted hours
 */


Convert.minsToHrs = function (mins) {
  return Convert.msToHrs(Convert.minsToMs(mins));
};
/**
 * Converts minutes to days with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted days
 */


Convert.minsToDays = function (mins) {
  return Convert.msToDays(Convert.minsToMs(mins));
};
/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted milliseconds
 */


Convert.hrsToMs = function (hours) {
  return hours * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec;
};
/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted seconds
 */


Convert.hrsToSecs = function (hours) {
  return hours * Values.MinsPerHr * Values.SecsPerMin;
};
/**
 * Converts hours to minutes
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted minutes
 */


Convert.hrsToMins = function (hours) {
  return hours * Values.MinsPerHr;
};
/**
 * Converts hours to days with remainders
 * @public
 * @static
 * @param {number} hrs - hours to convert
 * @returns {Object.<string, number>} converted days
 */


Convert.hrsToDays = function (hrs) {
  return Convert.msToDays(Convert.hrsToMs(hrs));
};
/**
 * Converts days to milliseconds
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted milliseconds
 */


Convert.daysToMs = function (days) {
  return days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec;
};
/**
 * Converts days to seconds
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted seconds
 */


Convert.daysToSecs = function (days) {
  return days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin;
};
/**
 * Converts days to minutes
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted minutes
 */


Convert.daysToMins = function (days) {
  return days * Values.HrsPerDay * Values.MinsPerHr;
};
/**
 * Converts days to hours
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted hours
 */


Convert.daysToHrs = function (days) {
  return days * Values.HrsPerDay;
};

var Values;

(function (Values) {
  Values[Values["HrsPerDay"] = 24] = "HrsPerDay";
  Values[Values["MinsPerHr"] = 60] = "MinsPerHr";
  Values[Values["SecsPerMin"] = 60] = "SecsPerMin";
  Values[Values["MsPerSec"] = 1000] = "MsPerSec";
})(Values || (Values = {}));
/**
 * Elapse class and namespace
 * @classdesc A class and namespace program to find elapsed times
 * @class
 * @namespace
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
     * @public
     * @instance
     * @param {Date | DatePlus} date - ending date object to calculate
     * @returns {number} - number of elapsed days
     */

    _this.getElapsedDays = function (date) {
      return Math.round((_this.getTime() - date.getTime()) / Elapse._oneDay) * -1;
    };

    return _this;
  }

  return Elapse;
}(Convert);
Elapse._oneDay = Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec;
/**
 * Calculates number of elapsed days between date1 and date2
 * @public
 * @static
 * @param {Date | DatePlus} date1 - starting date object to calculate
 * @param {Date | DatePlus} date2 - ending date object to calculate
 * @returns {number} - number of elapsed days
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

/**
 * Dateplus class and namespace
 * @classdesc A class and namespace program to assist with date manipulation
 * @class
 * @namespace
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

    return _this;
  }

  return DatePlus;
}(Alias);
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
 * @private
 * @static
 * @type {Object.<number, string>}
 */

DatePlus._keysReference = {
  y: "year",
  m: "month",
  d: "day"
};
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
  var month = date.getMonth().toString();
  var day = date.getDate().toString();
  var year = date.getFullYear().toString();
  return [year, month, day].join(seperator);
};
/**
 * Gets date values and outputs an object
 * @public
 * @static
 * @param {string} date - date to extract values from, months zero indexed
 * @param {DateFormat}format - format of string date
 * @param {string} seperator - Seperator the date works with; leave auto for auto detection, limited to 1 char
 * @returns {Object<string, number>} object with all values
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

module.exports = DatePlus;
//# sourceMappingURL=dateplus.cjs.map
