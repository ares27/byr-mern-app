const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema;
const PlayerSchema = new Schema({
    name: String,
    aka: String,
    slogan: String,
    createddate: {
        type: String,
        default: Date.now()
    }
});

//Model
const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;