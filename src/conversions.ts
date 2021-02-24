/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 3.0.1
 * @exports Convert
 * @file defines Convert class for converting units 
 */
import * as interfaces from "./interfaces"
import {Values} from "./elapse"

/**
 * Convert namespace
 * @classdesc A namespace program to convert units
 * @namespace
 */
export default class Convert extends Date {

    /**
     * Converts milliseconds to seconds with remainders
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with seconds and milliseconds
     */
    public static msToSecs = (ms: number): interfaces.SecondsObj => (
        {
            ms: ms % Values.MsPerSec,
            seconds: (ms - ms % Values.MsPerSec) / Values.MsPerSec,
        }
    )
    
    /**
     * Converts milliseconds to minutes with remainders
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
     */
    public static msToMins = (ms: number): interfaces.MinutesObj => {
        const milliseconds = ms % Values.MsPerSec % Values.MsPerSec
        const seconds = (
            (ms - ms % Values.MsPerSec) / Values.MsPerSec
        ) % Values.SecsPerMin
        const minutes = (
            ms - seconds * Values.MsPerSec - milliseconds
        ) / (Values.MsPerSec * Values.SecsPerMin)

        return {
            ms: milliseconds,
            seconds,
            minutes,
        }
    }

    /**
     * Converts milliseconds to hours with remainders
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
     */
    public static msToHrs = (ms: number): interfaces.HoursObj => {
        const milliseconds = ms % Values.MsPerSec % Values.MsPerSec
        const seconds = (
            (ms - ms % Values.MsPerSec) / Values.MsPerSec
        ) % Values.SecsPerMin
        const minutes = (
            ms - seconds * Values.MsPerSec - milliseconds
        ) / (Values.MsPerSec * Values.SecsPerMin) % Values.MinsPerHr
        const hours = (
            ms -
                minutes * Values.MsPerSec * Values.SecsPerMin -
                seconds * Values.MsPerSec -
                milliseconds
        ) / (Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr)

        return {
            ms: milliseconds,
            seconds,
            minutes,
            hours,
        }
    }

    /**
     * Converts milliseconds to days with remainders
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with days, hours, minutes, seconds, and milliseconds
     */
    public static msToDays = (ms: number): interfaces.DaysObj => {
        const milliseconds = ms % Values.MsPerSec % Values.MsPerSec
        const seconds = (
            (ms - ms % Values.MsPerSec) / Values.MsPerSec
        ) % Values.SecsPerMin
        const minutes = (
            ms -
                seconds * Values.MsPerSec -
                milliseconds
        ) / (Values.MsPerSec * Values.SecsPerMin) % Values.MinsPerHr
        const hours = (
            ms -
                minutes * Values.MsPerSec * Values.SecsPerMin -
                seconds * Values.MsPerSec -
                milliseconds
        ) / (
            Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr
        ) % Values.HrsPerDay
        const days = (
            ms -
                hours * Values.MsPerSec * Values.SecsPerMin * Values.MinsPerHr -
                minutes * Values.MsPerSec * Values.SecsPerMin -
                seconds * Values.MsPerSec -
                milliseconds
        ) / (
            Values.MsPerSec *
            Values.SecsPerMin *
            Values.MinsPerHr *
            Values.HrsPerDay
        )

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
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {number} converted milliseconds
     */
    public static secsToMs = (secs: number): number => secs * Values.MsPerSec

    /**
     * Converts seconds to minutes with remainders
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {Object.<string, number>} converted minutes
     */
    public static secsToMins = (secs: number): interfaces.MinutesObj => Convert.msToMins(Convert.secsToMs(secs))

    /**
     * Converts seconds to hours with remainders
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {Object.<string, number>} converted hours
     */
    public static secsToHrs = (secs: number): interfaces.HoursObj => Convert.msToHrs(Convert.secsToMs(secs))

    /**
     * Converts seconds to days with remainders
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {Object.<string, number>} converted days
     */
    public static secsToDays = (secs: number): interfaces.DaysObj => Convert.msToDays(Convert.secsToMs(secs))

    /**
     * Converts hours to milliseconds 
     * @public
     * @static
     * @param {number} mins - minutes to convert
     * @returns {number} converted milliseconds
     */
    public static minsToMs = (mins: number): number => mins * Values.SecsPerMin * Values.MsPerSec

    /**
     * Converts hours to seconds 
     * @public
     * @static
     * @param {number} mins - minutes to convert
     * @returns {number} converted seconds
     */
    public static minsToSecs = (mins: number): number => mins * Values.SecsPerMin

    /**
     * Converts minutes to hours with remainders
     * @public
     * @static
     * @param {number} mins - minutes to convert
     * @returns {Object.<string, number>} converted hours
     */
    public static minsToHrs = (mins: number): interfaces.HoursObj => Convert.msToHrs(Convert.minsToMs(mins))

    /**
     * Converts minutes to days with remainders
     * @public
     * @static
     * @param {number} mins - minutes to convert
     * @returns {Object.<string, number>} converted days
     */
    public static minsToDays = (mins: number): interfaces.DaysObj => Convert.msToDays(Convert.minsToMs(mins))

    
    /**
     * Converts hours to milliseconds 
     * @public
     * @static
     * @param {number} hours - hours to convert
     * @returns {number} converted milliseconds
     */
    public static hrsToMs = (hours: number): number => hours * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec

    /**
     * Converts hours to seconds 
     * @public
     * @static
     * @param {number} hours - hours to convert
     * @returns {number} converted seconds
     */
    public static hrsToSecs = (hours: number): number => hours * Values.MinsPerHr * Values.SecsPerMin

    /**
     * Converts hours to minutes
     * @public
     * @static
     * @param {number} hours - hours to convert
     * @returns {number} converted minutes
     */
    public static hrsToMins = (hours: number): number => hours * Values.MinsPerHr

    /**
     * Converts hours to days with remainders
     * @public
     * @static
     * @param {number} hrs - hours to convert
     * @returns {Object.<string, number>} converted days
     */
    public static hrsToDays = (hrs: number): interfaces.DaysObj => Convert.msToDays(Convert.hrsToMs(hrs))

    /**
     * Converts days to milliseconds 
     * @public
     * @static
     * @param {number} days - days to convert
     * @returns {number} converted milliseconds
     */
    public static daysToMs = (days: number): number => days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec

    /**
     * Converts days to seconds 
     * @public
     * @static
     * @param {number} days - days to convert
     * @returns {number} converted seconds
     */
    public static daysToSecs = (days: number): number => days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin

    /**
     * Converts days to minutes 
     * @public
     * @static
     * @param {number} days - days to convert
     * @returns {number} converted minutes
     */
    public static daysToMins = (days: number): number => days * Values.HrsPerDay * Values.MinsPerHr

    /**
     * Converts days to hours 
     * @public
     * @static
     * @param {number} days - days to convert
     * @returns {number} converted hours
     */
    public static daysToHrs = (days: number): number => days * Values.HrsPerDay
    /* eslint-enable max-len */

}
