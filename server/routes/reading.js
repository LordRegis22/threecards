const express = require('express');

const router = express.Router();

const readingController = require('../controllers/readingController');

router.use('/:key', readingController.getCardImg, (req, res) =>
  res.status(200).json(res.locals.image)
);

module.exports = router;
