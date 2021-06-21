/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 3.1.0
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import * as conversions from "./conversions"
import * as utils from "./utils"
import * as values from "./values"

export {conversions, utils, values}

export const enum Values {
    HrsPerDay = 24,
    MinsPerHr = 60,
    SecsPerMin = 60,
    MsPerSec = 1000,
}

/**
 * Dateplus - A class and namespace program to assist with date manipulation
 */
export class DatePlus extends Date {
    /* eslint-disable @typescript-eslint/lines-between-class-members */

    public declare static msToSecs: typeof conversions.msToSecs
    public declare static msToSeconds: typeof conversions.msToSecs

    public declare static msToMins: typeof conversions.msToMins
    public declare static msToMinutes: typeof conversions.msToMins

    public declare static msToHrs: typeof conversions.msToHrs
    public declare static msToHours: typeof conversions.msToHrs

    public declare static msToDays: typeof conversions.msToDays

    public declare static secsToMs: typeof conversions.secsToMs
    public declare static secondsToMs: typeof conversions.secsToMs

    public declare static secsToMins: typeof conversions.secsToMins
    public declare static secondsToMinutes: typeof conversions.secsToMins

    public declare static secsToHrs: typeof conversions.secsToHrs
    public declare static secondsToHours: typeof conversions.secsToHrs

    public declare static secsToDays: typeof conversions.secsToDays
    public declare static secondsToDays: typeof conversions.secsToDays

    public declare static minsToMs: typeof conversions.secsToDays
    public declare static minutesToMs: typeof conversions.secsToDays

    public declare static minsToSecs: typeof conversions.minsToSecs
    public declare static minutesToSeconds: typeof conversions.minsToSecs

    public declare static minsToHrs: typeof conversions.minsToHrs
    public declare static minutesToHours: typeof conversions.minsToHrs

    public declare static minsToDays: typeof conversions.minsToDays
    public declare static minutesToDays: typeof conversions.minsToDays

    public declare static hrsToMs: typeof conversions.hrsToMs
    public declare static hoursToMs: typeof conversions.hrsToMs

    public declare static hrsToSecs: typeof conversions.hrsToSecs
    public declare static hoursToSeconds: typeof conversions.hrsToSecs

    public declare static hrsToMins: typeof conversions.hrsToMins
    public declare static hoursToMinutes: typeof conversions.hrsToMins

    public declare static hrsToDays: typeof conversions.hrsToDays
    public declare static hoursToDays: typeof conversions.hrsToDays

    public declare static daysToMs: typeof conversions.daysToMs

    public declare static daysToSecs: typeof conversions.daysToSecs
    public declare static daysToSeconds: typeof conversions.daysToSecs

    public declare static daysToMins: typeof conversions.daysToMins
    public declare static daysToMinutes: typeof conversions.daysToMins

    public declare static daysToHrs: typeof conversions.daysToHrs
    public declare static daysToHours: typeof conversions.daysToHrs

    public declare static addZeros: typeof utils.addZeros

    public declare static formatDate: typeof utils.formatDate

    public declare static getWordDay: typeof utils.getWordDay
    public declare static getWordMonth: typeof utils.getWordMonth

    public declare static getElapsedMs: typeof utils.getElapsedMs
    public declare static getElapsedSeconds: typeof utils.getElapsedSeconds
    public declare static getElapsedMinutes: typeof utils.getElapsedMinutes
    public declare static getElapsedHours: typeof utils.getElapsedHours
    public declare static getElapsedDays: typeof utils.getElapsedDays

    /* eslint-enable @typescript-eslint/lines-between-class-members */

    /**
     * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
     *
     * @param date - String date to format
     * @param seperator - Char the date is seperatred by
     * @returns - Date with zeros
     */
    public addZeros(seperator = "/"): string {
        return utils.addZeros(this.formatDate(), seperator)
    }

    /**
     * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
     *
     * @param seperator - Char to seperate date with
     * @returns Formatted date
     */
    public formatDate(seperator = "/"): string {
        return utils.formatDate(this, seperator)
    }

    /**
     * Gets instantiated day of week in word form (e.g 0 => "Sunday")
     *
     * @returns Stringed day of week
     */
    public getWordDay(): string {
        return values.daysReference[this.getDay() as keyof typeof values.daysReference]
    }

    /**
     * Gets instantiated month in word form (e.g 0 => "January")
     *
     * @returns Stringed worded month
     */
    public getWordMonth(): string {
        return values.monthsReference[this.getMonth() as keyof typeof values.monthsReference]
    }

    /**
     * Calculates number of elapsed days between instantiated date and dae
     *
     * @param date - Ending date object to calculate
     * @returns - Number of elapsed days
     */
    public getElapsedDays(date: Date): number {
        return utils.getElapsedDays(this, date)
    }

    /**
     * Calculates number of elapsed hours between date1 and date2
     *
     * @param date - Ending date object to calculate
     * @returns - Number of elapsed hours
     */
    public getElapsedHours(date: Date): number {
        return utils.getElapsedHours(this, date)
    }

    /**
     * Calculates number of elapsed minutes between date1 and date2
     *
     * @param date - Ending date object to calculate
     * @returns - Number of elapsed minutes
     */
    public getElapsedMinutes(date: Date): number {
        return utils.getElapsedMinutes(this, date)
    }

    /**
     * Calculates number of elapsed seconds between date1 and date2
     *
     * @param date - Ending date object to calculate
     * @returns - Number of elapsed seconds
     */
    public getElapsedSeconds(date: Date): number {
        return utils.getElapsedSeconds(this, date)
    }

    /**
     * Calculates number of elapsed milliseconds between date1 and date2
     *
     * @param date - Ending date object to calculate
     * @returns - Number of elapsed milliseconds
     */
    public getElapsedMs(date: Date): number {
        return utils.getElapsedMs(this, date)
    }

    /**
     * Calculates elapsed time between current and previous
     *
     * @param date - End date
     * @param approx - Text to append to values from days and on, e.g *about* 1 day aga
     * @returns Time difference in string form, e.g "3 seconds ago"
     */
    public getElapsedString = (date: Date, approx = "about"): string =>
        utils.getElapsedString(this, date, approx)
}

for (const [key, value] of Object.entries({...conversions, ...utils, ...values})) {
    // In the name of bundle size
    // @ts-expect-error
    DatePlus[key] = value
}

export default DatePlus
