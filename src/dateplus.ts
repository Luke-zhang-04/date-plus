/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 4.0.0-beta1
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import * as utils from "./utils"
import * as values from "./values"

/**
 * Dateplus - A class and namespace program to assist with date manipulation
 */
export class DatePlus extends Date {
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
    public getElapsedString(date: Date, approx = "about"): string {
        return utils.getElapsedString(this, date, approx)
    }
}

export default DatePlus
