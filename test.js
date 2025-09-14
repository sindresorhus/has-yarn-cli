import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	await t.throwsAsync(execa('./cli.js'), {message: /does not use Yarn/});
});
