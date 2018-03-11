#!/usr/bin/env node

const execSync = require('child_process').execSync;
const fs = require('fs');

//Script
console.log('Running setup');
//Removing boilerplate git files
console.log('--Removing boilerplate git files');
execSync('rm -rf .git/');
//Install dependencies
console.log('--Installing dependencies');
execSync('npm install');
//Remove this file
console.log('--Self-Destructing');
execSync('rm internals/setup.js');





