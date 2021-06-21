/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 3.0.1
 * @author Luke Zhang luke-zhang-04.github.io
 * @file defines Convert class for converting units
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @exports Convert
 */

import * as interfaces from "./interfaces"
import {Values} from "./elapse"

/**
 * Convert namespace
 *
 * @namespace
 * @classdesc A namespace program to convert units
 */
export default class Convert extends Date {
    /**
     * Converts milliseconds to seconds with remainders
     *
     * @param {number} ms - Milliseconds to convert
     * @returns {Object<string, number>} Object with seconds and milliseconds
     * @public
     * @static
     */
    public static msToSecs = (ms: number): interfaces.SecondsObj => ({
        ms: ms % Values.MsPerSec,
        seconds: (ms - (ms % Values.MsPerSec)) / Values.MsPerSec,
    })

    /**
     * Converts milliseconds to minutes with remainders
     *
     * @param {number} ms - Milliseconds to convert
     * @returns {Object<string, number>} Object with minutes, seconds, and milliseconds
     * @public
     * @static
     */
    public static msToMins = (ms: number): interfaces.MinutesObj => {
        const milliseconds = (ms % Values.MsPerSec) % Values.MsPerSec
        const seconds = ((ms - (ms % Values.MsPerSec)) / Values.MsPerSec) % Values.SecsPerMin
        const minutes =
            (ms - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin)

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
    public static msToHrs = (ms: number): interfaces.HoursObj => {
        const milliseconds = (ms % Values.MsPerSec) % Values.MsPerSec
        const seconds = ((ms - (ms % Values.MsPerSec)) / Values.MsPerSec) % Values.SecsPerMin
        const minutes =
            ((ms - seconds * Values.MsPerSec - milliseconds) /
                (Values.MsPerSec * Values.SecsPerMin)) %
            Values.MinsPerHr
        const hours =
            (ms -
                minutes * Values.MsPerSec * Values.SecsPerMin -
                seconds * Values.MsPerSec -
                milliseconds) /
            (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr)

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
    public static msToDays = (ms: number): interfaces.DaysObj => {
        const milliseconds = (ms % Values.MsPerSec) % Values.MsPerSec
        const seconds = ((ms - (ms % Values.MsPerSec)) / Values.MsPerSec) % Values.SecsPerMin
        const minutes =
            ((ms - seconds * Values.MsPerSec - milliseconds) /
                (Values.MsPerSec * Values.SecsPerMin)) %
            Values.MinsPerHr
        const hours =
            ((ms -
                minutes * Values.MsPerSec * Values.SecsPerMin -
                seconds * Values.MsPerSec -
                milliseconds) /
                (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr)) %
            Values.HrsPerDay
        const days =
            (ms -
                hours * Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr -
                minutes * Values.MsPerSec * Values.SecsPerMin -
                seconds * Values.MsPerSec -
                milliseconds) /
            (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr * Values.HrsPerDay)

        return {
            ms: milliseconds,
            seconds,
            minutes,
            hours,
            days,
        }
    }

    /* eslint-disable max-len */
    /**
     * Converts seconds to milliseconds
     *
     * @param {number} secs - Seconds to convert
     * @returns {number} Converted milliseconds
     * @public
     * @static
     */
    public static secsToMs = (secs: number): number => secs * Values.MsPerSec

    /**
     * Converts seconds to minutes with remainders
     *
     * @param {number} secs - Seconds to convert
     * @returns {Object<string, number>} Converted minutes
     * @public
     * @static
     */
    public static secsToMins = (secs: number): interfaces.MinutesObj =>
        Convert.msToMins(Convert.secsToMs(secs))

    /**
     * Converts seconds to hours with remainders
     *
     * @param {number} secs - Seconds to convert
     * @returns {Object<string, number>} Converted hours
     * @public
     * @static
     */
    public static secsToHrs = (secs: number): interfaces.HoursObj =>
        Convert.msToHrs(Convert.secsToMs(secs))

    /**
     * Converts seconds to days with remainders
     *
     * @param {number} secs - Seconds to convert
     * @returns {Object<string, number>} Converted days
     * @public
     * @static
     */
    public static secsToDays = (secs: number): interfaces.DaysObj =>
        Convert.msToDays(Convert.secsToMs(secs))

    /**
     * Converts hours to milliseconds
     *
     * @param {number} mins - Minutes to convert
     * @returns {number} Converted milliseconds
     * @public
     * @static
     */
    public static minsToMs = (mins: number): number => mins * Values.SecsPerMin * Values.MsPerSec

    /**
     * Converts hours to seconds
     *
     * @param {number} mins - Minutes to convert
     * @returns {number} Converted seconds
     * @public
     * @static
     */
    public static minsToSecs = (mins: number): number => mins * Values.SecsPerMin

    /**
     * Converts minutes to hours with remainders
     *
     * @param {number} mins - Minutes to convert
     * @returns {Object<string, number>} Converted hours
     * @public
     * @static
     */
    public static minsToHrs = (mins: number): interfaces.HoursObj =>
        Convert.msToHrs(Convert.minsToMs(mins))

    /**
     * Converts minutes to days with remainders
     *
     * @param {number} mins - Minutes to convert
     * @returns {Object<string, number>} Converted days
     * @public
     * @static
     */
    public static minsToDays = (mins: number): interfaces.DaysObj =>
        Convert.msToDays(Convert.minsToMs(mins))

    /**
     * Converts hours to milliseconds
     *
     * @param {number} hours - Hours to convert
     * @returns {number} Converted milliseconds
     * @public
     * @static
     */
    public static hrsToMs = (hours: number): number =>
        hours * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec

    /**
     * Converts hours to seconds
     *
     * @param {number} hours - Hours to convert
     * @returns {number} Converted seconds
     * @public
     * @static
     */
    public static hrsToSecs = (hours: number): number =>
        hours * Values.MinsPerHr * Values.SecsPerMin

    /**
     * Converts hours to minutes
     *
     * @param {number} hours - Hours to convert
     * @returns {number} Converted minutes
     * @public
     * @static
     */
    public static hrsToMins = (hours: number): number => hours * Values.MinsPerHr

    /**
     * Converts hours to days with remainders
     *
     * @param {number} hrs - Hours to convert
     * @returns {Object<string, number>} Converted days
     * @public
     * @static
     */
    public static hrsToDays = (hrs: number): interfaces.DaysObj =>
        Convert.msToDays(Convert.hrsToMs(hrs))

    /**
     * Converts days to milliseconds
     *
     * @param {number} days - Days to convert
     * @returns {number} Converted milliseconds
     * @public
     * @static
     */
    public static daysToMs = (days: number): number =>
        days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec

    /**
     * Converts days to seconds
     *
     * @param {number} days - Days to convert
     * @returns {number} Converted seconds
     * @public
     * @static
     */
    public static daysToSecs = (days: number): number =>
        days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin

    /**
     * Converts days to minutes
     *
     * @param {number} days - Days to convert
     * @returns {number} Converted minutes
     * @public
     * @static
     */
    public static daysToMins = (days: number): number => days * Values.HrsPerDay * Values.MinsPerHr

    /**
     * Converts days to hours
     *
     * @param {number} days - Days to convert
     * @returns {number} Converted hours
     * @public
     * @static
     */
    public static daysToHrs = (days: number): number => days * Values.HrsPerDay
    /* eslint-enable max-len */
}
