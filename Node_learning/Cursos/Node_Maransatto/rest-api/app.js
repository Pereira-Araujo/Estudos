const express = require('express')
const app= express()
const router = express.Router()

const productsRoutes = require('./routes/products')//import 
const resquestsRoutes = require('./routes/requests')//import 


app.use('/products',productsRoutes)
app.use('/requests',resquestsRoutes)



module.exports = app