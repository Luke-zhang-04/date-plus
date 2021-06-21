/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 3.1.0
 * @author Luke Zhang luke-zhang-04.github.io
 * @file defines Elapse class for elapsed
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @exports Elapse
 */

import Convert from "./conversions"
import DatePlus from "."

/* eslint-disable no-shadow */
export const enum Values {
    HrsPerDay = 24,
    MinsPerHr = 60,
    SecsPerMin = 60,
    MsPerSec = 1000,
}
/* eslint-enable no-shadow */

/**
 * Elapse class and namespace
 *
 * @namespace
 * @class
 * @classdesc A class and namespace program to find elapsed times
 */
export default class Elapse extends Convert {
    /**
     * Gets milliseconds per day
     *
     * @private
     * @type {number}
     * @static
     */
    private static _oneDay: number =
        Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec

    /**
     * Calculates number of elapsed days between date1 and date2
     *
     * @param {Date | DatePlus} date1 - Starting date object to calculate
     * @param {Date | DatePlus} date2 - Ending date object to calculate
     * @returns {number} - Number of elapsed days
     * @public
     * @static
     */
    public static getElapsedDays = (date1: Date | DatePlus, date2: Date | DatePlus): number =>
        Math.round((date1.getTime() - date2.getTime()) / Elapse._oneDay) * -1

    /**
     * Calculates number of elapsed days between instantiated date and dae
     *
     * @param {Date | DatePlus} date - Ending date object to calculate
     * @returns {number} - Number of elapsed days
     * @public
     * @instance
     */
    public getElapsedDays = (date: Date | DatePlus): number =>
        Math.round((this.getTime() - date.getTime()) / Elapse._oneDay) * -1
}
