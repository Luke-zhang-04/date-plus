/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 3.0.1
 */

/**
 * Convert namespace
 * @classdesc A namespace program to convert units
 * @namespace
 */

class Convert extends Date {}
/**
 * Converts milliseconds to seconds with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with seconds and milliseconds
 */

Convert.msToSecs = ms => ({
  ms: ms % Values.MsPerSec,
  seconds: (ms - ms % Values.MsPerSec) / Values.MsPerSec
});
/**
 * Converts milliseconds to minutes with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
 */


Convert.msToMins = ms => {
  const milliseconds = ms % Values.MsPerSec % Values.MsPerSec;
  const seconds = (ms - ms % Values.MsPerSec) / Values.MsPerSec % Values.SecsPerMin;
  const minutes = (ms - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin);
  return {
    ms: milliseconds,
    seconds,
    minutes
  };
};
/**
 * Converts milliseconds to hours with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
 */


Convert.msToHrs = ms => {
  const milliseconds = ms % Values.MsPerSec % Values.MsPerSec;
  const seconds = (ms - ms % Values.MsPerSec) / Values.MsPerSec % Values.SecsPerMin;
  const minutes = (ms - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin) % Values.MinsPerHr;
  const hours = (ms - minutes * Values.MsPerSec * Values.SecsPerMin - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr);
  return {
    ms: milliseconds,
    seconds,
    minutes,
    hours
  };
};
/**
 * Converts milliseconds to days with remainders
 * @public
 * @static
 * @param {number} ms - milliseconds to convert
 * @returns {Object.<string, number>} object with days, hours, minutes, seconds, and milliseconds
 */


Convert.msToDays = ms => {
  const milliseconds = ms % Values.MsPerSec % Values.MsPerSec;
  const seconds = (ms - ms % Values.MsPerSec) / Values.MsPerSec % Values.SecsPerMin;
  const minutes = (ms - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin) % Values.MinsPerHr;
  const hours = (ms - minutes * Values.MsPerSec * Values.SecsPerMin - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr) % Values.HrsPerDay;
  const days = (ms - hours * Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr - minutes * Values.MsPerSec * Values.SecsPerMin - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr * Values.HrsPerDay);
  return {
    ms: milliseconds,
    seconds,
    minutes,
    hours,
    days
  };
};
/**
 * Converts seconds to milliseconds
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {number} converted milliseconds
 */


Convert.secsToMs = secs => secs * Values.MsPerSec;
/**
 * Converts seconds to minutes with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted minutes
 */


Convert.secsToMins = secs => Convert.msToMins(Convert.secsToMs(secs));
/**
 * Converts seconds to hours with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted hours
 */


Convert.secsToHrs = secs => Convert.msToHrs(Convert.secsToMs(secs));
/**
 * Converts seconds to days with remainders
 * @public
 * @static
 * @param {number} secs - seconds to convert
 * @returns {Object.<string, number>} converted days
 */


Convert.secsToDays = secs => Convert.msToDays(Convert.secsToMs(secs));
/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted milliseconds
 */


Convert.minsToMs = mins => mins * Values.SecsPerMin * Values.MsPerSec;
/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {number} converted seconds
 */


Convert.minsToSecs = mins => mins * Values.SecsPerMin;
/**
 * Converts minutes to hours with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted hours
 */


Convert.minsToHrs = mins => Convert.msToHrs(Convert.minsToMs(mins));
/**
 * Converts minutes to days with remainders
 * @public
 * @static
 * @param {number} mins - minutes to convert
 * @returns {Object.<string, number>} converted days
 */


Convert.minsToDays = mins => Convert.msToDays(Convert.minsToMs(mins));
/**
 * Converts hours to milliseconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted milliseconds
 */


Convert.hrsToMs = hours => hours * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec;
/**
 * Converts hours to seconds
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted seconds
 */


Convert.hrsToSecs = hours => hours * Values.MinsPerHr * Values.SecsPerMin;
/**
 * Converts hours to minutes
 * @public
 * @static
 * @param {number} hours - hours to convert
 * @returns {number} converted minutes
 */


Convert.hrsToMins = hours => hours * Values.MinsPerHr;
/**
 * Converts hours to days with remainders
 * @public
 * @static
 * @param {number} hrs - hours to convert
 * @returns {Object.<string, number>} converted days
 */


