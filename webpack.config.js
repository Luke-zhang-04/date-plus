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
            filename: "dateplus.bundle.js",
            library: "DatePlus",
            libraryTarget: "commonjs2",
        },
        mode: "none",
    }

module.exports = [prod, dev, test]
