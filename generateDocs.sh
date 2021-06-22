#!/bin/sh

./node_modules/.bin/typedoc

rm -rf wiki/**/*.md wiki/*.md

cp -r typedoc-output/* wiki

cp wiki/modules.md wiki/_Sidebar.md

grep -rl ".md" wiki | xargs sed -i 's/\.md//g'
