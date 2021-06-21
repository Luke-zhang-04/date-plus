/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 3.0.1
 * @author Luke Zhang luke-zhang-04.github.io
 * @file defines Alias static methods from conversion.ts with longer names
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @exports Alias
 */

import Elapse from "./elapse"

export default class Alias extends Elapse {
    /**
     * Converts milliseconds to seconds with remainders
     *
     * @param {number} ms - Milliseconds to convert
     * @returns {Object<string, number>} Object with seconds and milliseconds
     * @public
     * @static
     */
    public static msToSeconds = Alias.msToSecs

    /**
     * Converts milliseconds to minutes with remainders
     *
     * @param {number} ms - Milliseconds to convert
     * @returns {Object<string, number>} Object with minutes, seconds, and milliseconds
     * @public
     * @static
     */
    public static msToMinutes = Alias.msToMins

    /**
     * Converts milliseconds to hours with remainders
     *
     * @param {number} ms - Milliseconds to convert
     * @returns {Object<string, number>} Object with hours, minutes, seconds, and milliseconds
     * @public
     * @static
     */
    public static msToHours = Alias.msToHrs

    /**
     * Converts seconds to milliseconds
     *
     * @param {number} secs - Seconds to convert
     * @returns {number} Converted milliseconds
     * @public
     * @static
     */
    public static secondsToMs = Alias.secsToMs

    /**
     * Converts seconds to minutes with remainders
     *
     * @param {number} secs - Seconds to convert
     * @returns {Object<string, number>} Converted minutes
     * @public
     * @static
     */
    public static secondsToMinutes = Alias.secsToMins

    /**
     * Converts seconds to hours with remainders
     *
     * @param {number} secs - Seconds to convert
     * @returns {Object<string, number>} Converted hours
     * @public
     * @static
     */
    public static secondsToHours = Alias.secsToHrs

    /**
     * Converts seconds to days with remainders
     *
     * @param {number} secs - Seconds to convert
     * @returns {Object<string, number>} Converted days
     * @public
     * @static
     */
    public static secondsToDays = Alias.secsToDays

    /**
     * Converts hours to milliseconds
     *
     * @param {number} mins - Minutes to convert
     * @returns {number} Converted milliseconds
     * @public
     * @static
     */
    public static minutesToMs = Alias.minsToMs

    /**
     * Converts hours to seconds
     *
     * @param {number} mins - Minutes to convert
     * @returns {number} Converted seconds
     * @public
     * @static
     */
    public static minutesToSeconds = Alias.minsToSecs

    /**
     * Converts minutes to hours with remainders
     *
     * @param {number} mins - Minutes to convert
     * @returns {Object<string, number>} Converted hours
     * @public
     * @static
     */
    public static minutesToHours = Alias.minsToHrs

    /**
     * Converts minutes to days with remainders
     *
     * @param {number} mins - Minutes to convert
     * @returns {Object<string, number>} Converted days
     * @public
     * @static
     */
    public static minutesToDays = Alias.minsToDays

    /**
     * Converts hours to milliseconds
     *
     * @param {number} hours - Hours to convert
     * @returns {number} Converted milliseconds
     * @public
     * @static
     */
    public static hoursToMs = Alias.hrsToMs

    /**
     * Converts hours to seconds
     *
     * @param {number} hours - Hours to convert
     * @returns {number} Converted seconds
     * @public
     * @static
     */
    public static hoursToSeconds = Alias.hrsToSecs

    /**
     * Converts hours to minutes
     *
     * @param {number} hours - Hours to convert
     * @returns {number} Converted minutes
     * @public
     * @static
     */
    public static hoursToMinutes = Alias.hrsToMins

    /**
     * Converts hours to days with remainders
     *
     * @param {number} hrs - Hours to convert
     * @returns {Object<string, number>} Converted days
     * @public
     * @static
     */
    public static hoursToDays = Alias.hrsToDays

    /**
     * Converts days to seconds
     *
     * @param {number} days - Days to convert
     * @returns {number} Converted seconds
     * @public
     * @static
     */
    public static daysToSeconds = Alias.daysToSecs

    /**
     * Converts days to minutes
     *
     * @param {number} days - Days to convert
     * @returns {number} Converted minutes
     * @public
     * @static
     */
    public static daysToMinutes = Alias.daysToMins

    /**
     * Converts days to hours
     *
     * @param {number} days - Days to convert
     * @returns {number} Converted hours
     * @public
     * @static
     */
    public static daysToHours = Alias.daysToHrs
}
