// Se o número for divisível por 3 retorna Fizz
// Se o número for divisível por 5 retorna Buzz
// Se ambos retorna FizzBuzz
// Se a entrada não for número ou não se encaixar nas características acima retorna o próprio número

const fizzBuzz = (number) => {
  if (typeof number !== 'number') {
    return number
  } else {
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
    if (number % 3 === 0) return 'Fizz'
    if (number % 5 === 0) return 'Buzz'

    return number
  }
}

console.log(fizzBuzz(9))
