const BD = require('./BD.js')
const express = require('express')
const port = 8000

const app = express()
app.use(express.json())


const rotas_caneta = require('./routes/caneta.js')
app.use("/cnt", rotas_caneta)

const rotas_aeroporto = require('./routes/aeroporto.js')
app.use("/ar", rotas_aeroporto)



app.listen(port, () => console.log("Servidor ON"))
