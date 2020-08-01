#!/bin/bash
# Build shell script for dateplus
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )" # Get location of this script
. "${DIR}/colours.sh" # Source colours file

# Build script
build() {
    # Compile typescript
    printf "${BIYellow}Compiling ${BIBlue}./src/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p tsconfig.json &

    wait

    # Run Webpack on ./build
    printf "${BIBlue}Packing ${Yellow}./lib/index.js${Purple} files with ${ICyan}Webpack${Purple} and sending to ${Yellow}./dist/${Purple}\n"
    npx webpack

    # Minify copy of bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/dateplus.bundle.min.js/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/dateplus.bundle.min.js -o ./dist/dateplus.bundle.min.js --no-comments --no-babelrc --config-file ./.babelrc.min.js &
    npx babel ./tests/browser.js -o ./tests/browser.js --no-comments --no-babelrc --config-file ./.babelrc.min.js &

    # Run babel on bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/dateplus.bundle.min.js/${Purple}\n"
    npx babel ./dist/dateplus.bundle.js -o ./dist/dateplus.bundle.js -s inline &

    wait

    # Format development dist
    printf "${BIPurple}Formatting ${Red}dist ${Green}bundle\n"
    npx eslint ./dist/dateplus.bundle.js --no-ignore --fix --env browser --rule "{\"no-var\": \"off\", \"prefer-arrow/prefer-arrow-functions\": \"off\", \"camelcase\": \"off\", \"id-length\": \"off\"}" > out.log &

    wait

    node build.js ./dist/dateplus.bundle.js

    echo "/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.3
 */
$(cat ./dist/dateplus.bundle.js)" > ./dist/dateplus.bundle.js &

    echo "/* DatePlus 2.0.3 | Copyright (C) 2020 Luke Zhang luke-zhang-04.github.io | MIT License */

$(cat ./dist/dateplus.bundle.min.js)" > ./dist/dateplus.bundle.min.js &

    echo "/**
 * DatePlus
 * A simple program to assist with date manipulation
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.3
 */
$(cat ./tests/browser.js)" > ./tests/browser.js &

    wait

    printf "${BIPurple}Formatting ${BIGreen}lib\n"
    for d in ./lib/* ; do
        if [[ ${d##*.} != "map" ]]; then
            npx eslint "$d" --no-ignore --fix --env browser --rule "{\"no-var\": \"off\", \"prefer-arrow/prefer-arrow-functions\": \"off\", \"camelcase\": \"off\", \"id-length\": \"off\", \"no-useless-constructor\": \"off\", \"@typescript-eslint/no-useless-constructor\": \"off\"}" >> out.log &
        fi
    done

    wait

    for d in ./lib/* ; do
        if [[ ${d##*.} != "map" ]]; then
            node build.js "$d"
        fi
    done

    wait

}

# Watches for file changes and executes build
watch() {
    fileChange1=""

    while [[ true ]]; do
        fileChange2=$(find lib/ -type f -exec md5 {} \;)

        if [[ "$fileChange1" != "$fileChange2" ]] ; then           
            build
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
else
    build
fi
