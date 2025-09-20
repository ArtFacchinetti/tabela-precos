const Cliente = require('./Cliente')

const Marua = new Cliente({
    nome: 'Maruá',
    precos: [
        {produto_nome: 'Tomate', produto_preco: 3.99}
    ]
})

module.exports = Marua;