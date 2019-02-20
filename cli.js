#!/usr/bin/env node
'use strict';
const meow = require('meow');
const npmEmail = require('npm-email');

const cli = meow(`
	Usage
	  $ npm-email <username>

	Example
	  $ npm-email sindresorhus
	  sindresorhus@gmail.com
`);

const username = cli.input[0];

if (!username) {
	console.error('Specify an npm username');
	process.exit(1);
}

(async () => {
	console.log(await npmEmail(username));
})();
