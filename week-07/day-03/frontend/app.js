const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('assets'));

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

app.listen(3000);