const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for scorekeeper
const scorekeeperSchema = new Schema({
  player: { type: String, required: true },
  gamesWon: { type: Number, required: true, default: 0 }
});

// Create model for todo
const Scorekeeper = mongoose.model('scorekeeper', scorekeeperSchema);

module.exports = Scorekeeper;