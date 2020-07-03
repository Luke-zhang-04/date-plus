/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @exports Convert
 * @file defines Convert class for converting units 
 */
import * as interfaces from "./interfaces"

const hrsPerDay = 24,
    minsPerHr = 60,
    secsPerMin = 60,
    msPerSec = 1000

/**
 * Convert namespace
 * @classdesc A namespace program to convert units
 * @namespace
 */
export default class Convert extends Date {

    /**
     * Converts milliseconds to seconds with remainder
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with seconds and milliseconds
     */
    public static msToSecs = (ms: number): interfaces.SecondsObj => (
        {
            ms: ms % msPerSec,
            seconds: (ms - ms % msPerSec) / msPerSec,
        }
    )
    
    /**
     * Converts milliseconds to minutes with remainder
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
     */
    public static msToMins = (ms: number): interfaces.MinutesObj => {
        const milliseconds = ms % msPerSec % msPerSec,
            seconds = ((ms - ms % msPerSec) / msPerSec) % secsPerMin,
            minutes = (
                ms - seconds * msPerSec - milliseconds
            ) / (msPerSec * secsPerMin)

        return {
            ms: milliseconds,
            seconds,
            minutes,
        }
    }

    /**
     * Converts milliseconds to hours with remainder
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
     */
    public static msToHrs = (ms: number): interfaces.HoursObj => {
        const milliseconds = ms % msPerSec % msPerSec,
            seconds = ((ms - ms % msPerSec) / msPerSec) % secsPerMin,
            minutes = (
                ms - seconds * msPerSec - milliseconds
            ) / (msPerSec * secsPerMin) % minsPerHr,
            hours = (
                ms -
                minutes * msPerSec * secsPerMin -
                seconds * msPerSec -
                milliseconds
            ) / (msPerSec * secsPerMin * minsPerHr)

        return {
            ms: milliseconds,
            seconds,
            minutes,
            hours,
        }
    }

    /**
     * Converts milliseconds to days with remainder
     * @public
     * @static
     * @param {number} ms - milliseconds to convert
     * @returns {Object.<string, number>} object with days, hours, minutes, seconds, and milliseconds
     */
    public static msToDays = (ms: number): interfaces.DaysObj => {
        const milliseconds = ms % msPerSec % msPerSec,
            seconds = ((ms - ms % msPerSec) / msPerSec) % secsPerMin,
            minutes = (
                ms -
                seconds * msPerSec -
                milliseconds
            ) / (msPerSec * secsPerMin) % minsPerHr,
            hours = (
                ms -
                minutes * msPerSec * secsPerMin -
                seconds * msPerSec -
                milliseconds
            ) / (msPerSec * secsPerMin * minsPerHr) % hrsPerDay,
            days = (
                ms -
                hours * msPerSec * secsPerMin * minsPerHr -
                minutes * msPerSec * secsPerMin -
                seconds * msPerSec -
                milliseconds
            ) / (msPerSec * secsPerMin * minsPerHr * hrsPerDay)

        return {
            ms: milliseconds,
            seconds,
            minutes,
            hours,
            days,
        }
    }

    /**
     * Converts seconds to milliseconds 
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {number} converted milliseconds
     */
    public static secsToMs = (secs: number): number => secs * msPerSec

    /**
     * Converts seconds to minutes with 
     * @public
     * @static
     * @param {number} secs - seconds to convert
     * @returns {Object.<string, number>} converted milliseconds
     */
    public static secsToMins = (secs: number): interfaces.MinutesObj => (
        Convert.msToMins(Convert.secsToMs(secs))
    )

}