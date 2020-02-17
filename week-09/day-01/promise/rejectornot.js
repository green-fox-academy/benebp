'use strict';

const promise = () => new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

promise()
  .then(console.log, (error) => console.log(error.message));