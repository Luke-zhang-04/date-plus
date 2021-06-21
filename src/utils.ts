/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 3.1.0
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import {daysReference, monthsReference, oneDay} from "./values"
import type {YearObj} from "./conversions"

type DateFormat = "y:m:d" | "y:d:m" | "m:d:y" | "m:y:d" | "d:m:y" | "d:y:m"

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
    let newDate = ""

    for (let index = 0; index < 2; index++) {
        if (date.split(seperator)[index].length < 2) {
            newDate += `0${date.split(seperator)[index]}${seperator}`
        } else {
            newDate += `${date.split(seperator)[index]}${seperator}`
        }
    }

    if (date.split(seperator)[2].length < 2) {
        newDate += `0${date.split(seperator)[2]}`
    } else {
        newDate += date.split(seperator)[2]
    }

    return newDate
}

/**
 * Format date into a string in the form YYYY{seperator}MM{seperator}DD
 *
 * @param {Date} date - Date object to format
 * @param seperator - String to seperate date values with
 * @returns Formatted date
 */
export const formatDate = (date: Date, seperator = "/"): string => {
    const month = date.getMonth().toString()
    const day = date.getDate().toString()
    const year = date.getFullYear().toString()

    return [year, month, day].join(seperator)
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

    type KeysArr = ("y" | "m" | "d")[]

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

    const dateData = date.split(_seperator)
    const dateFormat: KeysArr = format.split(":") as KeysArr
    const output: {[key: string]: number} = {}

    for (let index = 0; index < 3; index++) {
        const key = keysReference[dateFormat[index]]

        output[key] = Number(dateData[index])
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
