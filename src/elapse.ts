/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @exports Elapse
 * @file defines Elapse class for elapsed 
 */
import * as interfaces from "./interfaces"
import Convert from "./conversions"
import DatePlus from "."

const hrsPerDay = 24,
    minsPerHr = 60,
    secsPerMin = 60,
    msPerSec = 1000

/**
 * Elapse class and namespace
 * @classdesc A class and namespace program to find elapsed times
 * @class
 * @namespace
 */
export default class Elapse extends Convert {

    /**
     * Gets milliseconds per day
     * @private
     * @static
     * @type {number}
     */
    private static _oneDay: number =
        hrsPerDay * minsPerHr * secsPerMin * msPerSec
    
    /**
     * Calculates number of elapsed days between date1 and date2
     * @public
     * @static
     * @param {Date | DatePlus} date1 - starting date object to calculate
     * @param {Date | DatePlus} date2 - ending date object to calculate
     * @returns {number} - number of elapsed days
     */
    public static getElapsedDays = (
        date1: Date | DatePlus,
        date2: Date | DatePlus
    ): number => Math.round(
        Math.abs((date1.getTime() - date2.getTime()) / Elapse._oneDay)
    )

    /**
     * Calculates number of elapsed days between instantiated date and dae
     * @public
     * @instance
     * @param {Date | DatePlus} date - ending date object to calculate
     * @returns {number} - number of elapsed days
     */
    public getElapsedDays = (date: Date | DatePlus): number => Math.round(
        Math.abs((this.getTime() - date.getTime()) / Elapse._oneDay)
    )

}
