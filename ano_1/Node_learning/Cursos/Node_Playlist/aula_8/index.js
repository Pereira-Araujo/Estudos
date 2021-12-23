const express = require('express')
const app = express()

// parametro = /:nomeParametro
app.get('/hello/:name', (req,res)=>{
  res.send(`Hello guy! ${req.params.name}`) //exibindo/acessando os parametros
})

app.listen(8081, ()=>{
 console.log('Servidor rodando')
}) 
