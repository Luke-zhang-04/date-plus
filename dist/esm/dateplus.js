/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 3.1.0
 */

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
/**
 * Converts seconds to minutes with remainders
 *
 * @param secs - Seconds to convert
 * @returns Converted minutes
 */

const secsToMins = secs => msToMins(secsToMs(secs));
/**
 * Converts seconds to hours with remainders
 *
 * @param secs - Seconds to convert
 * @returns Converted hours
 */

const secsToHrs = secs => msToHrs(secsToMs(secs));
/**
 * Converts seconds to days with remainders
 *
 * @param secs - Seconds to convert
 * @returns Converted days
 */

const secsToDays = secs => msToDays(secsToMs(secs));
/**
 * Converts hours to milliseconds
 *
 * @param mins - Minutes to convert
 * @returns Converted milliseconds
 */

const minsToMs = mins => mins * 60 * 1000;
/**
 * Converts hours to seconds
 *
 * @param mins - Minutes to convert
 * @returns Converted seconds
 */

const minsToSecs = mins => mins * 60;
/**
 * Converts minutes to hours with remainders
 *
 * @param mins - Minutes to convert
 * @returns Converted hours
 */

const minsToHrs = mins => msToHrs(minsToMs(mins));
/**
 * Converts minutes to days with remainders
 *
 * @param mins - Minutes to convert
 * @returns Converted days
 */

const minsToDays = mins => msToDays(minsToMs(mins));
/**
 * Converts hours to milliseconds
 *
 * @param hours - Hours to convert
 * @returns Converted milliseconds
 */

const hrsToMs = hours => hours * 60 * 60 * 1000;
/**
 * Converts hours to seconds
 *
 * @param hours - Hours to convert
 * @returns Converted seconds
 */

const hrsToSecs = hours => hours * 60 * 60;
/**
 * Converts hours to minutes
 *
 * @param hours - Hours to convert
 * @returns Converted minutes
 */

const hrsToMins = hours => hours * 60;
/**
 * Converts hours to days with remainders
 *
 * @param hrs - Hours to convert
 * @returns Converted days
 */

const hrsToDays = hrs => msToDays(hrsToMs(hrs));
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
/**
 * Converts days to minutes
 *
 * @param days - Days to convert
 * @returns Converted minutes
 */

const daysToMins = days => days * 24 * 60;
/**
 * Converts days to hours
 *
 * @param days - Days to convert
 * @returns Converted hours
 */

const daysToHrs = days => days * 24;

var conversions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    msToSecs: msToSecs,
    msToMins: msToMins,
    msToHrs: msToHrs,
    msToDays: msToDays,
    secsToMs: secsToMs,
    secsToMins: secsToMins,
    secsToHrs: secsToHrs,
    secsToDays: secsToDays,
    minsToMs: minsToMs,
    minsToSecs: minsToSecs,
    minsToHrs: minsToHrs,
    minsToDays: minsToDays,
    hrsToMs: hrsToMs,
    hrsToSecs: hrsToSecs,
    hrsToMins: hrsToMins,
    hrsToDays: hrsToDays,
    daysToMs: daysToMs,
    daysToSecs: daysToSecs,
    daysToMins: daysToMins,
    daysToHrs: daysToHrs
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
const oneDay = 24 * 60 * 60 * 1000;

var values$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    values: values,
    daysReference: daysReference,
    monthsReference: monthsReference,
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

var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addZeros: addZeros,
    formatDate: formatDate,
    getDateValues: getDateValues,
    getWordDay: getWordDay,
    getWordMonth: getWordMonth,
    getElapsedDays: getElapsedDays
});

class DatePlus extends Date {
  constructor() {
    super(...arguments);
    /**
     * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
     *
     * @param date - String date to format
     * @param seperator - Char the date is seperatred by
     * @returns - Date with zeros
     */

    this.addZeros = (seperator = "/") => addZeros(this.formatDate(), seperator);
    /**
     * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
     *
     * @param seperator - Char to seperate date with
     * @returns Formatted date
     */


    this.formatDate = (seperator = "/") => formatDate(this, seperator);
    /**
     * Gets instantiated day of week in word form (e.g 0 => "Sunday")
     *
     * @returns Stringed day of week
     */


    this.getWordDay = () => daysReference[this.getDay()];
    /**
     * Gets instantiated month in word form (e.g 0 => "January")
     *
     * @returns Stringed worded month
     */


    this.getWordMonth = () => monthsReference[this.getMonth()];
    /**
     * Calculates number of elapsed days between instantiated date and dae
     *
     * @param date - Ending date object to calculate
     * @returns - Number of elapsed days
     */


    this.getElapsedDays = date => Math.round((this.getTime() - date.getTime()) / oneDay) * -1;
  }

}

for (const [key, value] of Object.entries(Object.assign(Object.assign(Object.assign({}, conversions), utils), values$1))) {
  // @ts-expect-error
  DatePlus[key] = value;
}

export default DatePlus;
export { DatePlus, conversions, utils, values$1 as values };
//# sourceMappingURL=dateplus.js.map
