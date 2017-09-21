const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser= require('body-parser');

require('dotenv').config();
//const ejs = require('ejs');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

var db

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/', (req, res) =>{
  db.collection('mixes').find().toArray((err, results)=>{
  if (err) return console.log(err);
})
})

app.post('/mixes', (req, res) => {
  db.collection('mixes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})



MongoClient.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds141464.mlab.com:41464/youarelisteningtoweather', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})









