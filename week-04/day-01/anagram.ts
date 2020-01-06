'use strict';

function checkIfAnagram (input1:string, input2:string): boolean {
  let input1Chars:string[] = input1.split('');
  let input2Chars:string[] = input2.split('');
  input1Chars.sort();
  input2Chars.sort();
  for (let i: number = 0; i < input1Chars.length; i++) {
    if (input1Chars[i] !== input2Chars[i]) {
      return false
    }
  }
  return true
}

let string1: string = 'silent';
let string2: string = 'listen';
let string3: string = 'greenfox';

console.log(checkIfAnagram(string1, string3));