//express
//sequelize 
//mysql2
//handlebars
//body parser

const express = require('express');
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const Post = require('./models/Post')

// Config
// template engine
app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')


// Body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// Rotas

app.get('/',(req, res)=>{
    Post.findAll({order:[['id', 'DESC']]}).then((posts)=>{
    res.render('home',{ posts:posts}) 
  })
})

app.get('/cadastro',(req, res)=>{
  res.render('formulario') // o caminho fica explicito por causa do handlebars
})

app.post('/add',(req,res)=>{
 Post.create({
   titulo:req.body.titulo,
   autor:req.body.autor,
   conteudo:req.body.conteudo
 }).then(()=>{
   res.redirect('/')
 }).catch((error)=>{
   res.send(`Desculpe, mas houve algum erro: ${error}`)
 })
})

app.get('/deletar/:id', (req,res)=>{
  Post.destroy({where:{'id':req.params.id}}).then(()=>{
     res.render('delete')
  }).catch(()=>{
    res.send('Esta postagem não existe')
  })

})

app.listen(8081,()=>{
  console.log('Rodando')
})