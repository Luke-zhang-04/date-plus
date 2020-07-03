/**
 * DatePlus/tests
 * Defines tests for DatePlus
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.0
 */

/* eslint-disable one-var */
const DatePlus = require("..").default

const date = new DatePlus(2020, 6, 1)
/* eslint-enable one-var */

console.log("testing formatDate")
let formattedDate = date.formatDate()

if (formattedDate !== "2020/6/1") {
    throw Error(`Formatted date ${formattedDate} from formatDate does not match 2020/6/1`)
}
console.log("formatDate passed\n")


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
    throw Error(`Word day ${date.getElapsedDays(date2)} from getElapsedDays does not match 30`)
}
console.log("getElapsedDays passed\n")


console.log("testing getDateValues")
const dateVals = DatePlus.getDateValues("2020/06/1")

if (dateVals.year !== 2020 && dateVals.month !== 6 && dateVals.day !== 1) {
    throw Error(`Word day {year: ${dateVals.year}, month: ${dateVals.month}, day: ${dateVals.day}} from getDateValues does not match {year: 2020, month: 6, day: 1}`)
}
console.log("getDateValues passed\n")
