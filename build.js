// !/bin/node

/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @file Replaces comments with exessive newlines with one newline
 */

// eslint-disable-next-line
const fs = require("fs")

if (!process.argv[2]) {
    throw new Error("No input file")
}

fs.readFile(process.argv[2], "utf-8", (err, data) => {
    if (err) {
        throw new Error(err)
    }

    let formattedData = data

    for (let _ = 0; _ < 2; _++) {
        formattedData = formattedData.replace(/\*\/\n\n/gu, "*/\n")
    }

    fs.writeFile(process.argv[2], formattedData, "utf-8", () => undefined)
})