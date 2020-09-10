const { Card, Reading } = require('../models/threeCardsModels');

const readingController = {};

readingController.getCardImg = (req, res, next) => {
  console.log(req.body);
  Card.findOne({ key: req.params.key })
    .then((result) => (res.locals.image = result))
    .then(() => next())
    .catch((err) => {
      return next({ err: err });
    });
};

module.exports = readingController;
