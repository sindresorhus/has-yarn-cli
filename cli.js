#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import hasYarn from 'has-yarn';
import logSymbols from 'log-symbols';

const {flags} = meow(`
	Usage
	  $ has-yarn
	  ✔ This project uses Yarn

	Options
	  --quiet  Silence output (useful for scripts)

	Exits with code 0 if the project uses Yarn, otherwise code 2
`, {
	importMeta: import.meta,
	flags: {
		quiet: {
			type: 'boolean',
		},
	},
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
