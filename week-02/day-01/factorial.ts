// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict';

function factorio(input:number):number {
    let fac:number = 1;
    for (let i: number = 1; i <= input; i++) {
        fac *= i;
    }
    return fac;
}

console.log(factorio(8));