const express =require('express')
const rota = express.Router()
const ctrl_caneta = require('../controllers/caneta.js')
const cep = require('../middleware/cepEnd.js')


rota.get('/', ctrl_caneta.index)
rota.get('/:id', ctrl_caneta.show)
rota.post('/', cep, ctrl_caneta.store)
rota.put('/:id',cep, ctrl_caneta.update)
rota.delete('/:id', ctrl_caneta.destroy)

module.exports = rota