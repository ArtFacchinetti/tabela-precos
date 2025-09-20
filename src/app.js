const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/meu_banco').then(
    ()=>{console.log('MongoDB conectado!')},
    err => {console.log('Erro ao conectar com MongDB: ', err)}
)
