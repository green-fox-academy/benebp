const express = require('express');
const app = express();
const PORT = 3000;

const cocktails = [
  {
    name: 'GIN FIZZ',
    price: 1520,
    contains: ['gin', 'sugar', 'lemon juice', 'soda'],
    isAlcoholic: true,
  },
  {
    name: 'BLOODY MARY',
    price: 1650,
    contains: ['vodka', 'tomato juice', 'spices'],
    isAlcoholic: true,
  },
  {
    name: 'SEX ON THE BEACH',
    price: 1850,
    contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'],
    isAlcoholic: true,
  },
  {
    name: 'CUBA LIBRE',
    price: 1850,
    contains: ['rum', 'cola', 'lime juice'],
    isAlcoholic: true,
  },
  {
    name: 'MOJITO',
    price: 1850,
    contains: ['rum', 'sugar', 'lime juice', 'soda water'],
    isAlcoholic: true,
  },
  {
    name: 'LONG ISLAND ICE TEA',
    price: 2450,
    contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'],
    isAlcoholic: true,
  },
  {
    name: 'VIRGIN MOJITO',
    price: 990,
    contains: ['sugar', 'lime juice', 'soda water'],
    isAlcoholic: false,
  },
  {
    name: 'SAFE SEX ON THE BEACH',
    price: 990,
    contains: ['peach schnapps', 'orange juice', 'cranberry juice'],
    isAlcoholic: false,
  },
];

// set the view engine to ejs
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   if (!req.query.name) {
//     res.render('greeting', {
//       greeting: 'Welcome back, Guest!'
//     });
//   } else {
//     res.render('greeting', {
//       greeting: `Welcome back, ${req.query.name}!`
//     });
//   }
// });

let alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

let cocktailNames = [];
for (let i = 0; i < cocktails.length; i++) {
  cocktailNames.push(cocktails[i].name)
}

let ingredients = [];
for (let i = 0; i < cocktails.length; i++) {
  ingredients.push(cocktails[i].contains)
}

let prices = [];
for (let i = 0; i < cocktails.length; i++) {
  prices.push(cocktails[i].price)
}

app.get('/', (req, res) => {
  res.render('home', {
    cocktailsList: cocktails,
    cocktailNames: cocktailNames,
    alcoholList: alcoholList,
    ingredients: ingredients,
    prices: prices
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});