Convert.hrsToDays = hrs => Convert.msToDays(Convert.hrsToMs(hrs));
/**
 * Converts days to milliseconds
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted milliseconds
 */


Convert.daysToMs = days => days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec;
/**
 * Converts days to seconds
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted seconds
 */


Convert.daysToSecs = days => days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin;
/**
 * Converts days to minutes
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted minutes
 */


Convert.daysToMins = days => days * Values.HrsPerDay * Values.MinsPerHr;
/**
 * Converts days to hours
 * @public
 * @static
 * @param {number} days - days to convert
 * @returns {number} converted hours
 */


Convert.daysToHrs = days => days * Values.HrsPerDay;

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


class Elapse extends Convert {
  constructor() {
    super(...arguments);
    /**
     * Calculates number of elapsed days between instantiated date and dae
     * @public
     * @instance
     * @param {Date | DatePlus} date - ending date object to calculate
     * @returns {number} - number of elapsed days
     */

    this.getElapsedDays = date => Math.round((this.getTime() - date.getTime()) / Elapse._oneDay) * -1;
  }

}
/**
 * Gets milliseconds per day
 * @private
 * @static
 * @type {number}
 */

Elapse._oneDay = Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec;
/**
 * Calculates number of elapsed days between date1 and date2
 * @public
 * @static
 * @param {Date | DatePlus} date1 - starting date object to calculate
 * @param {Date | DatePlus} date2 - ending date object to calculate
 * @returns {number} - number of elapsed days
 */

Elapse.getElapsedDays = (date1, date2) => Math.round((date1.getTime() - date2.getTime()) / Elapse._oneDay) * -1;

class Alias extends Elapse {}
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

/**
 * Dateplus class and namespace
 * @classdesc A class and namespace program to assist with date manipulation
 * @class
 * @namespace
 */

class DatePlus extends Alias {
  constructor() {
    super(...arguments);
    /**
     * Add's 0s to the instantiated (e.g 2020/4/3 => 2020/04/03)
     * @public
     * @instance
     * @param {string} seperator - char the date is seperatred by
     * @returns {string} - date with zeros
     */

    this.addZeros = (seperator = "/") => DatePlus.addZeros(this.formatDate(), seperator);
    /**
     * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
     * @public
     * @instance
     * @param {string} seperator - char to seperate date with
     * @returns {string} formatted date
     */


    this.formatDate = (seperator = "/") => DatePlus.formatDate(this, seperator);
    /**
     * Gets instantiated day of week in word form (e.g 0 => "Sunday")
     * @public
     * @instance
     * @returns {string} stringed day of week
     */


    this.getWordDay = () => DatePlus._daysReference[this.getDay()];
    /**
     * Gets instantiated month in word form (e.g 0 => "January")
     * @public
     * @instance
     * @returns {string} stringed worded month
     */


    this.getWordMonth = () => DatePlus._monthsReference[this.getMonth()];
  }

}
/**
 * Reference to days of the week, zero indexed
 * @private
 * @static
 * @type {Object.<number, string>}
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

DatePlus.addZeros = (date, seperator = "/") => {
  let newDate = "";

  for (let index = 0; index < 2; index++) {
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


DatePlus.formatDate = (date, seperator = "/") => {
  const month = date.getMonth().toString();
  const day = date.getDate().toString();
  const year = date.getFullYear().toString();
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


DatePlus.getDateValues = (date, format = "y:m:d", seperator = "auto") => {
  let _seperator = "/";

  if (seperator === "auto") {
    for (const letter of date) {
      if (isNaN(Number(letter))) {
        _seperator = letter;
        break;
      }
    }
  } else {
    _seperator = seperator;
  }

  const dateData = date.split(_seperator);
  const dateFormat = format.split(":");
  const output = {};

  for (let index = 0; index < 3; index++) {
    const key = DatePlus._keysReference[dateFormat[index]];
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


DatePlus.getWordDay = numerical => DatePlus._daysReference[numerical];
/**
 * Converts numerical month into word form (e.g 0 => "January")
 * @public
 * @static
 * @param {number} numerical - numerical day of week, 0 indexed (0-11)
 * @returns {string} stringed worded month
 */


DatePlus.getWordMonth = numerical => DatePlus._monthsReference[numerical];

export default DatePlus;
export { DatePlus };
//# sourceMappingURL=dateplus.js.map
