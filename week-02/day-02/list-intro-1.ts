'use strict';

// Create an empty list which will contain names (strings)

let list: string[] = [];

// Print out the number of elements in the list

console.log(list.length);

// Add William to the list

list.push('William');

// Print out whether the list is empty or not

if (list.length > 0) {
    console.log('List is not empty.');
} else {
    console.log('List is empty.');
}

// Add John to the list

list.push('John');

// Add Amanda to the list

list.push('Amanda');

// Print out the number of elements in the list

console.log(list.length);

// Print out the 3rd element

console.log(list[2]);

// Iterate through the list and print out each name
// William
// John
// Amanda

list.forEach(
    function(listing){
      console.log(listing);
});

// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda

let i: number = 1;
list.forEach(
    function(sorting){
      console.log(i + '. ' + sorting);
      i++;
});

// Remove the 2nd element

list.splice(1,1);
console.log(list);

// Iterate through the list in a reversed order and print out each name
// Amanda
// William

list.reverse();
console.log(list);

// Remove all elements

list.splice(0);
console.log(list);