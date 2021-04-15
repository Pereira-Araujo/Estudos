// express
const express = require('express')
const app = express()

// Criação de rotas
app.get('/', (req, res) => { // pagina inicial
  res.send('<h2>Seja bem vindo ao app</h2>') // mensagem ao user
})

app.get('/sobre', (req, res) => {// pagina sobre
  res.send('Rota: Sobre')
})

// esta deve ser a última linha do código
// criação e ativação do servidor
app.listen(8081, () => {
  console.log('Servidor rodando')
})
