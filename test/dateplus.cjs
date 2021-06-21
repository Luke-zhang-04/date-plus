/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 3.1.0
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

"use strict"

Object.defineProperty(exports, "__esModule", {value: true})

/**
 * Convert namespace
 *
 * @namespace
 * @classdesc A namespace program to convert units
 */
class Convert extends Date {}
/**
 * Converts milliseconds to seconds with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with seconds and milliseconds
 * @public
 * @static
 */

Convert.msToSecs = (ms) => ({
    ms: ms % 1000,
    seconds: (ms - (ms % 1000)) / 1000,
})
/**
 * Converts milliseconds to minutes with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with minutes, seconds, and milliseconds
 * @public
 * @static
 */

Convert.msToMins = (ms) => {
    const milliseconds = (ms % 1000) % 1000
    const seconds = ((ms - (ms % 1000)) / 1000) % 60
    const minutes = (ms - seconds * 1000 - milliseconds) / (1000 * 60)
    return {
        ms: milliseconds,
        seconds,
        minutes,
    }
}
/**
 * Converts milliseconds to hours with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with hours, minutes, seconds, and milliseconds
 * @public
 * @static
 */

Convert.msToHrs = (ms) => {
    const milliseconds = (ms % 1000) % 1000
    const seconds = ((ms - (ms % 1000)) / 1000) % 60
    const minutes = ((ms - seconds * 1000 - milliseconds) / (1000 * 60)) % 60
    const hours = (ms - minutes * 1000 * 60 - seconds * 1000 - milliseconds) / (1000 * 60 * 60)
    return {
        ms: milliseconds,
        seconds,
        minutes,
        hours,
    }
}
/**
 * Converts milliseconds to days with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with days, hours, minutes, seconds, and milliseconds
 * @public
 * @static
 */

Convert.msToDays = (ms) => {
    const milliseconds = (ms % 1000) % 1000
    const seconds = ((ms - (ms % 1000)) / 1000) % 60
    const minutes = ((ms - seconds * 1000 - milliseconds) / (1000 * 60)) % 60
    const hours =
        ((ms - minutes * 1000 * 60 - seconds * 1000 - milliseconds) / (1000 * 60 * 60)) % 24
    const days =
        (ms - hours * 1000 * 60 * 60 - minutes * 1000 * 60 - seconds * 1000 - milliseconds) /
        (1000 * 60 * 60 * 24)
    return {
        ms: milliseconds,
        seconds,
        minutes,
        hours,
        days,
    }
}
/**
 * Converts seconds to milliseconds
 *
 * @param {number} secs - Seconds to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Convert.secsToMs = (secs) => secs * 1000
/**
 * Converts seconds to minutes with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted minutes
 * @public
 * @static
 */

Convert.secsToMins = (secs) => Convert.msToMins(Convert.secsToMs(secs))
/**
 * Converts seconds to hours with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted hours
 * @public
 * @static
 */

Convert.secsToHrs = (secs) => Convert.msToHrs(Convert.secsToMs(secs))
/**
 * Converts seconds to days with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */

Convert.secsToDays = (secs) => Convert.msToDays(Convert.secsToMs(secs))
/**
 * Converts hours to milliseconds
 *
 * @param {number} mins - Minutes to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Convert.minsToMs = (mins) => mins * 60 * 1000
/**
 * Converts hours to seconds
 *
 * @param {number} mins - Minutes to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */

Convert.minsToSecs = (mins) => mins * 60
/**
 * Converts minutes to hours with remainders
 *
 * @param {number} mins - Minutes to convert
 * @returns {Object<string, number>} Converted hours
 * @public
 * @static
 */

Convert.minsToHrs = (mins) => Convert.msToHrs(Convert.minsToMs(mins))
/**
 * Converts minutes to days with remainders
 *
 * @param {number} mins - Minutes to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */

Convert.minsToDays = (mins) => Convert.msToDays(Convert.minsToMs(mins))
/**
 * Converts hours to milliseconds
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Convert.hrsToMs = (hours) => hours * 60 * 60 * 1000
/**
 * Converts hours to seconds
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */

Convert.hrsToSecs = (hours) => hours * 60 * 60
/**
 * Converts hours to minutes
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted minutes
 * @public
 * @static
 */

Convert.hrsToMins = (hours) => hours * 60
/**
 * Converts hours to days with remainders
 *
 * @param {number} hrs - Hours to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */

