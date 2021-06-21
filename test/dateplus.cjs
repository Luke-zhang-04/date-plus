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

/**
 * Converts milliseconds to seconds with remainders
 *
 * @param ms - Milliseconds to convert
 * @returns Object with seconds and milliseconds
 */
const msToSecs = ms => ({
  ms: ms % 1000,
  seconds: (ms - ms % 1000) / 1000
});
const msToSeconds = msToSecs;
/**
 * Converts milliseconds to minutes with remainders
 *
 * @param ms - Milliseconds to convert
 * @returns Object with minutes, seconds, and milliseconds
 */

const msToMins = ms => {
  const milliseconds = ms % 1000 % 1000;
  const seconds = (ms - ms % 1000) / 1000 % 60;
  const minutes = (ms - seconds * 1000 - milliseconds) / (1000 * 60);
  return {
    ms: milliseconds,
    seconds,
    minutes
  };
};
const msToMinutes = msToMins;
/**
 * Converts milliseconds to hours with remainders
 *
 * @param ms - Milliseconds to convert
 * @returns Object with hours, minutes, seconds, and milliseconds
 */

const msToHrs = ms => {
  const milliseconds = ms % 1000 % 1000;
  const seconds = (ms - ms % 1000) / 1000 % 60;
  const minutes = (ms - seconds * 1000 - milliseconds) / (1000 * 60) % 60;
  const hours = (ms - minutes * 1000 * 60 - seconds * 1000 - milliseconds) / (1000 * 60 * 60);
  return {
    ms: milliseconds,
    seconds,
    minutes,
    hours
  };
};
const msToHours = msToHrs;
/**
 * Converts milliseconds to days with remainders
 *
 * @param ms - Milliseconds to convert
 * @returns Object with days, hours, minutes, seconds, and milliseconds
 */

