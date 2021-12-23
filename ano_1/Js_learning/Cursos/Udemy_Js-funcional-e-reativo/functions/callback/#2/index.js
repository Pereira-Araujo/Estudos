const fs = require('fs')
const path = require('path')

const way = path.join(__dirname, 'dados.md') // diretorio, nome do arquivo a ser acessado

function show(err, content){
    console.log(content.toString())
}

fs.readFile(way, show)