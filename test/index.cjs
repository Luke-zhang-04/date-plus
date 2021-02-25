/**
 * DatePlus/tests
 * Defines tests for DatePlus
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 3.0.1
 */

/* eslint-disable one-var */

const test = (DatePlus, quiet = false) => {
    const date = new DatePlus(2020, 6, 1)
    /* eslint-enable one-var */

    !quiet && console.log("testing formatDate")
    let formattedDate = date.formatDate()

    if (formattedDate !== "2020/6/1") {
        throw Error(`Formatted date ${formattedDate} from formatDate does not match 2020/6/1`)
    }
    !quiet && console.log("formatDate passed\n")

    !quiet && console.log("testing getDateValues")
    const dateVals = DatePlus.getDateValues("2020/06/1")

    if (dateVals.year !== 2020 || dateVals.month !== 6 || dateVals.day !== 1) {
        throw Error(`Word day {year: ${dateVals.year}, month: ${dateVals.month}, day: ${dateVals.day}} from getDateValues does not match {year: 2020, month: 6, day: 1}`)
    }
    !quiet && console.log("getDateValues passed\n")


    !quiet && console.log("testing addZeros")
    formattedDate = DatePlus.addZeros(formattedDate)

    if (formattedDate !== "2020/06/01") {
        throw Error(`Formatted date ${formattedDate} from formatDate does not match 2020/06/01`)
    }
    !quiet && console.log("addZeros passed\n")


    !quiet && console.log("testing getWordMonth")
    if (date.getWordMonth() !== "July") {
        throw Error(`Word day ${date.getWordMonth()} from getWordDay does not match "July"`)
    }
    !quiet && console.log("getWordMonth passed\n")


    !quiet && console.log("testing getWordDay")
    if (date.getWordDay() !== "Wednesday") {
        throw Error(`Word day ${date.getWordDay()} from getWordDay does not match "Wednesday"`)
    }
    !quiet && console.log("getWordDay passed\n")


    !quiet && console.log("testing getElapsedDays")
    const date2 = new Date(2020, 6, 31)

    if (date.getElapsedDays(date2) !== 30) {
        throw Error(`Elapsed days ${date.getElapsedDays(date2)} from getElapsedDays does not match 30`)
    }
    !quiet && console.log("getElapsedDays passed\n")


    !quiet && console.log("testing msToSecs")
    let conv = DatePlus.msToSecs(2001)

    if (conv.seconds !== 2 || conv.ms !== 1) {
        throw Error(`Converted milliseconds {seconds: ${conv.seconds}, ms: ${conv.ms}} from msToSecs does not match {seconds: 2, ms: 1}`)
    }
    !quiet && console.log("msToSecs passed\n")


    !quiet && console.log("testing msToMins")
    conv = DatePlus.msToMins(182001)

    if (conv.minutes !== 3 || conv.seconds !== 2 || conv.ms !== 1) {
        throw Error(`Converted milliseconds {minutes: ${conv.minutes}, seconds: ${conv.seconds}, ms: ${conv.ms}} from msToMins does not match {minutes: 3, seconds: 2, ms: 1}`)
    }
    !quiet && console.log("msToMins passed\n")


    !quiet && console.log("testing msToHrs")
    conv = DatePlus.msToHrs(14582001)

    if (conv.hours !== 4 || conv.minutes !== 3 || conv.seconds !== 2 || conv.ms !== 1) {
        throw Error(`Converted milliseconds {hours: ${conv.hours}, minutes: ${conv.minutes}, seconds: ${conv.seconds}, ms: ${conv.ms}} from msToHrs does not match {hours: 4, minutes: 3, seconds: 2, ms: 1}`)
    }
    !quiet && console.log("msToHrs passed\n")


    !quiet && console.log("testing msToDays")
    conv = DatePlus.msToDays(446582001)

    if (conv.days !== 5 || conv.hours !== 4 || conv.minutes !== 3 || conv.seconds !== 2 || conv.ms !== 1) {
        throw Error(`Converted milliseconds {days: ${conv.days}, hours: ${conv.hours}, minutes: ${conv.minutes}, seconds: ${conv.seconds}, ms: ${conv.ms}} from msToDays does not match {days: 5, hours: 4, minutes: 3, seconds: 2, ms: 1}`)
    }
    !quiet && console.log("msToDays passed\n")


    !quiet && console.log("testing secsToMs")
    if (DatePlus.secsToMs(12.1) !== 12100) {
        throw Error(`Converted seconds ${DatePlus.secsToMs(12.1)} from secsToMs does not match 12100`)
    }
    !quiet && console.log("secsToMs passed\n")


    !quiet && console.log("testing secsToMins")
    conv = DatePlus.secsToMins(121)

    if (conv.minutes !== 2 || conv.seconds !== 1) {
        throw Error(`Converted seconds {minutes: ${conv.minutes}, seconds: ${conv.seconds}} from secsToMins does not match {minutes: 2 seconds: 1}`)
    }
    !quiet && console.log("secsToMins passed\n")


    !quiet && console.log("testing secsToHrs")
    conv = DatePlus.secsToHrs(10921)

    if (conv.hours !== 3 || conv.minutes !== 2 || conv.seconds !== 1) {
        throw Error(`Converted seconds {hours: ${conv.hours}, minutes: ${conv.minutes}, seconds: ${conv.seconds}} from secsToHrs does not match {hours: 3, minutes: 2 seconds: 1}`)
    }
    !quiet && console.log("secsToHrs passed\n")


    !quiet && console.log("testing secsToDays")
    conv = DatePlus.secsToDays(356521)

    if (conv.days !== 4 || conv.hours !== 3 || conv.minutes !== 2 || conv.seconds !== 1) {
        throw Error(`Converted seconds {days: ${conv.days}, hours: ${conv.hours}, minutes: ${conv.minutes}, seconds: ${conv.seconds}} from secsToDays does not match {days: 4, hours: 3, minutes: 2 seconds: 1}`)
    }
    !quiet && console.log("secsToDays passed\n")


    !quiet && console.log("testing minsToMs")
    if (DatePlus.minsToMs(2.5) !== 150000) {
        throw Error(`Converted minutes ${DatePlus.minsToMs(2.5)} from minsToSecs does not match 150000`)
    }
    !quiet && console.log("minsToMs passed\n")


    !quiet && console.log("testing minsToHrs")
    conv = DatePlus.minsToHrs(121)

    if (conv.hours !== 2 || conv.minutes !== 1) {
        throw Error(`Converted minutes {hours: ${conv.hours}, minutes: ${conv.minutes}} from minsToHrs does not match {hours: 2, minutes: 1}`)
    }
    !quiet && console.log("minsToHrs passed\n")


    !quiet && console.log("testing minsToDays")
    conv = DatePlus.minsToDays(4441)

    if (conv.days !== 3 || conv.hours !== 2 || conv.minutes !== 1) {
        throw Error(`Converted minutes {days: ${conv.days}, hours: ${conv.hours}, minutes: ${conv.minutes}} from minsToDays does not match {days: 3, hours: 2, minutes: 1}`)
    }
    !quiet && console.log("minsToDays passed\n")


    !quiet && console.log("testing hrsToMs")
    if (DatePlus.hrsToMs(2.5) !== 9000000) {
        throw Error(`Converted hours ${DatePlus.hrsToMs(2.5)} from hrsToMs does not match 9000000`)
    }
    !quiet && console.log("hrsToMs passed\n")


    !quiet && console.log("testing hrsToSecs")
    if (DatePlus.hrsToSecs(2.5) !== 9000) {
        throw Error(`Converted hours ${DatePlus.hrsToSecs(2.5)} from hrsToSecs does not match 9000`)
    }
    !quiet && console.log("hrsToSecs passed\n")


    !quiet && console.log("testing hrsToMins")
    if (DatePlus.hrsToMins(2.5) !== 150) {
        throw Error(`Converted hours ${DatePlus.hrsToMins(2.5)} from hrsToMins does not match 130`)
    }
    !quiet && console.log("hrsToMins passed\n")


    !quiet && console.log("testing hrsToDays")
    conv = DatePlus.hrsToDays(49)

    if (conv.days !== 2 || conv.hours !== 1) {
        throw Error(`Converted hours {days: ${conv.days}, hours: ${conv.hours}} from hrsToDays does not match {days: 2, hours: 1}`)
    }
    !quiet && console.log("hrsToDays passed\n")


    !quiet && console.log("testing daysToMs")
    if (DatePlus.daysToMs(2.5) !== 216000000) {
        throw Error(`Converted days ${DatePlus.daysToMs(2.5)} from daysToMs does not match 216000000`)
    }
    !quiet && console.log("daysToMs passed\n")


    !quiet && console.log("testing daysToSecs")
    if (DatePlus.daysToSecs(2.5) !== 216000) {
        throw Error(`Converted days ${DatePlus.daysToSecs(2.5)} from daysToSecs does not match 216000`)
    }
    !quiet && console.log("daysToSecs passed\n")


    !quiet && console.log("testing daysToMins")
    if (DatePlus.daysToMins(2.5) !== 3600) {
        throw Error(`Converted days ${DatePlus.daysToMins(2.5)} from daysToMins does not match 3600`)
    }
    !quiet && console.log("daysToMins passed\n")


    !quiet && console.log("testing daysToHrs")
    if (DatePlus.daysToHrs(2.5) !== 60) {
        throw Error(`Converted days ${DatePlus.daysToSecs(2.5)} from daysToHrs does not match 60`)
    }
    !quiet && console.log("daysToHrs passed\n")
}

const quiet = process.argv.includes("--quiet") || process.argv.includes("-q")

test(require("./dateplus.cjs").default, quiet)
