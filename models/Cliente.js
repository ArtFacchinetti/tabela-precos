const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({
    nome: String,
    precos: Array
})

module.exports = mongoose.model('Cliente', Cliente);