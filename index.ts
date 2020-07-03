/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.1
 * @exports DatePlus
 */

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
export default class DatePlus extends Date {

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
    public static addZeros = (date: string, seperator: string = "/"): string => {
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
        seperator: string = "/"
    ): string => {
        const month = (date.getMonth()).toString(),
            day = date.getDate().toString(),
            year = date.getFullYear().toString()
    
        return [year, month, day].join(seperator)
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
    public addZeros = (seperator: string = "/"): string => DatePlus.addZeros(this.formatDate(), seperator)

    /**
     * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
     * @public
     * @instance
     * @param {string} seperator - char to seperate date with
     * @returns {string} formatted date
     */
    public formatDate = (seperator: string = "/"): string => DatePlus.formatDate(this, seperator)

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
