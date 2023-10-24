const app = require('./app')

// Inclui e configura as variáveis de ambiente para serem usadas pelo .env
require('dotenv').config()

// Startando o servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`))