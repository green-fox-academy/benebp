'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();
const apiLogger = require('api-logger');
app.use(express.json());
app.use(express.static('./static'));
app.use(apiLogger());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'foxplayer',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/playlists', (req, res) => {
  const getLinksSQL = 'SELECT * FROM playlists;';
  conn.query(getLinksSQL, (err, result) => {
    if (err) {
      res.send({ error: 'DB ERROR' });
    } else {
      res.json(result);
    };
  });
});

app.post('/playlists', (req, res) => {
  const newPlaylist = req.body.playlist;
  const newPlaylistSQL = 'INSERT INTO playlists (playlist) VALUES (?);';
  if (newPlaylist) {
    conn.query(newPlaylistSQL, [newPlaylist], (err) => {
      if (err) {
        res.send({ error: 'DB ERROR' });
      } else {
        const getLinksSQL = 'SELECT * FROM playlists ORDER BY id DESC;';
        conn.query(getLinksSQL, (err, result) => {
          if (err) {
            res.send({ error: 'DB ERROR' });
          } else {
            res.json(result);
          };
        });
      };
    });
  };
});

app.delete('/playlists/:id', (req, res) => {
  const deletePlaylistId = parseInt(req.params.id);
  if (typeof deletePlaylistId !== 'number' || !deletePlaylistId) {
    res.json({ error: 'playlist id not present or not a number' });
  } else {
    const getPlaylistOfGivenIdSQL = 'SELECT * FROM playlists WHERE id = ?;';
    conn.query(getPlaylistOfGivenIdSQL, [deletePlaylistId], (err, result) => {
      if (err) {
        res.send({ error: 'DB ERROR' });
      } else if (result.system === 1) {
        res.json({ error: 'cannot delete favourite playlist' })
      } else {
        const deletePlaylistOfGivenIdSQL = 'DELETE FROM playlists WHERE id = ?;';
        conn.query(deletePlaylistOfGivenIdSQL, [deletePlaylistId], (err) => {
          if (err) {
            res.send({ error: 'DB ERROR' });
          } else {
            res.json({ playlist: 'playlist deleted' });
          };
        });
      };
    });
  };
});

app.get('/playlist-tracks', (req, res) => {
  const getTracksSQL = 'SELECT * FROM tracks;';
  conn.query(getTracksSQL, (err, result) => {
    if (err) {
      res.send({ error: 'DB ERROR' });
    } else {
      res.json(result);
    };
  });
});

app.get('/playlist-tracks/:playlist_id', (req, res) => {
  const playlist_id = req.params.playlist_id;
  const getTracksOfPlaylistSQL = 'SELECT * FROM tracks WHERE playlist_id = ?;';
  conn.query(getTracksOfPlaylistSQL, [playlist_id], (err, result) => {
    if (err) {
      res.send({ error: 'DB ERROR' });
    } else {
      res.json(result);
    };
  });
});

app.listen(3000);