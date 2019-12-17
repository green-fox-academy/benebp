// Create a Counter class
//     which has an integer property
//     when creating it should have a default value 0 or we can specify it when creating
//     we can add(number) to increase the counter's value by a whole number
//     or we can add() without parameters just increasing the counter's value by one
//     and we can get() the current value as string
//     also we can reset() the value to the initial value

'use strict';

class Counter {
    integer: number;
    private start: number;

    constructor (integer: number = 0) {
        this.integer = integer;
        this.start = integer;
    }

    add (input?:number): void {
        if (input === undefined) {
            this.integer += 1;
        } else {
            this.integer += input;
        }
    }

    get (): string {
        return 'current number: ' + this.integer;
    }

    reset (): void {
        this.integer = this.start;
    }

}

let i: Counter = new Counter(5);

console.log(i);

i.add(2);

console.log(i);

console.log(i.get());

i.reset();

console.log(i);