const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todos = new Schema({
    name: { type: String, require: true }
})

module.exports = mongoose.model('Todos', Todos)