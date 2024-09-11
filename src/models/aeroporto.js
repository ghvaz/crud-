const bd = require('../BD.js')
const esquema = bd.Schema
const squemaAeroporto = new esquema({
    nome:{
        type: String,
        require: [true, "Nome obrigatorio"]
    },
    endereco: {
        type: esquema.Types.Mixed,
        require: [true, "Endereço obrigatorio"]
    }
})

const esquemaAeroporto = bd.model('Aeroporto', squemaAeroporto)

module.exports = esquemaAeroporto
