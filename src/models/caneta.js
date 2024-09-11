const bd = require('../BD.js')
const esquema = bd.Schema

const esquemaCaneta = new esquema({
    cor: {
        type: String,
        required: [true, "Presico de uma cor '_' "]
    },
    ehBic: {
        type: Boolean,
        default: false,
    }
})

const Caneta = bd.model('caneta', esquemaCaneta)

module.exports = Caneta
