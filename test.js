import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['sindresorhus'], {cwd: __dirname});
	t.is(stdout, 'sindresorhus@gmail.com');
});
