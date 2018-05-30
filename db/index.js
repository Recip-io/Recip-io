const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/recipios');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// schema for new users
let userSchema = mongoose.Schema({
  username: String,
  email: string,
  bio: { about: string, location: string },
  my_recipios: [],
  favorites: [],
  hash: string,
  salt: string
})

let User = mongooose.model('User', userSchema);

var user = new User();

user.save(function(err, user) {
  if (err) {
    console.error(err, null);
  }
  console.log(null, user);
});

// schema for user created recipios
let recipioSchema = mongoose.Schema({
  name: String,
  created_by: String,
  description: String,
  tags: [''],
  image_url: String,
  recipe: String,
  comments: [{ comment_body: String, date: Date }],
  votes: Number,
  favs:  Number,
  shares: Number
})

let Recipio = mongoose.model('Recipio', recipioSchema);

var recipio = new Recipio();

recipio.save(function(err, recipio) {
  if (err) {
    console.error(err, null);
  }
  console.log(null, recipio);
});

module.exports.saveUser = user.save;
module.exports.saveRecipio = recipio.save;