import test from 'tape';
import { Sum } from './sum';

test('summarizing elements of array', t => {
  let nums = new Sum;
  t.equal(nums.sum([1, 2, 3]), 6);
  t.end();
});

test('list with one element', t => {
  let nums = new Sum;
  t.equal(nums.sum([1]), 1);
  t.end();
});

test('with empty list', t => {
  let nums = new Sum;
  t.equal(nums.sum([]), 0);
  t.end();
});