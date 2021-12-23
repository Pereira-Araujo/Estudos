/*
Faça uma função que receba um array de números e devolva um objeto que contenha as informações:
soma de todos os itens, quantidade de itens e multiplicação de todos os itens
*/

const tratandoArray = (array) => {
  let somaTotal = array.reduce((a, b) => a + b)
  let multiTotal = array.reduce((a, b) => a * b)

  let objeto = 
  {
    soma_itens: somaTotal,
    quantidade_itens: array.length,
    mutliplicacao_itens: multiTotal,
  }

  return objeto
}
//teste
let array = [2, 2, 2, 2]
console.log(tratandoArray(array))
