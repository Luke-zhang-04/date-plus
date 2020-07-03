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
    public static msToSeconds = (ms: number): interfaces.SecondsObj => (
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
    public static msToMinutes = (ms: number): interfaces.MinutesObj => {
        const milliseconds = ms % msPerSec % msPerSec,
            seconds = ((ms - ms % msPerSec) / msPerSec) % secsPerMin,
            minutes = (ms - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin)

        return {
            ms: milliseconds,
            seconds,
            minutes,
        }
    }

}
