console.log(Date());

const express = require('express');
const bodyparser = require('body-parser');
const db = require('../db/index.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyparser.json());

app.post('/recipios', function(req, res) {
  db.recipio.save(req.body);
  recipio.save().then(item => { res,send("Your Recipio has been saved!"); })
});

app.get('/recipios', function(req, res) {
  db.getRecipios(function(err, recipios) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(recipios);
    }
  });
});

var capresePizza = {
  imageUrlsBySize: { 90: 'https://lh3.googleusercontent.com/ZYPv3vpwvoSCaoBcmg3BLafFHfchWkKMllUWlONPT-8VjivRFFtGGICfrqpM6I4J4Zm0_It1Orr5U7WMhDSsAQ=s90-c' },
  sourceDisplayName: 'Bake Eat Repeat',
  ingredients: [
    "pizza doughs",
    "olive oil",
    "garlic salt",
    "pesto",
    "shredded mozzarella cheese",
    "shredded parmesan cheese",
    "tomatoes",
    "balsamic reduction"
  ],
  id: 'Caprese-Pizza-1448674',
  recipeName: 'Caprese Pizza',
  totalTimeInSeconds:  1500,
  attributes: {
      course: ['Main Dishes'],
      cuisine: ['Kid-Friendly']
  },
  votes: 1,
  favs: 1,
  shares: 0
}

let port = 8080;

app.listen(port, function() {
  console.log('listening on port', port);
})