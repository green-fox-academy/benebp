'use strict';

const main = document.querySelector('main');

const makeNode = (name) => document.createElement(name);

const makePost = () => {
  let div = makeNode('div');
  let p = makeNode('p');
  
}

function refreshPosts() {
  let xhr = new XMLHttpRequest();
  
  xhr.open('GET', '/posts');
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      let response = JSON.parse(xhr.responseText);
      let h2 = makeNode('h2');
      h2.innerText = 'Posts';
      main.appendChild(h2);
      let ul = makeNode('ul');
      main.appendChild(ul);
      console.log(response);
      for (let post of response.posts) {
        let li = makeNode('li');
        li.innerText = post.title;
        ul.appendChild(li);
      };
    };
  };

  xhr.send();
}

refreshPosts();