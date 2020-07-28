/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.2
 * @exports Alias
 * @file defines alias static methods from conversion.ts with longer names
 */
import Elapse from "./elapse"

export default class Alias extends Elapse {

    /**
     * Converts milliseconds to seconds with remainders
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with seconds and milliseconds
     */
    public static msToSeconds = Alias.msToSecs

    /**
     * Converts milliseconds to minutes with remainders
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
     */
    public static msToMinutes = Alias.msToMins

    /**
     * Converts milliseconds to hours with remainders
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
     */
    public static msToHours = Alias.msToHrs

    /**
     * Converts seconds to milliseconds 
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {number} converted milliseconds
     */
    public static secondsToMs = Alias.secsToMs

    /**
     * Converts seconds to minutes with remainders
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {Object.<string, number>} converted minutes
     */
    public static secondsToMinutes = Alias.secsToMins

    /**
     * Converts seconds to hours with remainders
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {Object.<string, number>} converted hours
     */
    public static secondsToHours = Alias.secsToHrs

    /**
     * Converts seconds to days with remainders
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {Object.<string, number>} converted days
     */
    public static secondsToDays = Alias.secsToDays

    /**
     * Converts hours to milliseconds 
     * @public
     * @static
     * @param {number} mins - minutes to convert
     * @returns {number} converted milliseconds
     */
    public static minutesToMs = Alias.minsToMs

    /**
     * Converts hours to seconds 
     * @public
     * @static
     * @param {number} mins - minutes to convert
     * @returns {number} converted seconds
     */
    public static minutesToSeconds = Alias.minsToSecs

    /**
     * Converts minutes to hours with remainders
     * @public
     * @static
     * @param {number} mins - minutes to convert
     * @returns {Object.<string, number>} converted hours
     */
    public static minutesToHours = Alias.minsToHrs

    /**
     * Converts minutes to days with remainders
     * @public
     * @static
     * @param {number} mins - minutes to convert
     * @returns {Object.<string, number>} converted days
     */
    public static minutesToDays = Alias.minsToDays

    /**
     * Converts hours to milliseconds 
     * @public
     * @static
     * @param {number} hours - hours to convert
     * @returns {number} converted milliseconds
     */
    public static hoursToMs = Alias.hrsToMs

    /**
     * Converts hours to seconds 
     * @public
     * @static
     * @param {number} hours - hours to convert
     * @returns {number} converted seconds
     */
    public static hoursToSeconds = Alias.hrsToSecs

    /**
     * Converts hours to minutes
     * @public
     * @static
     * @param {number} hours - hours to convert
     * @returns {number} converted minutes
     */
    public static hoursToMinutes = Alias.hrsToMins

    /**
     * Converts hours to days with remainders
     * @public
     * @static
     * @param {number} hrs - hours to convert
     * @returns {Object.<string, number>} converted days
     */
    public static hoursToDays = Alias.hrsToDays

    /**
     * Converts days to seconds 
     * @public
     * @static
     * @param {number} days - days to convert
     * @returns {number} converted seconds
     */
    public static daysToSeconds = Alias.daysToSecs

    /**
     * Converts days to minutes 
     * @public
     * @static
     * @param {number} days - days to convert
     * @returns {number} converted minutes
     */
    public static daysToMinutes = Alias.daysToMins

    /**
     * Converts days to hours 
     * @public
     * @static
     * @param {number} days - days to convert
     * @returns {number} converted hours
     */
    public static daysToHours = Alias.daysToHrs

}
