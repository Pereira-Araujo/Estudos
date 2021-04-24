/*
Faça uma função que receba um array de números e devolva um objeto que contenha as informações: 
maior número e menor número 
*/

const maiorMenor = (array) => {

    let menor = Math.min(...array)
    let maior = Math.max(...array)
    
    const objeto = {
      menor : menor,
      maior : maior
    }
    
    return objeto
    }
    
    const numeros = [1,2,3,4,5,6]
    console.log(maiorMenor(numeros))