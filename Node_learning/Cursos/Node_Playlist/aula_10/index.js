const express = require('express')
const app = express()

app.get('/',(req,res)=>{

  //abrindo html 
  //__dirname = caminho absoluto
  res.sendFile(__dirname + '/texts/text.html') 
})

app.listen(8081, ()=>{
 console.log('Servidor rodando')
}) 
