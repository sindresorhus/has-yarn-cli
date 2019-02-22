import test from 'ava';
import execa from 'execa';

test('main', async t => {
	await t.throwsAsync(execa('./cli.js'), /does not use Yarn/);
});
