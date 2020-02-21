'use strict';

const main = document.querySelector('main');

const makeNode = (name) => document.createElement(name);

const makePost = (post) => {
  let div = makeNode('div');
  let titleP = makeNode('p');
  let urlP = makeNode('p');
  let scoreP = makeNode('p');
  let timeStampP = makeNode('p');
  let upVoteButton = makeNode('button');
  let downVoteButton = makeNode('button');
  let upVoteImg = makeNode('img');
  let downVoteImg = makeNode('img');
  titleP.innerText = 'Title: ' + post.title;
  urlP.innerText = 'URL: ' + post.url;
  scoreP.innerText = 'Score: ' + post.score;
  timeStampP.innerText = 'Timestamp: ' + post.timestamp;
  upVoteImg.setAttribute('src', 'upvote.png');
  downVoteImg.setAttribute('src', 'downvote.png');
  div.appendChild(titleP);
  div.appendChild(urlP);
  div.appendChild(scoreP);
  div.appendChild(timeStampP);
  div.appendChild(upVoteButton);
  div.appendChild(downVoteButton);
  upVoteButton.appendChild(upVoteImg);
  downVoteButton.appendChild(downVoteImg);
  upVoteButton.addEventListener('click', () => {
    fetch(`/posts/${post.id}/upvote`, {
      method: 'PUT'
    })
    .then(() => refreshPosts());
  });
  downVoteButton.addEventListener('click', () => {
    fetch(`/posts/${post.id}/downvote`, {
      method: 'PUT'
    })
    .then(() => refreshPosts());
  });
  return div;
};

function refreshPosts() {
  let xhr = new XMLHttpRequest();
  
  xhr.open('GET', '/posts');
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      let response = JSON.parse(xhr.responseText);
      main.innerHTML = '';
      let h2 = makeNode('h2');
      h2.innerText = 'Posts';
      main.appendChild(h2);
      let ul = makeNode('ul');
      main.appendChild(ul);
      // console.log(response);
      for (let post of response.posts) {
        let li = makeNode('li');
        li.appendChild(makePost(post));
        ul.appendChild(li);
      };
    };
  };

  xhr.send();
};

refreshPosts();