console.log(Date());

const express = require('express');
const bodyparser = require('body-parser');
const db = require('../db/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyparser.json());

app.post('/recipios', function(req, res) {
  db.recipio.save(req.body, function(err, data) {
    if(err) {
      // console.error()
    } else {
      console.log('woohoo! 💯 posted.')
      res.sendStatus(201);
    }
  });
  // recipio.save().then(item => { res.send("Your Recipio has been saved!"); })
});

app.get('/recipios', function(req, res) {
  db.getRecipios(function(err, data) {
    if(err) {
      res.end(500);
    } else {
      // console.log(typeof data);
      res.end(JSON.stringify(data));
    }
  });
});


let port = 8080;

app.listen(port, function() {
  console.log('listening on port', port);
})