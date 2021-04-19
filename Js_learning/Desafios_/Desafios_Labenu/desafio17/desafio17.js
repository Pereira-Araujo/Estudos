/*
Escreva um programa em que, fornecido pelo usuário um angulo, mostre qual a classificação daquele ângulo. Opções de output:

Ângulo agudo (para ângulos menores que 90 graus)
Ângulo reto (para ângulos de 90 graus)
Ângulo obtuso (para ângulos entre 90 e 180 graus)
Ângulo raso (para ângulos de 180 graus)
*/

const classificacao =(angulo)=>{
 
    if(angulo < 90) {
        return "Ângulo agudo.";
      }
      if(angulo === 90) {
        return "Ângulo reto.";
      }
      if(angulo < 180) {
        return "Ângulo obtuso.";
      }
      
      return "Ângulo raso";
    
    }
    //teste
    console.log(classificacao(180))