const path = require("path")

module.exports = {
    entry: "./build/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "dateplus.bundle.js",
        library: "dateplus",
        libraryTarget: "commonjs2",
    },
    mode: "production",
}
