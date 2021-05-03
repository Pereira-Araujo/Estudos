/*
Faça uma função que receba uma string e devolva um objeto com as informações: 
quantos caracteres a string possui, 
qual seu primeiro caracter e 
qual seu último caracter
*/

const desafio=(string)=>{

    let ultimaLetra = string.length
    
    const caracteristicas ={
      letras: string.length,
      primeiro:string[0],
      ultimo:string[ultimaLetra-1]
    }
    
    console.log(caracteristicas)
    
    
    }
    
    desafio('Labenu')