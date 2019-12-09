// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';

function printParams(input: number): void {
    console.log(arguments)
}

printParams(5)

// function asd(...args){
//     console.log(args);
//   }
  
//   asd('sa',1,'asfd');
//   asd('sad');

// WTF