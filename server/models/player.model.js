const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name:{type:String, required:[true, 'Name is required'], minLength:[2, 'Must be at least 2 characters'], maxLength:[20, 'Cannot be more than 20 characters']},
    score:{type:Number}
})

module.exports = mongoose.model('Player', PlayerSchema);