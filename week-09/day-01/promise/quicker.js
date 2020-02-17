'use strict';

const promise = Promise.reject(new Error('This is resolved'));

promise
  .catch((err) => console.error(err.message));