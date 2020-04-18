const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema;
const MatchSchema = new Schema({
    title: String,
    body: String,
    player1: String,
    player1pic: '',
    player2: String,
    player2pic: '',
    score1: String,
    score2: String,
    cardBorderColor: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const Match = mongoose.model('Match', MatchSchema);

module.exports = Match;