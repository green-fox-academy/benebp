'use strict';

const NYT_API_KEY = undefined;
let nytXHR = new XMLHttpRequest();
nytXHR.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon-landing&api-key=${NYT_API_KEY}`);
nytXHR.onload = (event) => {
  let response = JSON.parse(event.target.response);
  console.log(response);
};
nytXHR.send();