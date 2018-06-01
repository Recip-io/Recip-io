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
  email: String,
  date_created: { type: Date, default: Date.now },
  bio: { about: String, location: String },
  my_recipios: [],
  favorites: [],
  hash: String,
  salt: String
})

let User = mongoose.model('User', userSchema);

var user = new User();

user.save(function(err, user) {
  if (err) {
    console.error(err, null);
  }
  console.log(null, user);
});

let recipioSchema = mongoose.Schema({
  imageUrlsBySize: { 90: String },
  sourceDisplayName: String,
  ingredients: [''],
  id: String,
  recipeName: String,
  totalTimeInSeconds:  Number,
  attributes: {
      course: [''],
      cuisine: ['']
  },
  votes: { type: Number, default: 0 },
  favs: { type: Number, default: 0 },
  shares: { type: Number, default: 0 }
})


let Recipio = mongoose.model('Recipio', recipioSchema);

var recipio = new Recipio();

recipio.save(function(err, recipio) {
  if (err) {
    console.error(err, null);
  }
  console.log(null, recipio);
});

var getRecipios = function(callback) {
  Snack.find({}, function(err, recipios) {
    console.log('getRecipios called');
    if(err) {
      callback(err, null);
    } else {
      callback(null, recipios);
    }
  });
};

module.exports.user = user;
module.exports.recipio = recipio;

module.exports.getRecipios = getRecipios;