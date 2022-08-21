#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run export

# navigate into the build output directory
cd out

# if you are deploying to a custom domain
echo 'tberghuis.dev' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:tberghuis/tberghuis.github.io.git main

rm -rf .git

cd -


