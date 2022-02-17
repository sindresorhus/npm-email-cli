#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import npmEmail from 'npm-email';

const cli = meow(`
	Usage
	  $ npm-email <username>

	Example
	  $ npm-email sindresorhus
	  sindresorhus@gmail.com
`, {
	importMeta: import.meta,
});

const [username] = cli.input;

if (!username) {
	console.error('Specify a npm username');
	process.exit(1);
}

const email = await npmEmail(username);

if (!email) {
	console.error('Could not find either user or email');
	process.exit(2);
}

console.log(email);
