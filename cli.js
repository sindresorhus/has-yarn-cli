#!/usr/bin/env node
'use strict';
const meow = require('meow');
const hasYarn = require('has-yarn');
const logSymbols = require('log-symbols');

const {flags} = meow(`
	Usage
	  $ has-yarn
	  ✔ This project uses Yarn

	Options
	  --quiet  Silence output (useful for scripts)

	Exits with code 0 if the project uses Yarn, otherwise code 2
`, {
	flags: {
		quiet: {
			type: 'boolean'
		}
	}
});

if (hasYarn()) {
	if (!flags.quiet) {
		console.log(`${logSymbols.success} This project uses Yarn`);
	}

	process.exit(0);
} else {
	if (!flags.quiet) {
		console.log(`${logSymbols.error} This project does not use Yarn`);
	}

	process.exit(2);
}
