//express
//sequelize 
//mysql2
//handlebars
//body parser

const express = require('express');
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const app = express()


// Config
// template engine
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

// Body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// Conexão c/ banco de dados MySql
const sequelize = new Sequelize('teste','root', 'kadosh17',{
  host:'localhost',
  dialect:'mysql'
})


// Rotas

app.get('/cadastro',(req, res)=>{
  res.render('formulario') // o caminho fica explicito por causa do handlebars
})

app.post('/add',(req,res)=>{
  let titulo = req.body.titulo
  let texto = req.body.conteudo
  res.send(`<h3>${titulo}</h3> <div>${texto}</div>` )
})


app.listen(8081,()=>{
  console.log('Rodando')
})