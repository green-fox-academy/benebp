// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict';

let animals: string[] = ["koal", "pand", "zebr"];

for (let i: number = 0; i < animals.length; i++) {
    animals[i] += "a";
}

console.log(animals);