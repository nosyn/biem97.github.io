#!/usr/bin/env sh

# abort on errors
set -e

rm -rf dist

# build
yarn run build

# navigate into the build output directory
cd dist

git init
git checkout -b deploy
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:biem97/biem97.github.io.git deploy


cd -