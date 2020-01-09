import test from 'tape';
import { Apple } from './apples';

test('getting apple', t => {
  let a1 = new Apple
  t.equal(a1.getApple(), 'apple');
  t.end();
});