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

import DatePlus from "."

/**
 * Dateplus class and namespace
 * @classdesc A class and namespace program to assist with date manipulation
 * @class
 * @namespace
 */
export default class Elapse extends Date {
    
    /**
     * Calculates number of elapsed days between date1 and date2
     * @public
     * @instance
     * @param {Date | DatePlus} date1 - starting date object to calculate
     * @param {Date | DatePlus} date2 - ending date object to calculate
     * @returns {number} - number of elapsed days
     */
    public static getElapsedDays = (date1: Date | DatePlus, date2: Date | DatePlus): number => {
        const oneDay = 24 * 60 * 60 * 1000
        
        return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay))
    }

}