const msToDays = ms => {
  const milliseconds = ms % 1000 % 1000;
  const seconds = (ms - ms % 1000) / 1000 % 60;
  const minutes = (ms - seconds * 1000 - milliseconds) / (1000 * 60) % 60;
  const hours = (ms - minutes * 1000 * 60 - seconds * 1000 - milliseconds) / (1000 * 60 * 60) % 24;
  const days = (ms - hours * 1000 * 60 * 60 - minutes * 1000 * 60 - seconds * 1000 - milliseconds) / (1000 * 60 * 60 * 24);
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
 *
 * @param secs - Seconds to convert
 * @returns Converted milliseconds
 */

const secsToMs = secs => secs * 1000;
const secondsToMs = secsToMs;
/**
 * Converts seconds to minutes with remainders
 *
 * @param secs - Seconds to convert
 * @returns Converted minutes
 */

const secsToMins = secs => msToMins(secsToMs(secs));
const secondsToMinutes = secsToMins;
/**
 * Converts seconds to hours with remainders
 *
 * @param secs - Seconds to convert
 * @returns Converted hours
 */

const secsToHrs = secs => msToHrs(secsToMs(secs));
const secondsToHours = secsToHrs;
/**
 * Converts seconds to days with remainders
 *
 * @param secs - Seconds to convert
 * @returns Converted days
 */

const secsToDays = secs => msToDays(secsToMs(secs));
const secondsToDays = secsToDays;
/**
 * Converts hours to milliseconds
 *
 * @param mins - Minutes to convert
 * @returns Converted milliseconds
 */

const minsToMs = mins => mins * 60 * 1000;
const minutesToMs = secsToDays;
/**
 * Converts hours to seconds
 *
 * @param mins - Minutes to convert
 * @returns Converted seconds
 */

const minsToSecs = mins => mins * 60;
const minutesToSeconds = minsToSecs;
/**
 * Converts minutes to hours with remainders
 *
 * @param mins - Minutes to convert
 * @returns Converted hours
 */

const minsToHrs = mins => msToHrs(minsToMs(mins));
const minutesToHours = minsToHrs;
/**
 * Converts minutes to days with remainders
 *
 * @param mins - Minutes to convert
 * @returns Converted days
 */

const minsToDays = mins => msToDays(minsToMs(mins));
const minutesToDays = minsToDays;
/**
 * Converts hours to milliseconds
 *
 * @param hours - Hours to convert
 * @returns Converted milliseconds
 */

const hrsToMs = hours => hours * 60 * 60 * 1000;
const hoursToMs = hrsToMs;
/**
 * Converts hours to seconds
 *
 * @param hours - Hours to convert
 * @returns Converted seconds
 */

const hrsToSecs = hours => hours * 60 * 60;
const hoursToSeconds = hrsToSecs;
/**
 * Converts hours to minutes
 *
 * @param hours - Hours to convert
 * @returns Converted minutes
 */

const hrsToMins = hours => hours * 60;
const hoursToMinutes = hrsToMins;
/**
 * Converts hours to days with remainders
 *
 * @param hrs - Hours to convert
 * @returns Converted days
 */

const hrsToDays = hrs => msToDays(hrsToMs(hrs));
const hoursToDays = hrsToDays;
/**
 * Converts days to milliseconds
 *
 * @param days - Days to convert
 * @returns Converted milliseconds
 */

const daysToMs = days => days * 24 * 60 * 60 * 1000;
/**
 * Converts days to seconds
 *
 * @param days - Days to convert
 * @returns Converted seconds
 */

const daysToSecs = days => days * 24 * 60 * 60;
const daysToSeconds = daysToSecs;
/**
 * Converts days to minutes
 *
 * @param days - Days to convert
 * @returns Converted minutes
 */

const daysToMins = days => days * 24 * 60;
const daysToMinutes = daysToMins;
/**
 * Converts days to hours
 *
 * @param days - Days to convert
 * @returns Converted hours
 */

const daysToHrs = days => days * 24;
const daysToHours = daysToHrs;

var conversions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    msToSecs: msToSecs,
    msToSeconds: msToSeconds,
    msToMins: msToMins,
    msToMinutes: msToMinutes,
    msToHrs: msToHrs,
    msToHours: msToHours,
    msToDays: msToDays,
    secsToMs: secsToMs,
    secondsToMs: secondsToMs,
    secsToMins: secsToMins,
    secondsToMinutes: secondsToMinutes,
    secsToHrs: secsToHrs,
    secondsToHours: secondsToHours,
    secsToDays: secsToDays,
    secondsToDays: secondsToDays,
    minsToMs: minsToMs,
    minutesToMs: minutesToMs,
    minsToSecs: minsToSecs,
    minutesToSeconds: minutesToSeconds,
    minsToHrs: minsToHrs,
    minutesToHours: minutesToHours,
    minsToDays: minsToDays,
    minutesToDays: minutesToDays,
    hrsToMs: hrsToMs,
    hoursToMs: hoursToMs,
    hrsToSecs: hrsToSecs,
    hoursToSeconds: hoursToSeconds,
    hrsToMins: hrsToMins,
    hoursToMinutes: hoursToMinutes,
    hrsToDays: hrsToDays,
    hoursToDays: hoursToDays,
    daysToMs: daysToMs,
    daysToSecs: daysToSecs,
    daysToSeconds: daysToSeconds,
    daysToMins: daysToMins,
    daysToMinutes: daysToMinutes,
    daysToHrs: daysToHrs,
    daysToHours: daysToHours
});

const values = {
  hrsPerDay: 24,
  minsPerHr: 60,
  secsPerMin: 60,
  msPerSec: 1000
};
const daysReference = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};
const monthsReference = {
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
const oneMinute = 60 * 1000;
const oneHour = 60 * oneMinute;
const oneDay = 24 * oneHour;

var values$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    values: values,
    daysReference: daysReference,
    monthsReference: monthsReference,
    oneMinute: oneMinute,
    oneHour: oneHour,
    oneDay: oneDay
});

