// require Mongoose
const mongoose = require('mongoose');
// save db URI
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3vt2d.mongodb.net/threecards?retryWrites=true&w=majority`;

// connect to db
mongoose
  .connect(MONGO_URI, {
    // options
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'threecards',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// create Schema for cards
const cardSchema = new mongoose.Schema({
  key: Number,
  name: String,
  keywords: String,
});

// create model for 'card' collection
const Card = mongoose.model('card', cardSchema);

const readingSchema = new mongoose.Schema({
  user: String,
  date: { type: Date, default: Date.now },
  cards: Array,
  question: String,
  answer: String,
  notes: Array,
});

//create model for 'reading' collection

const Reading = mongoose.model('reading', readingSchema);

const userSchema = new mongoose.Schema({
  username: String,
  nickname: String,
  password: String,
  readings: Array,
});

const User = mongoose.model('user', userSchema);

//export models for use
module.exports = { Card, Reading, User };
