/* 
Faça um programa para ler 10 números e armazenar em um array. 
Após isto, o programa deve ordenar os números no array em ordem crescente. 
Imprimir o array ordenado. 
*/

const crescente =(a,b,c,d,e,f,g,h,i,j)=>{

    let array = [a,b,c,d,e,f,g,h,i,j]
    
    return array.sort((x,y)=>{ // função anonima para ordenar numericamente ignorando o unicode
      return (x-y)
    })
    }
    

//teste
console.log(crescente(2, 3, 5, 6, 7, 8, 9, 10, 1, 4))
