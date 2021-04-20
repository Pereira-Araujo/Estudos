// CRIANDO CONEXÃO E TABELAS NO MYSQL POR MEIO DO JS

// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('teste','root', 'kadosh17',{
//     host:'localhost',
//     dialect:'mysql'
// })


// // model = criando tabelas a partir do js

// const Postagem = sequelize.define('postagens', {
//     // campos
//   titulo:{
//       type: Sequelize.STRING
//   },
//   conteudo:{
//       type:Sequelize.TEXT
//   }
// })

// const Usuario = sequelize.define('usuarios',{
//     nome:{
//         type:Sequelize.STRING
//     },
//     sobrenome:{
//         type:Sequelize.STRING
//     },
//     idade:{
//         type:Sequelize.INTEGER
//     },
//     email:{
//         type:Sequelize.STRING
//     }

// })

// // inserindo valores 

// Postagem.create({
//     titulo: 'Titulo teste',
//     conteudo:'vazio ainda'
// })

// Usuario.create({
//     nome:'Adriano',
//     sobrenome:'Araujo',
//     idade:25,
//     email:'araujo@hotmail.com'

// })

// //sincronizando o model com o mysql

// // Postagem.sync({force:true})
// // Usuario.sync({force:true})


// sequelize.authenticate().then(()=>{
//     console.log('Conectado com sucesso')
// }).catch((error)=>{
//     console.log('Falha'+ error.message)
// })