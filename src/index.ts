/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @exports DatePlus
 * @file exports main dateplus object
 */
import * as interfaces from "./interfaces"
import Alias from "./alias"

type DateFormat = "y:m:d" | "y:d:m" | "m:d:y" | "m:y:d" | "d:m:y" | "d:y:m"

/**
 * Base interface for Date and Month references
 */
interface Reference {
    [index: number]: string,
}

/* eslint-disable no-magic-numbers */
/**
 * Interface for datereference
 */
interface Days extends Reference {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

/**
 * Object for date keys
 */
interface Keys {
    [index: string]: string,
    y: "year" | "years",
    m: "month" | "months",
    d: "day" | "days",
}

/**
 * Interface for datereference
 */
interface Months extends Reference {
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
/* eslint-enable no-magic-numbers */

/**
 * Dateplus class and namespace
 * @classdesc A class and namespace program to assist with date manipulation
 * @class
 * @namespace
 */
export default class DatePlus extends Alias {

    /**
     * Reference to days of the week, zero indexed
     * @private
     * @static
     * @type {Object.<number, string>}
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
     * @private
     * @static
     * @type {Object.<number, string>}
     */
    private static _keysReference: Keys = {
        y: "year",
        m: "month",
        d: "day",
    }
    /* eslint-enable id-length */

    /**
     * Reference to months of a year, zero indexed
     * @private
     * @static
     * @type {Object.<number, string>}
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
     * @public
     * @static
     * @param {string} date - string date to format
     * @param {string} seperator - char the date is seperatred by
     * @returns {string} - date with zeros
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
     * @public
     * @static
     * @param {Date | DatePlus} date - date object to format
     * @param {string} seperator - string to seperate date values with
     * @returns {string} formatted date
     */
    public static formatDate = (
        date: Date | DatePlus,
        seperator = "/"
    ): string => {
        const month = (date.getMonth()).toString(),
            day = date.getDate().toString(),
            year = date.getFullYear().toString()
    
        return [year, month, day].join(seperator)
    }

    /**
     * Gets date values and outputs an object
     * @public
     * @static
     * @param {string} date - date to extract values from, months zero indexed
     * @param {DateFormat}format - format of string date
     * @param {string} seperator - Seperator the date works with; leave auto for auto detection, limited to 1 char
     * @returns {Object<string, number>} object with all values
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

        const dateData = date.split(_seperator),
            dateFormat: KeysArr = format.split(":") as KeysArr,
            output: {[key: string]: number} = {}

        for (let index = 0; index < 3; index++) {
            const key = DatePlus._keysReference[dateFormat[index]]

            output[key] = Number(dateData[index])
            console.log(key, dateData[index])
        }

        return output as interfaces.YearObj
    }

    /* eslint-disable max-len */
    /**
     * Converts numerical day of week into word form (e.g 0 => "Sunday")
     * @public
     * @static
     * @param {number} numerical - numerical day of week, 0 indexed (0-6)
     * @returns {string} stringed day of week
     */
    public static getWordDay = (numerical: number): string => DatePlus._daysReference[numerical]

    /**
     * Converts numerical month into word form (e.g 0 => "January")
     * @public
     * @static
     * @param {number} numerical - numerical day of week, 0 indexed (0-11)
     * @returns {string} stringed worded month
     */
    public static getWordMonth = (numerical: number): string => DatePlus._monthsReference[numerical]

    /**
     * Add's 0s to the instantiated (e.g 2020/4/3 => 2020/04/03)
     * @public
     * @instance
     * @param {string} seperator - char the date is seperatred by
     * @returns {string} - date with zeros
     */
    public addZeros = (seperator = "/"): string => DatePlus.addZeros(this.formatDate(), seperator)

    /**
     * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
     * @public
     * @instance
     * @param {string} seperator - char to seperate date with
     * @returns {string} formatted date
     */
    public formatDate = (seperator = "/"): string => DatePlus.formatDate(this, seperator)

    /**
     * Gets instantiated day of week in word form (e.g 0 => "Sunday")
     * @public
     * @instance
     * @returns {string} stringed day of week
     */
    public getWordDay = (): string => DatePlus._daysReference[this.getDay()]

    /**
     * Gets instantiated month in word form (e.g 0 => "January")
     * @public
     * @instance
     * @returns {string} stringed worded month
     */
    public getWordMonth = (): string => DatePlus._monthsReference[this.getMonth()]
    /* eslint-enable max-len */

}
