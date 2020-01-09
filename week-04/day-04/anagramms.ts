'use strict';

export function checkIfAnagram (input1:string, input2:string): boolean {
  let input1Chars:string[] = input1.split('').sort();
  let input2Chars:string[] = input2.split('').sort();
  for (let i: number = 0; i < input1Chars.length; i++) {
    if (input1Chars[i] !== input2Chars[i]) {
      return false
    }
  }
  return true
}