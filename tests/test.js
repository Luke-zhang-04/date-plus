/**
 * DatePlus/tests
 * Defines tests for DatePlus
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.0
 */

/* eslint-disable one-var */

const test = (DatePlus) => {
    const date = new DatePlus(2020, 6, 1)
    /* eslint-enable one-var */

    console.log("testing formatDate")
    let formattedDate = date.formatDate()

    if (formattedDate !== "2020/6/1") {
        throw Error(`Formatted date ${formattedDate} from formatDate does not match 2020/6/1`)
    }
    console.log("formatDate passed\n")

    console.log("testing getDateValues")
    const dateVals = DatePlus.getDateValues("2020/06/1")

    if (dateVals.year !== 2020 || dateVals.month !== 6 || dateVals.day !== 1) {
        throw Error(`Word day {year: ${dateVals.year}, month: ${dateVals.month}, day: ${dateVals.day}} from getDateValues does not match {year: 2020, month: 6, day: 1}`)
    }
    console.log("getDateValues passed\n")


    console.log("testing addZeros")
    formattedDate = DatePlus.addZeros(formattedDate)

    if (formattedDate !== "2020/06/01") {
        throw Error(`Formatted date ${formattedDate} from formatDate does not match 2020/06/01`)
    }
    console.log("addZeros passed\n")


    console.log("testing getWordMonth")
    if (date.getWordMonth() !== "July") {
        throw Error(`Word day ${date.getWordMonth()} from getWordDay does not match "July"`)
    }
    console.log("getWordMonth passed\n")


    console.log("testing getWordDay")
    if (date.getWordDay() !== "Wednesday") {
        throw Error(`Word day ${date.getWordDay()} from getWordDay does not match "Wednesday"`)
    }
    console.log("getWordDay passed\n")


    console.log("testing getElapsedDays")
    const date2 = new Date(2020, 6, 31)

    if (date.getElapsedDays(date2) !== 30) {
        throw Error(`Elapsed days ${date.getElapsedDays(date2)} from getElapsedDays does not match 30`)
    }
    console.log("getElapsedDays passed\n")

    
    console.log("testing msToSeconds")
    let conv = DatePlus.msToSeconds(2001)

    if (conv.seconds !== 2 || conv.ms !== 1) {
        throw Error(`Converted day {seconds: ${conv.seconds}, ms: ${conv.ms}} from msToSeconds does not match {seconds: 2, ms: 1}`)
    }
    console.log("msToSeconds passed\n")


    console.log("testing msToMinutes")
    conv = DatePlus.msToMinutes(182001)

    if (conv.minutes !== 3 || conv.seconds !== 2 || conv.ms !== 1) {
        throw Error(`Converted day {minutes: ${conv.minutes}, seconds: ${conv.seconds}, ms: ${conv.ms}} from msToMinutes does not match {minutes: 3, seconds: 2, ms: 1}`)
    }
    console.log("msToMinutes passed\n")

    console.log("testing msToHours")
    conv = DatePlus.msToHours(14582001)

    if (conv.hours !== 4 || conv.minutes !== 3 || conv.seconds !== 2 || conv.ms !== 1) {
        throw Error(`Converted day {hours: ${conv.hours}, minutes: ${conv.minutes}, seconds: ${conv.seconds}, ms: ${conv.ms}} from msToHours does not match {hours: 4, minutes: 3, seconds: 2, ms: 1}`)
    }
    console.log("msToHours passed\n")
}

console.log("TESTING AS NODE MODULE\n")
test(require("..").default)
console.log("NODE ENV PASSED\n\n\n")

console.log("TESTING AS BROWSER APP SCRIPT\n")
test(require("../dist/dateplus.bundle.min").default)
console.log("BROWSER ENV PASSED")
