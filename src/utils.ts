/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 4.0.0-beta1
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import {Values, daysReference, monthsReference, oneDay, oneHour, oneMinute} from "./values"
import type {YearObj} from "./conversions"

export type DateFormat = "y:m:d" | "y:d:m" | "m:d:y" | "m:y:d" | "d:m:y" | "d:y:m"
type KeysArr = ("y" | "m" | "d")[]

/**
 * Object for date keys
 */
interface Keys {
    [index: string]: string
    y: "year" | "years"
    m: "month" | "months"
    d: "day" | "days"
}

/* eslint-disable id-length */
/**
 * Reference to months of a year, zero indexed
 */
const keysReference: Keys = {
    y: "year",
    m: "month",
    d: "day",
}
/* eslint-enable id-length */

/**
 * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
 *
 * @param date - String date to format
 * @param seperator - Char the date is seperatred by
 * @returns - Date with zeros
 */
export const addZeros = (date: string, seperator = "/"): string => {
    const splitDate = date.split(seperator)

    const newDateValues = splitDate.map((section) =>
        section.length < 2 ? `0${section}` : section,
    )

    return newDateValues.join(seperator)
}

/**
 * Format date into a string in the form YYYY{seperator}MM{seperator}DD
 *
 * @param date - Date object to format
 * @param format - Format of string date
 * @param seperator - String to seperate date values with
 * @returns Formatted date
 */
export const formatDate = (date: Date, format: DateFormat = "y:m:d", seperator = "/"): string => {
    const month = date.getMonth().toString()
    const day = date.getDate().toString()
    /* eslint-disable id-length */
    const year = date.getFullYear().toString()
    const values = {
        m: month,
        d: day,
        y: year,
    }
    /* eslint-enable id-length */
    const formatArray = format.split(":") as KeysArr

    return formatArray.map((val) => values[val]).join(seperator)
}

/**
 * Gets date values and outputs an object
 *
 * @param date - Date to extract values from, months zero indexed
 * @param format - Format of string date
 * @param seperator - Seperator the date works with; leave auto for auto detection, limited to 1 char
 * @returns Object with all values
 */
export const getDateValues = (
    date: string,
    format: DateFormat = "y:m:d",
    seperator = "auto",
): YearObj => {
    let _seperator = "/"

    if (seperator === "auto") {
        for (const letter of date) {
            if (isNaN(Number(letter))) {
                _seperator = letter
                break
            }
        }
    } else {
        _seperator = seperator
    }

    const splitDate = date.split(_seperator)
    const dateFormat = format.split(":") as KeysArr
    const output: {[key: string]: number} = {}

    for (let index = 0; index < 3; index++) {
        const key = keysReference[dateFormat[index]]

        output[key] = Number(splitDate[index])
    }

    return output as YearObj
}

/**
 * Converts numerical day of week into word form (e.g 0 => "Sunday")
 *
 * @param numerical - Numerical day of week, 0 indexed (0-6)
 * @returns Stringed day of week
 */
export const getWordDay = (numerical: keyof typeof daysReference): string =>
    daysReference[numerical]

/**
 * Converts numerical month into word form (e.g 0 => "January")
 *
 * @param numerical - Numerical day of week, 0 indexed (0-11)
 * @returns Stringed worded month
 */
export const getWordMonth = (numerical: keyof typeof monthsReference): string =>
    monthsReference[numerical]

/**
 * Calculates number of elapsed days between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed days
 */
export const getElapsedDays = (date1: Date, date2: Date): number =>
    Math.round((date1.getTime() - date2.getTime()) / oneDay) * -1

/**
 * Calculates number of elapsed hours between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed hours
 */
export const getElapsedHours = (date1: Date, date2: Date): number =>
    Math.round((date1.getTime() - date2.getTime()) / oneHour) * -1

/**
 * Calculates number of elapsed minutes between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed minutes
 */
export const getElapsedMinutes = (date1: Date, date2: Date): number =>
    Math.round((date1.getTime() - date2.getTime()) / oneMinute) * -1

/**
 * Calculates number of elapsed seconds between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed seconds
 */
export const getElapsedSeconds = (date1: Date, date2: Date): number =>
    Math.round((date1.getTime() - date2.getTime()) / Values.MsPerSec) * -1

/**
 * Calculates number of elapsed milliseconds between date1 and date2
 *
 * @param date1 - Starting date object to calculate
 * @param date2 - Ending date object to calculate
 * @returns - Number of elapsed milliseconds
 */
export const getElapsedMs = (date1: Date, date2: Date): number =>
    Math.round(date1.getTime() - date2.getTime()) * -1

/**
 * Calculates elapsed time between current and previous
 *
 * @param start- Start date
 * @param end - End date
 * @param approx - Text to append to values from days and on, e.g *about* 1 day aga
 * @returns Time difference in string form, e.g "3 seconds ago"
 */
export const getElapsedString = (start: Date, end: Date, approx = "about"): string => {
    const daysPerMonth = 30
    const daysPerYear = 365
    const msPerMonth = oneDay * daysPerMonth
    const msPerYear = oneDay * daysPerYear
    const elapsed = getElapsedMs(start, end)

    let val

    if (elapsed < oneMinute) {
        val = Math.round(elapsed / Values.MsPerSec)

        return `${val} second${val === 1 ? "" : "s"} ago`
    } else if (elapsed < oneHour) {
        val = Math.round(elapsed / oneMinute)

        return `${val} minute${val === 1 ? "" : "s"} ago`
    } else if (elapsed < oneDay) {
        val = Math.round(elapsed / oneHour)

        return `${val} hour${val === 1 ? "" : "s"} ago`
    } else if (elapsed < msPerMonth) {
        val = Math.round(elapsed / oneDay)

        return `${approx} ${val} day${val === 1 ? "" : "s"} ago`
    } else if (elapsed < msPerYear) {
        val = Math.round(elapsed / msPerMonth)

        return `${approx} ${val} month${val === 1 ? "" : "s"} ago`
    }

    val = Math.round(elapsed / msPerYear)

    return `${approx} ${val} year${val === 1 ? "" : "s"} ago`
}

// The next 2 functions are too hard to test for
/* istanbul ignore next */
/**
 * Convert a utc date to local
 *
 * @param date - Date to use. Note that the parameter will never be mutated.
 * @returns A new date object with the time converted form UTC
 */
export const utcToLocal = <T extends Date>(date: T): T => {
    const newDate = date.constructor(date.getTime()) as T

    newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset())

    return newDate
}

/* istanbul ignore next */
/**
 * Get the current UTC Time
 *
 * @returns UTC Time
 */
export const getUtcTime = (): number => {
    const now = new Date()

    return Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds(),
    )
}
