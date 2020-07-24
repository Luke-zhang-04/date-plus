// Standard Babelrc

module.exports = {
    presets: ["@babel/preset-env"],
    shouldPrintComment: (val) => /@/.test(val) && !(/eslint/.test(val)),
}
