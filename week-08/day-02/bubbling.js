'use strict';

const nav = document.querySelector('nav');
const imgIns = document.querySelector('.img-inspector');
let params = {
'size': 200,
'down': 0,
'right': 0,
};

nav.addEventListener('click', (e) => {
  let styleString = `background-size: ${params.size}%; background-position: ${params.right}px ${params.down}px`;
  if (e.target.innerText === 'Up') {
    params.down -= 10;
    imgIns.setAttribute('style', styleString);
  };
  if (e.target.innerText === 'Down') {
    params.down += 10;
    imgIns.setAttribute('style', styleString);
  };
  if (e.target.innerText === 'Left') {
    params.right -= 10;
    imgIns.setAttribute('style', styleString);
  };
  if (e.target.innerText === 'Right') {
    params.right += 10;
    imgIns.setAttribute('style', styleString);
  };
  if (e.target.innerText === 'Zoom in') {
    params.size += 20;
    imgIns.setAttribute('style', styleString);
  };
  if (e.target.innerText === 'Zoom out') {
    params.size -= 20;
    imgIns.setAttribute('style', styleString);
  };
});