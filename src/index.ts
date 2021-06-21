/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 3.1.0
 * @author Luke Zhang luke-zhang-04.github.io
 * @file exports Main dateplus object
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @exports DatePlus
 */

import * as interfaces from "./interfaces"
import Alias from "./alias"

type DateFormat = "y:m:d" | "y:d:m" | "m:d:y" | "m:y:d" | "d:m:y" | "d:y:m"

/* eslint-disable no-magic-numbers */
/**
 * Interface for datereference
 */
interface Days {
    0: "Sunday"
    1: "Monday"
    2: "Tuesday"
    3: "Wednesday"
    4: "Thursday"
    5: "Friday"
    6: "Saturday"
}

/**
 * Object for date keys
 */
interface Keys {
    [index: string]: string
    y: "year" | "years"
    m: "month" | "months"
    d: "day" | "days"
}

/**
 * Interface for datereference
 */
interface Months {
    0: "January"
    1: "Feburary"
    2: "March"
    3: "April"
    4: "May"
    5: "June"
    6: "July"
    7: "August"
    8: "September"
    9: "October"
    10: "November"
    11: "December"
}
/* eslint-enable no-magic-numbers */

/**
 * Dateplus class and namespace
 *
 * @namespace
 * @class
 * @classdesc A class and namespace program to assist with date manipulation
 */
export class DatePlus extends Alias {
    /**
     * Reference to days of the week, zero indexed
     *
     * @private
     * @type {Object<number, string>}
     * @static
     */
    private static _daysReference: Days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    }

    /* eslint-disable id-length */
    /**
     * Reference to months of a year, zero indexed
     *
     * @private
     * @type {Object<number, string>}
     * @static
     */
    private static _keysReference: Keys = {
        y: "year",
        m: "month",
        d: "day",
    }
    /* eslint-enable id-length */

    /**
     * Reference to months of a year, zero indexed
     *
     * @private
     * @type {Object<number, string>}
     * @static
     */
    private static _monthsReference: Months = {
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
    public static addZeros = (date: string, seperator = "/"): string => {
        let newDate = ""

        for (let index = 0; index < 2; index++) {
            if (date.split(seperator)[index].length < 2) {
                newDate += `0${date.split(seperator)[index]}${seperator}`
            } else {
                newDate += `${date.split(seperator)[index]}${seperator}`
            }
        }

        if (date.split(seperator)[2].length < 2) {
            newDate += `0${date.split(seperator)[2]}`
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
    public static formatDate = (date: Date | DatePlus, seperator = "/"): string => {
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
    public static getDateValues = (
        date: string,
        format: DateFormat = "y:m:d",
        seperator = "auto",
    ): interfaces.YearObj => {
        let _seperator = "/"

        type KeysArr = ("y" | "m" | "d")[]

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
        const dateFormat: KeysArr = format.split(":") as KeysArr
        const output: {[key: string]: number} = {}

        for (let index = 0; index < 3; index++) {
            const key = DatePlus._keysReference[dateFormat[index]]

            output[key] = Number(dateData[index])
        }

        return output as interfaces.YearObj
    }

    /* eslint-disable max-len */
    /**
     * Converts numerical day of week into word form (e.g 0 => "Sunday")
     *
     * @param {number} numerical - Numerical day of week, 0 indexed (0-6)
     * @returns {string} Stringed day of week
     * @public
     * @static
     */
    public static getWordDay = (numerical: keyof Days): string =>
        DatePlus._daysReference[numerical]

    /**
     * Converts numerical month into word form (e.g 0 => "January")
     *
     * @param {number} numerical - Numerical day of week, 0 indexed (0-11)
     * @returns {string} Stringed worded month
     * @public
     * @static
     */
    public static getWordMonth = (numerical: keyof Months): string =>
        DatePlus._monthsReference[numerical]

    /**
     * Add's 0s to the instantiated (e.g 2020/4/3 => 2020/04/03)
     *
     * @param {string} seperator - Char the date is seperatred by
     * @returns {string} - Date with zeros
     * @public
     * @instance
     */
    public addZeros = (seperator = "/"): string => DatePlus.addZeros(this.formatDate(), seperator)

    /**
     * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
     *
     * @param {string} seperator - Char to seperate date with
     * @returns {string} Formatted date
     * @public
     * @instance
     */
    public formatDate = (seperator = "/"): string => DatePlus.formatDate(this, seperator)

    /**
     * Gets instantiated day of week in word form (e.g 0 => "Sunday")
     *
     * @returns {string} Stringed day of week
     * @public
     * @instance
     */
    public getWordDay = (): string => DatePlus._daysReference[this.getDay() as keyof Days]

    /**
     * Gets instantiated month in word form (e.g 0 => "January")
     *
     * @returns {string} Stringed worded month
     * @public
     * @instance
     */
    public getWordMonth = (): string => DatePlus._monthsReference[this.getMonth() as keyof Months]
    /* eslint-enable max-len */
}

export default DatePlus
