// Escreva uma função que recebe um array de números e imprima no console o maior número e a média de todos os números. A média pode ser calculada dividindo a soma de todos os números pela quantidade de números.

function maiorNumeroEmedia(array) {
  let index = 0
  const media = []
  let total = 0

  const maiorNumero = Math.max(...array)

  for (index; index < array.length; index++) {
    total += array[index] / array.length
    media.push(total)
  }

  console.log(`O maior número do array é ${maiorNumero}\n 
   A média dos valores do array é ${Math.max(...media)}`)
}

//teste
const numeros = [10, 20, 10, 40]
maiorNumeroEmedia(numeros)
