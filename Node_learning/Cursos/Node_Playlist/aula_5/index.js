const http = require('http') // modulo http

http
  .createServer((req, res) => { // abrir servidor http
    res.end('Resposta para o usuário') // resposta p/ usuário
  })
  .listen(8081) // qual porta abrir o servidor

console.log('Servidor rodando') // resposta no servidor
