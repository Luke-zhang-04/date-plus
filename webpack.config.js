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
    },
    test = {
        entry: "./lib/index.js",
        output: {
            path: path.resolve(__dirname, "tests"),
            filename: "browser.js",
            library: "DatePlus",
            libraryTarget: "commonjs2",
        },
        mode: "production",
    }

module.exports = [prod, dev, test]
