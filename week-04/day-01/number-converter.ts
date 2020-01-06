'use strict';

class NumberConverter {
  num: number;

  constructor (num:number) {
    this.num = num;
  }

  toText () {
    let arr: string[] = this.num.toString().split('');
    let hundreds: string[] = ['one hundred', 'two hundred', 'three hundred', 'four hundreds', 'five hundred', 'six hundreds', 'seven hundreds', 'eight hundreds', 'nine hundred']
  }
}