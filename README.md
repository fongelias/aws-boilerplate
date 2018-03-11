# aws-boilerplate

[![Build Status](https://travis-ci.org/fongelias/aws-boilerplate.svg?branch=master)](https://travis-ci.org/fongelias/aws-boilerplate)

## Commands
### Setup
removes .git folder, installs dependencies, then self destructs

### Test
dependencies: mocha babel-core babel-preset-env
searches for files with pattern *.test.js and runs mocha on them in the latest js

### Coverage
dependencies: nyc mocha babel-core babel-preset-env
generates a report on test coverage

### Dev
dependencies: serve-es6
runs file specified in "main" in package.json in es6

### Build
dependencies: babel-loader webpack babel-preset-env babel-preset-react copy-webpack-plugin extract-text-webpack-plugin css-loader sass-loader babili-webpack-plugin
compiles and minifies static files and server files

variations:
`build:prod`
`build:dev`
`build:clean`

### Deploy
dependencies:

## Folders
### internals
scripts for setup, deployment, etc.

### dist
contains all compiled source, created with ``

### src
#### app
#### server
