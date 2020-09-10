const { User, Card } = require('../models/threeCardsModels');

const userController = {};

userController.verify = (req, res, next) => {
  return next();
};

userController.create = (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.locals.newUser = user;
      return next();
    }
  });
};

userController.saveReading = (req, res, next) => {
  res.locals.cardEntries = [];
  const updatedReading = { ...req.body };
  updatedReading.date = new Date();
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

module.exports = userController;
