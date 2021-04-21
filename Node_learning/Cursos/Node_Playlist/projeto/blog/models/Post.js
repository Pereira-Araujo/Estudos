const data  = require('./data')

const Post = data.sequelize.define('posts',{
    titulo:{
        type: data.Sequelize.STRING
       },
    conteudo:{
        type: data.Sequelize.TEXT
    }
})

// Post.sync({force:true})

module.exports = Post