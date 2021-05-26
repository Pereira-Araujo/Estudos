const express = require('express') //import
const app = express()

app.use((req, res, next)=>{
    res.status(200).send({
        message:'Perfect'
    })

})

module.exports = app