Convert.hrsToDays = (hrs) => Convert.msToDays(Convert.hrsToMs(hrs))
/**
 * Converts days to milliseconds
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Convert.daysToMs = (days) => days * 24 * 60 * 60 * 1000
/**
 * Converts days to seconds
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */

Convert.daysToSecs = (days) => days * 24 * 60 * 60
/**
 * Converts days to minutes
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted minutes
 * @public
 * @static
 */

Convert.daysToMins = (days) => days * 24 * 60
/**
 * Converts days to hours
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted hours
 * @public
 * @static
 */

Convert.daysToHrs = (days) => days * 24

/**
 * Elapse class and namespace
 *
 * @namespace
 * @class
 * @classdesc A class and namespace program to find elapsed times
 */

class Elapse extends Convert {
    constructor() {
        super(...arguments)
        /**
         * Calculates number of elapsed days between instantiated date and dae
         *
         * @param {Date | DatePlus} date - Ending date object to calculate
         * @returns {number} - Number of elapsed days
         * @public
         * @instance
         */

        this.getElapsedDays = (date) =>
            Math.round((this.getTime() - date.getTime()) / Elapse._oneDay) * -1
    }
}
/**
 * Gets milliseconds per day
 *
 * @private
 * @type {number}
 * @static
 */

Elapse._oneDay = 24 * 60 * 60 * 1000
/**
 * Calculates number of elapsed days between date1 and date2
 *
 * @param {Date | DatePlus} date1 - Starting date object to calculate
 * @param {Date | DatePlus} date2 - Ending date object to calculate
 * @returns {number} - Number of elapsed days
 * @public
 * @static
 */

Elapse.getElapsedDays = (date1, date2) =>
    Math.round((date1.getTime() - date2.getTime()) / Elapse._oneDay) * -1

class Alias extends Elapse {}
/**
 * Converts milliseconds to seconds with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with seconds and milliseconds
 * @public
 * @static
 */

Alias.msToSeconds = Alias.msToSecs
/**
 * Converts milliseconds to minutes with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with minutes, seconds, and milliseconds
 * @public
 * @static
 */

Alias.msToMinutes = Alias.msToMins
/**
 * Converts milliseconds to hours with remainders
 *
 * @param {number} ms - Milliseconds to convert
 * @returns {Object<string, number>} Object with hours, minutes, seconds, and milliseconds
 * @public
 * @static
 */

Alias.msToHours = Alias.msToHrs
/**
 * Converts seconds to milliseconds
 *
 * @param {number} secs - Seconds to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Alias.secondsToMs = Alias.secsToMs
/**
 * Converts seconds to minutes with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted minutes
 * @public
 * @static
 */

Alias.secondsToMinutes = Alias.secsToMins
/**
 * Converts seconds to hours with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted hours
 * @public
 * @static
 */

Alias.secondsToHours = Alias.secsToHrs
/**
 * Converts seconds to days with remainders
 *
 * @param {number} secs - Seconds to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */

Alias.secondsToDays = Alias.secsToDays
/**
 * Converts hours to milliseconds
 *
 * @param {number} mins - Minutes to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Alias.minutesToMs = Alias.minsToMs
/**
 * Converts hours to seconds
 *
 * @param {number} mins - Minutes to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */

Alias.minutesToSeconds = Alias.minsToSecs
/**
 * Converts minutes to hours with remainders
 *
 * @param {number} mins - Minutes to convert
 * @returns {Object<string, number>} Converted hours
 * @public
 * @static
 */

Alias.minutesToHours = Alias.minsToHrs
/**
 * Converts minutes to days with remainders
 *
 * @param {number} mins - Minutes to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */

Alias.minutesToDays = Alias.minsToDays
/**
 * Converts hours to milliseconds
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted milliseconds
 * @public
 * @static
 */

Alias.hoursToMs = Alias.hrsToMs
/**
 * Converts hours to seconds
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */

Alias.hoursToSeconds = Alias.hrsToSecs
/**
 * Converts hours to minutes
 *
 * @param {number} hours - Hours to convert
 * @returns {number} Converted minutes
 * @public
 * @static
 */

Alias.hoursToMinutes = Alias.hrsToMins
/**
 * Converts hours to days with remainders
 *
 * @param {number} hrs - Hours to convert
 * @returns {Object<string, number>} Converted days
 * @public
 * @static
 */

