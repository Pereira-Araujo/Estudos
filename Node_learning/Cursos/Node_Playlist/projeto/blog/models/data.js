
const Sequelize = require('sequelize')

// Conexão c/ banco de dados MySql
const sequelize = new Sequelize('appblog','root', 'kadosh17',{
    host:'localhost',
    dialect:'mysql'
  })
  
  module.exports = {
      Sequelize: Sequelize,
      sequelize: sequelize
  }