# Build shell script for dateplus
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

verison="1.1.0"

# Compile typescript
npx tsc -p .

# Add require to ./index.js
# printf "/**\n * DatePlus\n * A simple program to assist with date manipulation\n * @copyright Copyright (C) 2020 Luke Zhang\n * @author Luke Zhang luke-zhang-04.github.io\n * @license MIT\n * @version $version\n * @exports DatePlus\n */\nimport DatePlus from \"./lib/\"\nexport default DatePlus\n" > index.js

# Convert to commonJs with Babel
npx babel index.js -o index.js

# Run Webpack on ./build
npx webpack

# Copy bundle
cp ./dist/dateplus.bundle.js ./dist/dateplus.bundle.min.js

# Minify copy of bundle
npx babel ./dist/dateplus.bundle.min.js -o ./dist/dateplus.bundle.min.js --minified --compact true --no-comments -s inline

# Remove previous lib
if [ -d "lib" ]; then
    rm -r lib
fi

npx babel build --out-dir lib

rm -r build

# Remove previous index.js
if [ -d "index.js" ]; then
    rm -r index.js
fi

mv lib/index.js index.js
cd lib/src
mv *.* ..
cd ..
