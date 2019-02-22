#!/usr/bin/env node
'use strict';
const meow = require('meow');
const hasYarn = require('has-yarn');
const logSymbols = require('log-symbols');

meow(`
	Usage
	  $ has-yarn
	  ✔ This project uses Yarn

	Exits with code 0 if the project uses Yarn, otherwise code 2
`);

if (hasYarn()) {
	console.log(`${logSymbols.success} This project uses Yarn`);
	process.exit(0);
} else {
	console.log(`${logSymbols.error} This project does not use Yarn`);
	process.exit(2);
}
