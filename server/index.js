const express = require('express');
const bodyparser = require('body-parser');
const db = require(__dirname + '/../db/index.js');

let app = express();

app.use(express.static(__dirname = '/../client/dist/'));
app.use(bodyparser.json());


let port = 8080;

app.listen(port, function() {
  console.log('listening on port', port);
})