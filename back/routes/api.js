const express = require('express');
const router = express.Router();
const Scorekeeper = require('../models/scorekeeper');

// Get the score
router.get('/scorekeeper', (req, res, next) => {
  // This will return all the data, exposing only the id and other fields to the client
  Scorekeeper.find({}, ['player', 'gamesWon'])
    .then((data) => res.json(data))
    .catch(next);
});

// Put the score

router.post('/scorekeeper', (req, res, next) => {
  console.log("I'm here -- 1")
  if (req.body.player) {
    Scorekeeper.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty or incomplete?',
    });
  }
});

// Update the score
router.put('/scorekeeper', (req, res, next) => {
  console.log("I'm updating the database, here is the req", req)
  if (req.body.id) {
    Scorekeeper.updateOne({ _id: req.body.id }, {
      $inc: { gamesWon: 1 }
    }).exec()
      .then((data) => res.json(data))
      .catch(next);
  }
  else {
    res.json({
      error: 'Something went wrong with incrementing the score, because of a lack of id.'
    });
  }
});


module.exports = router;