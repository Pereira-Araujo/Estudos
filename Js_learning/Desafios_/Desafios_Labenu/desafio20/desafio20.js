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