/* Escreva um programa em que, fornecidos pelo usuário uma frase e um caracter, mostre quantas vezes o caracter apareceu na respectiva frase.
 */

const manyTimes = (phrase, letter) => {
  let index = 0
  let arrayRepeated = []
  let arrayLetters = phrase.split('')

  for (index; index <= arrayLetters.length; index++) {
    if (letter === arrayLetters[index]) {
      arrayRepeated.push(arrayLetters[index])
    }
  }

  console.log(
    `O caracter "${letter}" aparace exatas ${arrayRepeated.length} vezes`,
  )
}
//teste
manyTimes('Introdução à Programação', 'a')
