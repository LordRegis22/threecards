const { Card, Reading } = require('../models/threeCardsModels');

const readingController = {};

readingController.newCard = (req, res, next) => {
  Reading.create({
    user: 'Peege',
    cards: [1, 72, 34],
    question: 'Will I ever be rich?',
    answer: 'Probably Not',
    notes: [
      'Hope so, these are pretty scary questions',
      'Wow wouldnt it be cool if these come trye!?',
    ],
  })
    .then(() => next())
    .catch((err) => {
      return next({ err: err });
    });
};

module.exports = readingController;
