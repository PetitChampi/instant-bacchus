#!/usr/bin/env bash

set -eux # European Union - Extended mode

(
  cd "./app"

  npm version patch
  npm install
  npm run build
  npm publish --registry "http://npm-registry.local:4873"
)