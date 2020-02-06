'use strict';

// Changing the first dropdown should change the contents of the second one
// Display the selected movie

let movieDB = [
  {movie: 'Moon', genre: 'scifi'},
  {movie: '2001: A Space Odyssey', genre: 'scifi'},
  {movie: 'Contact', genre: 'drama'},
  {movie: 'Darkest Hour', genre: 'drama'},
  {movie: 'There Will Be Blood', genre: 'drama'},
  {movie: 'American Beauty', genre: 'comedy'},
  {movie: 'Airplane!', genre: 'comedy'},
  {movie: 'Deadpool', genre: 'comedy'},
  {movie: 'Wayne\'s World', genre: 'comedy'}
];

const scifiSelector = document.getElementById('genreSelector');

scifiSelector.addEventListener('input', () => {
  console.log(scifiSelector.value);
  const movieSelector = document.getElementById('movieSelector');
  while (movieSelector.childNodes.length > 1) {
    movieSelector.removeChild(movieSelector.lastChild);
  }
  movieDB.forEach(element => {
    if (element.genre === scifiSelector.value) {
      const option = document.createElement('option');
      movieSelector.appendChild(option);
      option.innerText = element.movie;
      option.setAttribute('class', element.movie);
      option.setAttribute('value', element.movie);
    }
  });
});