const keysReference = {
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

const addZeros = (date, seperator = "/") => {
  let newDate = "";

  for (let index = 0; index < 2; index++) {
    if (date.split(seperator)[index].length < 2) {
      newDate += `0${date.split(seperator)[index]}${seperator}`;
    } else {
      newDate += `${date.split(seperator)[index]}${seperator}`;
    }
  }

  if (date.split(seperator)[2].length < 2) {
    newDate += `0${date.split(seperator)[2]}`;
  } else {
    newDate += date.split(seperator)[2];
  }

  return newDate;
};
/**
 * Format date into a string in the form YYYY{seperator}MM{seperator}DD
 *
 * @param {Date} date - Date object to format
 * @param seperator - String to seperate date values with
 * @returns Formatted date
 */

const formatDate = (date, seperator = "/") => {
  const month = date.getMonth().toString();
  const day = date.getDate().toString();
  const year = date.getFullYear().toString();
  return [year, month, day].join(seperator);
};
/**
 * Gets date values and outputs an object
 *
 * @param date - Date to extract values from, months zero indexed
 * @param format - Format of string date
 * @param seperator - Seperator the date works with; leave auto for auto detection, limited to 1 char
 * @returns Object with all values
 */

const getDateValues = (date, format = "y:m:d", seperator = "auto") => {
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
    const key = keysReference[dateFormat[index]];
    output[key] = Number(dateData[index]);
  }

  return output;
};
/**
 * Converts numerical day of week into word form (e.g 0 => "Sunday")
 *
 * @param numerical - Numerical day of week, 0 indexed (0-6)
 * @returns Stringed day of week
 */

const getWordDay = numerical => daysReference[numerical];
/**
 * Converts numerical month into word form (e.g 0 => "January")
 *
 * @param numerical - Numerical day of week, 0 indexed (0-11)
 * @returns Stringed worded month
 */

const getWordMonth = numerical => monthsReference[numerical];
/**
 * Calculates number of elapsed days between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed days
 */

const getElapsedDays = (date1, date2) => Math.round((date1.getTime() - date2.getTime()) / oneDay) * -1;
/**
 * Calculates number of elapsed hours between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed hours
 */

const getElapsedHours = (date1, date2) => Math.round((date1.getTime() - date2.getTime()) / oneHour) * -1;
/**
 * Calculates number of elapsed minutes between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed minutes
 */

const getElapsedMinutes = (date1, date2) => Math.round((date1.getTime() - date2.getTime()) / oneMinute) * -1;
/**
 * Calculates number of elapsed seconds between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed seconds
 */

const getElapsedSeconds = (date1, date2) => Math.round((date1.getTime() - date2.getTime()) / 1000) * -1;
/**
 * Calculates number of elapsed milliseconds between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed milliseconds
 */

const getElapsedMs = (date1, date2) => Math.round(date1.getTime() - date2.getTime()) * -1;
/**
 * Calculates elapsed time between current and previous
 *
 * @param start- Start date
 * @param end - End date
 * @param approx - Text to append to values from days and on, e.g *about* 1 day aga
 * @returns Time difference in string form, e.g "3 seconds ago"
 */

const getElapsedString = (start, end, approx = "about") => {
  const daysPerMonth = 30;
  const daysPerYear = 365;
  const msPerMonth = oneDay * daysPerMonth;
  const msPerYear = oneDay * daysPerYear;
  const elapsed = getElapsedMs(start, end);
  let val;

  if (elapsed < oneMinute) {
    val = Math.round(elapsed / 1000);
    return `${val} second${val === 1 ? "" : "s"} ago`;
  } else if (elapsed < oneHour) {
    val = Math.round(elapsed / oneMinute);
    return `${val} minute${val === 1 ? "" : "s"} ago`;
  } else if (elapsed < oneDay) {
    val = Math.round(elapsed / oneHour);
    return `${val} hour${val === 1 ? "" : "s"} ago`;
  } else if (elapsed < msPerMonth) {
    val = Math.round(elapsed / oneDay);
    return `${approx} ${val} day${val === 1 ? "" : "s"} ago`;
  } else if (elapsed < msPerYear) {
    val = Math.round(elapsed / msPerMonth);
    return `${approx} ${val} month${val === 1 ? "" : "s"} ago`;
  }

  val = Math.round(elapsed / msPerYear);
  return `${approx} ${val} year${val === 1 ? "" : "s"} ago`;
};

