const express = require('express')
const app= express()
const router = express.Router()

const productsRoutes = require('./routes/products')//import 

app.use('/products',productsRoutes)


module.exports = app