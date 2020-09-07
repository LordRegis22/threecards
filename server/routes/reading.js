const express = require('express');

const router = express.Router();

const readingController = require('../controllers/readingController');

router.use('/', readingController.newCard, (req, res) =>
  res.status(200).json('new Card created ya fool!')
);

module.exports = router;
