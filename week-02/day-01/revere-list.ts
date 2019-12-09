// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict';

let numList: number[] = [3, 4, 5, 6, 7];

let temp: number[] = [];

console.log(numList);

for (let i: number = 0; i < numList.length; i++) {
    temp[i] = numList[(numList.length - 1) - i];
}

console.log(temp);