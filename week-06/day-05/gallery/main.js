'use strict';

window.onload = function() {
  const pics = [ { path: "pics/green.jpeg", title: "Lots of green", description: "We have so many things that we have to do better..." },
                { path: "pics/blue.jpeg", title: "Lots of blue", description: "Some people have an ability to write placeholder text..." },
                { path: "pics/grey.jpeg", title: "Lots of grey", description: "I think my strongest asset maybe by far is my temperament." },
                { path: "pics/sephia.jpeg", title: "Lots of mixed... maybe sephia?", description: "Lorem Ipsum is unattractive, both inside and out." } ];

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
};