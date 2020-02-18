const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  const message = req.query.message;
  if (!message) {
    res.json({error: "I am Groot!"});
  } else {
    res.json({received: message, translated: "I am Groot!"});
  }
});

app.get('/yondu', (req, res) => {
  const {distance, time} = req.query;
  const speed = distance / time;
  res.json({distance: Number(distance), time: Number(time), speed: speed});
});

module.exports = app;