const express = require('express')
const app= express()
const router = express.Router()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const productsRoutes = require('./routes/products')//import 
const resquestsRoutes = require('./routes/requests')//import 

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false})) // dados simples
app.use(bodyParser.json()) //tipo json

app.use('/products',productsRoutes) //rotas
app.use('/requests',resquestsRoutes)


// Erro para rotas não encontradas
app.use((res,req,next)=>{
    const error = new Error('Rota não encontrada')
    error.status = 404
    next(error)
})

app.use((error,req, res, next)=>{
    res.status(error.status || 500)
    return res.send({
        error:{
            message:error.message
        }
    })
})

module.exports = app