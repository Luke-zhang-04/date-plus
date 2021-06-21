/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 4.0.0-beta1
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

export const enum Values {
    HrsPerDay = 24,
    MinsPerHr = 60,
    SecsPerMin = 60,
    MsPerSec = 1000,
}

export const values = {
    hrsPerDay: 24,
    minsPerHr: 60,
    secsPerMin: 60,
    msPerSec: 1000,
}

/**
 * Reference to days of the week, zero indexed
 */
export const daysReference = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

/**
 * Reference to months of a year, zero indexed
 */
export const monthsReference = {
    0: "January",
    1: "Feburary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
}

/**
 * One minutes in ms
 */
export const oneMinute = Values.SecsPerMin * Values.MsPerSec

/**
 * One hour in ms
 */
export const oneHour = Values.MinsPerHr * oneMinute

/**
 * One day in ms
 */
export const oneDay = Values.HrsPerDay * oneHour
