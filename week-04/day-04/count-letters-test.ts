import test from 'tape';
import { commonCharsInSentences } from './count-letters';

test('checking letter counts', t => {
  const actual = commonCharsInSentences('abc')
  const expected = { 'a': 1, 'b': 1, 'c': 1 }
  t.deepEqual(actual, expected);
  t.end();
});