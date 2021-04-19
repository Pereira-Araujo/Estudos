// Faça um programa para ler um valor inteiro (aceitar somente valores entre 1 e 10)
// e imprimir a tabuada de 1 a 10 do valor lido.

const tabuada = (valor) => {

  if (valor <= 10) {

    console.log(`Tabuada do ${valor}`);
    
    for (let i = 1; i <= 10; i++) {
      console.log(`${valor} x ${i} = ${i * valor}`);
    }
  } else {
    console.log("Por favor digite um valor entre 1 e 10");
  }
};
//teste
let input = prompt("Entre com um número para lhe mostrarmos a sua tabuada ");
tabuada(input);
