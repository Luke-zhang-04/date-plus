const path = require("path")

const prod = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "dateplus.bundle.min.js",
            library: "DatePlus",
            libraryTarget: "var",
        },
        mode: "production",
    },
    dev = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "dateplus.bundle.js",
            library: "DatePlus",
            libraryTarget: "var",
        },
        mode: "none",
    }

module.exports = [prod, dev]
