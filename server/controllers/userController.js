const { User, Card } = require('../models/threeCardsModels');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userController = {};

userController.verify = (req, res, next) => {
  let password = req.body.password;
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return next(err);
    } else {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (err) next(err);
        if (result) {
          res.locals.verifiedUser = user;

          return next();
        }
      });
    }
  });
};

userController.create = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) next(err);
    const newUser = req.body;
    newUser.password = hash;
    User.create(newUser, (err, user) => {
      if (err) {
        return next(err);
      } else {
        res.locals.newUser = user;
        return next();
      }
    });
  });
};

userController.saveReading = (req, res, next) => {
  res.locals.cardEntries = [];
  const updatedReading = { ...req.body };
  updatedReading.date = new Date();
  updatedReading.readingID = mongoose.Types.ObjectId();
  getCardDocument(req.body.cards);

  async function getCardDocument(cards) {
    for (let key of cards) {
      await Card.findOne({ key: key })
        .then((result) => res.locals.cardEntries.push(result))
        .catch((err) => next(err));
    }
    updatedReading.cards = res.locals.cardEntries;
    User.updateOne(
      { username: req.body.user },
      { $push: { readings: updatedReading } },
      (err, result) => {
        if (err) next(err);
      }
    );
    User.findOne({ username: req.body.user }, (err, updatedUser) => {
      if (err) next(err);
      const { username, nickname, readings } = updatedUser;
      const returnUserInfo = {
        username: username,
        nickname: nickname,
        readings: readings,
      };
      res.locals.updatedUser = returnUserInfo;
      return next();
    });
  }
};

userController.deleteReading = (req, res, next) => {
  console.log(req.body.readingID);
  User.updateOne(
    {},
    {
      $pull: {
        readings: { readingID: mongoose.Types.ObjectId(req.body.readingID) },
      },
    },
    (err, user) => {
      if (err) console.log(err);
      //console.log(req.body.user);
      // console.log('here');
      User.findOne({ username: req.body.user.username }, (err, updatedUser) => {
        console.log(req.body.user.username);
        if (err) next(err);
        else if (updatedUser) {
          console.log('there');
          const { username, nickname, readings } = updatedUser;
          const returnUserInfo = {
            username: username,
            nickname: nickname,
            readings: readings,
          };
          res.locals.updatedUser = returnUserInfo;
          console.log(res.locals.updatedUser);
          return next();
        }
      });
    }
  );
  //return next();
};

module.exports = userController;
