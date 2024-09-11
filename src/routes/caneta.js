const express =require('express')
const rota = express.Router()
const ctrl_caneta = require('../controllers/caneta.js')

rota.get('/', ctrl_caneta.index)
rota.get('/:id', ctrl_caneta.show)
rota.post('/', ctrl_caneta.store)
rota.put('/:id', ctrl_caneta.update)
rota.delete('/:id', ctrl_caneta.destroy)

module.exports = rota