Alias.hoursToDays = Alias.hrsToDays
/**
 * Converts days to seconds
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted seconds
 * @public
 * @static
 */

Alias.daysToSeconds = Alias.daysToSecs
/**
 * Converts days to minutes
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted minutes
 * @public
 * @static
 */

Alias.daysToMinutes = Alias.daysToMins
/**
 * Converts days to hours
 *
 * @param {number} days - Days to convert
 * @returns {number} Converted hours
 * @public
 * @static
 */

Alias.daysToHours = Alias.daysToHrs

/**
 * Dateplus class and namespace
 *
 * @namespace
 * @class
 * @classdesc A class and namespace program to assist with date manipulation
 */

class DatePlus extends Alias {
    constructor() {
        super(...arguments)
        /**
         * Add's 0s to the instantiated (e.g 2020/4/3 => 2020/04/03)
         *
         * @param {string} seperator - Char the date is seperatred by
         * @returns {string} - Date with zeros
         * @public
         * @instance
         */

        this.addZeros = (seperator = "/") => DatePlus.addZeros(this.formatDate(), seperator)
        /**
         * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
         *
         * @param {string} seperator - Char to seperate date with
         * @returns {string} Formatted date
         * @public
         * @instance
         */

        this.formatDate = (seperator = "/") => DatePlus.formatDate(this, seperator)
        /**
         * Gets instantiated day of week in word form (e.g 0 => "Sunday")
         *
         * @returns {string} Stringed day of week
         * @public
         * @instance
         */

        this.getWordDay = () => DatePlus._daysReference[this.getDay()]
        /**
         * Gets instantiated month in word form (e.g 0 => "January")
         *
         * @returns {string} Stringed worded month
         * @public
         * @instance
         */

        this.getWordMonth = () => DatePlus._monthsReference[this.getMonth()]
    }
}
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
    6: "Saturday",
}
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
    d: "day",
}
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
    11: "December",
}
/**
 * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
 *
 * @param {string} date - String date to format
 * @param {string} seperator - Char the date is seperatred by
 * @returns {string} - Date with zeros
 * @public
 * @static
 */

DatePlus.addZeros = (date, seperator = "/") => {
    let newDate = ""

    for (let index = 0; index < 2; index++) {
        if (date.split(seperator)[index].length < 2) {
            newDate += "0".concat(date.split(seperator)[index]).concat(seperator)
        } else {
            newDate += "".concat(date.split(seperator)[index]).concat(seperator)
        }
    }

    if (date.split(seperator)[2].length < 2) {
        newDate += "0".concat(date.split(seperator)[2])
    } else {
        newDate += date.split(seperator)[2]
    }

    return newDate
}
/**
 * Format date into a string in the form YYYY{seperator}MM{seperator}DD
 *
 * @param {Date | DatePlus} date - Date object to format
 * @param {string} seperator - String to seperate date values with
 * @returns {string} Formatted date
 * @public
 * @static
 */

DatePlus.formatDate = (date, seperator = "/") => {
    const month = date.getMonth().toString()
    const day = date.getDate().toString()
    const year = date.getFullYear().toString()
    return [year, month, day].join(seperator)
}
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

DatePlus.getDateValues = (date, format = "y:m:d", seperator = "auto") => {
    let _seperator = "/"

    if (seperator === "auto") {
        for (const letter of date) {
            if (isNaN(Number(letter))) {
                _seperator = letter
                break
            }
        }
    } else {
        _seperator = seperator
    }

    const dateData = date.split(_seperator)
    const dateFormat = format.split(":")
    const output = {}

    for (let index = 0; index < 3; index++) {
        const key = DatePlus._keysReference[dateFormat[index]]
        output[key] = Number(dateData[index])
    }

    return output
}
/**
 * Converts numerical day of week into word form (e.g 0 => "Sunday")
 *
 * @param {number} numerical - Numerical day of week, 0 indexed (0-6)
 * @returns {string} Stringed day of week
 * @public
 * @static
 */

DatePlus.getWordDay = (numerical) => DatePlus._daysReference[numerical]
/**
 * Converts numerical month into word form (e.g 0 => "January")
 *
 * @param {number} numerical - Numerical day of week, 0 indexed (0-11)
 * @returns {string} Stringed worded month
 * @public
 * @static
 */

DatePlus.getWordMonth = (numerical) => DatePlus._monthsReference[numerical]

exports.DatePlus = DatePlus
exports.default = DatePlus
//# sourceMappingURL=dateplus.cjs.map
