import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['sindresorhus']);
	t.is(stdout, 'sindresorhus@gmail.com');
});

test('no username', async t => {
	const {stderr} = await t.throwsAsync(execa('./cli.js'));
	t.is(stderr, 'Specify a npm username');
});

test('no email found', async t => {
	const {stderr} = await t.throwsAsync(execa('./cli.js', ['sindresorhus123']));
	t.is(stderr, 'Could not find either user or email');
});
