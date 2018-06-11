console.log(Date());

const express = require('express');
const bodyparser = require('body-parser');
const Db = require('../db/index.js');

let app = express();
let recipeRouter = express.Router();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyparser.json());

app.post('/api/recipios', function(req, res) {
  Db.createRecipio(req.body, function(err, data) {
    if(err) {
      console.error(err);
    } else {
      res.send(JSON.stringify(req.body) + ' has been added 👏').status(201).end();
    }
  });
});

app.post('/api/recipios/yummly', function(req, res) {
  Db.addYumRecipe(req.body, function(err, data) {
    if(err) {
      console.error(err);
    } else {
      res.send(JSON.stringify(req.body) + ' has been added 👏').status(201).end();
    }
  });
});

app.get('/api/recipios', function(req, res) {
  Db.getRecipios(function(err, data) {
    if(err) {
      console.error(err);
    } else {
      res.end(JSON.stringify(data));
    }
  });
});

app.post('/api/recipios/search', function(req, res) {
  Db.searchRecipios(req.body, function(err, data) {
    if(err) {
      console.error(err);
    } else {
      console.log('in server search the result is = ', JSON.stringify(data));
      res.end(JSON.stringify(data));
    }
  });
});

app.post('/api/recipios/fav', function(req, res) {
  Db.favIncrementer(req.body, function(err) {
    if (err) {
      console.error(err);
    } else {
      res.status(201).send(req.body._id);
    }
  });
})

app.post('/api/recipios/delete', function(req, res) {
  Db.deleteRecipio(req.body, function(err) {
    if (err) {
      console.error(err);
    } else {
      res.status(200).send(req.body._id);
    }
  });
})

let port = 8080;

app.listen(port, function() {
  console.log('listening on port', port);
})