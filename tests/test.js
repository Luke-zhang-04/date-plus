/**
 * DatePlus/tests
 * Defines tests for DatePlus
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.3
 */

/* eslint-disable */

const assert = require("assert")

/**
 * Tests values converted upwards (seconds to ms)
 * @param {Object.<string, number>} conv - object of converted value
 * @param {Object.string, number>} tests - values to test for
 * @returns {void} void
 */
const upwardConversion = (conv, tests) => {
    for (const [key, val] of Object.entries(tests)) {
        it(`Should equal ${val}`, () => {
            assert.strictEqual(conv[key], val)
        })
    }
}

/**
 * Main test function
 * @param {DatePlus} DatePlus - dateplus instance
 * @returns {void} void
 */
const test = (DatePlus) => {
    const date = new DatePlus(2020, 6, 1),
        formattedDate = DatePlus.formatDate(date)

    describe("formatDate", () => {
        it("Should equal 2020/6/1", () => {
            assert.strictEqual("2020/6/1", formattedDate)
        })
    })

    describe("getDateValues", () => {
        const dateVals = DatePlus.getDateValues("2020/06/1")

        upwardConversion(dateVals, {year: 2020, month: 6, day: 1})

        describe("getDateValueswith with a custom seperator", () => {
            const dateVals2 = DatePlus.getDateValues("2020-06-1", "y:m:d", "-")
    
            upwardConversion(dateVals2, {year: 2020, month: 6, day: 1})
        })
    })

    describe("addZeros", () => {
        it("Should equal 2020/06/01", () => {
            assert.strictEqual("2020/06/01", DatePlus.addZeros(formattedDate))
        })

        describe("addZeros with custom seperator", () => {
            it("Should equal 2020-06-01", () => {
                const date2 = new DatePlus(2020, 6, 10)

                assert.strictEqual("2020-06-10", date2.addZeros("-"))
            })
        })
    })

    describe("get words values", () => {
        describe("getWordMonth", () => {
            it("Should equal July", () => {
                assert.strictEqual("July", date.getWordMonth())
            })

            it("Should equal March", () => {
                assert.strictEqual("March", DatePlus.getWordMonth(2))
            })
        })

        describe("getWordDay", () => {
            it("Should equal Wednesday", () => {
                assert.strictEqual("Wednesday", date.getWordDay())
            })

            it("Should equal Wednesday", () => {
                assert.strictEqual("Wednesday", DatePlus.getWordDay(3))
            })
        })
    })

    describe("Elapse", () => {
        describe("getElapsedDays", () => {
            it("Should equal 30", () => {
                assert.strictEqual(30, date.getElapsedDays(new Date(2020, 6, 31)))
            })
        })

        describe("getElapsedDays", () => {
            it("Should equal 30", () => {
                assert.strictEqual(30, DatePlus.getElapsedDays(date, new Date(2020, 6, 31)))
            })
        })
    })

    describe("Conversions", () => {
        describe("Milliseconds conversions", () => {
            describe("msToSecs", () => {
                const conv = DatePlus.msToSecs(2001)
    
                upwardConversion(conv, {seconds: 2, ms: 1})
            })
    
            describe("msToMins", () => {
                const conv = DatePlus.msToMins(182001)
    
                upwardConversion(conv, {minutes: 3, seconds: 2, ms: 1})
            })
    
            describe("msToHrs", () => {
                const conv = DatePlus.msToHrs(14582001)
    
                upwardConversion(conv, {hours: 4, minutes: 3, seconds: 2, ms: 1})
            })

            describe("msToDays", () => {
                const conv = DatePlus.msToDays(446582001)

                upwardConversion(conv, {days: 5, hours: 4, minutes: 3, seconds: 2, ms: 1})
            })
        })

        describe("Seconds conversions", () => {
            describe("secsToMs", () => {
                it("Should equal 12 100", () => {
                    assert.strictEqual(12_100, DatePlus.secsToMs(12.1))
                })
            })

            describe("secsToMins", () => {
                const conv = DatePlus.secsToMins(121)

                upwardConversion(conv, {minutes: 2, seconds: 1})
            })

            describe("secsToHrs", () => {
                const conv = DatePlus.secsToHrs(10921)

                upwardConversion(conv, {hours: 3, minutes: 2, seconds: 1})
            })

            describe("secsToDays", () => {
                const conv = DatePlus.secsToDays(356521)

                upwardConversion(conv, {days: 4, hours: 3, minutes: 2, seconds: 1})
            })
        })

        describe("Minutes conversions", () => {
            describe("minsToMs", () => {
                it("Should equal 150 000", () => {
                    assert.strictEqual(150_000, DatePlus.minsToMs(2.5))
                })
            })

            describe("minsToSecs", () => {
                it("Should equal 300", () => {
                    assert.strictEqual(300, DatePlus.minsToSecs(5))
                })
            })

            describe("minToHrs", () => {
                const conv = DatePlus.minsToHrs(121)

                upwardConversion(conv, {hours: 2, minutes: 1})
            })

            describe("minsToDays", () => {
                const conv = DatePlus.minsToDays(4441)

                upwardConversion(conv, {days: 3, hours: 2, minutes: 1})
            })
        })

        describe("Hours conversions", () => {
            describe("hrsToMs", () => {
                it("Should equal 9 000 000", () => {
                    assert.strictEqual(9_000_000, DatePlus.hrsToMs(2.5))
                })
            })

            describe("hrsToSecs", () => {
                it("Should equal 9 000", () => {
                    assert.strictEqual(9_000, DatePlus.hrsToSecs(2.5))
                })
            })

            describe("hrsToMins", () => {
                it("Should equal 150", () => {
                    assert.strictEqual(150, DatePlus.hrsToMins(2.5))
                })
            })

            describe("hrsToDays", () => {
                const conv = DatePlus.hrsToDays(49)

                upwardConversion(conv, {days: 2, hours: 1})
            })
        })

        describe("Days conversions", () => {
            describe("daysToMs", () => {
                it("Should equal 216 000 000", () => {
                    assert.strictEqual(216_000_000, DatePlus.daysToMs(2.5))
                })
            })

            describe("daysToSecs", () => {
                it("Should equal 216 000", () => {
                    assert.strictEqual(216_000, DatePlus.daysToSecs(2.5))
                })
            })

            describe("daysToMins", () => {
                it("Should equal 3 600", () => {
                    assert.strictEqual(3_600, DatePlus.daysToMins(2.5))
                })
            })

            describe("daysToHrs", () => {
                it("Should equal 60", () => {
                    assert.strictEqual(60, DatePlus.daysToHrs(2.5))
                })
            })
        })
    })
}

describe("Node Module", () => {
    test(require("../lib").default)
})

describe("Browser Script", () => {
    test(require("./dateplus.bundle").default)
})
