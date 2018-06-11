console.log(Date());

const express = require('express');
const bodyparser = require('body-parser');
const Db = require('../db/index.js');

let app = express();
let recipeRouter = express.Router();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyparser.json());

app.post('/api/recipios', function(req, res) {
  console.log('in server POST req.body = ', req.body);
  Db.createRecipio(req.body, function(err, data) {
    if(err) {
      console.log('server post /api/recipio err');
    } else {
      console.log('woohoo! 💯 posted.')
      res.send(JSON.stringify(req.body) + ' has been added 👏').status(201).end();
    }
  });
});

app.post('/api/recipios/yummly', function(req, res) {
  console.log('in server POST req.body = ', req.body);
  Db.addYumRecipe(req.body, function(err, data) {
    if(err) {
      console.log('server post /api/recipios/yummly err');
    } else {
      console.log('woohoo! 💯 posted.')
      res.send(JSON.stringify(req.body) + ' has been added 👏').status(201).end();
    }
  });
});

app.get('/api/recipios', function(req, res) {
  Db.getRecipios(function(err, data) {
    if(err) {
      res.end(500);
    } else {
      // console.log(typeof data);
      res.end(JSON.stringify(data));
    }
  });
});

app.post('/api/recipios/search', function(req, res) {
  console.log('in server search req.body = ', req.body);
  Db.searchRecipios(req.body, function(err, data) {
    if(err) {
      res.end(500);
    } else {
      // console.log(typeof data);
      console.log('in server search the result is = ', JSON.stringify(data));
      res.end(JSON.stringify(data));
    }
  });
});

app.post('/api/recipios/fav', function(req, res) {
  // let id = req.params.recipioId;
  console.log('in server fav req.body = ', req.body);
  Db.favIncrementer(req.body, function(err) {
    if (err) {
      res.send(500);
    } else {
      res.status(201).send(req.body._id);
    }
  });
})

app.post('/api/recipios/delete', function(req, res) {
  // let id = req.params.recipioId;
  console.log('in server delete req.body = ', req.body);
  Db.deleteRecipio(req.body, function(err) {
    if (err) {
      res.send(500);
    } else {
      res.status(200).send(req.body._id);
    }
  });
})

let port = 8080;

app.listen(port, function() {
  console.log('listening on port', port);
})