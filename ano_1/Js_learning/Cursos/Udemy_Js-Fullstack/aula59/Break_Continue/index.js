
const numeros = [1,2,3,4,5,6,7,8,9,10]

for(let numero of numeros){

  if(numero===2){ 
    console.log('pulei o 2')
    continue   // pula o elemento
  }


  console.log(numero)
  if(numero === 7){
    console.log('para no 7')
    break //interrompe a contagem
  }

}