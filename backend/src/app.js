// Importação de libs
const express = require('express')
const cors = require('cors')
const router = require('./router')

const app = express()

// Habilitando o uso do json com o express
app.use(express.json())

// Liberando para qualquer client acesso a nossa API
app.use(cors())

// Informando ao app para usar o router
app.use(router)

// Modularização -> precisa ficar no final
module.exports = app