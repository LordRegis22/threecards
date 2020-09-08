const { Card, Reading } = require('../models/threeCardsModels');

const readingController = {};

readingController.newCard = (req, res, next) => {
  console.log(req.body);
  Card.find({ key: req.body.key })
    .then((result) => (res.locals.image = result[0]))
    .then(() => next())
    .catch((err) => {
      return next({ err: err });
    });
};

module.exports = readingController;
