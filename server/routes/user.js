const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.use('/login', userController.verify, (req, res) => {
  res.status(200).send('You are logged in!');
});

router.use('/create', userController.create, (req, res) => {
  res.status(200).send(res.locals.newUser);
});

router.use('/save', userController.saveReading, (req, res) => {
  res.status(200).send(res.locals.updatedUser);
});
module.exports = router;
