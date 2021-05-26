const express = require('express')
const app= express()
const router = express.Router()

app.use((req,res,next)=>{
    res.status(200).send({
        message:'sucess'
    })
})
module.exports = app