const data  = require('./data')

const Post = data.sequelize.define('posts',{
    titulo:{
        type: data.Sequelize.STRING
       },
    conteudo:{
        type: data.Sequelize.TEXT
    },
    autor:{
        type:data.Sequelize.STRING
    }
})

// Descomente a linha abaixo para criar as respectivas colunas no Banco de Dados local
// Post.sync({force:true})

module.exports = Post