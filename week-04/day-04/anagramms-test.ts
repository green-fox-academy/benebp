import test from 'tape';
import { checkIfAnagram } from './anagramms';

test('checking anagramms', t => {
  t.equal(checkIfAnagram('silent', 'listen'), true);
  t.end();
});