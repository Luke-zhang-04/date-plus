#!/bin/bash
# Build shell script for DeStagnate
# Copyright (C) 2020 - 2021 Luke Zhang | MIT License | luke-zhang-04.github.io

source "./colours.sh" # Source colours file

bin="node_modules/.bin"

build() {
    # Compile typescript
    echo -e "${BIYellow}Compiling ${BIGreen}./src/${Purple} with ${BIBlue}TypeScript"
    "$bin"/tsc -p tsconfig.json

    wait


    # Run Rollup on ./build and es5
    echo -e "${BIBlue}Packing ${Yellow}./build/index.js${Purple} files with ${ICyan}Rollup${Purple} and sending to ${Yellow}./dist/${Purple}"
    "$bin"/rollup -c rollup.config.js
}

buildDev() {
    # Compile typescript
    echo -e "${BIYellow}Compiling ${BIGreen}./src/${Purple} with ${BIBlue}TypeScript"
    "$bin"/tsc -p tsconfig.json

    # Run Rollup on ./build and es5
    echo -e "${BIBlue}Packing ${Yellow}./build/index.js${Purple} files with ${ICyan}Rollup${Purple} and sending to ${Yellow}./dist/${Purple}"
    "$bin"/rollup -c rollup.config.js
}

# Watches for file changes and executes build
watch() {
    fileChange1=""

    while true; do
        fileChange2=$(find lib/ -type f -exec md5 {} \;)

        if [[ "$fileChange1" != "$fileChange2" ]] ; then
            buildDev
            clear
            printf "Compiled successfully!\n\n"

            fileChange1="$fileChange2"
            printf "Waiting...\n"
        fi

        sleep 10
    done
}

if [[ "$1" == "--watch" ]]; then
    watch
elif [[ "$1" == "-d" ]]||[[ "$1" == "--dev" ]]; then
    buildDev
else
    build "$1"
fi
