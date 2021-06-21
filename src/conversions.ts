/**
 * DatePlus A simple program to assist with date manipulation
 *
 * @license MIT
 * @version 3.1.1
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */

import {Values} from "."

/**
 * Object that stores milliseconds with the ms key
 */
export interface MsObj {
    [index: string]: number
    ms: number
}

/**
 * Object that stores seconds and milliseconds with the seconds and ms keys
 */
export interface SecondsObj extends MsObj {
    seconds: number
}

/**
 * Object that stores minutes, seconds, and milliseconds with the minutes, seconds, and ms keys
 */
export interface MinutesObj extends SecondsObj {
    minutes: number
}

/**
 * Object that stores hours, minutes, seconds, and milliseconds with the hours, minutes, seconds, and ms keys
 */
export interface HoursObj extends MinutesObj {
    hours: number
}

/**
 * Object that stores days, hours, minutes, seconds, and milliseconds with the days, hours,
 * minutes, seconds, and ms keys
 */
export interface DaysObj {
    [index: string]: number | undefined
    ms?: number
    seconds?: number
    minutes?: number
    hours?: number
    days: number
}

/**
 * Object that stores weeks, days, hours, minutes, seconds, and milliseconds with the weeks, days,
 * hours, minutes, seconds, and ms keys
 */
export interface WeeksObj extends DaysObj {
    weeks: number
}

/**
 * Object that stores months, weeks, days, hours, minutes, seconds, and milliseconds with the
 * months, weeks, days, hours, minutes, seconds, and ms keys
 */
export interface MonthsObj extends DaysObj {
    weeks?: number
    months: number
}

/**
 * Object that stores years, months, weeks, days, hours, minutes, seconds, and milliseconds with
 * the years, months, weeks, days, hours, minutes, seconds, and ms keys
 */
export interface YearsObj extends MonthsObj {
    years: number
}

/**
 * Object that stores day, with the day key
 */
export interface DayObj {
    [index: string]: number
    day: number
}

/**
 * Object that stores month and day, with the month and day keys
 */
export interface MonthObj extends DayObj {
    month: number
}

/**
 * Object that stores year, month, and day, with the year, month, and day keys
 */
export interface YearObj extends MonthObj {
    year: number
}

/**
 * Converts milliseconds to seconds with remainders
 *
 * @param ms - Milliseconds to convert
 * @returns Object with seconds and milliseconds
 */
export const msToSecs = (ms: number): SecondsObj => ({
    ms: ms % Values.MsPerSec,
    seconds: (ms - (ms % Values.MsPerSec)) / Values.MsPerSec,
})
export const msToSeconds = msToSecs

/**
 * Converts milliseconds to minutes with remainders
 *
 * @param ms - Milliseconds to convert
 * @returns Object with minutes, seconds, and milliseconds
 */
