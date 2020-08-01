/**
 * DatePlus 2.0.3
 * A simple program to assist with date manipulation
 * Copyright (C) 2020 Luke Zhang luke-zhang-04.github.io
 * MIT License
 * @file defines interfaces shared across one or more files'
 * @namespace
 */

/**
 * Object that stores milliseconds
 * with the ms key
 */
export interface MsObj {
    [index: string]: number,
    ms: number,
}

/**
 * Object that stores seconds and milliseconds
 * with the seconds and ms keys
 */
export interface SecondsObj extends MsObj {
    seconds: number,
}

/**
 * Object that stores minutes, seconds, and milliseconds
 * with the minutes, seconds, and ms keys
 */
export interface MinutesObj extends SecondsObj {
    minutes: number,
}

/**
 * Object that stores hours, minutes, seconds, and milliseconds
 * with the hours, minutes, seconds, and ms keys
 */
export interface HoursObj extends MinutesObj {
    hours: number,
}

/**
 * Object that stores days, hours, minutes, seconds, and milliseconds
 * with the days, hours, minutes, seconds, and ms keys
 */
export interface DaysObj {
    [index: string]: number | undefined,
    ms?: number,
    seconds?: number,
    minutes?: number,
    hours?: number,
    days: number,
}

/**
 * Object that stores weeks, days, hours, minutes, seconds, and milliseconds
 * with the weeks, days, hours, minutes, seconds, and ms keys
 */
export interface WeeksObj extends DaysObj {
    weeks: number,
}

/**
 * Object that stores months, weeks, days, hours, minutes, seconds, and milliseconds
 * with the months, weeks, days, hours, minutes, seconds, and ms keys
 */
export interface MonthsObj extends DaysObj {
    weeks?: number,
    months: number,
}

/**
 * Object that stores years, months, weeks, days, hours, minutes, seconds, and milliseconds
 * with the years, months, weeks, days, hours, minutes, seconds, and ms keys
 */
export interface YearsObj extends MonthsObj {
    years: number,
}

/**
 * Object that stores day,
 * with the day key
 */
export interface DayObj {
    [index: string]: number,
    day: number,
}

/**
 * Object that stores month and day,
 * with the month and day keys
 */
export interface MonthObj extends DayObj {
    month: number,
}

/**
 * Object that stores year, month, and day,
 * with the year, month, and day keys
 */
export interface YearObj extends MonthObj {
    year: number,
}
