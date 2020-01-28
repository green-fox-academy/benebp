'use strict';

const GIPHY_API_KEY = undefined;
let giphfyXHR = new XMLHttpRequest();
giphfyXHR.open('GET', `http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=dog`);
giphfyXHR.onload = (event) => {
  let response = JSON.parse(event.target.response);
  console.log(response);
  console.log(response.data[0].embed_url);
  console.log(response.data[0].images.fixed_height_small_still.url);
  for (let i = 0; i < 16; i++) {
    let buttonElement = document.createElement('button');
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', response.data[i].images.fixed_height_small_still.url)
    document.body.appendChild(buttonElement);
    buttonElement.appendChild(imgElement);
  }
}
giphfyXHR.send();