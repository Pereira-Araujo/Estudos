//atribuição via desestruturação(objeto)

const pessoa = {
  nome: 'Adriano',
  sobrenome: 'Araujo',
  idade: 15,
  endereco: {
    rua: 'virando ali',
    numero: '171',
  },
}

const { nome, sobrenome, idade } = pessoa

console.log(nome, sobrenome)