var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addZeros: addZeros,
    formatDate: formatDate,
    getDateValues: getDateValues,
    getWordDay: getWordDay,
    getWordMonth: getWordMonth,
    getElapsedDays: getElapsedDays,
    getElapsedHours: getElapsedHours,
    getElapsedMinutes: getElapsedMinutes,
    getElapsedSeconds: getElapsedSeconds,
    getElapsedMs: getElapsedMs,
    getElapsedString: getElapsedString
});

class DatePlus extends Date {
  constructor() {
    super(...arguments);
    /**
     * Calculates elapsed time between current and previous
     *
     * @param date - End date
     * @param approx - Text to append to values from days and on, e.g *about* 1 day aga
     * @returns Time difference in string form, e.g "3 seconds ago"
     */

    this.getElapsedString = (date, approx = "about") => getElapsedString(this, date, approx);
  }
  /**
   * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
   *
   * @param date - String date to format
   * @param seperator - Char the date is seperatred by
   * @returns - Date with zeros
   */


  addZeros(seperator = "/") {
    return addZeros(this.formatDate(), seperator);
  }
  /**
   * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
   *
   * @param seperator - Char to seperate date with
   * @returns Formatted date
   */


  formatDate(seperator = "/") {
    return formatDate(this, seperator);
  }
  /**
   * Gets instantiated day of week in word form (e.g 0 => "Sunday")
   *
   * @returns Stringed day of week
   */


  getWordDay() {
    return daysReference[this.getDay()];
  }
  /**
   * Gets instantiated month in word form (e.g 0 => "January")
   *
   * @returns Stringed worded month
   */


  getWordMonth() {
    return monthsReference[this.getMonth()];
  }
  /**
   * Calculates number of elapsed days between instantiated date and dae
   *
   * @param date - Ending date object to calculate
   * @returns - Number of elapsed days
   */


  getElapsedDays(date) {
    return getElapsedDays(this, date);
  }
  /**
   * Calculates number of elapsed hours between date1 and date2
   *
   * @param date - Ending date object to calculate
   * @returns - Number of elapsed hours
   */


  getElapsedHours(date) {
    return getElapsedHours(this, date);
  }
  /**
   * Calculates number of elapsed minutes between date1 and date2
   *
   * @param date - Ending date object to calculate
   * @returns - Number of elapsed minutes
   */


  getElapsedMinutes(date) {
    return getElapsedMinutes(this, date);
  }
  /**
   * Calculates number of elapsed seconds between date1 and date2
   *
   * @param date - Ending date object to calculate
   * @returns - Number of elapsed seconds
   */


  getElapsedSeconds(date) {
    return getElapsedSeconds(this, date);
  }
  /**
   * Calculates number of elapsed milliseconds between date1 and date2
   *
   * @param date - Ending date object to calculate
   * @returns - Number of elapsed milliseconds
   */


  getElapsedMs(date) {
    return getElapsedMs(this, date);
  }

}

for (const [key, value] of Object.entries(Object.assign(Object.assign(Object.assign({}, conversions), utils), values$1))) {
  // @ts-expect-error
  DatePlus[key] = value;
}

exports.DatePlus = DatePlus;
exports.conversions = conversions;
exports.default = DatePlus;
exports.utils = utils;
exports.values = values$1;
//# sourceMappingURL=dateplus.cjs.map