export const msToMins = (ms: number): MinutesObj => {
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
export const msToMinutes = msToMins

/**
 * Converts milliseconds to hours with remainders
 *
 * @param ms - Milliseconds to convert
 * @returns Object with hours, minutes, seconds, and milliseconds
 */
export const msToHrs = (ms: number): HoursObj => {
    const milliseconds = (ms % Values.MsPerSec) % Values.MsPerSec
    const seconds = ((ms - (ms % Values.MsPerSec)) / Values.MsPerSec) % Values.SecsPerMin
    const minutes =
        ((ms - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin)) %
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
export const msToHours = msToHrs

/**
 * Converts milliseconds to days with remainders
 *
 * @param ms - Milliseconds to convert
 * @returns Object with days, hours, minutes, seconds, and milliseconds
 */
export const msToDays = (ms: number): DaysObj => {
    const milliseconds = (ms % Values.MsPerSec) % Values.MsPerSec
    const seconds = ((ms - (ms % Values.MsPerSec)) / Values.MsPerSec) % Values.SecsPerMin
    const minutes =
        ((ms - seconds * Values.MsPerSec - milliseconds) / (Values.MsPerSec * Values.SecsPerMin)) %
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
 * @param secs - Seconds to convert
 * @returns Converted milliseconds
 */
export const secsToMs = (secs: number): number => secs * Values.MsPerSec
export const secondsToMs = secsToMs

/**
 * Converts seconds to minutes with remainders
 *
 * @param secs - Seconds to convert
 * @returns Converted minutes
 */
export const secsToMins = (secs: number): MinutesObj => msToMins(secsToMs(secs))
export const secondsToMinutes = secsToMins

/**
 * Converts seconds to hours with remainders
 *
 * @param secs - Seconds to convert
 * @returns Converted hours
 */
export const secsToHrs = (secs: number): HoursObj => msToHrs(secsToMs(secs))
export const secondsToHours = secsToHrs

/**
 * Converts seconds to days with remainders
 *
 * @param secs - Seconds to convert
 * @returns Converted days
 */
export const secsToDays = (secs: number): DaysObj => msToDays(secsToMs(secs))
export const secondsToDays = secsToDays

/**
 * Converts hours to milliseconds
 *
 * @param mins - Minutes to convert
 * @returns Converted milliseconds
 */
export const minsToMs = (mins: number): number => mins * Values.SecsPerMin * Values.MsPerSec
export const minutesToMs = secsToDays

/**
 * Converts hours to seconds
 *
 * @param mins - Minutes to convert
 * @returns Converted seconds
 */
export const minsToSecs = (mins: number): number => mins * Values.SecsPerMin
export const minutesToSeconds = minsToSecs

/**
 * Converts minutes to hours with remainders
 *
 * @param mins - Minutes to convert
 * @returns Converted hours
 */
export const minsToHrs = (mins: number): HoursObj => msToHrs(minsToMs(mins))
export const minutesToHours = minsToHrs

/**
 * Converts minutes to days with remainders
 *
 * @param mins - Minutes to convert
 * @returns Converted days
 */
export const minsToDays = (mins: number): DaysObj => msToDays(minsToMs(mins))
export const minutesToDays = minsToDays

/**
 * Converts hours to milliseconds
 *
 * @param hours - Hours to convert
 * @returns Converted milliseconds
 */
export const hrsToMs = (hours: number): number =>
    hours * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec
export const hoursToMs = hrsToMs

/**
 * Converts hours to seconds
 *
 * @param hours - Hours to convert
 * @returns Converted seconds
 */
export const hrsToSecs = (hours: number): number => hours * Values.MinsPerHr * Values.SecsPerMin
export const hoursToSeconds = hrsToSecs

/**
 * Converts hours to minutes
 *
 * @param hours - Hours to convert
 * @returns Converted minutes
 */
export const hrsToMins = (hours: number): number => hours * Values.MinsPerHr
export const hoursToMinutes = hrsToMins

/**
 * Converts hours to days with remainders
 *
 * @param hrs - Hours to convert
 * @returns Converted days
 */
export const hrsToDays = (hrs: number): DaysObj => msToDays(hrsToMs(hrs))
export const hoursToDays = hrsToDays

/**
 * Converts days to milliseconds
 *
 * @param days - Days to convert
 * @returns Converted milliseconds
 */
export const daysToMs = (days: number): number =>
    days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin * Values.MsPerSec

/**
 * Converts days to seconds
 *
 * @param days - Days to convert
 * @returns Converted seconds
 */
export const daysToSecs = (days: number): number =>
    days * Values.HrsPerDay * Values.MinsPerHr * Values.SecsPerMin
export const daysToSeconds = daysToSecs

/**
 * Converts days to minutes
 *
 * @param days - Days to convert
 * @returns Converted minutes
 */
export const daysToMins = (days: number): number => days * Values.HrsPerDay * Values.MinsPerHr
export const daysToMinutes = daysToMins

/**
 * Converts days to hours
 *
 * @param days - Days to convert
 * @returns Converted hours
 */
export const daysToHrs = (days: number): number => days * Values.HrsPerDay
export const daysToHours = daysToHrs
