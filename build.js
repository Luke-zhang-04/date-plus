// !/bin/node

/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.3
 * @file Replaces comments with exessive newlines with one newline
 */

// eslint-disable-next-line
const fs = require("fs")

const ist = "/* istanbul ignore next */"

if (!process.argv[2]) {
    throw new Error("No input file")
}

const coverageIgnore = (data) => {
    let _data = data
        .replace(/catch \(err\)/gu, `catch (err) ${ist} `)
        .replace(/catch \(e\)/gu, `catch (e) ${ist} `)
        .replace(/function \(modules\)/gu, `function (modules) ${ist} `)

    const split = _data.split("\n")

    for (const [num, line] of split.entries()) {
        if (line.includes("function _")) {
            split[num] = `${line.replace(/\{/gu, "")}${ist} {`
        } else if (line.includes("modules")) {
            break
        }
    }

    _data = split.join("\n")

    return _data
}

fs.readFile(process.argv[2], "utf-8", (err, data) => {
    if (err) {
        throw new Error(err)
    }

    let formattedData = data

    for (let _ = 0; _ < 2; _++) {
        formattedData = formattedData.replace(/\*\/\n\n/gu, "*/\n")
    }

    if (process.argv[2].includes("test")) {
        formattedData = coverageIgnore(formattedData)
    }

    fs.writeFile(process.argv[2], formattedData, "utf-8", () => undefined)
})
