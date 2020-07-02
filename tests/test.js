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

/* eslint-enable one-var */
