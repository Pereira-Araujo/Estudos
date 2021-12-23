
const Sequelize = require('sequelize')

// Conexão c/ banco de dados MySql
// const sequelize = new Sequelize('{nome-do-banco-de-dados}','root', '{senha-mySql}',{
//     host:'localhost',
//     dialect:'mysql'
//   })

 
  module.exports = {
      Sequelize: Sequelize,
      sequelize: sequelize
  }