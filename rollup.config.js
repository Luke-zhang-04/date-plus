import {babel} from "@rollup/plugin-babel"
import filesize from "rollup-plugin-filesize"
import {nodeResolve} from "@rollup/plugin-node-resolve"
import progress from "rollup-plugin-progress"
import {terser} from "rollup-plugin-terser"

const bannerProd = `/**
 * DatePlus v3.0.0 | A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @license MIT
 */
`

const bannerDev = `/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 3.0.0
 */
`

/**
 * Creates plugin setup with parameters
 * @param {string} target - Browserslist target env
 * @param {boolean} prod - if bundle is production
 * @returns {import("rollup").Plugin[]} rollup plugin configs
 */
const makePlugins = (target = "es6", prod = true) => [
    nodeResolve(),
    babel({
        babelrc: false,
        babelHelpers: "bundled",
        presets: [
            ["@babel/preset-env", {
                browserslistEnv: target,
            }],
        ],
        minified: prod,
        comments: !prod,
        shouldPrintComment: (val) => (
            !prod &&
                (/@/u).test(val) &&
                !((/eslint|istanbul/u).test(val)) &&
                !(/@author Luke Zhang/u).test(val) // Remove license headers in favour of one banner
        ),
    }),
    ...prod
        ? [terser({
            mangle: {
                properties: {
                    regex: /^_/u, // Mangle private properties
                },
            },
        })]
        : [],
    // To make bundling look cool
    filesize(),
    progress(),
]

const es5 = (() => {
    /**
     * @type {import("rollup").RollupOptions[]}
     */
    const configs = []

    /**
     * @type {[format: import("rollup").ModuleFormat, extension?: string][]}
     */
    const formats = [
        ["iife", "js"],
        ["cjs"],
    ]

    for (const [format, extension] of formats) {
        configs.push({
            input: "lib",
            output: {
                file: `dist/es5/dateplus.min.${extension ?? format}`,
                format,
                banner: bannerProd,
                name: "DatePlus",
                sourcemap: true,
            },
            plugins: makePlugins("es5", true),
        })

        configs.push({
            input: "lib",
            output: {
                file: `dist/es5/dateplus.${extension ?? format}`,
                format,
                banner: bannerDev,
                name: "DatePlus",
                sourcemap: true,
            },
            plugins: makePlugins("es5", false),
        })
    }

    return configs
})()

const es6 = (() => {
    /**
     * @type {import("rollup").RollupOptions[]}
     */
    const configs = []

    /**
     * @type {[format: import("rollup").ModuleFormat, extension?: string][]}
     */
    const formats = [
        ["esm", "js"],
        ["iife", "js"],
        ["cjs"],
    ]

    for (const [format, extension] of formats) {
        configs.push({
            input: "lib",
            output: {
                file: `dist/${format}/dateplus.min.${extension ?? format}`,
                format,
                banner: bannerProd,
                name: "DatePlus",
                sourcemap: true,
            },
            plugins: makePlugins("es6", true),
        })

        configs.push({
            input: "lib",
            output: {
                file: `dist/${format}/dateplus.${extension ?? format}`,
                format,
                banner: bannerDev,
                name: "DatePlus",
                sourcemap: true,
            },
            plugins: makePlugins("es6", false),
        })
    }

    return configs
})()

/**
 * @type {import("rollup").RollupOptions[]}
 */
const rollupConfig = [
    ...es5,
    ...es6,
]

export default rollupConfig
