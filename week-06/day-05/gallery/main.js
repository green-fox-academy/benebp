'use strict';

window.onload = function() {
  const pics = [ { path: "pics/green.jpeg", title: "Lots of green", description: "We have so many things that we have to do better..." },
                { path: "pics/blue.jpeg", title: "Lots of blue", description: "Some people have an ability to write placeholder text..." },
                { path: "pics/grey.jpeg", title: "Lots of grey", description: "I think my strongest asset maybe by far is my temperament." },
                { path: "pics/sephia.jpeg", title: "Lots of mixed... maybe sephia?", description: "Lorem Ipsum is unattractive, both inside and out." },
                { path: "pics/greener.jpeg", title: "More green stuff", description: "My text is long and beautiful." },
                { path: "pics/white.jpeg", title: "Some white stuff too", description: "Lorem Ipsum is FAKE TEXT!" } ];

  const changePic = (picNum) => {
    document.getElementById('pic').src = pics[picNum].path;
    document.querySelector('.title').innerText = pics[picNum].title;
    document.querySelector('.description').innerText = pics[picNum].description;
  };

  let picNum = 0;
  changePic(picNum);

  document.querySelector('.left-aside').onclick = () => {
    if (picNum === 0) {
      picNum = pics.length - 1;
    } else {
      picNum--;
    }
    console.log(picNum);
    changePic(picNum);
  };
  
  document.querySelector('.right-aside').onclick = () => {
    if (picNum === pics.length - 1) {
      picNum = 0;
    } else {
      picNum++;
    }
    console.log(picNum);
    changePic(picNum);
  };

  pics.forEach(e => {
    const ulElement = document.querySelector('.thumbnails');
    const newThumbnail = document.createElement('button');
    const newImg = document.createElement('img');
    ulElement.appendChild(newThumbnail);
    newThumbnail.setAttribute('class', 'thumbnailButtons');
    newThumbnail.appendChild(newImg);
    newImg.setAttribute("class", "thumbnail");
    newImg.setAttribute('width', '128px');
    newImg.setAttribute('height', '72px');
    newImg.setAttribute('src', e.path);
    newThumbnail.onclick = () => {
      picNum = pics.indexOf(e);
      changePic(picNum);
    }
  });
};