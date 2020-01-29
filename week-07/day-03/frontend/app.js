const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let inputNum = req.query.input;
  if (!inputNum) {
    res.json({error: "Please provide an input!"});
  } else {
    res.json({received: Number(inputNum), result: inputNum * 2});
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (!name&&!title) {
    res.status(400).json({error: "Please provide a name and a title!"})
  } else if (!name) {
    res.status(400).json({error: "Please provide a name!"})
  } else if (!title) {
    res.status(400).json({error: "Please provide a title!"})
  } else {
    res.json({welcome_message: `Oh, hi there ${name}, my dear ${title}!`})
  }
});

app.get('/appenda/:string', (req, res) => {
  let string = req.params.string;
  res.json({appended: string + "a"});
});

app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let number = req.body.until;
  if (action === 'sum') {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    res.json({result: sum})
  } else if (action === 'factor') {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
      sum *= i;
    }
    res.json({result: sum})
  }  
});

app.post('/arrays', (req, res) => {
  let action = req.body.what;
  let numbers = req.body.numbers;
  if (action === 'double') {
    let newNumbers = [];
    numbers.forEach(element => {
      newNumbers.push(element * 2);
    });
    res.json({results: newNumbers});
  } else if (action === 'sum') {
    let sum = 0;
    numbers.forEach(element => {
      sum += element;
    });
    res.json({result: sum});
  } else if (action === 'multiply') {
    let sum = 1;
    numbers.forEach(element => {
      sum *= element;
    });
    res.json({result: sum});
  } else if (!action) {
    res.json({error: "Please provide what to do with the numbers!"})
  }
});

app.listen(3000);